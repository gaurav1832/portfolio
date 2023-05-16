import { motion } from 'framer-motion'
import { chakra, shouldForwardProp, Center } from '@chakra-ui/react'

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

const SectionSm = ({ children, delay = 0 }) => (
  <Center py={6}>
    <StyledDiv
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      mb={6}
      borderRadius={'10px'}
      boxShadow="dark-lg"
      rounded="md"
      bg="white"
      //   bgGradient={[
      //     'linear(to-tr, purple.100, orange.400)',
      //     'linear(to-t, blue.200, blue.500)',
      //     'linear(to-b, gray.50, gray.400)'
      //   ]}
      backgroundColor={'transparent'}
      padding={10}
    >
      {children}
    </StyledDiv>
  </Center>
)

export default SectionSm
