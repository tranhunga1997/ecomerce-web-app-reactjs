import { Box, Button, Container, Grid, IconButton, Stack, Tab, Tabs, Typography } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import TabPanel from "../components/TabPanel";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import productApi from "../api/productApi";

function ProductDetailPage() {
    const location = useLocation();
    const [valueTab, setValueTab] = useState(0);
    const [product, setProduct] = useState({});
    const productId = location.state.id;
    console.log("location: ", location.state.id);

    const handleChangeTab = (e, newValue) => {
        setValueTab(newValue)
    }

    useEffect(() => {
        productApi.getDetail(productId)
            .then(product => setProduct(product))
            .catch(err => {
                throw new Error(err.message);
            })
    }, [productId])

    return (
        <Container
            sx={{
                paddingTop: "24px",
                paddingBottom: "24px",
            }}
        >
            <Grid container justifyContent="space-between">
                <Grid item xs={5}>
                    {/* IMAGE LIST */}
                    <img src={product.image} width="100%" alt="img-1" />
                </Grid>
                <Grid item xs={6.5}>
                    {/* PRODUCT INFO */}
                    <Stack>
                        <Box
                            display="flex"
                            gap="12px"
                        >
                            <Typography
                                component="span"
                                padding="12px"
                                fontSize="10px"
                                backgroundColor="#F3ECDA"
                            >
                                Best Seller
                            </Typography>

                            <Typography
                                component="span"
                                padding="12px"
                                fontSize="10px"
                                backgroundColor="#F5E4E3"
                            >
                                Running Low
                            </Typography>
                        </Box>
                        <Typography
                            component="h2"
                            fontSize="36px"
                            fontWeight="bold"
                            marginTop="16px"
                        >
                            {product.title}
                        </Typography>
                        <Typography
                            component="span"
                        >
                            {product.category}
                        </Typography>
                        <Typography
                            component="p"
                            fontWeight="600"
                            fontSize="18px"
                            marginTop="8px"
                        >
                            Color: red
                        </Typography>
                        <Typography
                            component="p"
                            fontSize="40px"
                            fontWeight="bold"
                            marginTop="18px"
                            marginBottom="18px"
                        >
                            {product.price}
                        </Typography>
                        <Stack
                            direction="row"
                            spacing={2}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: "2px",
                                    border: "1px solid #828282",
                                    borderRadius: "2px"
                                }}
                            >
                                <IconButton color="error">
                                    <RemoveCircleIcon />
                                </IconButton>
                                <span>2</span>
                                <IconButton color="primary">
                                    <AddCircleIcon />
                                </IconButton>
                            </Box>
                            <Button variant="contained" color="success" fullWidth>Thêm vào giỏ hàng</Button>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
            <br />
            {/* ĐÁNH GIÁ, MÔ TẢ */}
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={valueTab} onChange={handleChangeTab} aria-label="basic tabs example">
                    <Tab label="Mô tả sản phẩm" id="tab-mo-ta" />
                    <Tab label="Đánh giá sản phẩm" id="tab-danh-gia" />
                </Tabs>
            </Box>
            <TabPanel value={valueTab} index={0}>
                <p>{product.description}</p>
            </TabPanel>
            <TabPanel value={valueTab} index={1}>
                Item Two
            </TabPanel>
        </Container>
    )
}

export default ProductDetailPage;