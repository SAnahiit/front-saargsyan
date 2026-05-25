import PostCard from "../PostCard/PostCard";

function PostsList({ posts, isLoading, onPostClick }) {
  if (isLoading) {
    return <p className="posts-status">Loading posts...</p>;
  }

  if (posts.length === 0) {
    return <p className="posts-status">No posts found.</p>;
  }

  return (
    <div className="posts-grid">
      {posts.map((post, index) => (
        <PostCard
          key={`${post.title}-${index}`}
          post={post}
          onClick={() => onPostClick(post)}
        />
      ))}
    </div>
  );
}

export default PostsList;