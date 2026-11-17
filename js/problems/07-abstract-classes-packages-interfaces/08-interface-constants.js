/* JavaQuest — Problem: Interface Constants (Abstract Classes, Packages & Interfaces, Medium) */
PROBLEMS.push({
  id: '7-08',
  topicId: 7,
  topic: 'Abstract Classes, Packages & Interfaces',
  title: 'Interface Constants',
  difficulty: 'Medium',
  statement: '<p>Interface me declare kiye gaye variables automatic <code>public static final</code> (constants) hote hain. <code>AppConfig</code> interface me <code>APP_NAME = JavaQuest</code> aur <code>MAX_USERS = 100</code> constants hon. <code>App</code> class AppConfig ko implement karke in constants ko use kare.</p>',
  examples: [
    { input: 'appInfo()', output: '"JavaQuest allows 100 users"', explanation: 'APP_NAME aur MAX_USERS constants se string bani.' },
    { input: 'maxUsers()', output: '100', explanation: 'MAX_USERS constant ki value 100 hai.' }
  ],
  constraints: [],
  starter: 'class Solution {\n    interface AppConfig {\n        String APP_NAME = "JavaQuest";\n        int MAX_USERS = 100;\n    }\n    class App implements AppConfig {\n        String info() {\n            // TODO: APP_NAME aur MAX_USERS se string banao\n            return "";\n        }\n        int maxUsers() {\n            // TODO: MAX_USERS return karo\n            return 0;\n        }\n    }\n    String appInfo() {\n        App app = new App();\n        return app.info();\n    }\n    int maxUsers() {\n        App app = new App();\n        return app.maxUsers();\n    }\n}',
  solution: 'class Solution {\n    interface AppConfig {\n        String APP_NAME = "JavaQuest";\n        int MAX_USERS = 100;\n    }\n    class App implements AppConfig {\n        String info() {\n            return APP_NAME + " allows " + MAX_USERS + " users";\n        }\n        int maxUsers() {\n            return MAX_USERS;\n        }\n    }\n    String appInfo() {\n        App app = new App();\n        return app.info();\n    }\n    int maxUsers() {\n        App app = new App();\n        return app.maxUsers();\n    }\n}',
  explanation: '<p>Interface ke fields implicit <code>public static final</code> hote hain — matlab wo constants hain, class-level hain, aur kabhi change nahi hote. Implement karne wali class unhe seedha naam se use kar sakti hai.</p>'
});
