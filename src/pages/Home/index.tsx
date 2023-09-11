import { PageContainer } from '@ant-design/pro-components';
import Filter from '../../components/filter/Filter'
import EventsList from '../../components/EventsList'
import './index.less'
import { Col, Row, Collapse } from 'antd';
import eventsdata from '../../data/events.json'
import { useState } from 'react';
import { Provider } from 'react-redux';
import {store} from '../../redux/store';

const HomePage: React.FC = () => {
  const [data, setData] = useState(eventsdata);
  const { Panel } = Collapse;

  return (
    <Provider store={store}>
      <PageContainer>
        <Row className="mainrow-container">
        <Collapse defaultActiveKey={['1']} className="collapse-container">
        <Panel key="1" header="">
          <Filter data={data}/>
        </Panel>
        </Collapse>
        <Col xl={8} xs={24}><EventsList data={data}/></Col>
        </Row>
      </PageContainer>
    </Provider>
  );
};

export default HomePage;
