/* JavaQuest — Problem: Generic Box (Generics, Easy) */
PROBLEMS.push({
  id: '11-01',
  topicId: 11,
  topic: 'Generics',
  title: 'Generic Box',
  difficulty: 'Easy',
  statement: '<p>Ek generic class Box<T> banao jisme ek value store ho — set method se value rakho aur get method se wapas lo. Phir Box<String> bana kar usme "Hello Generics" rakho aur get se wahi string return karo. Generics se ek hi class har type ke saath kaam karti hai.</p>',
  examples: [
    { input: 'boxDemo()', output: 'Hello Generics', explanation: 'Box<String> me string rakhi aur wapas li, bina cast ke.' },
    { input: 'boxDemo() (dobara chalane par)', output: 'Hello Generics', explanation: 'Deterministic demo hai — dobara chalane par bhi wahi output milta hai.' }
  ],
  constraints: ['Box class generic (Box<T>) honi chahiye', 'get method ko cast nahi karna hai'],
  starter: 'class Solution {\n    String boxDemo() {\n        // TODO: generic Box banao aur use karo\n        return "";\n    }\n}',
  solution: 'class Box<T> {\n    private T value;\n\n    void set(T value) {\n        this.value = value;\n    }\n\n    T get() {\n        return value;\n    }\n}\n\nclass Solution {\n    String boxDemo() {\n        Box<String> box = new Box<>();\n        box.set("Hello Generics");\n        return box.get();\n    }\n}',
  explanation: '<p><T> ek type parameter hai jo compile time par actual type se badal jata hai. Isse type safety milti hai — galat type daalne par compile error aata hai, aur get par cast ki zaroorat nahi padti.</p>'
});
