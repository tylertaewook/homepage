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
  <Layout title="lcpn-hiernet">
    <Container maxW="container.xl">
      <Stack direction={['column', 'row']} my={4} spacing='24px' justify="space-between">
        <Title>
          LCPN HierNet <Badge>Mar 2021 - Jul 2021</Badge>
        </Title>
        <Link href="https://github.com/tylertaewook/lcpn-hiernet" target="_blank">
          <Button leftIcon={<BsGithub/>} colorScheme="teal" size='sm' variant='solid'>
            View Source
          </Button>
        </Link>
      </Stack>
      <P>
      Hierarchical image classification model for fashion commerce items based on EfficientNet-b4 and LCPN (Local Classifier per Parent Node) technique.
      </P>
      <UnorderedList my={4}>
        <ListItem>
          <P>
            Hand-crafted a dataset of CH*NEL products using selenium (35 classes, 26693 images)
          </P>
        </ListItem>
        <ListItem>
          <P>
          Implemented hierarchical image classification model for CH*NEL products in PyTorch.
          </P>
        </ListItem>
        <ListItem>
          <P>
          Combined EfficientNet and
Local Classifier per Parent Node technique to achieve 85.2% accuracy; 19.2% improvement from previous flat-classification model
          </P>
        </ListItem>
      </UnorderedList>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stacks</Meta>
          <span>PyTorch, Pandas, Selenium</span>
        </ListItem>
        <ListItem>
          <Meta>Inspiration</Meta>
          <Link href="https://arxiv.org/pdf/2005.06692.pdf">
          Deep Hierarchical Classification for Category Prediction in E-commerce System <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/lcpnhiernet-01.png" alt="classes" />
      <P>
      Local classifier per parent node: training one multi-class classifier for each parent node, to distinguish between its child nodes.
      </P>
      <WorkImage src="/images/projects/lcpnhiernet-02.png" alt="classes" />
      <WorkImage src="/images/projects/lcpnhiernet-03.png" alt="classes" />


    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
