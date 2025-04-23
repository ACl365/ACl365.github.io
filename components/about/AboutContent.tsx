'use client'; // This component handles client-side animations

import Image from 'next/image';
import Link from 'next/link';
import {
  Download, Code, BrainCircuit, Map, Cloud, BarChartHorizontalBig, Wrench, FlaskConical // Added skill icons
} from 'lucide-react';
import { motion } from 'framer-motion';

// Placeholder skills data (reuse/adapt from homepage or define specifically for about page)
const detailedSkills = [
    { category: 'Languages & Databases', skills: ['Python (Data Science Stack: Pandas, NumPy, Scikit-learn, Statsmodels, GeoPandas, Plotly etc.)', 'Python (Web/API: FastAPI, Streamlit)', 'SQL (Advanced Queries, Google BigQuery, PostgreSQL/SQL Server exposure)'] }, // Grouped Python libs
    { category: 'Data Analysis & Machine Learning', skills: ['Statistical Modeling', 'Predictive Modeling', 'Clustering (K-Means)', 'Feature Engineering', 'Time-Series Analysis', 'Experimentation (A/B Testing)', 'Model Evaluation & Interpretation (SHAP)', 'Imbalance Handling (SMOTE)'] }, // Removed examples from Predictive Modeling
    { category: 'Geospatial Analysis', skills: ['GeoPandas', 'PySAL', 'PostGIS', 'QGIS'] }, // Removed qualifiers
    { category: 'Cloud Platforms & MLOps', skills: ['Google Cloud Platform (GCP) (BigQuery, Cloud Storage)', 'MLflow (Experiment Tracking, Model Logging)', 'Docker (Containerisation)', 'FastAPI (API Deployment)', 'CI/CD Pipeline Design (GitHub Actions)', 'Monitoring Strategy (Data Drift, Concept Drift, Operational)'] }, // Removed qualifier from CI/CD
    { category: 'Data Visualisation & BI', skills: ['BI Platforms (Power BI, Looker, Tableau)', 'Python Viz (Matplotlib, Seaborn, Plotly)', 'Streamlit'] }, // Grouped BI/Viz tools
    { category: 'Methodologies & Tools', skills: ['ETL/ELT Processes', 'Data Wrangling', 'Stakeholder Management', 'Agile Methodologies', 'Version Control (Git/GitHub)', 'Jupyter', 'VS Code'] }, // Added common tools
    { category: 'Advanced Techniques & Emerging AI', skills: ['Interpretable ML (SHAP)', 'Causal Inference Methods (Propensity Score Matching)', 'LLM/RAG Exploration'] }
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
                src="/images/profile_pic.jpg"
                alt="Professional headshot of Alex Clarke"
                width={400}
                height={400}
                className="aspect-square w-full object-cover"
                priority // Load photo quickly
              />
            </div>
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
              <p className="mb-6">
                My path to data science came from a passion for quantitative analysis and having the capability of addressing valuable problems. Starting off with a background in Medical Physics and Bioengineering, I first applied these abilities in the HealthTech sector, conducting detailed data analysis, designing predictive models, and analyzing clinical trial outcomes – gaining experience in pulling useful information from nuanced data.
              </p>
              <p className="mb-6">
                Driven by a necessity to develop more comprehensive and scalable solutions, I grew my expertise along the entire data lifecycle, from exploratory data analysis to deployment. This encompassed learning Machine Learning Operations (MLOps) patterns – such as cloud-based data pipelines (GCP) and model monitoring. I also have expertise in advanced techniques for use on a range of issues, including geospatial analysis to discover spatial patterns and interpretable ML (SHAP) to build trust in predictions.
              </p>
              <p className="mb-6">
                While I do have a specific interest and great experience in applying data analysis and machine learning in environmental science and healthcare, my interest is broader in applying data effectively to resolve challenging problems wherever they are to be found. My rule of thumb is to develop solutions – from deep analysis, modelling, or dashboards – that are technically sound, efficient, readable, and actionable. I keep exploring deeper techniques, including causal inference (PSM) and LLMs/RAG, to enhance data analysis capability and unlock wider understanding in various application domains.
              </p>
            </div>
          </section>
        </motion.div>
      </div>
      <motion.section
        className="mt-12 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ delay: 0.6 }} // Add a delay
      >
        <div className="prose prose-lg max-w-none dark:prose-invert prose-blue">
          <p className="mb-6">
            Explore my projects to see how I apply these principles, or reach out to discuss potential collaborations.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/projects" className="inline-block rounded-md bg-primary px-6 py-3 text-lg font-semibold text-white shadow-md transition-colors hover:bg-primary-dark dark:bg-primary-light dark:hover:bg-primary">
              [ View Projects ]
            </Link>
            <Link href="/contact" className="inline-block rounded-md border border-primary px-6 py-3 text-lg font-semibold text-primary shadow-md transition-colors hover:bg-primary hover:text-white dark:border-primary-light dark:text-primary-light dark:hover:bg-primary-light dark:hover:text-gray-900">
              [ Contact Me ]
            </Link>
          </div>
        </div>
      </motion.section>
    </>
  );
}