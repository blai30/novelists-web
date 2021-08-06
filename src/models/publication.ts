import { User } from './user'

export interface Publication {
  id: string
  user: User
  title: string
  synopsis?: string
  created_at?: Date
  updated_at?: Date
}
