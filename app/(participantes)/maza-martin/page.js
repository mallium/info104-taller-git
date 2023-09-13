"use client";
import style from "./style.module.css"
import { Text, Container } from "@chakra-ui/react";

export default function Ejemplo1() {
  const nombre = "Pochinger";
  return (
    <main className={style.main}>
    <div className = {"contenedor " + style.fondo}>
      <Container>
        <center>
          <Text fontSize="xl" className={"estiloNombre "  + style.nombre}>
            {nombre}
          </Text>
          <Text className={style.pochita}>
          ⠀⠀⠀⠀⠀⠀⠀⠀⢀⠤⠀⢀⡐⡂⢀⡀⠀⠀⠀⠀⠀⠀⠀
⠀⢀⣀⡀⡠⠄⠀⠰⠉⠭⠅⠂⡐⢓⠒⠈⠥⠴⢂⣀⠀⡀⠀
⠀⢡⣶⣭⣾⣧⣭⣶⠸⠀⠠⡈⠈⢌⠔⠋⠡⠄⠔⠎⡄⡀⠀
⢺⣾⠋⠁⠀⠀⠈⠙⠻⢿⣇⣁⡐⡄⣨⠶⠤⢭⣐⣊⠦⢀⠀
⢢⣿⡀⠀⠀⠀⠀⠀⠀⠀⠈⢛⠷⠚⠑⠛⠩⠿⣗⠮⣝⠲⣍
⠫⡙⢷⣄⠀⠀⠀⠀⠀⣠⠆⠁⠀⠀⢀⣠⠀⠀⠈⢻⣿⣶⡏
⠀⠣⠝⡛⣻⣶⣤⣀⡔⠁⠀⢀⠠⣶⣿⢨⡇⠀⠀⠘⠿⠋⠙
⠀⠀⠀⠈⠲⢄⡛⣟⡁⠀⡀⠀⠑⠼⠿⠛⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢸⠁⠀⢡⢹⢽⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠃⣀⡀⢜⣴⠃⢀⣤⠤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⡐⡴⠋⢻⢧⣸⡈⠀⠈⢂⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠐⡸⠁⠀⣼⠠⢹⡖⢄⠀⠀⠱⡀⠀⠀⠀⠀⠀⠀
          </Text>
        </center>
      </Container>
    </div>
    </main>
  );
}
