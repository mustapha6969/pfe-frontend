/* tslint:disable */
/* eslint-disable */
import { User } from '../models/user';
export interface Project {
  description?: string;
  developers?: Array<User>;
  id?: number;
  name?: string;
  securityConsultant?: User;
}
