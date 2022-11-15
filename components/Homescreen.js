import React from 'react'
import {View, Text, StyleSheet,SafeAreaView, Image} from 'react-native'
import { Feather } from '@expo/vector-icons';
import colors from '../assets/colors/colors';


const Homescreen = () => {
    return (
        <View style={styles.container}>

            {/* Header */}
          <SafeAreaView>
            <View style={styles.header}>
                <Image source={require("../assets/images/profile.png")} style={styles.profileImage}/>
                <Feather name="menu" size={30} color={colors.textDark} />
            </View>
          </SafeAreaView>


        </View>
      );
}

export default Homescreen

// styles
const styles = StyleSheet.create({
    container: {
      flex:1
    },

    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        // backgroundColor:'orange',
        paddingHorizontal:20,
        alignItems:'center',
        paddingTop:20
    },

    profileImage:{
        height:50,
        width:50,
        borderRadius:40
    }
  });
