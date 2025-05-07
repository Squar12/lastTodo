import { Component2 } from "./component2";

export const Component1 = (props) => {
  console.log(props);
  return <Component2 props2={props.props1} />;
};
