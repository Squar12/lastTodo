import { Comp2 } from "./Comp2";

export const Comp1 = ({ props1, props2 }) => {
  console.log(props1, props2);

  return (
    <div>
      {props1} {props2}
    </div>
  );
};
