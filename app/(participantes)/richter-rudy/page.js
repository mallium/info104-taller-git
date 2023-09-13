"use client";

import { Text, Container } from "@chakra-ui/react";
import style from "./style.module.css";

export default function Ejemplo1() {
  const nombre = "Rudy Richter";
  return (
    <div className={"contenedor " + style.nombre2}>
      <Container>
        <center>
          <Text fontSize="xl" color="blue.500" className="estiloNombre">
            {nombre}
          </Text>
        </center>
      </Container>
    </div>
  );
}
