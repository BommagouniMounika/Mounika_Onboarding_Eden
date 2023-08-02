import { useState } from "react";

function StepFour({ data, nextStep }) {
  let mainHeading = `Congratulations, ${data.fullName}!`;
  let subHeading = "You have completed onboarding, you can start using Eden!";

  const next = () => {
    nextStep(data);
  };
  return (
    <div>
      <div>
        <div>
          <img
            src="images/sucess.png"
            className="organization-logo compete-icon"
            alt="..."
          />
        </div>
        <div>
        <h3 className="font-weight-bold text-center">{mainHeading}</h3>
        <p className="text-center">{subHeading}</p>
      </div>
      </div>
      <div className="d-grid gap-2 next-btn">
        <button
          className="btn btn-primary"
          type="button"
          onClick={next}
        >
          Launch Eden
        </button>
      </div>
    </div>
  );
}

export default StepFour;
