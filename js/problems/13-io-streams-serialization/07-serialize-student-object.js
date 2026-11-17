/* JavaQuest — Problem: Serialize and Deserialize a Student Object (IO Streams & Serialization, Medium) */
PROBLEMS.push({
  id: '13-07',
  topicId: 13,
  topic: 'IO Streams & Serialization',
  title: 'Serialize and Deserialize a Student Object',
  difficulty: 'Medium',
  statement: '<p>Ek <code>Student</code> object ko file me save karo (serialization) aur phir use wapas padhkar return karo (deserialization). <code>Student</code> class ko <code>Serializable</code> interface implement karna hoga, warna <code>NotSerializableException</code> aayega.</p><p>Serialization object ko byte stream me badal deta hai taaki use file ya network pe bheja ja sake, aur deserialization usi byte stream se object wapas bana deta hai.</p>',
  examples: [
    { input: 'Student("Adarsh", 101, 85), path = "student.ser"', output: 'Student{name=Adarsh, rollNo=101, marks=85}', explanation: 'Object file me save hokar wapas padha jata hai — saare fields same rehte hain.' },
    { input: 'Student("Meena", 102, 92), path = "student.ser"', output: 'Student{name=Meena, rollNo=102, marks=92}', explanation: 'Dusre object ke saath bhi wahi process kaam karta hai, data bilkul same wapas milta hai.' }
  ],
  constraints: ['Student class Serializable honi chahiye.', 'serialVersionUID define karo.', 'Deserialized object ke saare fields original jaisi honi chahiye.'],
  starter: 'import java.io.*;\n\nclass Solution {\n    static class Student implements Serializable {\n        private static final long serialVersionUID = 1L;\n        String name;\n        int rollNo;\n        int marks;\n\n        Student(String name, int rollNo, int marks) {\n            this.name = name;\n            this.rollNo = rollNo;\n            this.marks = marks;\n        }\n\n        public String toString() {\n            return "Student{name=" + name + ", rollNo=" + rollNo + ", marks=" + marks + "}";\n        }\n    }\n\n    public Student saveAndLoad(Student s, String path) throws IOException, ClassNotFoundException {\n        // TODO: ObjectOutputStream se save karo, ObjectInputStream se wapas padho\n        return null;\n    }\n}',
  solution: 'import java.io.*;\n\nclass Solution {\n    static class Student implements Serializable {\n        private static final long serialVersionUID = 1L;\n        String name;\n        int rollNo;\n        int marks;\n\n        Student(String name, int rollNo, int marks) {\n            this.name = name;\n            this.rollNo = rollNo;\n            this.marks = marks;\n        }\n\n        public String toString() {\n            return "Student{name=" + name + ", rollNo=" + rollNo + ", marks=" + marks + "}";\n        }\n    }\n\n    public Student saveAndLoad(Student s, String path) throws IOException, ClassNotFoundException {\n        try (ObjectOutputStream out = new ObjectOutputStream(new FileOutputStream(path))) {\n            out.writeObject(s);\n        }\n        try (ObjectInputStream in = new ObjectInputStream(new FileInputStream(path))) {\n            return (Student) in.readObject();\n        }\n    }\n}',
  explanation: '<p><code>ObjectOutputStream.writeObject()</code> object ko bytes me badalkar file me likh deta hai, aur <code>ObjectInputStream.readObject()</code> un bytes se object wapas bana deta hai — bas <code>Student</code> type me cast karna padta hai. <code>serialVersionUID</code> version matching ke liye zaroori hai.</p>'
});
