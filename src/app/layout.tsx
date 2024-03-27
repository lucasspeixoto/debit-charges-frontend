import './css/globals.css';
import './css/data-tables-css.css';
import './css/satoshi.css';
import './css/override.css';

import React from 'react';

import { ProcessedFileProvider } from '@/providers/ProcessedFileProvider';
import { ToastProvider } from '@/providers/ToastProvider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body>
        <div className="w-full bg-white dark:bg-boxdark-2 dark:text-bodydark">
          <main>
            <div className="z-20 w-full overflow-auto">
              <ToastProvider>
                <ProcessedFileProvider>{children}</ProcessedFileProvider>
              </ToastProvider>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
