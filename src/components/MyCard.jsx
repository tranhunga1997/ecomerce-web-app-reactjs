import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import "./css/my-card.scss";
import PropTypes from "prop-types";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

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
    const {image, title, text, price, onClick} = props;

    return (
        <Card sx={{ maxWidth: 345 }} >
            <CardMedia
                component="img"
                height="300"
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
            <CardActions style={{justifyContent: "center"}}>
                <Button variant="outlined" color="secondary" fullWidth={true} startIcon={<AddCircleOutlineOutlinedIcon />}>Add to Cart</Button>
            </CardActions>
        </Card>
    )
}

export default MyCard;