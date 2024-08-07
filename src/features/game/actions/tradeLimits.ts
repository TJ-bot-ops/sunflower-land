import { InventoryItemName } from "../types/game";

export const TRADE_LIMITS: Partial<Record<InventoryItemName, number>> = {
  Sunflower: 2000,
  Potato: 2000,
  Pumpkin: 2000,
  Carrot: 2000,
  Cabbage: 2000,
  Soybean: 2000,
  Beetroot: 1000,
  Cauliflower: 1000,
  Parsnip: 1000,
  Eggplant: 1000,
  Corn: 1000,
  Radish: 500,
  Wheat: 500,
  Kale: 500,
  Tomato: 300,
  Lemon: 250,
  Blueberry: 200,
  Orange: 200,
  Apple: 200,
  Banana: 200,
  Grape: 100,
  Rice: 100,
  Olive: 100,
  Wood: 500,
  Stone: 200,
  Iron: 200,
  Gold: 100,
  Egg: 500,
  Honey: 100,
  Crimstone: 20,
  "Goblin Emblem": 200,
  "Sunflorian Emblem": 200,
  "Bumpkin Emblem": 200,
  "Nightshade Emblem": 200,
};

export const TRADE_MINIMUMS: Partial<Record<InventoryItemName, number>> = {
  Sunflower: 200,
  Potato: 200,
  Pumpkin: 100,
  Carrot: 100,
  Cabbage: 100,
  Soybean: 50,
  Beetroot: 50,
  Cauliflower: 50,
  Parsnip: 20,
  Eggplant: 20,
  Corn: 20,
  Radish: 10,
  Wheat: 10,
  Kale: 10,
  Tomato: 5,
  Blueberry: 5,
  Orange: 5,
  Apple: 5,
  Banana: 5,
  Lemon: 5,
  Grape: 5,
  Rice: 5,
  Olive: 5,
  Wood: 50,
  Stone: 10,
  Iron: 5,
  Gold: 3,
  Egg: 10,
  Honey: 5,
  Crimstone: 1,
  "Goblin Emblem": 1,
  "Sunflorian Emblem": 1,
  "Bumpkin Emblem": 1,
  "Nightshade Emblem": 1,
};