"use client";

import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "@/redux/store";

export default function ReduxPersistProvider({ children }: { children: React.ReactNode }) {
  return (
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  );
}
