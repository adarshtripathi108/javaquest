/* JavaQuest — Problem: Multi-Level Sort of Students (Iterators, Comparators & Sorting Collections, Hard) */
PROBLEMS.push({
  id: '15-11',
  topicId: 15,
  topic: 'Iterators, Comparators & Sorting Collections',
  title: 'Multi-Level Sort of Students',
  difficulty: 'Hard',
  statement: '<p>Students ko teen levels pe sort karo: pehle marks <b>descending</b> (zyada marks pehle), phir naam <b>ascending</b> (alphabetical), aur aakhir me roll number <b>ascending</b>. Teen comparators ko ek chain me jodo.</p><p><code>reversed()</code> pehle level ko ulta kar deta hai, aur <code>thenComparing()</code> agle levels jodta hai. Dhyaan rakho — <code>reversed()</code> sirf us comparator pe lagta hai jiske saath likha hai, poori chain pe nahi.</p>',
  examples: [
    { input: '[Adarsh (101, 85), Meena (102, 92), Rahul (103, 85), Kabir (100, 85)]', output: '[Meena (102, 92), Adarsh (101, 85), Kabir (100, 85), Rahul (103, 85)]', explanation: 'Meena ke marks sabse zyada (92) hain, isliye pehle. Baaki teeno ke 85 marks hain, to naam alphabetical: Adarsh, Kabir, Rahul.' },
    { input: '[Adarsh (105, 80), Adarsh (103, 80)] (same naam, same marks)', output: '[Adarsh (103, 80), Adarsh (105, 80)]', explanation: 'Marks aur naam dono barabar hain, to teesra level roll number decide karta hai — 103 pehle aata hai.' }
  ],
  constraints: ['List me 0 se 1000 students ho sakte hain.', 'Order: marks desc, naam asc, rollNo asc.', 'Chained comparator ka use karo.'],
  starter: 'import java.util.Comparator;\nimport java.util.List;\n\nclass Solution {\n    static class Student {\n        String name;\n        int rollNo;\n        int marks;\n\n        Student(String name, int rollNo, int marks) {\n            this.name = name;\n            this.rollNo = rollNo;\n            this.marks = marks;\n        }\n    }\n\n    public List<Student> sortStudents(List<Student> students) {\n        // TODO: marks desc, naam asc, rollNo asc — teen levels pe sort karo\n        return students;\n    }\n}',
  solution: 'import java.util.Comparator;\nimport java.util.List;\n\nclass Solution {\n    static class Student {\n        String name;\n        int rollNo;\n        int marks;\n\n        Student(String name, int rollNo, int marks) {\n            this.name = name;\n            this.rollNo = rollNo;\n            this.marks = marks;\n        }\n    }\n\n    public List<Student> sortStudents(List<Student> students) {\n        students.sort(Comparator.comparingInt((Student s) -> s.marks).reversed()\n            .thenComparing(s -> s.name)\n            .thenComparingInt(s -> s.rollNo));\n        return students;\n    }\n}',
  explanation: '<p><code>comparingInt(...).reversed()</code> marks descending karta hai. <code>thenComparing(s -&gt; s.name)</code> tie hone par naam alphabetical dekhta hai, aur <code>thenComparingInt(s -&gt; s.rollNo)</code> aakhiri tie-breaker hai. Chain left-to-right evaluate hoti hai — pehla non-zero result hi final order decide karta hai.</p>'
});
