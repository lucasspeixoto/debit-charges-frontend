'use client';

import React from 'react';

import { useProcessedFile } from '../../hooks/useProcessedFile';
import { longDateConvert } from '../../utils/transform-date';

export const ProcessedFilesTable: React.FC = () => {
  const { files, isLoading } = useProcessedFile();

  return (
    <div className="h-screen">
      <div className="overflow-y mx-4 my-5 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ">
        <h2 className="mx-2 my-4 font-bold text-secondary">Arquivos Processados ({files.length})</h2>
        <div className="max-w-full overflow-x-auto">
          <table className={`${isLoading ? 'opacity-10' : 'opacity-100'}`}>
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[220px] p-4 font-semibold text-black dark:text-white">Nome Arquivo</th>
                <th className="min-w-[150px] p-4 font-semibold text-black dark:text-white">Tamanho arquivo</th>
                <th className="min-w-[120px] p-4 font-semibold text-black dark:text-white">Débitos processados</th>
                <th className="min-w-[120px] p-4 font-semibold text-black dark:text-white">Cadastro</th>
              </tr>
            </thead>
            <tbody>
              {React.Children.toArray(
                files.map(file => (
                  <tr>
                    <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                      <p className="text-black dark:text-white">{file.fileName}</p>
                    </td>
                    <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                      <p className="text-black dark:text-white">{(file.fileSize / 1000000).toFixed(2)} Mb</p>
                    </td>
                    <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                      <p className="text-black dark:text-white">{file.processedDebits}</p>
                    </td>
                    <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                      <p className="text-black dark:text-white">{longDateConvert(file.createdAt)}</p>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
