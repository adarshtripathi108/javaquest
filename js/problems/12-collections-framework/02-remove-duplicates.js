/* JavaQuest — Problem: Remove Duplicates (Collections Framework, Easy) */
PROBLEMS.push({
  id: '12-02',
  topicId: 12,
  topic: 'Collections Framework',
  title: 'Remove Duplicates',
  difficulty: 'Easy',
  statement: '<p>Integers ki ek list di gayi hai jisme duplicates ho sakte hain. Duplicates hata kar nayi list return karo, aur original order barkarar rakho. LinkedHashSet iske liye perfect hai — ye duplicates hata deta hai aur insertion order bhi bacha kar rakhta hai.</p>',
  examples: [
    { input: 'removeDuplicates([1, 2, 2, 3, 1])', output: '[1, 2, 3]', explanation: 'Duplicates hatne ke baad order [1, 2, 3] rehta hai.' },
    { input: 'removeDuplicates([5, 5, 5])', output: '[5]', explanation: 'Sab 5 hain, ek hi bachta hai.' }
  ],
  constraints: ['List ki length 0 se 1000 tak', 'Original order barkarar rakhna hai'],
  starter: 'import java.util.*;\n\nclass Solution {\n    List<Integer> removeDuplicates(List<Integer> list) {\n        // TODO: duplicates hatao, order banao rakho\n        return new ArrayList<>();\n    }\n}',
  solution: 'import java.util.*;\n\nclass Solution {\n    List<Integer> removeDuplicates(List<Integer> list) {\n        return new ArrayList<>(new LinkedHashSet<>(list));\n    }\n}',
  explanation: '<p>Set me duplicate values nahi reh sakti, aur LinkedHashSet insertion order bhi yaad rakhta hai. List ko LinkedHashSet me daal kar wapas ArrayList me badal do — duplicates gayab, order waisa hi.</p>'
});
