import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import { Button } from "@mui/material";
import { lazy, Suspense, useEffect, useState } from 'react';
import productApi from '../api/productApi';
import Loading from '../components/Loading';
import MyCard from "../components/MyCard";
import aboutImage1 from "../imgs/about-image-1.png";
import aboutImage2 from "../imgs/about-image-2.png";
import aboutImage3 from "../imgs/about-image-3.png";
import bannerChild1 from "../imgs/banner_child_1.png";
import image1 from "../imgs/image-1.png";

import "./css/landingStyles.scss";

const SlideContainer = lazy(() => import("../components/SlideContainer"))

function LandingPage() {
    const [products, setProducts] = useState([])

    const renderSlide = (products) => {
        return products.map(p => (
            <MyCard
                key={p.id}
                id={p.id}
                image={p.image}
                title={p.title}
                text="50 shades"
                price={p.price}
            />
        ))
    }

    useEffect(() => {
        productApi.getAll(6)
            .then(products => setProducts(products))
            .catch(err => {
                throw new Error(err.message);
            })
    }, [])
    console.log(products)

    return (
        <>
            <div className="banner">
                <div className="content">
                    <h2>The Best Duo-tone buildable Foundation</h2>
                    <p>You're unique - your foundation should be too. Create the best foundation for your skin tone with Minisque</p>
                    <Button variant="outlined">Shop Foundation</Button>
                </div>
                <img srcSet={bannerChild1} width="390" height="520" className="img-1" />
            </div>
            <section className="section-1 section-container">
                <h2>Minisque’s Featured Products</h2>
                <p>Check Out Our Best Sellers + Lates Drops</p>
                <Suspense fallback={<Loading />}>
                    <SlideContainer>
                        {renderSlide(products)}
                    </SlideContainer>
                </Suspense>
                <hr />
            </section>
            <div className="find-your-shade">
                <div className="content">
                    <h2>Find Your Shade</h2>
                    <p>We will help you find the right shade for you</p>
                    <Button variant="contained" color="warning" startIcon={<CameraAltOutlinedIcon />}>Try it out</Button>
                </div>
                <img srcSet={image1} />
            </div>
            <section className="section-1 section-container">
                <h2>Chosen For You</h2>
                <p>Powerful Sets To Save Your Time</p>
                <SlideContainer>
                    <MyCard
                        image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                        title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
                        text="50 shades"
                        price={109.95}
                    />
                    <MyCard
                        image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                        title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
                        text="50 shades"
                        price={109.95}
                    />
                    <MyCard
                        image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                        title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
                        text="50 shades"
                        price={109.95}
                    />
                </SlideContainer>
            </section>
            <hr />
            <div className="flex-center" style={{ marginBottom: "88px" }}>
                <Button variant="contained">Shop Our Sets</Button>
            </div>
            <div className="about">
                <h2><span>About</span> Canopy</h2>
                <div className="content">
                    <div className="item">
                        <img srcSet={aboutImage1} />
                        <p className="title">Reliable</p>
                        <p className="text-muted">We stand behind our products and give genuine advice with customer’s best interest at heart</p>
                    </div>
                    <div className="item">
                        <img srcSet={aboutImage2} />
                        <p className="title">Customizable nature</p>
                        <p className="text-muted">Our products allow user to assume control of the color</p>
                    </div>
                    <div className="item">
                        <img srcSet={aboutImage3} />
                        <p className="title">Cruelty-free </p>
                        <p className="text-muted">We made our products not only inclusive for human but also crutely-free for animals</p>
                    </div>
                </div>
            </div>

            <section className="discover section-1">
                <h2>Discover Even More</h2>
                <p>Explore Your Beauty With Different Shades Of Color</p>
                <div className="content">
                    <div className="item"
                        style={{
                            backgroundImage: "url('https://th.bing.com/th/id/OIP.4TV4q9pDYZ_QMHFVZOzeoQHaK4?w=183&h=269&c=7&r=0&o=5&dpr=1.38&pid=1.7')"
                        }}>
                        <div className="name">
                            <span>Face</span>
                        </div>
                    </div>
                    <div className="item"
                        style={{
                            backgroundImage: "url('https://i.pinimg.com/originals/56/71/50/567150cbfcdd22efd382dfb5ff598ddd.jpg')"
                        }}>
                        <div className="name">
                            <span>Lip</span>
                        </div>
                    </div>
                    <div className="item"
                        style={{
                            backgroundImage: "url('https://image.freepik.com/free-photo/beauty-portrait-mystery-smiling-ginger-woman-with-long-hair-looking-away-while-applying-cosmetics-with-brush-eyeshadow_171337-921.jpg')",
                            backgroundPositionX: "center",
                        }}>
                        <div className="name">
                            <span>Kits</span>
                        </div>
                    </div>
                    <div className="item"
                        style={{
                            backgroundImage: "url('https://th.bing.com/th/id/R.e14de94131cd42ba7da0f6febfe4236d?rik=02TlM%2bB88MyN8Q&riu=http%3a%2f%2fimages.unsplash.com%2fphoto-1591384217697-c5aa57e07dd5%3fixlib%3drb-1.2.1%26q%3d80%26fm%3djpg%26crop%3dentropy%26cs%3dtinysrgb%26w%3d1080%26fit%3dmax&ehk=N9njoOu71spLWGX6Yming5mPglvYkAN2ZtAa38yt120%3d&risl=&pid=ImgRaw&r=0')"
                        }}>
                        <div className="name">
                            <span>Eyes</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LandingPage;