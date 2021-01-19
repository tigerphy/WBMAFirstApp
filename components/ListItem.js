import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground } from "react-native";
import PropTypes from "prop-types";

const ListItem = (props) => {
  return (
    <TouchableOpacity style={styles.row}>
      <View style={styles.imagebox}>
      <Image
        style={styles.image}
        source={{ uri: props.singleMedia.thumbnails.w160 }}
        />
      </View>
      <View style={styles.textbox}>
        <Text style={styles.listTitle}>{props.singleMedia.title}</Text>
        <Text>{props.singleMedia.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};

const styles = StyleSheet.create({
row:{
flexDirection: 'row',
padding: 15,
marginBottom: 15,
backgroundColor: '#eee',
borderWidth: 2,
borderColor: "brown",
},
imagebox: {
  flex:1,
},
image: {
  flex: 1,
  height: 150,
  borderRadius:360,
  
},
textbox: {
  flex: 1,
  padding: 10,

},
  listTitle: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 15,
    color: "orange",
  }
});

export default ListItem;
