import React from "react";
import { Box } from "@mui/material";
import { UsersGrid } from "./components/UsersGrid/UsersGrid";
import { Route, Routes } from "react-router-dom";
import { PostsGrid } from "./components/PostsGrid/PostsGrid";

const App: React.FC = () => {
  const AppStyles = {
    container: {
      padding: "0px 20px",
      paddingBottom: "40px",
      maxWidth: "1280px",
      margin: "0px auto",
      width: "100%",
      height: "100vh",
      overflowX: "hidden",
    },
  };

  return (
    <Box sx={AppStyles.container}>
      <Routes>
        <Route path="/" element={<UsersGrid />} />
        <Route path="/posts" element={<PostsGrid />} />
      </Routes>
    </Box>
  );
};

export default App;
