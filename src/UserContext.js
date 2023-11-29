import { createContext } from "react";

export const UserContext = createContext({
  users: [
    {
      id: 0,
      firstName: "Sawyer",
      lastName: "Halverson",
      sex: "m",
      mission: "Teipei, Taiwan",
      dateStarted: "2021-06-01",
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
      grid: {
        days: {
          "2023-11-01": {
            anxious: 3,
            tired: 2,
            angry: 9,
            sad: 9,
          },
          "2023-11-02": {
            anxious: 3,
            tired: 2,
            angry: 1,
            sad: 2,
          },
          "2023-11-03": {
            anxious: 3,
            tired: 2,
            angry: 9,
            sad: 9,
          },
          "2023-11-04": {
            anxious: 9,
            tired: 2,
            angry: 1,
            sad: 4,
          },
          "2023-11-05": {
            anxious: 3,
            tired: 9,
            angry: 1,
            sad: 1,
          },
          "2023-11-06": {
            anxious: 3,
            tired: 9,
            angry: 1,
            sad: 9,
          },
          "2023-11-07": {
            anxious: 9,
            tired: 2,
            angry: 1,
            sad: 9,
          },
          "2023-11-08": {
            anxious: 9,
            tired: 9,
            angry: 9,
            sad: 9,
          },
          "2023-11-09": {
            anxious: 3,
            tired: 2,
            angry: 1,
            sad: 9,
          },
          "2023-11-10": {
            anxious: 3,
            tired: 2,
            angry: 1,
            sad: 9,
          },
          "2023-11-11": {
            anxious: 3,
            tired: 2,
            angry: 1,
            sad: 9,
          },
          "2023-11-12": {
            anxious: 3,
            tired: 2,
            angry: 1,
            sad: 9,
          },
          "2023-11-13": {
            anxious: 3,
            tired: 2,
            angry: 1,
            sad: 9,
          },
          "2023-11-14": {
            anxious: 3,
            tired: 2,
            angry: 1,
            sad: 9,
          },
          "2023-11-15": {
            anxious: 3,
            tired: 2,
            angry: 1,
            sad: 9,
          },
          "2023-11-16": {
            anxious: 3,
            tired: 2,
            angry: 1,
            sad: 9,
          },
          "2023-11-17": {
            anxious: 3,
            tired: 2,
            angry: 1,
            sad: 9,
          },
          "2023-11-18": {
            anxious: 3,
            tired: 2,
            angry: 1,
            sad: 9,
          },
          "2023-11-19": {
            anxious: 3,
            tired: 2,
            angry: 1,
            sad: 9,
          },
          "2023-11-20": {
            anxious: 3,
            tired: 2,
            angry: 1,
            sad: 9,
          },
          "2023-11-21": {
            anxious: 3,
            tired: 2,
            angry: 1,
            sad: 9,
          },
          "2023-11-22": {
            anxious: 3,
            tired: 2,
            angry: 1,
            sad: 9,
          },
          "2023-11-23": {
            anxious: 3,
            tired: 2,
            angry: 1,
            sad: 9,
          },
          "2023-11-24": {
            anxious: 3,
            tired: 2,
            angry: 1,
            sad: 9,
          },
          "2023-11-25": {
            anxious: 3,
            tired: 2,
            angry: 1,
            sad: 9,
          },
          "2023-11-26": {
            anxious: 3,
            tired: 2,
            angry: 1,
            sad: 9,
          },
          "2023-11-27": {
            anxious: 3,
            tired: 2,
            angry: 1,
            sad: 9,
          },
          "2023-11-28": {
            anxious: 3,
            tired: 2,
            angry: 1,
            sad: 9,
          },
          "2023-11-29": {
            anxious: 3,
            tired: 2,
            angry: 1,
            sad: 9,
          },
        },
      },
      settings: {},
    },
    {
      id: 1,
      firstName: "McKenna",
      lastName: "Staley",
      sex: "f",
      mission: "New Orleans, Louisiana",
      dateStarted: "2023-02-01",
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
