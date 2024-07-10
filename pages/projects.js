import { Container, Heading, SimpleGrid, Divider, Stack, Center } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import { Tag } from '../components/work'

import thumbEssay from '../public/images/projects/essay-01.png'
import thumbScraft from '../public/images/projects/scraft-01.png'
import thumbQuno from '../public/images/projects/quno-01.png'
import thumbOrbitron from '../public/images/projects/orbitron-01.png'
import thumbTutor from '../public/images/projects/tutor-01.png'
import thumbKeywordPrice from '../public/images/projects/keywordprice-01.png'
import thumbFashion from '../public/images/projects/fashionhiernet-01.png'
import thumbHistCNN from '../public/images/projects/histcnn-02.png'
import thumbTurret from '../public/images/projects/turret-01.png'
import thumbChisktale from '../public/images/projects/chisktale-01.png'

const Projects = () => (
  <Layout title="Projects">
    <Container maxW="container.xl">
      <Stack direction={['column', 'row']} my={4} spacing='24px' justify="space-between">
        <Heading as="h3" fontSize={30}>
          Projects
        </Heading>
        {/* <Link href="/files/resume.pdf" target="_blank">
          <Button colorScheme="teal" size='md' variant='solid'>
            See as pdf
          </Button>
        </Link> */}
      </Stack>

      <Section>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          long term projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="quno" title="Quno" thumbnail={thumbQuno}>
          
          </WorkGridItem>
          <Center >
            <Tag>Web-dev</Tag>
            <Tag>Fullstack</Tag>
            <Tag>LLM</Tag>
          </Center>
        </Section>
        <Section>
          <WorkGridItem id="scraft" title="Scraft" thumbnail={thumbScraft}>
          Interactive Storybook for Language Learners
          </WorkGridItem>
          <Center >
            <Tag>Web-dev</Tag>
            <Tag>Fullstack</Tag>
            <Tag>LLM</Tag>
          </Center>
        </Section>
        <Section>
          <WorkGridItem id="essay-planner" title="AI Essay Planner" thumbnail={thumbEssay}>
          AI-Powered Essay Planner
          </WorkGridItem>
          <Center >
            <Tag>Web-dev</Tag>
            <Tag>fullstack</Tag>
          </Center>
        </Section>
        <Section>
          <WorkGridItem
            id="orbitron"
            title="Orbitron"
            thumbnail={thumbOrbitron}
          >
            Spherical wheeled vehicle & control algorithm
          </WorkGridItem>
          <Center >
            <Tag>Robotics</Tag>
            <Tag>Research</Tag>
            <Tag>Patented</Tag>
          </Center>
        </Section>

      </SimpleGrid>

      <Section delay={0.1}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          side projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.2}>
          <WorkGridItem id="lcpn-hiernet" thumbnail={thumbFashion} title="LCPN HierNet">
          Hierarchical image classification model
          </WorkGridItem>
          <Center >
            <Tag>ML (computer-vision)</Tag>
            <Tag>Faikerz</Tag>
          </Center>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem id="tutorscheduler" thumbnail={thumbTutor} title="Kent Tutor Scheduler">
            A peer tutor scheduling web service for Kent School
          </WorkGridItem>
          <Center >
            <Tag>Web-dev</Tag>
            <Tag>Backend</Tag>
          </Center>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem
            id="keywordprice"
            thumbnail={thumbKeywordPrice}
            title="Keyword/Price Analysis Tool"
          >
            keyword extraction tool/API to assist small businesses to detect counterfeit products on Korean E-commerce websites
          </WorkGridItem>
          <Center >
            <Tag>ML (NLP)</Tag>
            <Tag>API</Tag>
            <Tag>Faikerz</Tag>
          </Center>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem
            id="histcnn"
            thumbnail={thumbHistCNN}
            title="Histogram Layer for Texture Classification"
          >
            Hybrid model that incorporates a stackable, localized histogram layer on convolutional neural network (CNN) for texture analysis applications.
          </WorkGridItem>
          <Center >
            <Tag>ML (computer-vision)</Tag>
            <Tag>research</Tag>
          </Center>
        </Section>
      </SimpleGrid>

      <Section delay={0.3}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          old hobby projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.4}>
          <WorkGridItem id="turret" thumbnail={thumbTurret} title="T-33 Arduino Turret">
            Arduino airsoft turret controlled by C# Winforms application
          </WorkGridItem>
          <Center >
            <Tag>robotics</Tag>
          </Center>
        </Section>
        <Section delay={0.4}>
          <WorkGridItem
            id="chisktale"
            thumbnail={thumbChisktale}
            title="Chisktale"
          >
            An Undertale fangame made with C#
          </WorkGridItem>
          <Center >
            <Tag>game-dev</Tag>
          </Center>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../components/chakra'
