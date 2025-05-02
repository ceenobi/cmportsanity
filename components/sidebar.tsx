import React from "react";
import {
  Box,
  Button,
  Text,
  VStack,
  useDisclosure,
  Link,
} from "@chakra-ui/react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import { navlink } from "@/utils/navlink";

type link = {
  id: number;
  href: string;
  tag: string;
  name: string;
};

export default function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box hideFrom="md">
      <Box onClick={onOpen}>
        <HiMenuAlt3 color="#078f30" size="2.3rem" />
      </Box>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="brand.900">
          <Box ml="auto" mt={6} px={4}>
            <MdClose color="#F1EEE9" size="2.3rem" onClick={onClose} />
          </Box>
          <DrawerBody>
            <VStack
              spacing="40px"
              h="full"
              alignItems="center"
              justifyContent="center"
            >
              {navlink.map((link: link) => (
                <Link
                  href={`#${link.href}`}
                  key={link.id}
                  color="brand.700"
                  _hover={{ color: "brand.800", transition: "0.3s ease-in" }}
                  onClick={onClose}
                >
                  <>
                    <Text color="brand.600" textAlign="center">
                      {link.tag}.
                    </Text>{" "}
                    <Text fontSize="lg">{link.name}</Text>
                  </>
                </Link>
              ))}
              <Button
                borderColor="brand.600"
                color="brand.600"
                variant="outline"
                borderRadius="0"
                as={Link}
                href="https://drive.google.com/file/d/1fHkXGm6y4ol_XMGRtYZqkZgWIWP3bKUE/view?usp=drive_link"
                isExternal
              >
                Resume
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
