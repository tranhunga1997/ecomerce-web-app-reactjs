import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import "./css/styles.scss";

function ForgetPwdPage() {
    return (
        <div className="box-container-50">
            <Box
                padding="24px"
                textAlign="center"
            >
                <Typography
                    align="center"
                    component="h1"
                    fontSize="30px"
                    marginBottom="30px"
                >QUÊN MẬT KHẨU</Typography>

                <form>
                    <Grid container
                        direction="column"
                        spacing={3}
                    >
                        <Grid item>
                            <TextField
                                name="email"
                                type="email"
                                placeholder="Nhập email..."
                                label="Email"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                name="newPwd"
                                type="password"
                                placeholder="Nhập mật khẩu mới..."
                                label="Mật khẩu mới"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                name="newPwdConfirm"
                                type="password"
                                placeholder="Xác nhận mật khẩu mới..."
                                label="Xác nhận mật khẩu"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="primary" type="submit" fullWidth>Quên mật khẩu</Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </div>
    )
}

export default ForgetPwdPage;