export const searchService = (data: any[], term: string) => {
  const result = data.map((item) => item.title.toLowerCase().startWith(term));
  return result;
};
