import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center,
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
            Quno <Badge>Jan 2024 - Present</Badge>
        </Title>
        <Button leftIcon={<BsGithub/>} colorScheme="teal" size='sm' variant='solid' isDisabled={true}>
          Private Repo
        </Button>
      </Stack>
      <P>
Currently in stealth      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://quno.io/">
            quno.io <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        {/* <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
          Something I wrote about scraft <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
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
              One of 20 companies at PearX S24 selected from 2100+ applications
          </ListItem>

        </UnorderedList>
      {/* <WorkImage src="/images/projects/orbitron-03.png" alt="Algorithm" />
      <WorkImage src="/images/projects/orbitron-02.png" alt="Algorithm" /> */}

    </Container>
<WorkImage src="/images/projects/quno-01.png" alt="quno" />
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'