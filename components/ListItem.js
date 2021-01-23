import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import PropTypes from 'prop-types';

const uploadUrl = "http://media.mw.metropolia.fi/wbma/uploads/";

const ListItem = ({navigation, singleMedia}) => {
  return (
    <TouchableOpacity style={styles.row}
      onPress={() => {
          navigation.navigate('Single');
        }}
      >
      <View style={styles.imagebox}>
        <Image
          style={styles.image}
          source={{ uri: uploadUrl + singleMedia.thumbnails.w160}}
        />
      </View>
      <View style={styles.textbox}>
        <Text style={styles.listTitle}>{singleMedia.title}</Text>
        <Text>{singleMedia.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    padding: 15,
    marginBottom: 15,
    backgroundColor: "#eee",
    borderRadius: 16,
  },
  imagebox: {
    flex: 1,
  },
  image: {
    flex: 1,
    height: 150,
    borderRadius: 6,
  },
  textbox: {
    flex: 1,
    padding: 10,
  },
  listTitle: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 15,
  },
});

ListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
};

export default ListItem;

