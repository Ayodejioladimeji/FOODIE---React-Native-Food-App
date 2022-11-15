import { Feather } from '@expo/vector-icons'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import colors from '../../assets/colors/colors'
import categoriesData from './categoryData'

//
const CategorySection = () => {
  const renderCategoryItem = ({ item }) => {
    return (
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
    );
  };

  return (
    <FlatList
      data={categoriesData}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id}
      horizontal={true}
    />
  )
}

export default CategorySection

/ styles
const styles = StyleSheet.create({

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

