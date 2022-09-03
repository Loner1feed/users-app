/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Fade } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { getUsers } from "../../redux/slices/userSlice";
import { RootState, useAppDispatch, useAppSelector } from "../../redux/store";
import { Spinner } from "../Spinner/Spinner";
import { UserItem } from "../UserItem/UserItem";
import { style } from "./style";

export const UsersGrid: React.FC = () => {
  const { data, status, error } = useAppSelector(
    (state: RootState) => state.users
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!data.length) {
      dispatch(getUsers());
    }
  }, []);

  return (
    <>
      {!status && (
        <>
          <Box component="h2" sx={style.heading}>
            Users
          </Box>
          <Fade in={!status}>
            <Box sx={style.grid}>
              {data.map((el, i) => (
                <UserItem data={el} key={i} />
              ))}
            </Box>
          </Fade>
        </>
      )}

      {status === "pending" && <Spinner />}

      {status === "rejected" && <h2>{error}</h2>}
    </>
  );
};
