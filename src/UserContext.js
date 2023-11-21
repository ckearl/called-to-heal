import { createContext } from "react";

export const UserContext = createContext({
  users: [
    {
      id: 0,
      firstName: "Sawyer",
      lastName: "Halverson",
      sex: "m",
      notepad: {
        entries: [
          {
            date: "2021-06-01",
            entry: "Today I feel happy",
          },
          {
            date: "2021-06-01",
            entry: "Today I feel sad",
          },
          {
            date: "2021-06-01",
            entry: "Today I feel mid",
          },
          {
            date: "2021-06-21",
            entry: "Today I feel mid",
          },
          {
            date: "2021-06-27",
            entry: "Today I feel mid",
          },
          {
            date: "2021-07-01",
            entry: "Today I feel mid",
          },
          {
            date: "2021-06-03",
            entry: "Today I feel mid",
          },
          {
            date: "2021-06-02",
            entry: "Today I feel mid",
          },
        ],
      },
      settings: {},
    },
    {
      id: 1,
      firstName: "McKenna",
      lastName: "Staley",
      sex: "f",
      notepad: {
        entries: [
          {
            date: "2021-06-01",
            entry: "Today I feel great",
          },
        ],
      },
      settings: {},
    },
  ],
});
