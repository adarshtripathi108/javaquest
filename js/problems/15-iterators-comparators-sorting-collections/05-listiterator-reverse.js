/* JavaQuest — Problem: Traverse a List Backwards with ListIterator (Iterators, Comparators & Sorting Collections, Easy) */
PROBLEMS.push({
  id: '15-05',
  topicId: 15,
  topic: 'Iterators, Comparators & Sorting Collections',
  title: 'Traverse a List Backwards with ListIterator',
  difficulty: 'Easy',
  statement: '<p>Ek list ke elements ko ulta order me ek nayi list me daal kar return karo — <code>ListIterator</code> ka use karke. ListIterator aage aur peechhe dono taraf chal sakta hai, jabki normal Iterator sirf aage chalta hai.</p><p><code>listIterator(list.size())</code> iterator ko aakhir me khada kar deta hai, phir <code>hasPrevious()</code> aur <code>previous()</code> se peechhe ki taraf chala ja sakta hai.</p>',
  examples: [
    { input: '["A", "B", "C"]', output: '["C", "B", "A"]', explanation: 'Aakhir se shuru karke C, phir B, phir A milta hai.' },
    { input: '["X"] (ek hi element)', output: '["X"]', explanation: 'Ek element wali list ulta karne par waisi hi rehti hai.' }
  ],
  constraints: ['List me 0 se 1000 strings ho sakti hain.', 'ListIterator ka use karo.', 'Original list change nahi honi chahiye.'],
  starter: 'import java.util.ArrayList;\nimport java.util.List;\nimport java.util.ListIterator;\n\nclass Solution {\n    public List<String> reverseWithListIterator(List<String> list) {\n        // TODO: ListIterator se ulta traverse karke nayi list banao\n        return new ArrayList<>();\n    }\n}',
  solution: 'import java.util.ArrayList;\nimport java.util.List;\nimport java.util.ListIterator;\n\nclass Solution {\n    public List<String> reverseWithListIterator(List<String> list) {\n        List<String> reversed = new ArrayList<>();\n        ListIterator<String> it = list.listIterator(list.size());\n        while (it.hasPrevious()) {\n            reversed.add(it.previous());\n        }\n        return reversed;\n    }\n}',
  explanation: '<p><code>listIterator(list.size())</code> cursor ko aakhiri element ke baad rakh deta hai. Phir <code>hasPrevious()</code> jab tak true hai, <code>previous()</code> peechhe ka element deta hai — isse elements ulta order me nayi list me judte jate hain.</p>'
});
