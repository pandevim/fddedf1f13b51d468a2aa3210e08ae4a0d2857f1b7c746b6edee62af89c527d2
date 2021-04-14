import "./App.css";
import Post from "./components/Post";

function App() {
  return (
    <div className="App" style={styles.container}>
      <Post />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "200vh",
  },
};

export default App;
