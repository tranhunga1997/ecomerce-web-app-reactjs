import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button, Grid } from "@mui/material";
import "./css/footer.scss";

function Footer() {
    
    return (
        <div className="wrapper">
            <h2>Minisque.</h2>
            <Grid container 
            justifyContent="space-between"
            sx={{
                marginBottom: "12px"
            }}
            >
                <Grid item>
                    <p>Sign up for email updates on products, launches, and events. Unsubscribe anytime</p>
                    <form id='notificateForm'>
                        <input type="email" name="email" placeholder="Email..." />
                        <Button variant="contained" color="success">Submit</Button>
                    </form>
                </Grid>
                <Grid item>
                    <ul className="content-2">
                        <li className="gray-color">About Minisque</li>
                        <li>About Us</li>
                        <li>Career</li>
                        <li>Company Blog</li>
                    </ul>
                </Grid>
                <Grid item>
                    <ul className="content-3">
                        <li className="gray-color">Help</li>
                        <li>Contact</li>
                        <li>Freedom Gift Card</li>
                        <li>Return & Exchanges</li>
                        <li>Help & FAQ</li>
                    </ul>
                </Grid>
                <Grid item>
                    <h3>Contact Us</h3>
                    <p>127 West 30th Street, 9th Floor New York, NY 10001</p>
                </Grid>
            </Grid>
            <Grid container
                justifyContent="center"
                className="social-list"
            >
                <Grid item>
                    <span><FacebookOutlinedIcon /></span>
                </Grid>
                <Grid item>
                    <span><InstagramIcon /></span>
                </Grid>
                <Grid item>
                    <span><TwitterIcon /></span>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer;