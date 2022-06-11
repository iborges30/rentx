import React from "react";

import {
  Calendar as CustomCalendar,
  LocaleConfig,
  CalendarProps 
} from 'react-native-calendars';
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { ptBr } from "./locateConfig";
import { generateInterval } from './generationInterval';

LocaleConfig.locales['pt-br']=ptBr
LocaleConfig.defaultLocale = "pt-br";


interface MarkedDatProps{
  [date:string]:{
    color:string;
    textColor:string;
    disabled?:boolean;
    disabledTouchEvent?:boolean;
  }
}

/*
interface CalendarProps {
  markedDates: MakedDateProps;
  onDayPress: DateCallbackHandler;
}
*/

interface DayProps {
  dateString: string;
  day: string;
  month: string;
  year: string;
  timestamp: string;
}


 function Calendar({markedDates, onDayPress}: CalendarProps) {
  const theme = useTheme();
  return (
    <CustomCalendar
      renderArrow={(direction) => (
        <Feather
          size={24}
          color={theme.colors.text}
          name={direction == "left" ? "chevron-left" : "chevron-right"}
        />
      )}

      headerStyle={{
          backgroundColor: theme.colors.background_secondary,
          borderBottomWidth:0.5,
          borderBottomColor:theme.colors.text_detail,
          paddingBottom:10,
          marginBottom:10
      }}

      theme={{
        textDayFontFamily:theme.fonts.primary_400,
        textDayHeaderFontFamily:theme.fonts.secondary_600,
        textDayHeaderFontSize:10,
        textMonthFontSize:20,
        monthTextColor:theme.colors.title,
        arrowStyle:{
          marginHorizontal:-15
        }
      }}

      firstDay={1}
      minDate={new Date()}
      markedDates={markedDates}
      markingType="period"
      onDayPress={onDayPress}
    />
  );
}

export {
  Calendar,
  MarkedDatProps,
  DayProps,
  generateInterval
}