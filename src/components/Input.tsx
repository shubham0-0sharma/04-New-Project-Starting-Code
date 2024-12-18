import {
  ComponentPropsWithoutRef,
  forwardRef,
  type PropsWithChildren,
} from "react";
type InputProps = PropsWithChildren<
  {
    label: string;
    id: string;
  } & ComponentPropsWithoutRef<"input">
>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ children, label, id, ...props }, ref) => {
    return (
      <p>
        <label htmlFor={id}>{label}</label>
        <input type="text" id={id} {...props} ref={ref} name={id} />
      </p>
    );
  }
);

export default Input;
