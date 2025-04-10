'use client'; // Needed for Framer Motion hover effects

import Link from 'next/link';
// import Image from 'next/image'; // Temporarily commented out
import { motion } from 'framer-motion';
import {
    Github, Code, Map, BarChartHorizontalBig, CloudCog, Container, Presentation, Server, BrainCircuit,
    HeartPulse, LayoutDashboard, AreaChart, Database, Cloud, FlaskConical, GitBranchPlus, Inspect, Users, Tag, ExternalLink // Added icons for tags & links
} from 'lucide-react';

interface ProjectCardProps {
    slug: string; // Re-added slug for internal project page links
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

// Helper function to get an icon based on a tag string
const getTagIcon = (tag: string) => {
    const lowerTag = tag.toLowerCase();
    // Prioritize specific tech first
    if (lowerTag.includes('python')) return <Code size={12} className="mr-1" />;
    if (lowerTag.includes('geopandas') || lowerTag.includes('geospatial') || lowerTag.includes('pysal')) return <Map size={12} className="mr-1" />;
    if (lowerTag.includes('docker')) return <Container size={12} className="mr-1" />;
    if (lowerTag.includes('streamlit')) return <Presentation size={12} className="mr-1" />;
    if (lowerTag.includes('fastapi')) return <Server size={12} className="mr-1" />;
    if (lowerTag.includes('scikit-learn') || lowerTag.includes('sklearn')) return <BrainCircuit size={12} className="mr-1" />;
    if (lowerTag.includes('mlflow')) return <FlaskConical size={12} className="mr-1" />; // Or History?
    if (lowerTag.includes('gcp') || lowerTag.includes('google cloud')) return <Cloud size={12} className="mr-1" />;
    if (lowerTag.includes('ci/cd') || lowerTag.includes('github actions')) return <GitBranchPlus size={12} className="mr-1" />;
    if (lowerTag.includes('shap')) return <Inspect size={12} className="mr-1" />;
    if (lowerTag.includes('sql') || lowerTag.includes('database') || lowerTag.includes('bigquery')) return <Database size={12} className="mr-1" />;
    // Broader categories
    if (lowerTag.includes('mlops')) return <CloudCog size={12} className="mr-1" />;
    if (lowerTag.includes('healthcare') || lowerTag.includes('medical')) return <HeartPulse size={12} className="mr-1" />;
    if (lowerTag.includes('dashboard')) return <LayoutDashboard size={12} className="mr-1" />;
    if (lowerTag.includes('data viz') || lowerTag.includes('visualisation')) return <AreaChart size={12} className="mr-1" />;
    if (lowerTag.includes('data analysis') || lowerTag.includes('analytics')) return <BarChartHorizontalBig size={12} className="mr-1" />;
    if (lowerTag.includes('social impact')) return <Users size={12} className="mr-1" />;
    // Default
    return <Tag size={12} className="mr-1" />;
};

export function ProjectCard({ slug, title, description, imageUrl, tags, liveUrl, repoUrl }: ProjectCardProps) { // Added slug prop back
    // Determine the link: prioritize liveUrl if available, then slug, then fallback
    const primaryHref = liveUrl || (slug ? `/${slug}` : '#');
    // Determine if the primary link is internal (slug-based and no liveUrl) or external
    const isExternalLink = !!liveUrl;
    return (
        <motion.div
            variants={cardVariants} // Apply variants via parent for staggered effect
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% visible
            className="group relative overflow-hidden rounded-lg border border-gray-200/80 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg dark:border-gray-700/80 dark:bg-gray-800/50 dark:hover:shadow-blue-900/20"
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }} // Added subtle scale on hover
        >
            {/* Removed outer <a> tag */}
            <div className="flex h-full flex-col"> {/* Use a div for layout */}
                {/* Wrap Image Container with appropriate link */}
                {/* Link wrapper for the image */}
                {isExternalLink ? (
                     <a href={primaryHref} target="_blank" rel="noopener noreferrer" className="block">
                        <div className="relative w-full overflow-hidden aspect-video bg-gray-100 dark:bg-gray-700">
                            <img
                                src={imageUrl}
                                alt={`Featured image for ${title}`}
                                className="absolute inset-0 h-full w-full object-contain transition-transform duration-500 ease-in-out group-hover:scale-105"
                                loading="lazy"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-50"></div>
                        </div>
                    </a>
                ) : (
                     <Link href={primaryHref} className="block">
                         <div className="relative w-full overflow-hidden aspect-video bg-gray-100 dark:bg-gray-700">
                            <img
                                src={imageUrl}
                                alt={`Featured image for ${title}`}
                                className="absolute inset-0 h-full w-full object-contain transition-transform duration-500 ease-in-out group-hover:scale-105"
                                loading="lazy"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-50"></div>
                        </div>
                    </Link>
                )}
                <div className="flex flex-col p-5 md:p-6"> {/* Content padding, removed h-full */}
                    {/* Make title the primary link to liveUrl */}
                    {/* Use Next Link for internal, regular <a> for external */}
                    {/* Link for the title */}
                     {isExternalLink ? (
                        <a href={primaryHref} target="_blank" rel="noopener noreferrer" className="mb-2 text-lg font-semibold text-gray-900 hover:text-primary dark:text-white dark:hover:text-primary-light md:text-xl transition-colors">
                            {title}
                        </a>
                    ) : (
                         <Link href={primaryHref} className="mb-2 text-lg font-semibold text-gray-900 hover:text-primary dark:text-white dark:hover:text-primary-light md:text-xl transition-colors">
                            {title}
                        </Link>
                    )}
                    <p className="mb-4 flex-grow text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{description}</p> {/* line-clamp limits description lines */}
                    <div className="mb-4 flex flex-wrap gap-2">
                        {tags.slice(0, 4).map((tag) => ( // Show up to 4 tags
                            <span key={tag} className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary-dark dark:bg-primary/20 dark:text-white"> {/* Changed dark:text-primary-light to dark:text-white */}
                                {getTagIcon(tag)}
                                {tag}
                            </span>
                        ))}
                        {tags.length > 4 && ( // Update condition for "+X more"
                             <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                                +{tags.length - 4} more
                            </span>
                        )}
                    </div>
                    {/* GitHub Link - positioned at the bottom right */}
                    {/* Links Section */}
                    <div className="mt-auto flex items-center justify-end gap-3 pt-4"> {/* Use mt-auto to push to bottom, add gap */}
                        {/* Live Link (only show if different from primaryHref, i.e., if primary is internal slug link) */}
                        {liveUrl && !isExternalLink && ( // Show only if primary link ISN'T the liveUrl already
                             <a
                                href={liveUrl} // Still links to liveUrl
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center text-xs font-medium text-primary hover:underline dark:text-primary-light"
                                aria-label={`View live demo of ${title}`}
                            >
                                Live Demo <ExternalLink size={12} className="ml-1" />
                            </a>
                        )}
                         {/* Repo Link */}
                        {repoUrl && (
                            <a
                                href={repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center text-xs text-gray-500 transition-colors hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
                                aria-label="View project source code on GitHub"
                            >
                                <Github size={16} className="mr-1" /> Code
                            </a>
                        )}
                    </div>
                </div>
            </div> {/* Close main layout div started on line 37 */}
        </motion.div>
    );
}