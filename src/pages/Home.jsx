import React from "react";
import { Button, Container } from "react-bootstrap";
import '../Styles/Home.css';
const Home =()=>{
    return(
        <Container>
            <h1>WELCOME TO OUR NATURE CLUB</h1>
            <p> We are here to preserve Nature as a whole</p>
            <Button variant="primary" type="submit"> let's start</Button>
        </Container>
    )
}
export default Home