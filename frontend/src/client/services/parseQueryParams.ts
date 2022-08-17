export const parseQueryParams = <T>(searchParams: string) => {
  return JSON.parse(
    '{"' +
      decodeURI(searchParams)
        .replace(/\?/g, '')
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  ) as T;
};
