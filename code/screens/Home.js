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
  import Icon from 'react-native-vector-icons/FontAwesome';
  import Icon2 from 'react-native-vector-icons/Entypo';
  
  import RegisterData from './popups/registerData.js';
  const screenWidth = Dimensions.get("window").width;
  import IndividualDataLog from './popups/individualDataLog.js';
  import InsulineToCarbRatio from './popups/insulineToCarbRatio.js';
  import GlucoseToInsulineRatio from './popups/glucoseToInsulineRatio.js'; 
  import {addDataToLocalDataBase,getData,getAllKeys} from '../dataManagement/localDataManager.js';
  export default class Home extends React.Component{
    constructor(){ 
        super()
        this.state= {
          glucoseHistory:false,
          glucoseHistoryData: [],
          glucoseToCarb:false,
          insulineToCarb:false,
          registerData: false,
          displayIndividualDataLog: false,
          insulineToCarbRatio: false,
          GlucoseToCarbRatio:false,
          glucoseToInsuline:false,
          sugerLevel: null,
          insulineToCarbRatioData: {"insuline":"1","carb":"10"},
          glucoseToInsulineRatioData:{"insuline":"1","glucose":30}
        }
    } 


   

    //insulineToCarb
    //glucoseToCarb
    //glucoseHistory
    //predictionOfBloodGlucose
    
    /*
glucoseHistory = [
  {timeStamp:null ,
  bloodGlucoseLevel:null,
  foodInCarbs:null,
  foodInsuline:nulll,
  correctionInsuline:null,
  activitesDone:[""],
  activitesToBeDone:[""],
  predictionOfBloodGlucose:null,
  carbsNeededToJustifyActivity: 
  }
]

    */
 
async UNSAFE_componentWillMount(){
  var keys = await getAllKeys();
  console.log(keys);
  //asigning first time
  keys.forEach((key)=>{
    if(key == "insulineToCarb"){
      this.setState({insulineToCarb:true});
    }else if(key == "glucoseToInsuline"){
      this.setState({glucoseToInsuline:true});
    }else if(key == 'glucoseHistory'){
      this.setState({glucoseHistory:true});
    }

  });

  if(!this.state.insulineToCarb){
     var insulineToCarbTemp = {insuline:1,carb:10};
     insulineToCarbTemp = JSON.stringify(insulineToCarbTemp);
    addDataToLocalDataBase("insulineToCarb",insulineToCarbTemp);
  }
  if(!this.state.glucoseToInsuline){
    var GlucoseToInsulineRatioTemp = {insuline:1,glucose:30};
     GlucoseToInsulineRatioTemp = JSON.stringify(GlucoseToInsulineRatioTemp);
    addDataToLocalDataBase("glucoseToInsuline",GlucoseToInsulineRatioTemp);
  }
  if(!this.state.glucoseHistory){
    
    addDataToLocalDataBase("glucoseHistory","[]");
  }
  var registredInsulineToCarb = await getData("insulineToCarb");
  registredInsulineToCarb = JSON.parse(registredInsulineToCarb);
  this.setState({insulineToCarbRatioData: registredInsulineToCarb})

  var registredGlucoseToInsuline = await getData("glucoseToInsuline");
      registredGlucoseToInsuline = JSON.parse(registredGlucoseToInsuline);
      this.setState({glucoseToInsulineRatioData: registredGlucoseToInsuline});

  var glucoseHistory = await getData("glucoseHistory");
      glucoseHistory = JSON.parse(glucoseHistory);
      this.setState({glucoseHistoryData: glucoseHistory})
}



  //1E1E1E
  createAnArrayForTheGraph = (glucoseHistory) => {
    var data = [];
    var date = [];
    glucoseHistory.forEach((recored,index)=>{
      data[index] = recored.bloodGlucoseLevel,
      date[index] = recored.timeStamp
    });
    return {"data": data,
            "labels": date};
  }

  fetchMoreDataAboutRecored = (recoredIndex,glucoseHistory) => {

    return glucoseHistory[recoredIndex];
  }

     data = {
        labels: ["6:00am", "12:00 pm", "6:00 pm", "12:00 am", "6:00 am", "12:00 pm"],
        datasets: [
          {
            data: [90, 45, 88, 400, 209,103],
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // optional
            strokeWidth: 10 // optional
          }
        ],
        legend: ["Glucose History"] // optional
      };

      closePopup = (popUpName) => {
        if(popUpName == "InsulineToCarbRatio"){
          this.setState({insulineToCarbRatio: false});
        }else if(popUpName == "IndividualDataLog"){
          this.setState({displayIndividualDataLog: false});
        }else if(popUpName == "RegisterData"){

          this.setState({registerData:false});
        }else if(popUpName == "GlucoseToCarbRatio"){
          this.setState({GlucoseToCarbRatio: false})
        }
      }
      closePopupIndividual =() => {
        this.setState({displayIndividualDataLog:false})
      }
      ChooseHeaderColor = (sugerLevel) =>{
        if(sugerLevel < 70){
          return "blue";
        }else if(sugerLevel >= 70 && sugerLevel <= 170){
          return "green";
        }else if(sugerLevel > 170){
          return "red";
        }
        console.log("THIS IS THE VALUE");
        return "red";
      }
       chartConfig = {
        backgroundGradientFrom: "gray",
        backgroundGradientFromOpacity: 1,
        backgroundGradientTo: "black",
        backgroundGradientToOpacity: 1,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false, // optional
        propsForDots: {
          r: "10",
          strokeWidth: "2",
          stroke: "#ffa726"
        }
      };
    render(){
        return(
            <View style={styles.all}>
              {this.state.registerData && 
               <RegisterData glucoseHistory={this.state.glucoseHistoryData} insulineToCarbRatio={this.state.insulineToCarbRatioData} GlucoseToCarbRatio={this.state.glucoseToInsulineRatioData} close={()=>{this.closePopup("RegisterData")}} />
                
              }
              {this.state.displayIndividualDataLog && 
              <IndividualDataLog headerColor={this.state.individualDataLogHeaderColor} sugerLevel={this.state.sugerLevel} close={() => {this.closePopup("IndividualDataLog")}}/>
              }

              {this.state.insulineToCarbRatio &&
                <InsulineToCarbRatio insuline={this.state.insulineToCarbRatioData.insuline} carb={this.state.insulineToCarbRatioData.carb} close={()=>{this.closePopup("InsulineToCarbRatio")}} />
              }

              {this.state.GlucoseToCarbRatio && 
              <GlucoseToInsulineRatio close={()=>{this.closePopup("GlucoseToCarbRatio")}} />
    }
              <TouchableOpacity onPress={() => {this.setState({registerData:true})}} style={{position:'absolute',justifyContent:'center',bottom:40,right:40,width:60,height:60,backgroundColor:'green',borderRadius:30,zIndex:200,borderWidth:2,borderColor:'black'}}>
          <Icon2 name="drop" size={30} color={'red'} style={{alignSelf:'center'}} />
              </TouchableOpacity>
                       <ScrollView style={{position:'relative',top:0,left:0,width:'100%'}} contentContainerStyle={{alignItems:'center'}}>
                    <View style={{ flexDirection:'row',height:220,justifyContent:'center',flexWrap:'wrap',width:'100%'}}>
                <TouchableOpacity onPress={()=> {this.setState({insulineToCarbRatio:true})}} style={{width:"46%",height:200,backgroundColor:'#1E1E1E',margin:5,elevation:100,borderRadius:0}}> 
                <View>
                <Text style={{fontSize:13,textAlign:'center',color:'#1E1E1E',backgroundColor:'green'}}>Insuline To Carb Ratio</Text>
                <Text style={{fontSize:60,margin:20,fontWeight:"100",color:'gray',textAlign:'center'}}>{this.state.insulineToCarbRatioData.carb +"/"+this.state.insulineToCarbRatioData.insuline}</Text>
                <Text style={{fontSize:10,color:'gray',textAlign:'center'}}>carb gram / insuline unit</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.setState({GlucoseToCarbRatio:true})}} style={{width:"46%",height:200,backgroundColor:'#1E1E1E',margin:5,elevation:100,borderRadius:0}}> 
                <View>
                <Text style={{fontSize:13,textAlign:'center',color:'#1E1E1E',backgroundColor:'green'}}>Glucose To Insuline Ratio</Text>
                <Text style={{fontSize:60,margin:20,fontWeight:"100",color:'gray',textAlign:'center'}}>{this.state.glucoseToInsulineRatioData.glucose +"/"+this.state.glucoseToInsulineRatioData.insuline}</Text>
                <Text style={{fontSize:10,color:'gray',textAlign:'center'}}>mg/dl / insuline unit</Text>
                </View>
                </TouchableOpacity>
            
             </View>
             
            <View style={{width:'95%',height:450,backgroundColor:'#1E1E1E',marginTop:-5}}>
              <ScrollView horizontal={true}    
               ref={ref => {this.scrollView = ref}}
              onContentSizeChange={() => this.scrollView.scrollToEnd({animated: true})}>
            <LineChart
  data={this.data}
  width={900}
  height={256}
  verticalLabelRotation={30}
  getDotColor={(dataPoint, dataPointIndex) => {
    if (dataPoint >= 189) {
     
    return 'red';
    }else if(dataPoint <=70){
      return "blue"
    }else{
    return "green";
  }}}
  onDataPointClick={(value) => {
    var dotColor = "";
    dotColor = this.ChooseHeaderColor(value.dataset.data[value.index]);
    this.setState({displayIndividualDataLog: true,individualDataLogHeaderColor:dotColor, sugerLevel: value.dataset.data[value.index]})
  }}
  chartConfig={this.chartConfig}
  fromZero={true}
  
  bezier
/>  
</ScrollView>
<View style={{margin:5,flexDirection:'row',width:'100%'}}>
<Icon name="dot-circle-o" size={20} color="blue" style={{borderRadius:2,borderColor:'black'}}/>
<Text style={{fontSize:15,margin:5,marginTop:0,color:'gray'}}>Low range of Glucose</Text>
</View>
<View style={{margin:5,flexDirection:'row',width:'100%'}}>
<Icon name="dot-circle-o" size={20} color="green" style={{borderRadius:2,borderColor:'black'}}/>
<Text style={{fontSize:15,margin:5,marginTop:0,color:'gray'}}>Normal range of Glucose</Text>
</View>
<View style={{margin:5,flexDirection:'row',width:'100%'}}>
<Icon name="dot-circle-o" size={20} color="yellow" style={{borderRadius:2,borderColor:'black'}}/>
<Text style={{fontSize:15,margin:5,marginTop:0,color:'gray'}}>Heigh range of Glucose</Text>
</View>
<View style={{margin:5,flexDirection:'row',width:'100%'}}>
<Icon name="dot-circle-o" size={20} color="red" style={{borderRadius:2,borderColor:'black'}}/>
<Text style={{fontSize:15,margin:5,marginTop:0,color:'gray'}}>Extermily Heigh range of Glucose</Text>
</View>
            </View>
            <View style={{width:'100%',height:150,backgroundColor:'#1E1E1E',width:'95%',margin:10}}>
              <View style={{position:'relative',top:0,width:'100%',height:20,backgroundColor:'green'}}>
                  <Text style={{color:'white',textAlign:'center'}}>Prediction of blood sugar now</Text>
              </View>
            <Text style={{fontSize:60,margin:20,fontWeight:"100",color:'white',textAlign:'center'}}>180</Text>

            </View>
            <View style={{height:100}}>

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