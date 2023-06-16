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
  Code,
  SimpleGrid
} from '@chakra-ui/react'
import { GridItem } from '../components/grid-item'
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

import google from '../public/images/google-ctf.png'
import sc900 from '../public/images/sc-900.png'

import digitalagri from '../public/images/digital-agri.png'
import urlshort from '../public/images/url-short.png'
import snakegame from '../public/images/snake-game.png'
import ttt from '../public/images/ttt.png'
import wca from '../public/images/wca-preview.png'
import leetracker from '../public/images/leetracker.png'
import taim from '../public/images/taim.png'
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
            href="https://drive.google.com/file/d/17QflD5fBC9O89zNUb_0NTAU71HA1ntcC/view?usp=sharing"
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

    <Container>
      <Heading textAlign={'center'} as="h1" fontSize={28} mb={5} mt={12}>
        Projects
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 1, 1]} gap={20}>
          <GridItem
            title="LeeTracker"
            thumbnail={leetracker}
            tech={'(Tech: ReactNative, GraphQL, JS, Expo)'}
            description="LeeTracker is an easy-to-use application through which you can track your friend's progress on LeetCode and get notified about your friend’s recent and total submissions.
            "
            href="https://play.google.com/store/search?q=leetracker&c=apps"
          />
          <GridItem
            title="Heat Waves and AQI Prediction"
            thumbnail={taim}
            tech={'(Tech: ML, Python and libraries, streamlit, postman, etc.)'}
            description="Our team developed an AQI and heatwaves prediction model during Telangana
            AI Mission hackathon conducted by NASSCOM in collaboration with Government of Telangana and
            Capgemini."
            href="https://harshhrs24-team-cl-ai-mate-app-md7w7w.streamlit.app/"
          />
        </SimpleGrid>
      </Section>
    </Container>

    <Link href="/projects" ml={8}>
      <Button color="#178edd" backgroundColor={'#EDF2F7'}>
        View all
      </Button>
    </Link>

    <Container mt={12} fontSize="18px">
      <Section>
        <Heading
          id="ctfs"
          as="h2"
          variant="section-title"
          mt={15}
          textAlign="center"
          fontSize={'24px'}
          padding="20px"
        >
          Certifications
        </Heading>
        <SimpleGrid columns={[1, 1, 1]} gap={6}>
          <GridItem
            href="https://www.coursera.org/account/accomplishments/professional-cert/XEXFS5QTXECG"
            title="Google Data Analytics Professional (8 courses)"
            thumbnail={google}
          ></GridItem>
          <GridItem
            href="https://www.credly.com/badges/d8fe4ff3-e205-46b8-9e3d-4624d0c1338f/public_url"
            title="Microsoft Certified: Security, Compliance, and Identity Fundamentals"
            thumbnail={sc900}
          ></GridItem>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
