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
    Image,
    TextInput
  } from 'react-native';
  import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
  import Icon2 from 'react-native-vector-icons/Entypo';
  import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


  export default class IndividualDataLog extends React.Component {
      constructor(props){
          super(props)
          this.state = {

          }
      }
      render(){
        console.log(this.props);
          return(
            <View style={{position:'absolute',zIndex:500,elevation:400, width:'100%',height:'100%',backgroundColor:'rgba(54,54,54,0.4)',alignItems:'center',top:0,left:0}}>
                <View style={{backgroundColor:'white',width:'80%',height:'50%',alignSelf:'center',top:"10%",borderTopLeftRadius:10,borderTopRightRadius:10,overflow:'hidden'}}>
                <TouchableOpacity onPress={()=>this.props.close()} style={{top:5,right:10,position:'absolute',zIndex:600}}><Text style={{fontSize:20}}>{"X"}</Text></TouchableOpacity>
                <View style={{width:'100%',height:40,backgroundColor:this.props.headerColor,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <Icon2 name="drop" size={30} color={'red'} style={{alignSelf:'center'}} />
                <Text style={{fontSize:'white',fontSize:20,color:'white'}}>Loged Data</Text>
                </View> 
          
                </View>

            </View>
          );
      }
  }