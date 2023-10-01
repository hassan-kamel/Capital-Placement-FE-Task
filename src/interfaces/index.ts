interface PersonalInformationItem {
  internalUse: boolean;
  show: boolean;
}

interface PersonalQuestion {
  type: string;
  question: string;
  id: string;
  choices: string[];
  maxChoice: number;
  disqualify: boolean;
  other: boolean;
}

interface PersonalInformation {
  firstName: PersonalInformationItem;
  lastName: PersonalInformationItem;
  emailId: PersonalInformationItem;
  phoneNumber: PersonalInformationItem;
  nationality: PersonalInformationItem;
  currentResidence: PersonalInformationItem;
  idNumber: PersonalInformationItem;
  dateOfBirth: PersonalInformationItem;
  gender: PersonalInformationItem;
  personalQuestions: PersonalQuestion[];
}

interface ProfileItem {
  mandatory: boolean;
  show: boolean;
}

interface ProfileQuestion {
  type: string;
  question: string;
  id: string;
  choices: string[];
  maxChoice: number;
  disqualify: boolean;
  other: boolean;
}

interface Profile {
  education: ProfileItem;
  experience: ProfileItem;
  resume: ProfileItem;
  profileQuestions: ProfileQuestion[];
}

interface CustomisedQuestion {
  type: string;
  question: string;
  id: string;
  choices: string[];
  maxChoice: number;
  disqualify: boolean;
  other: boolean;
}

interface ApplicationFormAttributes {
  personalInformation: PersonalInformation;
  coverImage: string;
  profile: Profile;
  customisedQuestions: CustomisedQuestion[];
}

interface ApplicationForm {
  id: string;
  type: string;
  attributes: ApplicationFormAttributes;
}

interface ApiRequestBody {
  data: ApplicationForm;
}

export type {
  ApiRequestBody,
  ApplicationForm,
  ApplicationFormAttributes,
  CustomisedQuestion,
  PersonalInformation,
  PersonalInformationItem,
  PersonalQuestion,
  Profile,
  ProfileItem,
  ProfileQuestion,
};
