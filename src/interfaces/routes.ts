export interface RoutesInterface {
  auth: boolean;
  exact: boolean;
  component: () => {};
  name: string;
  path: string;
};
