export interface IWeeklyPayment {
  project_name: string;
  hour: string;
  minute: string;
  commission: string;
  hourly_rate: string;
  exchange_rate: string;
}

export const initialWeeklyPayment: IWeeklyPayment = {
  project_name: "",
  hour: "",
  minute: "",
  commission: "",
  hourly_rate: "",
  exchange_rate: "",
};

export interface IPercentage {
  total_earning: string;
  total_expense: string;
  fund: string;
}

export const initialPercentage: IPercentage = {
  total_earning: "",
  total_expense: "",
  fund: "",
};

export interface IPercentageCalculation {
  totalEarning: string;
  totalExpense: string;
  amountAfterExpense: string;
  fund: string;
  amountAfterFund: string;
  fazlyCommission: string;
  rapuCommission: string;
}

export const initialPercentageCalculation: IPercentageCalculation = {
  totalEarning: "",
  totalExpense: "",
  amountAfterExpense: "",
  fund: "",
  amountAfterFund: "",
  fazlyCommission: "",
  rapuCommission: "",
};
