import SearchLocation from "../SearchLocation";
import { describe, test, vi, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const onClick = vi.fn();
const onChange = vi.fn();

describe("SearchLocation", () => {
  test("should render working input", async () => {
    const user = userEvent.setup();
    render(<SearchLocation onChange={onChange} onClick={onClick} />);
    await user.type(screen.getByRole("textbox"), "Foo text");
    await screen.findByDisplayValue("Foo text");
    expect(onChange).toHaveBeenCalledTimes(8);
  });
});
