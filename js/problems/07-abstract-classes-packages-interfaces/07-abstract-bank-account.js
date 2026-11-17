/* JavaQuest — Problem: Abstract Bank Account (Abstract Classes, Packages & Interfaces, Medium) */
PROBLEMS.push({
  id: '7-07',
  topicId: 7,
  topic: 'Abstract Classes, Packages & Interfaces',
  title: 'Abstract Bank Account',
  difficulty: 'Medium',
  statement: '<p>Ek abstract class <code>Account</code> banao jisme <code>balance</code> field aur abstract method <code>calculateInterest()</code> ho. <code>SavingsAccount</code> class Account ko extend karke interest 5% rate se calculate kare — interest = balance * 0.05. Method <code>savingsInterest</code> ko balance milega aur use interest return karna hai.</p>',
  examples: [
    { input: 'balance = 1000', output: '50.0', explanation: 'Interest 1000 * 0.05 = 50.0.' },
    { input: 'balance = 2000', output: '100.0', explanation: 'Interest 2000 * 0.05 = 100.0.' }
  ],
  constraints: ['balance ek non-negative number hoga'],
  starter: 'class Solution {\n    abstract class Account {\n        double balance;\n        Account(double balance) {\n            this.balance = balance;\n        }\n        abstract double calculateInterest();\n    }\n    class SavingsAccount extends Account {\n        SavingsAccount(double balance) {\n            super(balance);\n        }\n        double calculateInterest() {\n            // TODO: balance * 0.05 return karo\n            return 0;\n        }\n    }\n    double savingsInterest(double balance) {\n        // TODO: SavingsAccount banao aur interest return karo\n        return 0;\n    }\n}',
  solution: 'class Solution {\n    abstract class Account {\n        double balance;\n        Account(double balance) {\n            this.balance = balance;\n        }\n        abstract double calculateInterest();\n    }\n    class SavingsAccount extends Account {\n        SavingsAccount(double balance) {\n            super(balance);\n        }\n        double calculateInterest() {\n            return balance * 0.05;\n        }\n    }\n    double savingsInterest(double balance) {\n        SavingsAccount acc = new SavingsAccount(balance);\n        return acc.calculateInterest();\n    }\n}',
  explanation: '<p>Abstract class common state (<code>balance</code>) aur common behaviour rakhti hai, aur jo cheez har account type me alag hai (<code>calculateInterest</code>) use abstract chhod deti hai. SavingsAccount sirf wahi ek method implement karta hai.</p>'
});
