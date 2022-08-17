import { HTTPMethods, HTTPOptions } from './types';
import { UrlSite } from '../const';

type OptionsWithoutMethod = Omit<HTTPOptions, 'method'>;

const defaultOptions: HTTPOptions = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: null,
  method: HTTPMethods.GET,
  credentials: 'include',
  queryParams: {},
};

interface ClassParams {
  baseUrl?: string;
  noHeaders?: boolean;
}

const BASE_URL = UrlSite.URL;

export class HTTPTransport {
  readonly baseUrl: string;
  //to remove any headers to upload multipart/form-data type files
  readonly noHeaders: boolean;

  constructor(params: ClassParams) {
    this.baseUrl = params.baseUrl || BASE_URL;
    this.noHeaders = params.noHeaders || false;
  }

  public get = <T = any>(url: string, options: OptionsWithoutMethod = {}) => {
    return this.request<T>(url, {
      ...options,
      method: HTTPMethods.GET,
    });
  };
  public put = <T = any>(url: string, options: OptionsWithoutMethod = {}) => {
    return this.request<T>(url, {
      ...options,
      method: HTTPMethods.PUT,
    });
  };
  public post = <T = any>(url: string, options: OptionsWithoutMethod = {}) => {
    return this.request<T>(url, {
      ...options,
      method: HTTPMethods.POST,
    });
  };
  public delete = <T = any>(
    url: string,
    options: OptionsWithoutMethod = {}
  ) => {
    return this.request<T>(url, {
      ...options,
      method: HTTPMethods.DELETE,
    });
  };

  private request = async <T>(
    url: string,
    options: HTTPOptions = { method: HTTPMethods.GET }
  ): Promise<T> => {
    const containedHeaders = { ...defaultOptions.headers, ...options.headers };

    const {
      headers = containedHeaders,
      body = defaultOptions.body,
      method = defaultOptions.method,
      queryParams = defaultOptions.queryParams,
    } = options;

    const response = await fetch(
      `${this.baseUrl}${url}${queryStringify(
        queryParams as Record<string, string>
      )}`,
      {
        method,
        body: body ? JSON.stringify(body) : null,
        headers: this.noHeaders ? {} : headers,
        credentials: options.credentials ?? defaultOptions.credentials,
      }
    );

    if (!response.headers.get('Content-Type')?.includes('application/json')) {
      return (await response.text()) as unknown as Promise<T>;
    }

    const data = (await response.json()) as Promise<T>;

    if (!response.ok) {
      throw new Error(`${(data as any).reason}: ${response.status}`);
    }

    return data;
  };
}

function queryStringify(data: Record<string, string>) {
  if (typeof data !== 'object') {
    throw new Error('data должен быть объектом');
  }
  const keys = Object.keys(data);

  if (!keys.length) return '';

  return keys.reduce((result, key, index) => {
    return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
  }, '?');
}
