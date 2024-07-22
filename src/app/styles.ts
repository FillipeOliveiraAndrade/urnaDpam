import styled from "styled-components";

export const Container = styled.div`
  flex: 1;

  padding: 0 118px 0 108px;
`;

export const Screen = styled.div`
  flex: 1;

  padding: 0px 24px 48px 24px;

  background-color: white;

  border: 2px solid black;
  border-radius: 6px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Title = styled.h2``;

export const Image = styled.div`
  height: 250px;
  width: 250px;

  border: 2px solid black;
  border-radius: 8px;

  margin-top: 18px;
`;

export const CandidatePhoto = styled.img`
  height: 250px;
  width: 250px;

  border: 2px solid black;
  border-radius: 8px;

  margin-top: 18px;
`;

export const Input = styled.input`
  text-align: center;
  font-size: 36px;

  height: 90px;
  width: 90px;

  border-width: 1.6px;
  border-color: '#C9C9C9';

  background-color: white;
`;

export const SuggestedTheme = styled.h3``;

export const ButtonsContainer = styled.div`
  display: grid-auto-rows;

  width: 25%;
`;

export const ButtonNumber = styled.button`
  font-size: 18px;
  
  height: 85px;
  width: 66px;

  margin: 4px;

  background-color: black;
  color: white
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  margin-top: 48px;
`;

export const ButtonWhite = styled.button`
  height: 100px;
  width: 120px;

  display: flex;
  flex-direction: row;

  font-size: 18px;

  background-color: white;
  color: black
`;

export const ButtonRed = styled.button`
  height: 100px;
  width: 120px;

  font-size: 18px;
  font-weight: 700;

  background-color: red;
  color: white;

  border-width: 2px;
  border-color: black;
`;

export const ButtonGreen = styled.button`
  height: 100px;
  width: 120px;

  font-size: 18px;
  font-weight: 700;

  background-color: green;
  color: white;

  border-width: 2px;
  border-color: black;
`;
