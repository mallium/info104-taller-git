"use client";
import style from "./style.module.css"
import { Text, Container } from "@chakra-ui/react";

export default function Ejemplo1() {
  const nombre = "Pato cuak cuak";
  return (
    <div className={"contenedor" + style.body}>
      <Container>
        <center>
          <Text className={style.extra}>
            {nombre}
          </Text>
        </center>
      </Container>
    </div>
  );
}

