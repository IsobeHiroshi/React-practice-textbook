import { ColoredMessage } from "./components/ColoredMessage";
import { useState } from "react";
import { useEffect } from "react";
import { CssModules } from "./components/CssModules";
import { StyledJsx } from "./components/StyledJsx";
import { StyledComponents } from "./components/StyledComponents";
import { Emotion } from "./components/Emotion";

export const App = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {}, []);

  const onClickButton = () => {
    setNum((prev) => prev + 1);
  };

  return (
    <div>
      <h1 style={{ color: "red" }}>Hello!</h1>
      <ColoredMessage color="blue"> How are you?</ColoredMessage>
      <ColoredMessage color="pink"> I am doing great! </ColoredMessage>
      <button onClick={onClickButton}>Button</button>
      <p>{num}</p>
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
};
