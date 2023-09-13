"use client";
import style from "./style.module.css"
import { Text, Container } from "@chakra-ui/react";

export default function Ejemplo1() {
  const nombre = "Patricio Cuevas";
  return (
    <div className="contenedor">
      <Container className = {style.body}>
        <center>
          <Text className={style.extra}>
            {nombre}
          </Text>
        </center>
      </Container>
    </div>
  );
}

