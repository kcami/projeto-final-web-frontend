import {
  useForm,
  Controller,
  SubmitHandler,
  useFormContext,
} from "react-hook-form";
import Form from "react-bootstrap/Form";
import { AuthLogin } from "@/@types/auth";
import { FormControl, InputGroup } from "react-bootstrap";

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
        <InputGroup hasValidation className="my-1">
          <Form.Select
            onChange={(value) => {
              onChange(value.target.value);
              console.log(value.target.value);
            }}
            name={name}
            className={style}
            required
          >
            <option>Escolha o seu cargo</option>
            {list.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </Form.Select>
          {!!error && (
            <FormControl.Feedback type='invalid'>
              {error.message}
            </FormControl.Feedback>
          )}
        </InputGroup>
      )}
    />
  );
}
