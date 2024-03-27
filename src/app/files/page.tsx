import React from 'react';

import { FileUpload } from '@/components/FileUpload';
import { ProcessedFilesTable } from '@/components/ProcessedFilesTable';

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-white lg:flex-row lg:items-start lg:justify-around dark:bg-boxdark-2 dark:text-bodydark">
      <FileUpload />
      <ProcessedFilesTable />
    </div>
  );
}
