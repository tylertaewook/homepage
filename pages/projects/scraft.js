import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center,
  AspectRatio,
  Button,
  Stack
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import { BsGithub } from 'react-icons/bs'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="scraft">
    <Container maxW="container.xl">
      <Stack direction={['column', 'row']} my={4} spacing='24px' justify="space-between">
        <Title>
            Scraft <Badge>Jan 2023 - Jan 2024</Badge>
        </Title>
        <Button leftIcon={<BsGithub/>} colorScheme="teal" size='sm' variant='solid' isDisabled={true}>
          Private Repo
        </Button>
      </Stack>
      <P>
      Scraft offers an immersive, storybook-inspired language curriculum that engages children in interactive reading, writing, listening, and speaking games. Each narrative module is customized to each child’s language proficiency, providing a personalized and effective learning journey.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://scraft.ai/">
            scraft.ai/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Frontend</Meta>
          <span>NextJS, React, Redux, Tailwindcss</span>
        </ListItem>
        <ListItem>
          <Meta>Backend</Meta>
          <span>Django Rest, PostgreSQL, Docker, GPT-3</span>
        </ListItem>
        <ListItem>
          <Meta>DevOps</Meta>
          <span>Vercel, DigitalOcean, AWS S3, CircleCI</span>
        </ListItem>
        {/* <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
          Something I wrote about scraft <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
        <ListItem>
          <Meta>SNS</Meta>
          <Link href="https://www.instagram.com/scraft.ai/">
            Instagram <ExternalLinkIcon mx="2px" />
          </Link>
          <Link href="https://www.linkedin.com/company/scraftai">
            LinkedIn <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

        <Heading as="h3" fontSize={22} my={4}>
          <Center>Awards
          </Center>
        </Heading>
  
        <UnorderedList my={4}>
          <ListItem>
              <Badge mr={2}>Notice</Badge>
              Top 10% at YC W23 Batch
          </ListItem>
          <ListItem>
              <Badge mr={2}>Acceptance</Badge>
              Anjal Z Techstars Founders Catalyst [Cohort IV]
          </ListItem>
          <ListItem>
              <Badge mr={2}>$10,000 SAFE</Badge>
              Winner of Pear VC Competition
          </ListItem>
          <ListItem>
              <Badge mr={2}>$25,000</Badge>
              Winner of Startmate SBF Grant
          </ListItem>
          <ListItem>
              <Badge mr={2}>$2,500</Badge>
              Winner of General Catalyst Fellow Grant
          </ListItem>
          <ListItem>
              <Badge mr={2}>$2,500 CASH</Badge>
              Chamption of Microsoft Imagine Cup 2023 (US, Education)
          </ListItem>
          <ListItem>
              <Badge mr={2}>$15,000 CASH</Badge>
              1st Place, Columbia Venture Competition
          </ListItem>

        </UnorderedList>
      <WorkImage src="/images/projects/scraft-01.png" alt="scraft" />
      <AspectRatio maxW="820px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/39nTAnxtdac?si=b-7JhR96ibXtiS0U"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>
      {/* <WorkImage src="/images/projects/orbitron-03.png" alt="Algorithm" />
      <WorkImage src="/images/projects/orbitron-02.png" alt="Algorithm" /> */}

      

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'