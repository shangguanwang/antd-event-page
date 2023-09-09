import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import EventsList from '../../components/EventsList'
import './index.less'
import { Col, Row } from 'antd';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <Row>
      <Col span={8}>Filters Placeholder</Col>
      <Col span={8}><EventsList /></Col>
      </Row>
    </PageContainer>
  );
};

export default HomePage;
