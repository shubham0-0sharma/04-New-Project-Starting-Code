import {
  ComponentPropsWithoutRef,
  type FC,
  type PropsWithChildren,
} from "react";
type InputProps = PropsWithChildren<
  {
    label: string;
    id: string;
  } & ComponentPropsWithoutRef<"input">
>;

const Input: FC<InputProps> = ({ children, label, id, ...props }) => {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} {...props} />
    </p>
  );
};

export default Input;
