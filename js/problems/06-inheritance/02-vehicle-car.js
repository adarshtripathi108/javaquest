/* JavaQuest — Problem: Vehicle and Car (Inheritance, Easy) */
PROBLEMS.push({
  id: '6-02',
  topicId: 6,
  topic: 'Inheritance',
  title: 'Vehicle and Car',
  difficulty: 'Easy',
  statement: '<p>Ek <code>Vehicle</code> class banao jisme <code>wheels</code> field ho. <code>Car</code> class Vehicle ko extend kare aur wheels ko 4 set kare, aur <code>Bike</code> class Vehicle ko extend kare aur wheels ko 2 set kare. Dono ke objects se wheels ki sankhya return karo.</p>',
  examples: [
    { input: 'carWheels()', output: '4', explanation: 'Car ke constructor ne wheels ko 4 set kiya.' },
    { input: 'bikeWheels()', output: '2', explanation: 'Bike ke constructor ne wheels ko 2 set kiya.' }
  ],
  constraints: [],
  starter: 'class Solution {\n    class Vehicle {\n        int wheels;\n    }\n    class Car extends Vehicle {\n        Car() {\n            // TODO: wheels ko 4 set karo\n        }\n    }\n    class Bike extends Vehicle {\n        Bike() {\n            // TODO: wheels ko 2 set karo\n        }\n    }\n    int carWheels() {\n        return 0;\n    }\n    int bikeWheels() {\n        return 0;\n    }\n}',
  solution: 'class Solution {\n    class Vehicle {\n        int wheels;\n    }\n    class Car extends Vehicle {\n        Car() {\n            wheels = 4;\n        }\n    }\n    class Bike extends Vehicle {\n        Bike() {\n            wheels = 2;\n        }\n    }\n    int carWheels() {\n        Car c = new Car();\n        return c.wheels;\n    }\n    int bikeWheels() {\n        Bike b = new Bike();\n        return b.wheels;\n    }\n}',
  explanation: '<p><code>wheels</code> field parent class me ek baar likha gaya, aur dono subclasses ko inherit hua. Har subclass apne constructor me use apni value de deti hai — code dobara likhne ki zaroorat nahi.</p>'
});
