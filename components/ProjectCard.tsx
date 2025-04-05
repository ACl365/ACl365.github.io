'use client'; // Needed for Framer Motion hover effects

import Link from 'next/link';
// import Image from 'next/image'; // Temporarily commented out
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react'; // Optional icon

interface ProjectCardProps {
    // slug: string; // Removed slug as we link directly to liveUrl
    title: string;
    description: string;
    imageUrl: string; // Use single image URL
    tags: string[];
    liveUrl?: string; // Optional link to the live project
}

// Animation variants for scroll reveal (can be applied by a parent later)
const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ProjectCard({ title, description, imageUrl, tags, liveUrl }: ProjectCardProps) { // Removed slug from props
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
            {/* Changed Link to <a> tag, linking to liveUrl */}
            <a href={primaryLink} target="_blank" rel="noopener noreferrer" className="block h-full">
                {/* Single Image Container - Using standard <img> tag */}
                <div className="relative w-full overflow-hidden aspect-video bg-gray-100 dark:bg-gray-700"> {/* Added background color */}
                    <img
                        src={imageUrl}
                        alt={`Featured image for ${title}`}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" // Basic styling
                        loading="lazy" // Add lazy loading
                    />
                    {/* Optional: Subtle gradient overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-50"></div>
                </div>
                <div className="flex h-full flex-col p-5 md:p-6"> {/* Content padding */}
                    <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white md:text-xl">{title}</h3>
                    <p className="mb-4 flex-grow text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{description}</p> {/* line-clamp limits description lines */}
                    <div className="mb-4 flex flex-wrap gap-2">
                        {tags.slice(0, 3).map((tag) => ( // Show only first few tags
                            <span key={tag} className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary-dark dark:bg-primary/20 dark:text-primary-light">
                                {tag}
                            </span>
                        ))}
                        {tags.length > 3 && (
                             <span className="rounded-full bg-neutral-light/60 px-2.5 py-0.5 text-xs font-medium text-neutral-dark/70 dark:bg-neutral-dark/50 dark:text-neutral-light/70">
                                +{tags.length - 3} more
                            </span>
                        )}
                    </div>
                    {/* Removed the separate liveUrl link and "View Case Study" text */}
                </div>
            </a>
        </motion.div>
    );
}