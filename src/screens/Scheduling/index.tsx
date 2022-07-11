import React from "react";
import { BackButton } from "../../components/BackButton";
import { useTheme } from "styled-components/native";
import ArrowSvg from "../../assets/arrow.svg";
import { StatusBar } from "react-native";
import { format } from "date-fns/esm";
import { Button } from "../../components/Button";
import {
  Calendar,
  DayProps,
  MarkedDatProps,
  generateInterval,
} from "../../components/Calendar";
import { useNavigation, useRoute} from "@react-navigation/native";

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateValue,
  DateTitle,
  Content,
  Footer,
} from "./styles";
import { useState } from "react";
import { getPlatformDate } from "../../utils/getPlatFormDate";
import { CarDTO } from "../../dtos/CarDTO";

interface RentalPeriod {
  startFormatted: string;
  endFormatted: string;
}

interface Params {
    car: CarDTO;
  }
  

export function Scheduling() {


    const route = useRoute();
    const { car } = route.params as Params;


  const theme = useTheme();
  const navigaton = useNavigation();
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>(
    {} as DayProps
  );

  const [markedDates, setMarkedtDates] = useState<MarkedDatProps>(
    {} as MarkedDatProps
  );
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>(
    {} as RentalPeriod
  );

  function handleBack() {
    navigaton.goBack();
  }

  function handConfirmRental() {
        navigaton.navigate("SchedulingDetails", {
            car,
            date: Object.keys(markedDates)
        });
   
  }

  function handleChangeDate(date: DayProps) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    setMarkedtDates(interval);

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setRentalPeriod({

      startFormatted: format(
        getPlatformDate(new Date(firstDate)),
        "dd/MM/yyyy"
      ),
      endFormatted: format(getPlatformDate(new Date(endDate)), "dd/MM/yyyy"),
    });
  }

  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <BackButton onPress={handleBack} color={theme.colors.shape} />

        <Title>
          Escolha uma {"\n"}
          data de início e fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={!!rentalPeriod.startFormatted}>
              {rentalPeriod.startFormatted}
            </DateValue>
          </DateInfo>
          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={!!rentalPeriod.endFormatted}>
              {rentalPeriod.endFormatted}
            </DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>
      <Content>
        <Calendar markedDates={markedDates} onDayPress={handleChangeDate} />
      </Content>

      <Footer>
        <Button enabled={!!rentalPeriod.endFormatted} title="Confirmar" onPress={handConfirmRental} />
      </Footer>
    </Container>
  );
}
