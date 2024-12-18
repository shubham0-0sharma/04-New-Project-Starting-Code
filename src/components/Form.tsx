import {
  ComponentPropsWithoutRef,
  FormEvent,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";

type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void;
};

export type FormHandler = {
  clear: () => void;
};

const Form = forwardRef<FormHandler, FormProps>(
  ({ onSave, children, ...rest }, ref) => {
    const form = useRef<HTMLFormElement>(null);
    useImperativeHandle(ref, () => {
      return {
        clear() {
          console.log("Clearing");
          form.current?.reset();
        },
      };
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData);
      onSave(data);
    };

    return (
      <form onSubmit={handleSubmit} {...rest} ref={form}>
        {children}
      </form>
    );
  }
);

export default Form;
