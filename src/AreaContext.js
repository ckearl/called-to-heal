import { createContext } from "react";

export const AreaContext = createContext({
  missions: {
    "Teipei, Taiwan": {
      areas: [
        "Taoyuan",
        "Zhongli",
        "Hsinchu",
        "Taichung",
        "Tainan",
        "Kaohsiung",
        "Pingtung",
        "Hualien",
        "Keelung",
        "Taipei",
      ],
    },
    "New Orleans, Louisiana": {
      areas: [
        "Baton Rouge",
        "Lafayette",
        "New Orleans",
        "Shreveport",
        "Lake Charles",
        "Alexandria",
        "Monroe",
        "Pride",
        "Hammond",
        "Morgan City",
      ],
    },
  },
});
