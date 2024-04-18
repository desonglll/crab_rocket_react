interface Employee {
  employee_id: number;
  first_name?: string | null;
  last_name?: string | null;
  employee_name: string;
  gender?: string | null;
  date_of_birth?: string | null; // Assuming it's a string representation of datetime
  hire_date?: string | null; // Assuming it's a string representation of datetime
  email?: string | null;
  phone_number?: string | null;
  department_id?: number | null;
  job_title?: string | null;
  salary?: number | null;
  manager_id?: number | null;
  address?: string | null;
  city?: string | null;
  state?: string | null;
  postal_code?: string | null;
  valid?: boolean | null;
  last_update?: string | null; // Assuming it's a string representation of datetime
}
