/* JavaQuest — Problem: Instanceof Operator (Inheritance, Medium) */
PROBLEMS.push({
  id: '6-10',
  topicId: 6,
  topic: 'Inheritance',
  title: 'Instanceof Operator',
  difficulty: 'Medium',
  statement: '<p><code>instanceof</code> operator check karta hai ki koi object kisi class ka instance hai ya nahi. <code>Dog</code> aur <code>Cat</code> dono <code>Animal</code> ko extend karte hain. Method <code>identify</code> ko type milega — use Animal reference se object banao aur instanceof se pehchano ki wo Dog hai ya Cat.</p>',
  examples: [
    { input: 'type = "dog"', output: '"Dog is an Animal"', explanation: 'Object Dog ka instance hai, isliye instanceof Dog true hua.' },
    { input: 'type = "cat"', output: '"Cat is an Animal"', explanation: 'Object Cat ka instance hai, isliye instanceof Dog false hua.' }
  ],
  constraints: ['type "dog" ya "cat" hoga'],
  starter: 'class Solution {\n    class Animal {\n    }\n    class Dog extends Animal {\n    }\n    class Cat extends Animal {\n    }\n    String identify(String type) {\n        // TODO: Animal reference se object banao aur instanceof se pehchano\n        return "";\n    }\n}',
  solution: 'class Solution {\n    class Animal {\n    }\n    class Dog extends Animal {\n    }\n    class Cat extends Animal {\n    }\n    String identify(String type) {\n        Animal a;\n        if (type.equals("dog")) {\n            a = new Dog();\n        } else {\n            a = new Cat();\n        }\n        if (a instanceof Dog) {\n            return "Dog is an Animal";\n        }\n        return "Cat is an Animal";\n    }\n}',
  explanation: '<p>Jab reference parent type ka ho to <code>instanceof</code> batata hai ki asli object kaunsi subclass ka hai. Ye casting se pehle safety check ke liye bhi use hota hai — galat cast <code>ClassCastException</code> deta hai.</p>'
});
