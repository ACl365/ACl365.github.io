import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Me | Alex\'s Portfolio', // Update with your name
  description: 'Learn more about my background, skills, and passion for data science.', // Update description
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <header className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
          About Me
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400 md:text-xl">
          My journey into the world of data science and its applications.
        </p>
      </header>

      <div className="prose prose-lg mx-auto max-w-3xl dark:prose-invert prose-blue">
        {/* Optional: Add a professional photo */}
        {/* <div className="mb-8 flex justify-center">
          <Image
            src="/images/your-photo.jpg" // Replace with your photo path
            alt="A photo of Alex" // Update alt text
            width={200}
            height={200}
            className="rounded-full shadow-md"
            priority
          />
        </div> */}

        <h2>My Background</h2>
        <p>
          Introduce yourself here. Talk about your education, key experiences, and what led you to data science.
          Mention your focus areas like environmental science and healthcare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <h2>My Philosophy & Approach</h2>
        <p>
          Discuss your approach to problem-solving. What principles guide your work? Why are you passionate about using data for impact?
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>

        <h2>Skills & Expertise</h2>
        <p>
          You can reiterate or expand on the skills mentioned on the homepage. Maybe group them or provide more context.
          Example: My technical toolkit includes Python (Pandas, NumPy, Scikit-learn, GeoPandas), SQL, cloud platforms (AWS SageMaker, GCP Vertex AI), MLOps tools (Docker, Kubernetes, Kubeflow), and data visualization libraries (Matplotlib, Seaborn, Plotly).
        </p>
        <ul>
          <li>Data Analysis & Visualization</li>
          <li>Machine Learning (Supervised & Unsupervised)</li>
          <li>MLOps & Pipeline Automation</li>
          <li>Geospatial Data Analysis</li>
          <li>Cloud Computing (AWS/GCP focus)</li>
          {/* Add more skills */}
        </ul>

        <h2>Beyond the Code</h2>
        <p>
          Share a little about your interests outside of work if you're comfortable. This helps humanize your profile.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <h2>Get In Touch</h2>
        <p>
          Encourage visitors to connect. You can link to your contact page or provide direct links.
          Feel free to reach out via <Link href="/contact">the contact page</Link> or connect with me on{' '}
          <Link href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="font-medium hover:underline">LinkedIn</Link>.
        </p>

        {/* Optional: Link to download Resume/CV */}
        {/* <div className="mt-8 text-center">
          <Link
            href="/path/to/your-resume.pdf" // Replace with actual path
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          >
            Download My Resume/CV
          </Link>
        </div> */}
      </div>
    </div>
  );
}