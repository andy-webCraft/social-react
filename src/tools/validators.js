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

export const parseErrorsText = (errors) => {
  let errorsObj = {};
  for (let i = 0; i < errors.length; i++) {
    let fieldName = errors[i]
      .slice(
        errors[i].indexOf("(") + 1,
        errors[i].indexOf("-") // фикс, если односложное имя поля
      )
      .toLowerCase();
    let fieldSubName = errors[i]
      .slice(errors[i].indexOf(">") + 1, errors[i].indexOf(")"))
      .toLowerCase();
    let errorText = errors[i].slice(0, errors[i].indexOf("(") - 1);
    errorsObj[fieldName] = {
      ...errorsObj[fieldName],
      [fieldSubName]: errorText,
    };
  }
  return errorsObj;
};