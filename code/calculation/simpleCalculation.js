



export const calculateInsuline = (glucoseLevel,carbsTaken,activitiesToDo,insulineToCarbRatio,glucoseToCarbRatio) => {
        // foodInsuline = (carbsTaken * insulineToCarbRatio.insuline) / (insulineToCarbRatio.carb * )
        // 1 = 10
        // insu     = carb 
        // 1 * carb / insuline * 10 
       var foodInsuline = insulineToCarbRatio.insuline * carbsTaken / insulineToCarbRatio.carb;

       var correctionInsuline  =  glucoseToCarbRatio.insuline * glucoseLevel / glucoseToCarbRatio.glucose;
       if(glucoseLevel >= 80 && glucoseLevel <= 110){
        correctionInsuline  =  0;

       }else if(glucoseLevel < 80){
        correctionInsuline = 0;
       }else{
        glucoseLevel = glucoseLevel - 110;
        correctionInsuline  =  glucoseToCarbRatio.insuline * glucoseLevel / glucoseToCarbRatio.glucose;
               
       }
       if(carbsTaken > 0){
               if(foodInsuline > 0){
                            var heaveyActivity = foodInsuline-2;
                            var heaveyActivity2 = foodInsuline - 2;
                    activitiesToDo.run == true ? foodInsuline -= 2 : "";
                    activitiesToDo.walk == true ? foodInsuline-- : "";
                    activitiesToDo.bus == true ? foodInsuline-- : "";
                    activitiesToDo.bike == true ? foodInsuline -= 2 : "";
                    activitiesToDo.sleep == true ? foodInsuline-- : ""; 
                    }                   
        }
        

       return {"correctionInsuline": correctionInsuline,
                "foodInsuline":foodInsuline,
                "carbsNeededToJustifyActivity": foodInsuline };
        

}
