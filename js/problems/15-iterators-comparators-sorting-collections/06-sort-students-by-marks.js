/* JavaQuest — Problem: Sort Students by Marks (Iterators, Comparators & Sorting Collections, Medium) */
PROBLEMS.push({
  id: '15-06',
  topicId: 15,
  topic: 'Iterators, Comparators & Sorting Collections',
  title: 'Sort Students by Marks',
  difficulty: 'Medium',
  statement: '<p>Students ki ek list ko unke marks ke hisaab se ascending order me sort karo. <code>Comparator.comparingInt()</code> ka use karo — ye ek field ke basis pe comparator banane ka sabse saaf tareeka hai.</p><p>Student class ke paas <code>name</code> aur <code>marks</code> fields hain. Sort stable hota hai, matlab barabar marks wale students ka original order nahi badalta.</p>',
  examples: [
    { input: '[Meena (92), Adarsh (85), Rahul (78)]', output: '[Rahul (78), Adarsh (85), Meena (92)]', explanation: 'Marks ascending order me sort hote hain — sabse kam 78 pehle, sabse zyada 92 aakhir me.' },
    { input: '[Asha (80), Bina (80)] (barabar marks)', output: '[Asha (80), Bina (80)]', explanation: 'Barabar marks par stable sort original order banae rakhta hai.' }
  ],
  constraints: ['List me 0 se 1000 students ho sakte hain.', 'Comparator.comparingInt() ka use karo.', 'Sort ascending marks pe hona chahiye.'],
  starter: 'import java.util.Comparator;\nimport java.util.List;\n\nclass Solution {\n    static class Student {\n        String name;\n        int marks;\n\n        Student(String name, int marks) {\n            this.name = name;\n            this.marks = marks;\n        }\n    }\n\n    public List<Student> sortByMarks(List<Student> students) {\n        // TODO: marks ke hisaab se sort karo\n        return students;\n    }\n}',
  solution: 'import java.util.Comparator;\nimport java.util.List;\n\nclass Solution {\n    static class Student {\n        String name;\n        int marks;\n\n        Student(String name, int marks) {\n            this.name = name;\n            this.marks = marks;\n        }\n    }\n\n    public List<Student> sortByMarks(List<Student> students) {\n        students.sort(Comparator.comparingInt(s -> s.marks));\n        return students;\n    }\n}',
  explanation: '<p><code>Comparator.comparingInt(s -&gt; s.marks)</code> ek comparator banata hai jo har student se marks nikaalkar compare karta hai. Lambda ki wajah se poora anonymous class likhne ki zaroorat nahi padti, aur sort stable rehta hai.</p>'
});
