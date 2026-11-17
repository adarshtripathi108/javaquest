/* JavaQuest — Problem: Sort Employees with Comparable (Iterators, Comparators & Sorting Collections, Medium) */
PROBLEMS.push({
  id: '15-08',
  topicId: 15,
  topic: 'Iterators, Comparators & Sorting Collections',
  title: 'Sort Employees with Comparable',
  difficulty: 'Medium',
  statement: '<p><code>Employee</code> class ko <code>Comparable</code> implement karke salary ke hisaab se sort karne laayak banao, phir employees ki list ko <code>Collections.sort()</code> se sort karo.</p><p><code>Comparable</code> class ke andar uska natural order define karta hai — <code>compareTo()</code> method batata hai ki ek object dusre se chhota, barabar ya bada hai. <code>Integer.compare()</code> se overflow se bacha ja sakta hai (seedha minus karna galat ho sakta hai).</p>',
  examples: [
    { input: '[Rahul (50000), Adarsh (30000), Meena (40000)]', output: '[Adarsh (30000), Meena (40000), Rahul (50000)]', explanation: 'Salary ascending order me sort hoti hai — sabse kam salary pehle.' },
    { input: '[Meena (40000), Adarsh (40000)] (barabar salary)', output: '[Meena (40000), Adarsh (40000)]', explanation: 'Barabar salary par stable sort original order banae rakhta hai.' }
  ],
  constraints: ['Employee class Comparable implement karegi.', 'compareTo me Integer.compare() ka use karo.', 'Sort salary ascending pe hona chahiye.'],
  starter: 'import java.util.Collections;\nimport java.util.List;\n\nclass Solution {\n    static class Employee implements Comparable<Employee> {\n        String name;\n        int salary;\n\n        Employee(String name, int salary) {\n            this.name = name;\n            this.salary = salary;\n        }\n\n        public int compareTo(Employee other) {\n            // TODO: salary se compare karo\n            return 0;\n        }\n\n        public String toString() {\n            return name + ":" + salary;\n        }\n    }\n\n    public List<Employee> sortEmployees(List<Employee> list) {\n        // TODO: Collections.sort se sort karo\n        return list;\n    }\n}',
  solution: 'import java.util.Collections;\nimport java.util.List;\n\nclass Solution {\n    static class Employee implements Comparable<Employee> {\n        String name;\n        int salary;\n\n        Employee(String name, int salary) {\n            this.name = name;\n            this.salary = salary;\n        }\n\n        public int compareTo(Employee other) {\n            return Integer.compare(this.salary, other.salary);\n        }\n\n        public String toString() {\n            return name + ":" + salary;\n        }\n    }\n\n    public List<Employee> sortEmployees(List<Employee> list) {\n        Collections.sort(list);\n        return list;\n    }\n}',
  explanation: '<p><code>compareTo</code> me <code>Integer.compare(this.salary, other.salary)</code> negative deta hai jab iski salary kam hai, 0 jab barabar hai, aur positive jab zyada hai. <code>Collections.sort()</code> isi natural order ka use karke list sort kar deta hai — koi alag Comparator chahiye hi nahi.</p>'
});
