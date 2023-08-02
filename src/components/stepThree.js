import { useState } from "react";

function StepThree({ data, nextStep }) {
  let mainHeading = `How are you planning to use ${data.fullName}?`;
  let subHeading = "We will streamline setup experience accordingly";

  const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    //ToDO: Form Validation
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const next = () => {
    nextStep(formData);
  };
  return (
    <div>
      <div>
        <h3 className="font-weight-bold text-center">{mainHeading}</h3>
        <p className="text-center">{subHeading}</p>
      </div>
      <form>
        <div className="row">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <div
              className={`card ${formData.purpose === "self" ? "active" : ""} `}
              onClick={() =>
                handleChange({ target: { name: "purpose", value: "self" } })
              }
            >
              <div className="card-body">
                <img
                  src="images/individual.png"
                  className="organization-logo purpose-icon"
                  alt="..."
                />
                <h6 className="card-title">For Myself</h6>
                <p className="card-text">
                  Write beter.Think more clearly.Stay organized.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div
              className={`card ${formData.purpose === "team" ? "active" : ""} `}
              onClick={() =>
                handleChange({ target: { name: "purpose", value: "team" } })
              }
            >
              <div className="card-body">
                <img
                  src="images/team.png"
                  className="organization-logo purpose-icon"
                  alt="..."
                />
                <h6 className="card-title">With My team</h6>
                <p className="card-text">
                  Wikis, docs, tasks & projects, all in one place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="d-grid gap-2 next-btn">
        <button
          className="btn btn-primary"
          onClick={next}
        >
          Create Workspace
        </button>
      </div>
    </div>
  );
}

export default StepThree;
