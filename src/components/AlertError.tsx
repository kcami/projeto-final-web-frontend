import Alert from "react-bootstrap/Alert";

export function AlertError(text: string) {
  return <Alert variant={"danger"}>{text}</Alert>;
}
