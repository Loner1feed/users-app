import { Box, Fade } from "@mui/material";
import React from "react";
import { RootState, useAppSelector } from "../../redux/store";
import { PostItem } from "../PostItem/PostItem";
import { Spinner } from "../Spinner/Spinner";
import { style } from "./style";

export const PostsGrid: React.FC = () => {
  const { data, error, status } = useAppSelector(
    (state: RootState) => state.posts
  );

  return (
    <>
      {!status && (
        <>
          <Fade in={!status}>
            <Box>
              <Box component="h2" sx={style.heading}>
                Posts
                {` (User id: ${data[0].userId})`}
              </Box>
              <Box sx={style.grid}>
                {data.length &&
                  data.map((el, i) => <PostItem data={el} key={i} />)}
              </Box>
            </Box>
          </Fade>
        </>
      )}

      {status === "pending" && <Spinner />}

      {status === "rejected" && <Box component="h2">{error}</Box>}
    </>
  );
};
