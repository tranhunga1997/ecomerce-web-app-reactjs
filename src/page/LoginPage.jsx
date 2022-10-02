import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { getAllUser, loginThunk } from "../redux/user/userThunk";
import "./css/styles.scss";

const validateSchema = yup.object({
    username: yup
        .string("Hãy nhập tài khoản")
        .required("Hãy nhập tài khoản"),
    password: yup
        .string("Hãy nhập mật khẩu")
        .required("Hãy nhập mật khẩu")
})

function LoginPage() {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        validationSchema: validateSchema,
        onSubmit: values => {
            const params = {
                username: values.username,
                password: values.password
            }
            dispatch(loginThunk(params))
        }
    })

    useEffect(() => {
        if (user.token !== "") {
            navigate("/")
        }
    }, [user])

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
                <form onSubmit={formik.handleSubmit}>
                    <Grid container direction="column" rowSpacing={2}>
                        <Grid item>
                            <TextField
                                name="username"
                                placeholder="Nhập tài khoản..."
                                label="Tài khoản"
                                variant="outlined"
                                fullWidth
                                value={formik.values.username}
                                error={Boolean(formik.errors.username)}
                                helperText={formik.errors.username}
                                onChange={formik.handleChange}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                name="password"
                                type="password"
                                placeholder="Nhập mật khẩu..."
                                label="Mật khẩu"
                                variant="outlined"
                                fullWidth
                                value={formik.values.password}
                                error={Boolean(formik.touched.password)}
                                helperText={formik.touched.password && formik.errors.password}
                                onChange={formik.handleChange}
                            />
                        </Grid>
                        <Grid item>
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                mb="24px"
                            >
                                <Typography><Link to="/user/register" style={{ textDecoration: "underline" }}>Tạo tài khoản mới?</Link></Typography>
                                <Typography><Link to="/user/forget-password" style={{ textDecoration: "underline" }}>Quên mật khẩu?</Link></Typography>
                            </Stack>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                disabled={formik.isSubmitting}
                                fullWidth
                            >
                                Đăng nhập
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </div>
    )
}

export default LoginPage;