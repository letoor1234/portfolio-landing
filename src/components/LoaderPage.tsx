import { Dialog } from "@mui/material";

const LoaderPage = ({ open }: any) => {
  return (
    <Dialog
      open={open}
      fullScreen
    >
      <div className="w-full h-full flex items-center justify-center">
        <div className="bg-emerald-400 w-6 h-6 animate-[spin_2s_linear_infinite]">
          <div className="bg-emerald-400 w-6 h-6 animate-[ping_2s_ease-out_infinite]" />
        </div>
      </div>
    </Dialog>
  );
};

export default LoaderPage;
