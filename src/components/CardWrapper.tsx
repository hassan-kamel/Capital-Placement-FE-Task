import { Card, theme } from 'antd';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  title: string;
};

const CardWrapper = ({ children, title }: Props) => {
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
    </Card>
  );
};

export default CardWrapper;
