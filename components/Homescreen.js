import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import colors from "../assets/colors/colors";

const Homescreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <SafeAreaView>
        <View style={styles.header}>
          <Image
            source={require("../assets/images/profile.png")}
            style={styles.profileImage}
          />
          <Feather name="menu" size={35} color={colors.textDark} />
        </View>
      </SafeAreaView>

      {/* Titles */}
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>FOODIE</Text>
      </View>

      {/* Search Section */}
      <View style={styles.searchWrapper}>
        <View style={styles.inputWrapper}>
          <Feather style={styles.searchIcon} name="search" size={24} color="black" />
          <TextInput style={styles.searchInput}/>
        </View>
      </View>

      
    </View>
  );
};

export default Homescreen;

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  // Header section
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor:'orange',
    paddingHorizontal: 20,
    alignItems: "center",
    marginTop: 20,
  },

  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 40,
    borderWidth:2,
    borderColor:colors.primary
  },

  // Title wrapper section
  titleWrapper: {
    // backgroundColor:colors.primary,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color:colors.primary
  },

  // search wrappaer section
  searchWrapper: {
    marginTop: 15,
    borderWidth: 1,
    height: 50,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems:'flex-start',
    justifyContent:'center',
    paddingHorizontal:10
  },
  inputWrapper:{
    flexDirection:'row'
  },
  searchIcon:{
    marginRight:10
  }
});
