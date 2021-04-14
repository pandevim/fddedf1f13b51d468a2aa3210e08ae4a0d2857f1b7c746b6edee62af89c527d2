import AppContext from "../appcontext";
import { useContext } from "react";
const InputSection = () => {
  const { comment, setComment, setPost } = useContext(AppContext);
  const postComment = () => {
    setPost(true);
  };

  return (
    <div className="container" style={styles.container}>
      <button className="Emoji">Emoji</button>
      <input
        style={styles.input}
        value={comment}
        onChange={event => setComment(event.target.value)}
        type="text"
        id="comment"
        name="comment"
        maxlength="8"
      />
      <button className="Submit" onClick={postComment}>
        Post
      </button>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "pink",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
  },
  input: {
    width: "100%",
  },
};

export default InputSection;
