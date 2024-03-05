import DocumentTitle from "../components/DocumentTitle";

const styles = {
  container: {
    minHeight: "calc(100vh - 50px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "azure",
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: "center",
  },
};

export default function Home() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>
      <div style={styles.container}>
        <h1 style={styles.title}>
          My Phonebook
          {/* <span role="img" aria-label="Greeting icon" size="25">
            ☎️
          </span> */}
        </h1>
      </div>
    </>
  );
}
