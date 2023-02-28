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
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
 import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin, IoMail} from 'react-icons/io5'
import Image from 'next/image'
 
const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    
    <Container 
      mt={'4.5rem'}
      fontSize='18px'
    >
    
       <center>
          <Box
          borderWidth={2}
          w="150px"
          h="150px"
          display="inline-block"
          borderRadius="500px"
          overflow="hidden"
          mr={'10px'}
        >
          
          <ProfileImage
            src="/images/img2.jpeg"
            alt="Profile image"
            width="240"
            height="240"
            mr={'10px'}
          />
        </Box>
</center>
      <Box display={{ md: 'flex' }}>
        
        <Box flexGrow={1} textAlign='center'>
          <Heading as="h2" variant="page-title">
            Hi, I am Gaurav
          </Heading>
          <p>CSE Undergrad | Web Developer | Explorer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
 
           
        </Box>
      </Box>

      <Section  delay={0.1}>
        <Heading as="h1" variant="section-title" mt={'3rem'} textAlign='center' padding='10px'>
          Connect with me
        </Heading>
        <List>
        <ListItem textAlign='center'>
            <Link href="mailto: garwagaurav@gmail.com" target="_blank">
              <Button
                mb={'10px'}
                variant="ghost"
                color="#178edd"
                leftIcon={<IoMail/>}
              >
                garwagaurav@gmail.com
              </Button>
            </Link>
            
          </ListItem>

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

          <ListItem textAlign='center'>
          <Link href="https://linkedin.com/in/gaurav1832" target="_blank">
              <Button
                variant="ghost"
                color="#178edd"
                leftIcon={<IoLogoLinkedin/>}
              >
                Linkedin
              </Button>
            </Link>

            <Link href="https://github.com/gaurav1832" target="_blank">
              <Button
                variant="ghost"
                color="#178edd"
                leftIcon={<IoLogoGithub />}
              >
                Github
              </Button>
            </Link>
            <Link href="https://twitter.com/ggauravvvvv" target="_blank">
              <Button
                variant="ghost"
                color="#178edd"
                leftIcon={<IoLogoTwitter/>}
              >
                Twitter
              </Button>
            </Link>

            <Link href="https://instagram.com/gauaurarav" target="_blank">
              <Button
                variant="ghost"
                color="#178edd"
                leftIcon={<IoLogoInstagram/>}
              >
                Instagram
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>

      <Section delay={0.3}>
        <center>
        <Link href="https://drive.google.com/file/d/1Fytfs8_79fISKE8S_6Hg_KKpi2_3PLu5/view?usp=sharing" target="_blank">
              <Button
              mt={10}
              mb={10}
                color="#178edd"
                backgroundColor={"#EDF2F7"}
               
              >
                Resume
              </Button>
            </Link>

            <Link href="https://forms.office.com/r/6PkjXvJ0Ns" target="_blank" ml={8}>
              <Button
              mt={10}
              mb={10}
                color="#178edd"
                backgroundColor={"#EDF2F7"}
              >
                Contract
              </Button>
            </Link>
            </center>
      </Section>

 
    </Container>

  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
