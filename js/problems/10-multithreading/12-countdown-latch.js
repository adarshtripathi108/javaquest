/* JavaQuest — Problem: CountDownLatch Coordination (Multithreading, Hard) */
PROBLEMS.push({
  id: '10-12',
  topicId: 10,
  topic: 'Multithreading',
  title: 'CountDownLatch Coordination',
  difficulty: 'Hard',
  statement: '<p>Teen worker threads chalane hain aur main thread ko un sabke khatam hone ka wait karna hai. CountDownLatch(3) banao — har worker apna kaam khatam karke countDown call kare, aur main thread await se wait karke "All workers done" return kare.</p>',
  examples: [
    { input: 'latchDemo()', output: 'All workers done', explanation: 'Teeno workers countDown karte hain, tabhi await khulta hai aur message return hota hai.' },
    { input: 'latchDemo() (dobara chalane par)', output: 'All workers done', explanation: 'Deterministic demo hai — dobara chalane par bhi wahi output milta hai.' }
  ],
  constraints: ['Latch ka count 3 hai', 'Method ko InterruptedException declare karni hai'],
  starter: 'import java.util.concurrent.CountDownLatch;\n\nclass Solution {\n    String latchDemo() throws InterruptedException {\n        // TODO: CountDownLatch se workers ka wait karo\n        return "";\n    }\n}',
  solution: 'import java.util.concurrent.CountDownLatch;\n\nclass Solution {\n    String latchDemo() throws InterruptedException {\n        CountDownLatch latch = new CountDownLatch(3);\n        for (int i = 0; i < 3; i++) {\n            new Thread(() -> {\n                try {\n                    Thread.sleep(50);\n                } catch (InterruptedException e) {\n                    Thread.currentThread().interrupt();\n                }\n                latch.countDown();\n            }).start();\n        }\n        latch.await();\n        return "All workers done";\n    }\n}',
  explanation: '<p>CountDownLatch ek countdown timer jaisa hai: await us waqt tak rukta hai jab tak count zero na ho jaye. Har worker countDown se count ek kam karta hai. Ye multiple threads ke saath coordinate karne ka saaf tareeka hai.</p>'
});
