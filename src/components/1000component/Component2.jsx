import { Component3 } from "./Component3";

export const Component2 = (props) => {
  console.log(props);
  return <Component3 props3={props.props2} />;
};
