import { Page } from "pages/type";

import Calendar from "pages/Calendar";
import Chart from "pages/Chart";
import HistoryPage from "pages/History";

export type Route = {
  path: string;
  page: Page;
};

export type Routes = Route[];

const routes: Routes = [
  { path: "/", page: HistoryPage },
  { path: "/calendar", page: Calendar },
  { path: "/chart", page: Chart },
];

export default routes;
