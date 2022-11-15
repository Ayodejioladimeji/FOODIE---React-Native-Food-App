import React, { useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
  FlatList,
  ScrollView,
  StatusBar,
  Platform,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

import colors from "../assets/colors/colors";
import categoriesData from "./common/categoryData";
import popularData from "./common/popularData";

// status bar
const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
);

const Homescreen = () => {
  // initialize font family
  const [fontsLoaded] = useFonts({
    "Lobster-Regular": require("../assets/fonts/Lobster-Regular.ttf"),
    "Montserrat-Black": require("../assets/fonts/Montserrat-Black.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  // render categories item
  const renderCategoryItem = ({ item }) => {
    return (
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsHorizontalScrollIndicator={false}
      >
        <View
          style={[
            styles.categoryView,
            { backgroundColor: item.selected ? colors.primary : colors.white },
          ]}
        >
          <Image style={styles.categoryImage} source={item.image} />
          <Text
            style={[
              styles.categoryText,
              {
                color: item.selected ? colors.white : colors.primary,
              },
            ]}
          >
            {item.title}
          </Text>
          <View
            style={[
              styles.categoryIconBox,
              {
                backgroundColor: !item.selected ? colors.primary : colors.white,
              },
            ]}
          >
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
    <View style={styles.container} onLayout={onLayoutRootView}>
      <MyStatusBar backgroundColor={colors.primary} barStyle="light-content" />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <SafeAreaView>
          <View style={styles.header}>
            <Image
              source={require("../assets/images/profile.png")}
              style={styles.profileImage}
            />
            <Feather name="menu" size={35} color={colors.textDark} />
          </View>

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
                placeholderStyle={{ color: "red" }}
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

          {/* The popular section */}
          <View style={styles.popularWrapper}>
            <Text style={styles.popularText}>Choose from our menu</Text>
            {popularData.map((item) => {
              return (
                <View style={styles.popularCard} key={item.id}>
                  <View style={styles.popularLeft}>
                    <Text style={styles.popularTitle}>{item.title}</Text>
                    <Text style={styles.popularPrice}>{item.price}</Text>
                    <Text style={styles.popularWeight}>{item.weight}</Text>

                    <View style={styles.popularButton}>
                      <Text style={styles.popularButtonText}>Buy</Text>
                    </View>
                  </View>

                  <Image style={styles.popularImage} source={item.image} />
                </View>
              );
            })}
          </View>
        </SafeAreaView>
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
    marginTop: Platform.OS === "ios" ? 20 : 50,
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
    fontFamily: "Montserrat-Black",
    // fontFamily: Platform.OS === "ios" ? "Lobster-Regular" : "Lobster-Regular",
  },

  // search wrappaer section ===========
  searchWrapper: {
    marginTop: 15,
    borderWidth: 1,
    borderColor: colors.primary,
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
    color: colors.textLight,
  },
  searchInput: {
    fontSize: Platform.OS === "ios" ? 17 : 15,
    color: colors.textDark,
  },

  //   Categories section
  categoriesWrapper: {
    marginTop: 25,
    marginHorizontal: 20,
  },
  categoriesText: {
    fontSize: 18,
    fontWeight: "bold",
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
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 0.5,
    paddingBottom: 20,
  },
  categoryImage: {
    marginBottom: 10,
  },
  categoryText: {
    color: "white",
    fontWeight: "bold",
    marginBottom: 20,
  },
  categoryIconBox: {
    height: 30,
    width: 30,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
  },
  categoryIcon: {
    alignSelf: "center",
    justifySelf: "center",
  },

  // The section of popular
  popularWrapper: {
    marginTop: 35,
    marginHorizontal: 20,
  },
  popularText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  popularCard: {
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: colors.white,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 0.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 0,
    overflow: "hidden",
    // backgroundColor: "red",
  },
  popularImage: {
    height: 180,
    width: 250,
    resizeMode: "contain",
    marginRight: -50,
  },
  // popularLeft: {
  //   backgroundColor: "orange",
  // },
  popularTitle: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10,
    color: colors.primary,
  },
  popularPrice: {
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 10,
  },
  popularWeight: {
    fontSize: 17,
  },
  popularButton: {
    backgroundColor: colors.primary,
    marginTop: 20,
    padding: 10,
    width: 100,
    alignItems: "center",
    borderTopRightRadius: 20,
    marginLeft: -20,
  },
  popularButtonText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 17,
  },
});
