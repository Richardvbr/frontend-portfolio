import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';

import * as S from './style';

const Post = ({ post }) => {
  return (
    <S.Container>
      <MDXRemote {...post.source} components={{ Image }} />
    </S.Container>
  );
};

export default Post;
