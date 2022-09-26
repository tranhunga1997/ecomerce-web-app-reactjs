import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import navigatorStyles from "./css/navigator.module.scss";

function Navigator() {
    return (
        <Grid
            container
            justifyContent="center"
            gap={2}
            margin={0}
            className={navigatorStyles.navigator}
        >
            <Link to="/products">Shop All</Link>
            <Link>Makeup</Link>
            <Link>Shop Our Sets</Link>
            <Link>Find Your Shade</Link>
            <Link>Sale</Link>
            <Link>Explore</Link>
        </Grid>
    )
}

export default Navigator;