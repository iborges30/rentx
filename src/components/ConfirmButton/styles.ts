import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { RectButtonProps } from 'react-native-gesture-handler';

export const Container = styled(RectButtonProps)`
  width: 80px;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.shape_dark};
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;



export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
`;

