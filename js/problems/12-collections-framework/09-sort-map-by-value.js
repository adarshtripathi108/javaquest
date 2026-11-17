/* JavaQuest — Problem: Sort Map by Value (Collections Framework, Medium) */
PROBLEMS.push({
  id: '12-09',
  topicId: 12,
  topic: 'Collections Framework',
  title: 'Sort Map by Value',
  difficulty: 'Medium',
  statement: '<p>Ek Map<String, Integer> diya gaya hai. Uski keys ko values ke hisaab se descending order me sort karke list return karo. Jaise {apple=5, banana=2, mango=8} se [mango, apple, banana] mile. Entry set ko list me daal kar comparator se sort karo.</p>',
  examples: [
    { input: 'sortByValue({apple=5, banana=2, mango=8})', output: '[mango, apple, banana]', explanation: 'Values 8, 5, 2 ke order me keys aati hain.' },
    { input: 'sortByValue({a=1, b=3})', output: '[b, a]', explanation: '3 pehle, phir 1.' }
  ],
  constraints: ['Map khaali nahi hoga', 'Values alag-alag hongi'],
  starter: 'import java.util.*;\n\nclass Solution {\n    List<String> sortByValue(Map<String, Integer> map) {\n        // TODO: keys ko value ke hisaab se sort karo\n        return new ArrayList<>();\n    }\n}',
  solution: 'import java.util.*;\n\nclass Solution {\n    List<String> sortByValue(Map<String, Integer> map) {\n        List<Map.Entry<String, Integer>> entries = new ArrayList<>(map.entrySet());\n        entries.sort((a, b) -> b.getValue() - a.getValue());\n        List<String> result = new ArrayList<>();\n        for (Map.Entry<String, Integer> e : entries) {\n            result.add(e.getKey());\n        }\n        return result;\n    }\n}',
  explanation: '<p>Map khud sort nahi hota, isliye entrySet ko ArrayList me daalo aur comparator se value ke hisaab se descending sort karo. Phir sorted entries se keys nikal kar nayi list banao.</p>'
});
