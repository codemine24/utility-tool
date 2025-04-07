export const calculateWeeklyPayment = (
  min: string | number,
  commission: string | number,
  hourly_rate: string | number,
  exchange_rate: string | number,
  ignoreUpworkCommission: boolean
) => {
  const parsedMin = Number(min);
  const parsedCommission = Number(commission);
  const parsedHourlyRate = Number(hourly_rate);
  const parsedExchangeRate = Number(exchange_rate);
  const totalHour = parsedMin / 60;

  const totalPayment = totalHour * parsedHourlyRate;
  const projectOwnerCommission = parsedCommission / 100;
  const upworkCommission = ignoreUpworkCommission ? 0 : 10 / 100;
  const totalPaymentAfterUpworkCommission =
    totalPayment * (1 - upworkCommission);
  const totalPayable =
    totalPaymentAfterUpworkCommission * (1 - projectOwnerCommission);

  return {
    totalPayable,
    totalHour: totalHour,
    estimatedEarnings: totalPayable * parsedExchangeRate,
    upworkCommissionAmount: totalPaymentAfterUpworkCommission - totalPayment,
    projectOwnerCommissionAmount:
      totalPaymentAfterUpworkCommission * projectOwnerCommission,
  };
};
