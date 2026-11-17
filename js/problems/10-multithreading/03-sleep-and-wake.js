/* JavaQuest — Problem: Sleep and Wake (Multithreading, Easy) */
PROBLEMS.push({
  id: '10-03',
  topicId: 10,
  topic: 'Multithreading',
  title: 'Sleep and Wake',
  difficulty: 'Easy',
  statement: '<p>Ek method likho jo current thread ko Thread.sleep se 100 milliseconds ke liye sula de, phir jaag kar "Woke up after sleep" return kare. sleep ek checked exception InterruptedException throw karta hai, isliye method ko use declare karna hoga.</p>',
  examples: [
    { input: 'sleepTask()', output: 'Woke up after sleep', explanation: '100 ms sone ke baad thread jaagta hai aur message return hota hai.' },
    { input: 'sleepTask() (dobara chalane par)', output: 'Woke up after sleep', explanation: 'Deterministic demo hai — dobara chalane par bhi wahi output milta hai.' }
  ],
  constraints: ['Sleep duration 100 ms hai', 'Method ko InterruptedException declare karni hai'],
  starter: 'class Solution {\n    String sleepTask() throws InterruptedException {\n        // TODO: 100 ms sleep karo phir message return karo\n        return "";\n    }\n}',
  solution: 'class Solution {\n    String sleepTask() throws InterruptedException {\n        Thread.sleep(100);\n        return "Woke up after sleep";\n    }\n}',
  explanation: '<p>Thread.sleep static method hai jo current thread ko diye gaye milliseconds ke liye rok deta hai. Ye InterruptedException throw karta hai, isliye throws declare karna zaroori hai.</p>'
});
