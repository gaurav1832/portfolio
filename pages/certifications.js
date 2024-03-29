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
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin
} from 'react-icons/io5'
import google from '../public/images/google-ctf.png'
import sc900 from '../public/images/sc-900.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Certifications = () => (
  <Layout>
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
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
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

export default Certifications
export { getServerSideProps } from '../components/chakra'
