"use client";

import { Text, Container } from "@chakra-ui/react";

export default function Ejemplo1() {
  const nombre = ":v";
  return (
    <div className="contenedor">
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
