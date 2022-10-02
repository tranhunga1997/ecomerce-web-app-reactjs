import { Button, CircularProgress, Container, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import userApi from "../api/userApi";

const columns = [
    { field: "username", headerName: "Tài khoản" },
    { field: "firstname", headerName: "Họ" },
    { field: "lastname", headerName: "Tên" },
    { field: "email", headerName: "Email" },
    { field: "actions", headerName: "Actions" },
]

function UserList() {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(0);
    const [rowPerPage, setRowPerPage] = useState(10);
    const [isRender, setIsRender] = useState(false);

    const getAllUser = () => {
        userApi.getAll()
            .then(data => {
                setUsers(data)
                setIsRender(true);
            })
            .catch(err => alert("call api failed"))
    }

    const handleChangePage = (e, page) => {
        setPage(page)
    }

    const handleRowPerPage = (e) => {
        setRowPerPage(e.target.value);
        setPage(0)
    }

    const handleBlock = (username) => {
        alert(`Đã khóa tài khoản: ${username}`)
    }

    useEffect(() => {
        getAllUser();
    }, [])

    return (
        <Container
            sx={{
                marginTop: "32px",
                marginBottom: "32px",
            }}
        >
            <Typography
                align="center"
                component="h1"
                fontSize="30px"
                marginBottom="30px"
            >DANH SÁCH TÀI KHOẢN</Typography>
            <TableContainer component={Paper}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>Tài khoản</TableCell>
                            <TableCell>Họ</TableCell>
                            <TableCell>Tên</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {isRender ?
                            users.map(user => (
                                <TableRow key={user.id}>
                                    <TableCell>{user.username}</TableCell>
                                    <TableCell>{user.name.firstname}</TableCell>
                                    <TableCell>{user.name.lastname}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>
                                        <Button variant="contained" color="error" size="small" onClick={() => handleBlock(user.username)}>Khóa</Button>
                                    </TableCell>
                                </TableRow>
                            ))
                            :
                            <TableRow>
                                <CircularProgress
                                    sx={{
                                        marginLeft: "50%",
                                    }}
                                />
                            </TableRow>
                        }
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                labelRowsPerPage="Số hàng trong bảng"
                                rowsPerPage={rowPerPage}
                                page={page}
                                count={100}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleRowPerPage}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default UserList;