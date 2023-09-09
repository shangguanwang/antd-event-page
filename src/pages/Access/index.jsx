import { PageContainer } from '@ant-design/pro-components';
import { Card, Form, Input, Button } from 'antd';

const AccessPage = () => {
  return (
    <PageContainer
      header={{
        title: 'Settings',
      }}
    >
        <Card title="Change User Settings" style={{ width: 600 }}>
          <Form name="user_settings" layout="vertical"
          onFinish={(values)=>{
            console.log('User Input Received', values);
          }}>
            <Form.Item
              name="username"
              label="User Name"
              rules={[
                {required: true,
                message: 'Please enter your user name'}
              ]}>
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                {required: true,
                message: 'Please enter your password'}
              ]}>
              <Input />
            </Form.Item>
              <Button type="primary" htmlType="submit">Save</Button>
          </Form>
        </Card>
    </PageContainer>
  );
};

export default AccessPage;
