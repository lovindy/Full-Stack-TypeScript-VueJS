export interface User {
  id: string;
  email: string;
  name: string;
}

export interface AuthResponse {
  token: string;
  user: User;
  message: string;
}

export interface ApiResponse<T = any> {
  data?: T | null;
  message: string;
  status: string;
  error?: string;
}
