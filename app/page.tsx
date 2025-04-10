'use client'; // Re-enabled for Framer Motion

import Link from 'next/link';
import { ProjectCard } from '@/components/ProjectCard';
import { motion } from 'framer-motion'; // Re-enabled motion import
import { Code, Database, BrainCircuit, Cloud, Wrench, Map, BarChartHorizontalBig } from 'lucide-react'; // Icons for skills
import HeroBackgroundAnimation from '@/components/HeroBackgroundAnimation'; // Import the new component

// Placeholder data for featured projects - replace with actual data fetching later
const featuredProjects = [
  {
    slug: 'england-environmental-justice-analysis', // Corrected slug
    title: 'Environmental Justice Analysis',
    description: 'Built an end-to-end geospatial & ML pipeline (Python, GeoPandas, Scikit-learn, PySAL) applying spatial statistics, clustering, and predictive modelling to analyse environmental justice disparities in the UK.',
    imageUrl: '/images/env-justice-lisa-clusters.png', // Updated image URL
    tags: ['Geospatial', 'Python', 'Data Analysis', 'Social Impact'],
    liveUrl: 'http://alexander-clarke.com/england-environmental-justice-analysis/', // Added live URL
    repoUrl: 'https://github.com/ACl365/england-environmental-justice-analysis', // Correct Repo URL
  },
  {
    slug: 'MIMIC-demo', // Corrected slug
    title: 'MIMIC MLOps Pipeline',
    description: 'Engineered an MLOps pipeline PoC (Python, Scikit-learn, MLflow, Docker, FastAPI) using MIMIC data for predicting hospital readmissions, focusing on reproducibility, experiment tracking, and deployment.',
    imageUrl: '/images/imbalance_metrics_comparison.png', // Use single image URL
    tags: ['Healthcare', 'Readmission Prediction', 'Imbalance Handling', 'SHAP'], // Updated tags to avoid description overlap
    liveUrl: 'http://alexander-clarke.com/MIMIC_demo/', // Added live URL
    repoUrl: 'https://github.com/ACl365/MIMIC-demo', // Correct Repo URL
  },
  {
    slug: 'clv-segmentation-dashboard', // Keep slug for consistency unless specified otherwise
    title: 'Online Retail CLV Analysis', // Updated title from README
    description: 'Analysed the classic Online Retail dataset (2010-2011) using RFM segmentation and probabilistic models (BG/NBD, Gamma-Gamma) to predict Customer Lifetime Value. Includes an interactive dashboard.', // Updated description from README (UK spelling)
    imageUrl: '/images/clv_segementation_deep_dive.png', // Relative image path
    tags: ['Dashboard', 'CLV', 'Streamlit', 'Data Viz'], // Inferred tags
    liveUrl: 'https://clv-dashboard-alexander.onrender.com/', // Provided live URL
    repoUrl: 'https://github.com/ACl365/online-retail-clv-baseline' // Added repo URL
  },
  // Add more featured projects if needed
];

// More detailed skills summary for homepage
const skillCategories = [
  {
    name: 'Languages & Databases',
    icon: <Code size={24} className="mr-2 text-primary dark:text-primary-light" />, // Increased size & colored icon
    skills: ['Python (Pandas, Scikit-learn)', 'SQL (BigQuery)', 'NumPy', 'Statsmodels'], // More core Python libs + BigQuery
  },
  {
    name: 'ML & Data Analysis',
    icon: <BrainCircuit size={24} className="mr-2 text-primary dark:text-primary-light" />, // Increased size & colored icon
    skills: ['Predictive Modeling (Regression, Classification)', 'Clustering', 'Feature Engineering', 'Model Evaluation (SHAP)', 'A/B Testing'], // Key ML concepts & SHAP
  },
   {
    name: 'Geospatial Analysis',
    icon: <Map size={24} className="mr-2 text-primary dark:text-primary-light" />, // Increased size & colored icon
    skills: ['GeoPandas', 'PySAL', 'Spatial Statistics', 'QGIS'], // Removed (Conceptual)
  },
  {
    name: 'Cloud & MLOps',
    icon: <Cloud size={24} className="mr-2 text-primary dark:text-primary-light" />, // Increased size & colored icon
    skills: ['GCP (BigQuery, Storage)', 'MLflow', 'Docker', 'FastAPI', 'CI/CD (GitHub Actions)', 'Monitoring Principles'], // Added Storage, GitHub Actions explicitly
  },
  {
    name: 'Visualisation & BI',
    icon: <BarChartHorizontalBig size={24} className="mr-2 text-primary dark:text-primary-light" />, // Increased size & colored icon
    skills: ['Plotly', 'Streamlit', 'Power BI', 'Tableau', 'Matplotlib/Seaborn'], // Added Tableau back
  },
    {
    name: 'Advanced Techniques',
    icon: <Wrench size={24} className="mr-2 text-primary dark:text-primary-light" />, // Increased size & colored icon
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

// Animation variant for individual items fading in
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-24">
      {/* Hero Section */}
      <motion.section
        className="relative mb-16 text-center md:mb-24 lg:mb-32 overflow-hidden" // Added relative positioning and overflow hidden
        initial="hidden"
        animate="visible"
        variants={fadeInUp} // Apply fade-in to the whole section
      >
        <HeroBackgroundAnimation /> {/* Add the animation component */}
        {/* Wrap content in a relative div with z-index */}
        <div className="relative z-10">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Innovating Environmental & Healthcare Solutions Through Data Science
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
        </div> {/* Close the z-10 wrapper */}
        {/* Optional: Add a subtle visual element here later */}
      </motion.section>

      {/* Featured Projects Section */}
      {/* Note: ProjectCards inside still have their own whileInView animation */}
      <motion.section id="projects" className="mb-16 md:mb-24 lg:mb-32 scroll-mt-20">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Featured Projects
        </h2>
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Trigger when 10% is visible
        >
        {/* Removed the extra div wrapper */}
          {featuredProjects.map((project) => (
            <ProjectCard // ProjectCard links directly to liveUrl now
              key={project.slug} // Keep key for React list rendering
              slug={project.slug} // Pass slug for internal linking
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl} // Pass the single URL
              tags={project.tags}
              // liveUrl={project.liveUrl} // Remove liveUrl for homepage cards, use slug instead
              repoUrl={project.repoUrl} // Pass the repoUrl prop
            />
          ))}
        </motion.div>
        {/* Removed the extra closing div */}
      </motion.section>

      {/* Skills/Expertise Snapshot */}
      <motion.section
        className="mb-16 rounded-lg bg-gradient-to-br from-white via-secondary to-white py-12 dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900 md:mb-24 lg:mb-32 lg:py-16" // Added padding and subtle gradient
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer} // Stagger skill categories
        viewport={{ once: true, amount: 0.1 }}
      >
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <motion.div key={category.name} variants={fadeInUp} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:shadow-primary/20">
              <h3 className="mb-4 flex items-center text-lg font-semibold text-gray-800 dark:text-white">
                {category.icon}
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="rounded-md bg-primary/10 px-2.5 py-0.5 text-sm font-medium text-primary transition-colors duration-200 hover:bg-primary hover:text-white dark:bg-primary-light/15 dark:text-white dark:hover:bg-primary-light dark:hover:text-gray-900"> {/* Changed dark:text-primary-light to dark:text-white */}
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* About Me Snippet */}
      <motion.section
        className="mb-16 rounded-lg bg-gray-50 p-8 text-center dark:bg-gray-800/50 md:mb-24 lg:mb-32"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.2 }}
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
      </motion.section>

      {/* Call to Action (Contact) */}
      <motion.section
        className="text-center"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.2 }}
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
      </motion.section>
    </div>
  );
}
