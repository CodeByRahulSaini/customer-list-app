import { render, screen } from "@testing-library/react-native";

import Avatar from "../Avatar";

describe("Testing component: Avatar", () => {
  const name = "John";
  test("Should render without any issue", () => {
    render(<Avatar name={name} />);
  });

  test("Should render first char of name", () => {
    render(<Avatar name={name} />);
    const firstChar = screen.getByText(name.charAt(0).toUpperCase());
    expect(firstChar).toBeDefined();
  });
});
