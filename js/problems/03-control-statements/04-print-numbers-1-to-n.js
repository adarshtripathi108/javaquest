/* JavaQuest — Problem: Print Numbers 1 to N (Control Statements, Easy) */
PROBLEMS.push({
  id: '03-04',
  topicId: 3,
  topic: 'Control Statements',
  title: 'Print Numbers 1 to N',
  difficulty: 'Easy',
  statement: '<p>Tumhe ek number <b>n</b> diya gaya hai. <b>1 se n tak</b> ke saare numbers ek array me return karo. Ye problem <b>for loop</b> ki sabse basic practice hai.</p>',
  examples: [ { input: 'n = 5', output: '[1, 2, 3, 4, 5]', explanation: '1 se 5 tak ke numbers.' }, { input: 'n = 1', output: '[1]', explanation: 'Sirf 1 hai.' }, { input: 'n = 3', output: '[1, 2, 3]', explanation: '1 se 3 tak ke numbers.' } ],
  constraints: [ '1 <= n <= 1000' ],
  starter: 'class Solution {\n    public int[] numbers(int n) {\n        // TODO: size n ka array banao aur for loop se 1..n bharo\n        return new int[0];\n    }\n}',
  solution: 'class Solution {\n    public int[] numbers(int n) {\n        int[] result = new int[n];\n        for (int i = 0; i < n; i++) {\n            result[i] = i + 1;\n        }\n        return result;\n    }\n}',
  explanation: '<p>Size <b>n</b> ka array banao. Loop <b>i = 0 se n-1</b> tak chalao aur har index par <b>i + 1</b> daalo, taaki values 1 se n tak ban jayein.</p>'
});
