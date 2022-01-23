export const required = (value) => {
  if (!value) return "Field is required";
  else return undefined;
};

export const maxLengthCreator = (maxLength) => {
  return (value) => {
    if (value && value.length > maxLength)
      return `Max length is ${maxLength} symbols`;
    else return undefined;
  };
};