import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebaseConfig";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { Google } from "@mui/icons-material";
export default function SignUp() {
  const { register, handleSubmit } = useForm();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<any>(null);
  const [isPopUp, setIsPopUp] = useState(false);
  const navigate = useNavigate();

  const handleSubmitForMyInputs = (event: any) => {
    if (!isPopUp) {
      if (!event.email || !event.email.length) {
        setEmailError("Please enter Email");
        return false;
      } else {
        setEmailError("");
      }
      if (!event.password || !event.password.length) {
        setPasswordError("Please enter Password");
        return false;
      } else {
        setPasswordError("");
      }
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential);
        })
        .catch((error) => {
          console.log(error);
        });
      toast.success("Account Create Successfully");
      navigate("/");
    }
    // With Google
    else
      signInWithPopup(auth, googleProvider).then((person) => {
        console.log(person);
        toast.success("With Google Account Create");
        navigate("/");
      });
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(handleSubmitForMyInputs)}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            error={emailError && emailError.length ? true : false}
            required
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            {...register("email")}
            helperText={emailError}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            required
            error={passwordError && passwordError.length ? true : false}
            margin="normal"
            fullWidth
            label="Password"
            {...register("password")}
            type="password"
            value={password}
            helperText={passwordError}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
          />
          <Button
            type="submit"
            onClick={() => setIsPopUp(false)}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "19px",
                textAlign: "center",
                marginY: "10px",
              }}
            >
              or
            </Typography>
            <Button
              type="submit"
              onClick={() => setIsPopUp(true)}
              variant="outlined"
              sx={{ mt: 1, mb: 3, width: "100%", maxWidth: "127px" }}
            >
              <Google />
            </Button>
          </Grid>
          <Grid container>
            <Grid item>
              <Link className="link text-[#1976d2]" to={"/login"}>
                {"Already have an account? Sign in"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
