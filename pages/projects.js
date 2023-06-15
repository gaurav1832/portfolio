import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import digitalagri from '../public/images/digital-agri.png'
import urlshort from '../public/images/url-short.png'
import snakegame from '../public/images/snake-game.png'
import ttt from '../public/images/ttt.png'
import wca from '../public/images/wca-preview.png'
import leetracker from '../public/images/leetracker.png'
import taim from '../public/images/taim.png'

const Posts = () => (
  <Layout title="Projects">
    <Container>
      <Heading textAlign={'center'} as="h1" fontSize={28} mb={5} mt={12}>
        Projects
      </Heading>
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
          description="Our team developed an AQI and heatwaves predicCon model during Telangana
            AI Mission hackathon conducted by NASSCOM in collaboraCon with Government of Telangana and
            Capgemini."
          href="https://harshhrs24-team-cl-ai-mate-app-md7w7w.streamlit.app/"
        />

        <GridItem
          title="WhatsApp chat analysis"
          thumbnail={wca}
          tech={'(Tech: python, pandas, matplotlib, seaborn, streamlit)'}
          description="Developed a chat analysis web app where you can analyse whatsapp statistics like daily,weekly and monthly activities"
          href="https://gaurav1832-wca-app-4xpz9j.streamlit.app/"
        />
        <GridItem
          title="URL Shortener in flask"
          thumbnail={urlshort}
          tech={'(Tech: python, flask, html, css)'}
          description="Made a url shortener app using python libraries and flask as web framework."
          href="https://github.com/gaurav1832/url-shortener-flask"
        />

        <GridItem
          title="TicTacToe Game"
          thumbnail={ttt}
          tech={'(Tech: HTML, CSS, Javascript)'}
          description="Simple tic tac toe game for fun."
          href="https://gaurav1832.github.io/tic-tac-toe"
        />
        <GridItem
          title="Snake Game"
          thumbnail={snakegame}
          tech={'(Tech: HTML, CSS, Javascript)'}
          description="Developed a snake and food game using Javascript"
          href="https://github.com/gaurav1832/SnakeGame"
        />
        <GridItem
          title="Digital Agriculture"
          thumbnail={digitalagri}
          tech={'(Tech: HTML, CSS, Javascript, php)'}
          description="Developed a website for farmers to gain knowledge about modern techniques of farming and agriculture"
          href="https://github.com/gaurav1832/DA"
        />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
