import { Checkbox, Col, Row, Switch, Typography } from 'antd';
import { useContext, useState } from 'react';
import { camelCaseToTitleCase } from '../utils/index';
import { GlobalStateContext } from '../contexts/GlobalState';

type Props = {
  title: string;
  instruction?: string;
  show?: boolean;
  internalUse?: boolean;
  mandatory?: boolean;
  profile?: boolean;
};

type State = {
  show?: boolean;
  internalUse?: boolean;
  mandatory?: boolean;
};

const FormBit = ({ title, instruction, internalUse, show, mandatory, profile = false }: Props) => {
  const { setData } = useContext(GlobalStateContext);

  const [infoItem, setInfoItem] = useState<State>({
    internalUse,
    show,
    mandatory,
  });

  const handleChange = (key: 'internalUse' | 'show' | 'mandatory', value: boolean) => () => {
    setInfoItem((infoItem) => ({ ...infoItem, [key]: value }));

    console.log('title: ', title);

    setData &&
      (profile
        ? setData((prevData) => ({
            ...prevData,
            attributes: {
              ...prevData.attributes,
              profile: {
                ...prevData.attributes.profile,
                [title]: { mandatory: infoItem.mandatory, show: infoItem.show },
              },
            },
          }))
        : setData((prevData) => ({
            ...prevData,
            attributes: {
              ...prevData.attributes,
              personalInformation: {
                ...prevData.attributes.personalInformation,
                [title]: { internalUse: infoItem.internalUse, show: infoItem.show },
              },
            },
          })));

    // setUpdate && setUpdate((prevValue) => !prevValue);
  };

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
                  onChange={handleChange('internalUse', !infoItem.internalUse)}
                  checked={infoItem.internalUse}>
                  Internal
                </Checkbox>
              )}
              {mandatory !== null && mandatory !== undefined && (
                <Checkbox
                  onChange={handleChange('mandatory', !infoItem.mandatory)}
                  checked={infoItem.mandatory}>
                  Mandatory
                </Checkbox>
              )}
            </Col>
            <Col span={12}>
              {show !== null && show !== undefined && (
                <Row>
                  <Col span={12}>
                    <Switch
                      onChange={handleChange('show', !infoItem.show)}
                      checked={infoItem.show}
                    />
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
