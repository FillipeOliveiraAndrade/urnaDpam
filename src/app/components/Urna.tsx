'use client'

import { ButtonGreen, ButtonNumber, ButtonRed, Buttons, ButtonsContainer, CandidatePhoto, Container, Content, Image, Input, Screen, SuggestedTheme, Title } from "../styles";
import {useEffect, useState} from 'react'
import candidates from "../data/candidates";
import getJsonVotes from "../utils/get-json-votes";
import editJsonVotes from "../utils/edit-json-votes";
import Modal from "./Modal";

const TITLE = 'Congresso Por Algo Maior 2024';
const BUTTONS = [1, 2, 3, 4, 5, 6];

export default function Urna() {
  const [inputValue, setInputValue] = useState('');
  const [candidate, setCandidate] = useState({ nome: '', tema: '', image: '' });
  const [votos, setVotos] = useState<any>();
  const [votoConfirmado, setVotoConfirmado] = useState(false);

  function handleOnClick(numberButton: string) {
    const newInputValue = numberButton;
    setInputValue(newInputValue);

    const candidate = candidates.find((candidate) => candidate.numeroEleitoral === newInputValue);
    candidate && setCandidate(candidate);
  }

  function handleSubmit() {
    if (!candidate.nome) return console.log('Você deve selecionar um candidato.');
    
    setVotoConfirmado(true);
    const updatedVotos = votos.map((item: any) => {
      if (item.numeroEleitoral === inputValue) {
        item.votos += 1;
      }
      return item;
    });
  
    setVotos(updatedVotos);
  
    // Envie os votos atualizados para o servidor
    editJsonVotes(updatedVotos)
      .then(response => {
        console.log('Votos atualizados com sucesso:');
        setInputValue('');
        setCandidate({ nome: '', tema: '', image: '' });
      })
      .catch(error => {
        console.error('Erro ao atualizar os votos:', error);
      });

    setTimeout(() => {
      setVotoConfirmado(false);
    }, 2000);
  }

  useEffect( () => {
    const vamologokrl = async () => {
      const data = await getJsonVotes()
      setVotos(data)

    }

    vamologokrl()
  }, [])
  
  return <>
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
            ? <CandidatePhoto src={`${candidate.image}.png`} alt="Imagem do candidato" />
            : <Image></Image>
          }
        </Content>
        
        <div style={{ position: 'absolute', top: '200px', marginLeft: '130px' }}>
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
      { votoConfirmado && <Modal /> }
    </Container></>
}