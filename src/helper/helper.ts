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

export const calculatePercentage = (
  totalEarning: string | number,
  totalExpense: string | number,
  fund: string | number
) => {
  const amountAfterExpense = Number(totalEarning) - Number(totalExpense);
  const fundAmount = (Number(fund) / 100) * amountAfterExpense;
  const amountAfterFund = amountAfterExpense - fundAmount;

  const fazlyPercentage = 58;
  const rapuPercentage = 42;

  const fazlyCommission = ((fazlyPercentage / 100) * amountAfterFund).toFixed(3);
  const rapuCommission = ((rapuPercentage / 100) * amountAfterFund).toFixed(3);

  return {
    totalEarning: Number(totalEarning).toLocaleString(),
    totalExpense: Number(totalExpense).toLocaleString(),
    amountAfterExpense: amountAfterExpense.toLocaleString(),
    fund: fundAmount.toLocaleString(),
    amountAfterFund: amountAfterFund.toLocaleString(),
    fazlyCommission: Number(fazlyCommission).toLocaleString(),
    rapuCommission: Number(rapuCommission).toLocaleString(),
  };
};
