import { useContext, useEffect, useState } from 'react';
import { GlobalContextType, GlobalStateContext } from '../contexts/GlobalState';
import { CustomisedQuestion } from '../interfaces';

import { Divider, Skeleton } from 'antd';
import QuestionHeader from './QuestionHeader';

const CustomizedQuestions = () => {
  const context = useContext<GlobalContextType>(GlobalStateContext);

  const [formCustomizedQuestions, setFormCustomizedQuestions] = useState<
    CustomisedQuestion[] | undefined
  >(undefined);

  useEffect(() => {
    console.log('context: ', context);

    setFormCustomizedQuestions(context.data?.attributes?.customisedQuestions);
  }, [context]);

  if (!context?.data)
    return (
      <>
        <Skeleton.Button active block={true} size='large' shape='square' /> <Divider />
        <Skeleton.Button active block={true} size='large' shape='square' /> <Divider />
        <Skeleton.Button active block={true} size='large' shape='square' /> <Divider />
        <Skeleton.Button active block={true} size='large' shape='square' /> <Divider />
      </>
    );

  console.log('formCustomizedQuestions: ', formCustomizedQuestions);
  return (
    <>
      {formCustomizedQuestions &&
        formCustomizedQuestions.map((customizedQuestion) => {
          return <QuestionHeader key={customizedQuestion.id} question={customizedQuestion} />;
        })}
    </>
  );
};

export default CustomizedQuestions;
