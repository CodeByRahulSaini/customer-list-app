import { gql } from "@apollo/client";
import { MockedProvider } from "@apollo/client/testing";
import {
  render,
  waitFor,
  screen,
  fireEvent,
} from "@testing-library/react-native";
import React from "react";

import { ListZellerCustomersDocument } from "../graphql/__generated__/schema";
import Home from "../pages/home/Home";

// Mock data for Apollo Client
const mocks = [
  {
    request: {
      query: ListZellerCustomersDocument,
      variables: { filter: { role: { eq: "Admin" }, name: { contains: "" } } },
    },
    result: {
      data: {
        listZellerCustomers: {
          items: [
            { id: "1", name: "User 1", role: "Admin" },
            { id: "2", name: "User 2", role: "Admin" },
          ],
        },
      },
    },
    maxUsageCount: 2,
  },
  {
    request: {
      query: ListZellerCustomersDocument,
      variables: {
        filter: { role: { eq: "Manager" }, name: { contains: "" } },
      },
    },
    result: {
      data: {
        listZellerCustomers: {
          items: [
            { id: "3", name: "User 3", role: "Manager" },
            { id: "4", name: "User 4", role: "Manager" },
          ],
        },
      },
    },
  },
  {
    request: {
      query: ListZellerCustomersDocument,
      variables: {
        filter: { role: { eq: "Admin" }, name: { contains: "User 1" } },
      },
    },
    result: {
      data: {
        listZellerCustomers: {
          items: [{ id: "1", name: "User 1", role: "Admin" }],
        },
      },
    },
  },
];

describe("End to End: Home", () => {
  test("Should renders user list for default role", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Home />
      </MockedProvider>
    );

    await waitFor(() => {
      const userItems = screen.getAllByTestId("userItem");
      expect(userItems.length).toBe(2);
      expect(screen.getByText("User 1")).toBeTruthy();
      expect(screen.getByText("User 2")).toBeTruthy();
    });
  });

  test("Should loads correct users for different role", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Home />
      </MockedProvider>
    );
    fireEvent.press(screen.getByText("Manager"));

    await waitFor(() => {
      const userItems = screen.getAllByTestId("userItem");
      expect(userItems.length).toBe(2);
      expect(screen.getByText("User 3")).toBeTruthy();
      expect(screen.getByText("User 4")).toBeTruthy();
    });
  });

  test("Should loads correct users after search", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Home />
      </MockedProvider>
    );

    const searchInput = screen.getByPlaceholderText("Search by name");
    fireEvent.changeText(searchInput, "User 1");

    await waitFor(() => {
      expect(screen.getByText("User 1")).toBeTruthy();
      expect(screen.queryByText("User 2")).toBeNull();
      expect(screen.queryByText("User 3")).toBeNull();
      expect(screen.queryByText("User 4")).toBeNull();
    });
  });
});
