/* JavaQuest — Problem: Encapsulation with Employee (Classes & Objects, Medium) */
PROBLEMS.push({
  id: '5-08',
  topicId: 5,
  topic: 'Classes & Objects',
  title: 'Encapsulation with Employee',
  difficulty: 'Medium',
  statement: '<p>Ek <code>Employee</code> class banao jisme <code>salary</code> private ho. <code>setSalary</code> method sirf tab salary set kare jab value 0 ya usse zyada ho (negative salary ignore ho), aur <code>getSalary</code> current salary return kare. Method <code>setEmployeeSalary</code> ko ek salary milegi — use set karke stored salary return karni hai.</p>',
  examples: [
    { input: 'salary = 50000', output: '50000.0', explanation: 'Positive salary set ho gayi, getSalary ne 50000.0 return kiya.' },
    { input: 'salary = -1000', output: '0.0', explanation: 'Negative salary ignore hui, salary default 0.0 hi rahi.' }
  ],
  constraints: ['salary koi bhi double value ho sakti hai'],
  starter: 'class Solution {\n    class Employee {\n        private double salary = 0;\n        void setSalary(double salary) {\n            // TODO: sirf non-negative salary set karo\n        }\n        double getSalary() {\n            return salary;\n        }\n    }\n    double setEmployeeSalary(double salary) {\n        // TODO: Employee banao, salary set karo, getSalary return karo\n        return 0;\n    }\n}',
  solution: 'class Solution {\n    class Employee {\n        private double salary = 0;\n        void setSalary(double salary) {\n            if (salary >= 0) {\n                this.salary = salary;\n            }\n        }\n        double getSalary() {\n            return salary;\n        }\n    }\n    double setEmployeeSalary(double salary) {\n        Employee e = new Employee();\n        e.setSalary(salary);\n        return e.getSalary();\n    }\n}',
  explanation: '<p>Encapsulation ka matlab hai data private rakho aur access getters/setters se do. Setter ke andar validation lagti hai, isliye galat value (negative salary) kabhi store hi nahi hoti.</p>'
});
