import styled from 'styled-components';

export const Square = styled.div`
background-color: ${({ red, green, blue }) => `rgb(${red}, ${green}, ${blue})`};
width: 100px;
height: 100px;
`;