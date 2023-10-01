import './App.css';
import AppLayout from './components/AppLayout';
import CardWrapper from './components/CardWrapper';
import CustomizedQuestions from './components/CustomizedQuestion';
import PersonalInfo from './components/PersonalInfo';
import ProfileInfo from './components/ProfileInfo';
import UploadImage from './components/UploadImage';

function App() {
  return (
    <>
      <AppLayout>
        <>
          <CardWrapper title='Upload Cover Image' children={<UploadImage />} addQuestion={false} />
          <CardWrapper title='Personal Information' children={<PersonalInfo />} />
          <CardWrapper title='Profile' children={<ProfileInfo />} />
          <CardWrapper title='Additional Questions' children={<CustomizedQuestions />} />
        </>
      </AppLayout>
    </>
  );
}

export default App;
