import { Button, Container, Stack, TextField } from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";

const validate = yup.object({
    email: yup
        .string("Hãy nhập email")
        .email("Không đúng định dạng email")
        .required("Hãy nhập email")
})

function FormikDemo() {
    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema: validate,
        onSubmit: values => {
            console.log("email: ", values.email);
        }
    })

    return (
        <Container
            sx={{
                marginTop: "80px",
                marginBottom: "80px",
            }}
        >
            <Stack>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        error={Boolean(formik.errors.email)}
                        helperText={formik.errors.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <Button variant="contained" type="submit"
                        sx={{
                            alignSelf: "flex-start",
                        }}
                        disabled={formik.isSubmitting}
                    >Submit</Button>
                </form>
            </Stack>
        </Container>
    )
}

export default FormikDemo;