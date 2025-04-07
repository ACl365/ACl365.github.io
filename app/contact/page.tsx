import { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Linkedin, Github } from 'lucide-react';

export const metadata: Metadata = {
  title: "Contact Me | Alex's Portfolio", // Update with your name
  description: "Get in touch with Alex to discuss collaborations, opportunities, or data science.", // Update description
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:px-6 lg:py-24">
      <header className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Get In Touch
        </h1>
        <p className="mx-auto max-w-xl text-lg text-gray-600 dark:text-gray-400">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out through any of the channels below.
        </p>
      </header>

      <div className="mx-auto max-w-md">
        <div className="space-y-6">
          {/* Email */}
          <a
            href="mailto:alexanderclarke365@gmail.com"
            className="flex items-center rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
          >
            <Mail className="mr-4 h-6 w-6 text-primary dark:text-primary-light" />
            <div>
              <h2 className="font-semibold text-gray-800 dark:text-white">Email</h2>
              <p className="text-sm text-gray-600 hover:underline dark:text-gray-400">
                alexanderclarke365@gmail.com
              </p>
            </div>
          </a>


          {/* GitHub */}
          <Link
            href="https://github.com/ACl365" // Already set from footer
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
          >
            <Github className="mr-4 h-6 w-6 text-gray-700 dark:text-gray-300" />
            <div>
              <h2 className="font-semibold text-gray-800 dark:text-white">GitHub</h2>
              <p className="text-sm text-gray-600 hover:underline dark:text-gray-400">
                ACl365
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}