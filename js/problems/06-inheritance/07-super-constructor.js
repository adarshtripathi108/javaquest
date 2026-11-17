/* JavaQuest — Problem: Super Constructor (Inheritance, Medium) */
PROBLEMS.push({
  id: '6-07',
  topicId: 6,
  topic: 'Inheritance',
  title: 'Super Constructor',
  difficulty: 'Medium',
  statement: '<p>Ek <code>Person</code> class banao jisme <code>name</code> aur <code>age</code> fields hon aur ek constructor dono set kare. <code>Student</code> class Person ko extend kare, apna <code>roll</code> field rakhe, aur apne constructor me <code>super(name, age)</code> se parent constructor ko call kare. Method <code>studentInfo</code> ko naam, umar aur roll milega aur use <code>Name, Age, Roll X</code> format me string return karni hai.</p>',
  examples: [
    { input: 'name = "Adarsh", age = 20, roll = 101', output: '"Adarsh, 20, Roll 101"', explanation: 'super() ne name aur age set kiye, Student ne roll set kiya.' },
    { input: 'name = "Meena", age = 19, roll = 205', output: '"Meena, 19, Roll 205"', explanation: 'Wahi pattern — "Meena, 19, Roll 205".' }
  ],
  constraints: ['name khaali string nahi hoga', 'age aur roll positive integers honge'],
  starter: 'class Solution {\n    class Person {\n        String name;\n        int age;\n        Person(String name, int age) {\n            this.name = name;\n            this.age = age;\n        }\n    }\n    class Student extends Person {\n        int roll;\n        Student(String name, int age, int roll) {\n            // TODO: super(name, age) call karo aur roll set karo\n        }\n        String info() {\n            // TODO: "Name, Age, Roll X" format me return karo\n            return "";\n        }\n    }\n    String studentInfo(String name, int age, int roll) {\n        // TODO: Student banao aur info() return karo\n        return "";\n    }\n}',
  solution: 'class Solution {\n    class Person {\n        String name;\n        int age;\n        Person(String name, int age) {\n            this.name = name;\n            this.age = age;\n        }\n    }\n    class Student extends Person {\n        int roll;\n        Student(String name, int age, int roll) {\n            super(name, age);\n            this.roll = roll;\n        }\n        String info() {\n            return name + ", " + age + ", Roll " + roll;\n        }\n    }\n    String studentInfo(String name, int age, int roll) {\n        Student s = new Student(name, age, roll);\n        return s.info();\n    }\n}',
  explanation: '<p><code>super(name, age)</code> parent class ke constructor ko call karta hai — ye subclass constructor ki pehli line honi chahiye. Isse parent ke fields parent ke constructor se set hote hain aur subclass sirf apne fields sambhalti hai.</p>'
});
