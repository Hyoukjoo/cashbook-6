import "@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js";

import "commons/styles/index.scss";

import { cloneElement } from "lib/dom";
import { render } from "lib/render";
import Header from "organisms/Header";
import RegisterBar from "organisms/RegisterBar";
import Layout from "templates/Layout";
import createStore, { State } from "lib/state";
import routes from "lib/routes";
import registry from "lib/registry";
import History from "pages/History";
import Calendar from "pages/Calendar";
import Chart from "pages/Chart";

// const $app = document.querySelector<HTMLElement>("#app");

// const view = (targetElement: HTMLElement) => {
//   const $element = cloneElement(targetElement);

//   const $header = Header({
//     calendarProps: { date: new Date() },
//     navProps: { currentPath: "/" },
//   });
//   const $registerBar = RegisterBar({});

//   const state = {
//     currentPath: "/",
//     date: new Date(),
//   };

//   const proxy = new Proxy(state, {
//     get(target, key, receiver) {
//       return Reflect.get(target, key, receiver);
//     },
//     set(target, key, value, receiver) {
//       Reflect.set(target, key, value, receiver);

//       (target[key]);

//       return true;
//     },
//   });

//   const $layout = Layout(proxy);

//   $element.append($layout);

//   return $element;
// };

// const state = {};

// window.requestAnimationFrame(() => {
//   const newMian = view($app);
//   $app.replaceWith(newMian);
// });

const init = () => {
  const initialState: State = {
    currentPath: "/",
    date: new Date(),
    isLoading: false,
  };

  registry.set(routes);

  const state = createStore(initialState);

  render(state);

  window.onpopstate = () => {
    const { pathname } = window.location;
    pathname;
    state.currentPath = pathname;
  };
};

init();
