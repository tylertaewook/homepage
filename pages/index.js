import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Stack,
  SimpleGrid,
  Button,
  useColorModeValue,
  chakra,
  IconButton,
  Text,
} from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
// import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem, BlogItem } from '../components/grid-item'
import { BsGithub, BsLinkedin, BsMedium } from 'react-icons/bs'
// import thumbScraft from '../public/images/projects/scraft-01.png'
import thumbOrbitron from '../public/images/projects/orbitron-01.png'
import thumbQuno from '../public/images/projects/quno-01.png'
import Image from 'next/image'
import VoxelDogLoader from '../components/voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../components/voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container maxW="container.md">
      <LazyVoxelDog />
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Co-Founder and CPO at Quno (PearX S24) | Columbia CS
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Tyler Kim
          </Heading>
          {/* <p>( Product Developer / Web Developer / ML Researcher )</p> */}
          <Stack mt={4} spacing={4} direction='row' align='center'>
            <Link href="/files/resume.pdf" target="_blank">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal" size='md' variant='solid'>
                Resume / CV
              </Button>
            </Link>
            <Link href="https://github.com/tylertaewook" target="_blank">
              <IconButton
                variant='outline'
                colorScheme='teal'
                aria-label='github'
                fontSize='20px'
                icon={<BsGithub />}
              />
            </Link>
            <Link href="https://www.linkedin.com/in/tylertaewook/" target="_blank">
              <IconButton
                variant='outline'
                colorScheme='teal'
                aria-label='linkedin'
                fontSize='20px'
                icon={<BsLinkedin />}
              />
            </Link>
            <Link href="https://tylertaewook.medium.com/" target="_blank">
              <IconButton
                variant='outline'
                colorScheme='teal'
                aria-label='medium'
                fontSize='20px'
                icon={<BsMedium />}
              />
            </Link>
          </Stack>
          <Text
            color={'whiteAlpha.900'}
            fontFamily='monospace'
            fontWeight="semibold"
            fontSize={15}
            rounded="lg"
            py={1}
            mt={3}
            pl={3}
            background={'black'}
            >
            ~$ ssh <Link href="https://term.tylertaewook.com">term.tylertaewook.com<div id="cursor"></div></Link>
          </Text>
        </Box>
        
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="130px"
            h="130px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/tylerkim.png"
              alt="Profile image"
              borderRadius="full"
              width="130%"
              height="130%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
         👋 Nice to meet you!
        </Heading>
        <Paragraph>
        Hi, I&apos;m Tyler, I previously spent time building across various software verticals, everything from ed-tech($55k in prize), robotics control system (patented), and counterfeit-detection (acquired). I&apos;m currently building{' '}
          <NextLink href="https://quno.ai" passHref scroll={false}>
            <Link>Quno</Link>
          </NextLink>.
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
        📚 Featured Blog Posts
        </Heading>
        <Stack>
          <Text
              color={'whiteAlpha.900'}
              fontFamily='monospace'
              fontWeight="semibold"
              fontSize={15}
              rounded="lg"
              py={1}
              mb={1}
              pl={3}
              background={'black'}
              >
              ~$ ssh <Link color={"green.300"} href="https://blog.tylertaewook.com">blog.tylertaewook.com</Link><div id="cursor"></div>
          </Text>
              <BlogItem 
                  title="Orbitron: Reinventing the (spherical) wheels and its control algorithm" 
                  summary="My six-month journey of building a 4 Wheel Independent Steering/Driving Vehicle" 
                  date="April 2, 2021" 
                  href="https://blog.tylertaewook.com/post/project-orbitron"
              />
              <BlogItem 
                  title="Understanding Proximal Policy Optimization (Schulman et al., 2017)" 
                  summary="How I approached the PPO paper bottom-up as a beginner" 
                  date="April 30, 2021" 
                  href="https://blog.tylertaewook.com/post/proximal-policy-optimization"
              />
              <BlogItem 
                  title="How AI's Socratic Questioning can help you write better" 
                  summary="Story behind building Scraft: an AI-powered Writing Tool" 
                  date="August 18, 2022" 
                  href="https://blog.tylertaewook.com/post/ai-socratic-questioning"
              />
              <BlogItem 
                  title="What I learned from building a Django appointment scheduler for my school" 
                  summary="The project that taught me how to learn, why I learn, and what to learn in my future CS career." 
                  date="May 30, 2021" 
                  href="https://blog.tylertaewook.com/post/tutor-scheduler-django"
              />
        </Stack>
      </Section>

      {/* <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
         🚀 I&apos;m interested in...
        </Heading>
        <BioSection>
          <BioYear>Web Development</BioYear>
          react, django, flask, typescript, nextjs, redux, tailwindcss
        </BioSection>
        <BioSection>
          <BioYear>Machine Learning</BioYear>
          text-mining, computer-vision, reinforcement-learning
        </BioSection>
        <BioSection>
          <BioYear>Robotics</BioYear>
          arduino, robot-vision, control-algorithm
        </BioSection>
      </Section> */}


      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
        💡 I&apos;m most proud of...
        </Heading>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="/projects/quno"
            title="Quno"
            thumbnail={thumbQuno}
          >
            Market Research on Autopilot
          </GridItem>
          <GridItem
            href="/projects/orbitron"
            title="Orbitron"
            thumbnail={thumbOrbitron}
          >
            Spherical wheeled vehicle & control algorithm
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/projects" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              All Projects
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
        📷 Check out my photos too! 
        </Heading>
        <div data-behold-id="RDowKcEDWoWumFz3qWsp"></div>
      <script src="https://w.behold.so/widget.js" type="module"></script>
      </Section>

  
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
