import Link from 'next/link';
import { ProjectCard } from '@/components/ProjectCard';
import { motion } from 'framer-motion';
// import { ArrowRight } from 'lucide-react'; // Example icon

// Placeholder data for featured projects - replace with actual data fetching later
const featuredProjects = [
  {
    slug: 'environmental-justice',
    title: 'Environmental Justice Analysis',
    description: 'Leveraging geospatial data and ML to identify disparities.',
    imageUrl: '/images/placeholder-project-1.jpg', // Replace with actual image path
    tags: ['Geospatial', 'Python', 'Data Analysis', 'Social Impact'],
  },
  {
    slug: 'mimic-mlops',
    title: 'MIMIC-IV MLOps Pipeline',
    description: 'Building a robust pipeline for clinical predictions.',
    imageUrl: '/images/placeholder-project-2.jpg', // Replace with actual image path
    tags: ['MLOps', 'Healthcare', 'Python', 'Kubeflow'],
  },
  // Add more featured projects if needed
];

// Placeholder skills - replace or enhance later
const skills = ['Data Analysis', 'Machine Learning', 'MLOps', 'Python', 'SQL', 'Geospatial Analysis', 'Cloud (AWS/GCP)', 'Docker', 'Kubernetes'];

// Animation variants for staggering children
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Adjust delay between children
    },
  },
};

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-24">
      {/* Hero Section */}
      <section className="mb-16 text-center md:mb-24 lg:mb-32">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Data Science for Environmental & Healthcare Impact
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-400 md:text-xl">
          Applying machine learning, MLOps, and data analysis techniques to solve complex challenges in environmental science and healthcare.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#projects"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          >
            View Projects
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-900"
          >
            Learn More About Me
            {/* <ArrowRight className="ml-2 h-5 w-5" /> */}
          </Link>
        </div>
        {/* Optional: Add a subtle visual element here later */}
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="mb-16 md:mb-24 lg:mb-32 scroll-mt-20">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Featured Projects
        </h2>
        {/* <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Trigger when 10% is visible
        > */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12"> {/* Reverted to simple div */}
          {featuredProjects.map((project) => (
            <ProjectCard // ProjectCard already has its own variants for individual animation
              key={project.slug}
              slug={project.slug}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              tags={project.tags}
            />
          ))}
        {/* </motion.div> */}
        </div> {/* Closing the simple div */}
      </section>

      {/* Skills/Expertise Snapshot */}
      <section className="mb-16 md:mb-24 lg:mb-32">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Skills & Expertise
        </h2>
        <div className="flex flex-wrap justify-center gap-3 text-center">
          {skills.map((skill) => (
            <span key={skill} className="rounded-full border border-gray-300 bg-gray-50 px-4 py-1.5 text-sm font-medium text-gray-600 shadow-sm transition-colors hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
              {skill}
            </span>
          ))}
          {/* Consider a more visual representation later */}
        </div>
      </section>

      {/* About Me Snippet */}
      <section className="mb-16 rounded-lg bg-gray-50 p-8 text-center dark:bg-gray-800/50 md:mb-24 lg:mb-32">
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
          About Me
        </h2>
        <p className="mx-auto mb-6 max-w-xl text-gray-600 dark:text-gray-400">
          Driven by a passion for using data to understand and improve the world around us. Currently exploring intersections between technology, environmental sustainability, and healthcare equity.
        </p>
        <Link
          href="/about" // Link to the full About page (to be created)
          className="text-base font-medium text-primary hover:underline dark:text-primary-light"
        >
          Read My Full Story &rarr;
        </Link>
      </section>

      {/* Call to Action (Contact) */}
      <section className="text-center">
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
          Let's Connect
        </h2>
        <p className="mx-auto mb-6 max-w-lg text-gray-600 dark:text-gray-400">
          Interested in collaborating or discussing potential opportunities? I'd love to hear from you.
        </p>
        <Link
          href="/contact" // Link to the Contact page (to be created)
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900"
        >
          Get In Touch
        </Link>
      </section>
    </div>
  );
}
