/* JavaQuest — Problem: Parallel Sum with Join (Multithreading, Easy) */
PROBLEMS.push({
  id: '10-05',
  topicId: 10,
  topic: 'Multithreading',
  title: 'Parallel Sum with Join',
  difficulty: 'Easy',
  statement: '<p>Ek integer array diya gaya hai. Use do hisson me baanto: pehla thread pehle aadhe ka sum nikale, doosra thread doosre aadhe ka sum nikale. Dono ko join se wait karo aur total sum return karo. Har thread apni alag slot me likhta hai, isliye synchronization ki zaroorat nahi.</p>',
  examples: [
    { input: 'parallelSum([1, 2, 3, 4])', output: '10', explanation: 'Pehla hissa 1+2=3, doosra 3+4=7, total 10.' },
    { input: 'parallelSum([5, 5, 5])', output: '15', explanation: 'Pehla hissa 5, doosra 5+5=10, total 15.' },
    { input: 'parallelSum([])', output: '0', explanation: 'Khali array ka sum 0 hai.' }
  ],
  constraints: ['Array ki length 0 se 1000 tak', 'Dono threads ko join karna zaroori hai'],
  starter: 'class Solution {\n    int parallelSum(int[] arr) throws InterruptedException {\n        // TODO: do threads se parallel sum nikalo\n        return 0;\n    }\n}',
  solution: 'class Solution {\n    int parallelSum(int[] arr) throws InterruptedException {\n        int n = arr.length;\n        int mid = n / 2;\n        int[] sums = new int[2];\n        Thread t1 = new Thread(() -> {\n            for (int i = 0; i < mid; i++) {\n                sums[0] += arr[i];\n            }\n        });\n        Thread t2 = new Thread(() -> {\n            for (int i = mid; i < n; i++) {\n                sums[1] += arr[i];\n            }\n        });\n        t1.start();\n        t2.start();\n        t1.join();\n        t2.join();\n        return sums[0] + sums[1];\n    }\n}',
  explanation: '<p>Kaam ko do threads me baantne se bade array ka sum jaldi nikalta hai. Har thread alag slot me likhta hai isliye race condition nahi hoti, aur join se dono ke khatam hone ka wait karte hain.</p>'
});
