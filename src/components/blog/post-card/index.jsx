import Image from 'next/image';
import Link from 'next/link';

import Placeholder from '/public/static/images/placeholder.jpg';

import * as S from './style';

const PostCard = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <S.Card>
        <Image src={Placeholder} alt='hello' />
        <S.ContentWrapper>
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
          <S.Tags>
            {post.tags?.map((language, i) => (
              <p key={i}>{language}</p>
            ))}
          </S.Tags>
        </S.ContentWrapper>
      </S.Card>
    </Link>
  );
};

export default PostCard;
