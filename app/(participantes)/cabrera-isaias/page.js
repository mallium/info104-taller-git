"use client";

import { Text, Container } from "@chakra-ui/react";

export default function Ejemplo1() {
  const nombre = "Isaías Cabrera";
  return (
    <div className="contenedor">
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
