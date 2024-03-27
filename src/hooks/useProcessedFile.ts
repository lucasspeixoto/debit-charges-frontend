import React from 'react';

import { ProcessedFileContext } from '../providers/ProcessedFileProvider';

export const useProcessedFile = () => React.useContext(ProcessedFileContext);
