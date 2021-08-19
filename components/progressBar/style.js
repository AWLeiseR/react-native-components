/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const widthScale = percentage => Dimensions.get('window').width * percentage;
export const heightScale = percentage => Dimensions.get('window').height * percentage;

export const ProgressBar = styled.View`
  width: ${(props) => props.width ? widthScale(props.width) : widthScale(0.75)}px;
  background-color:  ${(props) => props.backgroundColor ? props.backgroundColor : '#000'};
  flex-direction: row;
  margin-horizontal: ${(props) => props.marginHorizontal ? widthScale(props.marginHorizontal) : widthScale(0.02)}px;
  border-radius: ${(props) => props.borderRadius ? widthScale(props.borderRadius) : widthScale(0.01)}px;
`;

export const ProgressBarStatus = styled.View`
  width: ${(props) => props.progress ? props.progress : 50}%;
  height: ${(props) => props.height ? heightScale(props.height) : heightScale(0.01)}px;
  background-color: ${(props) => props.backgroundColor ? props.backgroundColor : 'red'};
  border-radius: ${(props) => props.borderRadius ? widthScale(props.borderRadius) : widthScale(0.01)}px;
`;
