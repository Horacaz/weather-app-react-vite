import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
  background-color: black;
  border-radius: 10px;
  padding: 0.5rem;
  text-align: center;
`;
export const Form = styled.form`
  width: 100%;
  display: flex;
`;

export const SearchInput = styled.input`
  outline: none;
  width: 95%;
  border-radius: 8px;
  padding: 0.5rem;
`;
export const Label = styled.label`
  width: 100%;
  padding: 0.5rem;
`;

export const SearchButton = styled.img`
  margin: 0.2rem;
  padding: 0.2rem;
  width: 40px;
  &:hover {
    filter: invert(4%) sepia(82%) saturate(848%) hue-rotate(215deg)
      brightness(92%) contrast(87%);
  }
`;
