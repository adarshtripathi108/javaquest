/* JavaQuest — Problem: Multilevel Inheritance (Inheritance, Easy) */
PROBLEMS.push({
  id: '6-05',
  topicId: 6,
  topic: 'Inheritance',
  title: 'Multilevel Inheritance',
  difficulty: 'Easy',
  statement: '<p>Teen levels ki inheritance banao — <code>Animal</code> class me <code>eat()</code> method <code>Eating</code> return kare, <code>Dog</code> Animal ko extend kare aur <code>bark()</code> method <code>Barking</code> return kare, aur <code>Puppy</code> Dog ko extend kare aur <code>weep()</code> method <code>Weeping</code> return kare. Puppy ka object teeno methods call kar sakta hai.</p>',
  examples: [
    { input: 'puppyActions()', output: '"Eating, Barking, Weeping"', explanation: 'Puppy ko eat() Animal se, bark() Dog se mila, weep() apna hai.' },
    { input: 'dogActions()', output: '"Eating, Barking"', explanation: 'Dog ko eat() Animal se mila aur bark() apna hai.' }
  ],
  constraints: [],
  starter: 'class Solution {\n    class Animal {\n        String eat() {\n            return "Eating";\n        }\n    }\n    class Dog extends Animal {\n        String bark() {\n            return "Barking";\n        }\n    }\n    class Puppy extends Dog {\n        String weep() {\n            return "Weeping";\n        }\n    }\n    String puppyActions() {\n        // TODO: Puppy object se teeno actions jod kar return karo\n        return "";\n    }\n    String dogActions() {\n        // TODO: Dog object se dono actions jod kar return karo\n        return "";\n    }\n}',
  solution: 'class Solution {\n    class Animal {\n        String eat() {\n            return "Eating";\n        }\n    }\n    class Dog extends Animal {\n        String bark() {\n            return "Barking";\n        }\n    }\n    class Puppy extends Dog {\n        String weep() {\n            return "Weeping";\n        }\n    }\n    String puppyActions() {\n        Puppy p = new Puppy();\n        return p.eat() + ", " + p.bark() + ", " + p.weep();\n    }\n    String dogActions() {\n        Dog d = new Dog();\n        return d.eat() + ", " + d.bark();\n    }\n}',
  explanation: '<p>Multilevel inheritance me ek class doosri subclass ki subclass hoti hai. Puppy ko Dog ke saare methods aur Dog ke through Animal ke saare methods mil jate hain — chain me neeche wala sab kuch inherit karta hai.</p>'
});
