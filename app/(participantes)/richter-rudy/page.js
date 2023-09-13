"use client";

import { Text, Container } from "@chakra-ui/react";
export default function Ejemplo1() {
  const nombre = "Rudy Richter";
  return (
    <div className="contenedor">
      <Container>
        <center>
          <Text fontSize="xl" color="blue.500" className="estiloNombre">
            {nombre}
          </Text>
          <text>
            {Hola}
          </text>
        </center>
      </Container>
    </div>
  );
}
