import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Modal, Select, TextField, Typography } from "@mui/material";
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

function FilterModal({ isOpen, onCloseHandle }) {
    const navigate = useNavigate();

    const onSubmitHandle = (e) => {
        navigate('/products')
    }

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
                    <form onSubmit={onSubmitHandle}>
                        <Grid container spacing="18px" direction="column">
                            <Grid item>
                                <TextField
                                    name="productName"
                                    label="Tên sản phẩm"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>

                            <Grid container item spacing="30px" flexWrap="nowrap">
                                <Grid item>
                                    <TextField
                                        name="minPrice"
                                        type="number"
                                        label="Giá từ"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        name="minPrice"
                                        type="number"
                                        label="Giá đến"
                                        variant="outlined"
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
                                        label="Age"
                                    // onChange={handleChange}
                                    >
                                        <MenuItem value={1}>Nước hoa</MenuItem>
                                        <MenuItem value={2}>Son môi</MenuItem>
                                        <MenuItem value={3}>Serum</MenuItem>
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