/* JavaQuest — Problem: Password Check with Throws (Exception Handling, Medium) */
PROBLEMS.push({
  id: '9-09',
  topicId: 9,
  topic: 'Exception Handling',
  title: 'Password Check with Throws',
  difficulty: 'Medium',
  statement: '<p>Ek custom checked exception InvalidPasswordException banao. Ek helper method validate likho jo throws InvalidPasswordException declare kare aur password null ho ya 8 characters se chhota ho to exception throw kare. Main method checkPassword use call karke "Strong password" ya "Weak: Password must be at least 8 characters" return kare.</p>',
  examples: [
    { input: 'checkPassword("javacode123")', output: 'Strong password', explanation: '11 characters ka password valid hai.' },
    { input: 'checkPassword("abc")', output: 'Weak: Password must be at least 8 characters', explanation: 'Chhota password exception throw karta hai.' },
    { input: 'checkPassword(null)', output: 'Weak: Password must be at least 8 characters', explanation: 'Null password bhi invalid hai.' }
  ],
  constraints: ['Password null ho sakta hai', 'Minimum length 8 hai'],
  starter: 'class Solution {\n    String checkPassword(String pwd) {\n        // TODO: throws wale helper se password check karo\n        return "";\n    }\n}',
  solution: 'class InvalidPasswordException extends Exception {\n    InvalidPasswordException(String message) {\n        super(message);\n    }\n}\n\nclass Solution {\n    void validate(String pwd) throws InvalidPasswordException {\n        if (pwd == null || pwd.length() < 8) {\n            throw new InvalidPasswordException("Password must be at least 8 characters");\n        }\n    }\n\n    String checkPassword(String pwd) {\n        try {\n            validate(pwd);\n            return "Strong password";\n        } catch (InvalidPasswordException e) {\n            return "Weak: " + e.getMessage();\n        }\n    }\n}',
  explanation: '<p>Checked exception ko ya to handle karna padta hai ya throws se declare karna padta hai. Yahan validate throws declare karta hai aur checkPassword use try-catch se sambhalta hai.</p>'
});
