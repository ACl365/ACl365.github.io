'use client'; // This component handles client-side animations

import Image from 'next/image';
import Link from 'next/link';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

// Placeholder skills data (reuse/adapt from homepage or define specifically for about page)
const detailedSkills = [
    { category: 'Data Science & Machine Learning', skills: ['Predictive Modeling', 'Classification', 'Regression', 'Clustering', 'NLP Basics', 'Time Series Analysis', 'Statistical Inference'] },
    { category: 'MLOps & Engineering', skills: ['Pipeline Automation (Kubeflow/Airflow)', 'Model Deployment', 'Monitoring', 'Docker', 'Kubernetes', 'CI/CD (GitHub Actions)', 'Experiment Tracking (MLflow)'] },
    { category: 'Programming & Databases', skills: ['Python (Pandas, NumPy, Scikit-learn)', 'SQL (PostgreSQL, BigQuery)', 'R (Basic)', 'Bash Scripting'] },
    { category: 'Geospatial Analysis', skills: ['GeoPandas', 'Rasterio', 'Shapely', 'PostGIS', 'QGIS'] },
    { category: 'Cloud Platforms', skills: ['AWS (SageMaker, S3, EC2)', 'GCP (Vertex AI, GCS, Compute Engine)', 'Azure (ML Studio)'] },
    { category: 'Tools & Visualization', skills: ['Git', 'Jupyter', 'VS Code', 'Matplotlib', 'Seaborn', 'Plotly', 'Tableau (Basic)'] },
];

// Simple fade-in-up animation variant (can share this via a utils file later)
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutContent() {
  return (
    <> {/* Use fragment as we don't need the outer div from the original page */}
      <motion.header
        className="mb-12 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          About Me
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          My journey in data science, my technical expertise, and my passion for solving impactful problems.
        </p>
      </motion.header>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-16">
        {/* Left Column: Photo and Resume */}
        <motion.aside
          className="md:col-span-1"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.2 }} // Slight delay
        >
          <div className="sticky top-24"> {/* Sticky positioning */}
            <div className="mb-8 overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/your-professional-photo.jpg" // **ACTION:** Replace with your photo path in /public/images
                alt="Professional headshot of Alex Clarke" // **ACTION:** Update alt text
                width={400}
                height={400}
                className="aspect-square w-full object-cover"
                priority // Load photo quickly
              />
            </div>
            <Link
              href="/path/to/your-resume.pdf" // **ACTION:** Replace with path to your resume PDF in /public
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Link>
          </div>
        </motion.aside>

        {/* Right Column: Content */}
        <motion.div
          className="md:col-span-2"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.4 }} // Slightly more delay
        >
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">My Story &amp; Philosophy</h2>
            <div className="prose prose-lg max-w-none dark:prose-invert prose-blue">
              {/* **ACTION:** Replace this with your personal story and professional philosophy */}
              <p>
                Driven by a fascination with uncovering patterns and insights within data, I embarked on a journey into the world of data science...
              </p>
              <p>
                My philosophy centers around not just building models, but understanding the context, ensuring ethical considerations, and delivering solutions that provide tangible value...
              </p>
              {/* Add more paragraphs as needed */}
            </div>
          </section>
          {/* Technical Skills section is now correctly inside motion.div */}
          <section>
            <h2 className="mb-6 text-2xl font-semibold text-gray-800 dark:text-white">Technical Skills</h2>
            <div className="space-y-6">
              {detailedSkills.map((category) => (
                <div key={category.category}>
                  <h3 className="mb-3 text-lg font-medium text-gray-700 dark:text-gray-300">{category.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="rounded-md bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </>
  );
}