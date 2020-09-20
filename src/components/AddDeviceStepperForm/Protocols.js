import React from "react";

const Protocls = ({ setForm, formData, navigation }) => {
  const { protocol } = formData;

  const { next } = navigation;

  return (
    <div className="form p-24">
        <label>
            <input type="radio" name="http" value="http" checked />
            <img src="http://placehold.it/40x60/0bf/fff&text=A" />
        </label>

        <label>
            <input type="radio" name="mqtt" value="mqtt" />
            <img src="http://placehold.it/40x60/b0f/fff&text=B" />
        </label>

      {/* <ItemForm
        label="First Name"
        name="firstName"
        value={firstName}
        onChange={setForm}
      />
      <ItemForm
        label="Last Name"
        name="lastName"
        value={lastName}
        onChange={setForm}
      />
      <ItemForm
        label="Nick Name"
        name="nickName"
        value={nickName}
        onChange={setForm}
      /> */}
      <div>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

export default Protocls;
