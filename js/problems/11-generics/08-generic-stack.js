/* JavaQuest — Problem: Generic Stack (Generics, Medium) */
PROBLEMS.push({
  id: '11-08',
  topicId: 11,
  topic: 'Generics',
  title: 'Generic Stack',
  difficulty: 'Medium',
  statement: '<p>Ek generic class MyStack<T> banao jo ArrayList se stack implement kare: push (add), pop (aakhri element nikalo), peek (aakhri element dekho) aur size methods hon. Phir 10, 20, 30 push karke ek pop karo aur "Popped: 30, Top: 20, Size: 2" return karo.</p>',
  examples: [
    { input: 'stackDemo()', output: 'Popped: 30, Top: 20, Size: 2', explanation: 'Pop 30 nikalta hai, top par 20 bachta hai, size 2 reh jata hai.' },
    { input: 'stackDemo() (dobara chalane par)', output: 'Popped: 30, Top: 20, Size: 2', explanation: 'Deterministic demo hai — dobara chalane par bhi wahi output milta hai.' }
  ],
  constraints: ['Stack generic (MyStack<T>) honi chahiye', 'pop khaali stack par call nahi hoga'],
  starter: 'import java.util.*;\n\nclass Solution {\n    String stackDemo() {\n        // TODO: generic stack banao aur test karo\n        return "";\n    }\n}',
  solution: 'import java.util.*;\n\nclass MyStack<T> {\n    private List<T> items = new ArrayList<>();\n\n    void push(T item) {\n        items.add(item);\n    }\n\n    T pop() {\n        return items.remove(items.size() - 1);\n    }\n\n    T peek() {\n        return items.get(items.size() - 1);\n    }\n\n    int size() {\n        return items.size();\n    }\n}\n\nclass Solution {\n    String stackDemo() {\n        MyStack<Integer> s = new MyStack<>();\n        s.push(10);\n        s.push(20);\n        s.push(30);\n        int popped = s.pop();\n        return "Popped: " + popped + ", Top: " + s.peek() + ", Size: " + s.size();\n    }\n}',
  explanation: '<p>Stack LIFO hota hai — aakhri aaya pehle nikalta hai. ArrayList ke end se add aur remove karna stack ka kaam karta hai, aur generic type T ki wajah se ye stack kisi bhi type ke saath chalta hai.</p>'
});
