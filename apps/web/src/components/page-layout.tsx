"use client";

import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { ScrollToTop } from "./ui/scroll-to-top";
import { AccessibilityMenu } from "./ui/accessibility-menu";
import { ErrorBoundary } from "./ui/error-boundary";
import { PageTransition } from "./ui/page-transition";

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <ErrorBoundary>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />

        {/* Floating UI Elements */}
        <ScrollToTop />
        <AccessibilityMenu />
      </div>
    </ErrorBoundary>
  );
}
