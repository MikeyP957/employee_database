USE employee_db;

INSERT INTO departments (id, name)
VALUES 
(1, 'Management'),
(2, 'Engineers'),
(3, 'Office Staff'),
(4, 'Human Resources');

INSERT INTO employee (first_name, last_name, role_id)
VALUES 
('Malik', 'Sanders', 1),
('Juana', 'Ixcoy', 1),
('Xioaying', 'Zhang', 2),
('Yordanos', 'Berhe', 2),
('Quoc', 'Nguyen', 3),
('Eder', 'Vasquez', 4),
('Hinda','Ali', 3),
('Salma','Awil', 4),
('Gloria','Simaj', 5),
('Eduardo','Rodriguez', 6);

INSERT INTO roles (title, salary, department_id)
VALUES
('Manager', 250000, 1),
('Frontend Developer', 120000, 2),
('Backend Developer', 150000, 2),
('Payroll Specialist', 110000, 4),
('Administrative Assistent', 90000, 3),
('Office Manager', 80000, 3);