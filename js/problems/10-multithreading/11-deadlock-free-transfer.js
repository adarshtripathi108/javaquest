/* JavaQuest — Problem: Deadlock-Free Bank Transfer (Multithreading, Hard) */
PROBLEMS.push({
  id: '10-11',
  topicId: 10,
  topic: 'Multithreading',
  title: 'Deadlock-Free Bank Transfer',
  difficulty: 'Hard',
  statement: '<p>Do bank accounts hain (har ek me 1000 balance). Do threads ek saath ulta transfer karte hain — ek A se B, doosra B se A, har ek 100 baar 10 rupees. transfer method me locks ko hamesha account id ke order me lo (chhota id pehle), taaki deadlock na ho. Dono threads join karke total balance return karo.</p>',
  examples: [
    { input: 'safeTransferDemo()', output: '2000', explanation: 'Transfers se paisa idhar-udhar hota hai par total 2000 hi rehta hai, aur lock ordering se deadlock nahi hota.' },
    { input: 'safeTransferDemo() (dobara chalane par)', output: '2000', explanation: 'Deterministic demo hai — dobara chalane par bhi wahi output milta hai.' }
  ],
  constraints: ['Har thread 100 baar transfer karta hai', 'Locks hamesha ek hi order (id ke hisaab se) me lene hain'],
  starter: 'class Solution {\n    int safeTransferDemo() throws InterruptedException {\n        // TODO: lock ordering se deadlock-free transfer karo\n        return 0;\n    }\n}',
  solution: 'class Account {\n    int id;\n    int balance;\n\n    Account(int id, int balance) {\n        this.id = id;\n        this.balance = balance;\n    }\n}\n\nclass Solution {\n    void transfer(Account from, Account to, int amount) {\n        Account first = from.id < to.id ? from : to;\n        Account second = from.id < to.id ? to : from;\n        synchronized (first) {\n            synchronized (second) {\n                from.balance -= amount;\n                to.balance += amount;\n            }\n        }\n    }\n\n    int safeTransferDemo() throws InterruptedException {\n        Account a = new Account(1, 1000);\n        Account b = new Account(2, 1000);\n        Thread t1 = new Thread(() -> {\n            for (int i = 0; i < 100; i++) {\n                transfer(a, b, 10);\n            }\n        });\n        Thread t2 = new Thread(() -> {\n            for (int i = 0; i < 100; i++) {\n                transfer(b, a, 10);\n            }\n        });\n        t1.start();\n        t2.start();\n        t1.join();\n        t2.join();\n        return a.balance + b.balance;\n    }\n}',
  explanation: '<p>Deadlock tab hota hai jab do threads locks ko ulte order me pakadte hain. Agar har thread locks ko ek fixed order (yahan chhota id pehle) me le, to circular wait kabhi nahi banta aur deadlock impossible ho jata hai.</p>'
});
