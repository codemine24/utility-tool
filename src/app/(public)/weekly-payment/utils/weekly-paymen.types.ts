export interface IWeeklyPayment {
  project_name: string;
  hour: string;
  minute: string;
  commission: string;
  hourly_rate: string;
  exchange_rate: string
}

export const initialWeeklyPayment: IWeeklyPayment = {
  project_name: "",
  hour: "",
  minute: "",
  commission: "",
  hourly_rate: "",
  exchange_rate: ""
};
