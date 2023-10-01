import { Card, Col, Row, Typography, theme } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  title: string;
  addQuestion?: boolean;
};

const CardWrapper = ({ children, title, addQuestion = true }: Props) => {
  const {
    token: { colorInfoBg },
  } = theme.useToken();

  return (
    <Card
      headStyle={{ backgroundColor: colorInfoBg }}
      title={title}
      bordered={false}
      style={{ width: '500px', marginBottom: '50px' }}>
      {children}
      {addQuestion && (
        <Row style={{ marginTop: '30px', alignItems: 'center', gap: '20px', cursor: 'pointer' }}>
          <Col span={1}>
            <PlusOutlined style={{ fontSize: '20px' }} />
          </Col>
          <Col>
            <Typography style={{ fontSize: '15px', fontWeight: 'bold' }}>Add a question</Typography>
          </Col>
        </Row>
      )}
    </Card>
  );
};

export default CardWrapper;
