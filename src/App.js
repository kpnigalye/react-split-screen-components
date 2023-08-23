import SplitScreen from "./SplitScreen";

import React from "react";

const LeftHandComponent = () => {
  return <h1 style={{ backgroundColor: "yellow" }}>Left</h1>;
};

const RightHandComponent = () => {
  return <p style={{ backgroundColor: "red" }}>Right</p>;
};

function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftHandComponent />
      <RightHandComponent />
    </SplitScreen>
  );
}

export default App;
