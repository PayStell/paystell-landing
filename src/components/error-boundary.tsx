"use client";

import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
	children: ReactNode;
	fallback?: ReactNode;
}

interface State {
	hasError: boolean;
	error: Error | null;
	errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
	public state: State = {
		hasError: false,
		error: null,
		errorInfo: null,
	};

	public static getDerivedStateFromError(): State {
		return { hasError: true, error: null, errorInfo: null };
	}

	public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		// Log error to an error reporting service
		this.logErrorToService(error, errorInfo);
		
		// Set error state
		this.setState({
			hasError: true,
			error: error,
			errorInfo: errorInfo
		});
	}

	private logErrorToService(error: Error, errorInfo: ErrorInfo): void {
		// Replace console.error with proper error logging
		if (process.env.NODE_ENV === 'development') {
			console.error('Error caught by boundary:', {
				error: error,
				componentStack: errorInfo.componentStack
			});
		} else {
			// TODO: Implement production error logging service
			// Examples: Sentry, LogRocket, etc.
		}
	}

	public render() {
		if (this.state.hasError) {
			return (
				this.props.fallback || (
					<div className="flex min-h-screen items-center justify-center">
						<div className="text-center">
							<h2 className="text-2xl font-bold">Something went wrong</h2>
							<p className="mt-2 text-muted-foreground">
								Please try refreshing the page
							</p>
						</div>
					</div>
				)
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
