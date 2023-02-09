import React from "react";
import { observable } from "mobx";

class Store {
  @observable firstName = "";
  @observable lastName = "";
}

export const useStore = () =>
  React.useContext(React.createContext(new Store()));
