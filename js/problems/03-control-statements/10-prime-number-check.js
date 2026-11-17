/* JavaQuest — Problem: Prime Number Check (Control Statements, Medium) */
PROBLEMS.push({
  id: '03-10',
  topicId: 3,
  topic: 'Control Statements',
  title: 'Prime Number Check',
  difficulty: 'Medium',
  statement: '<p>Tumhe ek integer <b>n</b> diya gaya hai. Check karo ki wo <b>prime number</b> hai ya nahi. Prime number wo hota hai jo sirf 1 aur khud se divisible ho, jaise 2, 3, 5, 7. 1 aur usse chhote numbers prime nahi hote.</p>',
  examples: [ { input: 'n = 7', output: 'true', explanation: '7 sirf 1 aur 7 se divisible hai.' }, { input: 'n = 12', output: 'false', explanation: '12 ko 2, 3, 4, 6 se bhi divide kiya ja sakta hai.' }, { input: 'n = 1', output: 'false', explanation: '1 prime nahi hota.' } ],
  constraints: [ '1 <= n <= 100000' ],
  starter: 'class Solution {\n    public boolean isPrime(int n) {\n        // TODO: 2 se sqrt(n) tak koi divisor hai ya nahi check karo\n        return false;\n    }\n}',
  solution: 'class Solution {\n    public boolean isPrime(int n) {\n        if (n <= 1) {\n            return false;\n        }\n        for (int i = 2; i * i <= n; i++) {\n            if (n % i == 0) {\n                return false;\n            }\n        }\n        return true;\n    }\n}',
  explanation: '<p>2 se lekar <b>sqrt(n)</b> tak check karna kaafi hai, kyunki agar n ka koi divisor sqrt(n) se bada hai to uska pair sqrt(n) se chhota hoga. Koi divisor mil jaye to prime nahi hai.</p>'
});
