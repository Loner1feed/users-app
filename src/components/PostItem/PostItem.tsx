import { Box } from "@mui/material";
import React from "react";
import { PostAPI } from "../../models/PostAPI";
import { style } from "./style";

interface PostItemTypes {
  data: PostAPI;
}

export const PostItem: React.FC<PostItemTypes> = ({ data }) => {
  return (
    <Box sx={style.item}>
      <Box component="span">{data.title}</Box>
      <Box component="p">{data.body}</Box>
    </Box>
  );
};
