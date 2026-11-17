/* JavaQuest — Problem: Default Method Conflict (Abstract Classes, Packages & Interfaces, Hard) */
PROBLEMS.push({
  id: '7-12',
  topicId: 7,
  topic: 'Abstract Classes, Packages & Interfaces',
  title: 'Default Method Conflict',
  difficulty: 'Hard',
  statement: '<p>Agar ek class do aisi interfaces implement kare jinke paas ek hi naam ka default method ho, to compiler confuse ho jata hai — class ko us method ko khud override karna hi padta hai. <code>A</code> aur <code>B</code> interfaces me <code>msg()</code> default method ho — A <code>Hello from A</code> aur B <code>Hello from B</code> return kare. Class <code>C</code> dono implement karke <code>A.super.msg()</code> se conflict resolve kare.</p>',
  examples: [
    { input: 'resolveConflict()', output: '"Resolved: Hello from A"', explanation: 'C ne msg() override kiya aur A.super.msg() se A wala version chuna.' },
    { input: 'resolveWithB()', output: '"Resolved: Hello from B"', explanation: 'B.super.msg() se B wala version bhi chuna ja sakta hai.' }
  ],
  constraints: [],
  starter: 'class Solution {\n    interface A {\n        default String msg() {\n            return "Hello from A";\n        }\n    }\n    interface B {\n        default String msg() {\n            return "Hello from B";\n        }\n    }\n    class C implements A, B {\n        public String msg() {\n            // TODO: "Resolved: " + A.super.msg() return karo\n            return "";\n        }\n        String msgFromB() {\n            // TODO: "Resolved: " + B.super.msg() return karo\n            return "";\n        }\n    }\n    String resolveConflict() {\n        C c = new C();\n        return c.msg();\n    }\n    String resolveWithB() {\n        C c = new C();\n        return c.msgFromB();\n    }\n}',
  solution: 'class Solution {\n    interface A {\n        default String msg() {\n            return "Hello from A";\n        }\n    }\n    interface B {\n        default String msg() {\n            return "Hello from B";\n        }\n    }\n    class C implements A, B {\n        public String msg() {\n            return "Resolved: " + A.super.msg();\n        }\n        String msgFromB() {\n            return "Resolved: " + B.super.msg();\n        }\n    }\n    String resolveConflict() {\n        C c = new C();\n        return c.msg();\n    }\n    String resolveWithB() {\n        C c = new C();\n        return c.msgFromB();\n    }\n}',
  explanation: '<p>Ye diamond problem ka Java 8 wala roop hai — do interfaces ka same default method class ko force karta hai ki wo khud override kare. <code>A.super.msg()</code> syntax se class kisi ek interface ka default version chun sakti hai, isliye ambiguity khatam ho jati hai.</p>'
});
