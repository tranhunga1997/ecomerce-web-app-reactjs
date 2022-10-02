import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Modal, Select, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

FilterModal.propTypes = {
    isOpen: PropTypes.bool,
    onCloseHandle: PropTypes.func,
}

const validationSchema = yup.object({
    productName: yup
        .string()
        .matches(/^[^`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]*$/gi, "Không được nhập ký tự đặc biệt !"),

    minPrice: yup
        .number("chỉ nhập được số !")
        .test("price constrains", "Chưa nhập giá tối thiểu", function (value) {
            const { maxPrice } = this.parent;
            if (value && maxPrice) {
                return true;
            } else if (!maxPrice) {
                return true;
            } else {
                return false
            }
        })
        .positive(),

    maxPrice: yup
        .number("chỉ nhập được số !")
        .test("price constrains", "Chưa nhập giá tối đa", function (value) {
            const { minPrice } = this.parent;
            if (value && minPrice) {
                return true;
            } else if (!minPrice) {
                return true;
            } else {
                return false;
            }
        })
        .positive(),
})

function FilterModal({ isOpen, onCloseHandle }) {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            productName: "",
            minPrice: "",
            maxPrice: "",
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            navigate('/products')
        }
    })

    return (
        <Modal
            open={isOpen}
            onClose={onCloseHandle}
            aria-labelledby="product filter modal"
        >
            <Box sx={style}>
                <Grid container direction="column">
                    <Grid item textAlign="center" marginBottom="22px">
                        <h2>TÌM KIẾM SẢN PHẨM</h2>
                    </Grid>
                    <form onSubmit={formik.handleSubmit}>
                        <Grid container spacing="18px" direction="column">
                            <Grid item>
                                <TextField
                                    name="productName"
                                    label="Tên sản phẩm"
                                    variant="outlined"
                                    fullWidth
                                    value={formik.values.productName}
                                    error={formik.touched.productName && Boolean(formik.errors.productName)}
                                    helperText={formik.touched.productName && formik.errors.productName}
                                    onChange={formik.handleChange}
                                />
                            </Grid>

                            <Grid container item spacing="30px" flexWrap="nowrap">
                                <Grid item>
                                    <TextField
                                        name="minPrice"
                                        type="number"
                                        label="Giá tối thiểu"
                                        variant="outlined"
                                        value={formik.values.minPrice}
                                        error={formik.touched.minPrice && Boolean(formik.errors.minPrice)}
                                        helperText={formik.touched.minPrice && formik.errors.minPrice}
                                        onChange={formik.handleChange}
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        name="maxPrice"
                                        type="number"
                                        label="Giá tối đa"
                                        variant="outlined"
                                        value={formik.values.maxPrice}
                                        error={formik.touched.maxPrice && Boolean(formik.errors.maxPrice)}
                                        helperText={formik.touched.maxPrice && formik.errors.maxPrice}
                                        onChange={formik.handleChange}
                                    />
                                </Grid>
                            </Grid>

                            <Grid item>
                                <FormControl fullWidth>
                                    <InputLabel id="category">Danh mục</InputLabel>
                                    <Select
                                        labelId="category"
                                        id="category"
                                        // value={age}
                                        defaultValue={""}
                                        label="Age"
                                        // onChange={handleChange}
                                    >
                                        <MenuItem value={0}>Nước hoa</MenuItem>
                                        <MenuItem value={1}>Son môi</MenuItem>
                                        <MenuItem value={2}>Serum</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item>
                                <FormControl fullWidth>
                                    <InputLabel id="category">Thương hiệu</InputLabel>
                                    <Select
                                        labelId="category"
                                        id="category"
                                        // value={age}
                                        defaultValue={""}
                                        label="Age"
                                        // onChange={handleChange}
                                    >
                                        <MenuItem value={1}>Brand 1</MenuItem>
                                        <MenuItem value={2}>Brand 2</MenuItem>
                                        <MenuItem value={3}>Brand 3</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item
                                style={{
                                    display: "flex",
                                    justifyContent: "space-evenly"
                                }}
                            >
                                <Button type="submit" variant="contained">Tìm kiếm</Button>
                                <Button type="button" variant="contained" color="error" onClick={onCloseHandle}>Đóng</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Box>
        </Modal>
    )
}

export default FilterModal;