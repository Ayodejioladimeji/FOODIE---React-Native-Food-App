import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import colors from "../assets/colors/colors";
import categoriesData from "./common/categoryData";

const Homescreen = () => {
  const renderCategoryItem = ({ item }) => {
    return (
      <ScrollView contentInsetAdjustmentBehavior="automatic" showsHorizontalScrollIndicator={false}>
        <View style={[styles.categoryView, 
      {backgroundColor:item.selected ? colors.primary : colors.white}]}>
        <Image style={styles.categoryImage} source={item.image} />
        <Text style={[styles.categoryText, {
            color:item.selected ? colors.white : colors.primary
        }]}>{item.title}</Text>
        <View style={[styles.categoryIconBox, {
            backgroundColor:!item.selected ? colors.primary:colors.white
        }]}>
          <Feather
            style={styles.categoryIcon}
            name="chevron-right"
            size={20}
            color={!item.selected ? colors.white : colors.textDark}
          />
        </View>
      </View>
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
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
          <Feather
            style={styles.searchIcon}
            name="search"
            size={24}
            color="black"
          />
          <TextInput
            placeholder="Enter your search"
            style={styles.searchInput}
          />
        </View>
      </View>

      {/* Categories section */}
      <View style={styles.categoriesWrapper}>
        <Text style={styles.categoriesText}>Categories</Text>

        <FlatList
          data={categoriesData}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
        />
      </View>
      </ScrollView>
    </View>
  );
};

export default Homescreen;

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:colors.white
  },

  // Header section
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
    marginTop: 20,
  },

  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: colors.primary,
  },

  // Title wrapper section
  titleWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.primary,
  },

  // search wrappaer section
  searchWrapper: {
    marginTop: 15,
    borderWidth: 1,
    height: 50,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  inputWrapper: {
    flexDirection: "row",
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    fontSize: 18,
  },

  //   Categories section
  categoriesWrapper: {
    marginTop: 25,
    marginHorizontal: 20,
  },
  categoriesText: {
    fontSize: 18,
  },
  categoryView: {
    padding: 20,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    marginRight: 20,
    width: 130,
    borderRadius: 15,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1, 
    elevation: 5,
    paddingBottom:20
  },
  categoryImage: {
    marginBottom: 10,
  },
  categoryText:{
    color:'white',
    fontWeight:'bold',
    marginBottom:20
  },
  categoryIconBox:{
    height:30,
    width:30,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:40,
  },
  categoryIcon:{
    alignSelf:'center',
    justifySelf:'center'
  }
});
