/* JavaQuest — Problem: Multiple Interfaces (Abstract Classes, Packages & Interfaces, Easy) */
PROBLEMS.push({
  id: '7-03',
  topicId: 7,
  topic: 'Abstract Classes, Packages & Interfaces',
  title: 'Multiple Interfaces',
  difficulty: 'Easy',
  statement: '<p>Java me ek class ek se zyada interfaces implement kar sakti hai. <code>Flyable</code> interface me <code>fly()</code> aur <code>Swimmable</code> me <code>swim()</code> method ho. <code>Duck</code> class dono ko implement kare — fly() <code>Duck flies</code> aur swim() <code>Duck swims</code> return kare. Method <code>duckAbilities</code> dono ko jod kar return kare.</p>',
  examples: [
    { input: 'duckAbilities()', output: '"Duck flies and Duck swims"', explanation: 'Duck ne dono interfaces ke methods implement kiye.' },
    { input: 'duckFly()', output: '"Duck flies"', explanation: 'Flyable wala method akela bhi call ho sakta hai.' }
  ],
  constraints: [],
  starter: 'class Solution {\n    interface Flyable {\n        String fly();\n    }\n    interface Swimmable {\n        String swim();\n    }\n    class Duck implements Flyable, Swimmable {\n        public String fly() {\n            // TODO: "Duck flies" return karo\n            return "";\n        }\n        public String swim() {\n            // TODO: "Duck swims" return karo\n            return "";\n        }\n    }\n    String duckAbilities() {\n        return "";\n    }\n    String duckFly() {\n        return "";\n    }\n}',
  solution: 'class Solution {\n    interface Flyable {\n        String fly();\n    }\n    interface Swimmable {\n        String swim();\n    }\n    class Duck implements Flyable, Swimmable {\n        public String fly() {\n            return "Duck flies";\n        }\n        public String swim() {\n            return "Duck swims";\n        }\n    }\n    String duckAbilities() {\n        Duck d = new Duck();\n        return d.fly() + " and " + d.swim();\n    }\n    String duckFly() {\n        Duck d = new Duck();\n        return d.fly();\n    }\n}',
  explanation: '<p>Java multiple inheritance of classes allow nahi karta, lekin multiple interfaces implement karna allow karta hai. Duck ek saath Flyable aur Swimmable dono ban jata hai — dono ke methods implement karke.</p>'
});
