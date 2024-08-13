/* tslint:disable */
/* eslint-disable */
import { Form } from '../models/form';
import { GrantedAuthority } from '../models/granted-authority';
import { Project } from '../models/project';
import { Repport } from '../models/repport';
import { Role } from '../models/role';
export interface User {
  accountLocked?: boolean;
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  authorities?: Array<GrantedAuthority>;
  createdDate?: string;
  credentialsNonExpired?: boolean;
  dateOfBirth?: string;
  email?: string;
  enabled?: boolean;
  firstname?: string;
  forms?: Array<Form>;
  fullName?: string;
  id?: number;
  lastModifiedDate?: string;
  lastname?: string;
  name?: string;
  password?: string;
  projects?: Array<Project>;
  reports?: Array<Repport>;
  roles?: Array<Role>;
  username?: string;
}
