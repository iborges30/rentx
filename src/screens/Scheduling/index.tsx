import React from 'react';
import { BackButton } from '../../components/BackButton';
import { useTheme } from 'styled-components/native';
import ArrowSvg from '../../assets/arrow.svg';
import { StatusBar } from 'react-native';

import {
 Container,
 Header,
 Title,
 RentalPeriod,
 DateInfo,
 DateValue,
 DateTitle,
 Content,
 Footer

} from './styles';
import { Button } from '../../components/Button';


export function Scheduling(){
    const theme = useTheme();

 return (
 <Container>
     <Header>
         <StatusBar
         barStyle='light-content'
         translucent
         backgroundColor='transparent'
         
         />
         <BackButton 
         onPress={()=>{}}
         color={theme.colors.shape}
         />
         
         <Title>Escolha uma {'\n'}
             data de início e fim do aluguel</Title>
             
     <RentalPeriod>
         <DateInfo>
             
             <DateTitle>DE</DateTitle>
             <DateValue selected={false}>18/05/2022</DateValue>

         </DateInfo>
         <ArrowSvg/>

         <DateInfo>
             <DateTitle>ATÉ</DateTitle>
             <DateValue selected={false}>18/05/2022</DateValue>
         </DateInfo>
       
     </RentalPeriod>
     </Header>
<Content></Content>
 
 <Footer>
     <Button title="Confirmar"/>
 </Footer>
 </Container>
);
}