import { Button, Container } from "@mui/material";
import { useEffect, useState } from "react";
import productApi from "../api/productApi";
import MyCard from "../components/MyCard";

import "./css/productsStyles.scss";
import FilterModal from "./FilterModal";

function ProductPage() {
    const [openModal, setOpenModal] = useState(false);
    const [products, setProducts] = useState([])

    const openModalHandle = () => setOpenModal(true);

    const closeModalHandle = () => setOpenModal(false);

    useEffect(() => {
        productApi.getAll(5)
            .then(products => setProducts(products))
            .then(err => {
                throw new Error(err.message);
            })
    }, [])

    return (
        <Container style={{
            marginTop: "32px",
            marginBottom: "64px",
        }}>
            <div className="list-title">
                <span className="fw-400">Shop All (64 items)</span>
                <Button onClick={openModalHandle}>Filter</Button>
            </div>
            <div className="product-list">
                {products.map(p => (
                    <MyCard
                        key={p.id}
                        id={p.id}
                        image={p.image}
                        title={p.title}
                        text="50 shades"
                        price={p.price}
                    />
                ))}
                <MyCard
                    image="https://th.bing.com/th/id/OIP.cbXICaNuXZbCW6b1YasWKAHaHa?pid=ImgDet&rs=1"
                    title="Duo-tone buildable Foundation"
                    text="50 shades"
                    price={3000000}
                />
                <MyCard
                    image="https://th.bing.com/th/id/OIP.cbXICaNuXZbCW6b1YasWKAHaHa?pid=ImgDet&rs=1"
                    title="Duo-tone buildable Foundation"
                    text="50 shades"
                    price={3000000}
                />
                <MyCard
                    image="https://th.bing.com/th/id/OIP.cbXICaNuXZbCW6b1YasWKAHaHa?pid=ImgDet&rs=1"
                    title="Duo-tone buildable Foundation"
                    text="50 shades"
                    price={3000000}
                />
                <MyCard
                    image="https://th.bing.com/th/id/OIP.cbXICaNuXZbCW6b1YasWKAHaHa?pid=ImgDet&rs=1"
                    title="Duo-tone buildable Foundation"
                    text="50 shades"
                    price={3000000}
                />
                <MyCard
                    image="https://th.bing.com/th/id/OIP.cbXICaNuXZbCW6b1YasWKAHaHa?pid=ImgDet&rs=1"
                    title="Duo-tone buildable Foundation"
                    text="50 shades"
                    price={3000000}
                /><MyCard
                    image="https://th.bing.com/th/id/OIP.cbXICaNuXZbCW6b1YasWKAHaHa?pid=ImgDet&rs=1"
                    title="Duo-tone buildable Foundation"
                    text="50 shades"
                    price={3000000}
                />
                <MyCard
                    image="https://th.bing.com/th/id/OIP.cbXICaNuXZbCW6b1YasWKAHaHa?pid=ImgDet&rs=1"
                    title="Duo-tone buildable Foundation"
                    text="50 shades"
                    price={3000000}
                />
                <MyCard
                    image="https://th.bing.com/th/id/OIP.cbXICaNuXZbCW6b1YasWKAHaHa?pid=ImgDet&rs=1"
                    title="Duo-tone buildable Foundation"
                    text="50 shades"
                    price={3000000}
                />
                <MyCard
                    image="https://th.bing.com/th/id/OIP.cbXICaNuXZbCW6b1YasWKAHaHa?pid=ImgDet&rs=1"
                    title="Duo-tone buildable Foundation"
                    text="50 shades"
                    price={3000000}
                />
            </div>
            {/* FILTER MODAL */}
            <FilterModal
                isOpen={openModal}
                onCloseHandle={closeModalHandle}
            />
        </Container>
    )
}

export default ProductPage;