import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Container = styled.div``;

const Wrapper = styled.div``;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
    padding-top: 30px;

`;

const Top = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding:10px;
    font-weight: 600;
    cursor: pointer;

`;

const TopTexts = styled.div``

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
display: flex;
justify-content: space-between;

`
const Info = styled.div`
    flex:3;

`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;

`

const ProductDetail = styled.div`
    flex:2;
    display: flex;
`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: left;
    padding: 30px;

`

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`

const Hr = styled.hr`
    background-color: #eee;
    border:none;
    height: 1px;
    padding : 10px;

`




const Image = styled.img`
    width: 200px;
    margin-left: 50px;

`

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const ProductName = styled.span``

const ProductId = styled.span``




const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px slid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle = styled.div`
    font-weight:200;
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight:200;
`;

const SummaryItemText = styled.span`
    
`;

const SummaryItemPrice = styled.span`
    
`;

const Button = styled.button`
    width: 100px;
    cursor : pointer;
    
`;





const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR CART</Title>
            <Top>
                <TopButton>Continue Shopping</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                </TopTexts>
                <TopButton>Checkout Now</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                        <Image src ='https://i.ebayimg.com/images/g/tHQAAOSwZf9heEeh/s-l640.jpg'/>
                        <Details>
                            <ProductName><b>Product:</b> Michael Jordan Rookie Card</ProductName>
                            <ProductId><b>Year:</b> 1984 </ProductId>
                            <PriceDetail>
                           <b>Price: </b> $250
                        </PriceDetail>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>1</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                           </Details>
                        </ProductDetail>
                     </Product>

                    <Hr/>
                     <Product>
                        <ProductDetail>
                        <Image src ='https://cdn.shopify.com/s/files/1/0318/7566/1960/products/PhotoRoom_20211002_141647_1024x1024.png?v=1633199252'/>
                        <Details>
                            <ProductName><b>Product:</b> Holographic SCORE Rookie Ceedee Lamb card</ProductName>
                            <ProductId><b>Year:</b> 2020 </ProductId>
                            <PriceDetail>
                           <b>Price: </b> $150
                        </PriceDetail>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>1</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                           </Details>
                        </ProductDetail>
                     </Product>
                </Info>
                <Summary>
                    <SummaryTitle>Order Summary</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$400</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$6.00</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText type='total'>total</SummaryItemText>
                        <SummaryItemPrice>$406</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart