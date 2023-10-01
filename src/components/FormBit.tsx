import { Checkbox, Col, Row, Switch, Typography } from 'antd';
import { useState } from 'react';
import { camelCaseToTitleCase } from '../utils/index';

type Props = {
  title: string;
  instruction?: string;
  show?: boolean;
  internalUse?: boolean;
  mandatory?: boolean;
};

type State = {
  show?: boolean;
  internalUse?: boolean;
  mandatory?: boolean;
};

const FormBit = ({ title, instruction, internalUse, show, mandatory }: Props) => {
  const [data, setData] = useState<State>({
    internalUse,
    show,
    mandatory,
  });

  const handleChange = (key: 'internalUse' | 'show' | 'mandatory', value: boolean) => () =>
    setData((data) => ({ ...data, [key]: value }));

  return (
    <>
      <Row>
        <Col span={12}>
          <Typography.Title level={5} style={{ margin: 0, textTransform: 'capitalize' }}>
            {camelCaseToTitleCase(title)}
            {instruction && <Typography.Paragraph italic>({instruction})</Typography.Paragraph>}
          </Typography.Title>
        </Col>
        <Col span={12}>
          <Row>
            <Col span={12}>
              {internalUse !== null && internalUse !== undefined && (
                <Checkbox
                  onChange={handleChange('internalUse', !data.internalUse)}
                  checked={data.internalUse}>
                  Internal
                </Checkbox>
              )}
              {mandatory !== null && mandatory !== undefined && (
                <Checkbox
                  onChange={handleChange('mandatory', !data.mandatory)}
                  checked={data.mandatory}>
                  Mandatory
                </Checkbox>
              )}
            </Col>
            <Col span={12}>
              {show !== null && show !== undefined && (
                <Row>
                  <Col span={12}>
                    <Switch onChange={handleChange('show', !data.show)} checked={data.show} />
                  </Col>
                  <Col span={12}>{show ? 'show' : 'hide'}</Col>
                </Row>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default FormBit;
