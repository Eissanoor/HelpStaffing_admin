import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import deleting from "../../Assets/image/deleting.png";
import { ToastContainer, toast } from "react-toastify";
import deleteicon from "../../Assets/image/delete action.png";
import "./Delete.css";
import axios from "axios";
function Delete() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Deleted api section
  const Deletedapi = (_id) => {
    const id = sessionStorage.getItem("deleting");
    console.log(sessionStorage.getItem("deleting"));
    axios
      .delete(`https://hummstaffing.herokuapp.com/api/admin/job?jobId=${id}`, {
        headers: {
          secretKey:
            "rosx.AD-98dBXZnC7rb794a5593PjPQfzDsQgwy.BXF1LNPw4lZLK6BR6Kidf90.@$%hummstaffing???AD",
          Authorization: `Bearer ${localStorage.getItem("access_key")}`,
        },
      })
      .then((res) => {
        console.log(res);
        setOpen(false);
 if (res.status === 200) {
  toast.success("Deleted Successfully", {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
 } else {
   toast.error(` Error ${res.message}`, {
     position: "bottom-center",
     autoClose: 5000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
     theme: "light",
   });
 };
      })
      .catch((err) => {
        console.log(err);
        setOpen(true);
        toast.error(` Error ${err.message}`, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <img
        className="cursor my-auto"
        height="20px"
        onClick={handleClickOpen}
        src={deleteicon}
      />
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" className="deletingheading">
          {"Are You sure to delete this Job?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <center>
              <img src={deleting} width="200px" />
            </center>
          </DialogContentText>
        </DialogContent>
        <DialogActions className="d-flex justify-content-center mb-3">
          <Button className="nobtn px-5 py-2 rounded" onClick={handleClose}>
            No
          </Button>
          <Button
            className="yesbtn rounded px-5 py-2 "
            onClick={() => Deletedapi()}
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      < ToastContainer / >
    </div>
  );
}

export default Delete;
