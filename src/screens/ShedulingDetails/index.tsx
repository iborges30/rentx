import React, {useEffect, useState} from "react";
import {Feather} from '@expo/vector-icons';
import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";

import { ImageSlider } from "../../components/ImageSlider";
import {getAccessoryIcon} from '../../utils/getAccessoryIcons';

 

import {
  Container,
  Header,
  CarImage,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
 
  Acessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,

} from "./styles";
import { Button } from "../../components/Button";
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CarDTO } from '../../dtos/CarDTO';
import { format } from "date-fns";
import { getPlatformDate } from '../../utils/getPlatFormDate';
 

interface Params{
  car:CarDTO;
  dates:string[];
}

interface RentalPeriod{
  start:string;
  end:string;
}

export function SchedulingDetails() {
  const theme =  useTheme();
  
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod);

  const navigaton = useNavigation();
  const route = useRoute();
  const { car, dates } = route.params as Params;



  function handConfirmRental(){
      navigaton.navigate('SchedulingComplete', {
        
      });
  }


  function handleBack() {
    navigaton.goBack();
  }


useEffect(()=>{
setRentalPeriod({
  start:format(getPlatformDate(new Date(dates[0])), "dd/MM/yyyy"),
  end:format(getPlatformDate(new Date(dates[dates.length - 1])), "dd/MM/yyyy"),
})

},[]);


  return (
    <Container>
      <Header>
        <BackButton onPress={handleBack} />
      </Header>

      <CarImage>
        <ImageSlider
          imagesUrl={car.photos}
        />
      </CarImage>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>

        <Acessories>
          {
            car.accessories.map(accessory=>(
              <Accessory 
              key={accessory.type}
              name={accessory.name}
               icon={getAccessoryIcon(accessory.type)} />
            ))
          }
         
        </Acessories>
 
 <RentalPeriod>
<CalendarIcon>
  <Feather
  name="calendar"
  size={RFValue(24)}
  color={theme.colors.shape} 
  />
</CalendarIcon>

<DateInfo>
  <DateTitle>DE</DateTitle>
  <DateValue>{rentalPeriod.start}</DateValue>
</DateInfo>

<Feather
  name="chevron-right"
  size={RFValue(10)}
  color={theme.colors.text} 
  />
<DateInfo>
  <DateTitle>ATÉ</DateTitle>
  <DateValue>{rentalPeriod.end}</DateValue>
</DateInfo>

 </RentalPeriod>
        
        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>
              R$ 580 3x diárias
            </RentalPriceQuota>
            <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

    <Footer>
    <Button title='Alugar agora' color={theme.colors.success} onPress={handConfirmRental}/>
    </Footer>
    </Container>
  );
}
