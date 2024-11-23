export interface User {
    id: number
    name: string
    email: string
  }
  
  export interface ApiResponse<T> {
    data: T
    status: string
    message?: string
  }
  
  export interface PaginatedResponse<T> {
    data: T[]
    total: number
    page: number
    perPage: number
  }