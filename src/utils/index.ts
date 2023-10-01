import { ApplicationForm } from '../interfaces';

const camelCaseToTitleCase = (input: string): string => {
  if (typeof input !== 'string' || input.length === 0) {
    return '';
  }

  // Use a regular expression to split camelCase into words
  const words: string[] = input.replace(/([a-z])([A-Z])/g, '$1 $2').split(' ');

  // Capitalize the first letter of each word and convert the rest to lowercase
  const titleCaseWords: string[] = words.map((word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  // Join the words back together with spaces
  return titleCaseWords.join(' ').replace(/\bId\b/g, 'ID');
};

// Initial Data in Case that Server doesn't work
const getInitialData = (): ApplicationForm => {
  return {
    id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
    type: 'applicationForm',
    attributes: {
      coverImage: 'http://example.com',
      personalInformation: {
        firstName: {
          internalUse: false,
          show: true,
        },
        lastName: {
          internalUse: false,
          show: true,
        },
        emailId: {
          internalUse: false,
          show: true,
        },
        phoneNumber: {
          internalUse: false,
          show: true,
        },
        nationality: {
          internalUse: false,
          show: true,
        },
        currentResidence: {
          internalUse: false,
          show: true,
        },
        idNumber: {
          internalUse: false,
          show: true,
        },
        dateOfBirth: {
          internalUse: false,
          show: true,
        },
        gender: {
          internalUse: false,
          show: true,
        },
        personalQuestions: [
          {
            id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
            type: 'Paragraph',
            question: 'string',
            choices: ['string'],
            maxChoice: 0,
            disqualify: false,
            other: false,
          },
        ],
      },
      profile: {
        education: {
          mandatory: true,
          show: true,
        },
        experience: {
          mandatory: true,
          show: true,
        },
        resume: {
          mandatory: true,
          show: true,
        },
        profileQuestions: [
          {
            id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
            type: 'Paragraph',
            question: 'string',
            choices: ['string'],
            maxChoice: 0,
            disqualify: false,
            other: false,
          },
        ],
      },
      customisedQuestions: [
        {
          id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
          type: 'Paragraph',
          question: 'string',
          choices: ['string'],
          maxChoice: 0,
          disqualify: false,
          other: false,
        },
      ],
    },
  };
};

export { camelCaseToTitleCase, getInitialData };
