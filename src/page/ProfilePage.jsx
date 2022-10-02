import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import "./css/styles.scss";

function ProfilePage() {
    return (
        <div className="box-container-50">
            <Box
                padding="24px 62px"
            >
                <Typography
                    textAlign="center"
                    component="h1"
                    fontSize="30px"
                    marginBottom="30px"
                >
                    THÔNG TIN TÀI KHOẢN
                </Typography>
                <Stack
                    divider={<Divider/>}
                >
                    <p>Họ tên: Trần Mạnh Hùng</p>
                    <p>Giới tính: Nam</p>
                    <p>Ngày sinh: 30/2/1997</p>
                    <p>Email: *******97@gmail.com</p>
                    <p>Trạng thái tài khoản: <span style={{
                        padding: "8px 12px",
                        color: "#fff",
                        backgroundColor: "#039303",
                        borderRadius: "2px",
                        textTransform: "uppercase",
                        fontSize: "12px"
                    }}>đã kích hoạt</span></p>
                    <Button 
                    variant="contained"
                    color="primary"
                    sx={{
                        alignSelf: "center",
                        marginTop: "20px"
                    }}
                     >Thay đổi thông tin</Button>
                </Stack>
            </Box>
        </div>
    )
}

export default ProfilePage;