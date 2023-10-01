import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from 'react';
import { ApplicationForm } from '../interfaces';
import { getInitialData } from '../utils/index';

const version = import.meta.env.VITE_API_GET_VERSION;
const programId = import.meta.env.VITE_API_GET_PROGRAM_ID;
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
const API_URL_GET = `${apiBaseUrl}/api/${version}/programs/${programId}/application-form`;
const versionPUT = import.meta.env.VITE_API_PUT_VERSION;
const programIdPUT = import.meta.env.VITE_API_PUT_PROGRAM_ID;
const API_URL_PUT = `${apiBaseUrl}/api/${versionPUT}/programs/${programIdPUT}/application-form`;

export type GlobalContextType = {
  data: ApplicationForm;
  setData?: Dispatch<SetStateAction<ApplicationForm>>;
};

// Create the Context
const GlobalStateContext = createContext<GlobalContextType>({ data: getInitialData() });

// Create the Context Provider
const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<ApplicationForm>(getInitialData());

  useEffect(() => {
    const fetchAppForm = async (url: string) => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setFormData(getInitialData());
        }
        const jsonData = await response.json();
        console.log('jsonData.data: ', jsonData.data);
        setFormData(jsonData.data);
      } catch (error) {
        setFormData(getInitialData());
      }
    };

    fetchAppForm(API_URL_GET);
  }, []);

  useEffect(() => {
    console.log('🚀 ~ file: GlobalState.tsx:25 ~ GlobalStateProvider ~ formData:', formData);

    const putNewChanges = async (url: string, data: ApplicationForm | null) => {
      try {
        const response = await fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ data }),
        });
        console.log('response: ', response);
      } catch (error) {
        console.log('error: ', JSON.stringify(error));
      }
    };
    putNewChanges(API_URL_PUT, formData);
  }, [formData]);

  return (
    <GlobalStateContext.Provider
      value={{ data: formData as ApplicationForm, setData: setFormData }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Export the Context and Provider
export { GlobalStateContext, GlobalStateProvider };
