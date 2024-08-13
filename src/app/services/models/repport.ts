/* tslint:disable */
/* eslint-disable */
import { Project } from '../models/project';
import { User } from '../models/user';
export interface Repport {
  id?: number;
  pdfReport?: string;
  project?: Project;
  securityConsultant?: User;
  validated?: boolean;
}
