import React from 'react';
import { BackButton } from '../../components/BackButton';
import { useTheme } from 'styled-components/native';
import ArrowSvg from '../../assets/arrow.svg';
import { StatusBar } from 'react-native';

import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';


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
<Content>
        <Calendar/>
</Content>
 
 <Footer>
     <Button title="Confirmar"/>
 </Footer>
 </Container>
);
}