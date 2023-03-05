import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const Register = () => {
  const setItemLocalStorage = (key, value) => {
    sessionStorage.setItem(key, value);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rtpassword: "",
    },
    validationSchema: yup.object({
      name: yup.string().min(2, "Name must have two charecters"),
      email: yup.string().min(8, "Gmail must have 8 charecters"),
      password: yup.string().min(8, "Password must have 8 digits "),
      rtpassword: yup.string().min(8, "Retype Password Don't match !"),
    }),
    onSubmit: (values, { resetForm }) => {
      const { name, email, password, rtpassword } = values;
      const userId = new Date().getMilliseconds().toString();
      if (password === rtpassword) {
        setItemLocalStorage(
          "User",
          JSON.stringify([{ userId, name, email, password, rtpassword }])
        );
        resetForm({ values: "" });
        alert("User Ragistration Success.....");
      } else {
        alert("Something went wrong!!! fillup again");
        resetForm({ values: "" });
      }
    },
  });

  const nameError = formik.touched.name && formik.errors.name && (
    <span>{formik.errors.name}</span>
  );
  const emailError = formik.touched.email && formik.errors.email && (
    <span>{formik.errors.email}</span>
  );
  const passwordError = formik.touched.password && formik.errors.password && (
    <span>{formik.errors.password}</span>
  );

  const rtpasswordError = formik.touched.rtpassword &&
    formik.errors.rtpassword && <span>{formik.errors.rtpassword}</span>;

  return (
    <div className="registerMaindiv">
      <div className="registerPage">
        <form onSubmit={formik.handleSubmit}>
          <h2>User Register</h2>
          <input
            type="text"
            name="name"
            placeholder="Enter Name Here"
            onChange={formik.handleChange}
            value={formik.values.name}
            required
          />
          {nameError}
          <input
            type="email"
            name="email"
            placeholder="Enter Email Here"
            onChange={formik.handleChange}
            value={formik.values.email}
            required
          />
          {emailError}
          <input
            type="password"
            name="password"
            placeholder="Enter Set Password"
            onChange={formik.handleChange}
            value={formik.values.password}
            required
          />
          {passwordError}
          <input
            type="password"
            name="rtpassword"
            placeholder="Enter Re-type Password"
            onChange={formik.handleChange}
            value={formik.values.rtpassword}
            required
          />
          {rtpasswordError}
          <button type="submit">Register Now</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
