import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';


interface ButttonProps extends RectButtonProps{
    color:string;
}


export const Container = styled(RectButton)<ButttonProps>`
width:100% ;
align-items:center ;
justify-content:center ;
padding:19px ;
border-radius:8px ;
background-color:${({color, theme})=>color ? color: theme.colors.main} ;
`;
export const Title=styled.Text`
font-family:${({theme})=>theme.fonts.primary_500} ;
font-size:${RFValue(15)}px ;
color:${({theme})=>theme.colors.shape} ;
`;