import { render, screen } from "@testing-library/react-native";

import Typography from "../Typography";

describe("Testing component: Typography", () => {
  const text = "Hello World";
  test("Should render without any issue", () => {
    render(<Typography>{text}</Typography>);
    expect(screen.getByText(text)).toBeTruthy();
  });
});
