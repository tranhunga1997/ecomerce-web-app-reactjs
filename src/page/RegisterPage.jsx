import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import "./css/styles.scss";

const validateSchema = yup.object({
    username: yup
        .string("Hãy nhập tài khoản !")
        .matches(/^[^`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]*$/gi, "Không được nhập ký tự đặc biệt !")
        .required("Hãy nhập tài khoản !"),

    password: yup
        .string("Hãy nhập mật khẩu !")
        .min(6, "Hãy nhập mật khẩu có độ dài lớn hơn 6 ký tự !")
        .required("Hãy nhập mật khẩu !"),
    
    confirmPassword: yup
        .string("Hãy nhập xác nhận mật khẩu !")
        .oneOf([yup.ref("password"), null], "Xác nhận mật khẩu không khớp !")
        .required("Hãy xác nhận mật khẩu !"),

    birthdayYear: yup
        .number("Chỉ được nhập số !")
        .test("length", "Hãy nhập 4 số !", value => value?.toString().length === 4)
        .positive("Giá trị không hợp lệ !"),

    birthdayMonth: yup
        .number("Chỉ được nhập số !")
        .test("length", "Hãy nhập 2 số !", value => value?.toString().length === 2)
        .test("month range", "Giá trị không hợp lệ !", value => value >= 1 && value <= 12),

    birthdayDay: yup
        .number("Chỉ được nhập số !")
        .test("length", "Hãy nhập 2 số !", value => value?.toString().length === 2)
        .test("day range", "Giá trị không hợp lệ !", function(value) {
            const {birthdayYear, birthdayMonth} = this.parent;
            const daysInMonth = new Date(birthdayYear, birthdayMonth, 0).getDate();

            if (Boolean(daysInMonth)) {
                return value >= 1 && value <= daysInMonth;
            } else {
                return false;
            }
        }),

    firstname: yup
        .string("Hãy nhập họ !")
        .notRequired(),

    lastname: yup
        .string("Hãy nhập tên !")
        .notRequired(),

    email: yup
        .string("Hãy nhập email !")
        .email("Hãy nhập email !")
        .required("Hãy nhập email !")
})

function RegisterPage() {
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            confirmPassword: "",
            birthdayYear: "",
            birthdayMonth: "",
            birthdayDay: "",
            firstname: "",
            lastname: "",
            email: ""
        },
        validationSchema: validateSchema,
        onSubmit: values => {
            alert("Đăng ký thành công.");
        }
    })

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
                <form onSubmit={formik.handleSubmit}>
                    <Grid container direction="column" rowSpacing={2}>
                        <Grid item>
                            <TextField
                                name="username"
                                placeholder="Nhập tài khoản..."
                                label="Tài khoản"
                                variant="outlined"
                                value={formik.values.username}
                                fullWidth
                                error={formik.touched.username && Boolean(formik.errors.username)}
                                helperText={formik.touched.username && formik.errors.username}
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
                                value={formik.values.password}
                                fullWidth
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                                onChange={formik.handleChange}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                name="confirmPassword"
                                type="password"
                                placeholder="Xác nhận mật khẩu..."
                                label="Xác nhận mật khẩu"
                                variant="outlined"
                                value={formik.values.confirmPassword}
                                fullWidth
                                error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                                helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                                onChange={formik.handleChange}
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
                                    maxRows={4}
                                    maxLength="4"
                                    value={formik.values.birthdayYear}
                                    error={formik.touched.birthdayYear && Boolean(formik.errors.birthdayYear)}
                                    helperText={formik.touched.birthdayYear && formik.errors.birthdayYear}
                                    onChange={formik.handleChange}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    name="birthdayMonth"
                                    type="number"
                                    placeholder="Tháng"
                                    label="Tháng sinh"
                                    variant="outlined"
                                    maxRows={2}
                                    value={formik.values.birthdayMonth}
                                    error={formik.touched.birthdayMonth && Boolean(formik.errors.birthdayMonth)}
                                    helperText={formik.touched.birthdayMonth && formik.errors.birthdayMonth}
                                    onChange={formik.handleChange}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    name="birthdayDay"
                                    type="number"
                                    placeholder="Ngày"
                                    label="Ngày sinh"
                                    variant="outlined"
                                    maxRows={2}
                                    value={formik.values.birthdayDay}
                                    error={formik.touched.birthdayDay && Boolean(formik.errors.birthdayDay)}
                                    helperText={formik.touched.birthdayDay && formik.errors.birthdayDay}
                                    onChange={formik.handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid item>
                            <TextField
                                name="firstname"
                                placeholder="Nhập họ..."
                                label="Họ"
                                variant="outlined"
                                value={formik.values.firstname}
                                fullWidth
                                error={formik.touched.firstname && Boolean(formik.errors.firstname)}
                                helperText={formik.touched.firstname && formik.errors.firstname}
                                onChange={formik.handleChange}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                name="lastname"
                                placeholder="Nhập tên..."
                                label="Tên"
                                variant="outlined"
                                value={formik.values.lastname}
                                fullWidth
                                error={formik.touched.lastname && Boolean(formik.errors.lastname)}
                                helperText={formik.touched.lastname && formik.errors.lastname}
                                onChange={formik.handleChange}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                name="email"
                                type="email"
                                placeholder="Nhập email..."
                                label="Email"
                                variant="outlined"
                                value={formik.values.email}
                                fullWidth
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                                onChange={formik.handleChange}
                            />
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="primary" type="submit" fullWidth disabled={formik.isSubmitting}>Đăng ký</Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </div>
    )
}

export default RegisterPage;