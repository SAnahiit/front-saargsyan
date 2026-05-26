function PostCard({ post, onClick }) {
  function handleKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick();
    }
  }

  return (
    <article
      className="post-card"
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
    >
      <div className="post-card__image-wrap">
        <img
          className="post-card__image"
          src={post.img}
          srcSet={post.img_2x ? `${post.img} 1x, ${post.img_2x} 2x` : undefined}
          alt={post.title}
        />
      </div>

      <div className="post-card__content">
        <p className="post-card__tag">{post.tags}</p>

        <h2 className="post-card__title">{post.title}</h2>

        <div className="post-card__meta">
          <span>
            <strong className="post-card__author">
              {post.author || "Niek Bove"} {/* fallback value */}
            </strong>
          </span>
          <span>{post.date}</span>
          <span>{post.views} Views</span>
        </div>

        <p className="post-card__text">{post.text}</p>
      </div>
    </article>
  );
}

export default PostCard;