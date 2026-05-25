function PostModal({ post, onClose, closeText = "Close" }) {
    function handleBackdropClick(event) {
      if (event.target === event.currentTarget) {
        onClose();
      }
    }
  
    return (
      <div className="post-modal" onClick={handleBackdropClick}>
        <div className="post-modal__content">
          <button className="post-modal__close" type="button" onClick={onClose}>
            {closeText}
          </button>
          <h2 className="post-modal__title">{post.title}</h2>
          <p className="post-modal__text">{post.text}</p>
        </div>
      </div>
    );
  }
  
  export default PostModal;