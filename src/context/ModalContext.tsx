import {
  PropsWithChildren,
  createContext,
  useContext,
  useRef,
  useState,
} from "react";

interface IModalContext {
  productModalRef: React.RefObject<HTMLDialogElement>;
  productId: string;
  setProductId(productId: string): void;
}
const ModalContext = createContext({} as IModalContext);

export default function ModalProvider({ children }: PropsWithChildren) {
  const productModalRef = useRef<HTMLDialogElement>(null);
  const [productId, setProductId] = useState("");
  return (
    <ModalContext.Provider value={{ productId, setProductId, productModalRef }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModalContext() {
  return useContext(ModalContext);
}
