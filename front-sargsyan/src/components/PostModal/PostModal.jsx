import { useEffect } from "react";

function PostModal({ post, onClose, closeText = "Close" }) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    if (scrollBarWidth > 0) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
    };
  }, [onClose]);

  function handleBackdropClick(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  return (
    <div
      className="post-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="post-modal-title"
      onClick={handleBackdropClick}
    >
      <div className="post-modal__container">
        <div className="post-modal__content">
          <button className="post-modal__close" type="button" onClick={onClose}>
            <span>{closeText}</span>
          </button>

          {post.img && (
            <div className="post-modal__image-container">
              <img
                className="post-modal__image"
                src={post.img}
                srcSet={
                  post.img_2x
                    ? `${post.img} 1x, ${post.img_2x} 2x`
                    : undefined
                }
                fetchPriority="high"
                alt={post.title}
              />
            </div>
          )}

          <p className="post-modal__tag">{post.tags}</p>

          <h2 className="post-modal__title" id="post-modal-title">
            {post.title}
          </h2>

          <div className="post-modal__meta">
            <span>
              <strong>{post.author || "Niek Bove"}</strong>
            </span>
            <span>{post.date}</span>
            <span>{post.views} Views</span>
          </div>

          <p className="post-modal__text">{post.text}</p>
        </div>
      </div>
    </div>
  );
}

export default PostModal;