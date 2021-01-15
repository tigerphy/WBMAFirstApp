import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import ListItem from "./ListItem";

//fetch data with AJAX
const baseUrl = 'http://media.mw.metropolia.fi/wbma/';

const List = () => {
  //update the data to setMediaArray whenever the state is changed
  const [mediaArray, setMediaArray] = useState([]);

  const loadMedia = async (limit = 5) => {
    try {
      const listResponse = await fetch(baseUrl + 'media?limit=' + limit);
      //Store data in json
      const listJson = await listResponse.json();
      console.log('response json data', listJson);

      //media is done after promise is finished
      const media = await Promise.all(
        listJson.map(async (item) => {
          const fileResponse = await fetch(baseUrl + 'media/' + item.file_id);
          const fileJson = fileResponse.json();
          //console.log("media file data", json);
          return fileJson; //return file information
        })
      ); //going through every item in an array
      //setMediaArray(json);
      console.log('media array data', media);

      setMediaArray(media);
    } catch (error) {
      console.error('loadMedia error', error);
    }
  };

  //define when we want to react to this state)
  useEffect(() => {
    loadMedia(5);
  }, []);

  return (
    <FlatList
      data={mediaArray}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <ListItem singleMedia={item} />}
    />
  );
};

export default List;
