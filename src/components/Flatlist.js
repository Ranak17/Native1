import React, { Component, useEffect, useState } from 'react'
import { CheckBox,Text, View,StatusBar, TextInput ,StyleSheet,Image,FlatList} from 'react-native';

function Flatlist({route,navigation}){
  const name=route.params.userName;
  // console.log(route.params.userName);
  const [data,setData]=useState([]);
  useEffect(()=>{
    fetch("https://dummyjson.com/users").then((resp)=>{
      return resp.json();
    }).then((res)=>{
      setData(res.users)
    })
  },[])
  return(     
  <View style={styles.container}>
    <StatusBar backgroundColor={'black'}/>
    <FlatList
    data={data} 
    // horizontal
    renderItem={(ele)=>{
      return (
      <View style={styles.cardContainer}>
        <Text>{`Hi ${name}`}</Text>
        <View style={styles.card}>
          <Image style={styles.Images}source={{uri:ele.item.image}}/>
          <View style={styles.imageDescription}>
            <Text style={styles.textStyle}>{ele.item.firstName}</Text>
            <Text style={styles.textStyle}>Age : {ele.item.age}</Text>
            <Text style={styles.textStyle}>{ele.item.email}</Text>
            {/* <Text style={styles.textStyle}>{ele.item.firstName}</Text> */}
            </View>
        </View>
      </View>);
    }}
    />
  </View>
  );
}

const styles=StyleSheet.create({
container:{
  flex:1,
  // alignItems:'center',
  backgroundColor:'gray'
},
cardContainer:{
  // borderWidth:1,
  // backgroundColor:'white',
  // borderColor:'black',
  height:400,
  alignItems:'center',
  width:'100%',
  justifyContent:'center'
},
card:{
  borderWidth:1,
  backgroundColor:'white',
  // borderColor:'black',
  height:'90%',
  width:'70%',
},
Images:{
  resizeMode:'contain',
  // width:'100%',
  // height:'100%',
  borderWidth:3,
  // borderColor:'black',
  flex:.7
},
imageDescription:{
  alignItems:'center',
  flex:.3
},
textStyle:{
  color:'black',
  fontSize:20
}
})


export default Flatlist;
