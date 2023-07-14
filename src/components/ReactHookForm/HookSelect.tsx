import {
  useForm,
  Controller,
  SubmitHandler,
  useFormContext,
} from "react-hook-form";
import Form from "react-bootstrap/Form";
import { AuthLogin } from "@/@types/auth";

interface listProps {
  label: string;
  value: string;
}

interface inputProps {
  name: string;
  label: string;
  list: listProps[];
  style?: string;
}

export default function HookSelect({ name, label, list, style }: inputProps) {
  const { register, control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
      }) => (
        <Form.Select
          onChange={(value) => onChange(value)}
          name={name}
          className={style}
        >
          <option>Escolha o seu cargo</option>
          {list.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </Form.Select>
      )}
    />
  );
}
