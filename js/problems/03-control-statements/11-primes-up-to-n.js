/* JavaQuest — Problem: Prime Numbers up to N (Control Statements, Hard) */
PROBLEMS.push({
  id: '03-11',
  topicId: 3,
  topic: 'Control Statements',
  title: 'Prime Numbers up to N',
  difficulty: 'Hard',
  statement: '<p>Tumhe ek number <b>n</b> diya gaya hai. <b>2 se n tak</b> ke saare prime numbers ek array me return karo. Har number ko prime check karke list me daalo.</p>',
  examples: [ { input: 'n = 10', output: '[2, 3, 5, 7]', explanation: '10 tak ke prime numbers 2, 3, 5, 7 hain.' }, { input: 'n = 20', output: '[2, 3, 5, 7, 11, 13, 17, 19]', explanation: '20 tak ke saare prime numbers.' }, { input: 'n = 2', output: '[2]', explanation: 'Sirf 2 hai.' } ],
  constraints: [ '2 <= n <= 1000' ],
  starter: 'class Solution {\n    public int[] primesUpTo(int n) {\n        // TODO: 2..n tak loop chalao, prime numbers list me daalo, array return karo\n        return new int[0];\n    }\n}',
  solution: 'class Solution {\n    public int[] primesUpTo(int n) {\n        java.util.ArrayList<Integer> list = new java.util.ArrayList<>();\n        for (int num = 2; num <= n; num++) {\n            if (isPrime(num)) {\n                list.add(num);\n            }\n        }\n        int[] result = new int[list.size()];\n        for (int i = 0; i < list.size(); i++) {\n            result[i] = list.get(i);\n        }\n        return result;\n    }\n\n    private boolean isPrime(int n) {\n        for (int i = 2; i * i <= n; i++) {\n            if (n % i == 0) {\n                return false;\n            }\n        }\n        return true;\n    }\n}',
  explanation: '<p>2 se n tak har number par <b>isPrime</b> helper method chalao. Prime numbers ko ek <b>ArrayList</b> me jama karo, phir aakhir me list ko int array me convert karke return karo.</p>'
});
