# Project Overview

The PayStell 💫 marketing landing page serves as a key platform to introduce **PayStell**, a payment solution powered by the Stellar blockchain. Designed with a focus on the LATAM market, PayStell aims to provide small businesses with a secure, fast, and cost-effective payment system. 

The primary goal of this landing page is to invite small businesses to adopt PayStell as a payment method in their stores. Each business will have access to a customized payment gateway with its own branding, allowing them to define transaction amounts and accept payments in their local currency equivalent. By emphasizing professionalism, security, and innovation, the landing page seeks to position PayStell as the preferred choice for LATAM merchants, fostering trust and driving adoption.

# Core Functionalities

1. **Hero Section**:
   - A professional and visually captivating introduction to PayStell with the tagline: 
     **"Transform the way you accept payments—secure, fast, and reliable with PayStell 💫."**
   - A call-to-action (CTA) encouraging visitors to:
     - "Get Started"
     - "Learn More"
     - "Request a Demo."

2. **Features Section**:
   - Showcase innovative features:
     - Customizable payment gateways for small businesses.
     - Support for local currencies in LATAM with real-time Stellar exchange rates.
     - Minimal transaction fees for cost-effectiveness.
     - Smooth integrations with local and online payment systems.
     - Intuitive dashboards for merchants to track and manage payments.
     - Secure, blockchain-powered transactions.

3. **How It Works Section**:
   - Highlight a 3-step onboarding process:
     - **Step 1**: Register and set up a customized gateway with your branding.
     - **Step 2**: Integrate PayStell with your store and set payment parameters.
     - **Step 3**: Accept payments in local currency via Stellar-powered transactions.

4. **Benefits Section**:
   - Focus on merchant benefits:
     - Localized solutions tailored to LATAM.
     - Secure blockchain transactions, creating trust and reliability.
     - Competitive edge with branded, seamless payment solutions.
     - Low operating costs with transparent pricing.

5. **Dynamic Features**:
   - Include smooth animations and subtle transitions to emphasize professionalism and innovation.
   - Ensure responsiveness for mobile, tablet, and desktop views.

6. **Testimonials/Case Studies**:
   - Present testimonials from pilot users or early adopters in LATAM markets.

7. **Pricing Section**:
   - Clearly outline pricing tiers with an emphasis on affordability for small businesses.

8. **CTA Footer**:
   - Strong final call-to-action linking to sign-up forms, demo requests, and FAQs.

# Documentation

The landing page will include links to:
- **Merchant Onboarding Guide**: A step-by-step walkthrough for setting up and integrating PayStell.
- **API Documentation**: Technical guides for developers to integrate custom features.
- **FAQ Section**: Answering common questions about blockchain, Stellar, and PayStell.

Additionally, a Markdown file with instructions to run the landing page will be provided in the project's repository.

# Current File Structure

.
├── LICENSE
├── README.md
├── biome.json
├── components.json
├── instructions
│   └── instructions.md
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src
│   ├── app
│   │   ├── favicon.ico
│   │   ├── fonts
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components
│   │   ├── error-boundary.tsx
│   │   ├── layout
│   │   ├── sections
│   │   └── ui
│   ├── hooks
│   │   └── use-scroll-direction.ts
│   ├── lib
│   │   └── utils.ts
│   ├── styles
│   │   └── theme-config.css
│   └── types
│       └── index.ts
├── tailwind.config.ts
└── tsconfig.json

# Tech Stack

- **Frontend Framework**: Next.js 14.
- **Language**: TypeScript for type safety and robust development.
- **Styling**:
  - TailwindCSS for responsive and modern design.
  - shadcn/ui for pre-built components.
  - Class Variance Authority for managing design variants.
- **UI Libraries**:
  - Radix UI for accessible UI primitives.
  - Lucide for scalable and customizable icons.
- **Additional Features**:
  - Subtle animations and transitions implemented using Radix UI and Tailwind utilities.
  - Stellar SDK to demonstrate payment capabilities.

# Key Tasks

1. **Set Up Project Frontend**:
   - Initialize the frontend using **Next.js**.
   - Integrate TypeScript, TailwindCSS, shadcn/ui, and other UI libraries.

2. **Add Instructions for Setup**:
   - Include a Markdown file with steps to run and deploy the landing page.

3. **Configure Radix UI Theme**:
   - Set up light and dark modes for the Radix UI components.
   - Ensure the theme switches dynamically based on the TailwindCSS `dark` mode configuration.
   - Utilize the existing Tailwind config colors to maintain design consistency across the components and site.

4. **Design & Animation**:
   - Focus on a professional and secure design aesthetic.
   - Add subtle, smooth animations for transitions between sections.

5. **CTA Optimization**:
   - Implement responsive CTAs to maximize sign-ups and demo requests.

6. **Local Market Adaptation**:
   - Highlight LATAM-specific solutions, such as local currency support.

# Goal

The landing page aims to establish trust and innovation while inviting small businesses in LATAM to adopt PayStell as their payment gateway. Each business will have a customized and branded payment gateway, enabling transactions in local currencies and fostering a seamless payment experience.