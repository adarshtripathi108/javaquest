/* JavaQuest — Problem: Find the Topper (Classes & Objects, Hard) */
PROBLEMS.push({
  id: '5-12',
  topicId: 5,
  topic: 'Classes & Objects',
  title: 'Find the Topper',
  difficulty: 'Hard',
  statement: '<p>Ek <code>Student</code> class banao jisme <code>name</code> aur <code>marks</code> fields hon. Method <code>topper</code> ko names aur marks ki arrays milengi — har student ka object banao, sabse zyada marks wala student dhoondo, aur uska naam return karo. Agar tie ho to pehle aane wale student ka naam return karo.</p>',
  examples: [
    { input: 'names = ["Amit", "Neha", "Ravi"], marks = [78, 92, 85]', output: '"Neha"', explanation: 'Neha ke 92 marks sabse zyada hain, isliye topper Neha hai.' },
    { input: 'names = ["Zara", "Kabir"], marks = [88, 88]', output: '"Zara"', explanation: 'Dono ke marks barabar hain, tie me pehle wali Zara return hoti hai.' }
  ],
  constraints: ['names aur marks arrays ki length barabar hogi', 'kam se kam ek student hoga', 'marks 0 se 100 ke beech honge'],
  starter: 'class Solution {\n    class Student {\n        String name;\n        int marks;\n        Student(String name, int marks) {\n            this.name = name;\n            this.marks = marks;\n        }\n    }\n    String topper(String[] names, int[] marks) {\n        // TODO: Student objects banao aur topper ka naam return karo\n        return "";\n    }\n}',
  solution: 'class Solution {\n    class Student {\n        String name;\n        int marks;\n        Student(String name, int marks) {\n            this.name = name;\n            this.marks = marks;\n        }\n    }\n    String topper(String[] names, int[] marks) {\n        Student best = new Student(names[0], marks[0]);\n        for (int i = 1; i < names.length; i++) {\n            Student s = new Student(names[i], marks[i]);\n            if (s.marks > best.marks) {\n                best = s;\n            }\n        }\n        return best.name;\n    }\n}',
  explanation: '<p>Har student ko ek object me rakha gaya, phir loop me sabse zyada marks wala track kiya gaya. Comparison me sirf <code>&gt;</code> use hua hai ( <code>&gt;=</code> nahi), isliye tie me pehle wala student hi best rehta hai.</p>'
});
