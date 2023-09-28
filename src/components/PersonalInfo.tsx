import { Fragment, useContext } from 'react';
import { GlobalStateContext } from '../contexts/GlobalState';
import { PersonalInformation, PersonalInformationItem } from '../interfaces';
import FormBit from './FormBit';
import { Divider, Skeleton } from 'antd';

const PersonalInfo = () => {
  const context = useContext(GlobalStateContext);
  console.log('context: ', context);

  const personalInformation: PersonalInformation = context?.data?.attributes
    ?.personalInformation as PersonalInformation;

  const personalInfoList: { title: string; internalUse: boolean; show: boolean }[] =
    personalInformation &&
    Object.entries(personalInformation)
      .filter(([title]) => title !== 'personalQuestions')
      .map(([title, info]) => ({
        title,
        ...(info as PersonalInformationItem),
      }));

  if (!context?.data)
    return (
      <>
        <Skeleton.Button active block={true} size='large' shape='square' /> <Divider />
        <Skeleton.Button active block={true} size='large' shape='square' /> <Divider />
        <Skeleton.Button active block={true} size='large' shape='square' /> <Divider />
        <Skeleton.Button active block={true} size='large' shape='square' /> <Divider />
      </>
    );

  return (
    <>
      {personalInformation &&
        personalInfoList.map((personalInfoItem) => (
          <Fragment key={personalInfoItem.title}>
            <FormBit {...personalInfoItem} />
            <Divider />
          </Fragment>
        ))}
    </>
  );
};

export default PersonalInfo;
