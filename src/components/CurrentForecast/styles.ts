import styled from "styled-components";

export const Title = styled.h2`
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  background-color: black;
  border-radius: 10px;
  margin-top: 1rem;
  padding: 1rem;
  text-align: center;
`;

export const Forecast = styled.div`
  display: flex;
  align-items: center;
`;

export const Divider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const SmallDivider = styled.div`
  margin: 0.5rem;
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
