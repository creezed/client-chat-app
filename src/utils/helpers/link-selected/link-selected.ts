export const isLinkSelected = (
  fullPath: string,
  currentPath: string,
): boolean => {
  return fullPath.split('/').includes(currentPath.split('/')[1]);
};
