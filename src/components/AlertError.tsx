import Alert from "react-bootstrap/Alert";

export function AlertError(text: string) {
  <Alert variant={"danger"}>
    {text}
  </Alert>;
}
