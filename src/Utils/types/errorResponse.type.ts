export type IResponseError = {
  statusCode: number;
  message: string;
};

export type RTKErrorResponse = {
  status: number;
  data: IResponseError;
};
