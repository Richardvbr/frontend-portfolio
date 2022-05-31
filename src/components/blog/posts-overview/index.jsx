import PostCard from '../post-card';
import * as S from './style';

const PostsOverview = ({ posts }) => {
  if (!posts || !posts.length) {
    return (
      <S.Container>
        <S.Heading>
          Posts are currently a work in progress and will be uploaded soon.
          Check back in a week :)
        </S.Heading>
      </S.Container>
    );
  }

  return (
    <S.Container>
      {posts.map((post) => (
        <PostCard post={post} key={post.slug} />
      ))}
    </S.Container>
  );
};

export default PostsOverview;
