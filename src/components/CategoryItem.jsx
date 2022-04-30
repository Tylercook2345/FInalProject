import styled from 'styled-components';
import { categories } from '../data';

const Container = styled.div `
    flex: 1;
    margin: 10px;
    height: 70vh;
    position:relative;
    padding: 25px;
`;
const Image = styled.img `
    width: 100%;
    height: 100%;
`;
const Info = styled.div `
    position : absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;
const Title = styled.h1 `
    color: #fff01c;
    margin-bottom: 20px;
`;
const Button = styled.button `
    border: none;
    padding: 10px;
    background-color: #f8f8f8;
    color:gray;
    cursor: pointer; 
    font-weight: 600;
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
};

export default CategoryItem