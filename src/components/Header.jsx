import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Divider, Grid, Menu, MenuItem, MenuList, Stack } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FilterModal from "../page/FilterModal";
import headerStyles from "./css/header.module.scss";

function Header() {
    const user = useSelector(state => state.user);
    const [openModal, setOpenModal] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(false);

    const openModalHandle = () => setOpenModal(true);

    const closeModalHandle = () => setOpenModal(false);

    const logoutHandle = () => {
        localStorage.removeItem("user-info")
        window.location.reload()
    }
    return (
        <>
            <Grid container
                flexWrap="nowrap"
                justifyContent="space-between"
                alignItems="center"
                textAlign="center"
                sx={{
                    width: "100%",
                    paddingTop: "16px",
                    paddingBottom: "16px"
                }}
            >
                <Grid item xs>
                    <MenuIcon />
                </Grid>
                <Grid item xs={8}>
                    <Link to="/"><h1 style={{ display: "inline" }}>Canopy</h1></Link>
                </Grid>
                <Grid item container
                    justifyContent="center"
                    alignItems="center"
                    spacing={3}
                    flexGrow={1}
                    sx={{
                        width: "unset",
                        marginRight: "40px"
                    }}
                >
                    <Grid item>
                        <SearchIcon
                            sx={{
                                fontSize: "36px",
                                cursor: "pointer"
                            }}
                            onClick={openModalHandle} />
                    </Grid>
                    <Grid item>
                        {user ?
                            <ul>
                                <li className={headerStyles.dropdownHeader}>
                                    <p
                                        style={{
                                            cursor: "default",
                                            margin: 0,
                                            padding: "8px 0"
                                        }}
                                    >Chào, {user.username || "Guest"}</p>
                                    <ul className={headerStyles.dropdownContent}>
                                        <li>
                                            <Link>Thông tin tài khoản</Link>
                                        </li>
                                        <li>
                                            <Link to="/product/cart">Giỏ hàng</Link>
                                        </li>
                                        <li>
                                            <span style={{ cursor: "pointer" }} onClick={logoutHandle}>Đăng xuất</span>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            :
                            <Link to="/user/login"><PersonIcon sx={{ fontSize: "36px" }} /></Link>
                        }
                    </Grid>
                </Grid>
            </Grid>
            {/* FILTER MODAL */}
            <FilterModal
                isOpen={openModal}
                onCloseHandle={closeModalHandle}
            />
        </>
    )
}

export default Header;