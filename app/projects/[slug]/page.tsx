import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getAllProjectSlugs, getProjectData } from '@/lib/projects';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
// import { ArrowLeft } from 'lucide-react'; // Optional icon
// Generate static paths for all projects at build time
export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for the page (title, description)
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const projectData = getProjectData(params.slug);

  if (!projectData) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${projectData.title} | Alex's Portfolio`, // Update with your name/site title
    description: projectData.description,
  };
}

// The main page component
export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const projectData = getProjectData(params.slug);

  // If project data isn't found, show a 404 page
  if (!projectData) {
    notFound();
  }

  const { title, description, date, tags, imageUrl, githubUrl, liveUrl, content } = projectData;
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Options for rehype-pretty-code
  const prettyCodeOptions = {
    theme: 'github-dark', // Or choose another theme: https://rehype-pretty-code.netlify.app/themes
    // Keep lines for highlighting specific lines if needed
    keepBackground: false,
  };

  return (
    <article className="container mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-20">
      {/* Back to Projects Link */}
      <Link
        href="/#projects"
        className="mb-8 inline-flex items-center text-sm text-blue-600 hover:underline dark:text-blue-400"
      >
        {/* <ArrowLeft className="mr-1 h-4 w-4" /> */}
        &larr; Back to Projects
      </Link>

      {/* Project Hero */}
      <header className="mb-12 border-b border-gray-200 pb-8 dark:border-gray-700">
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <p className="mb-4 text-lg text-gray-600 dark:text-gray-400 md:text-xl">
          {description}
        </p>
        <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
          <span>Published on {formattedDate}</span>
          {tags && tags.length > 0 && (
            <>
              <span className="hidden sm:inline">|</span>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
        { (githubUrl || liveUrl) && (
            <div className="flex flex-wrap gap-4">
                {githubUrl && (
                    <Link href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400">
                        View Code on GitHub &rarr;
                    </Link>
                )}
                {liveUrl && (
                     <Link href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400">
                        View Live Demo &rarr;
                    </Link>
                )}
            </div>
        )}
      </header>

      {/* Optional: Featured Image */}
      {imageUrl && (
        <div className="mb-12 overflow-hidden rounded-lg shadow-lg">
          <Image
            src={imageUrl}
            alt={`Featured image for ${title}`}
            width={1200} // Adjust as needed
            height={675} // Adjust for 16:9 aspect ratio
            className="w-full object-cover"
            priority // Prioritize loading the main image
          />
        </div>
      )}

      {/* Main Content Area - Render MDX Content */}
      {/* Apply Tailwind Typography styles for nice formatting */}
      <div className="prose prose-lg max-w-none dark:prose-invert prose-blue prose-img:rounded-lg prose-img:shadow-md prose-a:text-blue-600 hover:prose-a:text-blue-700 dark:prose-a:text-blue-400 dark:hover:prose-a:text-blue-300">
        <MDXRemote
          source={content}
          options={{
            mdxOptions: {
              rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
            },
          }}
          // Pass components here if needed, e.g., for charts:
          // components={{ PlotlyChart }}
        />
        {/* End of MDX Content */}
      </div>

      {/* Optional: Navigation to Next/Previous Project */}
      {/* Add logic here later if desired */}

    </article>
  );
}