const camelCaseToTitleCase = (input: string): string => {
  if (typeof input !== 'string' || input.length === 0) {
    return '';
  }

  // Use a regular expression to split camelCase into words
  const words: string[] = input.replace(/([a-z])([A-Z])/g, '$1 $2').split(' ');

  // Capitalize the first letter of each word and convert the rest to lowercase
  const titleCaseWords: string[] = words.map((word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  // Join the words back together with spaces
  return titleCaseWords.join(' ').replace(/\bId\b/g, 'ID');
};

export { camelCaseToTitleCase };
