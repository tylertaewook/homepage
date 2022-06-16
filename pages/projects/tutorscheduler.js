import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Button,
  Stack
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import { BsGithub } from 'react-icons/bs'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="tutorscheduler">
    <Container maxW="container.xl">
      <Stack direction={['column', 'row']} my={4} spacing='24px' justify="space-between">
        <Title>
            Kent Tutor Scheduler <Badge>2021</Badge>
        </Title>
        <Link href="https://github.com/tylertaewook/tutor-scheduler-django" target="_blank">
          <Button leftIcon={<BsGithub/>} colorScheme="teal" size='sm' variant='solid'>
            View Source
          </Button>
        </Link>
      </Stack>
      <P>
      A Django CRUD web app for scheduling peer tutor sessions in Boarding School&apos;s Academic Resource Center
      </P>
      <UnorderedList my={4}>
        <ListItem>
          <P>
          Tutor Session CRUD (Create, Read, Update, Delete): Students can sign up, edit, or delete tutor sessions. Tutors can keep track of upcoming sessions. Teachers have access to admin panel and can refer students to sessions
          </P>
        </ListItem>

        <ListItem>
          <P>
          Custom Register/Login system with different user groups(students/tutors/admin); 
          </P>
        </ListItem>
        <ListItem>
          <P>
          Profile pages with upcoming and past sessions depending on user groups; Students and tutors can view past and upcoming tutor sessions.
          </P>
        </ListItem>
        <ListItem>
          <P>
          Testing: pytest + codecov + Factoryboy
          </P>
        </ListItem>
      </UnorderedList>
      
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stacks</Meta>
          <span>Django, PostgreSQL, Bootstrap</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://blog.tylertaewook.com/post/tutor-scheduler-django">
          What I learned from building a Django appointment scheduler for my school <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/tutor-01.png" alt="scraft" />

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

