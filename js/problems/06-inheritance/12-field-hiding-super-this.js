/* JavaQuest — Problem: Field Hiding with Super and This (Inheritance, Hard) */
PROBLEMS.push({
  id: '6-12',
  topicId: 6,
  topic: 'Inheritance',
  title: 'Field Hiding with Super and This',
  difficulty: 'Hard',
  statement: '<p>Jab parent aur child class me ek hi naam ka field ho to child ka field parent wale ko hide kar deta hai — ise <b>field hiding</b> kehte hain. <code>Parent</code> me <code>x = 10</code> aur <code>Child</code> me <code>x = 20</code> rakho. Child ka <code>show()</code> method <code>super.x</code> se parent ki value aur <code>this.x</code> se apni value nikaal kar dono return kare.</p>',
  examples: [
    { input: 'showValues()', output: '"Parent x: 10, Child x: 20"', explanation: 'super.x ne 10 diya aur this.x ne 20.' },
    { input: 'childX()', output: '20', explanation: 'Seedha x likhne par Child ka apna field milta hai — 20.' }
  ],
  constraints: [],
  starter: 'class Solution {\n    class Parent {\n        int x = 10;\n    }\n    class Child extends Parent {\n        int x = 20;\n        String show() {\n            // TODO: super.x aur this.x se "Parent x: 10, Child x: 20" return karo\n            return "";\n        }\n        int childX() {\n            // TODO: apna x return karo\n            return 0;\n        }\n    }\n    String showValues() {\n        Child c = new Child();\n        return c.show();\n    }\n    int childX() {\n        Child c = new Child();\n        return c.childX();\n    }\n}',
  solution: 'class Solution {\n    class Parent {\n        int x = 10;\n    }\n    class Child extends Parent {\n        int x = 20;\n        String show() {\n            return "Parent x: " + super.x + ", Child x: " + this.x;\n        }\n        int childX() {\n            return x;\n        }\n    }\n    String showValues() {\n        Child c = new Child();\n        return c.show();\n    }\n    int childX() {\n        Child c = new Child();\n        return c.childX();\n    }\n}',
  explanation: '<p>Fields methods ki tarah override nahi hote — hide hote hain. Child ke andar seedha <code>x</code> likhne par Child wala 20 milta hai, aur parent wala 10 sirf <code>super.x</code> se milta hai. Ye methods ke dynamic dispatch se bilkul alag behaviour hai.</p>'
});
