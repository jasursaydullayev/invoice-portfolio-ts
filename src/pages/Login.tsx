import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider, realDB } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { child, get, getDatabase, ref, set } from "firebase/database";
import { Google } from "@mui/icons-material";
import { toast } from "react-toastify";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        if (error == "auth/invalid-credential") {
          console.log("da");
        }
      });
    toast.success("Login successful");
    navigate("/");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // With Google
    signInWithPopup(auth, googleProvider).then((person) => {
      console.log(person);
      toast.success("With Google Account Create");

      const userName = person.user.email?.slice(0, -10);
      const dbRef = ref(getDatabase());
      get(child(dbRef, `users/${userName}`)).then((snap) => {
        if (snap.exists()) {
          //  Have
        } else {
          set(ref(realDB, `users/${userName}`), {
            userName,
          });
        }
      });

      navigate("/");
    });
  };
  return (
    <>
      <Grid container component="main" sx={{ height: "100%" }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={8.1}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={3.9}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <svg
              width="74"
              height="93"
              viewBox="0 0 103 103"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0H83C94.0457 0 103 8.9543 103 20V83C103 94.0457 94.0457 103 83 103H0V0Z"
                fill="#7C5DFA"
              />
              <mask
                id="mask0_1_33"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="103"
                height="103"
              >
                <path
                  d="M0 0H83C94.0457 0 103 8.9543 103 20V83C103 94.0457 94.0457 103 83 103H0V0Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_1_33)">
                <path
                  d="M103 52H20C8.95431 52 0 60.9543 0 72V135C0 146.046 8.95431 155 20 155H103V52Z"
                  fill="#9277FF"
                />
              </g>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M42.6942 33.2922L52 51.9999L61.3058 33.2922C67.6645 36.6407 72 43.314 72 50.9999C72 62.0456 63.0457 70.9999 52 70.9999C40.9543 70.9999 32 62.0456 32 50.9999C32 43.314 36.3355 36.6407 42.6942 33.2922Z"
                fill="white"
              />
            </svg>
            <Typography component="h1" variant="h5" sx={{ mt: "10px" }}>
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                autoComplete="current-password"
              />
              <button
                onClick={login}
                className="w-full py-[5px] bg-[#1976d2] rounded-lg text-white font-semibold text-[19px] tracking-[1px]"
              >
                Sign in
              </button>
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
                  variant="outlined"
                  sx={{ mt: 1, mb: 3, width: "100%", maxWidth: "127px" }}
                >
                  <Google />
                </Button>
              </Grid>
              <Grid container>
                <Grid item>
                  <Link to="/signup" className="link text-[#1976d2]">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
