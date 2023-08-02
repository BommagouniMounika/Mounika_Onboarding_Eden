import { useState } from "react";
import '../assets/css/onBoardingContainer.css'; 
import ProgressBanner from "../common/components/progressBar";
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import StepThree from "./stepThree";
import StepFour from "./stepFour";

function OnBoardingContainer() {
    let initialState= {
        fullName: '',
        displayName: '',
        workspaceName: '',
        workspaceUrl: '',
        purpose: 'self',
        step: 1
    }
    const [formData, setFormData] = useState(initialState);

    const nextStep = (data)=>{
        if(formData.step === 4) {
            alert(formData.fullName + ', You have succesfully onboarded to dribble');
            return;
        }
        setFormData({...data, step: formData.step+1});
    }

  return (
    <div className="emp-on-boarding-container">
        
        <div className="form-container">
        <div>
            <img src="images/logo.PNG" className="organization-logo logo" alt="..."/>
        </div>
            <ProgressBanner step={formData.step}/>
            {
                formData.step === 1 && (
                    <StepOne data={formData} nextStep={nextStep}/>
                )
            }
            {
                formData.step === 2 && (
                    <StepTwo data={formData} nextStep={nextStep}/>
                )
            }
            {
                formData.step === 3 && (
                    <StepThree data={formData} nextStep={nextStep}/>
                )
            }
            {
                formData.step === 4 && (
                    <StepFour data={formData} nextStep={nextStep}/>
                )
            }
        </div>
    </div>
  );
}

export default OnBoardingContainer;
