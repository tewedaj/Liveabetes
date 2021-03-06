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
  import Icon3 from 'react-native-vector-icons/AntDesign';
  import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

  export default class RegisterData extends React.Component {
      constructor(props){
          super(props)
          this.state = {
            foodTextInputBorder:"lightgray",
            bloodGlucoseBorder:"lightgray"
          }
      }
      render(){
        console.log(this.props);
          return(
            <View style={{position:'absolute',zIndex:500,elevation:400, width:'100%',height:'100%',backgroundColor:'rgba(54,54,54,0.4)',alignItems:'center',top:0,left:0}}>
                <View style={{backgroundColor:'white',width:'80%',height:'70%',alignSelf:'center',top:"10%",borderTopLeftRadius:10,borderTopRightRadius:10,overflow:'hidden'}}>
                <TouchableOpacity onPress={()=>this.props.close()} style={{top:5,right:10,position:'absolute',zIndex:600}}><Icon3 name={"closecircle"} size={23} color={'lightgray'} /></TouchableOpacity>
                <View style={{width:'100%',height:40,backgroundColor:'green',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <Icon2 name="drop" size={27} color={'lightgray'} style={{alignSelf:'center'}} />
                <Text style={{fontSize:'white',fontSize:20,color:'white'}}>Log your progress</Text>
                </View> 
                <View style={{borderRadius:10, flexDirection:'row',backgroundColor:'lightgray', alignSelf:'center',margin:10,width:'90%',borderColor:this.state.foodTextInputBorder,borderWidth:2}}> 
                <Icon name={"food"} size={40} color={'brown'} />
                <TextInput onFocus={()=>{this.setState({foodTextInputBorder:'brown'})}} onBlur={()=>{this.setState({foodTextInputBorder:'lightgray'})}}  style={{width:'80%'}}> </TextInput>
                </View>
                <View  style={{borderRadius:10, flexDirection:'row',backgroundColor:'lightgray', alignSelf:'center',margin:10,width:'90%',borderColor:this.state.bloodGlucoseBorder,borderWidth:2}}> 
                <Icon2 name={"drop"} size={40} color={'red'} style={{alignSelf:'center'}} />
                <TextInput onFocus={()=>{this.setState({bloodGlucoseBorder:'red'})}} onBlur={()=>{this.setState({bloodGlucoseBorder:'lightgray'})}}  style={{width:'80%'}}> </TextInput>
                </View>
                <View style={{width:'90%',flexDirection:'row',margin:15,backgroundColor:'white'}}>
                 <TouchableOpacity> 
                   <FontAwesome5 name={"walking"} size={20} color={'black'} style={{margin:5,backgroundColor:'lightgray',borderWidth:1,borderColor:'black', padding:15,borderRadius:10}}/>
               <Text style={{fontSize:10,textAlign:'center',color:'black'}}>Walk</Text>
                 </TouchableOpacity>
                 <TouchableOpacity> 
                  <FontAwesome5 name={"running"} size={20} color={'black'} style={{margin:5,backgroundColor:'lightgray',borderWidth:1,borderColor:'black', padding:15,borderRadius:10}}/>
               <Text style={{fontSize:10,textAlign:'center',color:'black'}}>Run</Text>
                 
                  </TouchableOpacity>

                  <TouchableOpacity> 
                  <FontAwesome5 name={"bus"} size={20} color={'black'} style={{margin:5,backgroundColor:'lightgray',borderWidth:1,borderColor:'black', padding:15,borderRadius:10}}/>
               <Text style={{fontSize:10,textAlign:'center',color:'black'}}>Take a Bus</Text>
                 
                  </TouchableOpacity>
                  <TouchableOpacity> 

                  <Icon name={"bike"} size={20} color={'black'} style={{margin:5,backgroundColor:'lightgray',borderWidth:1,borderColor:'black', padding:15,borderRadius:10}}/>
               <Text style={{fontSize:10,textAlign:'center',color:'black'}}>Bike</Text>
                 
                  </TouchableOpacity>


                  <TouchableOpacity> 

<Icon name={"sleep"} size={20} color={'black'} style={{margin:5,backgroundColor:'lightgray',borderWidth:1,borderColor:'black', padding:15,borderRadius:10}}/>
<Text style={{fontSize:10,textAlign:'center',color:'black'}}>Sleep</Text>

</TouchableOpacity>
                </View>
                
                <View style={{width:'90%',flexDirection:'row',margin:15,backgroundColor:'lightgray',padding:10}}>
                  <Text style={{fontSize:20}}>{"Food Insuline: 12 "}</Text> 
                </View>
                <View style={{width:'90%',flexDirection:'row',margin:15,backgroundColor:'lightgray',padding:10,top:0}}>
                  <Text style={{fontSize:20}}>{"Correction Insuline: 12 "}</Text> 
                </View>
                </View>

            </View>
          );
      }
  }