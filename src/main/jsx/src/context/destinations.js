import React from "react";

const { Provider, Consumer } = React.createContext({
  destinations: [],
  add: d => this.destinations.add(d)
});

export { Provider, Consumer };
