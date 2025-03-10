// src/components/Post/Post.jsx
import "./Post.css";

// eslint-disable-next-line react/prop-types
function Post({ image, title, author, date, time, text, text2, text3 }) {
  return (
    <div className="post-container">
      {image && (
        <div className="post-image">
          <img src="imagem1.jpg" alt="Imagem do post" />
        </div>
      )}
      <h2 className="post-title">{title}</h2>
      <div className="post-meta" style={{display:"flex", justifyContent:"space-between"}}>
        <span className="post-author">{author}</span>
        <span className="post-date">{date}</span>
        <span className="post-time">{time}</span>
      </div>
      <hr/>
      <p className="post-text">{text}</p>
      <br />

      <p className="post-text">{text2}</p>
      <p className="post-text">{text3}</p>
    </div>
  );
}

export default Post;
