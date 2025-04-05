import type { Metadata } from 'next';
import Link from 'next/link';
// import { Mail, Linkedin, Github } from 'lucide-react'; // Optional icons

export const metadata: Metadata = {
  title: 'Contact Me | Alex\'s Portfolio', // Update with your name
  description: 'Get in touch to discuss collaborations, opportunities, or just say hello.', // Update description
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <header className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
          Contact Me
        </h1>
        <p className="mx-auto max-w-xl text-lg text-gray-600 dark:text-gray-400 md:text-xl">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
      </header>

      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-12 md:grid-cols-2">
        {/* Contact Information */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Direct Contact</h2>
          <p className="text-gray-600 dark:text-gray-400">
            The best way to reach me is via email or LinkedIn.
          </p>
          <div className="space-y-4">
            <a
              href="mailto:your.email@example.com" // Replace with your email
              className="flex items-center gap-3 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              {/* <Mail className="h-5 w-5 flex-shrink-0" /> */}
              <span className="font-medium">your.email@example.com</span> {/* Replace */}
            </a>
            <Link
              href="https://linkedin.com/in/your-linkedin" // Replace with your LinkedIn profile
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              {/* <Linkedin className="h-5 w-5 flex-shrink-0" /> */}
              <span className="font-medium">LinkedIn Profile</span> {/* Replace */}
            </Link>
             <Link
              href="https://github.com/your-github" // Replace with your GitHub profile
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              {/* <Github className="h-5 w-5 flex-shrink-0" /> */}
              <span className="font-medium">GitHub Profile</span> {/* Replace */}
            </Link>
          </div>
        </div>

        {/* Placeholder for Contact Form */}
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800/50">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">Send a Message</h2>
          <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            Alternatively, use the form below. (Note: Form functionality requires further implementation - client component & potentially serverless function).
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
              <input type="text" id="name" name="name" required disabled className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 sm:text-sm disabled:opacity-50" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input type="email" id="email" name="email" required disabled className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 sm:text-sm disabled:opacity-50" placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea id="message" name="message" rows={4} required disabled className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 sm:text-sm disabled:opacity-50" placeholder="Your message..."></textarea>
            </div>
            <button
              type="submit"
              disabled
              className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-offset-gray-900"
            >
              Send Message (Disabled)
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}