import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import "./css/styles.scss";

function ChangePwdPage() {
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
                >THAY ĐỔI MẬT KHẨU</Typography>

                <form>
                    <Grid container
                        direction="column"
                        spacing={3}
                    >
                        <Grid item>
                            <TextField
                                name="oldPwd"
                                type="password"
                                placeholder="Nhập mật khẩu cũ..."
                                label="Mật khẩu cũ"
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
                            <Button variant="contained" color="primary" type="submit" fullWidth>Thay đổi</Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </div>
    )
}

export default ChangePwdPage;