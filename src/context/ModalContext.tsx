import { PropsWithChildren, createContext, useContext, useRef } from "react";

interface IModalContext {
  productModalRef: React.RefObject<HTMLDialogElement>;
}
const ModalContext = createContext({} as IModalContext);

export default function ModalProvider({ children }: PropsWithChildren) {
  const productModalRef = useRef<HTMLDialogElement>(null);
  return (
    <ModalContext.Provider value={{ productModalRef }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModalContext() {
  return useContext(ModalContext);
}
