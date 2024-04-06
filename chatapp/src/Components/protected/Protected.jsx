import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    let login = Cookies.get("user");
    if (!login) {
      navigate("/login");
    }
  });
  return <Component />;
};

export default Protected;
