import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';

const Container = styled.div``;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    

`;
const Filter = styled.div`
    margin: 20px;
`;

const FilterText = styled.span`
    font-style: 20px;
    font-weight: 600;

`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`

const Option = styled.option``

const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Pokemon</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                </Filter>
            <Select>
                <Option disable selected>
                    Rarity
                </Option>
                <Option>Common</Option>
                <Option>Rare</Option>
                <Option>Super Rare</Option>
            </Select>
            <Select>
                <Option selected>Price</Option>
                <Option>Highest to Lowest</Option>
                <Option>Lowest to Highest</Option>

            </Select>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList