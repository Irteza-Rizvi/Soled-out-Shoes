
import { Call, Email, Facebook, Instagram, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`

`
const Desc = styled.p`
  margin: 20px 0px;
`
const SocialContainer = styled.div`
  display: flex;
`
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`

const Center = styled.div`
  flex: 1;
`
const Right = styled.div`
  flex: 1;
  padding: 20px;
  
`
const Title = styled.h3`
  margin-bottom: 20px;
`
const ContactItem = styled.div`
  
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  
`
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Soled Out Shoes.</Logo>
        <Desc>Soled Out Shoes is an ecommerce platform built for our Web Application Development project in fall 2022 by Muhammad Zuhair Siddiqui, Irteza Rizi, and Ali Haider.</Desc>
        <SocialContainer>
          <SocialIcon>
            <Facebook/>
          </SocialIcon>
          <SocialIcon>
            <Instagram/>
          </SocialIcon>
          <SocialIcon>
            <Twitter/>
          </SocialIcon>

          
        </SocialContainer>
      </Left>
      <Center></Center>
      <Right>
        <Title>Contact us</Title>
        <ContactItem><Room style={{marginRight: "10px"}}/>B133, Gulshan-E-Iqbal, Block 10, Karachi, Sindh, Pakistan.</ContactItem>
        <ContactItem><Call style={{marginRight: "10px"}}/>+92 321 8941562</ContactItem>
        <ContactItem><Email style={{marginRight: "10px"}}/>zuhair.siddiqui1999@gmail.com</ContactItem>


      </Right>
    </Container>
  )
}

export default Footer
