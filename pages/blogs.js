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
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin} from 'react-icons/io5'
 import google from '../public/images/google-ctf.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Blogs = () => (
  <Layout>
    <Container 
      mt={12}
      fontSize='18px'
    >
      <Section>
      <Heading id='ctfs' as="h2" variant="section-title" mt={15} textAlign='center' fontSize={'24px'} padding='20px'>
          Blogs
      </Heading>
      <Box align="center" my={4}>
          {/* <Button
            as={NextLink}
            href="/article"
            scroll={false}
            color="#178edd"
          >
            See more
          </Button> */}
          Updating Soon...
        </Box>

      </Section>
    </Container>

  </Layout>
)

export default Blogs
export { getServerSideProps } from '../components/chakra'
