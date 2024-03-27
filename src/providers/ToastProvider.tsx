'use client';

import 'react-toastify/dist/ReactToastify.css';

import type { ReactNode } from 'react';
import React from 'react';
import { ToastContainer } from 'react-toastify';

/**
 * @summary A React component that provides a ToastContainer for displaying toasts.
 * @param children - The child elements to render inside the ToastProvider.
 * @returns A React element that wraps the child elements and provides a ToastContainer.
 */
export const ToastProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
};
