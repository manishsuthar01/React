import React from "react";
import { useForm } from "react-hook-form";

const UseForm = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Form submitted successfully!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <input
          type="text"
          placeholder="Enter name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <span style={{ color: "red" }}>{errors.name.message}</span>}

        {/* Email */}
        <input
          type="email"
          placeholder="Enter email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: "Enter a valid email",
            },
          })}
        />
        {errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}

        {/* Password */}
        <input
          type="password"
          placeholder="Enter Password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />
        {errors.password && <span style={{ color: "red" }}>{errors.password.message}</span>}

        {/* Confirm Password */}
        <input
          type="password"
          placeholder="Confirm password"
          {...register("confirmPassword", {
            required: "Confirm password is required",
            validate: (value) =>
              value === getValues("password") || "Passwords do not match",
          })}
        />
        {errors.confirmPassword && (
          <span style={{ color: "red" }}>{errors.confirmPassword.message}</span>
        )}

        {/* Age */}
        <input
          type="number"
          placeholder="Enter age"
          {...register("age", {
            required: "Age is required",
            min: { value: 18, message: "Must be at least 18 years old" },
          })}
        />
        {errors.age && <span style={{ color: "red" }}>{errors.age.message}</span>}

        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UseForm;
