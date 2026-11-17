/* JavaQuest — Problem: ExecutorService Sum (Multithreading, Medium) */
PROBLEMS.push({
  id: '10-10',
  topicId: 10,
  topic: 'Multithreading',
  title: 'ExecutorService Sum',
  difficulty: 'Medium',
  statement: '<p>Ek integer array diya gaya hai. 2 threads wali fixed thread pool (ExecutorService) banao aur do Callable tasks submit karo — har ek aadhe array ka sum nikale. Future.get se dono results lo, total return karo aur pool ko shutdown karo.</p>',
  examples: [
    { input: 'executorSum([1, 2, 3, 4])', output: '10', explanation: 'Pehla task 1+2=3, doosra 3+4=7, total 10.' },
    { input: 'executorSum([10, 20, 30])', output: '60', explanation: 'Pehla task 10, doosra 20+30=50, total 60.' }
  ],
  constraints: ['Thread pool size 2 hai', 'Kaam ke baad executor.shutdown() call karna hai'],
  starter: 'import java.util.concurrent.*;\n\nclass Solution {\n    int executorSum(int[] arr) throws Exception {\n        // TODO: ExecutorService se parallel sum nikalo\n        return 0;\n    }\n}',
  solution: 'import java.util.concurrent.*;\n\nclass Solution {\n    int executorSum(int[] arr) throws Exception {\n        ExecutorService executor = Executors.newFixedThreadPool(2);\n        int mid = arr.length / 2;\n        Future<Integer> f1 = executor.submit(() -> {\n            int s = 0;\n            for (int i = 0; i < mid; i++) {\n                s += arr[i];\n            }\n            return s;\n        });\n        Future<Integer> f2 = executor.submit(() -> {\n            int s = 0;\n            for (int i = mid; i < arr.length; i++) {\n                s += arr[i];\n            }\n            return s;\n        });\n        int total = f1.get() + f2.get();\n        executor.shutdown();\n        return total;\n    }\n}',
  explanation: '<p>ExecutorService threads ko baar-baar banane ki jagah pool se reuse karta hai. Callable Runnable jaisa hai par value return karta hai, aur Future.get se us value ka wait karke use le sakte hain. shutdown bhoolne par program band nahi hota.</p>'
});
