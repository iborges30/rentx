import React from "react";
import {Feather} from '@expo/vector-icons';
import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";

import { ImageSlider } from "../../components/ImageSlider";

import speedSvg from "../../assets/speed.svg";
import accelerationSvg from "../../assets/acceleration.svg";
import forceSvg from "../../assets/force.svg";
import gasolineSvg from "../../assets/gasoline.svg";
import exchangeSvg from "../../assets/exchange.svg";
import peopleSvg from "../../assets/people.svg";

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
import { useNavigation } from '@react-navigation/native';
 
export function SchedulingDetails() {
  const theme =  useTheme();
  
  const navigaton = useNavigation();
  function handConfirmRental(){
      navigaton.navigate('SchedulingComplete');
  }
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <CarImage>
        <ImageSlider
          imagesUrl={[
            "https://mediaservice.audi.com/media/live/50900/fly1400x601n1/f5f/2021.png",
          ]}
        />
      </CarImage>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborguini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <Acessories>
          <Accessory name="380km/h" icon={speedSvg} />
          <Accessory name="3.2s" icon={accelerationSvg} />
          <Accessory name="800 HP" icon={forceSvg} />
          <Accessory name="Gasolina" icon={gasolineSvg} />
          <Accessory name="Auto" icon={exchangeSvg} />
          <Accessory name="2 pessoas" icon={peopleSvg} />
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
  <DateValue>18/06/2022</DateValue>
</DateInfo>

<Feather
  name="chevron-right"
  size={RFValue(10)}
  color={theme.colors.text} 
  />
<DateInfo>
  <DateTitle>DE</DateTitle>
  <DateValue>18/06/2022</DateValue>
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
