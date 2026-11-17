/* JavaQuest — Problem: Find Missing Number (Arrays, Hard) */
PROBLEMS.push({
  id: '04-11',
  topicId: 4,
  topic: 'Arrays',
  title: 'Find Missing Number',
  difficulty: 'Hard',
  statement: '<p>Tumhe ek array diya gaya hai jisme <b>1 se n tak</b> ke numbers me se ek number missing hai. Array ki length n - 1 hai aur saare numbers alag hain. Missing number dhoondh kar return karo. Sum wale formula se ye ek hi pass me ho jata hai.</p>',
  examples: [ { input: 'arr = [1, 2, 4, 5]', output: '3', explanation: '1 se 5 tak me 3 missing hai.' }, { input: 'arr = [2, 3, 4, 5, 6]', output: '1', explanation: '1 se 6 tak me 1 missing hai.' }, { input: 'arr = [1, 2, 3]', output: '4', explanation: '1 se 4 tak me 4 missing hai.' } ],
  constraints: [ '1 <= arr.length <= 10000', 'Array me 1 se n tak ke alag-alag numbers hain, ek missing hai.' ],
  starter: 'class Solution {\n    public int missingNumber(int[] arr) {\n        // TODO: 1..n ka expected sum minus array ka sum\n        return 0;\n    }\n}',
  solution: 'class Solution {\n    public int missingNumber(int[] arr) {\n        int n = arr.length + 1;\n        int expected = n * (n + 1) / 2;\n        int sum = 0;\n        for (int i = 0; i < arr.length; i++) {\n            sum += arr[i];\n        }\n        return expected - sum;\n    }\n}',
  explanation: '<p><b>1 se n tak ka sum n x (n + 1) / 2</b> hota hai. Array ke saare numbers ka sum isme se ghata do, jo bachega wahi missing number hai.</p>'
});
