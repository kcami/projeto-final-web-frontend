import Coluna from "./coluna";
import styles from "../styles/page.module.css";
import { utiBedsContext } from "@/contexts/UTIBedsContext";
import { useEffect } from "react";
import useBedsRequests from "@/services/utiBedsRequests";
import { Col, Dropdown, DropdownButton, Row } from "react-bootstrap";

export default function Leitos() {
  const { actions } = useBedsRequests();
  async function getBeds() {
    await actions.get();
  }
  useEffect(() => {
    getBeds();
  }, []);
  const { utisBeds, setSelectedUtisBeds } = utiBedsContext();
  console.log(utisBeds);
  const colunaLeitos1 = [
    {
      status: "Livre",
      styles: styles.green,
    },
    {
      status: "Limpeza",
      styles: styles.yellow,
    },
    {
      status: "Ocupado",
      styles: styles.red,
    },
  ];
  return (
    <div className={styles.content}>
      {Array.from({ length: 6 }).map((_, rowIndex) => (
        <Col
          key={rowIndex}
          className='d-flex flex-column justify-content-center align-items-center'
        >
          {utisBeds
            .slice(rowIndex * 5, rowIndex * 5 + 5)
            .map((element, index) => {
              {
                element.status == "Livre" ? setSelectedUtisBeds(element) : null;
              }
              return (
                <Row
                  key={index}
                  className={`${
                    element.status == "Livre"
                      ? styles.green
                      : element.status == "Limpeza"
                      ? styles.yellow
                      : styles.red
                  } `}
                >
                  <DropdownButton
                    className={`w-100 border-0 ${styles.dropdownStyle}`}
                    title=''
                  >
                    <Dropdown.Item
                      as='button'
                      onClick={() => {
                        actions.changeUTIBedStatus({
                          uti_bed_id: element.id,
                          status: "Limpeza",
                        });
                      }}
                    >
                      Quarto em limpeza
                    </Dropdown.Item>
                    <Dropdown.Item
                      as='button'
                      onClick={() => {
                        actions.changeUTIBedStatus({
                          uti_bed_id: element.id,
                          status: "Livre",
                        });
                      }}
                    >
                      Quarto livre
                    </Dropdown.Item>
                  </DropdownButton>
                </Row>
              );
            })}
        </Col>
      ))}
    </div>
  );
}
