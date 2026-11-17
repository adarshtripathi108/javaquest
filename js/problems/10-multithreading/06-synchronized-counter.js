/* JavaQuest — Problem: Synchronized Counter (Multithreading, Medium) */
PROBLEMS.push({
  id: '10-06',
  topicId: 10,
  topic: 'Multithreading',
  title: 'Synchronized Counter',
  difficulty: 'Medium',
  statement: '<p>Ek Counter class banao jiska increment method synchronized ho. Do threads har ek 1000 baar increment karein. Dono ko join karo aur final count return karo. synchronized ke bina kuch increments kho jate aur count 2000 se kam aa sakta hai.</p>',
  examples: [
    { input: 'synchronizedCount()', output: '2000', explanation: '2 threads x 1000 increments = 2000, synchronized ki wajah se koi increment nahi khota.' },
    { input: 'synchronizedCount() (dobara chalane par)', output: '2000', explanation: 'Deterministic demo hai — dobara chalane par bhi wahi output milta hai.' }
  ],
  constraints: ['Har thread 1000 baar increment karta hai', 'increment method synchronized hona chahiye'],
  starter: 'class Solution {\n    int synchronizedCount() throws InterruptedException {\n        // TODO: synchronized counter se 2000 tak gino\n        return 0;\n    }\n}',
  solution: 'class Counter {\n    private int count = 0;\n\n    synchronized void increment() {\n        count++;\n    }\n\n    int getCount() {\n        return count;\n    }\n}\n\nclass Solution {\n    int synchronizedCount() throws InterruptedException {\n        Counter counter = new Counter();\n        Runnable task = () -> {\n            for (int i = 0; i < 1000; i++) {\n                counter.increment();\n            }\n        };\n        Thread t1 = new Thread(task);\n        Thread t2 = new Thread(task);\n        t1.start();\n        t2.start();\n        t1.join();\n        t2.join();\n        return counter.getCount();\n    }\n}',
  explanation: '<p>count++ teen steps ka kaam hai (read, add, write), isliye do threads ek saath karne par race condition hoti hai. synchronized method par ek time me ek hi thread ja sakta hai, isliye har increment safe ho jata hai.</p>'
});
