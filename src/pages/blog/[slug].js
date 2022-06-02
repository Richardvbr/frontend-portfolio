import Head from 'next/head';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/atom-one-dark.css';

import { getPostFromSlug, getSlugs } from 'src/lib/blog-posts';

import { getLayout } from 'src/components/layout';
import Post from 'src/components/blog/post';

export default function PostPage({ post }) {
  return (
    <>
      <Head>
        <title>{`${post.meta.title} | Richard van Brunschot | Front-end Developer`}</title>
      </Head>
      <Post post={post} />
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const { content, meta } = getPostFromSlug(slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        rehypeHighlight,
      ],
    },
  });

  return { props: { post: { source: mdxSource, meta } } };
};

export const getStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

PostPage.getLayout = getLayout;
