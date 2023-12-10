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
      appUsage: [
        {
          appName: "Meditation Coach",
          iconName: "meditation",
          lastUsed: "2021-06-01",
          totalTime: "00:00:00",
          numberOfUses: 0,
        },
        {
          appName: "Notepad",
          iconName: "sticky-note",
          lastUsed: "2021-06-01",
          totalTime: "00:00:00",
          numberOfUses: 0,
        },
        {
          appName: "Media Player",
          iconName: "clapperboard",
          lastUsed: "2021-06-01",
          totalTime: "00:00:00",
          numberOfUses: 0,
        },
      ],
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
            angry: 3,
            sad: 9,
          },
          "2023-11-11": {
            anxious: 3,
            tired: 4,
            angry: 1,
            sad: 9,
          },
          "2023-11-12": {
            anxious: 3,
            tired: 5,
            angry: 1,
            sad: 9,
          },
          "2023-11-13": {
            anxious: 3,
            tired: 2,
            angry: 1,
            sad: 2,
          },
          "2023-11-14": {
            anxious: 3,
            tired: 4,
            angry: 1,
            sad: 6,
          },
          "2023-11-15": {
            anxious: 7,
            tired: 2,
            angry: 1,
            sad: 1,
          },
          "2023-11-16": {
            anxious: 9,
            tired: 2,
            angry: 1,
            sad: 2,
          },
          "2023-11-17": {
            anxious: 3,
            tired: 5,
            angry: 9,
            sad: 9,
          },
          "2023-11-18": {
            anxious: 1,
            tired: 1,
            angry: 1,
            sad: 1,
          },
          "2023-11-19": {
            anxious: 10,
            tired: 10,
            angry: 10,
            sad: 10,
          },
          "2023-11-20": {
            anxious: 4,
            tired: 2,
            angry: 1,
            sad: 1,
          },
          "2023-11-21": {
            anxious: 5,
            tired: 4,
            angry: 9,
            sad: 1,
          },
          "2023-11-22": {
            anxious: 1,
            tired: 2,
            angry: 1,
            sad: 3,
          },
          "2023-11-23": {
            anxious: 3,
            tired: 2,
            angry: 1,
            sad: 6,
          },
          "2023-11-24": {
            anxious: 2,
            tired: 2,
            angry: 4,
            sad: 1,
          },
          "2023-11-25": {
            anxious: 9,
            tired: 1,
            angry: 8,
            sad: 1,
          },
          "2023-11-26": {
            anxious: 8,
            tired: 2,
            angry: 7,
            sad: 2,
          },
          "2023-11-27": {
            anxious: 3,
            tired: 7,
            angry: 1,
            sad: 2,
          },
          "2023-11-28": {
            anxious: 6,
            tired: 2,
            angry: 2,
            sad: 6,
          },
        },
      },
      settings: {
        area: "Teipei",
        companion: "Elder Smith",
        homeTown: "Kansas City, Kasnas",
      },
    },
    {
      id: 1,
      firstName: "McKenna",
      lastName: "Staley",
      sex: "f",
      mission: "New Orleans, Louisiana",
      dateStarted: "2023-02-01",
      appUsage: [{}],
      notepad: {
        entries: [
          {
            date: "2021-06-01",
            entry: "Today I feel great",
          },
        ],
      },
      grid: {
        days: {},
      },
      settings: {
        area: "Pride",
        companion: "Sister Smith",
        homeTown: "Mesa, Arizona",
      },
    },
  ],
});
