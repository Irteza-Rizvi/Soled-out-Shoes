import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Container = styled.div`
`
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`
const Wrapper = styled.div`
  padding: 20px;
`

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "green" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`

const Info = styled.div`
    flex: 3;
    
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
` 
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;  
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color}
`
const ProductSize = styled.span``

const PriceDetail = styled.div`
    flex: 1;
    diplay: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 55vh;
    background-color: #B5FDE4;
    
`
const Input = styled.input`
    flex: 1;
    min-width: 90%;
    margin: 10px 0px    ;  
    padding: 10px;
    border-radius: 15px;
    border: none;
`
const SummaryTitle = styled.h1`
    font-weight: 200;
`

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "Total" && "500"};
    font-size: ${props=>props.type === "Total" && "24px"};
`

const SummaryItemText = styled.span``

const SummaryItemPrice= styled.span``

const SummaryButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    cursor: pointer;
`

const Cart = () => {

  const cart = useSelector(state=> state.cart) 
  return (
    <Container>
      <Navbar/>
      <Wrapper>
        <Title>Your Cart</Title>
        
        <Bottom>
          <Info>
            { cart.products.map(product=>(
            <Product>
              <ProductDetail>
                <Image src={product.img}/>
                <Details>
                  <ProductName><b>Product:</b>{product.title}</ProductName>
                  <ProductId><b>ID:</b> {product._id}</ProductId>
                  <ProductColor color={product.color}/>
                  <ProductSize><b>Size: </b> {product.size}</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  
                  <ProductAmount>qty: {product.quantity}</ProductAmount>
                  
                </ProductAmountContainer>
                <ProductPrice>{product.price*product.quantity}</ProductPrice>
              </PriceDetail>
            </Product> ))}
            <hr/>
            
              
          </Info>
          <Summary>
            <SummaryTitle>
              Order Summary
            </SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Sub Total</SummaryItemText>
              <SummaryItemPrice>{cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping</SummaryItemText>
              <SummaryItemPrice>Rs 300</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>Rs -300</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="Total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>{cart.total}</SummaryItemPrice>
            </SummaryItem>
            <Input placeholder = "Address" />

            <SummaryButton>Checkout</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer/>
      
    </Container>
  )
}

export default Cart
