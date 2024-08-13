/* tslint:disable */
/* eslint-disable */
import { Project } from '../models/project';
import { User } from '../models/user';
export interface Form {
  developer?: User;
  id?: number;
  pdfForm?: string;
  project?: Project;
  submissionDate?: string;
}
