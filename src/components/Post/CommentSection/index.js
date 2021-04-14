import AppContext from "./appcontext";

import { useState } from "react";
import DisplaySection from "./DisplaySection";
import InputSection from "./InputSection";

const CommentSection = () => {
  const [comment, setComment] = useState("");
  const [post, setPost] = useState(false);
  return (
    <AppContext.Provider
      style={styles.container}
      value={{
        comment,
        setComment,
        post,
        setPost,
      }}
    >
      <DisplaySection />
      <InputSection />
    </AppContext.Provider>
  );
};

const styles = {
  container: {
    backgroundColor: "green",
  },
};

export default CommentSection;
