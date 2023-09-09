import { PageContainer } from '@ant-design/pro-components';
import { Row, Col, Card, Avatar } from 'antd';
import teamData from '../../data/teammembers.json'


const TeamPage = () => {

  return (
    <PageContainer
      header={{
        title: 'Team Page',
      }}
    >
      <Row gutter={[16, 16]}>
        {teamData.map((member,index)=>(
          <Col span={8} key={index}>
            <Card style={{ height: 350 }}>
              <Avatar size={120} src={member.image}></Avatar>
              <h1>{member.name}</h1>
              <h2>{member.title}</h2>
              <p style={{color:"grey"}}>{member.desc}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </PageContainer>
  );
};

export default TeamPage;