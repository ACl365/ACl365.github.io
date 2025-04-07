import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react'; // Add Linkedin and Mail icons

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 py-8 md:flex-row md:px-6">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          &copy; {currentYear} Alexander Clarke. All rights reserved.
        </p>
        <div className="mt-4 flex space-x-4 md:mt-0">
          <Link href="https://github.com/ACl365" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light transition-colors">
            <Github size={20} />
          </Link>
          {/* LinkedIn Link */}
          <Link href="https://www.linkedin.com/in/alexander-clarke-data/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light transition-colors">
            <Linkedin size={20} />
          </Link>
          {/* Email Link */}
          <a href="mailto:alexanderclarke365@gmail.com" aria-label="Email Me" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}