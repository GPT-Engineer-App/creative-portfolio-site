import { Container, VStack, HStack, Box, Text, Heading, Image, IconButton, Link, SimpleGrid, Button, useToast } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.lg" p={4}>
      <VStack spacing={8} align="stretch">
        {/* Header Section */}
        <Box textAlign="center" py={10}>
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdHVkZW50fGVufDB8fHx8MTY4Njk5NzUxMQ&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Picture" mx="auto" />
          <Heading as="h1" size="2xl" mt={4}>
            Rafael Jhon M. Valenzuela
          </Heading>
          <Text fontSize="xl" color="gray.500">
            Full Stack Developer
          </Text>
          <HStack spacing={4} justify="center" mt={4}>
            <Link href="https://github.com/johndoe" isExternal>
              <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" />
            </Link>
            <Link href="https://linkedin.com/in/johndoe" isExternal>
              <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
            </Link>
            <Link href="https://twitter.com/johndoe" isExternal>
              <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
            </Link>
          </HStack>
        </Box>

        {/* About Section */}
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            About Me
          </Heading>
          <Text fontSize="md">I am a passionate Full Stack Developer with experience in building web applications using modern technologies. I love to create efficient and scalable solutions that provide great user experiences.</Text>
        </Box>

        {/* Portfolio Section */}
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Portfolio
          </Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing={8}>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://images.unsplash.com/photo-1543285198-3af15c4592ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwMXxlbnwwfHx8fDE3MTU2OTc1MTF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Project 1" />
              <Box p={4}>
                <Heading as="h3" size="md">
                  Project 1
                </Heading>
                <Text mt={2}>Description of project 1.</Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://images.unsplash.com/photo-1615220367990-1940567341f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwMnxlbnwwfHx8fDE3MTU2OTc1MTJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Project 2" />
              <Box p={4}>
                <Heading as="h3" size="md">
                  Project 2
                </Heading>
                <Text mt={2}>Description of project 2.</Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://images.unsplash.com/photo-1629739884942-8678d138dd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwM3xlbnwwfHx8fDE3MTU2OTc1MTJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Project 3" />
              <Box p={4}>
                <Heading as="h3" size="md">
                  Project 3
                </Heading>
                <Text mt={2}>Description of project 3.</Text>
              </Box>
            </Box>
          </SimpleGrid>
        </Box>

        {/* Contact Section */}
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Contact
          </Heading>
          <Text fontSize="md">
            Feel free to reach out to me via email at{" "}
            <Link href="mailto:johndoe@example.com" color="teal.500">
              johndoe@example.com
            </Link>
            .
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
