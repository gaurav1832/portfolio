import { motion } from 'framer-motion'
import { chakra, shouldForwardProp, Center } from '@chakra-ui/react'

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

const Section = ({ children, delay = 0 }) => (
  <StyledDiv
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay }}
    mb={5}
    borderRadius={'10px'}
    backgroundColor={'transparent'}
    width={'100%'}
  >
    {children}
  </StyledDiv>
)

export default Section
