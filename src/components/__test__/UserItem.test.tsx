import { render, screen } from "@testing-library/react-native";

import UserItem from "../UserItem";

describe("Testing component: UserItem", () => {
  const userItem = { name: "John", role: "Admin" };
  test("Should render without any issue, with all texts", () => {
    render(<UserItem name={userItem.name} role={userItem.role} />);
    expect(screen.getByText(userItem.name)).toBeTruthy();
    expect(
      screen.getByText(userItem.name.charAt(0).toUpperCase())
    ).toBeTruthy();
    expect(screen.getByText(userItem.role)).toBeTruthy();
  });
});
