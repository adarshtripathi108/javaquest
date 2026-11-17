/* JavaQuest — Problem: Interface Default Method (Abstract Classes, Packages & Interfaces, Easy) */
PROBLEMS.push({
  id: '7-05',
  topicId: 7,
  topic: 'Abstract Classes, Packages & Interfaces',
  title: 'Interface Default Method',
  difficulty: 'Easy',
  statement: '<p>Interface me <code>default</code> method ki body hoti hai — implement karne wali class use bina override kiye use kar sakti hai. <code>Greeting</code> interface me default methods <code>greet()</code> (<code>Hello!</code>) aur <code>farewell()</code> (<code>Goodbye!</code>) hon. <code>Person</code> class Greeting ko implement kare bina kuch override kiye.</p>',
  examples: [
    { input: 'greetPerson()', output: '"Hello!"', explanation: 'Person ne greet() override nahi kiya, isliye default version chala.' },
    { input: 'farewellPerson()', output: '"Goodbye!"', explanation: 'farewell() ka bhi default version chala.' }
  ],
  constraints: [],
  starter: 'class Solution {\n    interface Greeting {\n        default String greet() {\n            return "Hello!";\n        }\n        default String farewell() {\n            return "Goodbye!";\n        }\n    }\n    class Person implements Greeting {\n        // kuch override nahi — default methods use honge\n    }\n    String greetPerson() {\n        return "";\n    }\n    String farewellPerson() {\n        return "";\n    }\n}',
  solution: 'class Solution {\n    interface Greeting {\n        default String greet() {\n            return "Hello!";\n        }\n        default String farewell() {\n            return "Goodbye!";\n        }\n    }\n    class Person implements Greeting {\n        // kuch override nahi — default methods use honge\n    }\n    String greetPerson() {\n        Person p = new Person();\n        return p.greet();\n    }\n    String farewellPerson() {\n        Person p = new Person();\n        return p.farewell();\n    }\n}',
  explanation: '<p>Java 8 se interface me <code>default</code> methods likhe ja sakte hain jinki body hoti hai. Implement karne wali class chahe to use override kar sakti hai, warna default behaviour hi mil jata hai — purani classes tode bina interface me naya method jodne ka tareeka hai.</p>'
});
