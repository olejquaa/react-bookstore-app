export const pageCounter = (totalPages: string): number => {
  return Math.ceil(+totalPages / 1);
};
