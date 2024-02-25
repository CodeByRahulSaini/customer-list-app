import { render, screen } from "@testing-library/react-native";

import ErrorMessage from "../ErrorMessage";

describe("Testing component: ErrorMessage", () => {
  const text = "Something is wrong";
  test("Should render without any issue", () => {
    render(<ErrorMessage message={text} />);
    expect(screen.getByText(text)).toBeTruthy();
  });

  test("Should not render any thing when there is no message", () => {
    render(<ErrorMessage message="" />);
    expect(screen.root).toBeUndefined();
  });
});
