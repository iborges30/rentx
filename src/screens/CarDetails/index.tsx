import React from "react";
import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";

import { ImageSlider } from "../../components/ImageSlider";
import { useNavigation, useRoute } from "@react-navigation/native";

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
  About,
  Acessories,
  Footer,
} from "./styles";
import { Button } from "../../components/Button";
import { CarDTO } from "../../dtos/CarDTO";
import {getAccessoryIcon} from '../../utils/getAccessoryIcons';






interface Params {
  car: CarDTO;
}

export function CarDetails() {
  const navigaton = useNavigation();
  const route = useRoute();
  const { car } = route.params as Params;

  function handleConfirmRental() {
    navigaton.navigate("Scheduling", {car});
  }

  
  function handleBack() {
    navigaton.goBack();
  }
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
            car.accessories.map(acessory =>(
              <Accessory name="380km/h" 
              icon={getAccessoryIcon(acessory.type)}
              
              key={acessory.type}
              name={acessory.name}
              />
            ))

          }
         
        </Acessories>

        <About>{car.about}</About>
      </Content>

      <Footer>
        <Button
          title="Escolher o período do aluguel"
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
}
