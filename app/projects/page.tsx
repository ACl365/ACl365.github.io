// This remains a Server Component to handle metadata export
import { Metadata } from 'next';
import ProjectsContent from '@/components/projects/ProjectsContent'; // Import the new client component

// Export metadata from the Server Component
export const metadata: Metadata = {
  title: "Projects | Alex's Portfolio", // Update with your name
  description: "A selection of data science projects by Alex, focusing on MLOps, environmental science, and healthcare.", // Update description
};

// Render the Client Component which contains the actual page content and animations
export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:px-6 lg:py-24">
      <ProjectsContent />
    </div>
  );
}