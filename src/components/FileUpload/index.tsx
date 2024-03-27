'use client';

import React from 'react';
import { LuUpload } from 'react-icons/lu';
import { toast } from 'react-toastify';

import { useProcessedFile } from '../../hooks/useProcessedFile';
import api from '../../lib/axios/api';

export const FileUpload: React.FC = () => {
  const { isLoading, updateIsLoading, getProcessedFilesList } = useProcessedFile();

  const uploadPhotoHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    updateIsLoading(true);

    if (!event.target.files) {
      updateIsLoading(false);
      toast.warn('Nenhum arquivo selecionado!');
      return;
    }

    const file = event.target.files[0];

    if (file.type !== 'text/csv') {
      updateIsLoading(false);
      toast.warn('Selecione um arquivo em formato .csv!');
      return;
    }

    const formData = new FormData();

    formData.append('file', file);

    await api
      .post(`/api/v1/document/input-csv`, formData)
      .then(response => {
        if (response) {
          getProcessedFilesList();
          toast.success('Arquivo processado com sucesso!');
        }
      })
      .catch(e => toast.warn(`Error ao processar o arquivo: ${e.message}`));
  };

  return (
    <div className="mx-4 mt-5 min-w-[400px] rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className={`p-4 ${isLoading ? 'opacity-30' : 'opacity-100'}`}>
        <div className="mb-4 flex items-center justify-start gap-3">
          <div className="flex flex-col items-start">
            {isLoading ? (
              <div className="flex flex-row items-center gap-1">
                <span data-testid="loadingText">Carregando...</span>
              </div>
            ) : (
              <span className="font-bold text-secondary dark:text-white">Carregar Arquivo</span>
            )}
          </div>
        </div>

        <label
          htmlFor="profile"
          className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border-2 border-dashed border-primary bg-gray p-4 sm:py-7.5 dark:bg-meta-4">
          <input
            type="file"
            name="profile"
            id="profile"
            onChange={uploadPhotoHandler}
            className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
          />
          <div className="flex flex-col items-center justify-center space-y-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
              <LuUpload className="text-primary" />
            </span>
            <p>
              <span className="text-primary">Clique</span> ou arraste e solte
            </p>
            <p className="mt-1.5">CSV</p>
            <p>(max, 200MB)</p>
          </div>
        </label>
      </div>
    </div>
  );
};
