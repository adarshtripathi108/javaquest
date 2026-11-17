/* JavaQuest — Problem: Swap Two Numbers (Introduction to Java, Medium) */
PROBLEMS.push({
  id: '01-06',
  topicId: 1,
  topic: 'Introduction to Java',
  title: 'Swap Two Numbers',
  difficulty: 'Medium',
  statement: '<p>Tumhe do numbers <b>a</b> aur <b>b</b> diye gaye hain. Unki values aapas me swap karo aur swapped values ko ek array me return karo, jisme pehla element purana <b>b</b> aur dusra purana <b>a</b> ho. Swap karne ke liye ek <b>temp variable</b> use karo.</p>',
  examples: [ { input: 'a = 5, b = 10', output: '[10, 5]', explanation: 'Swap ke baad pehla 10 aur dusra 5 ho jata hai.' }, { input: 'a = -1, b = 1', output: '[1, -1]', explanation: '-1 aur 1 swap hoke 1 aur -1 ban jate hain.' } ],
  constraints: [ '-1000 <= a, b <= 1000' ],
  starter: 'class Solution {\n    public int[] swap(int a, int b) {\n        // TODO: temp variable se swap karo aur {b, a} return karo\n        return new int[0];\n    }\n}',
  solution: 'class Solution {\n    public int[] swap(int a, int b) {\n        int temp = a;\n        a = b;\n        b = temp;\n        return new int[] {a, b};\n    }\n}',
  explanation: '<p>Seedha <b>a = b</b> likh doge to a ki purani value kho jayegi. Isliye pehle <b>a</b> ko <b>temp</b> me bacha lo, phir <b>a</b> me <b>b</b> daalo, phir <b>b</b> me <b>temp</b> daalo.</p>'
});
