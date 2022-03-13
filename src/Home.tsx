import React, { useState } from 'react'
import * as S from './styled'
import { AntDesign,MaterialIcons ,EvilIcons} from '@expo/vector-icons';
import { FlatList} from 'react-native';

import useTodo from './hooks/Todo'

export default function Home() 
{
    const [state,adicionar,remover,check] = useTodo()
    const [texto, settexto] = useState<string>("")
    console.log(state);
    
    const handleAdicionar = () =>
    {
        const dia = new Date().getDate()
        const mes = new Date().getMonth()
        const ano = new Date().getFullYear()
        adicionar(
            {id: ((state.length+1) + texto.length)*21,
            texto:texto,
            checked:false,
            date: `${dia}/${mes}/${ano}`
            })
            settexto("")
    }
    
  return (
    <S.Container>
        <S.TopContainer>
            
            <S.Input
                placeholder="A fazer ..."
                onChangeText={settexto}
                value={texto}
                />
            <S.BtnAdd onPress={()=>handleAdicionar()}>
                <AntDesign name="plus" size={24} color="#fff" />
            </S.BtnAdd>
            
        </S.TopContainer>

        <S.LabelContainer>
            <S.Label>Suas tarefas</S.Label>
        </S.LabelContainer>
        <S.ListContainer>
            <FlatList
            data={state}
            keyExtractor={item=>String(item.id)}
            renderItem={({item})=>(
                <S.Card style={{backgroundColor:item.checked?"#74959A":"#54BAB9"}}> 
                    <S.CardTop>
                        <S.DateWrapper>
                            <S.DateText>{item.date}</S.DateText>
                        </S.DateWrapper>
                        <S.BtnCheck onPress={()=>check(item.id)}>
                        {
                            item.checked ?
                            <AntDesign name="checkcircle" size={24} color="#ccc" />
                            :
                            <MaterialIcons name="radio-button-unchecked" size={24} color="#ccc" />
                        }
                        </S.BtnCheck>
                    </S.CardTop>
                    <S.CardWrapper>
                        <S.CardText>{item.texto}</S.CardText>
                        <S.BtnDelete onPress={()=>remover(item.id)}>
                            <EvilIcons name="trash" size={34} color="red" />
                        </S.BtnDelete>
                    </S.CardWrapper>
                </S.Card>
                )}
            />
        </S.ListContainer>

    </S.Container>
  )
}