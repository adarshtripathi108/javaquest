/* JavaQuest — Problem: Safe Array Access (Exception Handling, Easy) */
PROBLEMS.push({
  id: '9-03',
  topicId: 9,
  topic: 'Exception Handling',
  title: 'Safe Array Access',
  difficulty: 'Easy',
  statement: '<p>Ek integer array aur ek index diye gaye hain. Us index par element return karo. Agar index array ke bahar hai (negative ya size se bada) to ArrayIndexOutOfBoundsException aayegi — use catch karke -1 return karo.</p>',
  examples: [
    { input: 'getElement([10, 20, 30], 1)', output: '20', explanation: 'Index 1 par 20 hai.' },
    { input: 'getElement([10, 20, 30], 5)', output: '-1', explanation: 'Index 5 bahar hai, exception catch karke -1 return hota hai.' },
    { input: 'getElement([10, 20, 30], -1)', output: '-1', explanation: 'Negative index bhi out of bounds hai.' }
  ],
  constraints: ['Array ki length 1 se 100 tak', 'Index koi bhi integer ho sakta hai'],
  starter: 'class Solution {\n    int getElement(int[] arr, int index) {\n        // TODO: element return karo, out of bounds ho to -1\n        return 0;\n    }\n}',
  solution: 'class Solution {\n    int getElement(int[] arr, int index) {\n        try {\n            return arr[index];\n        } catch (ArrayIndexOutOfBoundsException e) {\n            return -1;\n        }\n    }\n}',
  explanation: '<p>Array access ko try block me rakho. Galat index par ArrayIndexOutOfBoundsException aati hai, jise catch karke -1 return kar do.</p>'
});
