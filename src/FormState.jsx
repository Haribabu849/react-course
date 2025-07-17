import React, { useState } from "react";

const FormState = () => {
  //   const [userName, setuserName] = useState("");
  //   const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
  });
  //   const [submittedData, setSubmittedData] = useState({
  //     name: "",
  //     password: "",
  //   });

  //   const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  console.log(formData);

  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     if (!userName && !password) {
  //       setError("username and password is not provided");
  //       return;
  //     }
  //     if (userName === "") {
  //       setError("user name is not provided");
  //       return;
  //     }
  //     if (password === "") {
  //       setError("password is not provided");
  //       return;
  //     }
  //     if (password.length < 6) {
  //       setError("password must be atleast 6 characters");
  //       return;
  //     }
  //     setError("");
  //     setSubmittedData({ name: userName, password: password });
  //   };

  //   console.log(userName, password);
  return (
    <div>
      <form>
        <input type="text" name="name" onChange={handleChange} />
        <input type="password" name="password" onChange={handleChange} />
        <input type="email" name="email" onChange={handleChange} />
        <button type="submit">submit</button>
      </form>
      {/* <p style={{ color: "red" }}>{error}</p>
      <div>
        {submittedData.name} {submittedData.password}
      </div> */}

      <p>
        name: {formData.name} password: {formData.password} email:{" "}
        {formData.email}
      </p>
    </div>
  );
};

export default FormState;
