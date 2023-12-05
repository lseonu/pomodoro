import React, { useState, FunctionComponent } from "react";
import {
  AppProviderProps,
  IFridgeItem,
  IFreezerItem,
  IPantryItem,
  AppContext,
} from "./AppContext";

export const AppProvider: FunctionComponent<AppProviderProps> = ({
  children,
}) => {
  const [shoppingList, setShoppingList] = useState<string[]>([]);
  const [fridgeItems, setFridgeItems] = useState<IFridgeItem[]>([]);
  const [freezerItems, setFreezerItems] = useState<IFreezerItem[]>([]); // New state for freezer items
  const [pantryItems, setPantryItems] = useState<IPantryItem[]>([]); // New state for pantry items

  const addToShoppingList = (itemName: string) => {
    setShoppingList((currentList) => [...currentList, itemName]);
  };

  const addToFridge = (itemName: string, expirationDate: string) => {
    setFridgeItems((currentItems) => [
      ...currentItems,
      { itemName, expirationDate },
    ]);
  };

  const addToFreezer = (itemName: string, expirationDate: string) => {
    setFreezerItems((currentItems) => [
      ...currentItems,
      { itemName, expirationDate },
    ]);
  };

  const addToPantry = (itemName: string, expirationDate: string) => {
    setPantryItems((currentItems) => [
      ...currentItems,
      { itemName, expirationDate },
    ]);
  };

  return (
    <AppContext.Provider
      value={{
        shoppingList,
        addToShoppingList,
        fridgeItems,
        addToFridge,
        freezerItems, // Providing freezer items and the function to add items
        addToFreezer,
        pantryItems, // Providing pantry items and the function to add items
        addToPantry,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
