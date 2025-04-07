'use client'; // This component handles client-side animations

import Image from 'next/image';
import Link from 'next/link';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

// Placeholder skills data (reuse/adapt from homepage or define specifically for about page)
const detailedSkills = [
    { category: 'Languages & Databases', skills: ['Python (Pandas, NumPy, Scikit-learn, Statsmodels, GeoPandas, FastAPI, Plotly, Matplotlib, Seaborn, Streamlit)', 'SQL (Advanced Queries, Google BigQuery, PostgreSQL/SQL Server exposure)'] },
    { category: 'Data Analysis & Machine Learning', skills: ['Statistical Modeling', 'Predictive Modeling (Regression, Classification: Logistic Regression, Random Forest, Gradient Boosting)', 'Clustering (K-Means)', 'Feature Engineering', 'Time-Series Analysis', 'Experimentation (A/B Testing)', 'Model Evaluation & Interpretation (SHAP)', 'Imbalance Handling (SMOTE)'] },
    { category: 'Geospatial Analysis', skills: ['GeoPandas', 'PySAL', 'PostGIS (Exposure via SQL)', 'QGIS (Conceptual)'] }, // Combined relevant skills
    { category: 'Cloud Platforms & MLOps', skills: ['Google Cloud Platform (GCP) (BigQuery, Cloud Storage)', 'MLflow (Experiment Tracking, Model Logging)', 'Docker (Containerisation)', 'FastAPI (API Deployment)', 'CI/CD Pipeline Design (GitHub Actions - conceptual/basic)', 'Monitoring Strategy (Data Drift, Concept Drift, Operational)'] }, // Merged Cloud & MLOps
    { category: 'Data Visualisation & BI', skills: ['Power BI', 'Looker', 'Tableau', 'Matplotlib', 'Seaborn', 'Plotly', 'Streamlit'] }, // Added Streamlit
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
              <p>
                My journey to data science began with a Medical Physics and Bioengineering background. I focused early in my HealthTech career on applying quantitative analysis to improve clinical outcomes. I spent five years developing predictive models and data pipelines from device and patient data, with direct impact on clinical trial efficiency and medical device safety. This experience further cemented my understanding of how data could address significant real-world issues in complex, regulated environments.
              </p>
              <p>
                Seeking to apply data insights in a different domain, I moved into a role with a focus on People Analytics and internal communication. Within the role, I used SQL and BI tools to analyse engagement and platform metrics, providing insights that guided the optimisation of communications strategies and improved employee experience through data-driven mechanisms for feedback. This experience broadened my knowledge of the application of data to understand and influence organisational dynamics.
              </p>
              <p>
                Inspired by a desire to expand my technical expertise and develop more resilient, scalable applications using new methods, I recently completed an immersive Data Analytics bootcamp. This formal training, combined with my independent project work—researching environmental justice through geospatial analysis and developing an MLOps pipeline for healthcare prediction—is my ongoing field of study. I enjoy utilising state-of-the-art machine learning, MLOps best practices (including Docker, MLflow, and CI/CD paradigms), and techniques such as interpretable ML (SHAP) to solve complex problems, particularly where technology intersects with environmental sustainability and healthcare equity.
              </p>
              <p>
                My guiding principle is to offer complete, efficient solutions. I am dedicated to thoroughly understanding the context of the issue, developing models that are not only accurate but also interpretable and sustainable, and ensuring that data insights translate into measurable results and responsible innovation. I enjoy multidisciplinary collaboration and anticipate applying my skills to a challenging mid-level role where I can contribute to meaningful projects and continue to grow professionally.
              </p>
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