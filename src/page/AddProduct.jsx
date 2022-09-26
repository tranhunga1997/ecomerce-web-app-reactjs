import {
    Box,
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextareaAutosize,
    TextField,
    Typography
} from "@mui/material";
import { useRef, useState } from "react";
import "./css/styles.scss";

function AddProduct() {
    const [datetime, setDatetime] = useState(() => new Date().toISOString().split('.')[0]);
    const imageRef = useRef();

    /**
     * Hàm xử lý submit form
     * @param {Event} e 
     */
    const submitFormHandle = (e) => {
        e.defaultPrevented();
        
    }

    /**
     * Hàm xử lý chọn hình ảnh
     * @param {Event} e 
     */
    const imageSelectHandle = (e) => {
        const parentNode = e.target.parentElement;
        const inputNode = parentNode.children["uploadImage"];
        inputNode.click();
    }

    /**
     * Hàm xử lý render preview hình ảnh
     * @param {Event} e 
     */
    const renderImageHandle = (e) => {
        const parentNode = e.target.parentElement;
        const imgElement = parentNode.children["imgPreview"];
        const tempUrl = URL.createObjectURL(e.target.files[0]);

        if (imageRef.current) {
            URL.revokeObjectURL(imageRef.current)
        }

        imageRef.current = tempUrl;
        imgElement.src = tempUrl;
    }

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
                >THÊM SẢN PHẨM MỚI</Typography>
                <form>
                    <Grid container direction="column" rowSpacing={2}>
                        <Grid item textAlign="left">
                            <img src="https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg" width="200" name="imgPreview" />
                            <br />
                            <input type="file" name="uploadImage" onChange={renderImageHandle} hidden />
                            <Button
                                variant="outlined"
                                color="success"
                                onClick={imageSelectHandle}
                            >
                                Upload image
                            </Button>

                        </Grid>
                        <Grid item>
                            <TextField
                                name="name"
                                placeholder="Nhập tên sản phẩm..."
                                label="Tên sản phẩm"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                name="price"
                                type="number"
                                placeholder="Nhập giá..."
                                label="Giá"
                                variant="outlined"
                                fullWidth
                            />
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
                        <Grid item>
                            <TextField
                                name="shortDescription"
                                placeholder="Nhập mô tả ngắn..."
                                label="Mô tả ngắn"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item>
                            <TextareaAutosize
                                name="description"
                                placeholder="Nhập mô tả"
                                style={{
                                    width: '100%',
                                    height: '100px'
                                }}
                            />
                        </Grid>
                        <Grid item textAlign="left">
                            <TextField
                                name="startDateTime"
                                type="datetime-local"
                                label="Ngày bắt đầu bán"
                                defaultValue={datetime}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="success" type="submit" fullWidth>Thêm sản phẩm</Button>
                            <br /> <br />
                            <Button variant="contained" color="secondary" type="reset" fullWidth>Làm mới</Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </div>
    )
}

export default AddProduct;