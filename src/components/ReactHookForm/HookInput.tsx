import {
  useForm,
  Controller,
  SubmitHandler,
  useFormContext,
} from "react-hook-form";
import Form from "react-bootstrap/Form";
import { AuthLogin } from "@/@types/auth";

interface inputProps {
  name: string;
  label: string;
  type: string;
  style?: string;
}

export default function HookInput({ name, label, type, style }: inputProps) {
  const { register, control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
      }) => (
        <Form.Group controlId={name} className="my-1">
          <Form.Label>{label}</Form.Label>
          <Form.Control name={name} type={type} className={style} onChange={(value) => onChange(value)}/>
        </Form.Group>
      )}
    />
  );
}
