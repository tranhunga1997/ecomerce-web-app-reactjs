import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';
import "./css/my-card.scss";

MyCard.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    price: PropTypes.number,
    onClick: PropTypes.func,
}

const titleDotStyle = {
    whiteSpace: "nowrap",
    overflowX: "hidden",
    textOverflow: "ellipsis",
}

function MyCard(props) {
    const navigate = useNavigate();
    const { id, image, title, text, price, onClick } = props;

    const viewDetailHandle = (e, id, name) => {
        e.preventDefault();
        navigate(`/product/detail/${title}`, { state: { id } })
    }

    return (
        <Card sx={{ maxWidth: 345 }} >
            <CardMedia
                component="img"
                height="300px"
                image={image}
                alt={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={titleDotStyle}>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {text}
                </Typography>
                <Typography variant="body2" color="text.success">
                    {`${price} VND`}
                </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: "center" }}>
                <Button variant="contained" color="warning" onClick={e => viewDetailHandle(e, id, title)}>Chi tiết</Button>
                <IconButton variant="outlined" color="secondary"><AddShoppingCartIcon /></IconButton>
            </CardActions>
        </Card>
    )
}

export default MyCard;