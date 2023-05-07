import { useState } from "react";
import Common from "./Common"
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom"

const Login = () => {

    const [userId, setUserId] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const navigate = useNavigate()

    const checkInput = () => {
        if (userId == "admin" && password == "P@ssw0rd") {
            navigate('/Menu');
        } else {
            setErrorMessage("IDまたはパスワードが違います");
            navigate('/');
        }
    }

    return (
        <div>
            <Common />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" >
                    ログイン
                </Typography>
                <TextField
                    margin="normal"
                    required
                    id="id"
                    label="ID"
                    name="id"
                    autoComplete="id"
                    inputProps={{ sx: { width: 400 } }}
                    onChange={(e) => setUserId(e.target.value)}
                />
                <TextField
                    margin="normal"
                    required
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    inputProps={{ sx: { width: 400 } }}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
                <text>{errorMessage}</text>
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={checkInput}
                >
                    Sign In
                </Button>
            </Box>
        </div>
    );
}

export default Login;