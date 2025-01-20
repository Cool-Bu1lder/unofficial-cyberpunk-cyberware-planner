import { useState, useEffect } from "react";
import "./App.css";

import Nav from "./components/Nav";
import GridLayout from "./components/GridLayout";

const CYBERWARE = [
  {
    name: "Legs",
    slots: [null],
    items: [
      { name: "Legs A", armor: 10 },
      { name: "Legs B", armor: 20 },
      { name: "Legs C", armor: 30 },
    ],
  },
  {
    name: "Foo",
    slots: [null, null],
    items: [
      { name: "Foo A", armor: 15 },
      { name: "Foo B", armor: 25 },
      { name: "Foo C", armor: 35 },
      { name: "Foo D", armor: 45 },
      { name: "Foo E", armor: 55 },
    ],
  },
  {
    name: "Bar",
    slots: [null, null, null],
    items: [
      { name: "Bar A", armor: 28 },
      { name: "Bar B", armor: 38 },
      { name: "Bar C", armor: 48 },
      { name: "Bar D", armor: 58 },
      { name: "Bar E", armor: 68 },
    ],
  },
];

function App() {
  const [currentCyberwareIndex, setCurrentCyberwareIndex] = useState(0);
  const currentCyberware = CYBERWARE[currentCyberwareIndex];

  const [equippedItems, setEquippedItems] = useState(currentCyberware.slots);
  const [inventoryItems, setInventoryItems] = useState(currentCyberware.items);

  const handleEquipItem = (item) => {
    const firstEmptyIndex = equippedItems.indexOf(null);
    if (firstEmptyIndex !== -1) {
      const updatedEquipped = [...equippedItems];
      updatedEquipped[firstEmptyIndex] = item;

      setEquippedItems(updatedEquipped);
      setInventoryItems(inventoryItems.filter((i) => i !== item));
    }
  };

  const handleUnequipItem = (index) => {
    const updatedEquipped = [...equippedItems];
    const itemToUnequip = updatedEquipped[index];
    updatedEquipped[index] = null;

    setEquippedItems(updatedEquipped);
    setInventoryItems([...inventoryItems, itemToUnequip]);
  };

  useEffect(() => {
    setEquippedItems(currentCyberware.slots);
    setInventoryItems(currentCyberware.items);
  }, [currentCyberware]);

  return (
    <>
      <h1>Cyberware Planner</h1>
      <div className="cyberware-container">
        <Nav
          setIndex={setCurrentCyberwareIndex}
          max={CYBERWARE.length}
          title={CYBERWARE[currentCyberwareIndex].name}
        />
        <GridLayout
          items={equippedItems}
          isEquipped={true}
          onItemClick={(index) => handleUnequipItem(index)}
        />
        <GridLayout
          items={inventoryItems}
          isEquipped={false}
          onItemClick={(_, item) => handleEquipItem(item)}
        />
      </div>
    </>
  );
}

export default App;
