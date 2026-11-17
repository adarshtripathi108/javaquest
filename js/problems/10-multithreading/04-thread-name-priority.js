/* JavaQuest — Problem: Thread Name and Priority (Multithreading, Easy) */
PROBLEMS.push({
  id: '10-04',
  topicId: 10,
  topic: 'Multithreading',
  title: 'Thread Name and Priority',
  difficulty: 'Easy',
  statement: '<p>Ek naya thread banao, uska naam "Worker-1" rakho aur priority 7 set karo. Phir naam aur priority ko "Worker-1 : 7" format me return karo. Thread ka naam debugging me aur priority scheduler ke hint ke liye kaam aati hai.</p>',
  examples: [
    { input: 'threadInfo()', output: 'Worker-1 : 7', explanation: 'Naam Worker-1 aur priority 7 set ki gayi hai.' },
    { input: 'threadInfo() (dobara chalane par)', output: 'Worker-1 : 7', explanation: 'Deterministic demo hai — dobara chalane par bhi wahi output milta hai.' }
  ],
  constraints: ['Priority 1 (MIN) se 10 (MAX) ke beech hoti hai', 'Default priority 5 hoti hai'],
  starter: 'class Solution {\n    String threadInfo() {\n        // TODO: thread ka naam aur priority set karke return karo\n        return "";\n    }\n}',
  solution: 'class Solution {\n    String threadInfo() {\n        Thread t = new Thread(() -> {});\n        t.setName("Worker-1");\n        t.setPriority(7);\n        return t.getName() + " : " + t.getPriority();\n    }\n}',
  explanation: '<p>setName aur setPriority se thread ki pehchan aur priority badli ja sakti hai. Priority sirf scheduler ko hint deti hai, execution order guarantee nahi karti.</p>'
});
