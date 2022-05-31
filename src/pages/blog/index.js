import { getAllPosts } from 'src/lib/blog-posts';

import { getLayout } from 'src/components/layout';

import PostsOverview from 'src/components/blog/posts-overview';

export default function BlogOverview({ posts }) {
  return <PostsOverview posts={posts} />;
}

export async function getStaticProps() {
  const posts = getAllPosts().map((post) => post.meta);

  return { props: { posts } };
}

BlogOverview.getLayout = getLayout;
