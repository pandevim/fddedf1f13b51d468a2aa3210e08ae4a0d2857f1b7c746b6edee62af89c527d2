const ImageSection = () => {
  return (
    <div className="container" style={styles.container}>
      <img
        style={styles.img}
        src="https://images.dog.ceo/breeds/terrier-norwich/n02094258_1065.jpg"
        alt="dog"
      />
    </div>
  );
};

const styles = {
  container: {},
  img: {
    width: "50%",
    height: "50%",
  },
};

export default ImageSection;
