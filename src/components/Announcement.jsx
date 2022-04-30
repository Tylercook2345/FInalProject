import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: #ffd208;
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    font-weight: 700;
`;

const Announcement = () => {
  return (
    <Container>
        Great deals on Authentic cards!
    </Container>
  )
}

export default Announcement