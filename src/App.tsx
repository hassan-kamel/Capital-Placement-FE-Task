import './App.css';
import AppLayout from './components/AppLayout';
import CardWrapper from './components/CardWrapper';
import PersonalInfo from './components/PersonalInfo';
import UploadImage from './components/UploadImage';

function App() {
  return (
    <>
      <AppLayout>
        <>
          <CardWrapper title='Upload Cover Image' children={<UploadImage />} />
          <CardWrapper title='Personal Information' children={<PersonalInfo />} />
        </>
      </AppLayout>
    </>
  );
}

export default App;
