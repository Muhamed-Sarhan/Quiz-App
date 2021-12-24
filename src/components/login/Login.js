import React, { useState } from "react";
import "../../css/login.css";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleOnChange } from "../../redux/actions/action";

const Login = () => {
  const [name, setName] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const nameSubmit = () => {
    if (name.trim().length > 0) {
      dispatch(handleOnChange(name));
      swal(`Hi ${name}`, "let us start the quiz", "success");
      setName("");
      history.push("/q");
    } else {
      swal("Opps", "please enter your name", "error");
    }
  };
  return (
    <div className="login">
      <div className="container">
        <h2 className="container-title">ادخل اسم اللاعب</h2>
        <input
          dir="rtl"
          className="container-input"
          onChange={nameHandler}
          value={name}
          placeholder="الاسم ..."
        />
        <button className="container-btn" onClick={nameSubmit}>
          التالى
        </button>
      </div>
    </div>
  );
};

export default Login;
