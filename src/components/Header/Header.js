import React from "react";


const styles = {
  jumbotron: {
    background: "#20315A",
    color: "white",
    textAlign: "center"
  },
  h1: {
    fontWeight: "bolder"
  }
};

const Header = (props) => (
  <div className="jumbotron" style={styles.jumbotron}>
    {props.children}
  </div>
);

export default Header;
