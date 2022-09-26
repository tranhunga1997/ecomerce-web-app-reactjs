import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import "./css/styles.scss";

function RegisterPage() {
    return (
        <div className="box-container">
            <Box
                padding="24px 62px"
                textAlign="center"
            >
                <Typography
                    align="center"
                    component="h1"
                    fontSize="30px"
                    marginBottom="30px"
                >ĐĂNG KÝ</Typography>
                <form>
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
                                placeholder="Nhập mật khẩu..."
                                label="Mật khẩu"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                name="pwdConfirm"
                                placeholder="Xác nhận mật khẩu..."
                                label="Xác nhận mật khẩu"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid container item spacing="20px" textAlign="left">
                            <Grid item>
                                <TextField
                                    name="birthdayYear"
                                    type="number"
                                    placeholder="Năm"
                                    label="Năm sinh"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    name="birthdayMonth"
                                    type="number"
                                    placeholder="Tháng"
                                    label="Tháng sinh"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    name="birthdayDay"
                                    type="number"
                                    placeholder="Ngày"
                                    label="Ngày sinh"
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                        <Grid item>
                            <TextField
                                name="firstname"
                                placeholder="Nhập họ..."
                                label="Họ"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                name="lastname"
                                placeholder="Nhập tên..."
                                label="Tên"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
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
                            <Button variant="contained" color="primary" type="submit" fullWidth>Đăng ký</Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </div>
    )
}

export default RegisterPage;