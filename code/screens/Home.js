import React from 'react';

import {
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableOpacity,
    Image
  } from 'react-native';

  export default class Home extends React.Component{
    constructor(){ 
        super()
        this.state={

        }
    }

    render(){
        return(
            <View style={styles.all}>
                       <ScrollView style={{position:'relative',top:0,left:0,width:'100%'}} contentContainerStyle={{alignItems:'center'}}>
                    <View style={{ flexDirection:'row',height:220,justifyContent:'center',flexWrap:'wrap',width:'100%'}}>
                <TouchableOpacity style={{width:"45%",height:200,backgroundColor:'black',margin:10,elevation:100}}> 
                <View>
                <Text style={{fontSize:13,textAlign:'center',color:'white'}}>Insuline To Carb Ratio</Text>
                <Text style={{fontSize:60,margin:20,fontWeight:"100",color:'white',textAlign:'center'}}>10/1</Text>
                <Text style={{fontSize:10,color:'white',textAlign:'center'}}>carb gram / insuline unit</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity style={{width:"45%",height:200,backgroundColor:'black',margin:10,elevation:100}}> 
                <View>
                <Text style={{fontSize:13,textAlign:'center',color:'white'}}>Glucose To Insuline Ratio</Text>
                <Text style={{fontSize:60,margin:20,fontWeight:"100",color:'white',textAlign:'center'}}>30/1</Text>
                <Text style={{fontSize:10,color:'white',textAlign:'center'}}>mg/dl / insuline unit</Text>
                </View>
                </TouchableOpacity>
            
             </View>
             
            <View style={{width:'95%',height:400,backgroundColor:'black',marginTop:8}}>

            </View>
            <View style={{width:'100%',height:200,backgroundColor:'black',width:'95%',margin:20}}>
            <Text style={{fontSize:60,margin:20,fontWeight:"100",color:'white',textAlign:'center'}}>180</Text>

            </View>
            </ScrollView>
            </View>
        );
    }
  }

  const styles = StyleSheet.create({
    all:{
        flex:1,
        width:'100%',
        justifyContent:'center'
    }
  });