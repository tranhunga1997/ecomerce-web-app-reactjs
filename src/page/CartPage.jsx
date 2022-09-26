import { useSelect } from '@mui/base';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Box, Button, Container, Divider, Grid, IconButton, Paper, Stack, Typography } from "@mui/material";
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "./css/styles.scss";

function CartPage() {
    const user = useSelector(state => state.user)
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) navigate('/')
    }, [])

    return (
        <div className="box-container-5"
            style={{
                padding: "32px"
            }}
        >
            <Typography
                align="center"
                component="h1"
                fontSize="30px"
                marginBottom="30px"
            >GIỎ HÀNG</Typography>
            {/* CART ITEM INFO */}
            <Grid container justifyContent="space-between">
                <Grid item xs={7.5}>
                    <Paper elevation={3}>
                        <Stack direction="row" spacing={2} mt="16px" alignItems="center" justifyContent="space-between" padding="10px">
                            <IconButton color="secondary">
                                <CancelIcon />
                            </IconButton>
                            <img src="https://th.bing.com/th/id/OIP.cbXICaNuXZbCW6b1YasWKAHaHa?pid=ImgDet&rs=1" width="150" />
                            <h3>Duo-tone buildable Foundation</h3>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px"
                                }}
                            >
                                <IconButton color='error'>
                                    <RemoveCircleIcon />
                                </IconButton>
                                <span>2</span>
                                <IconButton color='primary'>
                                    <AddCircleIcon />
                                </IconButton>
                            </Box>
                            <span>3000000 VND</span>
                        </Stack>
                    </Paper>
                    <Paper elevation={3}>
                        <Stack direction="row" spacing={2} mt="16px" alignItems="center" justifyContent="space-between" padding="10px">
                            <IconButton color="secondary">
                                <CancelIcon />
                            </IconButton>
                            <img src="https://th.bing.com/th/id/OIP.cbXICaNuXZbCW6b1YasWKAHaHa?pid=ImgDet&rs=1" width="150" />
                            <h3>Duo-tone buildable Foundation</h3>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px"
                                }}
                            >
                                <IconButton color='error'>
                                    <RemoveCircleIcon />
                                </IconButton>
                                <span>2</span>
                                <IconButton color='primary'>
                                    <AddCircleIcon />
                                </IconButton>
                            </Box>
                            <span>3000000 VND</span>
                        </Stack>
                    </Paper>
                    <Paper elevation={3}>
                        <Stack direction="row" spacing={2} mt="16px" alignItems="center" justifyContent="space-between" padding="10px">
                            <IconButton color="secondary">
                                <CancelIcon />
                            </IconButton>
                            <img src="https://th.bing.com/th/id/OIP.cbXICaNuXZbCW6b1YasWKAHaHa?pid=ImgDet&rs=1" width="150" />
                            <h3>Duo-tone buildable Foundation</h3>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px"
                                }}
                            >
                                <IconButton color='error'>
                                    <RemoveCircleIcon />
                                </IconButton>
                                <span>2</span>
                                <IconButton color='primary'>
                                    <AddCircleIcon />
                                </IconButton>
                            </Box>
                            <span>3000000 VND</span>
                        </Stack>
                    </Paper>
                    <Paper elevation={3}>
                        <Stack direction="row" spacing={2} mt="16px" alignItems="center" justifyContent="space-between" padding="10px">
                            <IconButton color="secondary">
                                <CancelIcon />
                            </IconButton>
                            <img src="https://th.bing.com/th/id/OIP.cbXICaNuXZbCW6b1YasWKAHaHa?pid=ImgDet&rs=1" width="150" />
                            <h3>Duo-tone buildable Foundation</h3>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px"
                                }}
                            >
                                <IconButton color='error'>
                                    <RemoveCircleIcon />
                                </IconButton>
                                <span>2</span>
                                <IconButton color='primary'>
                                    <AddCircleIcon />
                                </IconButton>
                            </Box>
                            <span>3000000 VND</span>
                        </Stack>
                    </Paper>
                    <Paper elevation={3}>
                        <Stack direction="row" spacing={2} mt="16px" alignItems="center" justifyContent="space-between" padding="10px">
                            <IconButton color="secondary">
                                <CancelIcon />
                            </IconButton>
                            <img src="https://th.bing.com/th/id/OIP.cbXICaNuXZbCW6b1YasWKAHaHa?pid=ImgDet&rs=1" width="150" />
                            <h3>Duo-tone buildable Foundation</h3>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px"
                                }}
                            >
                                <IconButton color='error'>
                                    <RemoveCircleIcon />
                                </IconButton>
                                <span>2</span>
                                <IconButton color='primary'>
                                    <AddCircleIcon />
                                </IconButton>
                            </Box>
                            <span>3000000 VND</span>
                        </Stack>
                    </Paper>
                    <Paper elevation={3}>
                        <Stack direction="row" spacing={2} mt="16px" alignItems="center" justifyContent="space-between" padding="10px">
                            <IconButton color="secondary">
                                <CancelIcon />
                            </IconButton>
                            <img src="https://th.bing.com/th/id/OIP.cbXICaNuXZbCW6b1YasWKAHaHa?pid=ImgDet&rs=1" width="150" />
                            <h3>Duo-tone buildable Foundation</h3>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px"
                                }}
                            >
                                <IconButton color='error'>
                                    <RemoveCircleIcon />
                                </IconButton>
                                <span>2</span>
                                <IconButton color='primary'>
                                    <AddCircleIcon />
                                </IconButton>
                            </Box>
                            <span>3000000 VND</span>
                        </Stack>
                    </Paper>
                    <Paper elevation={3}>
                        <Stack direction="row" spacing={2} mt="16px" alignItems="center" justifyContent="space-between" padding="10px">
                            <IconButton color="secondary">
                                <CancelIcon />
                            </IconButton>
                            <img src="https://th.bing.com/th/id/OIP.cbXICaNuXZbCW6b1YasWKAHaHa?pid=ImgDet&rs=1" width="150" />
                            <h3>Duo-tone buildable Foundation</h3>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px"
                                }}
                            >
                                <IconButton color='error'>
                                    <RemoveCircleIcon />
                                </IconButton>
                                <span>2</span>
                                <IconButton color='primary'>
                                    <AddCircleIcon />
                                </IconButton>
                            </Box>
                            <span>3000000 VND</span>
                        </Stack>
                    </Paper>
                    <Paper elevation={3}>
                        <Stack direction="row" spacing={2} mt="16px" alignItems="center" justifyContent="space-between" padding="10px">
                            <IconButton color="secondary">
                                <CancelIcon />
                            </IconButton>
                            <img src="https://th.bing.com/th/id/OIP.cbXICaNuXZbCW6b1YasWKAHaHa?pid=ImgDet&rs=1" width="150" />
                            <h3>Duo-tone buildable Foundation</h3>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px"
                                }}
                            >
                                <IconButton color='error'>
                                    <RemoveCircleIcon />
                                </IconButton>
                                <span>2</span>
                                <IconButton color='primary'>
                                    <AddCircleIcon />
                                </IconButton>
                            </Box>
                            <span>3000000 VND</span>
                        </Stack>
                    </Paper>
                </Grid>
                {/* TOTAL PRICE INFO */}
                <Grid item xs={4}>
                    <Grid container direction="column" gap="42px">
                        <Grid item>
                            <h2>CART TOTAL:</h2>
                            <Stack direction="row" justifyContent="space-between">
                                <p>Thành tiền: </p>
                                <p>100000 VND</p>
                            </Stack>
                            <Stack direction="row" justifyContent="space-between">
                                <p>Thuế: </p>
                                <p>20000 VND</p>
                            </Stack>
                            <Divider />
                            <Stack direction="row" justifyContent="space-between">
                                <h3>Tổng cộng: </h3>
                                <h3>120000 VND</h3>
                            </Stack>
                        </Grid>
                        <Grid item>
                            <Button variant='contained' fullWidth color='primary'>Thanh toán</Button>
                        </Grid>
                        <Grid item>
                            <Button
                                color="primary"
                                fullWidth
                                onClick={() => navigate('/products')}>Tiếp tục mua</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default CartPage;