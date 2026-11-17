/* JavaQuest — Problem: Bank Account Deposit (Classes & Objects, Easy) */
PROBLEMS.push({
  id: '5-03',
  topicId: 5,
  topic: 'Classes & Objects',
  title: 'Bank Account Deposit',
  difficulty: 'Easy',
  statement: '<p>Ek <code>Account</code> class banao jisme <code>balance</code> private ho. Ek <code>deposit(double amt)</code> method sirf positive amount hi balance me jode (zero ya negative amount ignore ho), aur <code>getBalance()</code> current balance return kare. Method <code>finalBalance</code> ko deposits ki array milegi — har amount deposit karke final balance return karna hai.</p>',
  examples: [
    { input: 'deposits = [100, 50, -20]', output: '150.0', explanation: '100 aur 50 jama hue, -20 ignore hua, final balance 150.0.' },
    { input: 'deposits = [200, -50, -10]', output: '200.0', explanation: 'Sirf 200 jama hua, dono negative amounts ignore hue.' }
  ],
  constraints: ['deposits array khaali nahi hogi'],
  starter: 'class Solution {\n    class Account {\n        private double balance = 0;\n        void deposit(double amt) {\n            // TODO: sirf positive amount jodo\n        }\n        double getBalance() {\n            return balance;\n        }\n    }\n    double finalBalance(double[] deposits) {\n        // TODO: har amount deposit karo aur final balance return karo\n        return 0;\n    }\n}',
  solution: 'class Solution {\n    class Account {\n        private double balance = 0;\n        void deposit(double amt) {\n            if (amt > 0) {\n                balance += amt;\n            }\n        }\n        double getBalance() {\n            return balance;\n        }\n    }\n    double finalBalance(double[] deposits) {\n        Account acc = new Account();\n        for (int i = 0; i < deposits.length; i++) {\n            acc.deposit(deposits[i]);\n        }\n        return acc.getBalance();\n    }\n}',
  explanation: '<p>Ye encapsulation ka classic example hai — <code>balance</code> private hai, isliye bahar se seedha badla nahi ja sakta. Saari validation <code>deposit()</code> method ke andar hoti hai.</p>'
});
