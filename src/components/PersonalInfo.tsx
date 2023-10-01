import { Fragment, useContext, useEffect, useState } from 'react';
import { GlobalContextType, GlobalStateContext } from '../contexts/GlobalState';
import { PersonalInformation, PersonalInformationItem, PersonalQuestion } from '../interfaces';
import FormBit from './FormBit';
import { Divider, Skeleton } from 'antd';
import QuestionHeader from './QuestionHeader';

const PersonalInfo = () => {
  const context = useContext<GlobalContextType>(GlobalStateContext);
  console.log('data: ', context.data);

  const [personalInformationList, setPersonalInformationList] = useState<
    { title: string; internalUse: boolean; show: boolean }[] | undefined
  >(undefined);
  const [personalQuestionsList, setPersonalQuestionsList] = useState<
    PersonalQuestion[] | undefined
  >(undefined);

  useEffect(() => {
    const personalInformation: PersonalInformation = context?.data?.attributes
      ?.personalInformation as PersonalInformation;

    setPersonalInformationList(
      personalInformation &&
        Object.entries(personalInformation)
          .filter(([title]) => title !== 'personalQuestions')
          .map(([title, info]) => ({
            title,
            ...(info as PersonalInformationItem),
          })),
    );

    setPersonalQuestionsList(
      personalInformation &&
        Object.entries(personalInformation).filter(
          ([title]) => title === 'personalQuestions',
        )?.[0][1],
    );
  }, [context?.data]);

  if (!context?.data)
    return (
      <>
        <Skeleton.Button active block={true} size='large' shape='square' /> <Divider />
        <Skeleton.Button active block={true} size='large' shape='square' /> <Divider />
        <Skeleton.Button active block={true} size='large' shape='square' /> <Divider />
        <Skeleton.Button active block={true} size='large' shape='square' /> <Divider />
      </>
    );

  console.log('personalQuestionsList: ', personalQuestionsList);
  return (
    <>
      {personalInformationList &&
        personalInformationList.map((personalInfoItem) => (
          <Fragment key={personalInfoItem.title}>
            <FormBit {...personalInfoItem} />
            <Divider />
          </Fragment>
        ))}
      {personalQuestionsList &&
        personalQuestionsList.map((personalQuestion) => {
          return <QuestionHeader key={personalQuestion.id} question={personalQuestion} />;
        })}
    </>
  );
};

export default PersonalInfo;
