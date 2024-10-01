import { Container, Grid, styled, Typography } from "@mui/material"
import Profile from "../../../../assets/images/profile-pic.png"
import DownloadingIcon from '@mui/icons-material/Downloading';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Hero = () => {
 
    const StyledHero = styled("div")(()=> ({
        backgroundColor: "black",
        height: "100vh"
    }))

    const StyledImg = styled("img")(()=> ({
        width: "100%",
        borderRadius: "50%"
    }))
  
    return (
      <>
        <StyledHero>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <StyledImg src={Profile}/>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Typography color="primary" variant="h1" textAlign="center">Matheus Mariano</Typography>
                        <Typography color="primary" variant="h2" textAlign="center">I'm a software engineer</Typography>
                        <Grid container display="flex" justifyContent="center">
                            <Grid item xs={12} md={4} display="flex" justifyContent="center"><button><DownloadingIcon/>Download CV</button></Grid>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center"><button><MailOutlineIcon/>Contact me</button></Grid>
                        </Grid>
                    </Grid>
                </Grid> 
            </Container>    
        </StyledHero>
      </>
    )
  }
  
  export default Hero
  