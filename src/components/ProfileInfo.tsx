import { Fragment, useContext, useEffect, useState } from 'react';
import { GlobalContextType, GlobalStateContext } from '../contexts/GlobalState';
import { Profile, ProfileItem, ProfileQuestion } from '../interfaces';
import FormBit from './FormBit';
import { Divider, Skeleton } from 'antd';
import QuestionHeader from './QuestionHeader';

const ProfileInfo = () => {
  const context = useContext<GlobalContextType>(GlobalStateContext);

  const [profileInformationList, setProfileInformationList] = useState<
    { title: string; show: boolean }[] | undefined
  >(undefined);
  const [profileQuestionsList, setProfileQuestionsList] = useState<ProfileQuestion[] | undefined>(
    undefined,
  );

  useEffect(() => {
    const profileInformation: Profile = context?.data?.attributes?.profile as Profile;

    setProfileInformationList(
      profileInformation &&
        Object.entries(profileInformation)
          .filter(([title]) => title !== 'profileQuestions')
          .map(([title, info]) => ({
            title,
            ...(info as ProfileItem),
          })),
    );

    setProfileQuestionsList(
      profileInformation &&
        Object.entries(profileInformation).filter(
          ([title]) => title === 'profileQuestions',
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

  console.log('profileQuestionsList: ', profileQuestionsList);
  return (
    <>
      {profileInformationList &&
        profileInformationList.map((profileInfoItem) => (
          <Fragment key={profileInfoItem.title}>
            <FormBit {...profileInfoItem} />
            <Divider />
          </Fragment>
        ))}
      {profileQuestionsList &&
        profileQuestionsList.map((profileQuestion) => {
          return <QuestionHeader key={profileQuestion.id} question={profileQuestion} />;
        })}
    </>
  );
};

export default ProfileInfo;
