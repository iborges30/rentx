import React  from 'react';
import { BackButton } from '../../components/BackButton';
import { useTheme } from 'styled-components/native';
import ArrowSvg from '../../assets/arrow.svg';
import { StatusBar } from 'react-native';

import { Button } from '../../components/Button';
import { Calendar, DayProps, MarkedDatProps, generateInterval } from '../../components/Calendar';
import { useNavigation } from '@react-navigation/native';
 


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
import { useState } from 'react';
 

export function Scheduling(){


    const theme = useTheme();
    const navigaton = useNavigation();
    const  [lastSelectedDate, setLastSelectedDate]= useState<DayProps> ({} as DayProps) ;

    const [markedDates, setMarkedtDates] = useState<MarkedDatProps>({} as MarkedDatProps);

    
  function handleBack() {
    navigaton.goBack();
  }

    function handConfirmRental(){
        navigaton.navigate('SchedulingDetails');
    }


    function handleChangeDate(date: DayProps){
        let start = !lastSelectedDate.timestamp ? date: lastSelectedDate;
        let end = date;

        if(start.timestamp > end.timestamp){
            start = end;
            end = start;
        }

        setLastSelectedDate(end);
        const interval = generateInterval(start, end);
        setMarkedtDates(interval);

    }

 return (
 <Container>
     <Header>
         <StatusBar
         barStyle='light-content'
         translucent
         backgroundColor='transparent'
         
         />
         <BackButton 
         onPress={handleBack}
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
        <Calendar
        
        markedDates={markedDates}
        onDayPress={handleChangeDate}
        
        />
</Content>
 
 <Footer>
     <Button title="Confirmar" onPress={handConfirmRental}/>
 </Footer>
 </Container>
);
}