/* JavaQuest — Problem: Daemon Thread Check (Multithreading, Medium) */
PROBLEMS.push({
  id: '10-09',
  topicId: 10,
  topic: 'Multithreading',
  title: 'Daemon Thread Check',
  difficulty: 'Medium',
  statement: '<p>Ek thread banao aur use start karne se pehle daemon bana do (setDaemon(true)). Phir "Is daemon: true" return karo. Daemon threads background kaam karte hain — jab saare non-daemon threads khatam ho jate hain to JVM daemon threads ko rok kar band ho jata hai.</p>',
  examples: [
    { input: 'daemonCheck()', output: 'Is daemon: true', explanation: 'setDaemon(true) ke baad isDaemon true return karta hai.' },
    { input: 'daemonCheck() (dobara chalane par)', output: 'Is daemon: true', explanation: 'Deterministic demo hai — dobara chalane par bhi wahi output milta hai.' }
  ],
  constraints: ['setDaemon start se pehle call karna hai, warna IllegalThreadStateException aayegi', 'Daemon thread ka kaam background me hota hai'],
  starter: 'class Solution {\n    String daemonCheck() {\n        // TODO: daemon thread banao aur check karo\n        return "";\n    }\n}',
  solution: 'class Solution {\n    String daemonCheck() {\n        Thread t = new Thread(() -> {});\n        t.setDaemon(true);\n        return "Is daemon: " + t.isDaemon();\n    }\n}',
  explanation: '<p>Daemon thread ko start se pehle set karna hota hai — start ke baad setDaemon karne par IllegalThreadStateException aati hai. Garbage collector hi sabse famous daemon thread hai.</p>'
});
