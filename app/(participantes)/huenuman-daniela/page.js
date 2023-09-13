"use client";
import style from "./style.module.css";
import { Text, Container } from "@chakra-ui/react";

export default function Ejemplo1() {
  const nombre = "Daniela Huenuman";
  return (
    <div className="contenedor">
      <Container>
        <center>
          <Text fontSize="xl" color="#ff57b4;" className="estiloNombre">
            {nombre}
          </Text>
        </center>
      </Container>
    </div>
  );
}
