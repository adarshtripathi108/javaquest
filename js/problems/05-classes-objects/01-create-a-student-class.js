/* JavaQuest — Problem: Create a Student Class (Classes & Objects, Easy) */
PROBLEMS.push({
  id: '5-01',
  topicId: 5,
  topic: 'Classes & Objects',
  title: 'Create a Student Class',
  difficulty: 'Easy',
  statement: '<p>Ek <code>Student</code> class banao jisme do fields hon — <code>name</code> (String) aur <code>roll</code> (int) — aur ek <code>display()</code> method jo student ki details <code>roll : name</code> format me return kare. Method <code>studentInfo</code> ko naam aur roll number milega, use Student object bana kar uski details return karni hai.</p>',
  examples: [
    { input: 'name = "Adarsh", roll = 101', output: '"101 : Adarsh"', explanation: 'Student object banaya, fields set kiye, display() ne "101 : Adarsh" return kiya.' },
    { input: 'name = "Meena", roll = 205', output: '"205 : Meena"', explanation: 'Naye object me naye values set hue aur display() ne "205 : Meena" return kiya.' }
  ],
  constraints: ['name khaali string nahi hoga', 'roll ek positive integer hoga'],
  starter: 'class Solution {\n    class Student {\n        String name;\n        int roll;\n        String display() {\n            // TODO: roll aur name ko "roll : name" format me return karo\n            return "";\n        }\n    }\n    String studentInfo(String name, int roll) {\n        // TODO: Student object banao aur display() ka result return karo\n        return "";\n    }\n}',
  solution: 'class Solution {\n    class Student {\n        String name;\n        int roll;\n        String display() {\n            return roll + " : " + name;\n        }\n    }\n    String studentInfo(String name, int roll) {\n        Student s = new Student();\n        s.name = name;\n        s.roll = roll;\n        return s.display();\n    }\n}',
  explanation: '<p>Class ek blueprint hai aur object uska instance. <code>new Student()</code> se object banta hai, fields me values set hoti hain, aur <code>display()</code> method unhe format karke return karta hai.</p>'
});
