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
  import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
  import { Dimensions } from "react-native";
  const screenWidth = Dimensions.get("window").width;

  export default class Home extends React.Component{
    constructor(){ 
        super()
        this.state={

        }
    }

     data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            strokeWidth: 2 // optional
          }
        ],
        legend: ["Rainy Days"] // optional
      };
       chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };
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
            <LineChart
  data={this.data}
  width={screenWidth}
  height={256}
  verticalLabelRotation={30}
  chartConfig={this.chartConfig}
  bezier
/>  
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