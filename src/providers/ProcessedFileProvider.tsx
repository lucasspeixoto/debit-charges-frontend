/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-empty-function */

'use client';

import React, { createContext } from 'react';

import api from '../lib/axios/api';
import type { ProcessedFile } from '../types/processed-file';

const initialValues = {
  files: [],
  isLoading: false,
  updateIsLoading: () => {},
  getProcessedFilesList: async () => {},
};

type ProcessedFileType = {
  files: ProcessedFile[];
  isLoading: boolean;
  updateIsLoading: (isLoading: boolean) => void;
  getProcessedFilesList: () => void;
};

export const ProcessedFileContext = createContext<ProcessedFileType>(initialValues);

export const ProcessedFileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [files, setFiles] = React.useState<ProcessedFile[]>([]);

  const [isLoadingFile, setIsLoadingFile] = React.useState(false);

  const updateIsLoading = (isLoading: boolean) => {
    setIsLoadingFile(isLoading);
  };

  const getProcessedFilesList = async () => {
    const response = await api.get(`/api/v1/files`);

    if (response.data) {
      const fileData = response.data as ProcessedFile[];
      setFiles(fileData);
      updateIsLoading(false);
    }
  };

  React.useEffect(() => {
    let mounted = true;

    updateIsLoading(true);

    (async () => {
      if (mounted) {
        await getProcessedFilesList();
      }
    })();

    return () => {
      mounted = false;
      updateIsLoading(false);
    };
  }, [setFiles]);

  return (
    <ProcessedFileContext.Provider
      value={{
        files,
        isLoading: isLoadingFile,
        updateIsLoading,
        getProcessedFilesList,
      }}>
      <>{children}</>
    </ProcessedFileContext.Provider>
  );
};
