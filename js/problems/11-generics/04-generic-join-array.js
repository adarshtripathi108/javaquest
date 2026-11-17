/* JavaQuest — Problem: Generic Join Array (Generics, Easy) */
PROBLEMS.push({
  id: '11-04',
  topicId: 11,
  topic: 'Generics',
  title: 'Generic Join Array',
  difficulty: 'Easy',
  statement: '<p>Ek generic method joinArray likho jo kisi bhi type ke array ke elements ko comma se jod kar ek string banaye. Jaise Integer array [1, 2, 3] se "1,2,3" bane aur String array ["x", "y"] se "x,y" bane. Elements ke beech comma ho, end me nahi.</p>',
  examples: [
    { input: 'joinArray(new Integer[]{1, 2, 3})', output: '1,2,3', explanation: 'Teen numbers comma se judte hain.' },
    { input: 'joinArray(new String[]{"x", "y"})', output: 'x,y', explanation: 'Do strings comma se judti hain.' }
  ],
  constraints: ['Method generic hona chahiye: <T> String joinArray(T[] arr)', 'Array khaali nahi hoga'],
  starter: 'class Solution {\n    <T> String joinArray(T[] arr) {\n        // TODO: elements ko comma se jodo\n        return "";\n    }\n}',
  solution: 'class Solution {\n    <T> String joinArray(T[] arr) {\n        StringBuilder sb = new StringBuilder();\n        for (int i = 0; i < arr.length; i++) {\n            if (i > 0) {\n                sb.append(",");\n            }\n            sb.append(arr[i]);\n        }\n        return sb.toString();\n    }\n}',
  explanation: '<p>Har element ko StringBuilder me append karte hain, aur pehle element ke alawa sabse pehle comma lagate hain. T koi bhi type ho sakta hai, append uska toString use karta hai.</p>'
});
