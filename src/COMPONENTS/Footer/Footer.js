import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footerContainer">
          <form>
            <label htmlFor="footerMail">Subscribe to Newsletter : </label>
            <input
              type="email"
              placeholder="Enter Your Email Here"
              name="footerMail"
              id="footerMail"
              required
            />
            <button>Subscribe</button>
          </form>
          <p>© Copyright 2023 R5 Express. All rights rserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
