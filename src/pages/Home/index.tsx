import { PageContainer } from '@ant-design/pro-components';
import Filter from '../../components/filter/Filter'
import EventsList from '../../components/EventsList'
import './index.less'
import { Col, Row } from 'antd';
import eventsdata from '../../data/events.json'
import { useState } from 'react';
import { Provider } from 'react-redux';
import {store} from '../../redux/store';

const HomePage: React.FC = () => {
  const [data, setData] = useState(eventsdata);

  return (
    <Provider store={store}>
      <PageContainer ghost>
        <Row>
        <Col span={8}><Filter data={data}/></Col>
        <Col span={8}><EventsList data={data}/></Col>
        </Row>
      </PageContainer>
    </Provider>
  );
};

export default HomePage;
