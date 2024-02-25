import { render, screen } from "@testing-library/react-native";
import { Text } from "react-native";

import Section from "../Section";

describe("Testing component: Section", () => {
  const heading = "Hello";
  const childrenText = "World";
  const children = <Text>{childrenText}</Text>;
  test("Should render without any issue, with all texts", () => {
    render(<Section heading={heading}>{children}</Section>);
    expect(screen.getByText(heading)).toBeTruthy();
    expect(screen.getByText(childrenText)).toBeTruthy();
  });
});
