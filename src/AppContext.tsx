import { createContext, ReactNode } from "react";

// Define the shape of the fridge, freezer, and pantry items
export interface IFridgeItem {
  itemName: string;
  expirationDate: string;
}

export interface IFreezerItem {
  itemName: string;
  expirationDate: string;
}

export interface IPantryItem {
  itemName: string;
  expirationDate: string;
}

// Define the shape of the context data
interface IAppContext {
  shoppingList: string[];
  addToShoppingList: (itemName: string) => void;
  fridgeItems: IFridgeItem[];
  addToFridge: (itemName: string, expirationDate: string) => void;
  freezerItems: IFreezerItem[];
  addToFreezer: (itemName: string, expirationDate: string) => void;
  pantryItems: IPantryItem[];
  addToPantry: (itemName: string, expirationDate: string) => void;
}

// Create the context with a default value
export const AppContext = createContext<IAppContext>({
  shoppingList: [],
  addToShoppingList: () => {},
  fridgeItems: [],
  addToFridge: () => {},
  freezerItems: [], // Default value for freezer items
  addToFreezer: () => {}, // Default function for adding to freezer
  pantryItems: [], // Default value for pantry items
  addToPantry: () => {}, // Default function for adding to pantry
});

// Define the props for the provider component
export interface AppProviderProps {
  children: ReactNode;
}
