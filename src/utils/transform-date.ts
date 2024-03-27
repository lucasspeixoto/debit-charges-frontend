export const longDateConvert = (date: string): string => {
  const splitedDate = date.split('T')[0].split('-');

  const year = splitedDate[0];
  const month = splitedDate[1];
  const day = splitedDate[2];

  return `${day}/${month}/${year}`;
};
