import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import "../App.css";
import Vector from "../assets/undraw_shopping_app_flsj.svg";
import { motion } from "framer-motion";
import { useHistory } from "react-router";

function Login() {
  const { user } = useContext(AuthContext);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loginSection, setLoginSection] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();

  const renderLogin = () => {
    setLoginSection(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName === user.userName && password === user.password) {
      history.push("/dashboard");
    } else if (userName !== user.userName) {
      setError("incorrect username ");
    } else if (password !== user.password) {
      setError("incorrect password ");
    } else {
      setError("invaild user");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='login'
    >
      {loginSection ? (
        <div className='login__wrapper'>
          <h1>User Login</h1>
          <form className='login__form' onSubmit={handleSubmit}>
            <label>User name</label>
            <input
              type='text'
              placeholder='Username'
              onChange={(e) => setUserName(e.target.value)}
            />
            <label>Password</label>
            <input
              type='password'
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
            />
            <span>{error}</span>
            <button type='submit'>Submit</button>
          </form>
        </div>
      ) : (
        <div className='login__container'>
          <div className='column__one'>
            <h1>Here to make your life easier.</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
              quas eveniet a? Eligendi quis eum dolorem voluptatem nisi neque,
              deleniti sint veniam ut soluta rerum molestiae eaque sed,
              perspiciatis nam?
            </p>
            <button onClick={renderLogin}>Get Started</button>
          </div>
          <div className='column__two'>
            <motion.div
              animate={{ y: -40 }}
              transition={{ ease: "easeOut" }}
              exit={{ y: 0 }}
              className='column__twoImg'
            >
              <img src={Vector} alt='Vector' />
            </motion.div>
          </div>
        </div>
      )}
    </motion.section>
  );
}

export default Login;
