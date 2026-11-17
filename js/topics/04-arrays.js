/* JavaQuest — Topic 4: Arrays (Season 2) */
TOPICS.push(
{
 id:4, season:2, title:"Arrays", lectures:"Lectures 22–32", mins:55,
 desc:"1D, 2D, multidimensional aur jagged arrays — create, traverse, sort, search; matrix operations aur marks-store karne wale programs.",
 subs:[
  {t:"1D Arrays — Create & Use", body:"<p><b>Array</b> = ek hi type ke fixed-size elements ka collection, ek hi naam ke neeche, <b>0-based index</b> ke saath. Array ek object hai — <code>new</code> se banta hai aur uski <code>length</code> property hoti hai (method nahi, isliye <code>arr.length</code>, <code>arr.length()</code> nahi!).</p><p>Index range se bahar jao to runtime pe <b>ArrayIndexOutOfBoundsException</b> aata hai. Enhanced for-loop (for-each) traverse karne ka sabse saaf tareeka hai — par usse elements modify nahi kar sakte.</p>", code:"public class Arr1D {\n    public static void main(String[] args) {\n        int[] marks = {85, 92, 78, 96};\n        int max = marks[0];\n        for (int m : marks) if (m > max) max = m;\n        System.out.println(\"Length: \" + marks.length);\n        System.out.println(\"Max: \" + max);\n    }\n}", out:"Length: 4\nMax: 96"},
  {t:"2D & Multidimensional Arrays", body:"<p>2D array ko <b>array of arrays</b> samjho — rows aur columns wala table (matrix). <code>int[][] a = new int[3][4];</code> matlab 3 rows, 4 columns. Access: <code>a[row][col]</code>. Matrix addition, multiplication aur transpose CHO ke confirm practice questions hain — multiplication ka rule yaad rakho: pehle matrix ke columns = dusre ke rows hone chahiye.</p>", code:"public class Matrix {\n    public static void main(String[] args) {\n        int[][] a = {{1, 2}, {3, 4}};\n        int[][] b = {{5, 6}, {7, 8}};\n        System.out.print(\"Sum matrix: \");\n        for (int i = 0; i < 2; i++)\n            for (int j = 0; j < 2; j++)\n                System.out.print((a[i][j] + b[i][j]) + \" \");\n    }\n}", out:"Sum matrix: 6 8 10 12 "},
  {t:"Jagged Arrays", body:"<p><b>Jagged array</b> = 2D array jisme har row ki length alag ho sakti hai. Pehle sirf rows declare karo, phir har row ko alag size do. CHO ka practice: students ke marks store karna jahan har student ke subjects ki sankhya alag hai — wahi jagged array ka perfect use case hai.</p>", code:"public class Jagged {\n    public static void main(String[] args) {\n        int[][] j = new int[3][];\n        j[0] = new int[]{90, 80};        // student 1: 2 subjects\n        j[1] = new int[]{70, 85, 95};    // student 2: 3 subjects\n        j[2] = new int[]{88};            // student 3: 1 subject\n        for (int i = 0; i < j.length; i++)\n            System.out.println(\"Student \" + (i+1) + \": \" + j[i].length + \" subjects\");\n    }\n}", out:"Student 1: 2 subjects\nStudent 2: 3 subjects\nStudent 3: 1 subject"},
  {t:"Sorting, Searching & Arrays Class", body:"<p><b>Sorting</b> ke liye <code>java.util.Arrays.sort()</code> ready-made hai. <b>Searching</b> ke liye <code>Arrays.binarySearch()</code> — par ye tabhi sahi kaam karta hai jab array pehle se sorted ho. Exam me manual bubble sort aur linear search ke programs bhi aate hain, isliye dono aane chahiye.</p>", code:"import java.util.Arrays;\npublic class SortSearch {\n    public static void main(String[] args) {\n        int[] a = {42, 7, 19, 3};\n        Arrays.sort(a);\n        System.out.println(Arrays.toString(a));\n        System.out.println(\"19 ka index: \" + Arrays.binarySearch(a, 19));\n    }\n}", out:"[3, 7, 19, 42]\n19 ka index: 2"}
 ],
 practice:[
  {tag:"Coding · 10 marks", q:"Command-line se array ke elements lo, phir maximum, minimum aur average print karo — ek hi program me."},
  {tag:"Coding · 5 marks", q:"Bubble sort algorithm se array ko ascending order me sort karke print karo (Arrays.sort use kiye bina)."},
  {tag:"Coding · 10 marks", q:"Do 2x2 matrices ka addition, multiplication aur pehle matrix ka transpose — teeno operations ek program me."},
  {tag:"Coding · 5 marks", q:"Jagged array banao jisme 3 students ke alag-alag subjects ke marks hon, har student ka total print karo."},
  {tag:"Theory · 2 marks", q:"arr.length aur arr.length() me kya farak hai? String ke liye kaunsa use hota hai?"},
  {tag:"Theory · 2 marks", q:"Binary search sorted array pe hi kyun kaam karta hai? Linear search se ek farak likho."}
 ],
 quiz:[
  {q:"Array ka pehla index kya hota hai?", o:["1","0","-1","Kuch bhi"], a:1, e:"Java arrays 0-based hote hain — pehla element arr[0], aakhri arr[length-1]."},
  {q:"int[] a = new int[5]; me a[2] ki default value?", o:["null","garbage","0","5"], a:2, e:"Numeric arrays ke elements default 0 se initialize hote hain."},
  {q:"Array ki size janne ke liye sahi tareeka?", o:["a.size()","a.length()","a.length","a.count"], a:2, e:"length ek property (field) hai, method nahi — a.length. String ke liye length() method hota hai."},
  {q:"Index range se bahar access karne pe kya hota hai?", o:["0 milta hai","Compile error","ArrayIndexOutOfBoundsException (runtime)","Program silently band"], a:2, e:"Ye runtime exception hai — compile time pe pakda nahi jata."},
  {q:"Jagged array kya hota hai?", o:["3D array","Rows ki length alag-alag ho sakti hai","Sirf char type ka array","Sorted array"], a:1, e:"Jagged = har row ka apna size. Pehle rows banao, phir har row alag se allocate karo."},
  {q:"Matrix multiplication ke liye shart kya hai?", o:["Dono square hon","Pehle ke columns = dusre ke rows","Dono ka size same ho","Koi shart nahi"], a:1, e:"A (m×n) × B (n×p) tabhi possible hai jab beech wala n match kare."},
  {q:"Arrays.binarySearch() sahi result kab deta hai?", o:["Hamesha","Sirf jab array sorted ho","Sirf int array pe","Sirf descending array pe"], a:1, e:"Binary search sorted data pe hi kaam karta hai — unsorted pe result unpredictable."},
  {q:"for-each loop ki limitation kya hai?", o:["Slow hota hai","Index nahi milta aur element modify nahi kar sakte","Sirf int pe chalta hai","Length pata nahi chalti"], a:1, e:"for-each sirf padhne ke liye hai — index chahiye ya value badalni hai to normal for loop use karo."}
 ]
}
);
