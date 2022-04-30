import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
`;

const Logo = styled.h1``

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
  color: black;
  display: flex;
  align-content: center;
  justify-content: center;
  margin: 20px;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
const Center = styled.div`
    flex: 1;
    padding: 20px;
`;
const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`  
const List =  styled.ul`
  margin: 0;
  padding: 0;
  list-style: style none;
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`

const Payment =styled.img`
  width: 60%;
  height: 25%;
`


const Footer = () => {
  return (
    <Container>
      <Left>
          <Logo>TC's</Logo>
          <Desc>
        TC's is a small business ran from the Bluegrass state from the city of Lousville, we welcome people from all around the world to a trading card service in which you can buy/sell your cards with ease and complete trust!  
        cards with complete trust. 
          </Desc> 
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
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Pokemon</ListItem>
          <ListItem>Yu-gi-oh</ListItem>
          <ListItem>Sports</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>FAQ</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
        <Room style={{marginRight:'10px'}}/>  1408 Uranus drive / Louisville, KY
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:'10px'}}/>1-800-867-5309
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:'10px'}}/>TCTrading@yahoo.org
        </ContactItem>
        <Payment src='https://i.ibb.co/Qfvn4z6/payment.png'/>
      </Right>
      
    </Container>
  )
}

export default Footer