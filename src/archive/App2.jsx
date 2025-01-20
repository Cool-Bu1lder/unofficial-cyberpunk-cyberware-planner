import { useState, useEffect } from "react";
import "./App.css";

import Nav from "./components/Nav";
import GridLayout from "./components/GridLayout";
import ProgressBar from "./components/ProgressBar";

import { indexToLetter, letterToIndex } from "./utilities/decode";

import cyberware from "./lib";

function App() {
  //console.log(cyberware)

  const [trigger, setTrigger] = useState(false);

  const [cyberwareStates, setCyberwareStates] = useState(() =>
    cyberware.map((type) => ({
      equippedItems: [...type.slots],
      inventoryItems: [...type.items],
    }))
  );

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const convertedParams = [];

    queryParams.forEach((value, key) => {
      const letterNumber = letterToIndex(key);
      convertedParams[letterNumber] = value
        .split("")
        .map((char) => letterToIndex(char));
    });

    const updatedCyberwareStates = cyberwareStates.map((state) => ({
      equippedItems: [...state.equippedItems],
      inventoryItems: [...state.inventoryItems],
    }));

    convertedParams.forEach((itemKeys, cyberwareType) => {
      if (cyberware[cyberwareType]) {
        itemKeys.forEach((itemKey, slotKey) => {
          const item = cyberware[cyberwareType].items[itemKey];
          if (item) {
            updatedCyberwareStates[cyberwareType].equippedItems[slotKey] = item;
          }
        });

        // Update inventoryItems by excluding equipped items
        const equippedIds = updatedCyberwareStates[cyberwareType].equippedItems
          .filter((equippedItem) => equippedItem !== null)
          .map((equippedItem) => equippedItem.id);

        updatedCyberwareStates[cyberwareType].inventoryItems = cyberware[
          cyberwareType
        ].items.filter(
          (inventoryItem) => !equippedIds.includes(inventoryItem.id)
        );
      }
    });

    setCyberwareStates(updatedCyberwareStates);
  }, [trigger]);

  const [currentCyberwareIndex, setCurrentCyberwareIndex] = useState(0);

  const currentCyberwareState = cyberwareStates[currentCyberwareIndex];

  const calculateTotalArmor = () => {
    return cyberwareStates.reduce((total, state) => {
      const equippedArmor = state.equippedItems.reduce(
        (sum, item) => sum + (item ? item.armor || 0 : 0),
        0
      );
      return total + equippedArmor;
    }, 0);
  };

  const calculateTotalCapacity = () => {
    return cyberwareStates.reduce((total, state) => {
      const equippedCapacity = state.equippedItems.reduce(
        (sum, item) => sum + (item ? item.capacity || 0 : 0),
        0
      );
      return total + equippedCapacity;
    }, 0);
  };

  const handleEquipItem = (item) => {
    const firstEmptyIndex = currentCyberwareState.equippedItems.indexOf(null);
    if (firstEmptyIndex !== -1) {
      /*const updatedEquipped = [...currentCyberwareState.equippedItems];
      updatedEquipped[firstEmptyIndex] = item;

      const equippedIds = updatedEquipped
        .filter((equippedItem) => equippedItem !== null)
        .map((equippedItem) => equippedItem.id);

      const updatedInventory = cyberware[currentCyberwareIndex].items.filter(
        (inventoryItem) => !equippedIds.includes(inventoryItem.id)
      );

      setCyberwareStates((prev) =>
        prev.map((state, index) =>
          index === currentCyberwareIndex
            ? {
                equippedItems: updatedEquipped,
                inventoryItems: updatedInventory,
              }
            : state
        )
      );*/

      const url = new URL(window.location.href);
      const key = indexToLetter(currentCyberwareIndex);
      const currentValue = url.searchParams.get(key);

      if (currentValue) {
        const newLetter = indexToLetter(item.id);
        if (!currentValue.includes(newLetter)) {
          const newValue = `${currentValue}${newLetter}`;
          url.searchParams.set(key, newValue);
        }
      } else {
        const newLetter = indexToLetter(item.id);
        url.searchParams.set(key, newLetter);
      }

      window.history.pushState({}, "", url);

      setTrigger((prev) => !prev);
    }
  };

  const handleUnequipItem = (item) => {
    const url = new URL(window.location.href);
    const key = indexToLetter(currentCyberwareIndex);
    const currentValue = url.searchParams.get(key);

    if (currentValue) {
      const letterToRemove = indexToLetter(item.id);

      const newValue = currentValue.replace(letterToRemove, "");
      url.searchParams.set(key, newValue);

      if (newValue === "") {
        url.searchParams.delete(key);
      }
      /*if (newValue !== currentValue) {
        
      } else {
        url.searchParams.delete(key);
      }*/
    }

    window.history.pushState({}, "", url);

    setTrigger((prev) => !prev);
    /*const updatedEquipped = [...currentCyberwareState.equippedItems];
    const itemToUnequip = updatedEquipped[index];
    updatedEquipped[index] = null;

    const updatedInventory = [
      ...currentCyberwareState.inventoryItems,
      itemToUnequip,
    ];

    setCyberwareStates((prev) =>
      prev.map((state, index) =>
        index === currentCyberwareIndex
          ? { equippedItems: updatedEquipped, inventoryItems: updatedInventory }
          : state
      )
    );*/
  };

  const totalArmor = calculateTotalArmor();
  const totalCapacity = calculateTotalCapacity();

  return (
    <>
      <h1>Cyberware Planner</h1>
      <div className="cyberware-container">
        <Nav
          setIndex={setCurrentCyberwareIndex}
          max={cyberware.length}
          title={cyberware[currentCyberwareIndex].name}
        />
        <GridLayout
          items={currentCyberwareState.equippedItems}
          isEquipped={true}
          onItemClick={(_, item) => handleUnequipItem(item)}
        />
        <GridLayout
          items={currentCyberwareState.inventoryItems}
          isEquipped={false}
          onItemClick={(_, item) => handleEquipItem(item)}
        />
      </div>
      <ProgressBar value={totalCapacity} max={500} position="left" />
      <ProgressBar value={totalArmor} max={1200} position="right" />
    </>
  );
}

export default App;
