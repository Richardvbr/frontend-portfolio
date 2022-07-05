import Link from 'next/link';

import * as S from './style';

const PostCard = ({ post }) => {
  const date = new Date(post.date);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return (
    <Link href={`/blog/${post.slug}`}>
      <S.Card>
        {post?.image && <img src={post.image} alt={post.title} />}
        <S.ContentWrapper>
          <S.Date>{date.toLocaleDateString('en-US', options)}</S.Date>
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
