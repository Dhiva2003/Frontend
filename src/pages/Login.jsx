import React, { useState } from "react"
import {Container,Form,Button} from "react-bootstrap";
import '../Styles/Login.css';
import {Link,useNavigate} from "react-router-dom";
const Login = () =>{
    const [formdata,setformdata]=useState(
        {
            email: "",
            password: "",
        }
    );
    const handleChange = (e) => {
        const{ name , value} = e.target;
        setformdata({ ...formdata, [ name ]: value});
    };
    const handleSubmit = (e) => {
     e.preventDefault();   
     console.log(formdata);   
    };
    return(
        <Container>
        <h1> Login Form</h1>
        <Form onSubmit={handleSubmit}>
            <Form.Group >
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" name="email" value={formdata.email} onChange={handleChange} required></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" value={formdata.password} onChange={handleChange} required></Form.Control>
            </Form.Group>
            <Form.Group>
                <Button variant="primary" type="submit">Login</Button>
                
            </Form.Group>
        </Form>
    </Container>

    )
}
export default Login