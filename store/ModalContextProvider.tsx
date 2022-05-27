import { createContext, useContext, useEffect, useState } from "react"; 


export interface ContextProps {
  cartOpen: boolean;
  checkoutOpen: boolean;
  handleShowCart: () => void;
  handleHideCart: () => void;
  handleShowCheckout: () => void;
  handleHideCheckout: () => void;
};

const initialState = {
  cartOpen: false,
  checkoutOpen: false,
  handleShowCart: () => undefined,
  handleHideCart: () => undefined,
  handleShowCheckout: () => undefined,
  handleHideCheckout: () => undefined,
};

const ModalContext = createContext<ContextProps>(initialState);



export const useModal = (): ContextProps => {
  return useContext(ModalContext);
};

const ModalContextProvider = ({ children }: any): JSX.Element => {
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);


       useEffect(() => {
         cartOpen || checkoutOpen
           ? (document.body.style.overflowY = "hidden")
           : (document.body.style.overflowY = "initial");
       }, [cartOpen, checkoutOpen]);

      const handleShowCart = () => {
        setCartOpen(true)
      }

       const handleHideCart = () => {
         setCartOpen(false);
       };

       const handleShowCheckout = () => {
         setCheckoutOpen(true)
       }

        const handleHideCheckout = () => {
          setCheckoutOpen(false);
        };

  return (
    <ModalContext.Provider
      value={{
        cartOpen,
        checkoutOpen,
        handleShowCart,
        handleHideCart,
        handleShowCheckout,
        handleHideCheckout,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
export default ModalContextProvider;