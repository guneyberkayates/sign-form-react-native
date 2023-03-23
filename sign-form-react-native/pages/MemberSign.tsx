import React,{useState} from "react";
import {SafeAreaView,View,Text,Alert} from 'react-native';
import Input from "../input/input";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
function MemberSign({navigation}){

        const [userName,setUserName] = useState('');
        const [userSurname,setUserSurname] = useState('');
        const [userAge,setUserAge] = useState('');
        const [userEmail,setUserEmail] = useState('');

        function handleSubmit(){
            if( !userName || !userSurname || !userAge || !userEmail){
                Alert.alert('Lütfen tüm bilgileri doldurunuz')
                return;
            }
            else{
            const user = {
               userName,
               userSurname,
               userAge,
               userEmail,

            };
        
            navigation.navigate('MemberResult', {user}); 
        }}

    return(

        <SafeAreaView>
            <Text>
            Member Sign
            </Text>
            <Input label="Üye Adı" placeholder="Üye İsmi..." onChangeText={setUserName}/>
            <Input label="Üye Soyadı" placeholder="Üye Soyadı..." onChangeText={setUserSurname}/>
            <Input label="Üye Yaşı" placeholder="Üye Yaşı..." onChangeText={setUserAge}/>
            <Input label="Üye E-Posta" placeholder="Üye E-Posta adresi..." onChangeText={setUserEmail}/>
            <Button text="Kaydı Tamamla" onPress={handleSubmit} />
        </SafeAreaView>
    );
}

export default MemberSign;