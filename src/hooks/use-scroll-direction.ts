import { useCallback, useEffect, useRef, useState } from "react";

export function useScrollDirection() {
	const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
	const [isAtTop, setIsAtTop] = useState(true);
	const lastScrollY = useRef(0);

	const updateScrollDirection = useCallback(() => {
		const scrollY = window.scrollY;
		const direction = scrollY > lastScrollY.current ? "down" : "up";

		setIsAtTop(scrollY < 10);

		if (
			direction !== scrollDirection &&
			Math.abs(scrollY - lastScrollY.current) > 10
		) {
			setScrollDirection(direction);
		}
		lastScrollY.current = scrollY > 0 ? scrollY : 0;
	}, [scrollDirection]);

	useEffect(() => {
		lastScrollY.current = window.scrollY;

		const handleScroll = () => {
			window.requestAnimationFrame(updateScrollDirection);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [updateScrollDirection]);

	return { scrollDirection, isAtTop };
}
