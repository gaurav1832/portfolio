import { motion } from 'framer-motion'
import { chakra, shouldForwardProp, Center } from '@chakra-ui/react'

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

const Section = ({ children, delay = 0 }) => (
  <Center py={6}>
    <StyledDiv
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      mb={6}
      borderRadius={'10px'}
      backgroundColor={'#oode8d'}
    >
      {children}
    </StyledDiv>
  </Center>
)

export default Section
