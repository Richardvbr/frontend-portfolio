import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';

import * as S from './style';

const PostCard = ({ post }) => {
  const date = new Date(post.date);

  return (
    <Link href={`/blog/${post.slug}`}>
      <S.Card>
        {post?.image && (
          <S.ImageContainer>
            <Image src={post.image} alt={post.title} layout='fill' />
          </S.ImageContainer>
        )}
        <S.ContentWrapper>
          <S.Date>{format(date, 'MMMM dd, Y')}</S.Date>
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
