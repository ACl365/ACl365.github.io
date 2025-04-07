// 'use client'; // Temporarily removed to test server component rendering

import Link from 'next/link';
import { ProjectCard } from '@/components/ProjectCard';
// import { motion } from 'framer-motion'; // Removed motion import
import { Code, Database, BrainCircuit, Cloud, Wrench, Map, BarChartHorizontalBig } from 'lucide-react'; // Icons for skills

// Placeholder data for featured projects - replace with actual data fetching later
const featuredProjects = [
  {
    slug: 'environmental-justice',
    title: 'Environmental Justice Analysis',
    description: 'Analyzed spatial patterns of environmental hazards and demographic factors in England using geospatial data and machine learning techniques to identify potential environmental justice disparities.',
    imageUrl: '/images/env-justice-lisa-clusters.png', // Updated image URL
    tags: ['Geospatial', 'Python', 'Data Analysis', 'Social Impact'],
    liveUrl: 'http://alexander-clarke.com/england-environmental-justice-analysis/', // Added live URL
    repoUrl: 'https://github.com/ACl365/england-environmental-justice-analysis', // Correct Repo URL
  },
  {
    slug: 'mimic-mlops',
    title: 'MIMIC MLOps Pipeline',
    description: 'Developed and deployed an MLOps pipeline using Kubeflow on GCP for predicting patient outcomes based on the MIMIC critical care database, focusing on reproducibility and monitoring.',
    imageUrl: '/images/imbalance_metrics_comparison.png', // Use single image URL
    tags: ['MLOps', 'Healthcare', 'Python', 'Kubeflow'],
    liveUrl: 'http://alexander-clarke.com/MIMIC_demo/', // Added live URL
    repoUrl: 'https://github.com/ACl365/MIMIC-demo', // Correct Repo URL
  },
  // Add more featured projects if needed
];

// More detailed skills summary for homepage
const skillCategories = [
  {
    name: 'Languages & Databases',
    icon: <Code size={20} className="mr-2" />,
    skills: ['Python (Pandas, Scikit-learn)', 'SQL (BigQuery)', 'NumPy', 'Statsmodels'], // More core Python libs + BigQuery
  },
  {
    name: 'ML & Data Analysis',
    icon: <BrainCircuit size={20} className="mr-2" />,
    skills: ['Predictive Modeling (Regression, Classification)', 'Clustering', 'Feature Engineering', 'Model Evaluation (SHAP)', 'A/B Testing'], // Key ML concepts & SHAP
  },
   {
    name: 'Geospatial Analysis',
    icon: <Map size={20} className="mr-2" />,
    skills: ['GeoPandas', 'PySAL', 'Spatial Statistics', 'QGIS'], // Removed (Conceptual)
  },
  {
    name: 'Cloud & MLOps',
    icon: <Cloud size={20} className="mr-2" />,
    skills: ['GCP (BigQuery, Storage)', 'MLflow', 'Docker', 'FastAPI', 'CI/CD (GitHub Actions)', 'Monitoring Principles'], // Added Storage, GitHub Actions explicitly
  },
  {
    name: 'Visualisation & BI',
    icon: <BarChartHorizontalBig size={20} className="mr-2" />,
    skills: ['Plotly', 'Streamlit', 'Power BI', 'Tableau', 'Matplotlib/Seaborn'], // Added Tableau back
  },
    {
    name: 'Advanced Techniques',
    icon: <Wrench size={20} className="mr-2" />,
    skills: ['Interpretable ML (SHAP)', 'Causal Inference (PSM)', 'Time-Series', 'LLM/RAG Exploration'], // Added Time-Series, PSM
  },
];
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

// Removed fadeInUp animation variant as motion components are removed

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-24">
      {/* Hero Section */}
      {/* Replaced motion.section with section */}
      <section
        className="mb-16 text-center md:mb-24 lg:mb-32"
      >
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Driving Environmental & Healthcare Impact with Data Science
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-400 md:text-xl">
          Applying machine learning, MLOps, and data analysis techniques to solve complex challenges in environmental science and healthcare.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#projects"
            className="text-base font-medium text-primary hover:underline dark:text-primary-light"
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
      {/* Note: ProjectCards inside still have their own whileInView animation */}
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
            <ProjectCard // ProjectCard links directly to liveUrl now
              key={project.slug} // Keep key for React list rendering
              // slug={project.slug} // Removed slug prop
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl} // Pass the single URL
              tags={project.tags}
              liveUrl={project.liveUrl} // Pass the liveUrl prop
              repoUrl={project.repoUrl} // Pass the repoUrl prop
            />
          ))}
        {/* </motion.div> */}
        </div> {/* Closing the simple div */}
      </section>

      {/* Skills/Expertise Snapshot */}
      {/* Replaced motion.section with section */}
      <section
        className="mb-16 md:mb-24 lg:mb-32"
      >
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.name} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-4 flex items-center text-lg font-semibold text-gray-800 dark:text-white">
                {category.icon}
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="rounded-md bg-primary/10 px-2.5 py-0.5 text-sm font-medium text-primary dark:bg-primary-light/15 dark:text-primary-light">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Me Snippet */}
      {/* Replaced motion.section with section */}
      <section
        className="mb-16 rounded-lg bg-gray-50 p-8 text-center dark:bg-gray-800/50 md:mb-24 lg:mb-32"
      >
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
      {/* Replaced motion.section with section */}
      <section
        className="text-center"
      >
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
          Let's Connect
        </h2>
        <p className="mx-auto mb-6 max-w-lg text-gray-600 dark:text-gray-400">
          Interested in collaborating or discussing potential opportunities? I'd love to hear from you.
        </p>
        <Link
          href="/contact" // Link to the Contact page (to be created)
          className="text-base font-medium text-primary hover:underline dark:text-primary-light"
        >
          Get In Touch
        </Link>
      </section>
    </div>
  );
}
