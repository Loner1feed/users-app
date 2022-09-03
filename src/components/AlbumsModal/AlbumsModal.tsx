import { Backdrop, Button, Fade, Modal } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { AlbumAPI } from "../../models/AlbumAPI";
import { getAlbums } from "../../redux/slices/albumSlice";
import { RootState, useAppDispatch, useAppSelector } from "../../redux/store";
import { Spinner } from "../Spinner/Spinner";
import { style } from "./style";

interface AlbumModalProps {
  userId: number;
}

export const AlbumsModal: React.FC<AlbumModalProps> = ({ userId }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    dispatch(getAlbums(userId));
  };
  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useAppDispatch();
  const { data, status, error } = useAppSelector(
    (state: RootState) => state.albums
  );

  return (
    <>
      <Button variant="outlined" onClick={handleOpen}>
        Open modal
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style.modal}>
            <Box component="h2" sx={style.heading}>
              Albums
              {` (User id: ${!!data.length && data[0].userId})`}
            </Box>
            {!status && (
              <Fade in={!status}>
                <Box sx={style.grid}>
                  {data.map((el: AlbumAPI, i) => (
                    <Box component="span" sx={style.gridItem} key={i}>
                      {el.title}
                    </Box>
                  ))}
                </Box>
              </Fade>
            )}

            {status === "pending" && <Spinner />}

            {status === "rejected" && <h2>{error}</h2>}
          </Box>
        </Fade>
      </Modal>
    </>
  );
};
