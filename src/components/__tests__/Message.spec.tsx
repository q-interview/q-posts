import { render } from "@testing-library/react";
import Message, { MessageProps } from "../Message";

const renderMessage = (props: MessageProps) => ({
  ...render(<Message {...props} />),
});

describe("Message Component Testing", () => {
  [
    "Test",
    "Longer Message",
    "Hey I am message",
    "yo yo man",
    "lorem ipsum",
  ].forEach((message, index) => {
    it(`Render message ${index}`, () => {
      const { getByText } = renderMessage({ message });

      const foundMessage = getByText(message);

      expect(foundMessage).toBeInTheDocument();
    });
  });
});
