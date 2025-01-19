export const calculateWeeklyPayment = (
  min: string | number,
  commission: string | number,
  hourly_rate: string | number,
  exchange_rate: string | number
) => {
  const parsedMin = Number(min);
  const parsedCommission = Number(commission);
  const parsedHourlyRate = Number(hourly_rate);
  const parsedExchangeRate = Number(exchange_rate);
  const totalHour = parsedMin / 60;

  const totalPayment = totalHour * parsedHourlyRate;
  const projectOwnerCommission = parsedCommission / 100;
  const upworkCommission = 10 / 100;
  const toalPaymentAfterUpworkCommission =
    totalPayment * (1 - upworkCommission);
  const totalPayable =
    toalPaymentAfterUpworkCommission * (1 - projectOwnerCommission);

  return {
    totalPayable,
    totalHour: totalHour,
    extimatedEarnings: totalPayable * parsedExchangeRate,
    upworkCommissionAmount: toalPaymentAfterUpworkCommission - totalPayment,
    projectOwnerCommissionAmount:
      toalPaymentAfterUpworkCommission * projectOwnerCommission,
  };
};