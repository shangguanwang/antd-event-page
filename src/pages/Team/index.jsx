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
      <Row>
        {teamData.map((member,index)=>(
          <Col xs={24} md={8} key={index}>
            <Card style={{ height: 350, margin:10 }}>
              <Avatar size={{xs: 80, xl: 120, xxl: 120}} src={member.image}></Avatar>
              <h2 style={{marginBottom:0}}>{member.name}</h2>
              <h3>{member.title}</h3>
              <p style={{color:"grey"}}>{member.desc}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </PageContainer>
  );
};

export default TeamPage;