/* 
import { letterToNumber } from "./utilities/decode";

useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const convertedParams = [];

    queryParams.forEach((value, key) => {
      const letterNumber = letterToNumber(key);
      convertedParams[letterNumber] = value.split("").map(Number);
    });

    convertedParams.forEach((item_keys, cyberwareType) => {
      if (CYBERWARE[cyberwareType]) {
        item_keys.forEach((item_key) => {
          const item = CYBERWARE[cyberwareType].items[item_key];
          if (item) {
            console.log(item);
            handleEquipItem(item); // Equip the item
          }
        });
      }
    });
  }, []);*/
