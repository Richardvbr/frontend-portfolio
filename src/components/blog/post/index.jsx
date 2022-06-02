import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';
import { HiChevronDoubleLeft } from 'react-icons/hi';

import * as S from './style';
import Link from 'next/link';

const Post = ({ post }) => {
  return (
    <S.Container>
      <Link href={'/blog'} passHref>
        <a className='back-link'>
          <HiChevronDoubleLeft />
          Back to blog posts
        </a>
      </Link>
      <MDXRemote {...post.source} components={{ Image }} />
    </S.Container>
  );
};

export default Post;
