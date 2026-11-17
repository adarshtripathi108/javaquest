/* JavaQuest — Problem: Generic Swap (Generics, Medium) */
PROBLEMS.push({
  id: '11-06',
  topicId: 11,
  topic: 'Generics',
  title: 'Generic Swap',
  difficulty: 'Medium',
  statement: '<p>Ek generic method swap likho jo kisi bhi type ke array me do positions ke elements ko aapas me badal de aur array return kare. Jaise ["a", "b", "c"] me positions 0 aur 2 badalne par ["a", "c", "b"] mile. Temp variable ka type T hona chahiye.</p>',
  examples: [
    { input: 'swap(new String[]{"a", "b", "c"}, 0, 2)', output: '[a, c, b]', explanation: 'Positions 0 aur 2 badal jati hain.' },
    { input: 'swap(new Integer[]{1, 2, 3, 4}, 1, 3)', output: '[1, 4, 3, 2]', explanation: 'Positions 1 aur 3 badal jati hain.' }
  ],
  constraints: ['Method generic hona chahiye: <T> T[] swap(T[] arr, int i, int j)', 'Indices hamesha valid honge'],
  starter: 'class Solution {\n    <T> T[] swap(T[] arr, int i, int j) {\n        // TODO: i aur j positions ke elements badlo\n        return arr;\n    }\n}',
  solution: 'class Solution {\n    <T> T[] swap(T[] arr, int i, int j) {\n        T temp = arr[i];\n        arr[i] = arr[j];\n        arr[j] = temp;\n        return arr;\n    }\n}',
  explanation: '<p>Swap ke liye ek temp variable chahiye jiska type T hai — wahi type jo array ka hai. Generic method ki wajah se ye swap Integer, String ya kisi bhi type ke array par kaam karta hai.</p>'
});
