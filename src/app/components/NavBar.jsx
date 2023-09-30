import React from "react";
import {
  Box,
  Center,
  Heading,
  HStack,
  Image,
  Input,
  Container,
} from "@chakra-ui/react";

const NavBar = () => {
  return (
    <div>
      <Box bg="#fff159" w="100%" p={2} color="black">
        <Container maxW="90vw">
          <HStack spacing="24px" justify="space-between">
            <Box w="10%" h="40px">
              <a href="https://www.mercadolibre.com.ar/">
                <Image
                  src="./src/assets/logo.png"
                  alt="Logo Mercado Libre"
                  w="132px"
                  h="40px"
                />
              </a>
            </Box>
            <Box w="40%" h="40px">
              <Input
                placeholder="Busca productos, marcas y más..."
                bg="white"
              />
            </Box>
            <Box w="24%" h="40px">
              <a href="https://www.mercadolibre.com.ar/suscripciones/nivel-6#origin=banner-menu&me.content_id=bannermenu_n6_generico_v2&me.component_id=banner_menu_web_ml&me.logic=campaigns&me.position=0&me.bu_line=36&me.flow=-1&me.bu=9&me.audience=all">
                <Image
                  src="./src/assets/servicesDisneyStarPlus.webp"
                  title="Por $999 ¡Suscribite al nivel 6!, Disney+ y Star+ Incluídos"
                  alt="Por $999 ¡Suscribite al nivel 6!, Disney+ y Star+ Incluídos"
                />
              </a>
            </Box>
          </HStack>
        </Container>
      </Box>
      <Center bg="#1f4e96" h="82px" color="white">
        <Heading fontSize="2xl">Peluches</Heading>
      </Center>
    </div>
  );
};

export default NavBar;
