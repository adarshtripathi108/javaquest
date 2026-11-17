/* JavaQuest — Problem: Vowel or Consonant (Control Statements, Easy) */
PROBLEMS.push({
  id: '03-02',
  topicId: 3,
  topic: 'Control Statements',
  title: 'Vowel or Consonant',
  difficulty: 'Easy',
  statement: '<p>Tumhe ek English letter diya gaya hai. Check karo ki wo <b>vowel</b> (a, e, i, o, u) hai ya <b>consonant</b>. Vowel ho to <b>true</b> return karo, warna <b>false</b>. Capital aur small dono letters handle karo.</p>',
  examples: [ { input: 'ch = \'a\'', output: 'true', explanation: 'a ek vowel hai.' }, { input: 'ch = \'b\'', output: 'false', explanation: 'b ek consonant hai.' }, { input: 'ch = \'E\'', output: 'true', explanation: 'Capital E bhi vowel hai.' } ],
  constraints: [ 'ch ek English letter (a-z ya A-Z) hai.' ],
  starter: 'class Solution {\n    public boolean isVowel(char ch) {\n        // TODO: ch a, e, i, o, u (capital ya small) hai ya nahi check karo\n        return false;\n    }\n}',
  solution: 'class Solution {\n    public boolean isVowel(char ch) {\n        return ch == \'a\' || ch == \'e\' || ch == \'i\' || ch == \'o\' || ch == \'u\'\n                || ch == \'A\' || ch == \'E\' || ch == \'I\' || ch == \'O\' || ch == \'U\';\n    }\n}',
  explanation: '<p><b>||</b> (OR) se saare vowels check karo, small aur capital dono. Agar ch inme se koi ek hai to true, warna false.</p>'
});
