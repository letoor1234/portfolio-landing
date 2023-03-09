import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useEffect, useState } from "react";

const ResumeDialog = ({ open, onClose }: any) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        className: "bg-zinc-800 h-screen",
      }}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle>
        <h3 className="w-full text-center font-bold text-emerald-400">
          My Resume
        </h3>
      </DialogTitle>
      <DialogContent>
        <iframe
          id="my-resume-iframe"
          src="https://docs.google.com/document/d/1zwrmdSK-1paYKma4UrZ72FXQokWvvlsp2fkOiB-rsFo"
          width="100%"
          height="100%"
        ></iframe>
      </DialogContent>
    </Dialog>
  );
};

export default ResumeDialog;
