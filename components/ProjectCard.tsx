'use client'; // Needed for Framer Motion hover effects

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react'; // Optional icon

interface ProjectCardProps {
    slug: string;
    title: string;
    description: string;
    imageUrls: string[]; // Changed from imageUrl
    tags: string[];
}

// Animation variants for scroll reveal (can be applied by a parent later)
const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ProjectCard({ slug, title, description, imageUrls, tags }: ProjectCardProps) { // Changed imageUrl to imageUrls
    return (
        <motion.div
            variants={cardVariants} // Apply variants via parent for staggered effect
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% visible
            className="group relative overflow-hidden rounded-lg border border-gray-200/80 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg dark:border-gray-700/80 dark:bg-gray-800/50 dark:hover:shadow-blue-900/20"
        >
            <Link href={`/projects/${slug}`} className="block h-full"> {/* Ensure link covers the card */}
                {/* Container for two images side-by-side */}
                <div className="relative flex w-full overflow-hidden aspect-[3/1]"> {/* Adjust aspect ratio for two images */}
                    {imageUrls.slice(0, 2).map((url, index) => (
                        <div key={index} className="relative w-1/2 overflow-hidden"> {/* Each image takes half width */}
                            <Image
                                src={url}
                                alt={`Image ${index + 1} for ${title}`}
                                width={300} // Half of original width
                                height={200} // Half of original height (adjust aspect ratio if needed)
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                                placeholder="blur"
                                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                            />
                        </div>
                    ))}
                     {/* Optional: Subtle gradient overlay spanning both images */}
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
                     {/* "View Case Study" appears on hover */}
                     <div className="mt-auto flex items-center text-sm font-medium text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:text-primary-light">
                        View Case Study
                        <ArrowUpRight className="ml-1 h-4 w-4" />
                        {/* <span className="ml-1">&rarr;</span> */} {/* Simple arrow removed */}
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}