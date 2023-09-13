"use client";
import style from"./style.module.css"
import { Text, Container } from "@chakra-ui/react";

export default function Ejemplo1() {
  const nombre = "Nicolas Yevenes";
  return (
    <div className={style.cambios}>
      <Container>
        <center>
          <Text fontSize="xl" color="green.500" className="estiloNombre">
            {nombre}
          </Text>
        </center>
      </Container>
    </div>
  );
}
