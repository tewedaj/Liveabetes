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
  import { AsyncStorage } from 'react-native';

  export default class RegisterData extends React.Component {
      constructor(props){
          super(props)
          this.state = {
            foodTextInputBorder:"lightgray",
            bloodGlucoseBorder:"lightgray",
            activity: [],
            walking: false,
            running: false,
            takeabus: false,
            bike: false,
            sleep:false
          }
      }

     async componentDidMount(){
      //  this._retrieveData();
      //  const keys = await AsyncStorage.getAllKeys();
      //  console.log("this are all of the kes: ", keys);
      }

      isActivityDone = (activity)=> {
        this.state.activity.forEach((activ)=>{
          if(activity == activ){
            this.setState({walking:"green"})
          }
        });
        return "lightgray";
      }

      addActivity = (activity) => {
        
        //  var activities = [...this.state.activity,activity];
         if(activity == "Walking"){
           this.setState({walking:!this.state.walking})

         }   else if(activity == "Run"){
          this.setState({running:!this.state.running})

         }else if(activity == "Bus"){
          this.setState({takeabus:!this.state.takeabus})
         }else if(activity == "Bike"){
           this.setState({bike: !this.state.bike})
         }else if(activity == "Sleep"){
           this.setState({sleep:!this.state.sleep})
         }

            // this.setState({activity:activities});
            // console.log(this.state.activity);

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
                <Icon name={"food"} size={40} color={this.state.foodTextInputBorder == "brown"? "brown" : "gray"} />
                <TextInput onFocus={()=>{this.setState({foodTextInputBorder:'brown'})}} onBlur={()=>{this.setState({foodTextInputBorder:'lightgray'})}}  style={{width:'80%'}}> </TextInput>
                </View>
                <View  style={{borderRadius:10, flexDirection:'row',backgroundColor:'lightgray', alignSelf:'center',margin:10,width:'90%',borderColor:this.state.bloodGlucoseBorder,borderWidth:2}}> 
                <Icon2 name={"drop"} size={40} color={this.state.bloodGlucoseBorder == "red"? "red" : "gray"} style={{alignSelf:'center'}} />
                <TextInput onFocus={()=>{this.setState({bloodGlucoseBorder:'red'})}} onBlur={()=>{this.setState({bloodGlucoseBorder:'lightgray'})}}  style={{width:'80%'}}> </TextInput>
                </View>
                <View style={{width:'90%',flexDirection:'row',margin:15,backgroundColor:'white'}}>
                 <TouchableOpacity onPress={()=>{this.addActivity("Walking")}}> 
                   <FontAwesome5 name={"walking"} size={20} color={this.state.walking?"white":"black"} style={{margin:5,backgroundColor:this.state.walking?"green":"lightgray",borderWidth:1,borderColor:'black', padding:15,borderRadius:10}}/>
               <Text style={{fontSize:10,textAlign:'center',color:'black'}}>Walk</Text>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={()=>{this.addActivity("Run")}}> 
                  <FontAwesome5 name={"running"} size={20} color={this.state.running?"white":"black"} style={{margin:5,backgroundColor:this.state.running?"green":"lightgray",borderWidth:1,borderColor:'black', padding:15,borderRadius:10}}/>
               <Text style={{fontSize:10,textAlign:'center',color:'black'}}>Run</Text>
                 
                  </TouchableOpacity>

                  <TouchableOpacity onPress={()=>{this.addActivity("Bus")}}> 
                  <FontAwesome5 name={"bus"} size={20} color={this.state.takeabus?"white":"black"} style={{margin:5,backgroundColor:this.state.takeabus?"green":"lightgray",borderWidth:1,borderColor:'black', padding:15,borderRadius:10}}/>
               <Text style={{fontSize:10,textAlign:'center',color:'black'}}>Take a Bus</Text>
                 
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>{this.addActivity("Bike")}}> 

                  <Icon name={"bike"} size={20} color={this.state.bike?"white":"black"} style={{margin:5,backgroundColor:this.state.bike?"green":"lightgray",borderWidth:1,borderColor:'black', padding:15,borderRadius:10}}/>
               <Text style={{fontSize:10,textAlign:'center',color:'black'}}>Bike</Text>
                 
                  </TouchableOpacity>


                  <TouchableOpacity onPress={()=>{this.addActivity("Sleep")}}> 

<Icon name={"sleep"} size={20} color={this.state.sleep?"white":"black"} style={{margin:5,backgroundColor:this.state.sleep?"green":"lightgray",borderWidth:1,borderColor:'black', padding:15,borderRadius:10}}/>
<Text style={{fontSize:10,textAlign:'center',color:'black'}}>Sleep</Text>

</TouchableOpacity>
                </View>
                
                <View style={{width:'90%',borderRadius:10, flexDirection:'row',margin:15,backgroundColor:'lightgray',padding:10}}>
                  <Text style={{fontSize:20}}>{"Food Insuline: 12 "}</Text> 
                </View>
                <View style={{borderRadius:10, width:'90%',flexDirection:'row',margin:15,backgroundColor:'lightgray',padding:10,top:0}}>
                  <Text style={{fontSize:20}}>{"Correction Insuline: 12 "}</Text> 
                </View>

                <TouchableOpacity style={{borderRadius:10, width:'90%',margin:15,backgroundColor:'green',alignItems:'center', padding:10,top:0}}>
                  <Text style={{fontSize:20,textAlign:'center',color:'white'}}>{"Log Data"}</Text> 
                </TouchableOpacity>

                </View>

            </View>
          );
      }
  }