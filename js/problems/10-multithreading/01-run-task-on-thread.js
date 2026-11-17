/* JavaQuest — Problem: Run a Task on a Thread (Multithreading, Easy) */
PROBLEMS.push({
  id: '10-01',
  topicId: 10,
  topic: 'Multithreading',
  title: 'Run a Task on a Thread',
  difficulty: 'Easy',
  statement: '<p>Ek naya thread banao jo ek shared variable me 42 likhe. Thread ko start karo aur join se uske khatam hone ka wait karo, phir us variable ki value return karo. join ke bina main thread pehle return kar sakta hai aur galat value mil sakti hai.</p>',
  examples: [
    { input: 'runThreadTask()', output: '42', explanation: 'Thread 42 likhta hai, join wait karta hai, phir 42 return hota hai.' },
    { input: 'runThreadTask() (dobara chalane par)', output: '42', explanation: 'Deterministic demo hai — dobara chalane par bhi wahi output milta hai.' }
  ],
  constraints: ['Method ko InterruptedException declare karni hai', 'Thread ke andar ka kaam join ke baad hi complete mana jata hai'],
  starter: 'class Solution {\n    int runThreadTask() throws InterruptedException {\n        // TODO: thread banao, start karo, join karo\n        return 0;\n    }\n}',
  solution: 'class Solution {\n    int runThreadTask() throws InterruptedException {\n        int[] result = new int[1];\n        Thread t = new Thread(() -> {\n            result[0] = 42;\n        });\n        t.start();\n        t.join();\n        return result[0];\n    }\n}',
  explanation: '<p>Thread banane ke liye Runnable (yahan lambda) pass karo, start se thread chalao aur join se uske khatam hone tak ruko. Array isliye use kiya hai kyunki lambda ke andar local variable change nahi kar sakte.</p>'
});
