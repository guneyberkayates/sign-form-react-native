import React from 'react'
import { Text, View ,SafeAreaView, StyleSheet } from 'react-native'
import { useRoute } from '@react-navigation/native';

function MemberResult(){
    const route= useRoute();
    const {user} = route.params;
    


  return(
    <SafeAreaView>
        <Text style={styles.label}>Üye Adı: {user && user.userName}</Text>
        <Text style={styles.label}>Üye Soyadı: {user && user.userSurname}</Text>
        <Text style={styles.label}>Üye Yaşı: {user && user.userAge} </Text>
        <Text style={styles.label}>Üye Eposta Adresi: {user && user.userEmail} </Text>

    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
    label:{
        fontSize:30,
        fontWeight:'bold',
        margin:5,
    }
})

export default MemberResult;