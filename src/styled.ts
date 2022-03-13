import styled from "styled-components/native";
import {Platform} from "react-native"

const android:boolean = Platform.OS==="android"
export const Container = styled.SafeAreaView`
flex:1 ;
background-color:#fff;
padding-top: ${Platform.OS==="android"? "30px" :"0px"};
`;
export const TopContainer = styled.View`
width:90%;
height:50px;
flex-direction: row;
justify-content:space-between ;
margin-top:10px;
align-self: center;
padding-left:10px ;
border-radius: 6px;

`;
export const Input = styled.TextInput`
width: 80% ;
height:50px;
align-self: center;
padding-left:10px ;
border-radius: 4px;
font-size:22px ;
`;
export const BtnAdd = styled.TouchableOpacity`
width: 40px ;
height:40px;
background-color:#4D77FF;
border-radius: 4px;
font-size:22px ;
align-items:center ;
justify-content:center;
`;
export const LabelContainer = styled.View`
width:150px;
height:40px ;
justify-content:center ;
align-items:center ;
margin-left:5%;
margin-top:10px ;
margin-bottom:10px ;
background-color:#000 ;
border-radius:25px;
`
export const Label = styled.Text`
color:#fff;
font-size:17px;
font-weight:bold ;
`
export const ListContainer = styled.View`
width: 90% ;
height:80%;
border-radius:8px;
align-self:center ;
`;

export const TextBtnAdd = styled.Text`
width: 40px ;
height:40px;
border-radius: 4px;
font-size:22px ;
`;

export const Card = styled.View`
width: 100% ;
height:120px;
border-radius:12px;
align-self:center ;
margin-bottom:10px ;
justify-content:space-evenly ;
align-items: center;
`;
export const CardTop = styled.View`
width: 90% ;
height:60px;
/* background-color:red; */
border-radius:12px;
align-self:center ;
margin-bottom:10px ;
justify-content:space-between;
flex-direction:row ;
align-items: center;
`;

export const DateWrapper = styled.View`
border:1px solid #ccc ;
height:35px ;
width:120px ;
justify-content:center ;
align-items:center ;
border-radius:30px ;
`
export const DateText = styled.Text`
color:#000;
opacity:.5;
`

export const CardWrapper = styled.View`
width: 90% ;
height:50px ;
/* background-color:red; */
border-radius:12px;
align-self:center ;
flex-direction:row ;
margin-bottom:10px ;
justify-content:space-between;
`;
export const BtnDelete = styled.TouchableOpacity`
width: 30px;
height: 40px;
align-items: center;
justify-content:center ;
`;
export const BtnCheck = styled.TouchableOpacity`
width: 40px;
height: 40px;
align-items: center;
justify-content:center ;
`;
export const CardText = styled.Text`
color:#000;
font-size:18px;
font-weight: bold;
`;