import { legacy_createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifer = (count = 0) => {
  return count;
};

const countStore = legacy_createStore(countModifer);