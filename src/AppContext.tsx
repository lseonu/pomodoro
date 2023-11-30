import React, { createContext, useState, FunctionComponent, ReactNode } from 'react';

// Define the shape of the context data
interface IAppContext {
  shoppingList: string[];
  addToShoppingList: (itemName: string) => void;
  fridgeItems: IFridgeItem[];
  addToFridge: (itemName: string, quantity: number, expirationDate: string) => void;
}

// Define the shape of the fridge item
interface IFridgeItem {
  itemName: string;
  quantity: number;
  expirationDate: string;
}

// Create the context with a default value
export const AppContext = createContext<IAppContext>({
  shoppingList: [],
  addToShoppingList: () => {},
  fridgeItems: [],
  addToFridge: () => {},
});

// Define the props for the provider component
interface AppProviderProps {
  children: ReactNode;
}

// Create the provider component with TypeScript props
export const AppProvider: FunctionComponent<AppProviderProps> = ({ children }) => {
  const [shoppingList, setShoppingList] = useState<string[]>([]);
  const [fridgeItems, setFridgeItems] = useState<IFridgeItem[]>([]);

  const addToShoppingList = (itemName: string) => {
    setShoppingList((currentList) => [...currentList, itemName]);
  };

  const addToFridge = (itemName: string, quantity: number, expirationDate: string) => {
    setFridgeItems((currentItems) => [...currentItems, { itemName, quantity, expirationDate }]);
  };

  // The value object now has a shape that TypeScript understands
  return (
    <AppContext.Provider value={{ shoppingList, addToShoppingList, fridgeItems, addToFridge }}>
      {children}
    </AppContext.Provider>
  );
};
