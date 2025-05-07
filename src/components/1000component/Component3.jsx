import { Component4 } from "./Component4";

export const Component3 = (props) => {
  console.log(props);
  return <Component4 props4={props.props3} />;
};
