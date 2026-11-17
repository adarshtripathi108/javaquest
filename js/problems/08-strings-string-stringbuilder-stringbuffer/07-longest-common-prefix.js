/* JavaQuest — Problem: Longest Common Prefix (Strings, Medium) */
PROBLEMS.push({
  id: '8-07',
  topicId: 8,
  topic: 'Strings',
  title: 'Longest Common Prefix',
  difficulty: 'Medium',
  statement: '<p>Strings ki array me sabse lamba common prefix dhoondo — wo shuruaati hissa jo har string me ek jaisa ho. Pehli string ko prefix maan kar shuru karo, aur har agli string ke saath prefix ko tab tak chhota karte jao jab tak wo uska prefix na ban jaaye.</p>',
  examples: [
    { input: 'strs = ["flower", "flow", "flight"]', output: '"fl"', explanation: 'Teeno strings "fl" se shuru hoti hain, uske baad alag ho jati hain.' },
    { input: 'strs = ["dog", "racecar", "car"]', output: '""', explanation: 'Koi common shuruaat nahi hai, isliye khaali string hai.' }
  ],
  constraints: ['array me kam se kam ek string hogi', 'sirf lowercase English letters honge'],
  starter: 'class Solution {\n    String longestCommonPrefix(String[] strs) {\n        // TODO: sab strings ka longest common prefix return karo\n        return "";\n    }\n}',
  solution: 'class Solution {\n    String longestCommonPrefix(String[] strs) {\n        String prefix = strs[0];\n        for (int i = 1; i < strs.length; i++) {\n            while (strs[i].indexOf(prefix) != 0) {\n                prefix = prefix.substring(0, prefix.length() - 1);\n                if (prefix.isEmpty()) {\n                    return "";\n                }\n            }\n        }\n        return prefix;\n    }\n}',
  explanation: '<p><code>indexOf(prefix) == 0</code> ka matlab hai string prefix se shuru hoti hai. Jab tak ye true nahi hota, prefix ko peeche se ek character chhota karte jao. Prefix khaali ho jaaye to common prefix hai hi nahi.</p>'
});
