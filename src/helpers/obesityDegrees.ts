export const obesityDegrees = (imcValue?: string) => {
  const imc = Number(imcValue);

  if (imc < 16) return "Magreza grave";
  if (imc >= 16 && imc < 17) return "Magreza moderada";
  if (imc >= 17 && imc < 18.5) return "Magreza leve";
  if (imc >= 18.5 && imc < 25) return "Saudável";
  if (imc >= 25 && imc < 30) return "Acima do peso";
  if (imc >= 30 && imc < 35) return "Obesidade Grau I";
  if (imc >= 35 && imc < 40) return "Obesidade Grau II (Severa)";
  if (imc > 40) return "Obesidade Grau III (Mórbida)";

  return "";
};
