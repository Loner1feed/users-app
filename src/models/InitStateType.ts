export interface InitType<T> {
  error: string | null;
  status: "pending" | "rejected" | null;
  data: T;
}
