import { ReactNode, createContext, useEffect, useState } from 'react';
import { ApplicationForm } from '../interfaces';
import { useQuery } from '@tanstack/react-query';

const version = import.meta.env.VITE_API_GET_VERSION;
const programId = import.meta.env.VITE_API_GET_PROGRAM_ID;
const API_URL_GET = `http://localhost:3100/api/${version}/programs/${programId}/application-form`;
// const versionPUT = import.meta.env.VITE_API_PUT_VERSION;
// const programIdPUT = import.meta.env.VITE_API_PUT_PROGRAM_ID;
// const API_URL_PUT = `http://localhost:3100/api/${versionPUT}/programs/${programIdPUT}/application-form`;

export type GlobalContextType = {
  data: ApplicationForm | null;
  handlePutFormData?: (data: ApplicationForm) => void;
};

// Create the Context
const GlobalStateContext = createContext<GlobalContextType>({ data: null });

// Create the Context Provider
const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<ApplicationForm | null>(null);

  //Access the client
  //   const queryClient = useQueryClient();

  // Queries
  const { data } = useQuery({
    queryKey: ['app-form'],
    queryFn: async () => {
      const response = await fetch(API_URL_GET);
      const result = await response.json();
      return result.data;
    },
  });
  console.log('🚀 ~ file: GlobalState.tsx:25 ~ GlobalStateProvider ~ data:', data);

  useEffect(() => {
    setFormData(data);
  }, [data]);

  // Mutations
  //   const mutation = useMutation({
  //     mutationFn: async () => {
  //       const response = await fetch(API_URL_PUT, {
  //         method: 'PUT',
  //         headers: {
  //           'Content-Type': 'Application/Json',
  //         },
  //         body: JSON.stringify({ data }),
  //       });
  //       const result = await response.json();
  //       return result;
  //     },
  //     onSuccess: () => {
  //       // Invalidate and refetch
  //       queryClient.invalidateQueries({ queryKey: ['app-form'] });
  //     },
  //   });

  //   const handlePutFormData = (data: ApiRequestBody) => {
  //     mutation.mutate({ data });
  //   };

  return (
    <GlobalStateContext.Provider value={{ data: formData }}>{children}</GlobalStateContext.Provider>
  );
};

// Export the Context and Provider
export { GlobalStateContext, GlobalStateProvider };
