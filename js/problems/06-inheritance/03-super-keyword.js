/* JavaQuest — Problem: Super Keyword (Inheritance, Easy) */
PROBLEMS.push({
  id: '6-03',
  topicId: 6,
  topic: 'Inheritance',
  title: 'Super Keyword',
  difficulty: 'Easy',
  statement: '<p>Ek <code>Parent</code> class banao jisme <code>name</code> field ki value <code>Parent</code> ho. <code>Child</code> class Parent ko extend kare aur apna <code>name</code> field <code>Child</code> rakhe. Child ka <code>showNames()</code> method <code>super.name</code> aur <code>this.name</code> dono ko use karke <code>Parent and Child</code> return kare.</p>',
  examples: [
    { input: 'showNames()', output: '"Parent and Child"', explanation: 'super.name ne Parent ki value di aur this.name ne Child ki.' },
    { input: 'childName()', output: '"Child"', explanation: 'Child ka apna name field "Child" hai.' }
  ],
  constraints: [],
  starter: 'class Solution {\n    class Parent {\n        String name = "Parent";\n    }\n    class Child extends Parent {\n        String name = "Child";\n        String showNames() {\n            // TODO: super.name aur this.name jod kar return karo\n            return "";\n        }\n        String childName() {\n            // TODO: apna name return karo\n            return "";\n        }\n    }\n    String showNames() {\n        Child c = new Child();\n        return c.showNames();\n    }\n    String childName() {\n        Child c = new Child();\n        return c.childName();\n    }\n}',
  solution: 'class Solution {\n    class Parent {\n        String name = "Parent";\n    }\n    class Child extends Parent {\n        String name = "Child";\n        String showNames() {\n            return super.name + " and " + this.name;\n        }\n        String childName() {\n            return name;\n        }\n    }\n    String showNames() {\n        Child c = new Child();\n        return c.showNames();\n    }\n    String childName() {\n        Child c = new Child();\n        return c.childName();\n    }\n}',
  explanation: '<p><code>super</code> parent class ke members ki taraf point karta hai aur <code>this</code> current object ke. Jab dono classes me ek hi naam ka field ho to <code>super.name</code> se parent wali value milti hai.</p>'
});
