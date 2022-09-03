export const style = {
  modal: {
    minHeight: "200px",
    maxHeight: "calc(100vh - 200px)",
    overflow: "hidden",
    background: "#fff",
    borderRadius: "20px",
    padding: "20px 0",
    zIndex: "5",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    maxWidth: "650px",
    width: "100%",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    gridGap: "20px",
    overflowX: "hidden",
    height: "100%",
    h2: {
      textAlign: "center",
    },
  },

  gridItem: {
    background: "#f5f5f5",
    fontSize: "24px",
    padding: "10px 20px",
  },

  heading: {
    textAlign: "center",
    marginTop: 0,
  },
};
