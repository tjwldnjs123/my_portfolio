import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { DialogContent, DialogTitle } from "@mui/material";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 10,
};

type Props = {
  open: boolean;
  onClose: () => void;
  project: {
    name: string;
    img: string;
    personnal: string;
    period: string;
    githubUrl: string;
    partsOfMe: string[];
  };
};

function DetailProject({ open, onClose, project }: Props) {
  return (
    <Modal
      slotProps={{ backdrop: { style: { background: "rgba(0,0,0,0.4)" } } }}
      open={open}
      onClose={onClose}
    >
      <Box sx={style}>
        <Icon
          className="cursor-pointer"
          icon="ion:arrow-back"
          fontSize={20}
          onClick={() => onClose()}
        />
        <DialogTitle className="scroll_font" variant="h4">
          {project.name}
        </DialogTitle>
        <Box sx={{ mt: 2, ml: 2 }}>
          <Box className="flex flex-row items-center mb-2">
            <Typography style={{ marginRight: 5 }}>✨ 개발인원: </Typography>
            <Typography>{project.personnal}</Typography>
          </Box>
          <Box className="flex flex-row mb-2">
            <Typography style={{ marginRight: 5 }}>✨ 개발기간:</Typography>
            <Typography>{project.period}</Typography>
          </Box>
          <Box className="flex flex-row mb-2">
            <Typography style={{ marginRight: 5 }}>✨ 개발인원:</Typography>
            <Typography>{project.personnal}</Typography>
          </Box>
          <Box className="flex flex-col mb-2">
            <Typography style={{ marginRight: 5 }}>✨ 담당파트:</Typography>
            {project.partsOfMe.map((data) => {
              return (
                <Box className="flex flex-col " key={data}>
                  <Typography sx={{ ml: 4 }}>{data}</Typography>
                </Box>
              );
            })}
          </Box>
          <Box
            onClick={() => window.open(project.githubUrl, "_blank")}
            className="flex flex-row justify-center cursor-pointer mt-10"
          >
            <Icon icon="mdi:github" fontSize={30} />
            <Typography>깃허브</Typography>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

export default DetailProject;
