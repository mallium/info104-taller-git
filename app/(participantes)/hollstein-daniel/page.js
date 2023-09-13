"use client";
import style from "./style.module.css";
import { Text, Container } from "@chakra-ui/react";

export default function Ejemplo1() {
  const nombre = "Daniel Hollstein";
  return (
    <div className={"contenedor " + style.nombre2}>
      <Container>
        <center>
          <Text fontSize="xl" color="red.500" className="estiloNombre">
            {nombre}
          </Text>
        </center>
      </Container>
    </div>
  );
}
