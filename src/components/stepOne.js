import { useState } from "react";

function StepOne({ data, nextStep }) {
  let mainHeading = "Welcome! First things first..";
  let subHeading = "Welcome! First things first..";

  const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    //ToDO: Form Validation
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const next = () => {
    if (formData.fullName === "" || formData.displayName === "") {
      alert("please fill all the fields in the form");
      return;
    }
    nextStep(formData);
  };
  return (
    <div>
      <div>
        <h3 className="font-weight-bold text-center">{mainHeading}</h3>
        <p className="text-center">{subHeading}</p>
      </div>
      <form>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            name="fullName"
            id="fullName"
            placeholder="Eden"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="displayName" className="form-label">
            Display Name
          </label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            name="displayName"
            id="displayName"
            placeholder="Eden"
          />
        </div>
      </form>
      <div className="d-grid gap-2 next-btn">
        <button
          className="btn btn-primary"
          type="button"
          onClick={next}
        >
          Create Workspace
        </button>
      </div>
    </div>
  );
}

export default StepOne;
