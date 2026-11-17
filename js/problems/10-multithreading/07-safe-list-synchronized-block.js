/* JavaQuest — Problem: Safe List with Synchronized Block (Multithreading, Medium) */
PROBLEMS.push({
  id: '10-07',
  topicId: 10,
  topic: 'Multithreading',
  title: 'Safe List with Synchronized Block',
  difficulty: 'Medium',
  statement: '<p>Ek ArrayList di gayi hai jisme do threads har ek 500 numbers add karte hain. ArrayList thread-safe nahi hai, isliye add ko synchronized(list) block ke andar rakho. Dono threads ko join karke list ka size return karo — sahi answer 1000 hona chahiye.</p>',
  examples: [
    { input: 'safeListAdd()', output: '1000', explanation: '2 threads x 500 adds = 1000, synchronized block ki wajah se koi add nahi khota.' },
    { input: 'safeListAdd() (dobara chalane par)', output: '1000', explanation: 'Deterministic demo hai — dobara chalane par bhi wahi output milta hai.' }
  ],
  constraints: ['Har thread 500 elements add karta hai', 'Add operation synchronized block ke andar honi chahiye'],
  starter: 'import java.util.*;\n\nclass Solution {\n    int safeListAdd() throws InterruptedException {\n        // TODO: synchronized block se list me safely add karo\n        return 0;\n    }\n}',
  solution: 'import java.util.*;\n\nclass Solution {\n    int safeListAdd() throws InterruptedException {\n        List<Integer> list = new ArrayList<>();\n        Runnable task = () -> {\n            for (int i = 0; i < 500; i++) {\n                synchronized (list) {\n                    list.add(i);\n                }\n            }\n        };\n        Thread t1 = new Thread(task);\n        Thread t2 = new Thread(task);\n        t1.start();\n        t2.start();\n        t1.join();\n        t2.join();\n        return list.size();\n    }\n}',
  explanation: '<p>synchronized block sirf zaroori hisse ko lock karta hai — poora method lock karne se behtar hai. Yahan list object par lock lagta hai, isliye ek time me ek hi thread add kar sakta hai aur size hamesha 1000 aata hai.</p>'
});
