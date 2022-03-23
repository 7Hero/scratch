export {};

import { User } from '../types/interfaces/user'
declare global {
  interface Window { 
    users: User[]; // User
  }
}