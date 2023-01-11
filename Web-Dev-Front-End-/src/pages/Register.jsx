import React from 'react'

import styled from 'styled-components'

import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { register } from '../redux/apiCalls'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(
        255,255,255,0.5),
        rgba(255,255,255,0.5)),
        url("https://fashionsuggest.in/wp-content/uploads/2018/03/Optimized-formal-shoes-for-men-india-1021x580.jpg") ;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    
    
`
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    
      
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    
    
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;  
    padding: 10px;
    border-radius: 15px;
    border: none;
`
const Button = styled.button`

    width: 40%;
    border: None;
    padding: 15px 20px;
    margin: 20px 138px;
    background-color: #179469;
    color: white;
    cursor: pointer;
    border-radius: 15px;
    align-items: center;
    font-weight: 600;
    
`
const Register = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [email, setEmail] = useState("")
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    register(dispatch, { username, email, password});
  };

  return (
    <Container>
      <Wrapper>
        <Title> CREATE AN ACCOUNT </Title>
        <Form>
            <Input placeholder="First Name"/>
            <Input placeholder="Last Name"/>
            <Input placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
            <Input placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
            <Input placeholder="Password"
            
            onChange={(e)=>setPassword(e.target.value)}
            />
            <Input placeholder="Confirm Password"/>
            <Button onClick={handleClick} disabled={isFetching}>REGISTER</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
