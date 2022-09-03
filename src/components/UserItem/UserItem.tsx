import React from "react";
import { Avatar, Box, Button } from "@mui/material";
import { UserAPI } from "../../models/UserAPI";
import { style } from "./style";
import { useAppDispatch } from "../../redux/store";
import { getPosts } from "../../redux/slices/postSlice";
import { useNavigate } from "react-router-dom";
import { AlbumsModal } from "../AlbumsModal/AlbumsModal";

interface UserItemProps {
  data: UserAPI;
}

export const UserItem: React.FC<UserItemProps> = ({ data }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const postsClickHandler = () => {
    console.log("user id:", data.id);
    dispatch(getPosts(data.id));
    navigate("/posts");
  };

  return (
    <Box sx={style.item}>
      <Box sx={style.avatar}>
        <Avatar alt={data.name} src="" />
      </Box>

      <Box component="h3">{data.username}</Box>
      <Box component="span">{`Full name: ${data.name}`}</Box>
      <Box component="span">{`Email: ${data.email}`}</Box>
      <Box component="span">{`Website: ${data.website}`}</Box>
      <Box sx={style.buttons}>
        <Button variant="contained" onClick={postsClickHandler}>
          See posts
        </Button>
        <AlbumsModal userId={data.id} />
      </Box>
    </Box>
  );
};
