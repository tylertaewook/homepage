import { Container, Heading, Link, Button, Stack, Divider, UnorderedList, ListItem } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { ExpItem } from '../components/grid-item'

const Posts = () => (
  <Layout title="Experience">
    <Container maxW="container.xl">
      <Stack direction={['column', 'row']} my={4} spacing='24px' justify="space-between">
        <Heading as="h3" fontSize={30}>
          Resume
        </Heading>
        <Link href="/files/resume.pdf" target="_blank">
          <Button colorScheme="teal" size='md' variant='solid'>
            See as pdf
          </Button>
        </Link>
      </Stack>
      
      <Divider />

      <Heading as="h3" fontSize={20} my={4}>
        Education
      </Heading>

      <Section delay={0.1}>
        <Stack>
        <ExpItem 
            company="Columbia University" 
            position="B.S. Candidate in Computer Science" 
            time="Sept 2020 - June 2025" 
            location="New York, NY" 
            thumbnail='/images/resume/columbia.png'
        >
            <UnorderedList>
              <ListItem>Leave of Absence [Sept 2020 - Sept 2022]</ListItem>
              <ListItem>Courseworks: Data Structures in Java, Discrete Mathematics, Multi-variable Calculus, Advanced Programming in C, Fundamentals of Computer Systems, Linear Algebra and Probability</ListItem>
              <ListItem>Received the Chung Family Scholarship at Columbia Engineering for academic excellence</ListItem>
            </UnorderedList>
        </ExpItem>
        {/* <ExpItem 
            company="Kent School" 
            position="High School Diploma" 
            time="Sept 2018 - June 2020" 
            location="Kent, CT" 
            thumbnail='/images/resume/kent.png'
        >
            <UnorderedList>
              <ListItem>Activities: Coding club, Peer Tutor, Kent Guild</ListItem>
              <ListItem>GPA: 4.16</ListItem>
            </UnorderedList>
        </ExpItem> */}
        </Stack>
      </Section>

      <Heading as="h3" fontSize={20} mb={4}>
        Work Experience
      </Heading>

      <Section delay={0.3}>
        <Stack>
        <ExpItem 
            company="Scraft" 
            position="Founder/Principal Developer" 
            time="Jan 2023 - Present" 
            location="New York NY" 
            thumbnail='/images/resume/scraft.png'
        >
            <UnorderedList>
              <ListItem>Built a web app with Typescript, React, NextJS, Django, Azure AI Studio, Firebase that leverages on GPT4</ListItem>
              <ListItem>Winner of Pear VC Competition ($10,000 SAFE), US Champion in Education at Microsoft Imagine Cup ($2,500),
1st Place at Columbia Venture Competition ($15,000), Top 10% of YCombinator W23 applications
</ListItem>
              <ListItem>Beta-tested in three courses at Columbia; Conducted 30+ user interviews that led our pivot to language learning</ListItem>
              <ListItem>Developed referral dashboard and streaks feature that led to 270% increase in signups, 12% increase in retention</ListItem>
              <ListItem>Hired and led two Project Management interns to develop A/B testing and feedback pipeline for new features</ListItem>
            </UnorderedList>
        </ExpItem>
        <ExpItem 
            company="Faikerz" 
            position="Software Engineer" 
            time="July 2021 - July 2022" 
            location="Seoul, Korea" 
            thumbnail='/images/resume/faikerz.png'
        >
            <UnorderedList>
              <ListItem>Worked on counterfeit detecting models/APIs with fashion brand clients and live-tested against Korean E-commerce sites</ListItem>
              <ListItem>Implemented hierarchical image classification model for CH*NEL product category with EfficientNet and PyTorch</ListItem>
              <ListItem>Built a keyword analysis API that detects anomalies in keyword/price distribution for online products</ListItem>
              <ListItem>Built a clustering model that categorizes online products based on price, supplier, trademark, and distribution path</ListItem>
            </UnorderedList>
        </ExpItem>
        <ExpItem 
            company="DIYA ML2 - Machine Learning Club" 
            position="Member, Multi-Agent Reinforcement Learning Team" 
            time="March 2021 - Aug 2021" 
            location="Remote" 
            thumbnail='/images/resume/diya.png'
        >
            <UnorderedList>
              <ListItem>Studied, presented, and implemented two reinforcement-learning papers every week</ListItem>
              <ListItem>Co-implemented PPO/DQN algorithms with PyTorch in Pommerman and Snake MARL environment as baseline
models</ListItem>
            </UnorderedList>
        </ExpItem>
        <ExpItem 
            company="UF SSTP (Student Science Training Program" 
            position="Participant" 
            time="June 2019 - Aug 2019" 
            location="Gainesville, FL" 
            thumbnail='/images/resume/sstp.png'
        >
            <UnorderedList>
              <ListItem>
              Implemented a histogram layer for texture analysis CNN model with PyTorch in Dr. Alina Zare’s Lab
              </ListItem>
              <ListItem> 
              Wrote and presented a research paper and poster titled Histogram Layer for Texture Classification; Won the Best
Research Paper Award.
              </ListItem>
            </UnorderedList>
        </ExpItem>
        </Stack>
      </Section>

      {/* <Heading as="h3" fontSize={20} mb={4}>
        Selected Awards
      </Heading>

      <Section delay={0.5}>
        <UnorderedList>
          <ListItem>Lorem ipsum dolor sit amet</ListItem>
          <ListItem>Consectetur adipiscing elit</ListItem>
          <ListItem>Integer molestie lorem at massa</ListItem>
          <ListItem>Facilisis in pretium nisl aliquet</ListItem>
        </UnorderedList>
      </Section> */}

    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
