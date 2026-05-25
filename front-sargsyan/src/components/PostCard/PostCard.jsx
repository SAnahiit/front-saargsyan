function PostCard({post}) {
    return (
      <article className="post-card">
        <div className="post-card__image-wrap">
          <img
            className="post-card__image"
            src={post.img}
            srcSet={`${post.img} 1x, ${post.img_2x} 2x`}
            alt={post.title}
          />
        </div>
        <div className="post-card__content">
          <p className="post-card__tag">{post.tags}</p>
          <h2 className="post-card__title">{post.title}</h2>
          <div className="post-card__meta">
            <span>
              <strong className="post-card__author">{post.author || "Niek Bove"}</strong> {/* this is a fallback value */}
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