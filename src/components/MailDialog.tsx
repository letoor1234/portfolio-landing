import {
  createTheme,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Snackbar,
  TextField,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import Button from "./Button";

const MailDialog = ({ open, onClose }: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarText, setSnackbarText] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const sendMail = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post("https://portfolio-backend-w80z.onrender.com/mail-to", {
        name,
        email,
        phone,
        description,
      })
      .then((res: any) => {
        if (res.status === 200) {
          setIsLoading(false);
          setShowSnackbar(true);
          setSnackbarText("Mail sent successfully!");
          onClose();
        }
      })
      .catch((err: any) => {
        setIsLoading(false);
        setShowSnackbar(true);
        setSnackbarText("An error ocurred... Try again later!");
      });
  };

  return (
    <>
      <Snackbar
        open={showSnackbar}
        autoHideDuration={4000}
        onClose={() => setShowSnackbar(false)}
        message={snackbarText}
      />

      <Dialog open={open} onClose={onClose}>
        <DialogTitle>
          <h3 className="w-full text-center font-bold text-emerald-400">
            Send me an Email!
          </h3>
        </DialogTitle>
        <form onSubmit={sendMail}>
          <DialogContent>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 flex-col md:flex-row">
                <TextField
                  required
                  color="primary"
                  InputLabelProps={{
                    className: "font-bold",
                  }}
                  InputProps={{
                    className: "bg-zinc-700 text-slate-200",
                  }}
                  name="name"
                  label="Your name"
                  variant="outlined"
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  required
                  color="primary"
                  InputLabelProps={{
                    className: "font-bold",
                  }}
                  InputProps={{
                    className: "bg-zinc-700 text-slate-200",
                  }}
                  name="email"
                  label="Your email"
                  variant="outlined"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <TextField
                  color="primary"
                  InputLabelProps={{
                    className: "font-bold",
                  }}
                  InputProps={{
                    className: "bg-zinc-700 text-slate-200",
                  }}
                  name="phone"
                  label="Your phone"
                  variant="outlined"
                  fullWidth
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <TextField
                  required
                  color="primary"
                  InputLabelProps={{
                    className: "font-bold",
                  }}
                  InputProps={{
                    className: "bg-zinc-700 text-slate-200",
                  }}
                  name="description"
                  label="How can I help you?"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <div className="w-full flex justify-between overflow-hidden">
              <Button
                type="button"
                onClick={onClose}
                color="primary"
                disableAnim={true}
                colorClass="bg-slate-400 hover:bg-slate-500"
              >
                Cancel
              </Button>
              <Button color="primary" disableAnim={true} loading={isLoading}>
                Send
              </Button>
            </div>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default MailDialog;
