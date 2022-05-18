interface ValidateInputsProps {
  inputName: string;
  value: string;
}

export const validateInputs = ({ inputName, value }: ValidateInputsProps) => {
  const ageValues = !!(inputName === "age") && value;
  const heightValues = !!(inputName === "height") && value;
  const weightValues = !!(inputName === "weight") && value;
  const desiredWeightValues = !!(inputName === "desiredWeight") && value;

  if (inputName === "age" && !ageValues) {
    return "Campo obrigatório!";
  }
  if (inputName === "age" && !!ageValues) {
    const typeValue = Number(ageValues);

    if (!typeValue && typeValue !== 0) {
      return "O valor deve ser numérico!";
    }
  }
  if (inputName === "age" && Number(ageValues) <= 0) {
    return "A idade deve ser maior que 0!";
  }
  if (inputName === "age" && Number(ageValues) > 99) {
    return "A idade deve ser menor que 99 anos!";
  }
  if (inputName === "age" && typeof ageValues === "number") {
    return "";
  }

  if (inputName === "height" && !heightValues) {
    return "Campo obrigatório!";
  }
  if (inputName === "height" && !!heightValues) {
    const typeValue = Number(heightValues);

    if (!typeValue && typeValue !== 0) {
      return "O valor deve ser numérico!";
    }
  }
  if (inputName === "height" && Number(heightValues) <= 0) {
    return "A altura deve ser maior que 0!";
  }
  if (inputName === "height" && Number(heightValues) > 230) {
    return "A altura deve ser menor que 230cm!";
  }
  if (inputName === "height" && typeof heightValues === "number") {
    return "";
  }

  if (inputName === "weight" && !weightValues) {
    return "Campo obrigatório!";
  }
  if (inputName === "weight" && !!weightValues) {
    const typeValue = Number(weightValues);

    if (!typeValue && typeValue !== 0) {
      return "O valor deve ser numérico!";
    }
  }
  if (inputName === "weight" && Number(weightValues) <= 0) {
    return "O peso deve ser maior que 0!";
  }
  if (inputName === "weight" && typeof weightValues === "number") {
    return "";
  }

  if (inputName === "desiredWeight" && !desiredWeightValues) {
    return "Campo obrigatório!";
  }
  if (inputName === "desiredWeight" && !!desiredWeightValues) {
    const typeValue = Number(desiredWeightValues);

    if (!typeValue && typeValue !== 0) {
      return "O valor deve ser numérico!";
    }
  }
  if (inputName === "desiredWeight" && Number(desiredWeightValues) <= 0) {
    return "O pesp deve ser maior que 0!";
  }
  if (
    inputName === "desiredWeight" &&
    typeof desiredWeightValues === "number"
  ) {
    return "";
  }

  return "";
};
