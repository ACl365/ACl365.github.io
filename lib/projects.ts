import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Define the path to the projects directory
const projectsDirectory = path.join(process.cwd(), 'content/projects');

// Interface for project frontmatter data
export interface ProjectFrontmatter {
  title: string;
  description: string;
  date: string; // Keep as string for simplicity, can parse later if needed
  tags: string[];
  imageUrl: string;
  githubUrl?: string; // Optional
  liveUrl?: string; // Optional
  [key: string]: any; // Allow other properties if needed
}

// Interface for the full project data including content and slug
export interface ProjectData extends ProjectFrontmatter {
  slug: string;
  content: string;
}

// Function to get all project slugs (filenames without .mdx)
export function getAllProjectSlugs() {
  try {
    const fileNames = fs.readdirSync(projectsDirectory);
    return fileNames
      .filter((fileName) => fileName.endsWith('.mdx'))
      .map((fileName) => fileName.replace(/\.mdx$/, ''));
  } catch (error) {
    console.error("Error reading project slugs:", error);
    return []; // Return empty array on error
  }
}

// Function to get parsed data for a single project by slug
export function getProjectData(slug: string): ProjectData | null {
  const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
  try {
    if (!fs.existsSync(fullPath)) {
      console.warn(`Project file not found: ${fullPath}`);
      return null;
    }
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const { data, content } = matter(fileContents);

    // Type assertion for frontmatter (add validation if needed)
    const frontmatter = data as ProjectFrontmatter;

    // Combine the data with the slug and content
    return {
      slug,
      content,
      ...frontmatter,
    };
  } catch (error) {
    console.error(`Error reading project data for slug "${slug}":`, error);
    return null; // Return null on error
  }
}

// Function to get sorted frontmatter for all projects (e.g., for listing)
export function getAllProjectsFrontmatter(): ProjectFrontmatter[] {
  const slugs = getAllProjectSlugs();
  const allProjectsData = slugs
    .map((slug) => {
      const projectData = getProjectData(slug);
      // Return only frontmatter and slug, maybe filter out nulls
      return projectData ? { ...projectData } : null; // Spread already includes slug
    })
    .filter((project): project is ProjectData => project !== null); // Filter out nulls

  // Sort projects by date in descending order (newest first)
  return allProjectsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}