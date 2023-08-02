import { useState } from "react";

function StepTwo({ data, nextStep }) {
  let mainHeading = "Let's setup a home for all your work";
  let subHeading = "You can always create another workspace";

  const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    //ToDO: Form Validation
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const next = () => {
    if (formData.workspaceName === '' || formData.workspaceUrl === '') {
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
          <label htmlFor="workspaceName" className="form-label">
            Workspace Name
          </label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            name="workspaceName"
            id="workspaceName"
            placeholder="Eden"
          />
        </div>
        <label htmlFor="workspaceUrl">
          Worspace URL<span className="sub-label">(Optional)</span>
        </label>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="example-url">
              www.eden.com
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            id="workspaceUrl"
            onChange={handleChange}
            name="workspaceUrl"
            aria-describedby="example-url"
            placeholder="Example"
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

export default StepTwo;
