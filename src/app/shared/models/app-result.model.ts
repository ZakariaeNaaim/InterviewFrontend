export interface AppResult<T> {
  isSuccess: boolean;
  codErreur?: string;
  libErreur?: string;
  message?: string;
  data: T;
  status: number;
  timestamp: string;
}
