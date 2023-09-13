'use client'
import Image from "next/image"
import { Text, Container } from "@chakra-ui/react";

const imageLoader = ({ src, width, quality }) => {
    return `https://tenor.com/view/cat-broken-cat-cat-drinking-cat-licking-cat-air-gif-20661740/${src}?w=${width}&q=${quality || 75}`
  }

export default function Nikolas(){
    const nombre = "Nikolas Garcés"
    return(
        <center>
            <div className="contenedor">
                <Text fontSize="xl" color="blue.500" className="estiloNombre">
                    {nombre}
                </Text>
                <Image src="me.gif" width={500} height={500}
                    loader={imageLoader}/>
            </div>
        </center>
    )
}