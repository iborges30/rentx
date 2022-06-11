import { eachDayOfInterval, format } from "date-fns";
import { DayProps, MarkedDatProps } from ".";
import theme from "../../screens/styles/theme";
import { getPlatformDate } from "../../utils/getPlatFormDate";

 

export function generateInterval(start: DayProps, end: DayProps) {
  let interval: MarkedDatProps = {};

  eachDayOfInterval({
    start: new Date(start.timestamp),
    end: new Date(end.timestamp),
    
  }).forEach((item) => {
    const date = format(getPlatformDate(item), "yyyy-MM-dd");
    interval = {
      ...interval,
      [date]: {
        color:
          start.dateString === date || end.dateString === date
            ? theme.colors.main
            : theme.colors.main_light,
        textColor:
          start.dateString === date || end.dateString === date
            ? theme.colors.main_light
            : theme.colors.main,
      },
    };
  });
  return interval;
}