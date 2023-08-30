import React, { use } from 'react'
import { useCallback } from 'react'
import { loadFull } from 'tsparticles'
import Particles from 'react-particles'
import ParticlesConfig from '../config/particles-config'
import { Container } from '@chakra-ui/react'

const ParticlesBackground = () => {
  const particlesInit = useCallback(async engine => {
    console.log(engine)
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async container => {
    await console.log(container)
  }, [])

  return (
    <div id="particle-background">
      <Particles
        id="tsparticles"
        particlesLoaded="particlesLoaded"
        init={particlesInit}
        options={ParticlesConfig}
        height="100vh"
        width="100vh"
      ></Particles>
    </div>
  )
}

export default ParticlesBackground
