/* JavaQuest — Topic 15: Iterators, Comparators & Sorting Collections (Season 5) */
TOPICS.push(
{
 id:15, season:5, title:"Iterators, Comparators & Sorting Collections", lectures:"Lecture 89", mins:40,
 desc:"Iterator aur ListIterator se collections ghumna, fail-fast behaviour, aur Comparator se custom sorting — Lecture 89 ka focused topic.",
 subs:[
  {t:"Iterator & ListIterator", body:"<p><b>Iterator</b> collection ko ek-ek karke ghumne ka standard tareeka hai — <code>hasNext()</code>, <code>next()</code> aur khaas baat <code>remove()</code>: ghumte hue element <b>safely delete</b> kar sakte ho (for-each loop me delete karne pe ConcurrentModificationException aata hai). <b>ListIterator</b> sirf List ke liye hai — aage-peeche dono directions, index access aur set() bhi deta hai.</p>", code:"import java.util.*;\npublic class IterDemo {\n    public static void main(String[] args) {\n        ArrayList<Integer> a = new ArrayList<>(List.of(10, 15, 20, 25));\n        Iterator<Integer> it = a.iterator();\n        while (it.hasNext()) {\n            if (it.next() % 10 != 0) it.remove();  // 15, 25 hat gaye\n        }\n        System.out.println(a);\n    }\n}", out:"[10, 20]"},
  {t:"Fail-Fast vs Fail-Safe", body:"<p>Iteration ke beech collection ko directly modify kar do (iterator ke remove() ke bina) to <b>ConcurrentModificationException</b> aata hai — ise <b>fail-fast</b> behaviour kehte hain (ArrayList, HashMap ke iterators). <b>Fail-safe</b> iterators (CopyOnWriteArrayList, ConcurrentHashMap) copy pe kaam karte hain, exception nahi dete. Exam me ye pair hamesha saath poochha jata hai.</p>", code:"import java.util.*;\npublic class FailFast {\n    public static void main(String[] args) {\n        ArrayList<Integer> a = new ArrayList<>(List.of(1, 2, 3));\n        try {\n            for (int x : a) { if (x == 2) a.remove(Integer.valueOf(2)); }\n        } catch (ConcurrentModificationException e) {\n            System.out.println(\"Fail-fast: exception aaya!\");\n        }\n    }\n}", out:"Fail-fast: exception aaya!"},
  {t:"Custom Sorting with Comparator", body:"<p>Jab class ko change nahi kar sakte (ya kai sorting orders chahiye), <b>Comparator</b> bahar se order deta hai. Java 8+ me lambda se ek line me comparator ban jata hai: <code>Comparator.comparingInt(Student::getMarks)</code>. Reverse order ke liye <code>Collections.reverseOrder()</code> ya <code>.reversed()</code>. <code>Comparator</code> chaining se multi-level sort bhi hota hai — pehle marks, phir naam.</p>", code:"import java.util.*;\npublic class CmpSort {\n    public static void main(String[] args) {\n        ArrayList<String> names = new ArrayList<>(List.of(\"Rahul\", \"Al\", \"Priya\"));\n        names.sort(Comparator.comparingInt(String::length)); // length se sort\n        System.out.println(names);\n        names.sort(Comparator.reverseOrder());               // ulta order\n        System.out.println(names);\n    }\n}", out:"[Al, Rahul, Priya]\n[Rahul, Priya, Al]"}
 ],
 practice:[
  {tag:"Coding · 5 marks", q:"Iterator se ArrayList ke saare odd numbers remove karo — for-each se try karke pehle exception dekho, phir iterator se sahi karo."},
  {tag:"Coding · 5 marks", q:"ListIterator se list ko aage aur peeche (reverse) dono directions me print karo."},
  {tag:"Coding · 10 marks", q:"Employee list ko Comparator se pehle salary (descending), phir naam (ascending) — multi-level sort karo."},
  {tag:"Theory · 2 marks", q:"Fail-fast aur fail-safe iterators me farak — ek-ek example class ke saath."},
  {tag:"Theory · 2 marks", q:"Iterator aur Enumeration me 2 farak likho. remove() sirf Iterator me kyun khaas hai?"},
  {tag:"Theory · 2 marks", q:"Comparable ek hi order deta hai, Comparator kai — ye statement ek example se samjhao."}
 ],
 quiz:[
  {q:"Iteration ke dauran element safely remove karne ka tareeka?", o:["list.remove() loop ke andar","iterator.remove()","for-each me remove","System.gc()"], a:1, e:"Sirf iterator ka apna remove() safe hai — direct remove pe ConcurrentModificationException."},
  {q:"ListIterator ki khaas baat kya hai?", o:["Sirf Set pe chalta hai","Dono directions me ghum sakta hai aur index deta hai","Sabse fast hai","Remove nahi kar sakta"], a:1, e:"ListIterator bidirectional hai — hasPrevious/previous, nextIndex, set() sab milta hai."},
  {q:"ConcurrentModificationException kab aata hai?", o:["File na milne pe","Iteration ke beech collection ko bahar se modify karne pe","Null access pe","Division by zero pe"], a:1, e:"Fail-fast iterators modification detect karke ye exception phenkte hain."},
  {q:"Inme se fail-safe iterator wali class kaunsi hai?", o:["ArrayList","HashMap","CopyOnWriteArrayList","HashSet"], a:2, e:"CopyOnWriteArrayList copy pe iterate karti hai — fail-safe. Baaki fail-fast hain."},
  {q:"Descending order me sort karne ka tareeka?", o:["sort() do baar","Collections.reverseOrder() comparator dena","Negative values karna","TreeSet ulta karna"], a:1, e:"Collections.sort(list, Collections.reverseOrder()) ya comparator.reversed()."},
  {q:"Comparator kis package me hai aur uska method?", o:["java.lang, compareTo","java.util, compare(o1, o2)","java.util, compareTo","java.io, compare"], a:1, e:"Comparator java.util me hai — compare(Object, Object). Comparable java.lang me compareTo deta hai."}
 ]
}
);
