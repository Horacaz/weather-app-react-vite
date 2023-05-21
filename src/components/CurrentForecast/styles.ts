import styled from "styled-components";

export const Title = styled.h2`
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  max-width: 50%;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: black;
  border-radius: 10px;
  margin: 1rem;
  padding: 1rem;
  text-align: center;
`;

export const Divider = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SmallDivider = styled.div`
  display: flex;
  align-items:center;
`;

export const Text = styled.p`
  font-weight: bolder;
`;

export const Span = styled.span`
  margin: 1rem;
  font-weight: bolder;
`;

export const Image = styled.img`
  max-width: 150px;
`;

export const Icon = styled.img`
  max-width: 35px;
`;
