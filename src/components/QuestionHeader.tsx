import { Col, Row, Typography } from 'antd';
import { PersonalQuestion } from '../interfaces';
import { EditOutlined } from '@ant-design/icons';

const QuestionHeader = ({ question }: { question: PersonalQuestion }) => {
  return (
    <>
      <Typography.Paragraph style={{ marginBottom: '0', color: 'GrayText' }}>
        {question.type}
      </Typography.Paragraph>
      <Row>
        <Col span={20}>
          <Typography.Title level={3} style={{ margin: 0, textTransform: 'capitalize' }}>
            {question.question}
          </Typography.Title>
        </Col>
        <EditOutlined colSpan={1} style={{ fontSize: '20px', cursor: 'pointer' }} />
      </Row>
    </>
  );
};

export default QuestionHeader;
