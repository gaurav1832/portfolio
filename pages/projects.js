import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'


import digitalagri from '../public/images/digital-agri.png'
import urlshort from '../public/images/url-short.png'
import snakegame from '../public/images/snake-game.png'
import ttt from '../public/images/ttt.png'
import wca from '../public/images/wca-preview.png'

const Posts = () => (
  <Layout title="Projects">
    <Container>
      <Heading textAlign={'center'} as="h1" fontSize={28} mb={5} mt={12}>
        Projects
      </Heading>

      <Section delay={0.1}>
      <Heading textAlign={'center'} mt={'80px'} as="h1" fontSize={24} variant="section-title">
          Python
      </Heading>
        <SimpleGrid columns={[1, 1, 1]} gap={20}>
        <GridItem
            title="WhatsApp chat analysis"
            thumbnail={wca}
            tech={"(Tech: python, pandas, matplotlib, seaborn, streamlit)"}
            description="Developed a chat analysis web app where you can analyse whatsapp statistics like daily,weekly and monthly activities"
            href="https://gaurav1832-wca-app-4xpz9j.streamlit.app/"
          />
          <GridItem
            title="URL Shortener in flask"
            thumbnail={urlshort}
            tech={"(Tech: python, flask, html, css)"}
            description="Made a url shortener app using python libraries and flask as web framework."
            href="https://github.com/gaurav1832/url-shortener-flask"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5} >
      <Heading textAlign={'center'} mt={'80px'} p={5} as="h1" fontSize={24} variant="section-title">
          Web
      </Heading>
        <SimpleGrid columns={[1, 1, 1]} gap={20}>
        <GridItem
            title="TicTacToe Game"
            thumbnail={ttt}
            tech={"(Tech: HTML, CSS, Javascript)"}
            description="Simple tic tac toe game for fun."
            href="https://gaurav1832.github.io/tic-tac-toe"
          />
           <GridItem
            title="Snake Game"
            thumbnail={snakegame}
            tech={"(Tech: HTML, CSS, Javascript)"}
            description="Developed a snake and food game using Javascript"
            href="https://github.com/gaurav1832/SnakeGame"
          />
          <GridItem
            title="Digital Agriculture"
            thumbnail={digitalagri}
            tech={"(Tech: HTML, CSS, Javascript, php)"}
            description="Developed a website for farmers to gain knowledge about modern techniques of farming and agriculture"
            href="https://github.com/gaurav1832/DA"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
