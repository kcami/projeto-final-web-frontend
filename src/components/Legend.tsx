import styles from "../styles/page.module.css";
import { Container, ListGroup } from "react-bootstrap";
import styleLegenda from "../styles/legend.module.css";
export default function Legend(props: {
  pageType: number;
  componentText: string;
}) {
  const legenda = [
    {
      color: styles.green,
      texto: "UTIs disponiveis",
    },
    {
      color: styles.yellow,
      texto: "UTIs em limpeza",
    },
    {
      color: styles.red,
      texto: "UTIs ocupadas",
    },
  ];
  return (
    <>
      {props.pageType != 0 && (
        <Container className={`${styleLegenda.legenda} w-100 bg-blueSecondary`}>
          {props.pageType == 1 && (
            <ListGroup
              className={`${styleLegenda.listGroup} w-100`}
              variant='blueSecondary'
            >
              {legenda.map((element, i) => {
                return (
                  <ListGroup.Item
                    key={i}
                    className={`${styleLegenda.itemLegenda}`}
                  >
                    <div
                      className={`${element.color}`}
                    ></div>
                    {element.texto}
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          )}

          {props.pageType == 2 && <p>{props.componentText}</p>}
        </Container>
      )}
    </>
  );
}
