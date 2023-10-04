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
  SimpleGrid,
  Highlight,
  shouldForwardProp,
  Badge
} from '@chakra-ui/react'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMail
} from 'react-icons/io5'
import { GridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Projects from './projects'
import { BioSection, BioYear } from '../components/bio'
import google from '../public/images/google-ctf.png'
import Image from 'next/image'
import cpp from '../public/images/skills/cpp.png'
import java from '../public/images/skills/java.png'
import css from '../public/images/skills/css3.png'
import flask from '../public/images/skills/flask.png'
import git from '../public/images/skills/git.png'
import github from '../public/images/skills/github.png'
import html from '../public/images/skills/html.png'
import js from '../public/images/skills/js.png'
import Mongodb from '../public/images/skills/mongo-db.png'
import nodejs from '../public/images/skills/node-js.png'
import postman from '../public/images/skills/postman-api.png'
import python from '../public/images/skills/python.png'
import react from '../public/images/skills/react.png'
import sql from '../public/images/skills/sql.png'
import Paragraph from '../components/paragraph'
import sc900 from '../public/images/sc-900.png'
import digitalagri from '../public/images/digital-agri.png'
import urlshort from '../public/images/url-short.png'
import snakegame from '../public/images/snake-game.png'
import ttt from '../public/images/ttt.png'
import wca from '../public/images/wca-preview.png'
import leetracker from '../public/images/leetracker.png'
import taim from '../public/images/taim.png'
import codemaps from '../public/images/codemaps.png'
import sc900badge from '../public/images/microsoft-certified-security-compliance-and-identity-fundamentals.png'
import googlebadge from '../public/images/google-data-analytics-certificate.2.png'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container mt={'4.5rem'} fontSize="18px">
      <center>
        <Box
          animate={{
            scale: [1, 1, 1, 1, 1],
            rotate: [0, 270, 270, 270, 0]
          }}
          boxShadow="2xl"
          bg={'white'}
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
          <Heading lineHeight="tall" mt={7}>
            Hi I'm{' '}
            <Code variant={'subtle'} fontSize={'34px'}>
              Gaurav
            </Code>
          </Heading>

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
          <ListItem textAlign="center">
            <Code
              marginTop={5}
              variant={'subtle'}
              fontSize={'24px'}
              padding={1}
              colorScheme="transparent"
              children="const connect = () =>"
            />
            <Code
              colorScheme="transparent"
              fontSize={'24px'}
              padding={1}
              children="{"
            />
            <Link href="https://linkedin.com/in/gaurav1832" target="_blank">
              <Button variant="ghost" color="white" fontSize={'24px'}>
                <IoLogoLinkedin />
              </Button>
            </Link>
            <Link href="https://github.com/gaurav1832" target="_blank">
              <Button variant="ghost" color="white" fontSize={'24px'}>
                <IoLogoGithub />
              </Button>
            </Link>
            <Link href="https://twitter.com/ggauravvvvv" target="_blank">
              <Button variant="ghost" color="white" fontSize={'24px'}>
                <IoLogoTwitter />
              </Button>
            </Link>
            <Link href="https://instagram.com/gauaurarav" target="_blank">
              <Button variant="ghost" color="white" fontSize={'24px'}>
                <IoLogoInstagram />
              </Button>
            </Link>
            <Code
              colorScheme="transparent"
              fontSize={'24px'}
              padding={1}
              children="}"
            />
          </ListItem>
        </List>

        <Center>
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

    {/* about container */}

    <Container fontSize="18px">
      <Section delay={0.1}>
        <Heading
          as="h2"
          variant="section-title"
          mt={15}
          textAlign="center"
          fontSize={'24px'}
          padding="20px"
        >
          About
        </Heading>

        <Paragraph>
          I&apos;m an engineering student at Vellore Institute of Technology
          Bhopal, where I&apos;m now in my pre-final year of my Bachelor of
          Technology. I would like to work as a software developer for
          corporates that are supplying the globe with numerous programmes that
          make life easier. As a pastime, I also create web and Android
          applications. I&apos;ll concentrate on picking up new skills and
          staying current with technology. I also play chess as my hobby.
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading
          as="h2"
          variant="section-title"
          textAlign="center"
          fontSize={'24px'}
          padding="20px"
        >
          Educational Qualifications
        </Heading>
        <BioSection>
          <BioYear>2020 to present -</BioYear>
          BTech. CSE ( <i>7.8/10 CGPA</i> ) from{' '}
          <a href="https://www.vitbhopal.ac.in" target={'_blank'}>
            <b>VIT Bhopal</b>
          </a>
        </BioSection>
        <BioSection>
          <BioYear>2019 - </BioYear>
          Class XII ( <i>89.00%</i> )
        </BioSection>
        <BioSection>
          <BioYear>2017 - </BioYear>
          Class X ( <i>91.33%</i> )
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading
          as="h2"
          variant="section-title"
          mt={15}
          fontSize={'18px'}
          padding="20px"
        >
          Technical skills and tools
        </Heading>
        <SimpleGrid columns={[5, 5, 7]} gap={3}>
          <Image src={java} alt="Java" width={100} height={100} />
          <Image src={cpp} alt="C++" width={100} height={100} />
          <Image src={python} alt="Python" width={100} height={100} />
          <Image src={html} alt="HTML" width={100} height={100} />
          <Image src={css} alt="CSS" width={100} height={100} />
          <Image src={js} alt="JS" width={100} height={100} />
          <Image src={nodejs} alt="Nodejs" width={100} height={100} />
          <Image src={react} alt="react" width={100} height={100} />
          <Image src={flask} alt="Flask" width={100} height={100} />
          <Image src={Mongodb} alt="Mongodb" width={100} height={100} />
          <Image src={sql} alt="SQL" width={100} height={100} />
          <Image src={postman} alt="Postman" width={100} height={100} />
          <Image src={github} alt="Github" width={100} height={100} />
          <Image src={git} alt="Git" width={100} height={100} />
        </SimpleGrid>

        <Link
          href="https://drive.google.com/file/d/1-4WGHl1LUioDFAP4Nq1eR77Z0jLFadQO/view?usp=sharing"
          target="_blank"
        >
          <Button
            mt={10}
            mb={10}
            variant="ghost"
            color="#178edd"
            backgroundColor={'#EDF2F7'}
          >
            Resume
          </Button>
        </Link>

        <Link href="mailto: garwagaurav@gmail.com" target="_blank" ml={8}>
          <Button
            mt={10}
            mb={10}
            variant="ghost"
            color="#178edd"
            backgroundColor={'#EDF2F7'}
          >
            Contact
          </Button>
        </Link>
      </Section>
    </Container>

    <Container>
      <Heading textAlign={'center'} as="h1" fontSize={28} mb={5} mt={12}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 1]} gap={20}>
        <GridItem
          title="CodeMaps"
          thumbnail={codemaps}
          tech={
            <Badge>React | Next | JS | ChakraUI | HTML | CSS | GitHub</Badge>
          }
          description="
          CodeMaps is a project designed to help individuals prepare for technical interviews at top tech companies. It provides structured learning paths for mastering data structures and algorithms, offers company-specific interview questions, includes previous year interview queries, and shares valuable interview experiences. Whether you're a student, recent graduate, or professional aiming for tech career success."
          href="https://play.google.com/store/search?q=leetracker&c=apps"
        />
        <GridItem
          title="LeeTracker"
          thumbnail={leetracker}
          tech={<Badge>ReactNative | GraphQL | JS | Expo</Badge>}
          description="LeeTracker is an easy-to-use application through which you can track your friend's progress on LeetCode and get notified about your friend’s recent and total submissions.
            "
          href="https://play.google.com/store/search?q=leetracker&c=apps"
        />
        <GridItem
          title="Heat Waves and AQI Prediction"
          thumbnail={taim}
          tech={
            <Badge fontSize={12}>
              {' '}
              ML | Python and libraries, streamlit, postman, etc.
            </Badge>
          }
          description="Our team developed an AQI and heatwaves prediction model during Telangana
            AI Mission hackathon conducted by NASSCOM in collaboration with Government of Telangana and
            Capgemini."
          href="https://harshhrs24-team-cl-ai-mate-app-md7w7w.streamlit.app/"
        />
      </SimpleGrid>
      <Link href="/projects" mt={'20px'}>
        <Button color="#178edd" backgroundColor={'#EDF2F7'}>
          View all
        </Button>
      </Link>
    </Container>

    <Container mt={12} fontSize="18px">
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
    </Container>

    <Container>
      <Heading
        id="ctfs"
        as="h2"
        variant="section-title"
        mt={15}
        textAlign="center"
        fontSize={'24px'}
        padding="20px"
      >
        Badges
      </Heading>
      <SimpleGrid columns={[2, 3, 3]} gap={10}>
        <GridItem
          boxShadow="dark-lg"
          href="https://www.credly.com/badges/a217be7c-e780-467b-a62a-dee1eb737ea5/public_url"
          title=" "
          thumbnail={googlebadge}
        ></GridItem>
        <GridItem
          href="https://www.credly.com/badges/d8fe4ff3-e205-46b8-9e3d-4624d0c1338f/public_url"
          title=""
          thumbnail={sc900badge}
        ></GridItem>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
