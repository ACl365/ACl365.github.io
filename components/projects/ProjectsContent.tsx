'use client'; // This component handles client-side animations

import { ProjectCard } from '@/components/ProjectCard';
import { motion } from 'framer-motion';

// Placeholder data - same as homepage for MVP. Replace/expand later.
// Ideally, fetch this using getAllProjectsFrontmatter() when MDX files are ready.
const projects = [
  {
    slug: 'environmental-justice', // Keep slug for key, even if not used for linking
    title: 'Environmental Justice Analysis',
    description: 'Leveraging geospatial data and ML to identify disparities.',
    imageUrl: '/images/propensity_scores_high_NO2.png',
    tags: ['Geospatial', 'Python', 'Data Analysis', 'Social Impact'],
    liveUrl: 'http://alexander-clarke.com/england-environmental-justice-analysis/',
  },
  {
    slug: 'mimic-mlops',
    title: 'MIMIC-IV MLOps Pipeline',
    description: 'Building a robust pipeline for clinical predictions.',
    imageUrl: '/images/imbalance_metrics_comparison.png',
    tags: ['MLOps', 'Healthcare', 'Python', 'Kubeflow'],
    liveUrl: 'http://alexander-clarke.com/MIMIC_demo/',
  },
  // Add more projects here later (e.g., the 4-5 smaller ones)
];

// Simple fade-in-up animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ProjectsContent() {
  // const projects = getAllProjectsFrontmatter(); // Use this when MDX is populated

  return (
    <> {/* Use fragment */}
      <motion.header
        className="mb-12 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          My Projects
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          Here are some of the projects I've worked on, showcasing my skills in data analysis, machine learning, MLOps, and more. Click on a card to view the live demo or analysis.
        </p>
      </motion.header>

      {/* Project cards already have their own animation via whileInView */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            // slug={project.slug} // Removed
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            tags={project.tags}
            liveUrl={project.liveUrl}
          />
        ))}
        {/* Add placeholders or message for future projects */}
      </div>
    </>
  );
}