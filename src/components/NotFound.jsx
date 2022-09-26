import { Button, Grid } from "@mui/material";
import { Container } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import notFoundImg from "../imgs/not-found.png";

function NotFound() {
    const navigate = useNavigate();

    const returnHomeHandle = () => {
        navigate('/')
    }

    return (
        <>
            <Container
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: "24px",
                    marginBottom: "48px",
                    textAlign: "center"
                }}
            >
                <Grid container 
                direction="column"
                alignItems="center"
                width="50%"
                >
                    <Grid item>
                        <h1
                            style={{
                                fontSize: "64px",
                                fontWeight: "400",
                                lineHeight: "86px",
                                color: "#5F504B"
                            }}
                        >Error 404</h1>
                    </Grid>
                    <Grid item>
                        <img src={notFoundImg} width="100%" />
                    </Grid>
                    <Grid item>
                        <p>
                            Oops, The page you are looking for might be removed or is temporarily unavailable.
                            Try going back to the previous page or see our Help Center for more information
                        </p>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" onClick={returnHomeHandle}>Return to Hompage</Button>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default NotFound;