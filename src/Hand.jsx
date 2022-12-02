import styled from 'styled-components';

const StyledImg = styled.img`
  margin: 20px;
  border: 3px solid white;
` 

const Hand = () => {
  return (
    <StyledImg src="https://via.placeholder.com/350x200/373737?text=Place+cards+here" />
  );
}

export default Hand;