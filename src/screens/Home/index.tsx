import React from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Logo from "../../assets/logo.svg";
import { Car } from "../../components/Car";

import { Container, Header, TotalCars,HeaderContent } from "./styles";

export function Home() {
  const carData={
    brand:'Audi',
    name:'Coupé',
    rent:{
      period:'AO DIA',
      price:120
    },
    thumbnail:'https://mediaservice.audi.com/media/live/50900/fly1400x601n1/f5f/2021.png'
  }


  const carDatatwo={
    brand:'Audi',
    name:'Coupé',
    rent:{
      period:'AO DIA',
      price:120
    },
    thumbnail:'https://mediaservice.audi.com/media/live/50900/fly1400x601n1/f83rh7/2022.png'
  }


  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars> Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      <Car data={carData}/>
      <Car data={carDatatwo}/>
    </Container>
  );
}
