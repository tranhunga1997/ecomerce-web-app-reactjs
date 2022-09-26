import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./css/styles.scss";

function LoginPage() {
    const user = useSelector(state => state.user)
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            navigate("/")
        }
    }, [])

    const loginHandle = (e) => {
        const form = e.target;
        const username = form.querySelector("input[name='username']").value;
        const password = form.querySelector("input[name='pwd']").value;

        localStorage.setItem("user-info", JSON.stringify({
            username,
            password
        }))
    }


    return (
        <div className="box-container-50">
            <Box
                padding="24px 62px"
                paddingBottom="100px"
                textAlign="center"
            >
                <Typography
                    align="center"
                    component="h1"
                    fontSize="30px"
                    marginBottom="30px"
                >ĐĂNG NHẬP</Typography>
                <form onSubmit={loginHandle}>
                    <Grid container direction="column" rowSpacing={2}>
                        <Grid item>
                            <TextField
                                name="username"
                                placeholder="Nhập tài khoản..."
                                label="Tài khoản"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                name="pwd"
                                type="password"
                                placeholder="Nhập mật khẩu..."
                                label="Mật khẩu"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item>
                            <Typography
                                align="right"
                                marginBottom="8px"
                            ><Link to="/user/register" style={{ textDecoration: "underline" }}>Tạo tài khoản mới?</Link></Typography>
                            <Button variant="contained" color="primary" type="submit" fullWidth>Đăng nhập</Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </div>
    )
}

export default LoginPage;