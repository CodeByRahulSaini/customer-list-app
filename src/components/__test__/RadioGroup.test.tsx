import { render, screen, fireEvent } from "@testing-library/react-native";

import RadioGroup, { IRadioGroup } from "../RadioGroup";

describe("Testing component: RadioGroup", () => {
  const options: IRadioGroup["options"] = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  const selectedOption = options[0];
  const onChange = jest.fn();

  test("Should render correctly", () => {
    render(
      <RadioGroup
        selected={selectedOption.value}
        onChange={onChange}
        options={options}
      />
    );

    options.forEach((option) => {
      expect(screen.getByText(option.label)).toBeTruthy();
    });
  });

  test("Should call onChange handler when an option is selected", () => {
    render(
      <RadioGroup
        selected={selectedOption.value}
        onChange={onChange}
        options={options}
      />
    );

    fireEvent.press(screen.getByText(options[1].label));
    expect(onChange).toHaveBeenCalledWith(options[1].value);
  });
});
