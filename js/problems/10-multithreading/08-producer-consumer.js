/* JavaQuest — Problem: Producer Consumer with wait notify (Multithreading, Medium) */
PROBLEMS.push({
  id: '10-08',
  topicId: 10,
  topic: 'Multithreading',
  title: 'Producer Consumer with wait notify',
  difficulty: 'Medium',
  statement: '<p>Ek single-slot Buffer class banao jisme put aur take methods wait aur notify se coordinate karein: buffer bhara ho to producer wait kare, khaali ho to consumer wait kare. Producer 1 se 5 tak numbers daale, consumer unhe nikal kar jode. Dono threads join karke total sum return karo.</p>',
  examples: [
    { input: 'producerConsumerSum()', output: '15', explanation: 'Consumer 1+2+3+4+5 = 15 jodta hai, wait-notify se koi value miss nahi hoti.' },
    { input: 'producerConsumerSum() (dobara chalane par)', output: '15', explanation: 'Deterministic demo hai — dobara chalane par bhi wahi output milta hai.' }
  ],
  constraints: ['Buffer me ek time me sirf ek value hoti hai', 'wait aur notify synchronized methods ke andar hone chahiye'],
  starter: 'class Solution {\n    int producerConsumerSum() throws InterruptedException {\n        // TODO: wait-notify buffer se producer-consumer chalao\n        return 0;\n    }\n}',
  solution: 'class Buffer {\n    private int value;\n    private boolean empty = true;\n\n    synchronized void put(int v) throws InterruptedException {\n        while (!empty) {\n            wait();\n        }\n        value = v;\n        empty = false;\n        notify();\n    }\n\n    synchronized int take() throws InterruptedException {\n        while (empty) {\n            wait();\n        }\n        empty = true;\n        notify();\n        return value;\n    }\n}\n\nclass Solution {\n    int producerConsumerSum() throws InterruptedException {\n        Buffer buffer = new Buffer();\n        int[] consumed = new int[1];\n        Thread producer = new Thread(() -> {\n            try {\n                for (int i = 1; i <= 5; i++) {\n                    buffer.put(i);\n                }\n            } catch (InterruptedException e) {\n                Thread.currentThread().interrupt();\n            }\n        });\n        Thread consumer = new Thread(() -> {\n            try {\n                for (int i = 0; i < 5; i++) {\n                    consumed[0] += buffer.take();\n                }\n            } catch (InterruptedException e) {\n                Thread.currentThread().interrupt();\n            }\n        });\n        producer.start();\n        consumer.start();\n        producer.join();\n        consumer.join();\n        return consumed[0];\n    }\n}',
  explanation: '<p>wait thread ko lock chhod kar sula deta hai, notify doosre thread ko jaga deta hai. while loop me condition check karna zaroori hai taaki spurious wakeup se galat state me aage na badhein. Is pattern ko producer-consumer kehte hain.</p>'
});
