import { useEffect, useState, useContext } from "react";

import AppContext from "../appcontext";

const DisplaySection = () => {
  const [commentsArr, setCommentsArr] = useState([]);
  const { comment, setComment, post, setPost } = useContext(AppContext);

  useEffect(() => {
    if (post) {
      setCommentsArr(prevComments => [...prevComments, comment]);
      setComment("");
      setPost(false);
    }
  }, [post, comment]);

  return (
    <div className="container" style={styles.container}>
      {commentsArr.map((item, key) => {
        return <p key={key}>{item}</p>;
      })}
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "blue",
    color: "white",
  },
};

export default DisplaySection;
