/* JavaQuest — Problem: Palindrome Number (Java Basics, Medium) */
PROBLEMS.push({
  id: '02-07',
  topicId: 2,
  topic: 'Java Basics',
  title: 'Palindrome Number',
  difficulty: 'Medium',
  statement: '<p>Tumhe ek integer <b>n</b> diya gaya hai. Check karo ki wo <b>palindrome</b> hai ya nahi, matlab ulta padhne par bhi same lage, jaise 121. Negative numbers palindrome nahi hote.</p>',
  examples: [ { input: 'n = 121', output: 'true', explanation: '121 ulta bhi 121 hi hai.' }, { input: 'n = 123', output: 'false', explanation: '123 ulta 321 hai, same nahi.' }, { input: 'n = 7', output: 'true', explanation: 'Ek digit ka number hamesha palindrome hota hai.' } ],
  constraints: [ '-100000 <= n <= 100000' ],
  starter: 'class Solution {\n    public boolean isPalindrome(int n) {\n        // TODO: number ko ulta karke original se compare karo\n        return false;\n    }\n}',
  solution: 'class Solution {\n    public boolean isPalindrome(int n) {\n        if (n < 0) {\n            return false;\n        }\n        int original = n;\n        int rev = 0;\n        while (n > 0) {\n            rev = rev * 10 + n % 10;\n            n = n / 10;\n        }\n        return rev == original;\n    }\n}',
  explanation: '<p>Pehle original number bacha lo, phir use ulta karo. Agar ulta number original ke barabar hai to palindrome hai. Negative number ke aage <b>-</b> sign aata hai, isliye wo kabhi palindrome nahi hota.</p>'
});
