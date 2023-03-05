import React from "react";
import { useFormik } from "formik";

const Login = ({ loginSuccess }) => {
  const getItemsFromLS = () => {
    return sessionStorage.getItem("User")
      ? JSON.parse(sessionStorage.getItem("User"))
      : [];
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      const { email, password } = values;
      const lsEmail = getItemsFromLS()[0].email;
      const lsPassword = getItemsFromLS()[0].password;
      if (email === lsEmail && password === lsPassword) {
        alert("login success");
        loginSuccess("success");
      } else {
        alert("login fail");
      }
      resetForm({ values: "" });
    },
  });

  return (
    <div className="registerMaindiv">
      <div className="registerPage">
        <form onSubmit={formik.handleSubmit}>
          <h2>User Login</h2>
          <input
            type="email"
            name="email"
            placeholder="Enter Email Here"
            onChange={formik.handleChange}
            value={formik.values.email}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Set Password"
            onChange={formik.handleChange}
            value={formik.values.password}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
