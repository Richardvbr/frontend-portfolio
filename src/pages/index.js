import { getAllPosts } from 'src/lib/blog-posts';

import { getLayout } from 'src/components/layout';

import About from '../components/about';
import Experience from 'src/components/experience';
import ProjectsOverview from 'src/components/projects/projects-overview';

export default function Home({ props }) {
  return (
    <div>
      <About />
      <Experience />
      <ProjectsOverview />
    </div>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts().map((post) => post.meta);

  return { props: { posts } };
}

Home.getLayout = getLayout;
