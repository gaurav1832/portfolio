import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  chakra,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Icon from '../components/icons/tools'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin} from 'react-icons/io5'
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


const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const About = () => (
  <Layout>
    <Container 
      mt={12}
      fontSize='18px'
    >


      <Section delay={0.1}>
        <Heading
         as="h2" variant="section-title" mt={15} textAlign='center' fontSize={'24px'} padding='20px'>
          About
        </Heading>

        <Paragraph>
        I&apos;m an engineering student at Vellore Institute of Technology Bhopal, where I&apos;m now in my pre-final year of my Bachelor of Technology.
        I would like to work as a software developer for corporates that are supplying the globe with numerous programmes that make life easier. 
        As a pastime, I also create web and Android applications. I&apos;ll concentrate on picking up new skills and staying current with technology. I also play chess as my hobby.
        </Paragraph>

      </Section>
 

      <Section delay={0.2}>
        <Heading as="h2" variant="section-title" mt={15} textAlign='center' fontSize={'24px'} padding='20px'>
          Educational Qualifications
        </Heading>
        <BioSection>
          <BioYear>2020 to present -</BioYear>
          BTech. CSE ( <i>7.8/10 CGPA</i> ) from <a href='https://www.vitbhopal.ac.in' target={"_blank"}><b>VIT Bhopal</b></a>
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
        <Heading as="h2" variant="section-title" mt={15}  fontSize={'18px'} padding='20px'>
          Technical skills and tools
        </Heading>
        <SimpleGrid columns={[5, 10, 10]} gap={3}>
        <Image
          src={java}
          alt="Java"
          width={50}
          height={50}
        />
             <Image
          src={cpp}
          alt="C++"
          width={50}
          height={50}
        />
             <Image
          src={python}
          alt="Python"
          width={50}
          height={50}
        />
             <Image
          src={html}
          alt="HTML"
          width={50}
          height={50}
        />
             <Image
          src={css}
          alt="CSS"
          width={50}
          height={50}
        />
             <Image
          src={js}
          alt="JS"
          width={50}
          height={50}
        />
             <Image
          src={nodejs}
          alt="Nodejs"
          width={50}
          height={50}
        />
             <Image
          src={react}
          alt="Picture of the author"
          width={50}
          height={50}
        />
             <Image
          src={flask}
          alt="Flask"
          width={50}
          height={50}
        />
             <Image
          src={Mongodb}
          alt="Mongodb"
          width={50}
          height={50}
        />
             <Image
          src={sql}
          alt="SQL"
          width={50}
          height={50}
        />
             <Image
          src={postman}
          alt="Postman"
          width={50}
          height={50}
        />
          <Image
          src={github}
          alt="Github"
          width={50}
          height={50}
        />
          <Image
          src={git}
          alt="Git"
          width={50}
          height={50}
        />
        </SimpleGrid>

        <Link href="https://drive.google.com/file/d/1Fytfs8_79fISKE8S_6Hg_KKpi2_3PLu5/view?usp=sharing" target="_blank">
              <Button
              mt={10}
              mb={10}
                variant="ghost"
                color="#178edd"
                backgroundColor={"#EDF2F7"}
               
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
                backgroundColor={"#EDF2F7"}
              >
                Send Mail
              </Button>
            </Link>
      </Section> 
    </Container>

  </Layout>
)

export default About
export { getServerSideProps } from '../components/chakra'
