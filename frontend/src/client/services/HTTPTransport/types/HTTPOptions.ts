import { HTTPMethods } from './HTTPMethods';

export type HTTPOptions = {
  method: HTTPMethods;
  body?: any;
  headers?: Record<string, string>;
  queryParams?: Record<string, string>;
  credentials?: 'include' | 'same-origin' | 'omit';
  mode?: 'cors' | 'no-cors' | 'same-origin';
};
