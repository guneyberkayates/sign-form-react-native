import { SafeAreaView,Text,StyleSheet} from 'react-native'
import React from 'react'
import Button from '../components/Button';
 function Welcome({navigation}) {

  function goToMemberSign(){
    navigation.navigate('MemberSign');
  }

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.header}>
          Fitness Gym
        </Text>
        <Button text="Üye Ol" onPress={goToMemberSign}/>
        <Button text="Giriş Yap" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    marginTop:40,
    alignItems:'center'
  },
  header:{
    textAlign:'center',
    fontSize:30,
    fontWeight:'bold',
    margin:10,
    

  }
})

export default Welcome;