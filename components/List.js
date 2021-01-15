import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import ListItem from './ListItem';

//fetch data with AJAX
const url = 'https://raw.githubusercontent.com/mattpe/wbma/master/docs/assets/test.json';

const List = () => {
  //update the data to setMediaArray whenever the state is changed
  const [mediaArray, setMediaArray] = useState([]);

  const loadMedia = async () => {
    try{
    const response = await fetch(url);
    //Store data in json
    const json = await response.json();
    console.log('response json data',json);
    setMediaArray(json);
  }catch (error){
    console.error('loadMedia error', error);
  }
  };

  //define when we want to react to this state)
  useEffect(()=>{
    loadMedia();
  },[]);

  
  return (
    <FlatList
      data={mediaArray}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => <ListItem singleMedia={item} />}
    />
  );
};

export default List;