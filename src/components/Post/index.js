import HeaderSection from "./HeaderSection";
import CommentSection from "./CommentSection";
import ImageSection from "./ImageSection";

const Post = () => {
  return (
    <div className="container" style={styles.container}>
      <HeaderSection />
      <ImageSection />
      <CommentSection />
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "yellow",
    width: "500px",
    height: "400px",
    margin: "20px",
  },
};

export default Post;
