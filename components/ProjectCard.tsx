'use client'; // Needed for Framer Motion hover effects

import Link from 'next/link';
// import Image from 'next/image'; // Temporarily commented out
import { motion } from 'framer-motion';
import { Github } from 'lucide-react'; // Import Github icon

interface ProjectCardProps {
    // slug: string; // Removed slug as we link directly to liveUrl
    title: string;
    description: string;
    imageUrl: string; // Use single image URL
    tags: string[];
    liveUrl?: string; // Optional link to the live project
    repoUrl?: string; // Optional link to the GitHub repository
}

// Animation variants for scroll reveal (can be applied by a parent later)
const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ProjectCard({ title, description, imageUrl, tags, liveUrl, repoUrl }: ProjectCardProps) { // Added repoUrl prop
    // Use liveUrl as the primary link, default to '#' if not provided
    const primaryLink = liveUrl || '#';

    return (
        <motion.div
            variants={cardVariants} // Apply variants via parent for staggered effect
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% visible
            className="group relative overflow-hidden rounded-lg border border-gray-200/80 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg dark:border-gray-700/80 dark:bg-gray-800/50 dark:hover:shadow-blue-900/20"
        >
            {/* Removed outer <a> tag */}
            <div className="flex h-full flex-col"> {/* Use a div for layout */}
                {/* Single Image Container - Using standard <img> tag */}
                <div className="relative w-full overflow-hidden aspect-video bg-gray-100 dark:bg-gray-700"> {/* Added background color */}
                    <img
                        src={imageUrl}
                        alt={`Featured image for ${title}`}
                        className="absolute inset-0 h-full w-full object-contain transition-transform duration-500 ease-in-out group-hover:scale-105" // Use object-contain to prevent cropping
                        loading="lazy" // Add lazy loading
                    />
                    {/* Optional: Subtle gradient overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-50"></div>
                </div>
                <div className="flex flex-col p-5 md:p-6"> {/* Content padding, removed h-full */}
                    {/* Make title the primary link to liveUrl */}
                    <a href={primaryLink} target="_blank" rel="noopener noreferrer" className="mb-2 text-lg font-semibold text-gray-900 hover:text-primary dark:text-white dark:hover:text-primary-light md:text-xl transition-colors">
                        {title}
                    </a> {/* Close title link */}
                    <p className="mb-4 flex-grow text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{description}</p> {/* line-clamp limits description lines */}
                    <div className="mb-4 flex flex-wrap gap-2">
                        {tags.slice(0, 4).map((tag) => ( // Show up to 4 tags
                            <span key={tag} className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary-dark dark:bg-primary/20 dark:text-primary-light">
                                {tag}
                            </span>
                        ))}
                        {tags.length > 4 && ( // Update condition for "+X more"
                             <span className="rounded-full bg-neutral-light/60 px-2.5 py-0.5 text-xs font-medium text-neutral-dark/70 dark:bg-neutral-dark/50 dark:text-neutral-light/70">
                                +{tags.length - 4} more
                            </span>
                        )}
                    </div>
                    {/* GitHub Link - positioned at the bottom right */}
                    {repoUrl && (
                        <a
                            href={repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()} // Prevent card's main link from triggering
                            className="absolute bottom-4 right-4 z-10 text-gray-500 transition-colors hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
                            aria-label="View project source code on GitHub"
                        >
                            <Github size={20} />
                        </a>
                    )}
                </div>
            </div> {/* Close main layout div started on line 37 */}
        </motion.div>
    );
}