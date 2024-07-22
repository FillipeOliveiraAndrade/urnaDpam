import { useEffect, useState } from "react";

import candidates from "../../data/candidates";
import { ButtonGreen, ButtonNumber, ButtonRed, Buttons, ButtonsContainer, CandidatePhoto, Container, Content, Image, Input, Screen, SuggestedTheme, Title } from "./styles";

const TITLE = 'Congresso Por Algo Maior 2024';
const BUTTONS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const json = require("./votos.json");

export default function Urna() {
  const [inputValue, setInputValue] = useState('');
  const [candidate, setCandidate] = useState({ nome: '', tema: '', image: '' });
  const [votos, setVotos] = useState<any>();

  function handleOnClick(numberButton: string) {
    const newInputValue = numberButton;
    setInputValue(newInputValue);

    const candidate = candidates.find((candidate) => candidate.numeroEleitoral === newInputValue);
    candidate && setCandidate(candidate);
  }

  function handleSubmit() {
    // const candidate = votes.find((item) => item.numeroEleitoral === inputValue);
    
  }

  useEffect(() => {
    fetch('votos.json', { headers: { Accept: 'application/json' } })
    .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(votes => {
        console.log(votes);
        setVotos(votes);
    })
    .catch(error => console.error('Fetch error:', error));
    
  }, []);

  return (
    <Container>
      <Screen>
        <Content>
          <div>
            <Title>
              { TITLE }
            </Title>

            <Input
              disabled
              value={inputValue}
            />
          </div>
          
          { candidate.nome !== ''
            ? <CandidatePhoto src={require(`../../assets/${candidate.image}.png`)} alt="Imagem do candidato" />
            : <Image></Image>
          }
        </Content>
        
        <div style={{ position: 'absolute', top: '200px', marginLeft: '102px' }}>
          <SuggestedTheme>
            NOME: { candidate.nome }
          </SuggestedTheme>

          <SuggestedTheme>
            TEMA: { candidate.tema }
          </SuggestedTheme>
        </div>
      </Screen>

      <Buttons>
        <ButtonsContainer>
          { BUTTONS.map((number) => (
              <ButtonNumber
                key={number}
                onClick={() => handleOnClick(number.toString())}>
                  {number} 
              </ButtonNumber>)) }
        </ButtonsContainer>

        <div style={{ display: "flex", flexDirection: 'column',  justifyContent: 'center', gap: '24px' }}>
          <ButtonRed onClick={() => {
            setInputValue('');
            setCandidate({ nome: '', tema: '', image: '' });
          }}> CORRIGE </ButtonRed>
          <ButtonGreen onClick={handleSubmit}> CONFIRMA </ButtonGreen>
        </div>
      </Buttons>
    </Container>
  );
}
