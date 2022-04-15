import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Logo from "../../assets/logo.svg";
import { Car } from "../../components/Car";

import { Container, Header, TotalCars, HeaderContent, CarList } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { api } from "../../services/api";
import { CarDTO } from "../../dtos/CarDTO";

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  const carData = {
    brand: "Audi",
    name: "Coupé",
    rent: {
      period: "AO DIA",
      price: 120,
    },
    thumbnail:
      "https://mediaservice.audi.com/media/live/50900/fly1400x601n1/f5f/2021.png",
  };

  const navigaton = useNavigation();

  function handCarDetails() {
    navigaton.navigate("CarDetails");
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get("/cars");
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  }, []);

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

      <CarList
        data={cars}
        keyExtractor={(item=>}
        renderItem={({ item }) => (
          <Car data={carData} onPress={handCarDetails} />
        )}
      />
    </Container>
  );
}
