import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  chakra,
  Center,
  Code
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMail
} from 'react-icons/io5'
import Image from 'next/image'
import Paragraph from '../components/paragraph'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container mt={'4.5rem'} fontSize="18px">
      <center>
        <Box
          borderWidth={2}
          w="220px"
          h="220px"
          display="inline-block"
          borderRadius="500px"
          overflow="hidden"
        >
          <ProfileImage
            src="/images/main-002.jpg"
            alt="Profile image"
            width="300"
            height="250"
          />
        </Box>
      </center>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1} textAlign="center">
          <Heading color={'#ffff'} as="h2" variant="page-title">
            Hi, I am Gaurav
          </Heading>
          <p color={'#ffff'}>CSE Undergrad | Web Developer | Explorer</p>

          <Code
            marginTop={5}
            variant={'solid'}
            fontWeight={500}
            fontSize={'18px'}
            padding={1}
            colorScheme="purple"
            children=" <building me/>"
          />
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        ></Box>
      </Box>

      <Section delay={0.1}>
        <List>
          {/* <ListItem textAlign="center">
            <Link href="mailto: garwagaurav@gmail.com" target="_blank">
              <Button
                mb={'10px'}
                variant="ghost"
                color="#178edd"
                leftIcon={<IoMail />}
              >
                garwagaurav@gmail.com
              </Button>
            </Link>
          </ListItem> */}

          {/* <ListItem textAlign='center'>
            <Link href="https://leetcode.com/gauravgarwa/" target="_blank">
              <Button
                variant="ghost"
                color="#178edd"
              >
                Leetcode - @gauravgarwa
              </Button>
            </Link>
          </ListItem> */}

          <ListItem textAlign="center">
            <Code
              marginTop={5}
              variant={'subtle'}
              fontSize={'18px'}
              padding={1}
              colorScheme="transparent"
              children="const connect = () =>"
            />
            <br></br>
            <Code
              colorScheme="transparent"
              fontSize={'18px'}
              padding={1}
              children="("
            />
            <Link href="https://linkedin.com/in/gaurav1832" target="_blank">
              <Button variant="ghost" color="white">
                <IoLogoLinkedin />
              </Button>
            </Link>
            <Link href="https://github.com/gaurav1832" target="_blank">
              <Button variant="ghost" color="white">
                <IoLogoGithub />
              </Button>
            </Link>
            <Link href="https://twitter.com/ggauravvvvv" target="_blank">
              <Button variant="ghost" color="white">
                <IoLogoTwitter />
              </Button>
            </Link>
            <Link href="https://instagram.com/gauaurarav" target="_blank">
              <Button variant="ghost" color="white">
                <IoLogoInstagram />
              </Button>
            </Link>
            <Code
              colorScheme="transparent"
              fontSize={'18px'}
              padding={1}
              children=")"
            />
          </ListItem>
        </List>

        <Center>
          <Link
            href="https://drive.google.com/file/d/11Hbl--kIyOIFHO9AlVUIl0cFANGvrY2z/view?usp=sharing"
            target="_blank"
            mt={10}
          >
            <Code
              variant={'outline'}
              colorScheme="blue"
              fontSize={'18px'}
              padding={(3, 2)}
              children="Resume"
            />
          </Link>

          {/* <Link
            href="https://forms.office.com/r/6PkjXvJ0Ns"
            target="_blank"
            ml={8}
          >
            <Button color="#178edd" backgroundColor={'#EDF2F7'}>
              Contract
            </Button>
          </Link> */}
        </Center>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
