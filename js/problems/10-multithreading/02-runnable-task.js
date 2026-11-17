/* JavaQuest — Problem: Runnable Task (Multithreading, Easy) */
PROBLEMS.push({
  id: '10-02',
  topicId: 10,
  topic: 'Multithreading',
  title: 'Runnable Task',
  difficulty: 'Easy',
  statement: '<p>Ek Runnable task banao jo ek StringBuilder me "Task done" likhe. Use ek Thread me chalao, join se wait karo aur phir StringBuilder ka text return karo. Runnable interface implement karna thread banane ka standard tareeka hai.</p>',
  examples: [
    { input: 'runRunnable()', output: 'Task done', explanation: 'Runnable task text likhta hai aur join ke baad wahi text return hota hai.' },
    { input: 'runRunnable() (dobara chalane par)', output: 'Task done', explanation: 'Deterministic demo hai — dobara chalane par bhi wahi output milta hai.' }
  ],
  constraints: ['Task ko Runnable ke through chalana hai', 'Method ko InterruptedException declare karni hai'],
  starter: 'class Solution {\n    String runRunnable() throws InterruptedException {\n        // TODO: Runnable task chalao aur result return karo\n        return "";\n    }\n}',
  solution: 'class Solution {\n    String runRunnable() throws InterruptedException {\n        StringBuilder sb = new StringBuilder();\n        Runnable task = () -> sb.append("Task done");\n        Thread t = new Thread(task);\n        t.start();\n        t.join();\n        return sb.toString();\n    }\n}',
  explanation: '<p>Runnable ek functional interface hai jiska run method thread ka kaam define karta hai. Lambda se Runnable banana aasan hai, aur join se result ka wait karte hain.</p>'
});
