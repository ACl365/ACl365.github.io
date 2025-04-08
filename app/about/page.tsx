// This remains a Server Component to handle metadata export
import { Metadata } from 'next';
import AboutContent from '@/components/about/AboutContent'; // Import the new client component

// Export metadata from the Server Component
export const metadata: Metadata = {
  title: "About Me | Alexander's Portfolio", // Update with your name
  description: "Learn more about Alexander's background, skills, and approach to data science.", // Update description
};

// Render the Client Component which contains the actual page content and animations
export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:px-6 lg:py-24">
      <AboutContent />
    </div>
  );
}