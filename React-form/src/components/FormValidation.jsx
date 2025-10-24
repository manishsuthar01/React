import React, { useState } from "react";

const FormValidation = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  const [age, setAge] = useState("");
  const [errors, setErrors] = useState({}); // ✅ use object for errors

  const submited = (e) => {
    e.preventDefault();

    let newErrors = {}; // temp errors object

    if (!name.trim()) {
      newErrors.name = "Enter name";
    }

    if (!mail) {
      newErrors.mail = "Enter email";
    } else if (!mail.includes("@")) {
      newErrors.mail = "Email must include @";
    }

    if (!pass) {
      newErrors.pass = "Enter the password";
    }

    if (!cpass) {
      newErrors.cpass = "Confirm your password";
    } else if (cpass !== pass) {
      newErrors.cpass = "Passwords do not match";
    }

    if (!age) {
      newErrors.age = "Enter your age";
    } else if (isNaN(age) || age < 18) {
      newErrors.age = "Age must be 18 or above";
    }

    setErrors(newErrors);

    // ✅ submit if no errors
    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
      // here you can send data to API etc.
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <form onSubmit={submited}>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Enter name"
        />
        <p style={{ color: "red" }}>{errors.name}</p>

        <input
          onChange={(e) => setMail(e.target.value)}
          value={mail}
          type="email"
          placeholder="Enter email"
        />
        <p style={{ color: "red" }}>{errors.mail}</p>

        <input
          onChange={(e) => setPass(e.target.value)}
          value={pass}
          type="password"
          placeholder="Enter Password"
        />
        <p style={{ color: "red" }}>{errors.pass}</p>

        <input
          onChange={(e) => setCpass(e.target.value)}
          value={cpass}
          type="password"
          placeholder="Confirm password"
        />
        <p style={{ color: "red" }}>{errors.cpass}</p>

        <input
          onChange={(e) => setAge(e.target.value)}
          value={age}
          type="number"
          placeholder="Enter age"
        />
        <p style={{ color: "red" }}>{errors.age}</p>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormValidation;
