// ═══════════════════════════════════════════════════════
// PravAstra — Complete Data & Engine
//  © 2025 Praveen Rathod. All Rights Reserved.
// ═══════════════════════════════════════════════════════


// ╔══════════════════════════════════════════════════════════════════════╗
// ║              🛠️  PravAstra — CONTENT EDITOR GUIDE                  ║
// ║  All editable data is in this <script> section (lines below).       ║
// ║  Search (Ctrl+F in VSCode) the 📝 emoji to jump to each section.    ║
// ║                                                                      ║
// ║  SECTION MAP — what you can easily add / change:                    ║
// ║  📝 QUOTES          — Motivational quotes on home screen            ║
// ║  📝 TYPED_STRINGS   — Typing animation text on hero section         ║
// ║  📝 DSA_DATA        — DSA questions (topic / difficulty / company)  ║
// ║  📝 IQA             — Interview Q&A cards                           ║
// ║  📝 APTITUDE        — Aptitude shortcut tips per topic              ║
// ║  📝 DAILY           — 45-Day challenge tasks                        ║
// ║  📝 RESOURCES       — YouTube channels (Cybersecurity/FS/AI)        ║
// ║  📝 FREE_CERTS      — Free certificate links                        ║
// ║  📝 FREE_VIDEOS     — Free course video links                       ║
// ║  📝 QUIZ_DATA       — Quiz questions per domain                     ║
// ║  📝 LEARN_DATA      — Theory content (Learn section)                ║
// ║  📝 DSA_RESOURCES   — YouTube/solution links per DSA problem        ║
// ║  📝 DSA_SOLUTIONS   — Java + Python code per DSA problem            ║
// ╚══════════════════════════════════════════════════════════════════════╝

// ═══════════════════════════════════════
// 📝 QUOTES — Add motivational quotes
// Format: {t:"Line1\nLine2", a:"— Author"}
// ═══════════════════════════════════════
// ══ QUOTES ══
const QUOTES=[
  {t:"Code is not just syntax.\nIt is your superpower.",a:"— Every great dev, ever"},
  {t:"The best time to start was yesterday.\nThe next best time is NOW.",a:"— The Universe"},
  {t:"Every expert was once a beginner\nwho refused to quit.",a:"— Anonymous"},
  {t:"Your bugs today are your\nbreakthroughs tomorrow.",a:"— Debug Philosophy"},
  {t:"One commit at a time.\nOne dream at a time.",a:"— Git Wisdom"},
];
// 📝 TYPED_STRINGS — Typing text in hero section (add any string)
const TYPED_STRINGS=[
  "Master Cybersecurity, Full Stack & AI.",
  "Ace your interviews at FAANG and MNCs.",
  "TOP DSA problems with Java & Python solutions.",
  "Daily challenges to build unstoppable skills.",
  "Built by Praveen, for the next generation of engineers.",
];

// ═══════════════════════════════════════════════════════════
// 📝 DSA_DATA — Add DSA questions or topics here
// New question: {lv:"Easy", mnc:"Amazon", title:"Name", desc:"Desc"}
// New topic:    {topic:"Name", icon:"🔥", questions:[...]}
// ═══════════════════════════════════════════════════════════
// ══ DSA VAULT — 20 Topics × 6 Questions (2 Easy + 2 Medium + 2 Hard) ══
const DSA_DATA=[
  {topic:"Arrays",icon:"📊",questions:[
    {lv:"Easy",mnc:"Amazon · Google · Meta",title:"Two Sum",
     desc:"Given an integer array <code>nums</code> and an integer <code>target</code>, return the indices of the two numbers that add up to <code>target</code>. Each input has exactly one solution. You may not use the same element twice. Expected: <strong>O(n) time, O(n) space</strong>."},
    {lv:"Easy",mnc:"Meta · Microsoft · Apple",title:"Best Time to Buy and Sell Stock",
     desc:"Given an array <code>prices</code> where <code>prices[i]</code> is the stock price on day <code>i</code>, find the maximum profit by choosing one day to buy and a later day to sell. If no profit is possible, return <code>0</code>. Expected: <strong>O(n) time, O(1) space</strong>."},
    {lv:"Medium",mnc:"Google · Facebook · Amazon · Bloomberg",title:"Maximum Subarray (Kadane's)",
     desc:"Given an integer array <code>nums</code>, find the contiguous subarray with the largest sum and return its sum. Negative-only arrays are valid inputs. Expected: <strong>O(n) time, O(1) space</strong> using Kadane's algorithm. Can you also return the subarray itself?"},
    {lv:"Medium",mnc:"Google · Twitter · Oracle · Microsoft",title:"Merge Intervals",
     desc:"Given an array of <code>intervals</code> where <code>intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]</code>, merge all overlapping intervals and return an array of the non-overlapping intervals that cover all input intervals completely."},
    {lv:"Hard",mnc:"Google · Amazon · Goldman Sachs · Uber",title:"Trapping Rain Water",
     desc:"Given <code>n</code> non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining. Must achieve <strong>O(n) time and O(1) space</strong>. Explain both the stack approach and the two-pointer approach."},
    {lv:"Hard",mnc:"Google · Amazon · Microsoft",title:"First Missing Positive",
     desc:"Given an unsorted integer array <code>nums</code>, return the smallest missing positive integer. Your solution must run in <strong>O(n) time and use O(1) auxiliary space</strong>. You cannot simply sort the array. Hint: the answer is always in the range <code>[1, n+1]</code>."}
  ]},
  {topic:"Strings",icon:"🔤",questions:[
    {lv:"Easy",mnc:"Facebook · Amazon · Microsoft",title:"Valid Anagram",
     desc:"Given two strings <code>s</code> and <code>t</code>, return <code>true</code> if <code>t</code> is an anagram of <code>s</code>, i.e., they contain the same characters with the same frequencies. How would you extend this to handle Unicode characters?"},
    {lv:"Easy",mnc:"Amazon · Microsoft · Bloomberg",title:"Valid Palindrome",
     desc:"Given a string <code>s</code>, return <code>true</code> if it is a palindrome, considering only alphanumeric characters and ignoring case. A string reads the same forward and backward. Solve in <strong>O(n) time, O(1) space</strong> using two pointers."},
    {lv:"Medium",mnc:"Amazon · Google · Bloomberg · LinkedIn",title:"Longest Substring Without Repeating Characters",
     desc:"Given a string <code>s</code>, find the length of the longest substring without repeating characters. What is the optimal sliding-window approach that achieves <strong>O(n)</strong>? Follow-up: return the actual substring."},
    {lv:"Medium",mnc:"Amazon · Facebook · Google · Adobe",title:"Group Anagrams",
     desc:"Given an array of strings <code>strs</code>, group the anagrams together and return them in any order. Two strings are anagrams if one is a rearrangement of the other. What key uniquely identifies an anagram group in <strong>O(n·k)</strong>?"},
    {lv:"Hard",mnc:"Google · Facebook · Amazon · Snapchat",title:"Minimum Window Substring",
     desc:"Given strings <code>s</code> and <code>t</code>, return the minimum window substring of <code>s</code> such that every character in <code>t</code> (including duplicates) is included. Return <code>&#34;&#34;</code> if no such window exists. Expected: <strong>O(|s|+|t|) time</strong>."},
    {lv:"Hard",mnc:"Facebook · Google · Apple",title:"Regular Expression Matching",
     desc:"Implement regular expression matching with <code>'.'</code> matching any single character and <code>'*'</code> matching zero or more of the preceding element. The matching must cover the <em>entire</em> input string. Solve using <strong>dynamic programming</strong>."}
  ]},
  {topic:"Linked List",icon:"🔗",questions:[
    {lv:"Easy",mnc:"Amazon · Apple · Microsoft",title:"Reverse Linked List",
     desc:"Given the head of a singly linked list, reverse the list and return the new head. Implement both <strong>iteratively</strong> (O(1) extra space) and <strong>recursively</strong> (O(n) call stack). Explain the trade-off and when you'd prefer each approach."},
    {lv:"Easy",mnc:"Amazon · Microsoft · Bloomberg · Adobe",title:"Linked List Cycle Detection",
     desc:"Given the head of a linked list, determine if the list has a cycle in <strong>O(1) memory</strong>. If a cycle exists, return the node where the cycle begins. Explain Floyd's two-pointer algorithm and why the cycle entrance is found where it is."},
    {lv:"Medium",mnc:"Amazon · Bloomberg · Goldman Sachs",title:"Reorder List",
     desc:"Given the head of list <code>L0→L1→…→Ln</code>, reorder it in-place to <code>L0→Ln→L1→Ln-1→…</code> You may not modify node values — only the nodes themselves. Hint: this problem combines three separate linked-list techniques."},
    {lv:"Medium",mnc:"Amazon · Adobe · Google",title:"Copy List with Random Pointer",
     desc:"A linked list node has a <code>next</code> pointer and a <code>random</code> pointer that can point to any node or <code>null</code>. Construct a deep copy of the entire list. Can you do it in <strong>O(n) time and O(1) extra space</strong> (not counting output)?"},
    {lv:"Hard",mnc:"Google · Amazon · Meta · Microsoft",title:"Merge K Sorted Lists",
     desc:"Given an array of <code>k</code> linked lists, each sorted in ascending order, merge all lists into one sorted linked list and return its head. The <strong>O(N log k)</strong> solution uses a min-heap. What is the time and space complexity? Can you do it with divide and conquer?"},
    {lv:"Hard",mnc:"Microsoft · Salesforce · Bloomberg",title:"LRU Cache",
     desc:"Design a data structure that follows the <strong>Least Recently Used</strong> cache eviction policy. Implement <code>get(key)</code> and <code>put(key, value)</code> each in <strong>O(1) time</strong>. What combination of data structures makes this possible?"}
  ]},
  {topic:"Stack & Queue",icon:"📚",questions:[
    {lv:"Easy",mnc:"Amazon · Google · Meta · Bloomberg",title:"Valid Parentheses",
     desc:"Given a string <code>s</code> containing only <code>'('</code>, <code>')'</code>, <code>'{'</code>, <code>'}'</code>, <code>'['</code>, <code>']'</code>, determine if the string is valid. Open brackets must be closed by the same type and in the correct order. An empty string is valid."},
    {lv:"Easy",mnc:"Amazon · Bloomberg · Microsoft",title:"Min Stack",
     desc:"Design a stack that supports <code>push</code>, <code>pop</code>, <code>top</code>, and <code>getMin</code> — all in <strong>O(1) time</strong>. How do you maintain the minimum efficiently as elements are pushed and popped? The minimum must always reflect the current stack state."},
    {lv:"Medium",mnc:"Amazon · Google · Uber · Lyft",title:"Daily Temperatures",
     desc:"Given an array of integers <code>temperatures</code>, return an array <code>answer</code> where <code>answer[i]</code> is the number of days you have to wait after day <code>i</code> to get a warmer temperature. If no future day is warmer, set <code>answer[i] = 0</code>. Expected: <strong>O(n)</strong>."},
    {lv:"Medium",mnc:"Amazon · Microsoft · Flipkart",title:"Decode String",
     desc:"Given an encoded string like <code>&#34;3[a2[c]]&#34;</code>, decode it: <code>&#34;accaccacc&#34;</code>. The encoding rule is <code>k[encoded_string]</code> where the string inside brackets is repeated exactly <code>k</code> times. Handle nested encodings correctly using a <strong>stack</strong>."},
    {lv:"Hard",mnc:"Amazon · Google · Microsoft · Bloomberg",title:"Sliding Window Maximum",
     desc:"Given an integer array <code>nums</code> and integer <code>k</code>, return an array of the maximum value of each sliding window of size <code>k</code>. Expected: <strong>O(n) total time</strong> using a monotonic deque. Explain why the deque works and what invariant it maintains."},
    {lv:"Hard",mnc:"Amazon · Google · Citadel",title:"Largest Rectangle in Histogram",
     desc:"Given an array of integers <code>heights</code> representing the histogram bar heights (width = 1 each), find the area of the largest rectangle that fits entirely within the histogram. Expected: <strong>O(n)</strong> using a monotonic stack. Explain the 'start index' trick."}
  ]},
  {topic:"Binary Search",icon:"🔍",questions:[
    {lv:"Easy",mnc:"Amazon · Microsoft · Google",title:"Search in Rotated Sorted Array",
     desc:"An ascending sorted array was rotated at an unknown pivot. Given the array with unique values and a <code>target</code>, return the target's index, or <code>-1</code> if not found. Expected: <strong>O(log n)</strong>. Key insight: one half is always sorted — determine which."},
    {lv:"Easy",mnc:"Amazon · Google · Facebook",title:"Find Minimum in Rotated Sorted Array",
     desc:"Given a sorted array that has been rotated between 1 and <code>n</code> times, find the minimum element. Expected: <strong>O(log n)</strong>. How does comparing <code>nums[mid]</code> with <code>nums[right]</code> tell you which half contains the minimum?"},
    {lv:"Medium",mnc:"Amazon · Uber · Google · Dropbox",title:"Koko Eating Bananas",
     desc:"Koko has <code>n</code> piles of bananas and <code>h</code> hours. She eats at speed <code>k</code> bananas/hour (one pile per hour). Find the minimum integer <code>k</code> such that she can finish all piles within <code>h</code> hours. This is classic <strong>binary search on the answer</strong>."},
    {lv:"Medium",mnc:"Facebook · Amazon · LinkedIn",title:"Time Based Key-Value Store",
     desc:"Design a key-value store that stores multiple values at different timestamps and retrieves the value at the largest timestamp ≤ a given timestamp. <code>set(key, value, timestamp)</code> and <code>get(key, timestamp)</code>. Expected <strong>O(log n)</strong> gets using binary search."},
    {lv:"Hard",mnc:"Google · Amazon · Microsoft · Bloomberg",title:"Median of Two Sorted Arrays",
     desc:"Given two sorted arrays <code>nums1</code> (size m) and <code>nums2</code> (size n), return the median of the combined sorted array. The overall run time complexity must be <strong>O(log(m+n))</strong>. Binary search on the partition of the smaller array."},
    {lv:"Hard",mnc:"Amazon · Google · DoorDash",title:"Split Array Largest Sum",
     desc:"Given integer array <code>nums</code> and integer <code>m</code>, split the array into <code>m</code> non-empty subarrays to minimise the largest subarray sum. Expected: <strong>O(n log(sum))</strong>. Binary search on the answer with a greedy feasibility check."}
  ]},
  {topic:"Trees",icon:"🌲",questions:[
    {lv:"Easy",mnc:"Amazon · LinkedIn · Google",title:"Maximum Depth of Binary Tree",
     desc:"Given the root of a binary tree, return its maximum depth — the number of nodes along the longest path from root to farthest leaf node. Implement both a recursive DFS solution and an iterative BFS solution. Compare their space complexity."},
    {lv:"Easy",mnc:"Facebook · Amazon · Google",title:"Lowest Common Ancestor of BST",
     desc:"Given a BST and two nodes <code>p</code> and <code>q</code>, find their lowest common ancestor (LCA). The LCA is the deepest node that is an ancestor of both. How does the BST property let you solve this in <strong>O(h) time and O(1) space</strong> without traversing the whole tree?"},
    {lv:"Medium",mnc:"Amazon · Microsoft · Yahoo · Bloomberg",title:"Binary Tree Level Order Traversal",
     desc:"Given the root of a binary tree, return the level-by-level traversal as a list of lists (first list = root level). Use BFS with a queue. Key trick: snapshot <code>queue.size()</code> at the start of each level to know exactly how many nodes to process at that level."},
    {lv:"Medium",mnc:"Amazon · Microsoft · Bloomberg",title:"Validate Binary Search Tree",
     desc:"Given the root of a binary tree, determine if it is a valid BST. A naïve check of children is <strong>wrong</strong> — explain why. The correct approach passes min/max bounds down the recursion so every node is validated against its full ancestral constraints."},
    {lv:"Hard",mnc:"Google · Amazon · Facebook · Microsoft",title:"Binary Tree Maximum Path Sum",
     desc:"A path in a binary tree is any sequence of nodes where each pair of adjacent nodes has an edge. The path does not need to pass through the root. Find the maximum sum of any such path. At each node you must decide: contribute to a path passing through, or be a standalone answer."},
    {lv:"Hard",mnc:"Amazon · Microsoft · Google",title:"Serialize and Deserialize Binary Tree",
     desc:"Design an algorithm to <strong>serialize</strong> a binary tree to a string and <strong>deserialize</strong> that string back to the original tree structure. The tree must be exactly reconstructed. Implement BFS (level-order) encoding with null markers."}
  ]},
  {topic:"Graphs",icon:"🕸️",questions:[
    {lv:"Easy",mnc:"Amazon · Microsoft · Google",title:"Number of Islands",
     desc:"Given a 2D grid of <code>'1'</code> (land) and <code>'0'</code> (water), count the number of islands. An island is formed by connecting adjacent lands horizontally or vertically. Use DFS flood-fill: mark each visited land cell to avoid re-counting. <strong>O(m·n)</strong>."},
    {lv:"Easy",mnc:"Amazon · Google · Facebook",title:"Clone Graph",
     desc:"Given a reference to a node in a connected undirected graph, return a <strong>deep copy</strong> of the entire graph. Each node has a value and a list of neighbours. Use a HashMap from original node to cloned node to handle cycles and shared nodes correctly."},
    {lv:"Medium",mnc:"Amazon · Google · Facebook · Uber",title:"Course Schedule (Cycle Detection)",
     desc:"There are <code>numCourses</code> courses labelled 0 to n-1. Given a list of prerequisite pairs, determine if it is possible to finish all courses. This is <strong>cycle detection in a directed graph</strong>. Solve with both DFS (3-colour marking) and BFS (Kahn's topological sort)."},
    {lv:"Medium",mnc:"Google · Amazon · Uber · Lyft",title:"Word Ladder",
     desc:"Transform <code>beginWord</code> to <code>endWord</code>, changing exactly one letter at a time, with each intermediate word existing in <code>wordList</code>. Return the length of the shortest transformation sequence. Why does <strong>BFS guarantee the shortest path</strong> here?"},
    {lv:"Hard",mnc:"Google · Amazon · Airbnb · Uber",title:"Alien Dictionary",
     desc:"Given a list of words sorted lexicographically in an unknown alien language, deduce the order of characters in the alien alphabet. Build a directed graph of character orderings from adjacent words, then perform topological sort. Handle invalid inputs (cycles, prefix conflicts)."},
    {lv:"Hard",mnc:"Amazon · Google · Microsoft",title:"Minimum Cost to Connect All Points",
     desc:"Given an array of <code>points</code> on a 2D plane, connect all points with minimum total Manhattan distance. This is the <strong>Minimum Spanning Tree</strong> problem. Implement Prim's algorithm with a priority queue (no explicit graph required) for <strong>O(n² log n)</strong>."}
  ]},
  {topic:"Dynamic Programming",icon:"💡",questions:[
    {lv:"Easy",mnc:"Amazon · Google · Microsoft",title:"Climbing Stairs",
     desc:"You are climbing a staircase with <code>n</code> steps. Each time you can climb 1 or 2 steps. How many distinct ways can you climb to the top? This is Fibonacci in disguise. Solve with DP in <strong>O(n) time</strong> then optimise to <strong>O(1) space</strong> using two rolling variables."},
    {lv:"Easy",mnc:"Amazon · Microsoft · LinkedIn",title:"House Robber",
     desc:"Given an array of non-negative integers representing the amount of money in each house, find the maximum you can rob without robbing two adjacent houses. Express the recurrence, then implement bottom-up DP, then optimise to <strong>O(1) space</strong> with two variables."},
    {lv:"Medium",mnc:"Amazon · Google · Meta · Bloomberg",title:"Coin Change",
     desc:"Given coins of various denominations and an amount <code>n</code>, find the <strong>minimum number of coins</strong> to make <code>n</code>. If it is impossible, return <code>-1</code>. Classic unbounded knapsack. <code>dp[0]=0</code>; for each coin, update reachable amounts. <strong>O(n·k)</strong>."},
    {lv:"Medium",mnc:"Amazon · Google · Palantir",title:"Longest Increasing Subsequence",
     desc:"Given an integer array, return the length of the longest strictly increasing subsequence. Implement the <strong>O(n²) DP</strong> solution first, then explain the <strong>O(n log n)</strong> patience-sorting approach using binary search on a <code>tails</code> array."},
    {lv:"Hard",mnc:"Google · Facebook · Amazon · Citadel",title:"Edit Distance (Levenshtein)",
     desc:"Given two strings <code>word1</code> and <code>word2</code>, return the minimum number of operations (insert, delete, replace) to convert <code>word1</code> into <code>word2</code>. Build the classic 2D DP table and explain how each of the three transitions corresponds to an operation."},
    {lv:"Hard",mnc:"Amazon · Google · Snapchat",title:"Burst Balloons",
     desc:"Given <code>n</code> balloons with values, bursting balloon <code>i</code> earns <code>nums[i-1] × nums[i] × nums[i+1]</code> coins. Burst all balloons to maximise total coins. Why is thinking about the <strong>last balloon burst</strong> in each interval the key to the interval DP formulation?"}
  ]},
  {topic:"Heap / Priority Queue",icon:"⛰️",questions:[
    {lv:"Easy",mnc:"Amazon · Google · Uber",title:"Kth Largest Element in an Array",
     desc:"Find the <strong>k<sup>th</sup> largest</strong> element in an unsorted array. You do not need to sort the array. Compare and contrast two approaches: a <strong>min-heap of size k</strong> in O(n log k) and <strong>QuickSelect</strong> in O(n) average. Which is better for small k?"},
    {lv:"Easy",mnc:"Amazon · Google · Apple",title:"K Closest Points to Origin",
     desc:"Given an array of <code>points</code> and integer <code>k</code>, return the <code>k</code> closest points to the origin using Euclidean distance. Compare a <strong>max-heap of size k</strong> approach vs <strong>QuickSelect</strong>. What is the advantage of QuickSelect when the array fits in memory?"},
    {lv:"Medium",mnc:"Amazon · Facebook · Bloomberg",title:"Find Median from Data Stream",
     desc:"Design a data structure that supports <code>addNum(num)</code> and <code>findMedian()</code>. <code>findMedian</code> must return in <strong>O(1)</strong>. Use two heaps: a <strong>max-heap</strong> for the lower half and a <strong>min-heap</strong> for the upper half. Explain how to maintain balance."},
    {lv:"Medium",mnc:"Amazon · Google · Flipkart",title:"Top K Frequent Elements",
     desc:"Given an integer array and integer <code>k</code>, return the <code>k</code> most frequent elements. Compare: a <strong>heap of size k</strong> in O(n log k), a <strong>bucket sort</strong> approach in O(n) using frequency as index, and sorting. Which is optimal?"},
    {lv:"Hard",mnc:"Google · Amazon · Meta",title:"Merge K Sorted Lists",
     desc:"Given an array of <code>k</code> sorted linked lists, merge them into one sorted linked list. The optimal approach uses a <strong>min-heap</strong> seeded with the head of each list. At each step, extract the minimum, append to result, and push the next node from that list. <strong>O(N log k)</strong>."},
    {lv:"Hard",mnc:"Amazon · Google",title:"Minimum Number of Refueling Stops",
     desc:"A car with start fuel must reach a target. At each station you may refuel. Find the <strong>minimum number of stops</strong>. Greedy with a <strong>max-heap</strong>: whenever you run out, retrospectively take the largest available fuel from a station you already passed. Prove the greedy is optimal."}
  ]},
  {topic:"Backtracking",icon:"↩️",questions:[
    {lv:"Easy",mnc:"Amazon · Google · Microsoft",title:"Letter Combinations of a Phone Number",
     desc:"Given a string of digits 2-9, return all possible letter combinations the number could represent using a phone keypad. Classic backtracking: at each digit, try all mapped letters and recurse to the next digit. Return <code>[]</code> for empty input."},
    {lv:"Easy",mnc:"Amazon · Adobe · Bloomberg",title:"Generate Parentheses",
     desc:"Given <code>n</code> pairs of parentheses, generate all combinations of well-formed parentheses strings. Backtracking: add <code>'('</code> if open count < n, add <code>')'</code> if close count < open count. When both counts equal n, you have a valid string."},
    {lv:"Medium",mnc:"Amazon · Google · Facebook",title:"Permutations",
     desc:"Given an array of <strong>distinct</strong> integers, return all possible permutations. Backtracking with swap-in-place: swap current index with each subsequent index, recurse, then swap back to restore. This generates all n! permutations. What is the time and space complexity?"},
    {lv:"Medium",mnc:"Amazon · Google · Lyft",title:"Combination Sum",
     desc:"Given an array of distinct candidates and a target, find all unique combinations that sum to target. Candidates can be reused. Backtracking: at each step either reuse the current candidate or advance to the next. Prune when running sum exceeds target."},
    {lv:"Hard",mnc:"Amazon · Microsoft · Bloomberg",title:"N-Queens",
     desc:"Place <code>n</code> queens on an n×n chessboard so no two queens threaten each other (no shared row, column, or diagonal). Return all distinct solutions. Backtracking with <strong>three O(1) sets</strong> for columns, diagonals, and anti-diagonals. What is the expected output size?"},
    {lv:"Hard",mnc:"Google · Amazon",title:"Word Search II",
     desc:"Given an m×n character board and a list of words, return all words found on the board (adjacent cells, not reusing same cell). Naive DFS per word is too slow. Build a <strong>Trie</strong> from words and do a single DFS that prunes using the Trie. Explain why this is faster."}
  ]},
  {topic:"Tries",icon:"🌳",questions:[
    {lv:"Easy",mnc:"Amazon · Google · Microsoft",title:"Implement Trie (Prefix Tree)",
     desc:"Implement a Trie with <code>insert(word)</code>, <code>search(word)</code>, and <code>startsWith(prefix)</code>. Each <code>TrieNode</code> has a <code>children</code> array of size 26 and an <code>isEnd</code> flag. What is the time complexity of each operation?"},
    {lv:"Easy",mnc:"Google · Amazon · Adobe",title:"Design Add and Search Words",
     desc:"Design a data structure that supports <code>addWord(word)</code> and <code>search(word)</code> where <code>search</code> may contain <code>'.'</code> as a wildcard matching any letter. Trie with DFS for <code>'.'</code>: when you hit a dot, try all 26 children recursively."},
    {lv:"Medium",mnc:"Amazon · Google · Snapchat",title:"Word Search II (Trie + DFS)",
     desc:"Given a board and a list of words, find all words present on the board using connected cells. A naive DFS per word is O(W·4^L). Instead, build a <strong>Trie</strong> from all words and run a single DFS that follows the Trie, collecting complete words as they are found."},
    {lv:"Medium",mnc:"Google · Uber · Snapchat",title:"Maximum XOR of Two Numbers in an Array",
     desc:"Find the maximum XOR of any two numbers in an array. Build a <strong>bit-by-bit Trie</strong> of all numbers (32 bits, MSB first). For each number, greedily traverse the Trie taking the <strong>opposite bit</strong> at each level to maximise the XOR. <strong>O(n·32)</strong>."},
    {lv:"Hard",mnc:"Google · Amazon",title:"Word Squares",
     desc:"Given a list of unique words of equal length, find all word squares you can build. A word square's k-th row and k-th column are identical. Use backtracking with a Trie: at each row, candidates must share the prefix formed by the current column values. Why is the Trie essential here?"},
    {lv:"Hard",mnc:"Amazon · Google",title:"Stream of Characters",
     desc:"Given a list of words, design a structure to check if any <strong>suffix</strong> of an incoming character stream matches any word. The stream may be arbitrarily long. Efficient solution: insert <strong>reversed</strong> words into a Trie, then check reversed stream suffixes."}
  ]},
  {topic:"Union Find",icon:"🔀",questions:[
    {lv:"Easy",mnc:"Amazon · Google · Meta",title:"Redundant Connection",
     desc:"Given a tree with one extra edge added (making it have a cycle), find and return that redundant edge. Process edges in order with Union-Find: the <strong>first edge where both endpoints share the same root</strong> is the redundant one. Use path compression and union by rank."},
    {lv:"Easy",mnc:"Amazon · Microsoft · Bloomberg",title:"Accounts Merge",
     desc:"Given a list of accounts (each with a name and a list of emails), merge accounts that share at least one email address. Union-Find on emails: union all emails in the same account list. Group emails by root, sort each group, and attach the corresponding name."},
    {lv:"Medium",mnc:"Amazon · Google · Lyft",title:"Number of Islands II",
     desc:"Start with an m×n grid of water. Given a list of land-addition operations, return the number of islands after each operation. With Union-Find: add the new land cell, then union with any adjacent existing land cells. Increment island count on each merge that reduces component count."},
    {lv:"Medium",mnc:"Google · Amazon · Airbnb",title:"Most Stones Removed with Same Row or Column",
     desc:"Stones on a 2D grid: a stone can be removed if it shares a row or column with another stone. Find the maximum number of stones that can be removed. Union-Find: connect stones sharing a row or column. Answer = n − (number of connected components)."},
    {lv:"Hard",mnc:"Amazon · Google",title:"Minimum Spanning Tree (Kruskal's Algorithm)",
     desc:"Given a weighted undirected graph, find the <strong>Minimum Spanning Tree</strong> (minimum weight subset of edges that connects all vertices). Kruskal's: sort edges by weight, use Union-Find to add each edge only if it connects two different components. <strong>O(E log E)</strong>."},
    {lv:"Hard",mnc:"Google · Amazon",title:"Remove Max Edges to Keep Graph Traversable",
     desc:"An undirected graph has type-1 (Alice only), type-2 (Bob only), and type-3 (both) edges. Find the maximum number of edges removable while keeping the graph fully traversable for both Alice and Bob. Greedy: use two separate Union-Find structures, prioritise type-3 edges."}
  ]},
  {topic:"Greedy",icon:"🏆",questions:[
    {lv:"Easy",mnc:"Amazon · Apple · Netflix",title:"Best Time to Buy and Sell Stock II",
     desc:"You can buy and sell on multiple days (one transaction at a time). Maximise total profit. Greedy insight: <strong>capture every upward price movement</strong> — sum all positive differences between consecutive days. Prove why this greedy is optimal."},
    {lv:"Easy",mnc:"Amazon · Google · Microsoft",title:"Jump Game",
     desc:"Given an array where <code>nums[i]</code> is the max jump length from position <code>i</code>, determine if you can reach the last index. Greedy: maintain the <strong>farthest reachable index</strong>. If the current position ever exceeds the farthest reach, return false. <strong>O(n) O(1)</strong>."},
    {lv:"Medium",mnc:"Amazon · Google · Twitter",title:"Non-overlapping Intervals",
     desc:"Given an array of intervals, find the minimum number of intervals to remove so the rest are non-overlapping. Sort by <strong>end time</strong>. Greedily keep intervals with the earliest end; remove any that overlap the current kept interval. Prove why end-time sorting is correct."},
    {lv:"Medium",mnc:"Amazon · Google · Bloomberg",title:"Jump Game II",
     desc:"Given an array of jump lengths, find the <strong>minimum number of jumps</strong> to reach the last index. Greedy BFS: treat each jump as expanding a 'range'. At each step, find the farthest you can reach from the current range; when you exhaust the current range, increment jumps. <strong>O(n)</strong>."},
    {lv:"Hard",mnc:"Amazon · Google · Citadel",title:"Task Scheduler",
     desc:"Given a list of CPU tasks and a cooldown period <code>n</code>, find the minimum time units needed to finish all tasks. Greedy with a <strong>max-heap</strong>: always execute the most frequent available task. If none is available, insert idle time. Prove the greedy is optimal."},
    {lv:"Hard",mnc:"Google · Amazon",title:"Candy Distribution",
     desc:"Children stand in a line with ratings. Give each at least 1 candy; children with higher ratings than a neighbour must get more candy. Minimise total candies. <strong>Two passes</strong>: left-to-right (ascending runs), right-to-left (descending runs), take element-wise max. Prove correctness."}
  ]},
  {topic:"Sliding Window",icon:"🪟",questions:[
    {lv:"Easy",mnc:"Amazon · Google · Microsoft",title:"Maximum Sum Subarray of Size K",
     desc:"Given an integer array and integer <code>k</code>, find the <strong>maximum sum</strong> of any contiguous subarray of length exactly <code>k</code>. Compute the first window sum, then slide the window: add the incoming element and subtract the outgoing element. <strong>O(n) time, O(1) space</strong>."},
    {lv:"Easy",mnc:"Amazon · Microsoft · Salesforce",title:"Minimum Difference in Sliding Window of K Scores",
     desc:"Given an integer array representing student scores and integer <code>k</code>, find the minimum difference between the highest and lowest score of any group of <code>k</code> students. Sort the array. A window of size <code>k</code> on a sorted array minimises the spread."},
    {lv:"Medium",mnc:"Amazon · Facebook · LinkedIn",title:"Longest Repeating Character Replacement",
     desc:"Given a string and integer <code>k</code>, find the length of the longest substring you can obtain after replacing at most <code>k</code> characters. Sliding window invariant: <code>window_size − max_freq ≤ k</code>. Why is it valid to never decrease max_freq when shrinking?"},
    {lv:"Medium",mnc:"Amazon · Google · Uber",title:"Permutation in String",
     desc:"Given strings <code>s1</code> and <code>s2</code>, return <code>true</code> if any permutation of <code>s1</code> is a substring of <code>s2</code>. Fixed-size sliding window of length <code>len(s1)</code> in <code>s2</code>. Compare character frequency arrays. How do you avoid recomputing the whole frequency on each slide?"},
    {lv:"Hard",mnc:"Google · Facebook · Amazon · Snapchat",title:"Minimum Window Substring",
     desc:"Find the shortest window in <code>s</code> containing all characters of <code>t</code> (with duplicates). Sliding window with a <strong>'have' vs 'need' counter</strong>: expand right until valid, then shrink left to find the minimum valid window, then expand again. <strong>O(|s|+|t|)</strong>."},
    {lv:"Hard",mnc:"Amazon · Google",title:"Subarrays with K Different Integers",
     desc:"Count subarrays with <strong>exactly k</strong> distinct integers. Direct sliding window for exactly-k is hard. Key insight: <code>exactly(k) = atMost(k) − atMost(k−1)</code>. Implement a helper that counts subarrays with <strong>at most k</strong> distinct integers, then combine."}
  ]},
  {topic:"Two Pointers",icon:"👈👉",questions:[
    {lv:"Easy",mnc:"Facebook · Amazon · Google",title:"Valid Palindrome",
     desc:"Given a string, return <code>true</code> if it is a palindrome considering only alphanumeric characters (case-insensitive). Two pointers from both ends: skip non-alphanumeric characters, compare lower-case values. Advance both pointers when they match. <strong>O(n) O(1)</strong>."},
    {lv:"Easy",mnc:"Amazon · Microsoft · Adobe",title:"Move Zeroes",
     desc:"Move all <code>0</code>s in an integer array to the end while preserving the relative order of non-zero elements. Do this <strong>in-place</strong>. Two pointers: <code>insertPos</code> tracks the next slot for a non-zero value. After placing all non-zeros, fill the remaining slots with zeros."},
    {lv:"Medium",mnc:"Google · Apple · Meta",title:"3Sum",
     desc:"Find all unique triplets in the array that sum to zero. Sort first. For each fixed element, use two pointers on the remaining subarray. Carefully skip duplicates at all three levels (outer, left pointer, right pointer) to guarantee uniqueness. <strong>O(n²) time</strong>."},
    {lv:"Medium",mnc:"Amazon · Facebook · Microsoft",title:"Container With Most Water",
     desc:"Two vertical lines form a container on the x-axis. Maximise the water volume. Two pointers from both ends: area = <code>min(h[l], h[r]) × (r − l)</code>. Always move the pointer pointing to the <strong>shorter line</strong>. Prove why moving the taller line can never improve the answer."},
    {lv:"Hard",mnc:"Google · Amazon · Meta · Uber",title:"Trapping Rain Water",
     desc:"Compute the amount of water trapped between bars. Two-pointer approach: maintain <code>lMax</code> and <code>rMax</code>. Process the side with the smaller max-height — the water at that position is fully determined by the smaller side regardless of what is on the other side. <strong>O(n) O(1)</strong>."},
    {lv:"Hard",mnc:"Amazon · Microsoft · Google",title:"4Sum",
     desc:"Find all unique quadruplets in the array that sum to a given target. Extend 3Sum: fix two elements with nested loops (with duplicate skipping), then use two pointers for the remaining two. <strong>O(n³) time</strong>. Handle all duplicate cases carefully at every level."}
  ]},
  {topic:"Bit Manipulation",icon:"🔢",questions:[
    {lv:"Easy",mnc:"Amazon · Google · Microsoft",title:"Single Number",
     desc:"Every element in an array appears <strong>twice</strong> except for one element which appears once. Find that element in <strong>O(n) time and O(1) space</strong>. XOR all elements: pairs cancel out (a XOR a = 0), leaving the unique element. Why does XOR have this property?"},
    {lv:"Easy",mnc:"Amazon · Google · Apple",title:"Counting Bits",
     desc:"Given an integer <code>n</code>, return an array where <code>ans[i]</code> is the number of 1-bits in <code>i</code> for <code>0 ≤ i ≤ n</code>. DP recurrence: <code>ans[i] = ans[i >> 1] + (i & 1)</code>. Explain the insight: shifting right drops the LSB, and we only need to check if the LSB was set."},
    {lv:"Medium",mnc:"Amazon · Google · Bloomberg",title:"Sum of Two Integers Without + or −",
     desc:"Calculate the sum of two integers <strong>without using + or −</strong>. Bit manipulation: <code>a ^ b</code> gives the sum without carries; <code>(a & b) << 1</code> gives the carries. Repeat until no carry remains. How do you handle negative numbers and Python's infinite-precision integers?"},
    {lv:"Medium",mnc:"Amazon · Apple · Google",title:"Single Number III",
     desc:"An array has two elements appearing once; all others appear twice. Find both unique elements. Step 1: XOR all → gets <code>a ^ b</code>. Step 2: find any set bit in <code>a ^ b</code>. Step 3: partition all numbers by that bit into two groups; XOR each group to isolate <code>a</code> and <code>b</code>."},
    {lv:"Hard",mnc:"Google · Amazon",title:"Maximum XOR of Two Numbers in Array",
     desc:"Find the maximum XOR of any two numbers in an array. Brute force is O(n²). Insert all numbers into a <strong>binary Trie</strong> (MSB first). For each number, greedily choose the <strong>opposite bit</strong> at each level to maximise the XOR. <strong>O(n·32) time and space</strong>."},
    {lv:"Hard",mnc:"Amazon",title:"Maximum Product of Word Lengths",
     desc:"Given an array of words, find the maximum product of lengths of two words that share <strong>no common letters</strong>. Precompute a <strong>bitmask</strong> for each word (bit i = 1 if letter i is present). For each pair, check <code>mask[i] & mask[j] == 0</code> in O(1). Overall: O(n² + total characters)."}
  ]},
  {topic:"Sorting",icon:"🗂️",questions:[
    {lv:"Easy",mnc:"Amazon · Google · Bloomberg",title:"Meeting Rooms",
     desc:"Given a list of meeting intervals, determine if a person can attend <strong>all meetings</strong> (no overlaps). Sort by start time. Check each consecutive pair: if <code>intervals[i].start < intervals[i-1].end</code> there is a conflict. <strong>O(n log n)</strong> dominated by sorting."},
    {lv:"Easy",mnc:"Amazon · Microsoft · Apple",title:"Sort Colors (Dutch National Flag)",
     desc:"Sort an array containing only <code>0</code>s, <code>1</code>s, and <code>2</code>s in-place in a <strong>single pass</strong>. Use three pointers: <code>lo</code> (next 0), <code>mid</code> (current), <code>hi</code> (next 2). When <code>nums[mid] == 2</code>, swap with <code>hi</code> but do NOT advance <code>mid</code>. Why?"},
    {lv:"Medium",mnc:"Amazon · Google · Facebook",title:"Meeting Rooms II",
     desc:"Find the minimum number of conference rooms required to schedule all given meetings. Sort start and end times <strong>separately</strong>. Two pointers: if the next meeting starts before the current ends, allocate a new room; otherwise, a room is freed. Why does this greedy work?"},
    {lv:"Medium",mnc:"Amazon · Google · Oracle",title:"Largest Number",
     desc:"Given a list of non-negative integers, arrange them to form the largest number. Custom comparator: compare two numbers by their concatenated strings (<code>ab vs ba</code>). Handle the edge case where all numbers are zero. What is the time complexity of this approach?"},
    {lv:"Hard",mnc:"Google · Amazon · Microsoft · Bloomberg",title:"Count of Smaller Numbers After Self",
     desc:"For each element in the array, count the number of elements to its right that are <strong>strictly smaller</strong>. Brute force is O(n²). Solve in <strong>O(n log n)</strong> using modified merge sort: count inversions during the merge step, or use a Binary Indexed Tree after coordinate compression."},
    {lv:"Hard",mnc:"Amazon · Google",title:"Count of Range Sum",
     desc:"Given an integer array and range <code>[lower, upper]</code>, count the number of range sums <code>S(i, j)</code> (sum of <code>nums[i..j]</code>) that lie in <code>[lower, upper]</code>. Convert to <strong>prefix sums</strong> and count valid pairs in the merge sort step. Explain the merge-sort counting technique."}
  ]},
  {topic:"Math & Numbers",icon:"🔢",questions:[
    {lv:"Easy",mnc:"Amazon · Google · Apple",title:"Palindrome Number",
     desc:"Determine if an integer is a palindrome <strong>without converting to a string</strong>. Negative numbers are not palindromes. Reverse only the second half of the number by extracting digits from the end. Stop when original ≤ reversed. Handle even/odd digit counts. Expected: <strong>O(log n)</strong>."},
    {lv:"Easy",mnc:"Google · Amazon · Bloomberg",title:"Reverse Integer",
     desc:"Reverse the digits of a 32-bit integer. If result overflows the 32-bit signed range [−2³¹, 2³¹−1], return 0. Build reversed number one digit at a time, <strong>check overflow before each multiply-by-10</strong>. In Java/C++: use long; in Python: use integer bounds check. Expected: <strong>O(log n)</strong>."},
    {lv:"Easy",mnc:"Microsoft · Google · Amazon",title:"Excel Sheet Column Number",
     desc:"Convert a column title like 'AB' to its corresponding number. This is base-26 with no zero — treat A=1, B=2, ... Z=26. Process left to right: <code>result = result × 26 + charValue</code>. Reverse: convert number to title using modulo, add 1 first (since there is no 0). Expected: <strong>O(n)</strong>."},
    {lv:"Medium",mnc:"Google · Amazon · Microsoft",title:"Happy Number",
     desc:"A happy number repeatedly replaces itself with the sum of squares of its digits and eventually reaches 1. Detect cycle using <strong>Floyd's algorithm</strong> (slow/fast pointers on the sequence). If slow === fast and it's not 1, it's a cycle (unhappy). Or use a HashSet. Expected: <strong>O(log n)</strong> per step."},
    {lv:"Medium",mnc:"Google · Facebook · Uber",title:"Pow(x, n)",
     desc:"Implement <code>pow(x, n)</code> — raise x to the nth power including negative exponents. Use <strong>fast power (binary exponentiation)</strong>: if n is even, result = pow(x, n/2)². If odd, result = x × pow(x, n-1). Handle n < 0 by returning 1/pow(x, -n). Expected: <strong>O(log n)</strong>."},
    {lv:"Hard",mnc:"Google · Amazon · Bloomberg",title:"Integer to Roman",
     desc:"Convert an integer (1 to 3999) to Roman numeral string. Use <strong>greedy</strong> with a lookup table of all 13 special values: [1000,900,500,400,100,90,50,40,10,9,5,4,1] with their symbols. While num > 0: find largest value ≤ num, append symbol, subtract value. Expected: <strong>O(1)</strong> since bounded by 3999."}
  ]},
  {topic:"Matrix & 2D",icon:"🔲",questions:[
    {lv:"Easy",mnc:"Amazon · Microsoft · Apple",title:"Flood Fill",
     desc:"Given a 2D grid, starting position, and new color: fill all connected cells of the starting color with the new color. Use <strong>DFS or BFS</strong> with 4-directional neighbors. Handle the edge case where starting cell already has the new color (avoids infinite loop). Expected: <strong>O(m×n)</strong>."},
    {lv:"Easy",mnc:"Amazon · Google · Facebook",title:"Island Perimeter",
     desc:"Given a binary grid (1=land, 0=water), return the perimeter of the island. For each land cell, <strong>add 4 for each land cell, subtract 2 for each shared edge with another land cell</strong>. No DFS needed — pure math traversal. Expected: <strong>O(m×n) time, O(1) space</strong>."},
    {lv:"Easy",mnc:"Apple · Amazon · Microsoft",title:"Matrix Diagonal Sum",
     desc:"Calculate the sum of primary and secondary diagonals of a square matrix. Primary: <code>mat[i][i]</code>. Secondary: <code>mat[i][n-1-i]</code>. <strong>If n is odd, subtract the center element once</strong> (counted twice). Expected: <strong>O(n) time, O(1) space</strong>. Can you do it in a single loop?"},
    {lv:"Medium",mnc:"Amazon · Google · Microsoft",title:"Rotate Image",
     desc:"Rotate an n×n matrix 90° clockwise <strong>in-place</strong>. Two-step approach: (1) transpose the matrix — swap <code>mat[i][j]</code> with <code>mat[j][i]</code>; (2) reverse each row. For counter-clockwise: transpose then reverse each column. Expected: <strong>O(n²) time, O(1) space</strong>."},
    {lv:"Medium",mnc:"Google · Facebook · Apple",title:"Spiral Matrix",
     desc:"Return all elements of an m×n matrix in spiral order. Maintain four boundaries: top, bottom, left, right. Peel the matrix layer by layer: → right, ↓ down, ← left, ↑ up. Shrink boundaries after each direction. Handle remaining single row/column. Expected: <strong>O(m×n)</strong>."},
    {lv:"Hard",mnc:"Google · Amazon · Microsoft",title:"Number of Islands",
     desc:"Count connected components of '1's in a binary grid. Use <strong>DFS flood-fill</strong>: when a '1' is found, increment count and DFS to mark all connected '1's as visited (change to '0' or use visited set). Expected: <strong>O(m×n)</strong>. Follow-up: how to solve with Union-Find?"}
  ]},
  {topic:"Intervals",icon:"📏",questions:[
    {lv:"Easy",mnc:"Google · Facebook · Amazon",title:"Summary Ranges",
     desc:"Given a sorted unique integer array, return the shortest list of ranges covering all numbers. When consecutive, extend the range; otherwise, close it. Format: <code>\"a→b\"</code> for range, <code>\"a\"</code> for single number. Two pointer approach: track start of each range. Expected: <strong>O(n) time, O(1) extra space</strong>."},
    {lv:"Easy",mnc:"Amazon · Microsoft · Bloomberg",title:"Meeting Rooms",
     desc:"Given a list of intervals [start, end], determine if a person can attend all meetings (no two overlap). Sort by start time. Check each consecutive pair: if <code>intervals[i].start < intervals[i-1].end</code> there is a conflict. Expected: <strong>O(n log n)</strong> dominated by sorting step."},
    {lv:"Easy",mnc:"Google · Amazon",title:"Check if Two Intervals Overlap",
     desc:"Two intervals [a,b] and [c,d] overlap if and only if <code>a ≤ d AND c ≤ b</code>. Return the overlapping interval if they do: <code>[max(a,c), min(b,d)]</code>. This is a core sub-problem for merge intervals and insertion problems. Expected: <strong>O(1)</strong>. Draw on number line to visualize."},
    {lv:"Medium",mnc:"Google · Facebook · Amazon · Bloomberg",title:"Merge Intervals",
     desc:"Given an array of intervals, merge all overlapping intervals. Sort by start time. Iterate: if current start ≤ last merged end, extend the merged end to max(both ends); else add new interval. Expected: <strong>O(n log n)</strong>. What does the output look like for already non-overlapping input?"},
    {lv:"Medium",mnc:"Amazon · Google · Microsoft",title:"Non-overlapping Intervals",
     desc:"Find the minimum number of intervals to remove so the remaining are non-overlapping. Sort by <strong>end time</strong>. Greedily keep the interval with earliest end; if next overlaps, remove it (count++). This is equivalent to finding max non-overlapping set. Explain why end-time sorting is optimal."},
    {lv:"Hard",mnc:"Google · Facebook · Amazon",title:"Insert Interval",
     desc:"Given sorted non-overlapping intervals and a new interval, insert it and merge if necessary. Three phases: (1) add all intervals ending before new start, (2) merge all overlapping into new interval, (3) add remaining. Expected: <strong>O(n) time</strong>. Handle edge cases: inserting at beginning, end, or fully overlapping all."}
  ]},
  {topic:"Prefix & Sliding",icon:"🌊",questions:[
    {lv:"Easy",mnc:"Amazon · Google · LeetCode",title:"Running Sum of 1D Array",
     desc:"Return the running sum where <code>runningSum[i] = sum(nums[0..i])</code>. In-place: <code>nums[i] += nums[i-1]</code>. This is the foundation of prefix sum. Common follow-up: range sum query — answer in O(1) with prefix sum after O(n) build. Expected: <strong>O(n) time, O(1) extra space</strong>."},
    {lv:"Easy",mnc:"Amazon · Google · Microsoft",title:"Find Pivot Index",
     desc:"Find the leftmost index where left sum equals right sum. Precompute total sum. As you scan: check if <code>leftSum === total - leftSum - nums[i]</code>; if yes, return i. Update leftSum after check. Expected: <strong>O(n) time, O(1) space</strong>. What if no pivot exists?"},
    {lv:"Easy",mnc:"Amazon · Facebook",title:"Maximum Average Subarray",
     desc:"Find the contiguous subarray of length k with maximum average. Compute sum of first k elements, then slide right: add next element, subtract element k positions back. Track maximum window sum. Divide by k at end. Expected: <strong>O(n) time, O(1) space</strong>."},
    {lv:"Medium",mnc:"Amazon · Google · Lyft",title:"Subarray Sum Equals K",
     desc:"Count subarrays with sum equal to k. Use prefix sum + HashMap: store frequency of each prefix sum seen so far. At each index: check if <code>prefix - k</code> exists in the map (its count = subarrays ending here with sum k). <strong>O(n) time and space</strong>. Why does the naive O(n²) approach fail for large inputs?"},
    {lv:"Medium",mnc:"Google · Amazon",title:"Minimum Size Subarray Sum",
     desc:"Find the minimal length subarray with sum ≥ target. Use <strong>variable sliding window</strong>: expand right, shrink left while sum ≥ target. Track minimum window length. Expected: <strong>O(n)</strong>. Follow-up: O(n log n) solution using binary search on prefix sums — explain how."},
    {lv:"Hard",mnc:"Amazon · Google · Microsoft",title:"Maximum Sum of Two Non-Overlapping Subarrays",
     desc:"Find two non-overlapping subarrays of lengths L and M with maximum combined sum. Use prefix sums + two extra arrays: <code>maxL[i]</code> = max L-sum ending at or before i, <code>maxM[i]</code> = max M-sum ending at or before i. Combine from both directions. Expected: <strong>O(n) time, O(n) space</strong>."}
  ]},
  {topic:"Monotonic Stack",icon:"📚",questions:[
    {lv:"Easy",mnc:"Amazon · Google · Microsoft",title:"Next Greater Element I",
     desc:"Given array <code>nums1</code> (subset of <code>nums2</code>), find the next greater element for each nums1[i] in nums2. Preprocess nums2 using a <strong>monotonic decreasing stack</strong>: pop elements smaller than current and map them to current. O(n) lookup for all queries."},
    {lv:"Easy",mnc:"Amazon · Google · Apple",title:"Backspace String Compare",
     desc:"Given two strings with '#' as backspace, check if they are equal after processing. Use two pointers from the end: skip forward past backspaces. Compare characters. This O(n) approach avoids building the final strings. Handle multiple consecutive backspaces carefully."},
    {lv:"Medium",mnc:"Google · Amazon · LinkedIn",title:"Daily Temperatures",
     desc:"Given daily temperatures, return an array where each element is the number of days to wait for a warmer day. Use a <strong>monotonic decreasing stack</strong> of indices. When a warmer day is found (current > stack top), pop and compute difference. Each element pushed/popped once: <strong>O(n)</strong>."},
    {lv:"Medium",mnc:"Amazon · Apple · Uber",title:"Decode String",
     desc:"Decode strings like <code>3[a2[bc]]</code>. Use two stacks: one for counts, one for partial strings. On <code>[</code>: push count and current string. On <code>]</code>: pop count and prefix, repeat current string count times and concatenate. Characters: just append to current. Handle nested brackets correctly."},
    {lv:"Hard",mnc:"Google · Amazon · Microsoft · Apple",title:"Largest Rectangle in Histogram",
     desc:"Find the largest rectangle in a histogram of bar heights. Use a <strong>monotonic increasing stack</strong> of (index, height). When a shorter bar appears, pop and calculate area using popped height × (current_index - last_popped_index). Append a sentinel 0 at end for cleanup. <strong>O(n) time</strong>."},
    {lv:"Hard",mnc:"Google · Facebook · Amazon",title:"Maximal Rectangle",
     desc:"Given a binary matrix, find the largest rectangle containing only 1s. Build a <strong>histogram row by row</strong>: if cell is 1, increment height; else reset to 0. Apply largest rectangle in histogram algorithm to each row. Overall <strong>O(m×n)</strong>. This is a 2D extension of the histogram problem."}
  ]},
  {topic:"Advanced Graphs",icon:"🕸️",questions:[
    {lv:"Easy",mnc:"Amazon · Microsoft · Google",title:"Find Center of Star Graph",
     desc:"A star graph has one center connected to all other nodes. Given edges, find the center. The center must appear in <strong>both the first two edges</strong> — simply return the common node between edge[0] and edge[1]. Expected: <strong>O(1)</strong>. No need to process all edges."},
    {lv:"Easy",mnc:"Amazon · Google · Apple",title:"Find if Path Exists in Graph",
     desc:"Given a bidirectional graph and source/destination, check if a path exists. Use <strong>DFS or BFS</strong> from source, track visited nodes. Return true if destination is reached. Alternatively, use <strong>Union-Find</strong>: union all edges, check if source and destination have same representative. <strong>O(V+E)</strong>."},
    {lv:"Medium",mnc:"Google · Amazon · Meta",title:"Network Delay Time",
     desc:"Find the minimum time for a signal to reach all nodes from a source in a weighted directed graph. Use <strong>Dijkstra's algorithm</strong> with a min-heap. Start from source, relax edges greedily. Answer is max of all shortest distances. Return -1 if any node is unreachable. <strong>O((V+E) log V)</strong>."},
    {lv:"Medium",mnc:"Amazon · Google · Bloomberg",title:"Min Cost to Connect All Points",
     desc:"Connect all points with minimum total Manhattan distance. This is the <strong>Minimum Spanning Tree (MST)</strong> problem. Use <strong>Prim's algorithm</strong> with a min-heap: start from any node, greedily pick the closest unvisited node. Or Kruskal's with Union-Find on all O(n²) edges. <strong>O(n² log n)</strong>."},
    {lv:"Hard",mnc:"Google · Amazon · Uber",title:"Reconstruct Itinerary",
     desc:"Given airline tickets as [from, to] pairs, find the itinerary that uses all tickets and is lexicographically smallest. Use <strong>Hierholzer's algorithm</strong> for Eulerian path: DFS with a min-heap for lexicographic order. Post-order addition to result reversed at end. Start from 'JFK'. <strong>O(E log E)</strong>."},
    {lv:"Hard",mnc:"Google · Meta · Amazon",title:"Alien Dictionary",
     desc:"Given a sorted alien dictionary of words, find the character order. Build a directed graph from adjacent word comparisons: first differing character gives an edge. Run <strong>topological sort (BFS/Kahn's)</strong>. If cycle exists → invalid. Watch edge case: if a word is prefix of a shorter word → invalid. <strong>O(C)</strong> total chars."}
  ]}
];

// ══ INTERVIEW Q&A (30 Questions) ══
// ═══════════════════════════════════════════════════════════
// 📝 IQA — Interview Q&A cards
// Format: {q:"Question?", cat:"HR", ans:`Answer text`}
// cat: "HR" | "Technical"
// ═══════════════════════════════════════════════════════════
const IQA=[
  {q:"Tell me about yourself.",cat:"HR",ans:`Use Present → Past → Future (90 seconds):

"I'm a [role] with passion for [domain]. I've [key achievement + number]. Previously I [relevant experience]. I'm excited about [this role] because [specific reason]."

EXAMPLE: "I'm a final-year CS student specializing in full-stack. I've built 4 production apps including a real-time chat with 500+ users. I interned at a startup and reduced API latency by 40%. I'm excited about this role because your team is solving [specific problem] at scale."

✅ DO: Quantify everything. Tie YOUR past to THIS role.
❌ DON'T: Start "I was born..." or just recite your resume.`},
  {q:"Why do you want to work here?",cat:"HR",ans:`Research 3 things: their product, recent news, team culture.

FORMULA: "I admire [specific thing] because [reason]. My [skill] aligns with [their need]. I want to [specific contribution]."

EXAMPLE: "I've followed [Company]'s work on [specific feature] — it solves [real problem] in a unique way. My background in [tech] directly maps to your [team/stack]. I want to contribute to [specific goal from job description]."

✅ Name a specific product, feature, or blog post you read.
❌ Never say "great work culture" without specifics.`},
  {q:"What are your strengths?",cat:"HR",ans:`Pick 2-3 strengths RELEVANT to the role. Use evidence.

FORMAT: Strength → Evidence → Impact

Strong answers for tech roles:
• Problem-solving: "I debugged a production race condition that stumped the team for 3 days by adding structured logging."
• Fast learner: "I picked up Kubernetes in 2 weeks to unblock our deployment pipeline."
• Communication: "I wrote documentation that cut onboarding time by 50%."

✅ Be specific. Quantify impact.
❌ Never say "I'm a hard worker" — it's meaningless.`},
  {q:"What are your weaknesses?",cat:"HR",ans:`Pick a REAL weakness you're actively improving.

FORMULA: Weakness → Impact I noticed → Action I'm taking → Progress

GOOD EXAMPLES:
• "I struggled with time estimation. I started using story points and breaking tasks to <2hr chunks. Sprint accuracy improved from 60% to 85%."
• "Public speaking was hard. I joined a meetup and now present monthly."
• "I used to over-engineer. Now I write the simplest solution first, optimize only with profiling data."

✅ Show a specific, improving weakness.
❌ NEVER say "I work too hard" — interviewers lose trust in everything you say.`},
  {q:"Describe a challenge you overcame.",cat:"HR",ans:`Use STAR: Situation → Task → Action → Result

CRITICAL: Spend 60% of time on ACTION (what YOU did, not "we").

EXAMPLE: "During [project], our database timed out under load (S). I owned the backend (T). I analyzed slow queries with EXPLAIN, added composite indexes, and implemented Redis caching (A). Response time dropped from 4.2s to 180ms, supporting 10x more users (R)."

✅ Show YOU took initiative. Quantify the result.
✅ Under 2 minutes total.
❌ Don't say "we fixed it" — own your part.`},
  {q:"Where do you see yourself in 5 years?",cat:"HR",ans:`Show ambition + realistic direction + why this company is the path.

FORMULA: Short-term (2yr) + Long-term (5yr) + How THIS role fits.

EXAMPLE: "In 2 years, I want to own features end-to-end and mentor juniors. In 5 years, I'd like to move into a tech lead or staff engineer role, driving architecture. [This company] is exactly right — the scale here means I'll face hard engineering problems that accelerate growth."

✅ Be realistic. Show you want to grow WITH the company.
❌ Don't say "I want your job" or "I don't know."`},
  {q:"Why should we hire you?",cat:"HR",ans:`Your elevator pitch. Cover: skills match + proof + differentiator.

FORMULA: "You need [their pain]. I've solved [similar problem]. I'll bring [unique value]."

EXAMPLE: "Your JD mentions scaling payments to 1M TPS. I've done exactly that — I redesigned a transaction pipeline using Kafka, reducing P99 latency from 800ms to 45ms at 500K TPS. I also bring [unique skill from JD]. I can deliver impact in the first 90 days."

✅ Study the JD. Map YOUR experience to THEIR problems.
❌ Don't say "because I'm the best" without evidence.`},
  {q:"Describe your most proud project.",cat:"Technical",ans:`Structure: Problem → Tech choices → Your role → Challenges → Results → Learnings

"I built [name] to solve [problem]. I chose [stack] because [reason]. My contributions: [list]. Hardest challenge: [technical problem] — solved by [approach]. Result: [users/performance/business impact]. Learned: [key insight]."

MNC tips:
• Mention: testing strategy, deployment, monitoring, scalability
• Have GitHub link ready
• Prepare to whiteboard the architecture
• Be ready for "What would you do differently?"
• Know the exact bottlenecks and how you'd handle 10x scale`},
  {q:"Explain OOP: 4 pillars with examples.",cat:"Technical",ans:`Remember A-P-E-I:

ABSTRACTION: Hide complexity. Car driver uses steering wheel, not engine internals. In code: abstract class/interface exposes only needed methods.

POLYMORPHISM: Same interface, different behavior. Overloading (compile-time) + overriding (runtime). Example: Animal.speak() → Dog says "woof", Cat says "meow".

ENCAPSULATION: Bundle data + methods, restrict access. Private fields + public getters. Prevents invalid state.

INHERITANCE: Child inherits parent. "IS-A" relationship. Dog IS-A Animal.

BONUS: Abstract class vs Interface (abstract can have state; interface = pure contract).
SOLID: Single Responsibility, Open-Closed, Liskov, Interface Segregation, Dependency Inversion.`},
  {q:"How does HashMap work internally?",cat:"Technical",ans:`Critical Java interview question. Know it cold.

1. hashCode() on key → hash function → bucket index (hash % capacity)
2. Node(key,value) stored at bucket as LinkedList
3. Collision: chaining — new Node added to same bucket's list
4. Java 8+: When bucket size ≥ 8 → converts to Red-Black Tree → O(log n)
5. Load factor 0.75: when 75% full → rehash with 2× capacity

Time: Average O(1) get/put | Worst O(n) all collisions | With tree O(log n)
Why power-of-2 capacity: bucket = hash & (cap-1) (bitwise AND, faster than modulo)
Why 0.75: sweet spot between space and collision probability
null key: stored at bucket 0
HashMap vs HashTable: HashTable synchronized (thread-safe, slower)`},
  {q:"ArrayList vs LinkedList — when to use each?",cat:"Technical",ans:`ARRAYLIST (dynamic array):
✅ Random access: O(1)
✅ Append to end: O(1) amortized
❌ Insert/delete at middle: O(n) — shift elements
✅ Cache-friendly (contiguous memory)

LINKEDLIST (doubly-linked nodes):
✅ Insert/delete at head/tail: O(1)
❌ Random access: O(n) — traverse
❌ Memory overhead per node (prev,next pointers)
❌ Poor cache locality — nodes scattered in heap

DECISION RULE:
• Default: ArrayList (cache-friendly, 95% of cases)
• Use LinkedList: implementing Queue/Deque, frequent head insertions
• In practice: Java's ArrayDeque beats LinkedList for queue operations

KEY INSIGHT: Iterator.remove() is O(1) for LinkedList, O(n) for ArrayList.`},
  {q:"What is multithreading? Explain synchronized.",cat:"Technical",ans:`MULTITHREADING: Multiple threads sharing the same heap memory, executing concurrently.

Create threads:
1. extends Thread → override run()
2. implements Runnable → new Thread(runnable).start()
3. Callable<T> + Future<T> → returns value
4. ExecutorService → thread pool management (preferred)

SYNCHRONIZED: Only one thread executes a block at a time.
• Instance method: locks on 'this'
• Static method: locks on Class object
• Block: locks on specified object (more granular = better)

PROBLEMS:
Race condition: two threads read-modify-write same variable → corrupt state
Deadlock: A holds lock1 waiting for lock2; B holds lock2 waiting for lock1
Solution: always acquire locks in same order

BETTER OPTIONS:
ReentrantLock, AtomicInteger/AtomicReference (lock-free), ConcurrentHashMap, volatile (visibility not atomicity)`},
  {q:"What is REST API? Methods + Status codes.",cat:"Technical",ans:`REST = Representational State Transfer. 6 constraints: Stateless, Client-Server, Cacheable, Uniform Interface, Layered, Code-on-Demand.

HTTP METHODS:
GET    → Read (idempotent, no body, cacheable)
POST   → Create (non-idempotent, returns 201)
PUT    → Replace entire resource (idempotent)
PATCH  → Partial update (idempotent)
DELETE → Remove (idempotent)

STATUS CODES (memorize):
200 OK | 201 Created | 204 No Content
301 Moved | 304 Not Modified
400 Bad Request | 401 Unauthorized | 403 Forbidden | 404 Not Found
409 Conflict | 429 Too Many Requests
500 Server Error | 502 Bad Gateway | 503 Unavailable

BEST PRACTICES:
• Nouns in URLs: /users/{id} not /getUser
• Version API: /v1/users
• Pagination: ?page=1&limit=20
• Consistent error objects: {error: {code, message}}`},
  {q:"Explain ACID and isolation levels.",cat:"Technical",ans:`ACID:
Atomicity: All-or-nothing. No half-commits.
Consistency: DB transitions between valid states only.
Isolation: Concurrent transactions don't see each other's partial work.
Durability: Committed data survives crashes (write-ahead log).

ISOLATION LEVELS (consistency vs concurrency tradeoff):
READ UNCOMMITTED → can read dirty data
READ COMMITTED → only committed data (default PostgreSQL)
REPEATABLE READ → same query returns same row in same tx (default MySQL)
SERIALIZABLE → full isolation, sequential execution (slowest)

PHENOMENA:
• Dirty read: reading uncommitted data
• Non-repeatable read: same row different value in same transaction
• Phantom read: different rows returned by same query in same transaction

INTERVIEW: "What happens without transactions in payments?" → money debited but not credited (partial failure)`},
  {q:"What is indexing in databases?",cat:"Technical",ans:`Index: separate data structure (B-tree, hash) speeding up lookups at cost of write performance and storage.

B-TREE INDEX (default):
• Good for: range queries, ORDER BY, LIKE 'abc%'
• NOT good for: LIKE '%abc' (can't use index), low cardinality

WHEN TO ADD:
✅ Columns in frequent WHERE clauses
✅ JOIN conditions (foreign keys)
✅ ORDER BY / GROUP BY columns
✅ High cardinality columns

WHEN NOT TO:
❌ Small tables (full scan is faster)
❌ Low cardinality (boolean, gender — few unique values)
❌ Write-heavy tables (index maintenance overhead)

COMPOSITE INDEX: (first, last) helps queries on first alone or (first+last) but NOT last alone. Leftmost prefix rule.

ALWAYS: Use EXPLAIN ANALYZE to verify index usage.`},
  {q:"Explain the JavaScript Event Loop.",cat:"Technical",ans:`JavaScript is single-threaded. Event loop enables non-blocking I/O.

EXECUTION ORDER:
1. Synchronous code (call stack)
2. process.nextTick (Node.js — before microtasks)
3. Microtask queue: Promises (.then/.catch), queueMicrotask
4. Macrotask queue: setTimeout, setInterval, I/O callbacks

CLASSIC INTERVIEW QUESTION:
console.log('1');
setTimeout(()=>console.log('2'),0);
Promise.resolve().then(()=>console.log('3'));
console.log('4');
OUTPUT: 1, 4, 3, 2

WHY: Sync runs first → call stack empties → microtasks (promises) drain completely → then macrotasks (setTimeout).

BLOCKING: Never run CPU-intensive sync ops on the main thread. Use Worker threads. This is why crypto.pbkdf2Sync is bad in production.`},
  {q:"What is Docker and why use it?",cat:"Technical",ans:`Docker: containerization platform packaging app + dependencies + runtime settings into isolated containers.

PROBLEM SOLVED: "Works on my machine" — ensures identical env from dev → staging → production.

KEY CONCEPTS:
Image: blueprint defined by Dockerfile. Read-only layers.
Container: running instance of an image
Layer: each Dockerfile instruction = cached layer
Registry: Docker Hub, ECR, GCR store images

DOCKERFILE BEST PRACTICES:
• Specific base tags (never :latest)
• Multi-stage builds: build stage + minimal runtime stage
• COPY only what's needed (.dockerignore)
• Non-root user for security
• Healthcheck instruction

docker-compose: multi-container local orchestration

vs Kubernetes: Docker = runs containers | K8s = orchestrates thousands at scale`},
  {q:"Explain Big O notation with examples.",cat:"Technical",ans:`Big O: how algorithm performance SCALES with input size n.

O(1)      Constant:       HashMap lookup, array[i]
O(log n)  Logarithmic:    Binary search, balanced BST
O(n)      Linear:         Single loop, linear search
O(n log n) Linearithmic:  Merge sort, heap sort
O(n²)     Quadratic:      Nested loops, bubble sort
O(2ⁿ)     Exponential:    Recursive fibonacci (no memo), power set
O(n!)     Factorial:      Permutations, brute-force TSP

TIPS:
• Always state BOTH time AND space complexity
• Mention best/average/worst: QuickSort avg O(n log n) but worst O(n²)
• "Optimize to O(n log n)?" → sorting or heap
• "O(1) space?" → in-place algorithm or math trick
• Drop constants: O(2n) = O(n), O(n²+n) = O(n²)`},
  {q:"SQL vs NoSQL — when to use each?",cat:"Technical",ans:`SQL (Relational): structured tables, fixed schema, ACID, JOINs.
Best for: financial transactions, inventory, anything needing referential integrity.
Examples: PostgreSQL, MySQL, SQLite

NoSQL types:
Document (MongoDB): JSON-like — profiles, catalogs, content
Key-Value (Redis): sessions, caching, leaderboards
Column (Cassandra): time series, IoT, write-heavy analytics
Graph (Neo4j): social networks, recommendations

CAP THEOREM: Guarantee only 2 of:
Consistency, Availability, Partition Tolerance
SQL → C + P | NoSQL (Cassandra) → A + P

DECISION:
• Relationships + ACID → SQL
• High write throughput + horizontal scale → NoSQL
• Flexible schema + rapid iteration → NoSQL
• Complex analytics → SQL`},
  {q:"What are design patterns? Name common ones.",cat:"Technical",ans:`Design patterns: reusable solutions to common software problems.

CREATIONAL (object creation):
• Singleton: one global instance (DB pool, config)
• Factory: create objects without specifying exact class
• Builder: step-by-step construction (AlertDialog.Builder)

STRUCTURAL (compose objects):
• Adapter: convert incompatible interfaces (legacy wrapper)
• Decorator: add behavior without modifying class (logging middleware)
• Facade: simple interface to complex subsystem
• Proxy: control access (lazy loading, auth, caching)

BEHAVIORAL (communication):
• Observer: pub-sub, event systems (React state, DOM events)
• Strategy: swap algorithms at runtime (Stripe/PayPal payment)
• Command: encapsulate actions as objects (undo/redo)
• Iterator: traverse collections uniformly

MOST ASKED: Singleton (thread-safety), Observer, Strategy, Factory`},
  {q:"How does HTTPS/TLS work?",cat:"Technical",ans:`TLS HANDSHAKE (TLS 1.3 simplified):
1. CLIENT HELLO: client sends supported cipher suites + TLS version
2. SERVER HELLO: server sends chosen cipher + certificate
3. CERT VERIFICATION: client verifies against trusted CA chain
4. KEY EXCHANGE: Diffie-Hellman key agreement (asymmetric)
5. SESSION: all further traffic encrypted with symmetric key (AES-256)

WHY TWO TYPES:
Asymmetric (RSA/ECC): computationally expensive → only for key exchange
Symmetric (AES): fast → for bulk encryption of actual data

CERTIFICATE CHAIN:
Website cert → Intermediate CA → Root CA (pre-installed in browser/OS)
Broken chain = browser shows "Not Secure"

HSTS: browser never falls back to HTTP once seen HTTPS
Certificate Pinning: app accepts only specific cert — prevents MITM even with compromised CA`},
  {q:"Microservices vs Monolith.",cat:"Technical",ans:`MONOLITH: single deployable unit.
✅ Simple develop/test/deploy initially
✅ No network latency between components
❌ Scale all-or-nothing
❌ One bug can crash everything
❌ Tech stack locked in

MICROSERVICES: independently deployable services, own DB each.
✅ Independent scaling (scale checkout 10x)
✅ Team autonomy, fault isolation, polyglot
❌ Network latency, distributed transactions (SAGA pattern)
❌ Operational complexity (K8s, service mesh, distributed tracing)
❌ Testing is harder

WHEN TO USE:
Start: modular monolith → extract when you feel pain (scaling or team bottlenecks)
Don't start greenfield with microservices — Martin Fowler's famous advice.

INTERVIEW ANSWER: "I'd start with well-structured monolith and extract microservices when specific bottlenecks emerge."`},
  {q:"What is CI/CD?",cat:"Technical",ans:`CI (Continuous Integration): merge code frequently → automated build + test on every push.
Goal: catch integration bugs early. Main branch never breaks.

CD (Continuous Delivery): code always in deployable state. Auto-deploy to staging, manual trigger for prod.
CD (Continuous Deployment): every passing build auto-deploys to production (Amazon: deploys every 11 seconds).

TYPICAL PIPELINE:
Push → Lint → Unit tests → Build → Integration tests → Security scan → Deploy staging → Smoke tests → Deploy prod

TOOLS: GitHub Actions, GitLab CI, Jenkins, CircleCI, ArgoCD (GitOps)

SHOW YOU UNDERSTAND:
• Trunk-based development
• Feature flags for safe deploys
• Rollback strategy (canary deployments: route 5% traffic first)
• Automated testing is what makes CI/CD safe

QUOTE: "CI/CD without automated testing is just automated failures."`},
  {q:"How do you handle a production outage?",cat:"HR",ans:`This tests your incident response mindset. Show calm, systematic thinking.

RESPONSE STEPS:
1. ACKNOWLEDGE: Communicate immediately ("I'm on it") even before diagnosis
2. MITIGATE FIRST: Roll back? Feature flag off? Traffic re-route?
3. DIAGNOSE: Logs, metrics, recent deployments, error rates
4. FIX: Targeted fix, not guesswork
5. COMMUNICATE: Stakeholders want updates every 15-30 min
6. POST-MORTEM: Blameless. Timeline. Root cause. Prevention.

EXAMPLE: "When checkout service went down at 2AM, I checked Datadog — error rate spiked after a deploy 10 min earlier. I rolled back immediately (3 min recovery), notified team, spent next hour finding the exact regression, added a test case, and published a blameless post-mortem by 9AM."

KEY PHRASES: "blameless post-mortem", "rollback strategy", "runbooks", "on-call rotation"`},
  {q:"Your approach to code reviews?",cat:"HR",ans:`AS AUTHOR:
• PR description: context, what/why changed, how to test
• Small PRs (<400 lines): faster review, faster merge
• Self-review first: catch obvious issues yourself
• Link to ticket/issue

AS REVIEWER:
• Review INTENT first (right approach?), then details
• Distinguish: blocker vs suggestion vs nit (label them)
• "What do you think about..." not "You should..."
• Approve with confidence, not just to be polite
• Automate what's automatable (linting, formatting → not manual review)

WHAT YOU LOOK FOR:
• Correctness, edge cases, error handling
• Performance (N+1 queries, missing indexes)
• Security (injection, auth checks, secrets exposed)
• Testability and coverage
• Naming and readability`},
  {q:"Explain SOLID principles.",cat:"Technical",ans:`S - Single Responsibility: One reason to change. UserAuth shouldn't send emails too.

O - Open/Closed: Open for extension, closed for modification. Add behavior via new classes, not editing existing. (Interfaces + polymorphism)

L - Liskov Substitution: Subclasses must be substitutable for parent. Square IS-A Rectangle violation: setting width changes height, breaking rectangle contract.

I - Interface Segregation: Don't force classes to implement unused interface methods. Split fat interfaces. (FlyingBird vs SwimmingBird instead of one Bird interface)

D - Dependency Inversion: High-level modules depend on abstractions (interfaces), not low-level modules. Constructor inject dependencies → testable, mockable.

MEMORY TRICK: SOLID = good OOP that's easy to test, extend, maintain.
INTERVIEW: "Which SOLID does unit testing enforce?" → Dependency Inversion (you inject mocks).`},
  {q:"How do you stay updated with tech?",cat:"HR",ans:`Shows intrinsic learning motivation. Be SPECIFIC.

RESOURCES by type:
Newsletters: TLDR, ByteByteGo, The Pragmatic Engineer, JS Weekly
Engineering blogs: Netflix, Uber, Meta, Google SRE
Research: arxiv.org/cs, Google/Meta engineering blogs
Podcasts: Lex Fridman, Syntax.fm, Software Engineering Daily
Community: dev.to, Hacker News, specific subreddits

MY SYSTEM (example answer):
"I dedicate 30 min every morning to engineering blogs. I follow 5 engineers I admire. Every quarter I pick one technology to build something with — last quarter was Rust, this quarter is K8s internals. I do LeetCode weekly to stay sharp."

BONUS — mention something recent and specific:
"I read Google's Spanner paper last month — it changed how I think about distributed transactions."

Companies love engineers with intrinsic motivation to learn.`},
  {q:"Your biggest technical mistake?",cat:"HR",ans:`They want: self-awareness, learning mindset, no defensiveness.

FORMULA: Mistake → What happened → What I learned → What I changed

EXAMPLE: "Early on, I pushed a database migration to production without a rollback plan. It locked the users table for 8 minutes — production outage at 2AM. I learned to: 1) test migrations on staging with production-sized data, 2) use non-blocking migration techniques, 3) always have a rollback script ready before touching production. That incident fundamentally changed how I approach operational risk."

✅ Own it fully. Show the specific process change.
❌ Don't blame others
❌ Don't use a fake "strength disguised as weakness"
❌ Don't make it sound like you haven't learned`},
  {q:"Disagreements with your tech lead?",cat:"HR",ans:`Shows professional maturity. Don't say "I just do what they say."

GOOD APPROACH:
1. Present data-driven alternative, not just preference
2. Ask clarifying questions: "Help me understand the tradeoff"
3. Timebox: "Can we evaluate both approaches in 30 min?"
4. Prototype when possible: "Let me spike this in a day"
5. Disagree and commit: Once decided, fully execute

EXAMPLE: "I disagreed on using MongoDB for a feature needing complex transactions. I documented specific consistency failure scenarios, proposed a 2-day technical comparison spike. Lead agreed with PostgreSQL after the spike. Had they not agreed, I would have committed 100% — unresolved conflict hurts teams more than suboptimal tech."

KEY MESSAGE: Advocate with data, then commit to the team decision.`},
  {q:"Design: URL Shortener system.",cat:"Technical",ans:`Classic system design. 15 minutes structure:

REQUIREMENTS (2 min):
• 100M URLs/day? Read:Write = 100:1?
• Custom alias? Analytics? Expiry?

ESTIMATES:
• 100M writes/day ≈ 1200/sec writes, 120K/sec reads
• Storage: 100M × 500B = 50GB/day

API:
POST /shorten {long_url} → {short_url}
GET /{code} → 301/302 redirect

SHORT CODE:
• Base62 (a-zA-Z0-9): 62⁶ = 56B codes for 6 chars
• Options: counter+base62, random+collision check, hash+truncate

DB SCHEMA:
{id, short_code, long_url, created_at, expiry, user_id}
Index on short_code

CACHING:
Redis LRU: top 20% URLs = 80% traffic
Cache hit: URL → redirect immediately
Cache miss: DB → cache → redirect

SCALE:
Multiple app servers + Load balancer + CDN for redirects`},
  {q:"How does Git work internally?",cat:"Technical",ans:`Git stores content as a Directed Acyclic Graph (DAG) of objects.

4 OBJECT TYPES:
Blob: stores file content
Tree: directory structure (pointers to blobs + trees)
Commit: tree pointer + parent commit + author + message
Tag: annotated pointer to a commit

COMMIT HASH: SHA-1 of commit content. Changing anything changes all descendant hashes.

COMMANDS EXPLAINED:
git add: stages changes (creates blob objects)
git commit: creates tree + commit object, moves HEAD
git merge: creates commit with 2 parents (fast-forward if no divergence)
git rebase: re-applies commits on new base → linear history, REWRITES SHAs
git stash: creates special commit, resets working directory
git reset --hard: moves HEAD + discards changes
git revert: creates NEW commit undoing changes (safe for shared branches)

GOLD: "git rebase rewrites history — never rebase public branches. git revert is safe because it doesn't change history."`},
  {q:"What is Kubernetes?",cat:"Technical",ans:`Kubernetes: container orchestration — deploys, scales, manages containers across a cluster.

CORE CONCEPTS:
Pod: smallest unit (1+ containers sharing network/storage)
Deployment: manages replicas, rolling updates, rollbacks
Service: stable endpoint to a set of pods (LoadBalancer/ClusterIP/NodePort)
ConfigMap/Secret: inject config into pods
HPA: Horizontal Pod Autoscaler — scale on CPU/memory

SELF-HEALING:
Pod crashes → K8s restarts automatically
Node dies → pods rescheduled on healthy nodes
Liveness probe: restart if unhealthy
Readiness probe: don't route traffic until ready

WHEN TO USE:
✅ Multiple services scaling independently
✅ Team of 10+ engineers, multiple services
✅ Cloud-native (GKE, EKS, AKS)
❌ Single service, small team → Docker Compose
❌ Serverless use case → Lambda/Cloud Functions

INTERVIEW SIGNAL: Start with Render/Railway → Docker Compose → K8s when you need fine-grained scaling or service mesh.`},
];

// ═══════════════════════════════════════════════════════════
// 📝 APTITUDE — Aptitude shortcut tips
// New tip: add string to tips[] of existing topic
// New topic: {topic:"Name", icon:"🎯", tips:["tip1","tip2"]}
// ═══════════════════════════════════════════════════════════
// ══ APTITUDE SHORTCUTS ══
const APTITUDE=[
  {topic:"Number System",icon:"🔢",tips:[
    "Div by 2: last digit even | by 3: digit sum ÷3 | by 9: digit sum ÷9 | by 11: alt-digit diff = 0/±11",
    "Unit digit cycles: 2→{2,4,8,6}, 3→{3,9,7,1}, 7→{7,9,3,1}, 8→{8,4,2,6} period 4",
    "Trick: (50+n)²=2500+100n+n² | (50-n)²=2500-100n+n² | 47²=2500-300+9=2209",
    "Sum 1…n=n(n+1)/2 | Sum of squares=n(n+1)(2n+1)/6 | Sum of cubes=[n(n+1)/2]²",
    "LCM × HCF = product of two numbers (always)",
    "Trailing zeros in n! = ⌊n/5⌋+⌊n/25⌋+⌊n/125⌋+... (count factors of 5, not 2)",
    "Total factors of n=aᵖbᵍcʳ → (p+1)(q+1)(r+1)",
    "Euler's totient: co-primes to n = n×∏(1-1/p) for each prime p dividing n",
    "For any n: n³-n = n(n-1)(n+1) is always divisible by 6",
    "Last 2 digits trick: compute (base)^exp mod 100 using cyclicity"
  ]},
  {topic:"Percentages",icon:"%",tips:[
    "KEY: x% of y = y% of x → swap to make easier (8% of 75 = 75% of 8 = 6)",
    "Fractions: 12.5%=1/8 | 16.67%=1/6 | 33.33%=1/3 | 37.5%=3/8 | 62.5%=5/8 | 66.67%=2/3",
    "Successive: a% then b% → net = a+b+ab/100 (use minus for decrease)",
    "Price rises x% → cut consumption by x/(100+x)×100% to keep expenditure same",
    "A is x% more than B → B is 100x/(100+x)% less than A (not same!)",
    "Population: P_n = P_0×(1±r/100)ⁿ (compound growth model)",
    "Error%: (error/true value)×100 where error = |observed - true|",
    "Mixture: overall% = (p1×q1 + p2×q2)/(q1+q2) weighted average",
    "Commission = Rate% of Sale Price. Net receipts = Sale - Commission",
    "Result% = (New-Old)/Old×100. Negative = decrease, Positive = increase"
  ]},
  {topic:"Profit & Loss",icon:"💰",tips:[
    "SP=(100+P%)×CP/100 | CP=100×SP/(100+P%) | Swap + for - when loss",
    "CRITICAL: Two items same SP, one x% profit one x% loss → ALWAYS net loss = x²/100%",
    "Successive discounts a%,b%: effective = a+b-ab/100 (NOT simply a+b)",
    "False weight profit%: (True-False)/False × 100 (if gives 900g claiming 1000g → 11.11%)",
    "If CP of m = SP of n → profit% = (m-n)/n × 100",
    "MP to CP: MP = CP(100+markup%)/(100-discount%). Net profit from both.",
    "Overhead: actual CP = original CP + overhead expenses (then compute profit on that)",
    "Break even: units = Fixed cost ÷ (SP - Variable cost per unit)",
    "Margin vs Markup: Margin = profit/SP×100 | Markup = profit/CP×100 (both common in interviews)",
    "SP when profit% given on SP: SP = CP×100/(100-profit%) — trickier formula variant"
  ]},
  {topic:"Time & Work",icon:"⚙️",tips:[
    "A in 'a' days → work per day = 1/a. Foundation of everything.",
    "A+B together: T = ab/(a+b). Three: T = abc/(ab+bc+ca)",
    "LCM method: LCM of days = total units. Units/day each. Sum = combined rate.",
    "If A is n times faster than B: A's time = B's time ÷ n",
    "After k days, remaining fraction = (T-k)/T where T = total days",
    "Pipe fill/drain: filling = positive, draining = negative. Net rate = algebraic sum.",
    "M men, D days, H hours: MDH = constant for same work quantity",
    "A+B in T₁, A+B+C in T₂ → C alone = T₁×T₂/(T₁-T₂)",
    "Alternating work A,B: in 2-day cycle = 1/a + 1/b work done",
    "Efficiency ratio a:b → time ratio b:a (always inverse relationship)"
  ]},
  {topic:"Speed, Distance, Time",icon:"🚂",tips:[
    "D=S×T | Average speed same distance twice: 2s₁s₂/(s₁+s₂) (harmonic mean, not arithmetic!)",
    "km/h → m/s: ×5/18 | m/s → km/h: ×18/5 (memorize this instantly)",
    "Relative speed: same direction = |s₁-s₂| | opposite = s₁+s₂",
    "Train crossing pole: T=L/S | platform: T=(L+P)/S | two trains: T=(L₁+L₂)/relative_S",
    "Boats: downstream=B+R | upstream=B-R | still water=(down+up)/2 | river=(down-up)/2",
    "Late t₁ at s₁, early t₂ at s₂: D = s₁×s₂×(t₁+t₂)/(s₂-s₁)",
    "Meeting from opposite ends: T=D/(s₁+s₂). Distance from A = D×s₁/(s₁+s₂)",
    "Chase: T = gap/relative_speed. Capture when faster one covers total distance",
    "Circular track same direction: meet after LCM(T₁,T₂) of their individual times",
    "Escalator: steps seen by person = speed_of_person × time_taken"
  ]},
  {topic:"Simple & Compound Interest",icon:"🏦",tips:[
    "SI = PRT/100 | A = P(1+RT/100) — memorize both forms",
    "CI = P(1+R/100)ⁿ - P | Half-yearly: use R/2 and 2n",
    "CI - SI for 2 years = P(R/100)² | For 3 years = P(R/100)²×(3+R/100)",
    "Rule of 72: money doubles in ≈72/R years at compound interest",
    "Effective annual rate for half-yearly at r%: EAR = (1+r/200)² - 1",
    "True discount: TD = A×R×T/(100+R×T). Banker's discount: BD = A×R×T/100",
    "BD > TD always. BD - TD = Interest on TD (useful relation)",
    "Same principal, same rate: SI for n years = n×(SI for 1 year). Linear not exponential.",
    "Growth comparison: At same rate, CI > SI for same period (difference starts year 2)",
    "Present worth: PW = A/(1+R/100)ⁿ. Used in discounting problems."
  ]},
  {topic:"Ratio & Proportion",icon:"⚖️",tips:[
    "a:b=c:d ↔ ad=bc (cross multiplication). Foundation of all proportion problems.",
    "Duplicate ratio = a²:b² | Sub-duplicate = √a:√b | Triplicate = a³:b³",
    "Combining a:b=m:n and b:c=p:q → a:b:c = mp:np:nq",
    "Alligation rule: mix costs c₁,c₂ for mean m → ratio = (c₂-m):(m-c₁)",
    "Milk-water after n replacements of x from V: milk remaining = V×(1-x/V)ⁿ",
    "Partnership: profit shares proportional to (capital × time) for each partner",
    "A:B=3:4 and B:C=5:6 → A:B:C=15:20:24 (multiply to align B=LCM(4,5)=20)",
    "Fourth proportional: a:b=c:x → x=bc/a. Mean proportional of a,b = √(ab)",
    "Proportion variation: Direct ∝ → y=kx | Inverse ∝ → y=k/x",
    "Componendo-Dividendo: if a/b=c/d then (a+b)/(a-b)=(c+d)/(c-d)"
  ]},
  {topic:"Permutation & Combination",icon:"🎲",tips:[
    "nPr = n!/(n-r)! → ORDER matters. nCr = n!/r!(n-r)! → order doesn't.",
    "nCr = nC(n-r). nC0=nCn=1. Pascal: nCr + nCr+1 = n+1Cr+1",
    "Circular arrangement of n distinct = (n-1)!. Necklace = (n-1)!/2",
    "Identical items: n!/p!q!r!... (MISSISSIPPI: 11!/4!4!2! = 34650)",
    "Distributions: n distinct into r distinct boxes = rⁿ | n identical into r distinct = C(n+r-1,r-1)",
    "At least one: 2ⁿ-1 (include/exclude for each item, remove empty set)",
    "Diagonals of n-gon = n(n-3)/2. Triangles from n points = nC3",
    "Handshakes for n people = nC2 = n(n-1)/2",
    "Dearrangement D(n) = n!×[1 - 1/1! + 1/2! - ... ±1/n!] ≈ n!/e",
    "Rank of word: for each position, count letters alphabetically before it × (remaining)!"
  ]},
  {topic:"Probability",icon:"🎯",tips:[
    "P(A) = Favorable/Total. Range: 0 ≤ P(A) ≤ 1. Use complement: P(A') = 1-P(A)",
    "P(A∪B) = P(A)+P(B)-P(A∩B). Mutually exclusive: P(A∪B)=P(A)+P(B)",
    "Independent: P(A∩B)=P(A)×P(B). Dependent: P(A∩B)=P(A)×P(B|A)",
    "Bayes: P(A|B) = P(B|A)×P(A)/P(B). Critical for ML interview questions too!",
    "Cards (52): 4 suits×13 ranks. 4 Aces, 12 face cards, 26 red, 26 black.",
    "Dice: sample space = 6ⁿ for n dice. P(sum=7 with 2 dice)=6/36=1/6 (most likely sum)",
    "Without replacement: 2nd draw depends on 1st. Always track denominator change.",
    "Geometric: P(first success on kth trial) = (1-p)^(k-1) × p",
    "Binomial: P(X=k successes in n trials) = nCk × pᵏ × (1-p)^(n-k)",
    "Expected value E(X) = Σ x·P(x). Fair die = 3.5. Fair coin heads = 0.5"
  ]},
  {topic:"Geometry & Mensuration",icon:"📐",tips:[
    "Triangle area=½bh | Heron's: √[s(s-a)(s-b)(s-c)] where s=(a+b+c)/2",
    "Equilateral: area=√3a²/4, height=√3a/2. Circle: A=πr², C=2πr",
    "Sector: area=(θ/360)×πr² | Arc=(θ/360)×2πr. θ in degrees.",
    "Cube: V=a³, SA=6a², diagonal=a√3. Cuboid: V=lbh, SA=2(lb+bh+lh)",
    "Cylinder: V=πr²h, CSA=2πrh, TSA=2πr(r+h). Cone: V=⅓πr²h, slant=√(r²+h²)",
    "Sphere: V=4πr³/3, SA=4πr². Hemisphere: V=2πr³/3, TSA=3πr²",
    "Angle subtended by diameter at circle = 90° always (Thales' theorem)",
    "Sum of interior angles = (n-2)×180°. Regular polygon each angle = (n-2)×180/n",
    "Trapezoid area = ½×(sum of parallel sides)×height",
    "Pythagorean triples: (3,4,5),(5,12,13),(8,15,17),(7,24,25),(9,40,41) — memorize all!"
  ]},
  {topic:"Data Interpretation",icon:"📊",tips:[
    "BAR CHART: Always check Y-axis scale — it may NOT start at 0!",
    "PIE CHART: sector angle = (value/total)×360° | Percentage = value/total×100",
    "LINE GRAPH: steep slope = fast change. Flat = stable. Look for reversals.",
    "TABLE: verify row and column totals always. Grand total must match.",
    "Growth% = (New-Old)/Old×100. CAGR = (Final/Initial)^(1/n)-1",
    "Index: (Current/Base)×100. Base year always = 100 by definition.",
    "Ratio comparison: a/b vs c/d → cross multiply (ad vs bc). Faster than decimals.",
    "Approximation: round to 1-2 significant figures (347/23 ≈ 350/25 = 14)",
    "Moving average: mean of last n values. Rolling window shifts by 1 each period.",
    "Always read the TITLE and UNIT of every table/chart before calculating!"
  ]},
  {topic:"Logical Reasoning",icon:"🧠",tips:[
    "Number series: check +d (AP), ×r (GP), n², n³, Fibonacci, or alternating patterns",
    "Missing term: write differences. If 1st diff not constant, take 2nd differences.",
    "Coding: find shift value (A→D=+3). Check ASCII, alternating, reverse logic.",
    "Blood relations: draw a tree. Father's brother=Uncle. Mother's sister=Aunt.",
    "Directions: North at top. Sunrise shadow→West. Sunset shadow→East.",
    "Clock angles: |30H - 5.5M|. Hands coincide: M=60H/11 mins past H.",
    "Calendars: odd days — normal year=1, leap=2. Cycle: 0=Sun,1=Mon,...,6=Sat",
    "Seating circular: fix ONE person to eliminate rotational equivalent arrangements",
    "Syllogism: draw Venn diagrams. 'Some A are B' = partial overlap. 'No A is B' = separate.",
    "Input-Output: find the transformation rule each step applies, then apply forward."
  ]},
];

// ══ DAILY CHALLENGES ══
// ═══════════════════════════════════════════════════════════
// 📝 DAILY — 30-Day challenge entries
// Format: {day:31, domain:"Cybersecurity", title:"Title",
//   task:"Task description.", tip:"Pro tip.",
//   check:["Milestone 1","Milestone 2","Milestone 3"]}
// ═══════════════════════════════════════════════════════════
const DAILY=[
  // ══ WEEK 1: BEGINNER FOUNDATIONS ══
  {d:1,
   dsa:{t:"Two Sum",lv:"Easy",desc:"Given an integer array and a target, return the indices of the two numbers that add up to the target. Solve it in O(n) using a HashMap — for each element store its index, then check if the complement exists."},
   fs:{task:"Install VSCode, Node.js 20 and Git. Create a folder 'PravAstra-day1'. Write a single HTML file with a heading, a paragraph, a button, and style it with internal CSS. Open in browser and confirm it renders.", goal:"Set up dev environment + first HTML page"},
   cy:{task:"Open your terminal. Learn and run these 8 commands: pwd, ls, ls -la, cd ~, mkdir test, touch test/hello.txt, cat test/hello.txt, rm -rf test. Write down what each command does in a notes file.", goal:"Linux terminal basics"},
   ai:{task:"Install Python 3 and open a REPL or Jupyter notebook. Write a Python function that: takes a list of numbers, returns the sum, average, minimum and maximum. Call it with [12, 45, 7, 23, 89, 34]. Print all four values.", goal:"Python basics — functions and lists"}},

  {d:2,
   dsa:{t:"Valid Palindrome",lv:"Easy",desc:"Given a string, return true if it is a palindrome considering only alphanumeric characters and ignoring case. Use two pointers from both ends — skip non-alphanumeric characters, compare lowercase values. O(n) time, O(1) space."},
   fs:{task:"Add JavaScript to your Day 1 HTML file. When the button is clicked, show an alert with 'Hello from PravAstra!'. Then change the button so it toggles the background color of the page between dark (#0a0a0a) and white on each click.", goal:"JavaScript DOM events and manipulation"},
   cy:{task:"Learn what an IP address is. Run 'ip a' on Linux or 'ipconfig' on Windows. Find your local private IP. Visit whatismyip.com to find your public IP. Explain in writing: why are they different? What is NAT?", goal:"Networking basics — IP addresses and NAT"},
   ai:{task:"Use Python to read a CSV file (create one with 5 rows of name, age, score data). Print all rows, then print: the oldest person, the highest score, and the average score. Use only built-in functions — no pandas yet.", goal:"Python file I/O and basic data processing"}},

  {d:3,
   dsa:{t:"Contains Duplicate",lv:"Easy",desc:"Given an integer array, return true if any value appears at least twice. Optimal: add to a HashSet — if add() returns false, a duplicate exists. Python shortcut: len(set(nums)) != len(nums). O(n) time, O(n) space."},
   fs:{task:"Build a CSS-only card component: an image (use a placeholder), title, description, and a button. Add a hover effect that lifts the card with a box-shadow using CSS transitions. Make it responsive using CSS flexbox.", goal:"CSS fundamentals — flexbox, transitions, responsive design"},
   cy:{task:"Install Nmap. Run: nmap -sV 127.0.0.1. Document every open port and the service name. Then run: nmap -sV scanme.nmap.org (this is a legal scan target). Compare results. Explain what -sV does differently from a basic scan.", goal:"Nmap port scanning and service detection"},
   ai:{task:"Install NumPy. Create a 5×5 matrix of random integers (0–100). Without any loops, compute: the sum of each row, the sum of each column, the overall max and min, and the mean. Print everything. Research 'vectorization' and write a 3-sentence explanation.", goal:"NumPy arrays and vectorized operations"}},

  {d:4,
   dsa:{t:"Best Time to Buy and Sell Stock",lv:"Easy",desc:"Given a prices array, find maximum profit by buying on one day and selling on a later day. Single pass: track the minimum price seen so far. At each step, max profit = current price − running minimum. Return 0 if no profit possible."},
   fs:{task:"Build a JavaScript calculator that supports +, −, ×, ÷. Use HTML buttons and a display div. Handle: decimal numbers, division by zero (show 'Error'), operator chaining (3+4×2 displays correctly per standard order or sequential — either is fine, but document your choice).", goal:"JavaScript logic, event handling, edge cases"},
   cy:{task:"Open your browser DevTools (F12). Go to Network tab. Visit https://httpbin.org/get. Examine the request: method, URL, headers sent, status code, response headers, response body. Write down: what Content-Type means, what the Server header reveals, and why status 200 means success.", goal:"HTTP protocol, request/response, DevTools"},
   ai:{task:"Install Pandas. Load the Titanic dataset (pip install seaborn, then: import seaborn as sns; df=sns.load_dataset('titanic')). Answer: overall survival rate, survival rate by sex, survival rate by passenger class, average age of survivors vs non-survivors. Print all answers.", goal:"Pandas basics — loading, filtering, groupby"}},

  {d:5,
   dsa:{t:"Reverse Linked List",lv:"Easy",desc:"Reverse a singly linked list iteratively using three pointers: prev=null, curr=head, next. Redirect each curr.next = prev, then advance all three. Also implement recursively: reverse(head.next) returns the new head; then head.next.next = head; head.next = null."},
   fs:{task:"Build a To-Do List app: add tasks, mark as complete (strikethrough + greyed), delete tasks, show a counter of remaining tasks. Store tasks in a JavaScript array. No frameworks — pure HTML/CSS/JS. Deploy it to GitHub Pages (free hosting).", goal:"DOM manipulation, array management, GitHub Pages deployment"},
   cy:{task:"Sign up for TryHackMe (free). Complete the 'Pre-Security' path Module 1: Introduction to Cybersecurity. Take notes: define the CIA triad (Confidentiality, Integrity, Availability) with one real-world example of each being violated.", goal:"Cybersecurity fundamentals — CIA triad"},
   ai:{task:"Install Matplotlib and Seaborn. Create 4 plots in a 2×2 grid: (1) line chart of y=x², (2) bar chart of the 5 most common Titanic embarkation ports, (3) histogram of Titanic passenger ages, (4) scatter plot of age vs fare. Save as a PNG file.", goal:"Data visualization — Matplotlib and Seaborn"}},

  {d:6,
   dsa:{t:"Maximum Subarray (Kadane's)",lv:"Easy",desc:"Find the contiguous subarray with the largest sum. Kadane's algorithm: curr = max(num, curr + num). Update global max at each step. This decides at each position: 'Is extending the current subarray better than starting fresh here?' O(n) time, O(1) space."},
   fs:{task:"Build a Node.js REST API with Express. Create 3 endpoints: GET /api/tasks (return all), POST /api/tasks (add new, requires {title}), DELETE /api/tasks/:id (remove by id). Store in an in-memory array. Test all 3 with curl or Postman.", goal:"Node.js + Express — REST API basics"},
   cy:{task:"Install Wireshark. Start a packet capture. Open http://httpforever.com in your browser (HTTP not HTTPS). Stop the capture. Filter by 'http'. Find a GET request. Expand all layers (Ethernet, IP, TCP, HTTP). Screenshot and write down: src/dst IP, src/dst port, and the request URL.", goal:"Wireshark packet analysis — HTTP traffic"},
   ai:{task:"Load the Titanic dataset. Build your first ML model: from sklearn.model_selection import train_test_split; from sklearn.ensemble import RandomForestClassifier. Select features: pclass, sex (encode: male=0, female=1), age (fill NaN with median). Train, predict, print accuracy and confusion matrix.", goal:"scikit-learn basics — first ML model"}},

  {d:7,
   dsa:{t:"Climbing Stairs",lv:"Easy",desc:"Count the distinct ways to reach step n by taking 1 or 2 steps at a time. This is Fibonacci: dp[n] = dp[n-1] + dp[n-2] with dp[1]=1, dp[2]=2. Optimise from O(n) space to O(1) using two rolling variables a and b. Try to see why this is the Fibonacci sequence."},
   fs:{task:"Add MongoDB to your Day 6 Express API using Mongoose. Define a Task schema (title: String, completed: Boolean, createdAt: Date default now). Replace the in-memory array with real MongoDB CRUD. Test: create 3 tasks, list them, mark one complete, delete one.", goal:"MongoDB + Mongoose — database persistence"},
   cy:{task:"Set up DVWA (Damn Vulnerable Web App) using Docker: docker run --rm -it -p 80:80 vulnerables/web-dvwa. Log in (admin/password). Navigate to SQL Injection (Security: Low). Try the payload: 1' OR '1'='1. Explain what happened and why this bypass works.", goal:"SQL Injection basics — DVWA hands-on"},
   ai:{task:"Implement gradient descent from scratch using only NumPy. Generate synthetic data: y = 3x + 7 + noise. Initialise slope=0, intercept=0. Run 1000 iterations, learning_rate=0.01. Print slope and intercept every 100 steps. Plot the data points and your final regression line.", goal:"Machine learning fundamentals — gradient descent from scratch"}},

  // ══ WEEK 2: BUILDING FOUNDATIONS ══
  {d:8,
   dsa:{t:"Merge Two Sorted Lists",lv:"Easy",desc:"Merge two sorted linked lists into one sorted list. Use a dummy head node: compare the heads of both lists, attach the smaller one, advance that pointer. When one list is exhausted, attach the remainder of the other. O(n+m) time, O(1) space."},
   fs:{task:"Add JWT authentication to your Express API. POST /auth/register saves user (bcrypt hash password). POST /auth/login returns a JWT. Add middleware 'verifyToken' that reads the Authorization header. Protect GET /api/tasks — only authenticated users can access it.", goal:"JWT authentication — register, login, protected routes"},
   cy:{task:"Install Burp Suite Community and set up FoxyProxy in Firefox. Intercept a login request to DVWA. In the proxy, modify the username field to anything and the password to 'password' — forward it. What happened? Now modify and forward a valid login. Document the steps.", goal:"Burp Suite — HTTP interception and modification"},
   ai:{task:"Build a spam classifier using Naive Bayes on the SMS Spam Collection dataset (download from UCI ML repo or use sklearn.datasets). Steps: load CSV, TF-IDF vectorize text, split 80/20, train MultinomialNB, print: accuracy, classification report, and a confusion matrix heatmap.", goal:"NLP basics — text classification with Naive Bayes"}},

  {d:9,
   dsa:{t:"Level Order Traversal (BFS)",lv:"Easy",desc:"Return binary tree nodes level by level as a list of lists. BFS with a queue: snapshot queue.size() at the start of each level — process exactly that many nodes at that level before the next snapshot. This separates levels cleanly. O(n) time and space."},
   fs:{task:"Build a React frontend that connects to your Express API. Create components: Header, TaskList, TaskItem, AddTaskForm. Fetch tasks from the API on load. Add new tasks via POST. Mark complete via a PUT endpoint. Handle loading state (spinner) and error state (error message).", goal:"React — components, hooks (useState, useEffect), API integration"},
   cy:{task:"Practice XSS (Cross-Site Scripting) on DVWA (Security: Low). Navigate to XSS (Reflected). Inject: &lt;script&gt;alert('XSS')&lt;/script&gt;. Then inject: &lt;script&gt;document.write('Cookies: '+document.cookie)&lt;/script&gt;. Explain: (1) what makes this dangerous, (2) difference between Reflected and Stored XSS, (3) how Content-Security-Policy prevents it.", goal:"XSS — reflected, stored, and prevention"},
   ai:{task:"Implement K-Means clustering from scratch (no sklearn). Generate 150 2D data points in 3 clearly separated clusters using np.random. Implement: random centroid initialisation, assignment step (nearest centroid), update step (mean of cluster). Run 20 iterations. Plot: data coloured by cluster, centroids as stars.", goal:"Unsupervised learning — K-Means from scratch"}},

  {d:10,
   dsa:{t:"House Robber",lv:"Easy",desc:"Maximum money from non-adjacent houses. Recurrence: dp[i] = max(dp[i-1], dp[i-2] + nums[i]). Base cases: dp[0]=nums[0], dp[1]=max(nums[0],nums[1]). Optimise: replace the array with two variables 'prev2' and 'prev1'. Update: new=max(prev1, prev2+curr); prev2=prev1; prev1=new. O(n) time, O(1) space."},
   fs:{task:"Dockerize your full-stack app. Create a Dockerfile for the Node.js backend (FROM node:20-alpine, COPY, npm install, CMD). Create a docker-compose.yml with three services: app (Node), mongo (MongoDB), and specify the network. Run docker-compose up and verify everything works.", goal:"Docker and docker-compose — containerising a full-stack app"},
   cy:{task:"Run a Python port scanner you write yourself. Use the socket module. Scan localhost ports 1-1024. For each open port, print the port number and attempt to identify the service using socket.getservbyport(). Time the scan. Then compare your results with nmap -p 1-1024 localhost.", goal:"Python scripting for security — port scanner from scratch"},
   ai:{task:"Build a CNN for MNIST digit classification using Keras. Architecture: Conv2D(32)→MaxPool→Conv2D(64)→MaxPool→Flatten→Dense(128)→Dropout(0.5)→Dense(10,softmax). Train for 5 epochs. Print: training/validation accuracy curves (plot), final test accuracy, and a 5×5 grid of misclassified examples.", goal:"Deep learning — CNN with Keras on MNIST"}},

  // ══ WEEK 3: INTERMEDIATE TRACK ══
  {d:11,
   dsa:{t:"Product of Array Except Self",lv:"Medium",desc:"Return output[i] = product of all elements except nums[i] without division in O(n) time and O(1) extra space. Pass 1 (left): output[i] = product of all elements to the left. Pass 2 (right): multiply output[i] by a running right product accumulated from the right."},
   fs:{task:"Add Redis caching to your Express API. Cache the GET /api/tasks response for 30 seconds. Use ioredis. Key: 'tasks:all'. On POST or DELETE: invalidate (delete) the cache key. Benchmark: 10 sequential requests with cache vs without cache using console.time/timeEnd. Record the speedup.", goal:"Redis caching — cache-aside pattern and invalidation"},
   cy:{task:"Complete TryHackMe 'OWASP Top 10' room. For each vulnerability, write: (1) one-sentence definition, (2) a real-world breach example, (3) the primary defence. This should be a 10-entry reference card you can use in interviews.", goal:"OWASP Top 10 — all 10 vulnerabilities with defences"},
   ai:{task:"Build an LSTM model for sentiment analysis on IMDB movie reviews. Use Keras: load imdb dataset (top 10000 words, maxlen=200). Build: Embedding(10000,64)→LSTM(128)→Dense(1,sigmoid). Train 3 epochs. Plot training vs validation accuracy. Compare with a simple Dense baseline (no LSTM).", goal:"Recurrent networks — LSTM for NLP"}},

  {d:12,
   dsa:{t:"Find Minimum in Rotated Sorted Array",lv:"Medium",desc:"Binary search on a rotated sorted array. At each mid: if nums[mid] > nums[right], the minimum is in the right half (the rotation is on the left), else it's in the left half including mid. Terminate when lo == hi. O(log n) time, O(1) space. Handle no-rotation case."},
   fs:{task:"Convert your Express API to TypeScript. Run: npm install typescript ts-node @types/node @types/express, create tsconfig.json (strict: true). Add types for: Request, Response, Task interface (id: string, title: string, completed: boolean, createdAt: Date). Fix all type errors before moving on.", goal:"TypeScript — adding static types to an existing API"},
   cy:{task:"Use Hashcat to crack passwords. Create a file 'hashes.txt' with these SHA-256 hashes (compute them yourself from 5 common passwords using: echo -n 'password' | sha256sum). Run: hashcat -m 1400 hashes.txt /usr/share/wordlists/rockyou.txt. Document which cracked and how long each took.", goal:"Password cracking — hashcat with rockyou wordlist"},
   ai:{task:"Implement a Decision Tree classifier from scratch using Python (no sklearn). Use the Gini impurity criterion. Handle: binary split selection, recursive tree building, prediction. Train on the Iris dataset (3 features, binary classification: setosa vs not). Compare accuracy with sklearn's DecisionTreeClassifier.", goal:"Decision trees — implementing Gini impurity and splits from scratch"}},

  {d:13,
   dsa:{t:"Lowest Common Ancestor of Binary Tree",lv:"Medium",desc:"Post-order DFS: if current node is null, p, or q — return it. After both recursive calls, if left and right both return non-null, current node is the LCA (p and q are in different subtrees). If only one returns non-null, both are in that subtree — bubble it up."},
   fs:{task:"Add pagination to your API. Implement cursor-based pagination (not offset): GET /api/tasks?cursor=LAST_ID&limit=10. Use MongoDB's _id as cursor. Response must include: items array, nextCursor (null if no more), total count. Explain why cursor-based is better than offset for large datasets.", goal:"API design — cursor-based pagination"},
   cy:{task:"Metasploit fundamentals. Set up Metasploitable 2 as a VM (download from SourceForge). From Kali: run nmap -sV METASPLOITABLE_IP. Identify the vsftpd 2.3.4 service on port 21. Open msfconsole, use exploit/unix/ftp/vsftpd_234_backdoor, set RHOSTS, run. Document each step.", goal:"Metasploit — first exploit on a vulnerable machine"},
   ai:{task:"Build a Transformer attention layer from scratch in PyTorch. Implement: linear projections for Q, K, V; scaled dot-product attention (QK^T/√d); softmax; output projection. Input: batch of 8 sequences of length 10, dimension 64. Verify output shape is (8, 10, 64). Compare with nn.MultiheadAttention.", goal:"Deep learning fundamentals — Transformer attention mechanism"}},

  {d:14,
   dsa:{t:"Course Schedule (Topological Sort)",lv:"Medium",desc:"Kahn's BFS: build adjacency list and in-degree array from prerequisites. Enqueue all courses with in-degree 0. Process queue: for each dequeued course, reduce neighbour in-degrees — enqueue any that reach 0. If processed count equals numCourses, no cycle exists. O(V+E)."},
   fs:{task:"Build a complete CI/CD pipeline with GitHub Actions. On every push to main: (1) lint with ESLint, (2) run unit tests with Jest, (3) build Docker image, (4) push to Docker Hub. Create at least 3 unit tests for your API endpoints that actually pass. Show the green checkmark.", goal:"CI/CD — GitHub Actions pipeline from lint to deploy"},
   cy:{task:"Learn privilege escalation. On a Linux system (use a TryHackMe room or your own VM), run: find / -perm -4000 2>/dev/null to list SUID binaries. Look up 3 of them on GTFOBins. Pick one (e.g., /usr/bin/find) and demonstrate the privilege escalation. Document the exact commands.", goal:"Linux privilege escalation — SUID binaries and GTFOBins"},
   ai:{task:"Fine-tune GPT-2 (small, 117M params) on a custom dataset using HuggingFace Transformers. Dataset: 200 sentences of your own writing or any domain text. Use Trainer API. Train 3 epochs. Generate 5 completions from a prompt. Measure perplexity before and after fine-tuning.", goal:"LLM fine-tuning — GPT-2 with HuggingFace Trainer"}},

  // ══ WEEK 4: INTERMEDIATE+ LEVEL ══
  {d:15,
   dsa:{t:"Coin Change",lv:"Medium",desc:"Minimum coins to make amount. dp[0]=0, dp[i]=INF for i>0. For each amount i from 1 to target: for each coin c: if c≤i, dp[i]=min(dp[i], dp[i-c]+1). Final answer: dp[amount] if not INF, else -1. This is unbounded knapsack. O(amount × coins) time and space."},
   fs:{task:"Build a real-time chat app using Socket.io. Features: join with a username, send messages to all users, see which users are online (sidebar list), typing indicator ('Alice is typing...') that clears after 2 seconds of inactivity, and message timestamps. Use Redis pub/sub for scalability.", goal:"WebSockets — real-time bidirectional communication with Socket.io"},
   cy:{task:"Complete one TryHackMe Easy machine fully without hints. Document every step: (1) nmap scan results, (2) services enumerated, (3) initial access method and payload, (4) privilege escalation path, (5) flags found. This is your first full pentest write-up template.", goal:"Penetration testing — full room write-up methodology"},
   ai:{task:"Build a complete RAG (Retrieval-Augmented Generation) pipeline. Steps: (1) load a 10-page PDF using PyMuPDF, (2) split into 200-word chunks, (3) embed with sentence-transformers, (4) store in FAISS, (5) on a question: retrieve top-3 chunks, (6) feed to OpenAI GPT or a local Ollama model to answer.", goal:"RAG pipeline — document Q&A with vector search"}},

  {d:16,
   dsa:{t:"Number of Islands",lv:"Medium",desc:"DFS flood-fill: for each cell with '1', run DFS to mark all connected land as visited (set to '0'). Count the number of DFS calls = number of islands. BFS variant: use a queue instead of recursion. Both are O(m·n) time and space. Discuss which avoids stack overflow for huge grids."},
   fs:{task:"Implement RBAC (Role-Based Access Control) in your Express API. Three roles: admin, user, guest. Middleware: requireRole('admin') — reads role from JWT payload. Protected routes: POST /tasks = user+admin, DELETE /tasks = admin only, GET /tasks = all. Write tests for all permission combinations.", goal:"Security — JWT-based RBAC with role-specific middleware"},
   cy:{task:"Memory forensics with Volatility. Download a Windows memory dump from GitHub (search: 'CTF memory dump volatility'). Run: volatility -f dump.mem imageinfo. Then: pslist (running processes), netscan (network connections), cmdline (command history). Find: any suspicious process, any unusual network connection, any executed command.", goal:"Memory forensics — Volatility framework basics"},
   ai:{task:"Build a recommendation system with matrix factorisation. Download MovieLens 100K dataset. Use Surprise library (pip install scikit-surprise). Train SVD and NMF models. Evaluate with 5-fold cross-validation (RMSE). Recommend 10 movies for a specific userId that they haven't seen. Compare both models.", goal:"Recommendation systems — collaborative filtering with matrix factorisation"}},

  {d:17,
   dsa:{t:"3Sum",lv:"Medium",desc:"Sort the array. For each fixed index i (skip duplicates), use two pointers l=i+1 and r=end. If sum < 0: l++; if sum > 0: r--; if sum == 0: record triplet, advance both pointers skipping duplicates. Total: O(n²) time. Why does sorting plus two pointers avoid O(n³) brute force?"},
   fs:{task:"Implement rate limiting from scratch (no external rate-limit libraries). Build two algorithms: (1) Fixed Window: count requests per IP per minute, reset every 60s. (2) Sliding Window: use Redis sorted sets with timestamps. Compare: one IP makes 200 requests in 60s — show which gets blocked when.", goal:"API security — rate limiting algorithms from scratch"},
   cy:{task:"Practice SSRF (Server-Side Request Forgery). Set up a simple vulnerable Node.js server that fetches a URL passed by the user (like a URL preview feature). Exploit it to: (1) access http://localhost:8080/admin (internal service), (2) read http://169.254.169.254/latest/meta-data/ (AWS metadata simulation with a mock endpoint). Document the impact.", goal:"SSRF vulnerability — exploitation and defence"},
   ai:{task:"Implement a GAN (Generative Adversarial Network) with PyTorch on MNIST. Generator: noise(100)→Linear(256)→ReLU→Linear(512)→ReLU→Linear(784)→Tanh. Discriminator: mirror in reverse with Sigmoid output. Train with alternating optimiser steps for 20 epochs. Generate a 5×5 grid of fake digits.", goal:"Generative models — GAN training dynamics"}},

  {d:18,
   dsa:{t:"Subarray Sum Equals K",lv:"Medium",desc:"Prefix sum + HashMap. For each index: compute running_sum. Count increments by map.getOrDefault(running_sum - k, 0). Then insert running_sum into the map. Initialise map with {0:1} to handle subarrays starting from index 0. O(n) time and space — can you prove why the {0:1} initialisation is necessary?"},
   fs:{task:"Add Stripe payment integration to a simple product page. Create: GET /products (list 3 products with prices), POST /checkout (create a Stripe Checkout session and return the URL), GET /success (confirm payment). Use Stripe test mode. Test with card 4242 4242 4242 4242, exp 12/26, CVC 123.", goal:"Payments — Stripe Checkout integration"},
   cy:{task:"Set up a complete SIEM with ELK Stack (Elasticsearch + Logstash + Kibana) using Docker Compose. Ingest Nginx access logs. Create a Kibana dashboard showing: top 10 IPs by request count, top URLs, HTTP status code distribution, requests per minute over time. Configure an alert for 100+ requests from a single IP in 5 minutes.", goal:"SIEM — ELK stack for log analysis and alerting"},
   ai:{task:"Implement RLHF training loop step-by-step (simplified). Stage 1: fine-tune GPT-2 on a small instruction dataset (10 examples). Stage 2: train a reward model that predicts human preference scores. Stage 3: use the reward model signal to further tune the language model with PPO (use trl library). Evaluate: does Stage 3 output feel better?", goal:"RLHF — the training loop behind ChatGPT"}},

  // ══ WEEK 5: ADVANCED ══
  {d:19,
   dsa:{t:"LRU Cache",lv:"Medium",desc:"Doubly linked list (head=most recently used, tail=least recently used) + HashMap<key, node>. get: if key exists → move node to head → return value. put: if key exists → update value → move to head. If key new → add at head → if over capacity → remove tail node and its map entry. Every operation O(1)."},
   fs:{task:"Implement an event-driven architecture with RabbitMQ. Producer service: POST /order → validates, saves to DB, publishes 'order.created' event. Consumer services: (1) Email service subscribes and logs 'Sending email to...', (2) Inventory service subscribes and logs 'Reducing stock...'. Run all three with Docker Compose.", goal:"Message queues — decoupled services with RabbitMQ"},
   cy:{task:"Advanced AD attack: Kerberoasting. Set up two Windows VMs (or use a TryHackMe AD room). From a low-privilege user: (1) enumerate SPNs with GetUserSPNs.py, (2) request a Kerberos service ticket, (3) extract the hash, (4) attempt to crack offline with hashcat -m 13100. Document the full attack chain and explain why this attack is dangerous.", goal:"Active Directory — Kerberoasting attack"},
   ai:{task:"Build a production-ready FastAPI inference server for your MNIST CNN model. Endpoints: POST /predict (accepts base64 JPEG, returns digit and confidence %), GET /health (returns model version and uptime). Add: request validation (pydantic), error handling (400/500), logging with timestamps, and a Dockerfile. Test with curl.", goal:"MLOps — ML model deployment as a REST API"}},

  {d:20,
   dsa:{t:"Validate Binary Search Tree",lv:"Medium",desc:"Pass min and max bounds down the recursion. Root: (−∞, +∞). Left child: (min, node.val). Right child: (node.val, max). Each node must satisfy min < node.val < max strictly. Why is a simple left < node < right check on direct children wrong? Give a counterexample."},
   fs:{task:"Build a Next.js full-stack app with Server-Side Rendering. Pages: / (SSR product listing, fetched server-side), /product/[id] (SSR product detail), /admin (protected, requires session). Use NextAuth.js for Google OAuth. Deploy to Vercel. Compare SSR vs CSR page load time with Lighthouse.", goal:"Next.js — SSR, dynamic routes, NextAuth, Vercel deployment"},
   cy:{task:"Cloud security audit. Set up a free AWS account. Create an S3 bucket and mistakenly make it public. Use the AWS CLI to list its contents from an 'attacker' terminal with no AWS credentials (aws s3 ls s3://BUCKET_NAME --no-sign-request). Then fix it: block public access, enable bucket versioning and server-side encryption. Document what data could have leaked.", goal:"AWS cloud security — S3 misconfiguration detection and remediation"},
   ai:{task:"Implement the forward diffusion process of DDPM (Denoising Diffusion Probabilistic Model). Take an MNIST image. Apply the noise schedule for T=1000 steps: x_t = √(ᾱ_t) x_0 + √(1-ᾱ_t) ε. Show the image at timesteps 0, 200, 400, 600, 800, 1000. Implement the reverse step equation conceptually and explain why this is harder than the forward step.", goal:"Diffusion models — DDPM forward process and noise schedule"}},

  // ══ WEEK 6: HARD ALGORITHMS ══
  {d:21,
   dsa:{t:"Word Break",lv:"Medium",desc:"DP: dp[i] = can we segment s[0..i-1] using words in wordDict. dp[0]=true (empty string). For i=1 to n: for j=0 to i-1: if dp[j]=true and s[j:i] is in wordSet: dp[i]=true; break. Use a HashSet for O(1) lookups. Total: O(n² × k) where k=average word length. Try to optimise using Trie."},
   fs:{task:"Build a GraphQL API with Apollo Server. Schema: User (id, name, email), Post (id, title, body, author). Implement: query {users, user(id), posts, post(id)}, mutation {createUser, createPost}. Use DataLoader to batch and cache user lookups. Connect to MongoDB. Test all queries in Apollo Studio.", goal:"GraphQL — schema, resolvers, DataLoader for N+1 problem"},
   cy:{task:"Forensics challenge: download a PCAP file from malware-traffic-analysis.net (any 2024 exercise). Open in Wireshark. Tasks: (1) find the infected host's IP and MAC, (2) identify the malware family from DNS queries or HTTP host headers, (3) extract any executable transferred (File → Export Objects → HTTP), (4) get its SHA-256 hash and check on VirusTotal.", goal:"Network forensics — PCAP analysis and IOC extraction"},
   ai:{task:"Build a multi-agent LLM system using LangChain. Three agents: (1) Researcher — uses web search tool to gather information on a topic, (2) Writer — takes research and writes a structured summary, (3) Critic — reviews the summary and suggests improvements. Orchestrate them sequentially. Test with topic: 'Recent advances in transformer architectures'.", goal:"LLM agents — multi-agent orchestration with LangChain"}},

  {d:22,
   dsa:{t:"Serialize and Deserialize Binary Tree",lv:"Medium",desc:"BFS serialise: use a queue, output values level by level with 'null' for empty nodes. Separate with commas. Deserialise: split string, use a queue for parents — each parent gets its next two children from the list. Alternatively: DFS preorder — output value then recurse left and right."},
   fs:{task:"Implement distributed tracing with OpenTelemetry. Instrument your Express API: create spans for: incoming HTTP requests (auto), DB queries (manual), and external API calls (manual). Add trace IDs to every log line. Visualise traces in Jaeger (run with Docker). Show a full request trace across 3 spans.", goal:"Observability — distributed tracing with OpenTelemetry and Jaeger"},
   cy:{task:"Implement a Python-based vulnerability scanner for web targets. It should check for: (1) missing security headers (HSTS, CSP, X-Frame-Options, X-Content-Type-Options), (2) server version disclosure in response headers, (3) directory listing (check /backup, /admin, /.git), (4) open redirect (append ?redirect=http://evil.com to URLs). Test on DVWA.", goal:"Web security automation — building a lightweight vulnerability scanner"},
   ai:{task:"Fine-tune a DistilBERT model for sentiment classification. Dataset: IMDB (from HuggingFace datasets). Steps: tokenise with DistilBertTokenizer (max_length=256), use Trainer API with TrainingArguments, train 2 epochs. Evaluate: accuracy, F1, and a confusion matrix. Compare to the LSTM from Day 11.", goal:"Transfer learning — fine-tuning BERT-family models"}},

  {d:23,
   dsa:{t:"Median of Two Sorted Arrays",lv:"Hard",desc:"Binary search on the smaller array to find the correct partition. At partition (i, j): maxLeft1 ≤ minRight2 AND maxLeft2 ≤ minRight1. Use −∞/+∞ at boundaries. If left is too large: move partition left; if right is too large: move right. Median = avg(maxLeft, minRight) for even total, maxLeft for odd. O(log min(m,n))."},
   fs:{task:"Design and build a URL shortener system. Requirements: POST /shorten → returns short URL (6-char base62 code), GET /:code → 301 redirect to original URL, GET /analytics/:code → show total clicks, top 5 referrers, clicks by day. Use Redis for click counting and MongoDB for URL storage. Handle collision in base62 encoding.", goal:"System design implementation — URL shortener with analytics"},
   cy:{task:"Buffer overflow exploitation. Download and compile a vulnerable C program (use: GCC flag -fno-stack-protector -z execstack -no-pie). Use GDB to: find the offset to EIP (use pattern_create + pattern_offset from pwntools), confirm control with 0x41414141, write a small shellcode to open /bin/sh. Run your exploit. Document every step.", goal:"Binary exploitation — buffer overflow and shellcode injection"},
   ai:{task:"Implement Constitutional AI (CAI) self-critique loop. Prompt an LLM to: (1) respond to a potentially harmful question, (2) critique its own response against a safety principle, (3) revise its response. Use 5 safety principles (helpfulness, harmlessness, honesty, factuality, respect). Test with 5 edge-case prompts. Measure how often revision is triggered.", goal:"AI safety — Constitutional AI self-critique and revision"}},

  {d:24,
   dsa:{t:"Trapping Rain Water",lv:"Hard",desc:"Two-pointer O(1) space: maintain lMax (left pointer's running max) and rMax (right pointer's running max). If lMax < rMax: water at l = lMax − height[l]; l++. Else: water at r = rMax − height[r]; r--. The key insight: water at a position is bounded by the shorter of the two sides, regardless of what's in between."},
   fs:{task:"Build a complete WebSocket-based collaborative text editor (simplified). Two users open the same document. Changes from either user appear immediately on both screens. Implement Operational Transform (OT) for the simplest case: character insertions only. Test by opening two browser windows and typing simultaneously.", goal:"Advanced WebSockets — operational transforms for collaborative editing"},
   cy:{task:"Reverse engineer a binary. Download a small CTF challenge binary (ELF, Linux — search 'CTF pwn easy binary'). Use: file, strings, ltrace, strace, and Ghidra (free). Find the hardcoded password or the flag. Document: what strings revealed, what library calls you saw, and what you found in Ghidra's decompiler.", goal:"Reverse engineering — binary analysis with Ghidra"},
   ai:{task:"Implement model distillation. Train a large ResNet-50 'teacher' model on CIFAR-10 (or use a pretrained one). Train a small 3-layer CNN 'student' using: (1) cross-entropy on hard labels, (2) KL divergence on softened teacher outputs (temperature=4). Compare student accuracy: KD training vs standard training. Show the gap.", goal:"Model compression — knowledge distillation"}},

  // ══ WEEK 7: EXPERT LEVEL ══
  {d:25,
   dsa:{t:"N-Queens Problem",lv:"Hard",desc:"Backtracking with three O(1) sets: cols, diag1 (row−col), diag2 (row+col). For each row, try each column position. If not in any of the three sets: place queen (add to all sets), recurse next row, undo (remove from all sets). Time: O(n!) in worst case but heavily pruned. What is the actual output count for n=8?"},
   fs:{task:"Implement a full blue-green deployment pipeline. Set up two identical app instances (blue and green) behind an Nginx load balancer. Write a script: (1) deploy new version to inactive slot, (2) run a health check, (3) if healthy: switch Nginx upstream to new slot, (4) if unhealthy: roll back. Test zero-downtime deploy by making 100 requests during the switch.", goal:"DevOps — zero-downtime blue-green deployment"},
   cy:{task:"Complete a CTF machine on HackTheBox (Easy difficulty) without looking at walkthroughs. Allowed: GTFOBins, HackTricks, documentation. Not allowed: specific machine walkthroughs. Spend 3–4 hours. If stuck, note exactly where and why, then read the walkthrough only for that step. Full write-up required.", goal:"CTF — full machine compromise without walkthroughs"},
   ai:{task:"Build a real-time anomaly detection system for API metrics. Simulate 1000 'normal' API response times (mean 120ms, std 30ms). Then inject 20 anomalies (>500ms). Train an Isolation Forest on the first 800 samples. Deploy as a FastAPI endpoint: POST /check with {response_time} returns {is_anomaly, score}. Tune threshold to achieve <5% false positive rate.", goal:"Production ML — anomaly detection with Isolation Forest"}},

  {d:26,
   dsa:{t:"Sliding Window Maximum",lv:"Hard",desc:"Monotonic deque of indices (decreasing values). For each element: remove from back while nums[back] < nums[i] (they can never be a future maximum). Add current index i to back. Remove front if out of window (front <= i-k). The front always holds the index of the current window maximum. O(n) total — why is each element added and removed at most once?"},
   fs:{task:"Implement CQRS (Command Query Responsibility Segregation). Separate your app into: Write side — handles POST/PUT/DELETE, writes to MongoDB, publishes events to Redis pub/sub. Read side — subscribes to events, maintains a denormalised Redis Hash for fast reads, handles GET requests. Benchmark: 1000 reads, compare read-side (Redis) vs direct MongoDB query.", goal:"Architecture patterns — CQRS with separate read/write models"},
   cy:{task:"Purple team exercise. Red side: use Atomic Red Team (invoke-atomictest) to simulate T1059 (Command and Scripting Interpreter) and T1003 (Credential Dumping) on a Windows VM. Blue side: set up Sysmon and a Splunk free instance. Write 2 Splunk queries that detect these simulated attacks. Measure: how quickly does each alert fire?", goal:"Purple team — ATT&CK simulation and detection engineering"},
   ai:{task:"Implement speculative decoding to speed up LLM inference. Use a small 'draft' model (GPT-2 small) to generate 5 candidate tokens, then use a larger 'verification' model (GPT-2 medium) to verify them in parallel. Accept tokens where draft and verifier agree; reject and resample from verifier at the first disagreement. Measure tokens/second vs standard autoregressive decoding.", goal:"LLM inference optimisation — speculative decoding"}},

  {d:27,
   dsa:{t:"Word Ladder",lv:"Hard",desc:"BFS on implicit word graph. Each node = a word; edge exists if they differ by exactly one letter. From current word: try all 26 substitutions at each of L positions. If the resulting word is in the wordSet: add to queue and remove from set. BFS guarantees the shortest path. Optimise with bidirectional BFS to reduce search space. O(N × M × 26)."},
   fs:{task:"Build a Kubernetes deployment. Write YAML manifests for: Deployment (3 replicas, rolling update strategy), Service (ClusterIP), ConfigMap (env vars), Secret (DB credentials base64), HorizontalPodAutoscaler (scale 3–10 replicas when CPU>50%). Deploy to Minikube. Simulate load with 'kubectl run', watch HPA scale up.", goal:"Kubernetes — production deployment with HPA auto-scaling"},
   cy:{task:"Threat modelling exercise. Take your full-stack app from earlier weeks. Apply the STRIDE framework: for each component (frontend, API, database, authentication), list: (S)poofing, (T)ampering, (R)epudiation, (I)nformation disclosure, (D)enial of service, (E)levation of privilege threats. For each threat found: assign CVSS severity and propose a mitigation control.", goal:"Threat modelling — STRIDE framework on a real application"},
   ai:{task:"Train a neural style transfer model. Load a content image (your photo) and a style image (Van Gogh painting). Extract features using a pre-trained VGG-19. Define content loss (layer relu4_2) and style loss (Gram matrices of relu1_1 through relu5_1). Optimise the output image for 500 iterations. Show the progression at 0, 100, 300, 500 steps.", goal:"Creative AI — neural style transfer with VGG feature matching"}},

  // ══ WEEK 8: EXPERT+ SYSTEM DESIGN ══
  {d:28,
   dsa:{t:"Largest Rectangle in Histogram",lv:"Hard",desc:"Monotonic increasing stack of (height, start_index). For each bar: while stack top has height >= current height: pop (h, start). Area = h × (current_i − start). Keep track of the minimum start seen as you pop (because current bar extends back). Push (curr_height, min_start). After all bars: drain the stack. O(n)."},
   fs:{task:"System design: design and document a distributed rate limiter. Cover: (1) token bucket algorithm with Redis + Lua script for atomicity, (2) sliding window with Redis sorted sets, (3) handling distributed servers (shared Redis vs local approximation), (4) what happens when Redis is down (fail-open vs fail-closed). Implement the token bucket version.", goal:"System design — distributed rate limiter with Redis"},
   cy:{task:"Malware analysis (static). Download a safe malware sample from theZoo repository (sandboxed, defanged). Perform static analysis only: (1) file type and size, (2) all printable strings (strings command), (3) imported DLLs and functions (if PE: use pefile in Python), (4) entropy analysis (high entropy = likely packed/encrypted). Write a brief IOC report.", goal:"Malware analysis — static analysis and IOC extraction"},
   ai:{task:"Build a production ML pipeline with MLflow. Steps: (1) data preprocessing → log as artifact, (2) train 3 models (LogReg, RandomForest, XGBoost) → log metrics and parameters, (3) compare runs in MLflow UI, (4) register the best model, (5) load it from the registry in a FastAPI endpoint. Show the full MLflow UI with all experiment runs.", goal:"MLOps — full ML pipeline tracking with MLflow"}},

  {d:29,
   dsa:{t:"Minimum Window Substring",lv:"Hard",desc:"Sliding window with 'have' and 'need'. Build need=Counter(t). Expand right: add s[r] to window freq map; if window[s[r]]==need[s[r]]: have++. When have==len(need): update min window, then shrink left: remove s[l] from window freq; if window[s[l]] < need[s[l]]: have--; l++. Continue until all chars are covered again. O(|s|+|t|)."},
   fs:{task:"Build a complete developer platform: (1) user registration + JWT auth, (2) API key generation (UUID v4, stored as bcrypt hash), (3) API key authentication middleware, (4) per-key rate limiting (100 req/hour), (5) usage analytics endpoint showing calls per day for each key, (6) key revocation. This is production-level API infrastructure.", goal:"Production API infrastructure — API key management and analytics"},
   cy:{task:"DNS-based data exfiltration (in isolated lab only). Set up: (1) a victim VM, (2) a DNS server VM (bind9) that logs all queries. On the victim: encode a secret string in base32, split into 30-char chunks, make DNS queries like CHUNK.exfil.yourdomain. On the DNS server: collect all queries and reassemble the data. Write a detection rule for this technique.", goal:"Advanced exfiltration — DNS tunnelling and detection"},
   ai:{task:"Implement GRPO (Group Relative Policy Optimisation) on a simple math reasoning task. Generate 5 answers per math question using your LLM. Score each answer (correct=+1, wrong=−1). Compute group-relative advantages (deviation from group mean). Update the model to favour higher-advantage outputs. Compare accuracy before and after on 20 test problems.", goal:"Advanced RLHF — GRPO, the algorithm behind DeepSeek-R1"}},

  {d:30,
   dsa:{t:"Serialize and Deserialize N-ary Tree",lv:"Hard",desc:"DFS approach: for each node output its value and child count. Recurse into each child. Deserialise: read value and child count, create node, recursively build each child. BFS approach: encode child count after each node value; decode by tracking how many children each parent expects. Design your own encoding format first — then implement."},
   fs:{task:"FINAL DAY FULL-STACK PROJECT. Build and deploy a complete task management SaaS. Must have: (1) Google OAuth login, (2) project + task CRUD, (3) real-time updates via WebSocket (task status changes appear live), (4) email notifications via Nodemailer when a task is assigned, (5) deployed to a VPS or Vercel+Railway, (6) custom domain or subdomain. Share the live URL.", goal:"Full-stack capstone — complete SaaS deployment"},
   cy:{task:"FINAL DAY CYBERSECURITY PROJECT. Perform a complete penetration test of your own full-stack app from the Full Stack track. Document: (1) information gathering, (2) all vulnerabilities found (CVSS-scored), (3) exploitation attempts, (4) recommendations. Write a professional pentest report (executive summary + technical findings). This is your security portfolio piece.", goal:"Cybersecurity capstone — professional penetration test report"},
   ai:{task:"FINAL DAY AI PROJECT. Deploy a complete AI product. Choose one: (1) a document Q&A chatbot (RAG + nice UI), (2) a coding assistant (fine-tuned model + VSCode-style interface), or (3) a data analysis assistant (natural language → SQL → chart). Must have: live demo URL, GitHub repo with README, and a 60-second demo video posted on LinkedIn with # PravAstra 45Days.", goal:"AI capstone — deployed AI product with public demo"}},

  // ══ WEEK 7: CHALLENGE EXTENSION — EXPERT LEVEL ══
  {d:31,
   dsa:{t:"Reverse Nodes in k-Group",lv:"Hard",desc:"Divide list into groups of k. For each full group, reverse the nodes iteratively using prev/curr/next. Reconnect the tail of the reversed group to the result of recursing on the next group. Handle the last incomplete group by leaving it unchanged. O(n) time, O(n/k) recursive stack."},
   fs:{task:"Implement a real-time notification system. Use Redis Pub/Sub as the message broker. Build: (1) a publisher endpoint POST /notify that sends a message to a channel, (2) a subscriber that listens and pushes events to connected clients via Server-Sent Events (SSE), (3) a frontend that displays notifications in real-time with a badge counter.", goal:"Real-time systems — Redis Pub/Sub + Server-Sent Events"},
   cy:{task:"Exploit a JWT authentication vulnerability. Set up a Node.js app using jsonwebtoken with the 'none' algorithm vulnerability. Step 1: capture a valid JWT. Step 2: decode it (base64). Step 3: modify the payload (escalate user to admin). Step 4: re-encode with algorithm set to 'none'. Step 5: send modified token. Document the attack and write the code fix.", goal:"JWT attacks — algorithm confusion and none algorithm exploit"},
   ai:{task:"Build a Retrieval-Augmented Generation (RAG) pipeline from scratch WITHOUT LangChain. Steps: (1) load a PDF and chunk it into 512-token segments, (2) generate embeddings with sentence-transformers, (3) store in FAISS index, (4) on query: embed query, search top-5 chunks, (5) send chunks + question to OpenAI/Anthropic API. Compare quality with different chunk sizes.",goal:"RAG from scratch — embeddings, FAISS, and LLM synthesis"},
   study:{dsa:{title:'Linked List Mastery',url:'https://www.youtube.com/watch?v=Hj_rA0dhr2I',channel:'NeetCode',dur:'3 hrs'},fs:{title:'Redis Pub/Sub & Real-time Apps',url:'https://www.youtube.com/watch?v=v5Hmm-HaLQY',channel:'Traversy Media',dur:'3.5 hrs'},cy:{title:'JWT Hacking Complete Guide',url:'https://www.youtube.com/watch?v=7Q17ubqLfaM',channel:'PortSwigger',dur:'3 hrs'},ai:{title:'RAG from Scratch — Full Tutorial',url:'https://www.youtube.com/watch?v=sVcwVQRHIc8',channel:'freeCodeCamp',dur:'4 hrs'}}},

  {d:32,
   dsa:{t:"Minimum Cost to Connect All Points",lv:"Medium",desc:"Classic minimum spanning tree problem. Build a complete graph where the edge weight between (x1,y1) and (x2,y2) is the Manhattan distance |x1-x2|+|y1-y2|. Apply Prim's algorithm with a min-heap: start from point 0, greedily add the nearest unvisited point. Time: O(n² log n). Can also use Kruskal's with union-find."},
   fs:{task:"Build a complete OAuth2 authorization server from scratch (simplified). Implement: (1) /authorize endpoint — redirect user to consent page, (2) /token endpoint — exchange auth code for access + refresh token, (3) /userinfo endpoint — return user data with valid token, (4) token introspection endpoint. Test by configuring a client app to use YOUR auth server.", goal:"OAuth2 — build your own authorization server"},
   cy:{task:"Conduct a complete OSINT investigation on a fictional persona you create. Build a fake profile on LinkedIn (use obviously fake name). Then, using ONLY publicly available tools, attempt to: (1) find their email (Hunter.io, email permutator), (2) reverse image search their photo, (3) find related social accounts (Sherlock tool), (4) enumerate linked domains. Document ALL tools and techniques.", goal:"OSINT — reconnaissance methodology and tooling"},
   ai:{task:"Implement RLHF preference learning. Create a dataset of 100 prompt-response pairs with human preference labels (you can annotate manually or use GPT to simulate). Train a Bradley-Terry preference model (logistic regression on preference pairs). Use the reward model to rank 10 new model outputs. Compare: reward model ranking vs your own human judgment.", goal:"RLHF — preference data and reward modeling"},
   study:{dsa:{title:'Minimum Spanning Tree — Prim & Kruskal',url:'https://www.youtube.com/watch?v=cplfcGZmX7I',channel:'WilliamFiset',dur:'3.5 hrs'},fs:{title:'OAuth2 Deep Dive — Full Course',url:'https://www.youtube.com/watch?v=8aCMiANJQHQ',channel:'OktaDev',dur:'4 hrs'},cy:{title:'OSINT Investigation Techniques',url:'https://www.youtube.com/watch?v=qwA6MmbeGNo',channel:'HackerSploit',dur:'3 hrs'},ai:{title:'RLHF Explained — Training LLMs with Human Feedback',url:'https://www.youtube.com/watch?v=2MBJOuVq380',channel:'Andrej Karpathy',dur:'4 hrs'}}},

  {d:33,
   dsa:{t:"Course Schedule II (Topological Sort)",lv:"Medium",desc:"Build a directed graph: for each prerequisite [a,b], add edge b→a. Run DFS-based topological sort: maintain three states per node: 0=unvisited, 1=visiting, 2=visited. If you hit a node in state 1 (back edge), a cycle exists → return []. Otherwise, post-order DFS gives topological order. Classic Kahn's BFS approach also works."},
   fs:{task:"Build a full-stack code execution platform (mini LeetCode). Frontend: Monaco Editor (VS Code editor in browser). Backend: receives code string, executes it SAFELY using Docker containers (each submission in an isolated container with memory/time limits), returns output or error. Implement language support for Python and JavaScript. Add rate limiting: 10 submissions/minute per IP.", goal:"Platform engineering — secure sandboxed code execution"},
   cy:{task:"Perform a complete web application penetration test on DVWA (Damn Vulnerable Web App) set to 'High' security level. Find and exploit: (1) SQL injection despite prepared statements — look for secondary injection or blind SQLi, (2) stored XSS bypassing input filtering, (3) CSRF despite token validation (look for CSRF token weaknesses), (4) file inclusion with LFI bypass. Document all bypasses.", goal:"Advanced web pen testing — bypassing security controls"},
   ai:{task:"Implement Mixture of Experts (MoE) from scratch. Build a small neural network with 4 expert sub-networks (2-layer MLPs) and a gating network that routes each input to the top-2 experts. Implement load balancing loss to prevent expert collapse. Train on MNIST. Compare: single MLP vs MoE with same total parameters. Plot expert utilization distribution.", goal:"Advanced architectures — Mixture of Experts implementation"},
   study:{dsa:{title:'Graph Algorithms — Topological Sort & Cycle Detection',url:'https://www.youtube.com/watch?v=EgI5nU9etnU',channel:'NeetCode',dur:'3 hrs'},fs:{title:'Docker Security — Container Isolation',url:'https://www.youtube.com/watch?v=KINjI1tlo2w',channel:'TechWorldwithNana',dur:'4 hrs'},cy:{title:'DVWA Complete Walkthrough — All Levels',url:'https://www.youtube.com/watch?v=WkyKHO8pFus',channel:'HackerSploit',dur:'3.5 hrs'},ai:{title:'Mixture of Experts — How LLMs Scale',url:'https://www.youtube.com/watch?v=UUs0X-VL_JA',channel:'Andrej Karpathy',dur:'4 hrs'}}},

  {d:34,
   dsa:{t:"Word Break II",lv:"Hard",desc:"Recursive backtracking with memoization. For each position i, try all words in the dictionary as potential matches ending at some j. If word matches s[i..j], recurse from j. Cache results: memo[i] = all valid sentences starting at position i. This avoids recomputing the same suffix multiple times. Without memo, exponential; with memo, O(n³) or better."},
   fs:{task:"Implement a distributed key-value store. Build 3 nodes that each store a subset of keys using consistent hashing (build the hash ring from scratch using a sorted list of virtual nodes). Write endpoints: PUT /key and GET /key. Route requests to the correct node based on hash. Implement replication: every write goes to the next 2 nodes clockwise on the ring. Test failover.", goal:"Distributed systems — consistent hashing and replication"},
   cy:{task:"Red team exercise: create a fully weaponized phishing campaign simulation (internal testing only — use your own email accounts). Build: (1) a convincing clone of a login page using HTTrack, (2) a Gophish campaign with email tracking pixel, (3) a credential capture endpoint. Then switch to blue team: analyze server logs to detect the campaign. Write detection rules for your SIEM.", goal:"Red/Blue exercise — phishing simulation and detection"},
   ai:{task:"Build an AI agent that can browse the web and answer questions. Use the ReAct framework: Thought → Action → Observation loop. Tools: web_search (use SerpAPI or DuckDuckGo), calculator, code_executor. Give the agent 5 complex questions requiring multi-step reasoning (e.g., 'Compare the population of the top 3 cities in India and plot a bar chart'). Evaluate: accuracy, number of tool calls, cost.", goal:"LLM agents — ReAct framework with web and code tools"},
   study:{dsa:{title:'Dynamic Programming — Word Break Problems',url:'https://www.youtube.com/watch?v=Sx9NNgInc3A',channel:'NeetCode',dur:'3 hrs'},fs:{title:'Consistent Hashing Explained',url:'https://www.youtube.com/watch?v=UF9Iqmg94tk',channel:'ByteByteGo',dur:'3.5 hrs'},cy:{title:'Phishing Attacks — Red Team Simulation',url:'https://www.youtube.com/watch?v=OqNbdnv7WEs',channel:'TCM Security',dur:'4 hrs'},ai:{title:'AI Agents — ReAct Framework from Scratch',url:'https://www.youtube.com/watch?v=Tg8d379VKFE',channel:'freeCodeCamp',dur:'3.5 hrs'}}},

  {d:35,
   dsa:{t:"Alien Dictionary",lv:"Hard",desc:"Extract ordering constraints: for each adjacent pair of words, find the first differing character — this gives a directed edge u→v. Build directed graph. Detect cycles with DFS (back edge = invalid). If valid, topological sort gives the alien alphabet. Edge case: if word1 is longer than word2 and word2 is a prefix of word1 (e.g., 'abc' before 'ab'), it's invalid."},
   fs:{task:"Build a serverless application on AWS Lambda (or Cloudflare Workers if no AWS). Architecture: (1) POST /shorten → Lambda stores URL in DynamoDB with TTL=7days, (2) GET /:code → Lambda lookups DynamoDB, returns redirect, (3) CloudWatch logs for monitoring, (4) API Gateway in front of all Lambdas, (5) CloudFront as CDN for GET requests. All infrastructure as code using AWS CDK or Terraform.", goal:"Serverless architecture — AWS Lambda + DynamoDB + CDK"},
   cy:{task:"Conduct advanced Active Directory enumeration on a home lab (set up Windows Server 2019 free trial + Windows 10 VM). Using BloodHound + SharpHound: collect all AD data, find shortest path to domain admin from a standard user, identify kerberoastable accounts, find ASREPRoastable users. Export a report from BloodHound and document each attack path with exploitation steps.", goal:"Active Directory recon — BloodHound attack path analysis"},
   ai:{task:"Implement Constitutional AI (CAI) harmlessness training. Create 50 test prompts spanning: violence, manipulation, privacy violation, misinformation. For each prompt: (1) get an initial model response, (2) generate a 'critique' using a constitution (write 5 principles), (3) generate a 'revision' guided by the critique, (4) compare initial vs revised responses. Measure: what % of responses improved?", goal:"AI safety — Constitutional AI harmlessness pipeline"},
   study:{dsa:{title:'Graph Topological Sort — All Techniques',url:'https://www.youtube.com/watch?v=eL18sWMbGF4',channel:'WilliamFiset',dur:'3.5 hrs'},fs:{title:'AWS Lambda Full Course for Beginners',url:'https://www.youtube.com/watch?v=eOBq__h4OJ4',channel:'freeCodeCamp',dur:'4 hrs'},cy:{title:'BloodHound Active Directory Tutorial',url:'https://www.youtube.com/watch?v=t0VaZ7B1RDU',channel:'TCM Security',dur:'3.5 hrs'},ai:{title:'Constitutional AI Explained',url:'https://www.youtube.com/watch?v=k-e01jH9DJY',channel:'Yannic Kilcher',dur:'3 hrs'}}},

  {d:36,
   dsa:{t:"Minimum Window Substring",lv:"Hard",desc:"Sliding window with two frequency maps. Expand right pointer, track which characters have been 'satisfied' (window freq ≥ target freq). When all characters satisfied, contract left pointer to minimize window while maintaining satisfaction. When a character drops below required, expand right again. Track minimum window throughout. O(|s|+|t|) time, O(|t|) space."},
   fs:{task:"Build a full-stack video streaming platform (mini YouTube). Backend: accept video upload, use FFmpeg to transcode to multiple resolutions (360p/720p), store on S3 or locally, generate thumbnail from first frame. Frontend: custom HTML5 video player with quality selector, progress bar, keyboard shortcuts (space=pause, arrow=seek). Stream video using HTTP range requests for partial content delivery.", goal:"Media engineering — video transcoding and adaptive streaming"},
   cy:{task:"Exploit a Server-Side Request Forgery (SSRF) vulnerability. Set up a vulnerable Flask app that fetches URLs provided by users. Exploit: (1) access internal services via http://localhost:PORT, (2) reach AWS metadata endpoint http://169.254.169.254/latest/meta-data/, (3) fetch internal files via file:// protocol, (4) use DNS rebinding attack concept. Then implement proper SSRF mitigations.", goal:"SSRF exploitation — internal service access and cloud metadata"},
   ai:{task:"Build a multimodal AI application. Use a vision-language model (LLaVA or GPT-4V via API). Build a product that: (1) accepts an image, (2) generates a product description (e-commerce use case), (3) suggests matching tags, (4) estimates pricing category based on visual features. Create a Streamlit or Gradio UI. Test with 20 product images. Measure description quality.", goal:"Multimodal AI — vision-language models for real applications"},
   study:{dsa:{title:'Sliding Window — Advanced Techniques',url:'https://www.youtube.com/watch?v=MK-NZ4hN7rs',channel:'NeetCode',dur:'3 hrs'},fs:{title:'Video Streaming with Node.js and FFmpeg',url:'https://www.youtube.com/watch?v=9dAITQGnByI',channel:'Traversy Media',dur:'3.5 hrs'},cy:{title:'SSRF Attack and Defense Complete Guide',url:'https://www.youtube.com/watch?v=RJJkHMHJiJI',channel:'PortSwigger',dur:'3 hrs'},ai:{title:'Multimodal AI — Building with Vision Models',url:'https://www.youtube.com/watch?v=vAmKB7iPkWw',channel:'freeCodeCamp',dur:'4 hrs'}}},

  {d:37,
   dsa:{t:"Max Points on a Line",lv:"Hard",desc:"For each point as origin, count other points on every possible line through origin. Lines defined by slopes stored as fractions in lowest terms (use GCD to reduce). Special cases: vertical lines (infinite slope) and duplicate points. For each origin point, find the maximum count including duplicates and the best slope group. Global max across all origin points. O(n²log(max_coord)) time."},
   fs:{task:"Build a GraphQL API server with real-time subscriptions. Schema: User, Post, Comment. Implement: (1) queries for users, posts with pagination (cursor-based), (2) mutations for createPost, addComment, (3) subscriptions for onNewComment(postId) using WebSocket (graphql-ws), (4) DataLoader to solve N+1 queries, (5) field-level authorization (users can only delete their own posts). Test with Apollo Studio.", goal:"GraphQL — subscriptions, DataLoader, and field authorization"},
   cy:{task:"Advanced forensics challenge: Download a CTF-style disk image from a free resource (CyberDefenders or Digital Corpora). In Autopsy: (1) create a timeline of all file system activity in the last 30 days, (2) recover deleted files, (3) find steganographically hidden data using stegdetect, (4) extract browser artifacts (history, cookies), (5) identify the attacker's IP from log files. Write a full forensic report.", goal:"Advanced DFIR — complete forensic investigation"},
   ai:{task:"Implement token-free diffusion language model concept. Instead of autoregressive generation, implement a simple denoising approach: add random character swaps to a target sentence (forward process), then train a small neural network to recover the original (reverse process). Test with 1000 short sentences. Compare perplexity and generation quality vs a small autoregressive LSTM baseline.", goal:"Research ML — non-autoregressive generation exploration"},
   study:{dsa:{title:'Hard Math Problems in Competitive Programming',url:'https://www.youtube.com/watch?v=bSJQEQaGr_Y',channel:'Errichto',dur:'3.5 hrs'},fs:{title:'GraphQL Full Course — Subscriptions & Advanced',url:'https://www.youtube.com/watch?v=ed8SzALpx1Q',channel:'Academind',dur:'4 hrs'},cy:{title:'Digital Forensics Full Investigation Walkthrough',channel:'13Cubed',duration:'3.5 hrs',url:'https://www.youtube.com/watch?v=JKcnM9N0HnQ'},ai:{title:'Diffusion Models Explained from Scratch',url:'https://www.youtube.com/watch?v=vu6eKteJWew',channel:'Andrej Karpathy',dur:'4 hrs'}}},

  {d:38,
   dsa:{t:"Integer to English Words",lv:"Hard",desc:"Break into groups of three: billions, millions, thousands, ones. For each group, convert to English using helper for numbers 1-999: hundreds digit, tens/teens/ones (special cases for 11-19). Concatenate groups with appropriate scale words. Edge cases: 0 → 'Zero', negative numbers, exact multiples of 1000. Careful: no trailing spaces and correct handling of zero in middle groups."},
   fs:{task:"Build a feature flags system. Architecture: (1) admin UI to create/update/delete flags and set rollout percentage (0-100%), (2) an SDK (Node.js module) that client apps import to check flag status, (3) a backend that serves flag values based on: user ID hash for gradual rollout, user groups (beta testers), and environment (dev/staging/prod), (4) real-time flag updates pushed to clients without restart.", goal:"Platform engineering — feature flags with gradual rollout"},
   cy:{task:"Build a complete intrusion detection system. Using Suricata (open source IDS): (1) install and configure on your network, (2) write 5 custom rules: detect Nmap scan, detect SQL injection attempt, detect reverse shell, detect DNS exfiltration, detect data exfiltration over HTTP, (3) test each rule by triggering the attack and confirming the alert fires, (4) integrate alerts with your ELK stack.", goal:"Network security — IDS rule writing and detection engineering"},
   ai:{task:"Implement model merging (SLERP/TIES). Take 2 fine-tuned models on different datasets (use small DistilBERT variants). Implement SLERP (spherical linear interpolation) between their weights at coefficient λ=0.5. Implement TIES (Trim, Elect Sign, Disjoint Merge). Compare merged models vs individual models on both tasks. Show: can merging preserve both capabilities?", goal:"Advanced ML — model merging and weight averaging techniques"},
   study:{dsa:{title:'String Simulation Problems — Patterns & Tricks',url:'https://www.youtube.com/watch?v=M3cYNY90R10',channel:'NeetCode',dur:'3 hrs'},fs:{title:'Feature Flags — LaunchDarkly Architecture',url:'https://www.youtube.com/watch?v=mfaJGfFRQzE',channel:'GOTO Conferences',dur:'3.5 hrs'},cy:{title:'Suricata IDS Full Tutorial',url:'https://www.youtube.com/watch?v=S0-vme5hIHQ',channel:'HackerSploit',dur:'4 hrs'},ai:{title:'Model Merging — Frankenstein LLMs',url:'https://www.youtube.com/watch?v=6I17kURRqSo',channel:'Yannic Kilcher',dur:'3 hrs'}}},

  {d:39,
   dsa:{t:"Regular Expression Matching",lv:"Hard",desc:"DP table dp[i][j] = does s[0..i-1] match p[0..j-1]. Base: dp[0][0]=true. Transitions: if p[j-1]='*', either skip two (dp[i][j-2]) or extend match (dp[i-1][j] if s[i-1] matches p[j-2]). If p[j-1]='.' or p[j-1]==s[i-1]: dp[i][j]=dp[i-1][j-1]. All other cases: false. Fill row by row. Time O(mn), Space O(mn) reducible to O(n)."},
   fs:{task:"Implement distributed rate limiting using Redis. Build a rate limiter middleware that works across multiple Node.js instances. Implement 3 algorithms: (1) Fixed window counter, (2) Sliding window log (store timestamps in sorted set), (3) Token bucket (store tokens + last refill time). Benchmark all three under concurrent load (100 req/s). Measure accuracy, false positive rate, and Redis overhead per algorithm.", goal:"Distributed systems — multi-algorithm rate limiting"},
   cy:{task:"Exploit a binary with Address Space Layout Randomization (ASLR) enabled. Use return-oriented programming (ROP): (1) find ROP gadgets in the binary using ROPgadget, (2) build a ROP chain to disable NX, (3) leak a libc address through format string or puts() to defeat ASLR, (4) calculate libc base, (5) call system('/bin/sh') using libc gadgets. Document every step with GDB output.", goal:"Advanced exploitation — ROP chains and ASLR bypass"},
   ai:{task:"Build a production-ready model serving system. Using BentoML or FastAPI: (1) package a PyTorch model as a service, (2) implement input validation and preprocessing, (3) add async batching (accumulate requests for 50ms then batch inference), (4) add request queuing with priority lanes, (5) export Prometheus metrics (latency p50/p95/p99, throughput, queue depth), (6) load test with Locust: target <100ms p95 at 100 req/s.", goal:"MLOps — production model serving with batching and monitoring"},
   study:{dsa:{title:'2D Dynamic Programming — All Patterns',url:'https://www.youtube.com/watch?v=oBt53YbR9Kk',channel:'NeetCode',dur:'4 hrs'},fs:{title:'Rate Limiting Algorithms Explained',url:'https://www.youtube.com/watch?v=FU4WlwfS3G0',channel:'ByteByteGo',dur:'3 hrs'},cy:{title:'Return Oriented Programming (ROP) — Full Tutorial',url:'https://www.youtube.com/watch?v=zaQtCVHVvWU',channel:'LiveOverflow',dur:'3.5 hrs'},ai:{title:'Model Serving at Scale — BentoML Tutorial',url:'https://www.youtube.com/watch?v=i8bKYiKxGYA',channel:'freeCodeCamp',dur:'4 hrs'}}},

  {d:40,
   dsa:{t:"Count of Smaller Numbers After Self",lv:"Hard",desc:"Coordinate compress values to [0,N]. Process elements from RIGHT to LEFT. For each element, query BIT for sum in range [0, compressed_value-1] — this is the count of smaller elements seen so far (to the right). Then update BIT at compressed_value. Result array built in reverse. Alternative: merge sort, counting inversions during merge step. Both O(n log n)."},
   fs:{task:"Build a complete WebRTC video calling app. Signaling server: Node.js + Socket.io for SDP offer/answer exchange and ICE candidate relay. Client: (1) getUserMedia for camera/microphone, (2) RTCPeerConnection for P2P connection, (3) add ice candidates as they arrive, (4) display remote stream. Add features: mute audio, disable video, share screen (getDisplayMedia), and end call with cleanup. Test with two browser tabs.", goal:"WebRTC — peer-to-peer video calling from scratch"},
   cy:{task:"Complete a real Bug Bounty report. Find a valid vulnerability (even informational) on a public bug bounty program (HackerOne/Bugcrowd with scope you're allowed to test). Write a professional disclosure: (1) vulnerability title with CWE number, (2) CVSS v3.1 score with vector, (3) step-by-step reproduction, (4) proof of concept (screenshot or HTTP request/response), (5) impact analysis, (6) remediation guidance. Submit it.", goal:"Bug bounty — write and submit a real vulnerability report"},
   ai:{task:"Implement long context handling for LLMs. Take a 50-page PDF. Implement and compare 3 approaches: (1) truncate to context window, (2) map-reduce: summarize each section, then summarize summaries, (3) RAG with semantic chunking: find relevant chunks per question. For 20 questions requiring information from different parts of the document, measure: answer accuracy, token cost, latency per approach.", goal:"LLM applications — long document processing strategies"},
   study:{dsa:{title:'Binary Indexed Tree (Fenwick Tree) Full Tutorial',url:'https://www.youtube.com/watch?v=9uaXG62Y8Uw',channel:'WilliamFiset',dur:'3.5 hrs'},fs:{title:'WebRTC Complete Course — Video Calling',url:'https://www.youtube.com/watch?v=QsH8FL0952k',channel:'freeCodeCamp',dur:'4 hrs'},cy:{title:'Writing Professional Bug Bounty Reports',url:'https://www.youtube.com/watch?v=UUlRiLrXOLc',channel:'NahamSec',dur:'3 hrs'},ai:{title:'LangChain for Long Documents — RAG Strategies',url:'https://www.youtube.com/watch?v=sVcwVQRHIc8',channel:'freeCodeCamp',dur:'4 hrs'}}},

  {d:41,
   dsa:{t:"Find Median from Data Stream",lv:"Hard",desc:"Two heaps: max-heap for lower half, min-heap for upper half. Invariant: size difference ≤ 1, and max_heap.top() ≤ min_heap.top(). On insert: add to max-heap, move max to min-heap if violation. Rebalance if sizes differ by 2. Median: if sizes equal → average of tops; else → top of larger heap. Each addNum: O(log n). Each findMedian: O(1)."},
   fs:{task:"Build a complete event-sourcing system. Instead of storing current state, store a log of all events. Implement: (1) an append-only event store in PostgreSQL, (2) aggregate projections (rebuild state by replaying events), (3) snapshots every 100 events for performance, (4) event replay for debugging, (5) multiple read model projections from same events (e.g., user profile view + analytics view). Test with 10,000 events.", goal:"Architecture — event sourcing with snapshots and projections"},
   cy:{task:"Set up a complete Threat Intelligence Platform (TIP). Using MISP (open source): (1) import threat feeds (MITRE ATT&CK, Abuse.ch), (2) create an IoC for a simulated malware campaign (IP, domain, hash, YARA rule), (3) correlate new sample against existing IoCs, (4) export STIX2 report, (5) create a Sigma detection rule for your SIEM from the MISP IoCs. Document the full threat intel lifecycle.", goal:"Threat intelligence — MISP platform and STIX/TAXII workflow"},
   ai:{task:"Build an AI code reviewer. Given a Python or JavaScript function, the AI should: (1) identify bugs, (2) suggest performance improvements, (3) point out security vulnerabilities (XSS injection vectors, SQL injection), (4) suggest better variable names, (5) score code quality 1-10. Fine-tune a small code model OR use prompting with few-shot examples. Test on 20 code samples. Measure accuracy against known issues.", goal:"Applied NLP — code analysis and automated review"},
   study:{dsa:{title:'Heap Data Structure — All Operations',url:'https://www.youtube.com/watch?v=t0Cq6tVNRBA',channel:'NeetCode',dur:'3 hrs'},fs:{title:'Event Sourcing — Deep Dive',url:'https://www.youtube.com/watch?v=8JKjvY4etTY',channel:'GOTO Conferences',dur:'4 hrs'},cy:{title:'MISP Threat Intelligence Platform',url:'https://www.youtube.com/watch?v=0eNvU1l5b8A',channel:'CyberDefenders',dur:'3.5 hrs'},ai:{title:'Code LLMs — Training and Evaluation',url:'https://www.youtube.com/watch?v=RBinDPAFRtA',channel:'Yannic Kilcher',dur:'3 hrs'}}},

  {d:42,
   dsa:{t:"Largest Rectangle in Histogram",lv:"Hard",desc:"Monotonic increasing stack of indices. For each bar: while stack not empty and heights[stack.top()] > heights[i], pop — the popped bar's maximum rectangle extends from the new stack top + 1 to i - 1. Width = i - stack.top() - 1 (or i if stack empty). Height = heights[popped]. Push i. After loop, drain remaining stack with i = n as right boundary. O(n) — each bar pushed and popped once."},
   fs:{task:"Build a complete SaaS billing system with Stripe. Implement: (1) Stripe Checkout for subscription plans (Free/Pro/Enterprise), (2) webhooks to handle payment_succeeded, payment_failed, subscription_cancelled events, (3) feature gating middleware — check subscription tier before serving premium APIs, (4) usage-based billing — track API calls per user and bill overages, (5) customer portal for self-service plan changes.", goal:"Payments — Stripe subscriptions, webhooks, and usage billing"},
   cy:{task:"Complete an advanced CTF pwn challenge (binary exploitation). Download a medium-difficulty pwn from CTFtime archive or pwn.college. Your solution must use at least 2 techniques from: ret2plt, ret2libc, format string, heap overflow, use-after-free, or integer overflow. Write a complete pwntools exploit script. Document: vulnerability class, root cause, exploitation primitive, mitigation bypassed.", goal:"Binary exploitation — advanced CTF challenge solution"},
   ai:{task:"Implement quantization from scratch. Take a pre-trained ResNet-18. Implement INT8 post-training quantization (PTQ): (1) calibrate scale and zero-point for each layer using 100 calibration images, (2) quantize all weights to INT8, (3) implement quantized forward pass with integer arithmetic, (4) compare: FP32 vs INT8 model — accuracy on 1000 test images, model size (MB), and inference latency (ms).", goal:"Model compression — INT8 quantization from scratch"},
   study:{dsa:{title:'Monotonic Stack — All Use Cases',url:'https://www.youtube.com/watch?v=Dq_ObZwTY_Q',channel:'NeetCode',dur:'3 hrs'},fs:{title:'Stripe Payments Complete Integration',url:'https://www.youtube.com/watch?v=1r-F3FIONl8',channel:'Traversy Media',dur:'4 hrs'},cy:{title:'Advanced CTF Binary Exploitation',url:'https://www.youtube.com/watch?v=zaQtCVHVvWU',channel:'LiveOverflow',dur:'3.5 hrs'},ai:{title:'Neural Network Quantization Explained',url:'https://www.youtube.com/watch?v=DWCMvi5M0xE',channel:'Quantized AI',dur:'3.5 hrs'}}},

  {d:43,
   dsa:{t:"Edit Distance (Levenshtein)",lv:"Hard",desc:"Classic 2D DP. dp[i][j] = edit distance between s[0..i-1] and t[0..j-1]. Base: dp[i][0]=i, dp[0][j]=j. Transitions: if s[i-1]==t[j-1]: dp[i][j]=dp[i-1][j-1]. Else: dp[i][j] = 1 + min(insert=dp[i][j-1], delete=dp[i-1][j], replace=dp[i-1][j-1]). Space: optimize to O(n) with rolling array. Applications: spell checking, DNA alignment, diff tools."},
   fs:{task:"Build an AI-powered search engine for a document collection. Backend: (1) ingest 100 documents, chunk and embed with sentence-transformers, store in Weaviate or Qdrant (free local setup), (2) hybrid search: combine BM25 keyword search + semantic vector search with RRF (Reciprocal Rank Fusion) score merging, (3) re-ranking with a cross-encoder model, (4) API endpoint with <200ms P95 latency. Frontend: search UI with highlighted relevant passages.", goal:"Search engineering — hybrid semantic + keyword retrieval"},
   cy:{task:"Build a complete Security Operations Center (SOC) home lab. Components: (1) Wazuh SIEM + XDR (free), (2) TheHive incident tracking platform, (3) Cortex analyzers integration, (4) MISP threat intelligence, (5) connect all components. Simulate an attack: run a Nmap scan + MetaSploit exploit against a vulnerable VM, watch the full chain: detection in Wazuh → alert in TheHive → enrichment in Cortex → IoCs in MISP.", goal:"Blue team — complete SOC stack integration"},
   ai:{task:"Research replication: implement the core idea from a recent ML paper (arXiv 2024). Choose a paper from NLP or computer vision with under 500 citations. Reproduce: (1) key architecture or technique, (2) train on a small subset of the dataset, (3) compare your results to the paper's main table (even if smaller scale). Write a technical blog post explaining your implementation and results.", goal:"Research skills — paper replication methodology"},
   study:{dsa:{title:'Dynamic Programming Complete Masterclass',url:'https://www.youtube.com/watch?v=oBt53YbR9Kk',channel:'NeetCode',dur:'4 hrs'},fs:{title:'Vector Search and Semantic Search Tutorial',url:'https://www.youtube.com/watch?v=klTvEwg3oJ4',channel:'Weaviate',dur:'3.5 hrs'},cy:{title:'Building a Complete SOC Home Lab',url:'https://www.youtube.com/watch?v=5TnCrKfqrFI',channel:'MyDFIR',dur:'4 hrs'},ai:{title:'How to Read and Replicate ML Papers',url:'https://www.youtube.com/watch?v=733m6qBH-jI',channel:'Yannic Kilcher',dur:'3 hrs'}}},

  {d:44,
   dsa:{t:"Burst Balloons",lv:"Hard",desc:"Interval DP. Think backwards: which balloon is the LAST to be burst in range [l,r]? dp[l][r] = max coins when bursting all balloons in (l,r), treating l and r as boundaries (not burst). For each k in (l,r): dp[l][r] = max(nums[l]*nums[k]*nums[r] + dp[l][k] + dp[k][r]). Add sentinel 1s at both ends. O(n³) time, O(n²) space. The key insight: define k as the LAST balloon burst."},
   fs:{task:"CAPSTONE FULL-STACK PROJECT: Build a complete project management platform (Jira-lite). Must include: (1) workspace and project hierarchy, (2) drag-and-drop kanban board (React DnD or dnd-kit), (3) rich text editor for task descriptions (Tiptap or Lexical), (4) file attachments (S3 upload), (5) activity feed with real-time updates (WebSocket), (6) role-based permissions (admin/member/viewer), (7) deployed to production with CI/CD.", goal:"Full-stack capstone — complete project management SaaS"},
   cy:{task:"CAPSTONE SECURITY PROJECT: Conduct an authorized full penetration test of a deliberately vulnerable application you build. Create a Node.js app with intentional vulnerabilities: SQLi, XSS, CSRF, IDOR, broken auth, sensitive data exposure. Document: scope, rules of engagement, methodology, all findings (CVSS scored), executive summary, technical report with PoC, and remediation plan. This is your portfolio pentest report.", goal:"Security capstone — full penetration test report"},
   ai:{task:"CAPSTONE AI PROJECT: Build and deploy a complete AI startup MVP. Requirements: (1) uses at least one LLM (via API or local), (2) has a real problem it solves, (3) includes RAG or fine-tuning, (4) has a polished UI (Streamlit/Gradio/Next.js), (5) deployed with a public URL, (6) GitHub repo with full README, architecture diagram, and demo video, (7) 10 real users have tried it (share in communities).", goal:"AI capstone — complete deployed AI product with real users"},
   study:{dsa:{title:'Interval DP — Hardest Problems Explained',url:'https://www.youtube.com/watch?v=VnPFYPwbXgU',channel:'Errichto',dur:'3.5 hrs'},fs:{title:'Building Full-Stack SaaS with Next.js',url:'https://www.youtube.com/watch?v=wm5gMKuwSYk',channel:'Web Dev Simplified',dur:'4 hrs'},cy:{title:'Writing Professional Penetration Test Reports',url:'https://www.youtube.com/watch?v=Legvcvq_Ees',channel:'TCM Security',dur:'3 hrs'},ai:{title:'Deploying AI Applications to Production',url:'https://www.youtube.com/watch?v=i8bKYiKxGYA',channel:'freeCodeCamp',dur:'4 hrs'}}},

  {d:45,
   dsa:{t:"FINAL: Design an In-Memory Database",lv:"Hard",desc:"System design + implementation: (1) key-value store with O(1) get/set/delete, (2) TTL support — use a min-heap and lazy deletion, (3) transaction support — BEGIN, COMMIT, ROLLBACK with nested transaction stack, (4) SCAN with prefix matching using a Trie, (5) pub/sub for key change events. Bonus: implement LRU eviction when memory limit reached. This is a REAL system design interview question."},
   fs:{task:"🏆 FINAL DAY 45 FULL-STACK: You've built 44 days of skills. Today: contribute to a major open-source project (Next.js, React, Express, Prisma, or similar). Find a good-first-issue, implement the fix with proper tests, submit a PR with a clear description. Share your entire 45-day journey on LinkedIn with your top 5 projects live. This is your launch day.", goal:"🏆 Day 45: Open source contribution + career launch"},
   cy:{task:"🏆 FINAL DAY 45 CYBERSECURITY: Synthesize everything. Do one of: (1) attempt a real OSCP-style machine on HTB/PG independently (no walkthroughs), OR (2) write and submit a CVE (find a vulnerability in open source software with a bug bounty), OR (3) publish a research blog on a new attack technique you discovered. Share your 45-day portfolio on LinkedIn. You're ready for the industry.", goal:"🏆 Day 45: Real-world security challenge + portfolio launch"},
   ai:{task:"🏆 FINAL DAY 45 AI: You've built AI products for 44 days. Today: submit a short paper to an AI workshop (ArXiv preprint counts), OR open-source a tool that solves a real AI problem with 20+ GitHub stars, OR win a Kaggle competition (any tier). Record a 3-minute video demo of your best AI project. Share your 45-day AI journey on LinkedIn with #PravAstra45. The world needs your AI.",goal:"🏆 Day 45: Publish, open-source, or compete — your AI career begins"},
   study:{dsa:{title:'System Design Mock Interview — Database Design',url:'https://www.youtube.com/watch?v=UF9Iqmg94tk',channel:'ByteByteGo',dur:'4 hrs'},fs:{title:'How to Contribute to Open Source',url:'https://www.youtube.com/watch?v=yzeVMecydCE',channel:'Fireship',dur:'3 hrs'},cy:{title:'OSCP Final Preparation — Zero to Hero',url:'https://www.youtube.com/watch?v=DkMcNd2z5Dc',channel:'TryHackMe',dur:'4 hrs'},ai:{title:'From ML Beginner to Researcher in One Year',url:'https://www.youtube.com/watch?v=733m6qBH-jI',channel:'Yannic Kilcher',dur:'3.5 hrs'}}}
];;

// ═══════════════════════════════════════════════════════════
// 📝 RESOURCES — YouTube channel cards shown in Resources section
// Add a channel: {n:"Channel Name", d:"Description.", u:"https://youtube.com/@handle"}
// Domains: Cybersecurity | "Full Stack" | AI
// ═══════════════════════════════════════════════════════════
// ══ RESOURCES ══
const RESOURCES={
  Cybersecurity:[
    {n:"NetworkChuck",d:"Networking and cybersecurity from absolute scratch. Great for beginners building foundations.",u:"https://www.youtube.com/@NetworkChuck"},
    {n:"John Hammond",d:"CTF walkthroughs, malware analysis, real pen testing techniques. Essential for practical skills.",u:"https://www.youtube.com/@_JohnHammond"},
    {n:"TCM Security (TheCyberMentor)",d:"Free full ethical hacking courses. Best OSCP prep channel on YouTube.",u:"https://www.youtube.com/@TCMSecurityAcademy"},
    {n:"LiveOverflow",d:"Binary exploitation, CTF deep dives, web security research at expert level.",u:"https://www.youtube.com/@LiveOverflow"},
    {n:"David Bombal",d:"Python hacking, networking labs, ethical hacking — very hands-on content.",u:"https://www.youtube.com/@davidbombal"},
    {n:"IppSec",d:"HackTheBox machine walkthroughs. The gold standard for penetration testing practice.",u:"https://www.youtube.com/@ippsec"},
    {n:"STÖK",d:"Bug bounty hunting, web app security, and hacker mindset development.",u:"https://www.youtube.com/@STOKfredrik"},
    {n:"13Cubed",d:"Windows forensics, memory analysis, incident response — DFIR focused.",u:"https://www.youtube.com/@13Cubed"},
  ],
  "Full Stack":[
    {n:"Traversy Media",d:"Project-based crash courses for every major web technology. Perfect starting point.",u:"https://www.youtube.com/@TraversyMedia"},
    {n:"Fireship",d:"Fast-paced, high-quality web dev concepts and news. Best 100-second explainers.",u:"https://www.youtube.com/@Fireship"},
    {n:"Academind (Maximilian S.)",d:"In-depth React, Node, Angular, Vue with complete real-world projects.",u:"https://www.youtube.com/@academind"},
    {n:"Web Dev Simplified",d:"Complex concepts made simple. Best for JS, React, CSS fundamentals.",u:"https://www.youtube.com/@WebDevSimplified"},
    {n:"Kevin Powell",d:"The best CSS educator on YouTube. Master flexbox, grid, and responsive design.",u:"https://www.youtube.com/@KevinPowell"},
    {n:"Theo (t3.gg)",d:"Modern TypeScript full-stack: Next.js, tRPC, Prisma — production-grade patterns.",u:"https://www.youtube.com/@t3dotgg"},
    {n:"The Primeagen",d:"Performance, systems thinking, Vim, career advice from a Netflix engineer.",u:"https://www.youtube.com/@ThePrimeagen"},
    {n:"Codevolution",d:"Excellent React, Next.js, TypeScript tutorials with clear progression.",u:"https://www.youtube.com/@Codevolution"},
  ],
  AI:[
    {n:"Andrej Karpathy",d:"Build neural networks from scratch. Legendary ex-Tesla AI director and researcher.",u:"https://www.youtube.com/@AndrejKarpathy"},
    {n:"3Blue1Brown",d:"Visual mathematics: neural networks, calculus, linear algebra — unmatched clarity.",u:"https://www.youtube.com/@3blue1brown"},
    {n:"Sentdex",d:"Python + ML + deep learning hands-on projects with real datasets.",u:"https://www.youtube.com/@sentdex"},
    {n:"Two Minute Papers",d:"Latest AI research explained accessibly. Keep up with state-of-the-art.",u:"https://www.youtube.com/@TwoMinutePapers"},
    {n:"Yannic Kilcher",d:"Deep technical dives into transformers, LLMs, and AI papers. Expert level.",u:"https://www.youtube.com/@YannicKilcher"},
    {n:"StatQuest (Josh Starmer)",d:"Statistics and ML concepts with incredible clarity, humor, and visual intuition.",u:"https://www.youtube.com/@statquest"},
    {n:"Lex Fridman",d:"Long-form conversations with AI researchers, mathematicians, engineers. Inspirational.",u:"https://www.youtube.com/@lexfridman"},
    {n:"HuggingFace",d:"Official channel for transformers, fine-tuning, datasets, and Spaces demos.",u:"https://www.youtube.com/@HuggingFace"},
  ],
};

// ═══════════════════════════════════════════════════════════
// 📝 FREE_CERTS — Free certificate links
// Format: {name:"Course (Platform)", link:"https://...", desc:"What you learn."}
// Levels: Beginner | Intermediate | Advanced -> Cybersecurity / "Full Stack" / AI
// ═══════════════════════════════════════════════════════════
// ══ FREE CERTIFICATES ══
const FREE_CERTS={
  Beginner:{
    Cybersecurity:[
      {name:"Cisco Networking Basics",link:"https://www.netacad.com/courses/networking-basics?courseLang=en-US",desc:"Cisco NetAcad introductory course on networking fundamentals."},
      {name:"Cisco Introduction to Cybersecurity",link:"https://www.netacad.com/articles/news/s-introduction-to-cybersecurity-your-cyber-journey-starts-here?courseLang=en-US",desc:"Cisco NetAcad beginner cybersecurity introduction course."},
      {name:"Cisco Cyber Threat Management",link:"https://www.netacad.com/courses/cyber-threat-management?courseLang=en-US",desc:"Covers cyber threats, risk management, and security fundamentals."},
      {name:"Simplilearn Ethical Hacking Course (Free)",link:"https://www.simplilearn.com/ethical-hacking-course-free-beginners-skillup",desc:"Beginner ethical hacking course covering core hacking concepts."},
      {name:"Simplilearn Kali Linux Course (Free)",link:"https://www.simplilearn.com/free-kali-linux-course-skillup",desc:"Introduction to Kali Linux tools and penetration testing basics."},
      {name:"Simplilearn Cyber Security Basics",link:"https://www.simplilearn.com/learn-cyber-security-basics-skillup",desc:"Fundamentals of cybersecurity principles and attacks."},
      {name:"upGrad Basic Python Programming",link:"https://www.upgrad.com/free-courses/data-science/basic-python-programming-course-free/programming-course-free/",desc:"Beginner Python programming course for automation and scripting."},
      {name:"EC-Council Python for Absolute Beginners",link:"https://learn.eccouncil.org/course/python-for-absolute-beginners?logged=true",desc:"Introductory Python programming course by EC-Council."},
      {name:"EC-Council Practical Introduction to Cloud Computing",link:"https://learn.eccouncil.org/course/a-practical-introduction-to-cloud-computing?logged=true",desc:"Beginner-level cloud computing fundamentals course."},
      {name:"EC-Council Selenium Automation Testing for Beginners",link:"https://learn.eccouncil.org/course/selenium-automation-testing-for-beginners?logged=true",desc:"Introduction to Selenium automation testing basics."},
      {name:"EC-Council Introduction to Dark Web, Anonymity and Cryptocurrency",link:"https://learn.eccouncil.org/course/introduction-to-dark-web-anonymity-and-cryptocurrency?logged=true",desc:"Covers dark web concepts, anonymity, and cryptocurrency basics."},
    ],
    "Full Stack":[
      {name:"freeCodeCamp Responsive Web Design (Free)",link:"https://www.freecodecamp.org/learn/2022/responsive-web-design/",desc:"300 hours of HTML, CSS, accessibility. Free verifiable certificate upon completion."},
      {name:"freeCodeCamp JavaScript Algorithms & DS (Free)",link:"https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/",desc:"JavaScript fundamentals, ES6, regex, OOP, algorithms. Free certificate included."},
      {name:"The Odin Project — Foundations (Free)",link:"https://www.theodinproject.com/paths/foundations/courses/foundations",desc:"Project-based full stack curriculum. HTML, CSS, JavaScript, Git. Completely free."},
      {name:"Microsoft HTML/CSS Beginner Certificate (Free)",link:"https://learn.microsoft.com/en-us/training/paths/web-development-101/",desc:"Microsoft Learn's beginner web dev path with free certificate badge."},
      {name:"freeCodeCamp Front End Libraries Certificate (Free)",link:"https://www.freecodecamp.org/learn/front-end-development-libraries/",desc:"Bootstrap, jQuery, SASS, React, Redux. Free verifiable certificate from freeCodeCamp."},
      {name:"Sololearn Web Development (Free Certificate)",link:"https://www.sololearn.com/learn/courses/web-development",desc:"Interactive beginner web dev course with free completion certificate. Mobile-friendly."},
      {name:"CS50x — Harvard Introduction to CS (Free)",link:"https://cs50.harvard.edu/x/",desc:"Harvard's legendary intro CS course. Free edX audit + certificate option available."},
      {name:"Google UX Design Certificate (Coursera - Audit Free)",link:"https://www.coursera.org/professional-certificates/google-ux-design",desc:"Google's UX design professional certificate. Audit all 7 courses free on Coursera."},
    ],
    AI:[
{name:"Cisco Introduction to Modern AI",link:"https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US",desc:"Cisco Networking Academy course on modern artificial intelligence fundamentals."},
{name:"Cisco AI with IBM SkillsBuild",link:"https://www.netacad.com/courses/ai-ibm-skillsbuild?courseLang=en-US",desc:"Cisco and IBM SkillsBuild collaborative AI fundamentals course."},
    ],
  },
  Intermediate:{
    Cybersecurity:[
      {name:"Cisco Ethical Hacker Course",link:"https://www.netacad.com/courses/ethical-hacker?courseLang=en-US",desc:"Cisco Networking Academy ethical hacker course covering hacking fundamentals."},
{name:"Cisco Python Essentials 1",link:"https://www.netacad.com/courses/python-essentials-1?courseLang=en-US",desc:"Cisco course teaching Python basics step-by-step."},
{name:"Cisco Python Essentials 2",link:"https://www.netacad.com/courses/python-essentials-2?courseLang=en-US",desc:"Cisco advanced Python course continuing from Essentials 1."},
    ],
    "Full Stack":[
     {name:"freeCodeCamp Full Stack Developer Curriculum",link:"https://www.freecodecamp.org/learn/full-stack-developer-v9/",desc:"Comprehensive free full-stack web development curriculum including HTML, CSS, JavaScript, and backend projects."},
{name:"Mindluster Full Stack & Web Development Certification",link:"https://www.mindluster.com/certificate/3438/Full-Stack-with-Web-Development-video?utm_source=chatgpt.com",desc:"Full-stack web development video course with a certificate on completion."},
    ],
  },
};

// ══ FREE VIDEOS ══
// ═══════════════════════════════════════════════════════════
// 📝 FREE_VIDEOS — Free video course links
// Same format as FREE_CERTS: {name:"...", link:"...", desc:"..."}
// ═══════════════════════════════════════════════════════════
const FREE_VIDEOS={
  Beginner:{
    Cybersecurity:[
      {name:"NetworkChuck — Full Ethical Hacking Course",link:"https://www.youtube.com/watch?v=3Kq1MIfTWCE",desc:"4-hour beginner cybersecurity crash course by NetworkChuck. Fun, engaging, practical entry point."},
      {name:"David Bombal — Complete Ethical Hacking for Beginners",link:"https://www.youtube.com/@davidbombal",desc:"Networking + Python hacking from scratch. Hundreds of free tutorials for absolute beginners."},
      {name:"freeCodeCamp — Full Ethical Hacking Course (15 hrs)",link:"https://www.youtube.com/watch?v=3FNYvj2U0HM",desc:"15-hour complete ethical hacking course by TCM Security on freeCodeCamp's YouTube channel."},
      {name:"Professor Messer — CompTIA Security+ SY0-701",link:"https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/sy0-701-comptia-security-plus-course/",desc:"Complete free video course for Security+ SY0-701. Most popular free Security+ prep resource."},
      {name:"NetworkChuck — Hacking 101 Playlist",link:"https://www.youtube.com/playlist?list=PLIhvC56v63IIJZRa3lzK6IeBQOH_VFjUQ",desc:"Free beginner hacking playlist. Kali Linux, Metasploit, networking basics — ideal for starters."},
      {name:"freeCodeCamp — Linux for Ethical Hackers",link:"https://www.youtube.com/watch?v=U1w4T03B30I",desc:"5-hour free Linux fundamentals specifically for cybersecurity practitioners. Bash, file system, perms."},
      {name:"Hak5 — Beginner Hacking Concepts",link:"https://www.youtube.com/@hak5",desc:"Hardware hacking, social engineering, WiFi attacks explained accessibly for beginners."},
      {name:"Computerphile — Security Fundamentals",link:"https://www.youtube.com/playlist?list=PLzH6n4zXuckquVnQ0KlMDxyT5YE-sA8Ps",desc:"University of Nottingham explains encryption, passwords, hashing, and security concepts visually."},
    ],
    "Full Stack":[
      {name:"Traversy Media — Web Development Crash Course",link:"https://www.youtube.com/watch?v=UB1O30fR-EE",desc:"1-hour HTML crash course. Best starting point for complete web dev beginners."},
      {name:"freeCodeCamp — Responsive Web Design (4 hrs)",link:"https://www.youtube.com/watch?v=srvUrASNj0s",desc:"4-hour complete CSS and HTML course. Build real projects from scratch."},
      {name:"Web Dev Simplified — JavaScript for Beginners",link:"https://www.youtube.com/@WebDevSimplified",desc:"Crystal-clear JS explanations. Best channel for understanding JavaScript fundamentals deeply."},
      {name:"Fireship — 100 Seconds of Code Playlist",link:"https://www.youtube.com/playlist?list=PL0vfts4VzfNiI1BsIK5u7LpPaIDKMJIDN",desc:"100-second explainers for every web technology. Perfect for quick concepts and discovery."},
      {name:"freeCodeCamp — JavaScript Full Course (7 hrs)",link:"https://www.youtube.com/watch?v=jS4aFq5-91M",desc:"Beau Carnes' 7-hour complete JavaScript course. ES6+, DOM, async, APIs from scratch."},
      {name:"The Odin Project — Git Crash Course",link:"https://www.youtube.com/watch?v=RGOj5yH7evk",desc:"freeCodeCamp's complete Git & GitHub crash course. Essential for every developer."},
      {name:"Traversy Media — CSS Grid Crash Course",link:"https://www.youtube.com/watch?v=0xMQfnTU6oo",desc:"CSS Grid fundamentals in 45 minutes. Build complex layouts with confidence."},
      {name:"Traversy Media — Flexbox in 20 Minutes",link:"https://www.youtube.com/watch?v=JJSoEo8JSnc",desc:"Master CSS Flexbox in 20 minutes. Essential for all modern web layouts."},
    ],
    AI:[
      {name:"freeCodeCamp — Machine Learning for Everybody (4 hrs)",link:"https://www.youtube.com/watch?v=i_LwzRVP7bg",desc:"4-hour beginner ML course. No math prerequisites. Practical Python examples throughout."},
      {name:"3Blue1Brown — Neural Networks Playlist",link:"https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi",desc:"The best visual explanation of how neural networks work. Essential first watching for AI."},
      {name:"Sentdex — Python + ML Projects from Scratch",link:"https://www.youtube.com/@sentdex",desc:"Hands-on Python + ML tutorials. Natural language processing, trading bots, neural nets."},
      {name:"Google — ML Crash Course Videos",link:"https://developers.google.com/machine-learning/crash-course",desc:"Google's free ML video series with exercises. Covers all foundational concepts with TensorFlow."},
      {name:"freeCodeCamp — Python for Data Science (12 hrs)",link:"https://www.youtube.com/watch?v=LHBE0uU3bZQ",desc:"12-hour complete Python for data science. Pandas, NumPy, Matplotlib, Seaborn. Great for AI start."},
      {name:"Krish Naik — ML Algorithms Playlist",link:"https://www.youtube.com/@krishnaik06",desc:"Free ML algorithm deep dives with intuition, math, and Python code. Linear reg to XGBoost."},
      {name:"Corey Schafer — Python OOP for Data Science",link:"https://www.youtube.com/@coreyms",desc:"Python fundamentals and OOP. Best free Python tutorials with clarity and depth."},
      {name:"freeCodeCamp — Data Analysis with Python (12 hrs)",link:"https://www.youtube.com/watch?v=r-uOLxNrNk8",desc:"NumPy, Pandas, Matplotlib, Seaborn. Full data analysis course by Santiago Basulto."},
    ],
  },
  Intermediate:{
    Cybersecurity:[
      {name:"IppSec — HackTheBox Walkthroughs",link:"https://www.youtube.com/@ippsec",desc:"Gold standard for pen testing. Every HackTheBox machine explained in exhaustive detail."},
      {name:"LiveOverflow — Web Security & Binary Exploitation",link:"https://www.youtube.com/@LiveOverflow",desc:"Deep technical dives: web security, binary exploitation, CTF research. Expert-level explanations."},
      {name:"John Hammond — Malware Analysis & CTFs",link:"https://www.youtube.com/@_JohnHammond",desc:"Real-world malware analysis, CTF walkthroughs, TryHackMe and HTB challenges."},
      {name:"TCM Security — Practical API Hacking",link:"https://www.youtube.com/@TCMSecurityAcademy",desc:"OWASP API Top 10 exploitation techniques. REST API pentesting methodology."},
      {name:"STÖK — Bug Bounty Methodology",link:"https://www.youtube.com/@STOKfredrik",desc:"Professional bug bounty hunting workflow. Recon, SSRF, XSS, IDOR in real programs."},
      {name:"NetworkChuck — Active Directory Lab Setup",link:"https://www.youtube.com/watch?v=pKtDQtsubio",desc:"Build your own AD lab for free. Kerberoasting, BloodHound, Pass-the-Hash practice."},
      {name:"HackerSploit — Metasploit Full Course",link:"https://www.youtube.com/playlist?list=PLBf0hzazHTGN31ZPTzBbk70bohTYT7HSm",desc:"Complete Metasploit Framework course. Auxiliary modules, exploits, post-exploitation."},
      {name:"NahamSec — Live Bug Bounty Hunting",link:"https://www.youtube.com/@NahamSec",desc:"Live bug bounty hunting sessions. Real recon, finding real vulnerabilities on public programs."},
    ],
    "Full Stack":[
      {name:"Academind — React Complete Guide (YouTube)",link:"https://www.youtube.com/@academind",desc:"In-depth React, Next.js, TypeScript tutorials. Complete real-world projects with Maximilian."},
      {name:"Theo (t3.gg) — Modern Full Stack Architecture",link:"https://www.youtube.com/@t3dotgg",desc:"TypeScript full-stack: Next.js, tRPC, Prisma, Tailwind. Production-quality patterns."},
      {name:"The Primeagen — Systems, DSA & Performance",link:"https://www.youtube.com/@ThePrimeagen",desc:"Performance, systems thinking, algorithms, career advice from a Netflix senior engineer."},
      {name:"Kevin Powell — Advanced CSS & Animations",link:"https://www.youtube.com/@KevinPowell",desc:"Best CSS educator on YouTube. Container queries, :has(), grid, custom properties, animations."},
      {name:"Fireship — Next.js 14 in 100 Seconds + Full Course",link:"https://www.youtube.com/watch?v=Sklc_fQBmcs",desc:"Next.js app router, RSC, server actions explained. Fireship's signature high-speed clarity."},
      {name:"Web Dev Simplified — Node.js & Express Full Course",link:"https://www.youtube.com/watch?v=Oe421EPjeBE",desc:"Node.js + Express REST API from zero to deployment. Authentication, CRUD, middleware."},
      {name:"Traversy Media — MERN Stack Project Tutorial",link:"https://www.youtube.com/watch?v=-0exw-9YJBo",desc:"Build a full MERN stack app: MongoDB, Express, React, Node.js with JWT authentication."},
      {name:"ByteByteGo — System Design for Developers",link:"https://www.youtube.com/@ByteByteGo",desc:"System design: databases, caching, load balancing, microservices. Essential for senior roles."},
    ],
    AI:[
      {name:"Andrej Karpathy — Neural Networks: Zero to Hero",link:"https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ",desc:"Build GPT from scratch. The definitive intermediate ML video series. Watch everything here."},
      {name:"Yannic Kilcher — AI Paper Walkthroughs",link:"https://www.youtube.com/@YannicKilcher",desc:"Deep dives into transformers, LLMs, and AI research papers. Graduate-level breakdowns."},
      {name:"Two Minute Papers — AI Research Explained",link:"https://www.youtube.com/@TwoMinutePapers",desc:"Latest AI research made accessible. Essential for staying current with state-of-the-art."},
      {name:"StatQuest — Stats & ML Visual Explanations",link:"https://www.youtube.com/@statquest",desc:"Statistics and ML with unparalleled clarity, humor, and visual intuition. Math side of AI."},
      {name:"Andrej Karpathy — Let's Build GPT from Scratch",link:"https://www.youtube.com/watch?v=kCc8FmEb1nY",desc:"3.5-hour deep dive building a character-level GPT. The best transformer tutorial ever made."},
      {name:"freeCodeCamp — TensorFlow Full Course (7 hrs)",link:"https://www.youtube.com/watch?v=tPYj3fFJGjk",desc:"Complete TensorFlow 2.0 and Keras course. CNNs, RNNs, transfer learning, GANs."},
      {name:"Krish Naik — NLP Playlist with Transformers",link:"https://www.youtube.com/@krishnaik06",desc:"NLP from NLTK to BERT to LangChain. Practical Indian-English tutorials. Free and comprehensive."},
      {name:"Patrick Loeber — PyTorch Tutorial for Deep Learning",link:"https://www.youtube.com/watch?v=c36lUUr864M",desc:"Python Engineer's PyTorch series. Tensors, autograd, CNNs, RNNs, GANs from scratch."},
    ],
  },
  Advanced:{
    Cybersecurity:[
      {name:"STÖK — Advanced Bug Bounty & Web Security",link:"https://www.youtube.com/@STOKfredrik",desc:"Expert bug bounty: chaining vulnerabilities, advanced recon, building custom tooling."},
      {name:"13Cubed — Windows Forensics & DFIR",link:"https://www.youtube.com/@13Cubed",desc:"Expert Windows forensics, memory analysis with Volatility, incident response methodology."},
      {name:"VbScrub — Active Directory Attacks",link:"https://www.youtube.com/@VbScrub",desc:"Advanced AD exploitation: Kerberoasting, AS-REP Roasting, DCSync, BloodHound attack paths."},
      {name:"HackTheBox — Official Walkthroughs",link:"https://www.youtube.com/@HackTheBox",desc:"Official HTB advanced machine walkthroughs and penetration testing technique deep dives."},
      {name:"Seytonic — Advanced Hardware & RF Hacking",link:"https://www.youtube.com/@Seytonic",desc:"Flipper Zero, software-defined radio, hardware implants, RF attacks. Advanced physical security."},
      {name:"SANS Institute — Free Expert Webcasts",link:"https://www.sans.org/webcasts/",desc:"SANS expert-level free webcast recordings: threat hunting, forensics, red team ops."},
      {name:"Black Hat — Conference Talks (YouTube)",link:"https://www.youtube.com/@BlackHatOfficialYT",desc:"Black Hat USA/Europe official talks. Cutting-edge research from top security researchers worldwide."},
      {name:"DEF CON — Full Conference Talks",link:"https://www.youtube.com/@DEFCONConference",desc:"DEF CON hacker conference talks. Every major vulnerability and technique gets presented here first."},
    ],
    "Full Stack":[
      {name:"Lex Fridman — Engineering Deep Dives",link:"https://www.youtube.com/@lexfridman",desc:"Long-form interviews with top engineers from Google, OpenAI, Tesla, Meta. Career inspiration."},
      {name:"MIT OpenCourseWare — Distributed Systems",link:"https://www.youtube.com/@mitocw",desc:"MIT 6.824 distributed systems lectures. Raft, MapReduce, Zookeeper. Graduate level, free."},
      {name:"Hussein Nasser — Backend Engineering Masterclass",link:"https://www.youtube.com/@hnasr",desc:"Advanced backend: connection pooling, TCP deep dives, database proxies, protocol internals."},
      {name:"ByteByteGo — Advanced System Design",link:"https://www.youtube.com/@ByteByteGo",desc:"Senior-level system design: sharding, consistent hashing, event-driven arch, CQRS, Saga."},
      {name:"Fireship — Docker & Kubernetes Full Course",link:"https://www.youtube.com/watch?v=gAkwW2tuIqE",desc:"Complete containerization course. Docker, Kubernetes, Helm, production deployment patterns."},
      {name:"TechWorld with Nana — DevOps Full Course",link:"https://www.youtube.com/@TechWorldwithNana",desc:"Complete DevOps roadmap: Docker, Kubernetes, CI/CD, Terraform, Prometheus. All free."},
      {name:"Computerphile — Database Internals",link:"https://www.youtube.com/@Computerphile",desc:"B-trees, query planners, transactions, ACID, database storage engines explained visually."},
      {name:"Arpit Bhayani — System Design Deep Dives",link:"https://www.youtube.com/@ArpitBhayani",desc:"Engineering design deep dives: rate limiting, Redis internals, Kafka architecture. MNC-level."},
    ],
    AI:[
      {name:"Stanford CS229 — Full ML Lectures (Free)",link:"https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU",desc:"Andrew Ng's Stanford ML graduate course. Math-heavy, complete, the gold standard."},
      {name:"MIT 6.S191 — Deep Learning (Full Course)",link:"https://www.youtube.com/playlist?list=PLtBw6njQRU-rwp5__7C0oIVt26ZgjG9NI",desc:"MIT annual deep learning intensive. TensorFlow, RL, GANs, diffusion models, LLMs."},
      {name:"HuggingFace — Fine-tuning LLMs & Transformers",link:"https://www.youtube.com/@HuggingFace",desc:"Official HuggingFace: transformers, fine-tuning, PEFT, LoRA, Spaces deployment."},
      {name:"Lex Fridman — AI Research Interviews",link:"https://www.youtube.com/@lexfridman",desc:"4-6 hour deep interviews: Sam Altman, Yann LeCun, Andrej Karpathy, Ilya Sutskever."},
      {name:"Umar Jamil — LLM Paper Implementation",link:"https://www.youtube.com/@umarjamilai",desc:"Implement LLaMA, BERT, Stable Diffusion from scratch with PyTorch. Best paper-to-code channel."},
      {name:"Aladdin Persson — Cutting Edge AI Papers Implemented",link:"https://www.youtube.com/@AladdinPersson",desc:"GANs, transformers, object detection implemented from scratch. Prolific and precise."},
      {name:"CS224N — Stanford NLP with Deep Learning",link:"https://www.youtube.com/playlist?list=PLoROMvodv4rOSH4v6133s9LFPRHjEmbmJ",desc:"Stanford's NLP graduate course. Transformers, BERT, GPT, question answering, coreference."},
      {name:"Full Stack Deep Learning (Free Course)",link:"https://fullstackdeeplearning.com/",desc:"Production ML: experiment tracking, model serving, deployment, MLOps. Free course from UC Berkeley."},
    ],
  },
};
// ═══════════════════════════════════════════════════════════
// 📝 QUIZ_DATA — Quiz questions per domain
// Format: {q:"Question?", opts:["A","B","C","D"], a:0, exp:"Explanation"}
// a = index of correct answer (0=A, 1=B, 2=C, 3=D)
// Domains: Cybersecurity | "Full Stack" | AI
// ═══════════════════════════════════════════════════════════
const QUIZ_DATA={
  Cybersecurity:[
    // ── LEVEL 1–10: Foundations ──
    {q:"Which attack injects malicious scripts into web pages viewed by other users?",opts:["Cross-Site Scripting (XSS)    ","SQL injection on database side","DNS spoofing on network layer ","ARP poisoning on local network"],a:0,exp:"XSS injects scripts into pages trusted by the browser, running in victim's context."},
    {q:"Which protocol secures data by encrypting the transport layer connection?",opts:["FTP on port 21 cleartext   ","SMTP on port 25 plaintext  ","TLS over TCP port 443 HTTPS","UDP on port 53 DNS queries "],a:2,exp:"TLS (Transport Layer Security) encrypts data between client and server, replacing SSL."},
    {q:"What is the main purpose of a firewall in network security?",opts:["Encrypts all outgoing traffic","Monitors and filters network ","Patches OS vulnerabilities   ","Scans disk files for malware "],a:1,exp:"Firewalls filter incoming/outgoing traffic based on rules, blocking unauthorized access."},
    {q:"A phishing attack primarily targets victims by?",opts:["Exploiting software zero-days ","Flooding servers with traffic ","Tricking them via fake emails ","Scanning ports on the network "],a:2,exp:"Phishing uses deceptive emails/sites to steal credentials or install malware via social engineering."},
    {q:"Which scanning technique sends a SYN packet but never completes the handshake?",opts:["UDP scan on open port range  ","XMAS scan with FIN flag set  ","SYN stealth scan half-open   ","FTP bounce scan via proxy    "],a:2,exp:"SYN scan (half-open) sends SYN, gets SYN-ACK, then RST — avoids full connection logging."},
    {q:"What does 'salting' a password before hashing achieve?",opts:["Speeds up the hashing process  ","Prevents rainbow table attacks ","Doubles the encryption strength","Stores password in plaintext   "],a:1,exp:"A random salt added before hashing means identical passwords produce different hashes, defeating precomputed tables."},
    {q:"Which tool is primarily used for packet capture and traffic analysis?",opts:["Metasploit exploit framework ","Nmap port scanning utility   ","Wireshark network analyzer   ","Burp Suite web proxy tool    "],a:2,exp:"Wireshark captures and analyzes network packets in real time with deep protocol inspection."},
    {q:"What is a 'zero-day' vulnerability?",opts:["A known bug patched last year ","Flaw unknown to vendor, no fix","A low-severity CVE severity   ","An expired SSL certificate    "],a:1,exp:"Zero-day: vulnerability unknown to the vendor, so no patch exists — highly valuable to attackers."},
    {q:"What does HTTPS enforce that plain HTTP does not?",opts:["Faster page load performance  ","Encrypted and verified channel","More HTTP request headers sent","Server-side session storage   "],a:1,exp:"HTTPS uses TLS to encrypt traffic and authenticate the server, preventing eavesdropping and tampering."},
    {q:"In network security, what does 'port scanning' reveal?",opts:["Usernames and plaintext creds   ","Open ports and running services ","Database schemas on the server  ","Firewall administrator passwords"],a:1,exp:"Port scanning probes a target for open ports, revealing what services are running and potentially exploitable."},
    // ── LEVEL 11–20: Intermediate ──
    {q:"OAuth 2.0 'Implicit Flow' was deprecated primarily because?",opts:["It was too slow for mobile apps","Access tokens exposed in URL   ","It lacked PKCE code verifier   ","It required client secret key  "],a:1,exp:"Implicit flow returned access tokens in URL fragment — tokens leaked via browser history, referrer headers."},
    {q:"What distinguishes a 'white-box' pentest from a 'black-box' pentest?",opts:["White-box uses automated tools  ","Tester has full internal details","Black-box tests only web apps   ","White-box requires no consent   "],a:1,exp:"White-box: tester has full architecture/code knowledge. Black-box: tester has zero internal knowledge."},
    {q:"Which attack exploits trust between systems to execute commands remotely?",opts:["SQL injection on login form   ","DDoS flooding DNS resolvers   ","Command injection via input   ","SSRF via server-side requests "],a:2,exp:"Command injection: user input passed to shell without sanitization, executing arbitrary OS commands."},
    {q:"What is the purpose of 'network segmentation' in security architecture?",opts:["Speeds up inter-VLAN routing   ","Limits blast radius of breaches","Encrypts all DNS traffic sent  ","Prevents all DDoS attack types "],a:1,exp:"Segmentation divides networks into zones — compromise of one segment cannot easily spread to others."},
    {q:"Which hash algorithm is cryptographically broken and should not be used?",opts:["SHA-256 secure algorithm      ","Argon2id for password storage ","BLAKE2 fast and secure choice ","MD5 collision vulnerable hash "],a:3,exp:"MD5 has known collision attacks since 2004 — two different inputs can produce the same MD5 hash."},
    {q:"In Metasploit, 'msfvenom' is used for?",opts:["Scanning hosts on the network ","Exploiting web vulnerabilities","Generating custom payloads    ","Managing active shell sessions"],a:2,exp:"msfvenom generates and encodes payloads (reverse shells, bind shells) for embedding in exploits."},
    {q:"What does 'Security through Obscurity' mean and why is it weak?",opts:["Hiding source code is secure   ","Relying on secrecy of design   ","Encrypting config files helps  ","Using rare programming language"],a:1,exp:"Security through obscurity relies on hiding system details rather than real security — fails once discovered."},
    {q:"Which attack abuses DNS to redirect traffic to a malicious server?",opts:["ARP spoofing on Layer 2 only  ","DNS cache poisoning attack    ","BGP hijacking at ISP level    ","IP spoofing forged source addr"],a:1,exp:"DNS cache poisoning inserts forged DNS records, redirecting users to attacker-controlled servers."},
    {q:"What does 'CVE' stand for in vulnerability management?",opts:["Common Vulnerability Exposure ","Cyber Vulnerability Enumerated","Common Vulnerabilities Exposed","Common Vulnerabilities & Enum "],a:3,exp:"CVE = Common Vulnerabilities and Exposures — a standardized identifier for publicly known vulnerabilities."},
    {q:"In SSL/TLS, 'certificate pinning' protects against?",opts:["Slow TLS handshake overhead   ","MITM via rogue CA certificates","Expired certificate errors    ","Weak cipher suite negotiation "],a:1,exp:"Certificate pinning hardcodes expected cert/public key — even a rogue CA cert won't be trusted."},
    // ── LEVEL 21–30: Advanced ──
    {q:"What is 'lateral movement' in a cyberattack lifecycle?",opts:["Initial foothold via phishing  ","Attacker spreads across network","Exfiltrating data to C2 server ","Covering tracks after the hack "],a:1,exp:"Lateral movement: attacker uses compromised host to access other systems within the same network."},
    {q:"Which Active Directory attack requests service tickets to crack offline?",opts:["Pass-the-Hash using NTLM creds","DCSync replication of hashes  ","Kerberoasting TGS ticket crack","AS-REP roasting no preauth    "],a:2,exp:"Kerberoasting requests TGS tickets for SPN accounts and cracks them offline using hashcat/John."},
    {q:"What is 'OPSEC' (Operational Security) in offensive security?",opts:["Encrypted VPN connection usage ","Protecting attacker's identity ","Scanning targets without logs  ","Deleting all malware binaries  "],a:1,exp:"OPSEC: protecting operational information from adversaries — TTPs, C2 infra, identity concealment."},
    {q:"Which OWASP category covers insecure default configurations?",opts:["Injection vulnerability class  ","Security Misconfiguration A05  ","Broken Access Control A01      ","Cryptographic Failures A02     "],a:1,exp:"OWASP A05:2021 Security Misconfiguration covers default creds, exposed configs, unnecessary features."},
    {q:"What is 'C2' (Command and Control) in malware architecture?",opts:["Code compilation framework      ","Server controlling infected bots","Credential cracking utility     ","Container orchestration system  "],a:1,exp:"C2 is the server infrastructure attackers use to communicate with and control compromised machines."},
    {q:"Mimikatz tool is primarily used for?",opts:["Web application fuzzing tasks  ","Network port discovery scans   ","Extracting credentials from RAM","Generating SSL certificates now"],a:2,exp:"Mimikatz dumps plaintext passwords, NTLM hashes, and Kerberos tickets from Windows LSASS memory."},
    {q:"In OWASP, 'Insecure Deserialization' allows attackers to?",opts:["Read arbitrary database tables  ","Execute code via crafted objects","Forge JWT authentication tokens ","Bypass TLS certificate checks   "],a:1,exp:"Deserializing untrusted data can trigger arbitrary code execution if object gadget chains exist."},
    {q:"What is 'DKIM' and what does it authenticate in email?",opts:["DNS-based IP reputation check ","Digital signature on email msg","Domain-level spam filter rule ","Encrypted email body content  "],a:1,exp:"DKIM adds a cryptographic signature to email headers, verifying the message wasn't tampered in transit."},
    {q:"Which vulnerability class lets attackers access unauthorized object IDs?",opts:["SQL injection via login forms  ","XSS via reflected user input   ","IDOR via direct object refs    ","CSRF via forged form requests  "],a:2,exp:"IDOR (Insecure Direct Object Reference): changing /api/orders/1001 to /1002 to access another user's data."},
    {q:"What does a 'WAF bypass' technique typically exploit?",opts:["Unpatched OS kernel zero-days  ","Parser inconsistencies in WAF  ","Weak SSL certificate chains    ","Open firewall ports on server  "],a:1,exp:"WAF bypasses exploit rule gaps — HTTP smuggling, encoding variants, protocol-level inconsistencies."},
    // ── LEVEL 31–40: Expert ──
    {q:"What is 'Return-Oriented Programming' (ROP) used to bypass?",opts:["SQL injection input validation ","WAF blocking malicious payloads","NX/DEP non-executable memory   ","TLS certificate pinning checks "],a:2,exp:"ROP chains existing code gadgets ending in 'ret' — bypasses NX/DEP without injecting new shellcode."},
    {q:"'Confused Deputy' attack exploits?",opts:["Privilege escalation via sudo  ","A privileged program tricked   ","Session token replay attacks   ","Race condition in file handling"],a:1,exp:"Confused deputy: a privileged program (deputy) is manipulated into misusing its authority on attacker's behalf."},
    {q:"In Kubernetes, which misconfiguration leads to container escape?",opts:["Missing resource limits set    ","Privileged pod with host access","Exposed NodePort service type  ","Missing network policy rules   "],a:1,exp:"Privileged containers share host namespaces and capabilities — a compromised pod can escape to the node."},
    {q:"What is 'SSRF to RCE' escalation path?",opts:["SSRF scans internal services   ","SSRF hits metadata to get creds","SSRF chain exploits app servers","SSRF bypasses rate limiting    "],a:2,exp:"SSRF can hit internal endpoints, cloud metadata (169.254.169.254), or internal Redis/Memcached for RCE."},
    {q:"Which technique evades EDR by loading malicious DLLs into trusted processes?",opts:["Process hollowing of DLL file  ","DLL sideloading via legit app  ","Reflective PE injection method ","All are valid DLL hijack forms "],a:3,exp:"DLL sideloading, reflective injection, and hollowing all load malicious code into trusted process context."},
    {q:"'DCSync' attack in Active Directory allows?",opts:["Resetting AD user passwords    ","Replicating hashes like a DC   ","Kerberos golden ticket forge   ","Remote LDAP query execution    "],a:1,exp:"DCSync mimics a Domain Controller replication request, pulling NTLM hashes for any AD account (including krbtgt)."},
    {q:"What does 'differential privacy' protect against in data releases?",opts:["Re-identification of individuals","SQL injection in analytics DB   ","Insider threats at data center  ","Adversarial ML model attacks    "],a:0,exp:"Differential privacy adds calibrated noise, ensuring output doesn't reveal whether an individual is in dataset."},
    {q:"CORS misconfiguration 'Access-Control-Allow-Origin: *' risks?",opts:["Exposing internal network maps  ","Any origin reading API responses","Leaking TLS session keys        ","Bypassing server-side auth      "],a:1,exp:"Wildcard CORS allows any origin to read API responses — dangerous for authenticated endpoints with cookies."},
    {q:"Which Linux privilege escalation technique exploits SUID binaries?",opts:["Using writable cron job scripts ","Running SUID root shell escape  ","Exploiting sudo misconfig rules ","All three are valid techniques  "],a:3,exp:"SUID abuse, sudo -l misconfigs, and writable cron jobs are all classic Linux privilege escalation paths."},
    {q:"'Time-of-Check to Time-of-Use' (TOCTOU) is what class of vulnerability?",opts:["Race condition security flaw   ","Buffer overflow memory exploit ","Integer overflow in arithmetic ","Format string in printf calls  "],a:0,exp:"TOCTOU: check file permission, then attacker swaps file before use — classic race condition vulnerability."},
    // ── LEVEL 41–50: FAANG/MNC Level ──
    {q:"What is 'supply chain poisoning' in modern attack campaigns?",opts:["Attacking hardware supply chain","Compromising build/publish flow","SQL injection on vendor portal ","Spear phishing vendor employees"],a:1,exp:"Supply chain poisoning inserts malicious code into libraries/packages, distributed to all downstream users."},
    {q:"In cryptography, what does 'forward secrecy' (PFS) guarantee?",opts:["Past sessions safe if key leaked","Faster key exchange performance ","Unlimited session key lifetime  ","Mutual authentication of peers  "],a:0,exp:"PFS uses ephemeral keys (ECDHE) — compromise of long-term private key doesn't decrypt past sessions."},
    {q:"'AMSI bypass' in Windows attacks circumvents?",opts:["Windows Defender firewall rules","Antimalware Scan Interface hook","UAC elevation prompt dialog    ","AppLocker execution policies   "],a:1,exp:"AMSI: Microsoft's antimalware scanning integration. Bypasses (patching amsi.dll) allow malicious scripts to run."},
    {q:"What is 'living off trusted sites' (LOTS) technique?",opts:["Using LOLBins already installed","Abusing legit CDNs for C2/data ","Exploiting trusted certificates","Pivoting via legitimate VPN    "],a:1,exp:"LOTS: use legitimate cloud services (GitHub, Dropbox, Slack) for C2 — hard to block without business impact."},
    {q:"Which attack on JWT uses 'algorithm confusion' (RS256 → HS256)?",opts:["Forging token using public key ","Cracking the JWT secret offline","Replaying expired JWT tokens   ","Stealing JWT from localStorage "],a:0,exp:"If server uses RS256 public key as HS256 secret — attacker signs JWT with known public key. Server accepts it."},
    {q:"In bug bounty, 'P1 critical' SSRF is typically one that?",opts:["Reads /etc/passwd file content ","Achieves internal RCE or IMDS  ","Scans internal IP address range","Returns error with stack trace "],a:1,exp:"Critical SSRF: access to cloud IMDS metadata (AWS keys), internal Redis/Memcached, or direct RCE path."},
    {q:"What is 'Harvest Now, Decrypt Later' (HNDL) quantum threat?",opts:["Cracking current RSA-2048 keys  ","Storing ciphertext to decrypt   ","Breaking TLS in real time now   ","Quantum brute force of AES-128  "],a:1,exp:"HNDL: adversaries store today's encrypted traffic hoping future quantum computers can decrypt it retroactively."},
    {q:"GraphQL introspection in production apps risks?",opts:["Slow API response performance  ","Exposing entire API schema data","Breaking client query caching  ","Bypassing GraphQL rate limits  "],a:1,exp:"Introspection reveals all types, fields, and queries — attackers map API attack surface completely."},
    {q:"Which side-channel attack extracts keys via power consumption analysis?",opts:["Timing attack on string compare","Differential power analysis DPA","Cache timing Flush+Reload side ","Rowhammer DRAM bit-flip attack "],a:1,exp:"DPA (Differential Power Analysis): measure power traces during crypto ops to extract keys statistically."},
    {q:"'Skeleton Key' malware in Active Directory achieves?",opts:["Creates new domain admin account","Patches LSASS to accept any pw  ","Replicates krbtgt hash offline  ","Disables Windows Defender AV    "],a:1,exp:"Skeleton Key patches LSASS on the DC — a magic password works for any account while real passwords still work."},
  ],
  "Full Stack":[
    // ── LEVEL 1–10: Foundations ──
    {q:"What is the correct HTTP method to fully replace an existing resource?",opts:["POST creates a new resource    ","PATCH partially updates fields ","DELETE removes the resource    ","PUT replaces the full resource "],a:3,exp:"PUT is idempotent and replaces the entire resource. PATCH only updates specified fields partially."},
    {q:"In JavaScript, 'var' differs from 'let' primarily because?",opts:["var is block-scoped by default ","let is function-scoped globally","var is function-scoped, hoisted","let cannot be reassigned later "],a:2,exp:"var is function-scoped and hoisted (as undefined). let is block-scoped and not hoisted to usable value."},
    {q:"What does the CSS 'box model' define for every HTML element?",opts:["Color and font of the element   ","Content, padding, border, margin","Z-index and display property    ","Flex container alignment rules  "],a:1,exp:"The box model: content area + padding + border + margin determines the element's total rendered space."},
    {q:"In React, 'props' are best described as?",opts:["Internal component state data  ","Read-only data passed by parent","Mutable values inside component","DOM event handler references   "],a:1,exp:"Props are immutable from child's perspective — data flows down from parent. Child cannot modify own props."},
    {q:"What is 'semantic HTML' and why does it matter?",opts:["HTML with inline CSS styles     ","Tags that convey meaning/purpose","HTML minimized for performance  ","Dynamic HTML generated by JS    "],a:1,exp:"Semantic HTML (article, nav, main) conveys meaning to browsers, screen readers, and search engines."},
    {q:"Which SQL clause filters results AFTER a GROUP BY aggregation?",opts:["WHERE filters before grouping  ","ORDER BY sorts the result set  ","HAVING filters after grouping  ","LIMIT restricts row count only "],a:2,exp:"HAVING is like WHERE but applied after aggregation — WHERE cannot reference aggregate functions like COUNT."},
    {q:"In CSS Flexbox, 'justify-content' controls alignment on which axis?",opts:["Cross axis (perpendicular)     ","Both axes simultaneously       ","Main axis (direction of flex)  ","Z-axis (depth stacking order)  "],a:2,exp:"justify-content aligns items along the main axis (row: horizontal, column: vertical)."},
    {q:"What does 'async/await' in JavaScript simplify?",opts:["Synchronous loop performance   ","Promise chaining readability   ","DOM manipulation operations    ","Module import/export syntax    "],a:1,exp:"async/await is syntactic sugar over Promises, making async code read like synchronous code without .then chains."},
    {q:"Which HTTP status code means 'redirect to another URL permanently'?",opts:["302 Found temporary redirect  ","304 Not Modified cache valid  ","301 Moved Permanently redirect","307 Temporary redirect with   "],a:2,exp:"301 Moved Permanently tells browsers and SEO crawlers the resource has moved to a new URL forever."},
    {q:"What does 'responsive web design' use to adapt layouts?",opts:["JavaScript to detect screen size","CSS media queries breakpoints   ","Server-side UA string detection ","Different HTML files per device "],a:1,exp:"CSS media queries target viewport widths/device features to apply different styles at different breakpoints."},
    // ── LEVEL 11–20: Intermediate ──
    {q:"What does 'database ACID' guarantee in transactions?",opts:["Fast read performance on joins  ","Automatic, Consistent, Isolated ","Atomicity, Consistency, Isolated","Availability for distributed DB "],a:2,exp:"ACID: Atomicity (all-or-nothing), Consistency (valid state), Isolation (concurrent safe), Durability (persisted)."},
    {q:"In Node.js, what is the 'event loop' responsible for?",opts:["Parsing JavaScript source files","Managing non-blocking I/O ops  ","Compiling TypeScript to JS     ","Handling DOM rendering updates "],a:1,exp:"The event loop handles async callbacks, allowing Node.js to perform non-blocking I/O despite being single-threaded."},
    {q:"What is the purpose of 'Docker containers' in development?",opts:["Replacing virtual machines only","Packaging app with dependencies","Monitoring app performance live","Scaling databases automatically"],a:1,exp:"Containers bundle app code + dependencies + config — run identically on any OS that has Docker installed."},
    {q:"In REST APIs, what does 'idempotent' mean for an HTTP method?",opts:["Always returns 200 OK response  ","Multiple identical requests same","Requires authentication header  ","Supports pagination parameters  "],a:1,exp:"Idempotent: calling the same request multiple times produces the same result. GET, PUT, DELETE are idempotent."},
    {q:"TypeScript's main benefit over plain JavaScript is?",opts:["Faster JavaScript execution    ","Smaller bundle sizes in prod   ","Static type checking at compile","Built-in async/await support   "],a:2,exp:"TypeScript catches type errors at compile time, not runtime — prevents entire classes of bugs before execution."},
    {q:"What does the 'virtual DOM' in React do on state changes?",opts:["Directly mutates the real DOM  ","Diffs old/new vDOM, patches DOM","Sends updated HTML to server   ","Refreshes the entire browser   "],a:1,exp:"React builds virtual DOM tree, diffs with previous version, then applies minimal real DOM mutations in batches."},
    {q:"What is 'connection pooling' in backend applications?",opts:["Caching API responses in Redis ","Reusing existing DB connections","Load balancing across DB nodes ","Encrypting database connections"],a:1,exp:"Connection pooling maintains a pool of open DB connections, reusing them instead of opening new TCP+auth per query."},
    {q:"Which CSS unit is relative to the root element's font size?",opts:["em relative to parent font     ","px absolute pixel measurement  ","rem relative to root font size ","vw relative to viewport width  "],a:2,exp:"rem (root em) is always relative to the <html> element's font-size, unaffected by nested element sizes."},
    {q:"In web security, what does 'Content-Security-Policy' header enforce?",opts:["Forces HTTPS on all requests     ","Whitelists allowed script sources","Prevents clickjacking via iframe ","Sets cookie security attributes  "],a:1,exp:"CSP defines trusted sources for scripts, styles, images — browser blocks resources from unlisted origins."},
    {q:"What is the purpose of 'webpack' in modern web development?",opts:["Running Node.js server processes","A CSS preprocessor utility      ","Module bundler for JS assets    ","JavaScript linting framework    "],a:2,exp:"Webpack bundles JS modules (and assets) into optimized files for browsers, with code splitting and tree shaking."},
    // ── LEVEL 21–30: Advanced ──
    {q:"What does 'server-side rendering' (SSR) improve compared to CSR?",opts:["Reduces server processing load  ","Eliminates need for JavaScript  ","First contentful paint and SEO  ","Simplifies client-side routing  "],a:2,exp:"SSR sends fully rendered HTML from server — faster First Contentful Paint and search engine indexability."},
    {q:"In PostgreSQL, what does a 'covering index' provide?",opts:["Indexes across multiple tables ","Query satisfied from index only","Auto-updating statistics data  ","Foreign key constraint checks  "],a:1,exp:"Covering index includes all columns a query needs — query reads index only, never touching the table heap."},
    {q:"What is 'code splitting' in JavaScript bundle optimization?",opts:["Splitting CSS from JS bundles  ","Separating dev and prod configs","Loading only needed code chunks","Dividing team's codebase files "],a:2,exp:"Code splitting divides bundle into smaller chunks loaded on demand — reduces initial bundle size and load time."},
    {q:"What does 'optimistic locking' prevent in concurrent DB updates?",opts:["Deadlocks in transaction queue ","Lost updates via version check ","SQL injection in update queries","N+1 query performance problem  "],a:1,exp:"Optimistic locking checks a version number before update — if changed, reject and retry. No row-level locking."},
    {q:"In GraphQL, what is a 'resolver function'?",opts:["Input validation middleware     ","Function that fetches field data","GraphQL schema type definition  ","Authorization middleware layer  "],a:1,exp:"Resolver: a function that returns data for each field in a GraphQL schema — the execution engine of GraphQL."},
    {q:"What is 'micro-frontend' architecture?",opts:["Splitting backend microservices ","Independent frontend team apps  ","Rendering on edge nodes only    ","Micro CSS animation framework   "],a:1,exp:"Micro-frontends decompose a UI into independently developed, deployed, and tested frontend applications per team."},
    {q:"Which React hook should replace 'componentDidMount' in functional components?",opts:["useRef for DOM element access  ","useCallback for memoized funcs ","useMemo for computed values    ","useEffect with empty dependency"],a:3,exp:"useEffect(() => { ... }, []) runs after first render only — equivalent to componentDidMount lifecycle."},
    {q:"What does 'database sharding' achieve?",opts:["Improves single-node query speed","Horizontal data partitioning    ","Automatic index optimization    ","Master-replica read scaling     "],a:1,exp:"Sharding splits data across multiple DB instances horizontally — each shard holds a subset of all data."},
    {q:"What is 'service worker' in Progressive Web Apps?",opts:["A Node.js background process   ","A browser script for offline   ","A server-side rendering worker ","A WebSocket connection handler "],a:1,exp:"Service workers intercept network requests, enabling offline caching, background sync, and push notifications."},
    {q:"In CSS, what does 'specificity' determine?",opts:["Order of CSS file loading      ","Animation priority and timing  ","Which CSS rule wins conflicts  ","Browser rendering performance  "],a:2,exp:"Specificity is a weight system — ID > class > element. Higher specificity wins when rules conflict."},
    // ── LEVEL 31–40: Expert ──
    {q:"What is the 'saga pattern' in distributed microservices?",opts:["API gateway routing logic       ","Sequence of local txns with     ","Database replication strategy   ","Event sourcing for audit logs   "],a:1,exp:"Saga: chain of local transactions with compensating rollback transactions if a step fails — no distributed 2PC."},
    {q:"In Kubernetes, what is a 'ConfigMap' used for?",opts:["Storing TLS certificate secrets ","Decoupling config from app image","Pod-to-pod network policies     ","Resource limit definitions      "],a:1,exp:"ConfigMap stores non-secret configuration as key-value pairs, injected into pods as env vars or mounted files."},
    {q:"What is 'rate limiting' protecting against in APIs?",opts:["SQL injection on API endpoints  ","Abuse, DoS, and quota exhaustion","CORS origin policy violations   ","JWT signature forgery attacks   "],a:1,exp:"Rate limiting caps requests per client per time window — prevents DDoS, credential stuffing, and resource abuse."},
    {q:"What does 'distributed tracing' (Jaeger, Zipkin) solve?",opts:["Database query slow log analysis","Request flow visibility across  ","Log aggregation across servers  ","A/B testing feature rollouts    "],a:1,exp:"Distributed tracing tracks a request across microservices with trace IDs — find latency bottlenecks in the chain."},
    {q:"In React, what causes an 'infinite render loop' with useEffect?",opts:["Missing key prop in list items   ","Object/array in deps without memo","Using useState inside the effect ","Returning cleanup from effect    "],a:1,exp:"Objects/arrays are new references each render — useEffect sees 'changed' dep, re-runs, causing infinite loop."},
    {q:"What is 'Blue-Green deployment' strategy?",opts:["Gradual rollout to user percent ","Two identical envs, swap traffic","Feature flags for A/B testing   ","Canary deploy to small subset   "],a:1,exp:"Blue-Green: maintain two identical production environments, swap DNS/LB to switch versions instantly with easy rollback."},
    {q:"In database design, what is 'denormalization' used for?",opts:["Reducing storage space on disk  ","Eliminating all data redundancy ","Improving read query performance","Enforcing referential integrity "],a:2,exp:"Denormalization adds redundancy to reduce JOIN cost — pre-computed fields traded for faster reads in read-heavy systems."},
    {q:"What problem does 'distributed locking' (Redis SETNX) solve?",opts:["Cache invalidation across nodes  ","Mutual exclusion in distributed  ","Replication lag on read replicas ","Session affinity on load balancer"],a:1,exp:"Distributed lock: prevent multiple nodes executing same critical section simultaneously (e.g., cron job dedup)."},
    {q:"What is 'tree shaking' in modern JavaScript bundlers?",opts:["Removing redundant CSS styles    ","Eliminating unused JS exports    ","Splitting large files into chunks","Minifying variable names only    "],a:1,exp:"Tree shaking: static analysis of ES module imports/exports removes dead code not imported anywhere in the app."},
    {q:"In CSS, what does 'will-change: transform' tell the browser?",opts:["Disable hardware acceleration    ","Pre-create a compositor GPU layer","Apply transform on page load     ","Change element dimensions later  "],a:1,exp:"will-change promotes element to own GPU layer before animation — eliminates jank from mid-animation promotion."},
    // ── LEVEL 41–50: FAANG/MNC Level ──
    {q:"In Kubernetes, what does a 'Pod Disruption Budget' (PDB) enforce?",opts:["Max CPU usage per pod allowed  ","Min available pods during ops  ","Auto-scaling trigger thresholds","Network policy for pod traffic "],a:1,exp:"PDB ensures a minimum number of pods remain available during voluntary disruptions like rolling upgrades."},
    {q:"What is 'event-driven architecture' core benefit?",opts:["Synchronous request processing  ","Tight coupling between services ","Loose coupling via async events ","Lower infrastructure costs      "],a:2,exp:"EDA: services emit events consumed asynchronously — producers and consumers are fully decoupled from each other."},
    {q:"What is 'Strangler Fig' migration pattern for legacy systems?",opts:["Rewriting entire system at once  ","Incremental replacement via proxy","Migrating DB schema first then   ","Feature-flag based code switch   "],a:1,exp:"Strangler Fig: add proxy in front, route new features to new service, gradually strangle the legacy monolith."},
    {q:"In system design, what is 'consistent hashing' used for?",opts:["Hash password storage security  ","Minimize redistribution on scale","Distributing load evenly always ","Cache key expiry calculation    "],a:1,exp:"Consistent hashing: adding/removing nodes only remaps K/N keys on average — minimal cache/shard redistribution."},
    {q:"What is 'backpressure' in reactive streaming systems?",opts:["CSS scroll behavior animation   ","Server CPU pressure under load  ","Consumer signals producer slow  ","Database write queue overflow   "],a:2,exp:"Backpressure: slow consumer signals fast producer to slow down — prevents consumer memory overflow under load."},
    {q:"In Next.js 14, what is the 'App Router' over 'Pages Router'?",opts:["Faster client-side navigation  ","React Server Components default","Better TypeScript type safety  ","Simpler API route definitions  "],a:1,exp:"App Router uses React Server Components by default — server-rendered by default, client opt-in with 'use client'."},
    {q:"What does 'CQRS pattern' separate in application architecture?",opts:["Frontend from backend concerns  ","Read model queries from writes  ","SQL from NoSQL data sources     ","REST endpoints from GraphQL     "],a:1,exp:"CQRS: Command (write) model separate from Query (read) model — allows independent optimization and scaling."},
    {q:"In performance, what does 'Time to Interactive' (TTI) measure?",opts:["When page first pixel renders  ","When page is fully interactive ","When largest content is shown  ","When DOM content is loaded     "],a:1,exp:"TTI: time until page is visually ready AND all event handlers are registered — page responds to user input."},
    {q:"What is 'structural sharing' in immutable state (Immer/Redux)?",opts:["Copying entire state on update ","Sharing refs to unchanged nodes","Sending state between services ","Compressing JSON state objects "],a:1,exp:"Structural sharing: on update, only changed path gets new nodes — unchanged subtrees share references. O(log n)."},
    {q:"What is a 'hot partition' problem in DynamoDB and its fix?",opts:["High RCU on global table index  ","One partition key gets all load ","Cross-region replication delay  ","Expired TTL item accumulation   "],a:1,exp:"Hot partition: one partition key overwhelms one shard. Fix: add random suffix to key, scatter-gather reads, DAX cache."},
  ],
  AI:[
    // ── LEVEL 1–10: Foundations ──
    {q:"What does 'supervised learning' require that unsupervised learning does not?",opts:["More compute and GPU memory    ","Labeled training data examples ","A neural network architecture  ","Hyperparameter tuning steps    "],a:1,exp:"Supervised learning needs labeled (input, label) pairs. Unsupervised finds patterns in unlabeled data only."},
    {q:"Which activation function solves the vanishing gradient problem in deep nets?",opts:["Sigmoid maps output to (0,1)   ","Tanh maps output to (-1, 1)    ","Softmax for output class probs ","ReLU outputs max(0,x) directly "],a:3,exp:"ReLU's gradient is 1 for positive inputs — no squashing, no vanishing. Sigmoid/tanh compress gradients exponentially."},
    {q:"What is 'overfitting' in machine learning?",opts:["Model performs well on test set","Model memorizes training data  ","Model has too few parameters   ","Model converges too slowly     "],a:1,exp:"Overfitting: model learns training noise, performs great on train but fails on unseen data — high variance."},
    {q:"What does 'learning rate' control in gradient descent optimization?",opts:["Number of training epochs done  ","Step size along loss gradient   ","Size of each training mini-batch","Number of model parameters      "],a:1,exp:"Learning rate α controls how large a step we take in the direction opposite to the gradient each update."},
    {q:"Which metric is appropriate for regression tasks, not classification?",opts:["F1-score and AUC-ROC curve     ","Accuracy and precision recall  ","Mean Squared Error RMSE loss   ","Log-loss cross entropy metric  "],a:2,exp:"MSE/RMSE measures deviation between predicted and actual continuous values — regression-specific metrics."},
    {q:"What is a 'decision boundary' in classification?",opts:["The training accuracy threshold","Line/surface separating classes","Loss function minimum location ","Hyperparameter search space    "],a:1,exp:"Decision boundary: the surface in feature space where the model transitions from predicting one class to another."},
    {q:"What does 'dropout' regularization do during training?",opts:["Increases learning rate warmup ","Randomly zeros out neurons     ","Adds L2 penalty to all weights ","Normalizes mini-batch inputs   "],a:1,exp:"Dropout randomly disables neurons each forward pass — forces redundant representations, reduces co-adaptation."},
    {q:"What is the purpose of a 'validation set' during model training?",opts:["Testing final model performance ","Tuning hyperparameters without  ","Generating data augmentations   ","Computing gradients for update  "],a:1,exp:"Validation set evaluates model during training to tune hyperparameters — separate from final test set evaluation."},
    {q:"How does 'bagging' (Bootstrap Aggregating) reduce model error?",opts:["It reduces model bias strongly  ","Increases depth of decision tree","Averages predictions to cut var ","Adds regularization penalties   "],a:2,exp:"Bagging trains multiple models on bootstrap samples, averages predictions — reduces variance without adding bias."},
    {q:"What is the 'curse of dimensionality' in machine learning?",opts:["GPU memory shortage in training ","High dimensions cause sparsity  ","Too many hyperparameters exist  ","Overfitting due to deep layers  "],a:1,exp:"In high dimensions, data becomes extremely sparse — distances lose meaning, models need exponentially more data."},
    // ── LEVEL 11–20: Intermediate ──
    {q:"What does the 'kernel trick' in SVMs allow?",opts:["Faster training on linear data  ","Non-linear classification via   ","Regularization of support vects ","Ensemble of multiple SVMs       "],a:1,exp:"Kernel trick implicitly maps data to high-dimensional space where linear separation is possible — no explicit map."},
    {q:"In NLP, what is 'tokenization'?",opts:["Removing stopwords from corpus  ","Splitting text into token units ","Converting text to embeddings   ","Part-of-speech tagging process  "],a:1,exp:"Tokenization splits text into units (words, subwords, characters) that the model processes as discrete inputs."},
    {q:"What is 'transfer learning' and why is it powerful?",opts:["Learning from synthetic data    ","Reusing pretrained model weights","Transferring data between models","Fine-tuning only output layer   "],a:1,exp:"Transfer learning: take weights from model trained on large data (ImageNet, web text), fine-tune on small domain data."},
    {q:"What is 'class imbalance' and a common fix?",opts:["Equal class distribution in DB  ","Skewed class sizes needing SMOTE","Mislabeled examples in dataset  ","Feature correlation between vars"],a:1,exp:"Class imbalance: minority class underrepresented. Fix: SMOTE oversampling, class weights, or threshold adjustment."},
    {q:"What does an 'autoencoder' learn?",opts:["Sequence-to-sequence translation","Compressed latent representation","Text generation from prompts    ","Image classification scores     "],a:1,exp:"Autoencoder: encoder compresses to latent vector, decoder reconstructs. Learns efficient compressed representation."},
    {q:"In CNNs, what does 'pooling layer' achieve?",opts:["Adds more convolutional filters   ","Downsamples feature maps spatially","Applies batch normalization       ","Increases feature map resolution  "],a:1,exp:"Pooling (max/avg) reduces spatial dimensions — provides translation invariance and reduces parameter count."},
    {q:"What is 'attention mechanism' in sequence models?",opts:["Weighting relevant tokens higher","Randomly sampling input tokens  ","Normalizing gradient magnitudes ","Clustering similar embeddings   "],a:0,exp:"Attention computes query-key similarities to weight values — model focuses on relevant positions in sequence."},
    {q:"What does 'fine-tuning' a pre-trained model involve?",opts:["Training from random weights    ","Continuing training on new data ","Pruning unnecessary parameters  ","Distilling into smaller model   "],a:1,exp:"Fine-tuning: take pre-trained weights, continue training on domain-specific data with smaller learning rate."},
    {q:"What is 'hyperparameter optimization' (HPO) and common methods?",opts:["Tuning trainable model weights  ","Searching best config via grid  ","Reducing model complexity level ","Optimizing inference speed      "],a:1,exp:"HPO finds best learning rate, architecture, regularization via grid search, random search, or Bayesian optimization."},
    {q:"What does 'confusion matrix' contain for binary classification?",opts:["Loss values across all epochs  ","TP, FP, TN, FN classification  ","Feature importance per variable","Model confidence scores only   "],a:1,exp:"Confusion matrix: True Positives, False Positives, True Negatives, False Negatives — full view of prediction errors."},
    // ── LEVEL 21–30: Advanced ──
    {q:"Why is 'self-supervised learning' powerful for large-scale models?",opts:["Requires expensive human labels ","Creates labels from data itself ","Uses reinforcement rewards only ","Needs no training data at all   "],a:1,exp:"Self-supervised: creates pretext tasks from unlabeled data (mask tokens, predict next word) — scales to internet data."},
    {q:"What is 'multi-task learning' and its advantage?",opts:["Training separate specialized   ","Training one model on multiple  ","Combining model predictions     ","Parallel GPU training strategy  "],a:1,exp:"Multi-task learning: train on related tasks simultaneously — shared representations improve generalization."},
    {q:"In transformer models, what is 'positional encoding' solving?",opts:["GPU memory for long sequences   ","Sequence order invisibility     ","Gradient vanishing in deep nets ","Vocabulary size limitation      "],a:1,exp:"Self-attention is order-invariant — positional encoding injects token position info via sinusoidal or learned vectors."},
    {q:"What makes 'BERT' different from 'GPT' architecturally?",opts:["BERT uses decoder transformer   ","BERT is bidirectional encoder   ","GPT uses bidirectional attention","BERT uses sparse attention only "],a:1,exp:"BERT: encoder-only, bidirectional (sees both left and right context). GPT: decoder-only, left-to-right causal."},
    {q:"What is the 'bias-variance tradeoff' in machine learning?",opts:["High bias = overfitting problem","High variance = underfitting   ","Tradeoff between error sources ","Bias from imbalanced training  "],a:2,exp:"High bias (underfitting): model too simple. High variance (overfitting): model too complex. Need balance."},
    {q:"What is 'semantic similarity' in embedding space?",opts:["Exact string match between docs ","Similar meaning → close vectors ","Same length text strings only   ","Identical topics in same cluster"],a:1,exp:"Embedding models map similar-meaning text to nearby points in vector space — used in semantic search and RAG."},
    {q:"What does 'gradient clipping' prevent in deep network training?",opts:["Vanishing gradient in early layers","Exploding gradient instability    ","Overfitting on training data      ","Dying ReLU from zero gradients    "],a:1,exp:"Gradient clipping caps gradient norm — prevents exploding gradients (RNNs, deep networks) from destabilizing training."},
    {q:"What is 'label smoothing' in classification training?",opts:["Assigning softer target labels    ","Removing noisy labels from data   ","Adding Gaussian noise to inputs   ","Augmenting under-represented class"],a:0,exp:"Label smoothing: replace hard 0/1 labels with 0.1/0.9 — reduces overconfidence, improves calibration and generalization."},
    {q:"In GANs, what does the discriminator try to learn?",opts:["How to generate realistic images","Distinguish real from generated ","Compress images to latent space ","Label images for classification "],a:1,exp:"Discriminator: binary classifier trained to distinguish real samples from generator-produced fakes."},
    {q:"What is 'knowledge graph' used for in AI applications?",opts:["Storing model training weights  ","Structured entity relationships ","Image segmentation annotations  ","Text tokenization vocabularies  "],a:1,exp:"Knowledge graphs store entities and their relationships (triplets) — power recommendation, QA, and reasoning systems."},
    // ── LEVEL 31–40: Expert ──
    {q:"What is 'in-context learning' (ICL) in large language models?",opts:["Fine-tuning on task examples    ","Learning from prompt examples   ","Retrieval from vector database  ","Pretraining on curated data     "],a:1,exp:"ICL: model adapts to task using examples in the prompt alone — no weight updates, purely from context demonstration."},
    {q:"What is 'RLHF' core training pipeline order?",opts:["PPO → SFT → Reward Model      ","SFT → Reward Model → PPO      ","Reward Model → SFT → PPO      ","SFT → PPO → Reward Model      "],a:1,exp:"RLHF: 1) Supervised Fine-Tuning on demonstrations 2) Train Reward Model on comparisons 3) PPO optimization."},
    {q:"What is 'LoRA' (Low-Rank Adaptation) fine-tuning?",opts:["Full fine-tuning all parameters ","Low-rank weight matrix injection","Distilling to smaller student   ","Quantizing weights to INT4      "],a:1,exp:"LoRA: freeze original weights, add small rank-r matrices ΔW=BA. Only train B and A — 10,000x fewer parameters."},
    {q:"What does 'Mixture of Experts' (MoE) architecture enable?",opts:["Sparse activation of all layers ","Large params with same FLOPs    ","Mixture of different model types","Ensemble averaging at inference "],a:1,exp:"MoE: each token activates only K of N expert FFN layers — model has more parameters but same compute per token."},
    {q:"What is the 'scaling law' insight from Chinchilla (2022)?",opts:["Larger models always beat smaller","Model size and data must scale   ","Only data size determines perf   ","Training longer has no benefit   "],a:1,exp:"Chinchilla: compute-optimal training requires proportional scaling of both model size AND training tokens."},
    {q:"What does 'vector database' (Pinecone, Weaviate) specialize in?",opts:["Storing and querying JSON docs  ","ANN search over dense embeddings","Graph relationship traversal    ","Time-series data storage ops    "],a:1,exp:"Vector DBs store embeddings and support approximate nearest neighbor (ANN) search — core to RAG architectures."},
    {q:"What is 'Constitutional AI' (CAI) approach by Anthropic?",opts:["Human raters label all outputs  ","AI self-critiques via principles","Safety classifier added on top  ","Reducing model size for safety  "],a:1,exp:"CAI: model critiques its own responses against a set of constitutional principles, generates safer training data."},
    {q:"What is 'chain-of-thought' (CoT) prompting?",opts:["Providing more few-shot examples","Eliciting step-by-step reasoning","Increasing output token length  ","Using XML tags in system prompt "],a:1,exp:"CoT: 'Let's think step by step' triggers intermediate reasoning steps — dramatically improves complex task accuracy."},
    {q:"What is 'speculative decoding' in LLM inference?",opts:["Sampling multiple output tokens    ","Small draft model + parallel verify","Beam search over token lattice     ","Quantized model for speed only     "],a:1,exp:"Speculative decoding: small draft model generates N tokens cheaply, large model verifies all in one pass — ~3x faster."},
    {q:"What is 'perplexity' measuring in language model evaluation?",opts:["Model inference latency in ms  ","Exp of avg cross-entropy loss  ","Number of unique tokens seen   ","Accuracy on validation dataset "],a:1,exp:"Perplexity = exp(cross-entropy). Lower = model is less 'surprised' by test text. Standard LM evaluation metric."},
    // ── LEVEL 41–50: FAANG/MNC Level ──
    {q:"What is 'Flash Attention' (Dao et al.) optimizing?",opts:["Model architecture parameters   ","IO-aware tiled attention compute","Sparse attention approximation  ","CPU offloading for large models "],a:1,exp:"Flash Attention uses SRAM tiling to avoid O(N²) HBM reads/writes — same math, much less memory IO, enables long context."},
    {q:"What is 'retrieval-augmented generation' (RAG)?",opts:["Fine-tuning LLM on domain docs   ","Grounding LLM with retrieved docs","Adding web search to LLM output  ","Using structured DB for LLM      "],a:1,exp:"RAG: at inference time, retrieve relevant documents from vector DB, add to context — reduces hallucination."},
    {q:"In diffusion models, generation is described as?",opts:["GAN generator sampling process  ","Iterative denoising from noise  ","VAE latent space sampling       ","Autoregressive token generation "],a:1,exp:"Diffusion: train to reverse Gaussian noise process. Inference: start from pure noise, denoise T steps using U-Net."},
    {q:"What is 'emergent capability' in LLMs?",opts:["Planned feature added by team   ","Capability absent at small scale","Better fine-tuning result only  ","Reduced hallucination at scale  "],a:1,exp:"Emergent: capability absent in smaller models appears suddenly at larger scale — few-shot learning, chain-of-thought."},
    {q:"What does 'temperature=0' mean in LLM generation?",opts:["Model outputs random tokens    ","Greedy decoding most likely tok","Disables the sampling process  ","Sets top-p to zero value       "],a:1,exp:"Temperature=0: always pick highest probability token (greedy) — deterministic, no diversity in outputs."},
    {q:"What is 'reward hacking' in RLHF-trained models?",opts:["Reward model correctly predicts ","Model exploits proxy reward gap ","Human raters disagree on scores ","PPO fails to converge training  "],a:1,exp:"Reward hacking: model finds unintended ways to maximize proxy reward (verbosity, sycophancy) not aligned with intent."},
    {q:"What are 'Rotary Position Embeddings' (RoPE) advantage over absolute PE?",opts:["Faster to compute at runtime    ","Better length extrapolation via ","Architecture-agnostic encoding  ","Fixed position table lookup     "],a:1,exp:"RoPE encodes relative position via rotation in complex space — better length generalization than learned absolute PE."},
    {q:"What is 'quantization-aware training' (QAT) vs post-training?",opts:["QAT quantizes after training    ","QAT simulates quantization error","QAT is always faster to train   ","QAT requires labeled data only  "],a:1,exp:"QAT: simulate INT8 quantization during training — model learns to be robust. Lower accuracy drop than post-training."},
    {q:"What is 'sparse attention' in long-context transformers?",opts:["Attending to random token subsets ","Attending to local + global tokens","Ignoring padding tokens only      ","Reducing embedding dimensions     "],a:1,exp:"Sparse attention (Longformer, BigBird): each token attends to local window + global tokens — O(N) not O(N²)."},
    {q:"What is 'Mixture of Depths' (MoD) architecture?",opts:["Different expert sizes in MoE    ","Tokens skip layers dynamically   ","Mixture of different depth nets  ","Varying attention heads per layer"],a:1,exp:"MoD: router learns which tokens need all layers vs skip — easy tokens get fewer layers, saving FLOPs without quality loss."},
  ],
};

// ══ LEARN DATA ══
// ═══════════════════════════════════════════════════════════
// 📝 LEARN_DATA — Theory tabs in the Learn section
// Each domain → tabs[] → items[] of {title, content}
// ═══════════════════════════════════════════════════════════
const LEARN_DATA={
  Cybersecurity:[
    {id:'net',title:'🌐 Networking',subs:[
      {sub:'OSI Model',text:`🌐 OSI 7 Layers —  Networking Cheat Sheet

(Mnemonic: All People Seem To Need Data Processing)

7️⃣ Application Layer 🌍

User-facing network services

Common Protocols:
HTTP (80) • HTTPS (443) • FTP (21) • DNS (53) • SMTP (25) • SSH (22) • Telnet (23)

What it does:
• Web browsing 🌐
• Email communication 📧
• File transfers 📁
• Remote access 💻

6️⃣ Presentation Layer 🔐

Data formatting & security

• Encryption & decryption (SSL/TLS) 🔑
• Data encoding (ASCII, UTF-8)
• Compression (JPEG, MP4, etc.)
• Format translation between systems

👉 Ensures data is secure and properly formatted.

5️⃣ Session Layer 🔄

Session management

• Establishes, maintains, and terminates sessions
• Handles authentication flows
• Manages login & API sessions

👉 Keeps communication organized between devices.

4️⃣ Transport Layer 🚚

End-to-end communication control

TCP 📦

• Reliable & ordered delivery ✅
• Error detection & retransmission
• Flow & congestion control 🚦
• Connection-oriented

UDP ⚡

• Connectionless
• Faster, low latency
• No reliability guarantees

🤝 TCP 3-Way Handshake

SYN → SYN-ACK → ACK
Establishes a reliable connection before data transfer.

⚖️ TCP vs UDP

TCP: Reliable, ordered (HTTP, HTTPS, FTP, SSH)
UDP: Fast, low latency (DNS, VoIP, gaming, streaming)

3️⃣ Network Layer 🗺️

Logical addressing & routing

• IP addressing
• Packet forwarding between networks
• Routers operate here 📡
• Routing protocols (OSPF, BGP)
• ICMP (used by ping)

2️⃣ Data Link Layer 🔗

Local network communication

• MAC addressing
• Ethernet frames
• VLAN segmentation
• ARP protocol
• Error detection (CRC)
• Switches operate here 🖧

1️⃣ Physical Layer 🔌

Bit-level transmission

• Cables (Ethernet, Fiber)
• Electrical & optical signals ⚡💡
• Bits (0s & 1s)
• Hubs & repeaters

🔢 Common Ports

20/21 → FTP 📁
22 → SSH 🔐
23 → Telnet 💻
25 → SMTP 📧
53 → DNS 🌍
80 → HTTP 🌐
110 → POP3 📬
143 → IMAP 📥
443 → HTTPS 🔒
3389 → RDP 🖥️

🌐 Subnetting Overview

/24 → 254 usable hosts
/16 → 65,534 usable hosts
/30 → 2 usable hosts (point-to-point links)

🏠 Private IP Ranges

10.0.0.0/8
172.16.0.0 – 172.31.255.255
192.168.0.0/16

Used for internal networks and not routable on the public internet.

📘 CIDR Quick Reference

/8 → 255.0.0.0
/16 → 255.255.0.0
/24 → 255.255.255.0
/30 → 255.255.255.252

💻 Essential Networking Commands

ping → Test connectivity 📡
tracert (Windows) → Trace route 🛣️
traceroute (Linux) → Trace route 🐧
netstat → Active connections 🔍
nslookup → DNS queries 🌎
arp -a → View ARP table 📋
ipconfig → Windows IP configuration 🖥️
ifconfig → Linux IP configuration 🐧

🛡️ Cybersecurity Fundamentals
🔐 CIA Triad

Confidentiality 🤫
Integrity ✔️
Availability 🟢

⚠️ Common Attack Types

DoS / DDoS 🌊
Man-in-the-Middle (MITM) 👂
Phishing 🎣
SQL Injection 💉
Cross-Site Scripting (XSS) 🧪`},
      {sub:'Network Attacks',text:`🛡️ Advanced Attack Types & Defenses — Extended Security Notes
🧪 SQL Injection (SQLi)

Type: Application Layer (L7) attack

What happens:
• Malicious SQL code inserted into input fields
• Database executes unintended commands
• Data theft, modification, or deletion

Defense:
• Prepared statements / Parameterized queries
• Input validation & sanitization
• Web Application Firewall (WAF)
• Least-privilege database accounts

🧬 Cross-Site Scripting (XSS)

Type: Client-side injection attack

What happens:
• Malicious script injected into web page
• Executes in victim’s browser
• Steals cookies, session tokens

Types:
• Stored XSS
• Reflected XSS
• DOM-based XSS

Defense:
• Output encoding
• Content Security Policy (CSP)
• Input validation
• HttpOnly & Secure cookie flags

🔐 Brute Force Attack

Type: Authentication attack

What happens:
• Automated password guessing
• Attempts many username/password combinations

Defense:
• Account lockout policies
• Rate limiting
• Multi-Factor Authentication (MFA)
• Strong password policies

🎣 Phishing

Type: Social engineering attack

What happens:
• Fake emails or websites
• Trick users into revealing credentials

Defense:
• User awareness training
• Email filtering & anti-spam
• DMARC, DKIM, SPF
• Multi-Factor Authentication

📡 Rogue Access Point

Type: Network impersonation

What happens:
• Fake Wi-Fi network created
• Users connect unknowingly
• Traffic intercepted

Defense:
• WPA3 encryption
• Network monitoring
• Disable auto-connect
• VPN usage

🧨 Ransomware

Type: Malware attack

What happens:
• Encrypts victim’s files
• Demands payment for decryption

Defense:
• Regular backups (offline & tested)
• Endpoint protection
• Patch management
• Email filtering

🌊 DDoS Deep Breakdown
🔹 Volumetric Attacks

• UDP flood
• ICMP flood
• DNS amplification

👉 Goal: Saturate bandwidth

🔹 Protocol Attacks

• SYN flood
• Ping of Death
• Smurf attack

👉 Goal: Exhaust server/network resources

🔹 Application Layer (L7) Attacks

• HTTP GET/POST flood
• Slowloris attack

👉 Goal: Exhaust web server processes

🔎 Advanced Wireshark Filters
🌐 Web Traffic

http.request → Show HTTP requests only
http.response → Show HTTP responses
tcp.port == 80 → HTTP traffic
tcp.port == 443 → HTTPS traffic

📡 DNS Analysis

dns → All DNS packets
dns.flags.response == 1 → DNS responses only
dns.qry.name contains "example" → Filter specific domain

🚨 Detecting SYN Flood

tcp.flags.syn == 1 && tcp.flags.ack == 0
(Shows initial SYN packets only)

🔁 TCP Troubleshooting

tcp.analysis.retransmission → Retransmitted packets
tcp.analysis.lost_segment → Lost TCP segments
tcp.window_size → Analyze TCP window size

🎯 IP-Based Filtering

ip.src == 192.168.1.10 → Traffic from IP
ip.dst == 192.168.1.10 → Traffic to IP
ip.addr == 192.168.1.10 → Both directions

🔒 TLS / HTTPS

tls → TLS packets
ssl.handshake → TLS handshake packets

📊 Detect Possible DDoS Pattern

tcp.flags.syn == 1 && tcp.flags.ack == 0
Large volume from multiple source IPs = possible SYN flood

🧠 Quick SOC Analyst Tips

• Sudden spike in SYN packets → Check for SYN flood
• Many DNS responses with mismatched IPs → Possible DNS poisoning
• Large outbound traffic from one host → Possible data exfiltration
• Repeated failed logins → Brute force attack`},
    ]},
    {id:'linux',title:'🐧 Linux',subs:[
      {sub:'Essential Commands',text:`========================
LINUX COMMAND CHEAT SHEET
========================

📁 NAVIGATION:
ls -la                          → List all files (long format, hidden included)
cd /path                        → Change directory
pwd                             → Show current directory
tree                            → Show directory tree
find / -name "*.conf" 2>/dev/null → Find config files
locate filename                 → Fast file search (database-based)
which command                   → Show command path

----------------------------------------

📄 FILES & PERMISSIONS:
cat file                        → Display file
less file                       → Scroll file
head -20 file                   → First 20 lines
tail -f logfile                 → Live log monitoring
cp -r src dest                  → Copy recursively
mv old new                      → Move/rename
rm -rf dir                      → Remove forcefully ⚠️
chmod 755 file                  → Change permissions
chmod +x script.sh              → Make executable
chown user:group file           → Change ownership
stat file                       → File metadata

Permission Model:
r (4) | w (2) | x (1)
755 = rwx r-x r-x

----------------------------------------

🔎 TEXT PROCESSING:
grep -rn "pattern" .            → Recursive search
grep -i                         → Case insensitive
awk '{print $1}'                → Print first column
sed 's/old/new/g'               → Replace text
cut -d: -f1                     → Extract field
sort                            → Sort lines
uniq -c                         → Count duplicates
wc -l                           → Count lines
tr 'a-z' 'A-Z'                  → Convert case

----------------------------------------

🌐 NETWORK:
ip a                            → Show IP addresses
ip route                        → Show routing table
ss -tulpn                       → Show listening ports
netstat -tulpn                  → Legacy port check
curl -I url                     → Fetch HTTP headers
curl -X POST url                → Send POST request
wget url                        → Download file
nc -lvnp 4444                   → Netcat listener
nc target 4444                  → Connect to port
ping host                       → Check connectivity
traceroute host                 → Trace route
dig domain.com                  → DNS lookup
whois domain.com                → Domain info

----------------------------------------

⚙️ PROCESS & SYSTEM:
ps aux                          → List processes
ps aux | grep name              → Filter process
kill PID                        → Terminate process
kill -9 PID                     → Force kill ⚠️
top                             → Real-time process view
htop                            → Advanced process viewer
free -h                         → Memory usage
df -h                           → Disk usage
uptime                          → System uptime
systemctl status service        → Service status
systemctl start service         → Start service
systemctl stop service          → Stop service
systemctl enable service        → Enable at boot

----------------------------------------

👤 USER MANAGEMENT:
whoami                          → Current user
id                              → User & group IDs
adduser username                → Add user
passwd username                 → Change password
su - user                       → Switch user
sudo command                    → Run as root

----------------------------------------

📜 LOG FILES (SOC / FORENSICS):
/var/log/auth.log               → Authentication logs
/var/log/syslog                 → System logs
/var/log/kern.log               → Kernel logs
journalctl -xe                  → Systemd logs

----------------------------------------

🚩 BASIC PRIVILEGE ESCALATION CHECKS:
sudo -l                         → Check sudo permissions
find / -perm -4000 2>/dev/null  → Find SUID files
env                             → Environment variables
history                         → Command history

----------------------------------------

📦 ARCHIVING & COMPRESSION:
tar -cvf file.tar dir
tar -xvf file.tar
tar -czvf file.tar.gz dir
gzip file
unzip file.zip`},
      {sub:'Privilege Escalation',text:`Enterprise Linux Privilege Escalation
Governance, Risk & Control Framework (Condensed Professional Edition)
1. Executive Overview

Privilege escalation in enterprise Linux environments represents a breakdown in administrative boundary enforcement. It occurs when an identity, process, or workload acquires access beyond its authorized role due to weak configuration management, excessive delegation, or inadequate oversight.

In mature environments, escalation risk is driven more by governance deficiencies than by advanced exploit techniques.

2. Trust Boundary Model

Enterprise Linux environments operate across layered privilege tiers:

Tier 0: Root / System-Level Control

Tier 1: Delegated Administrative Roles (sudo, service control)

Tier 2: Application and Service Accounts

Tier 3: Standard Authenticated Users

Tier 4: External or Untrusted Input Sources

Privilege escalation occurs when influence crosses tiers without enforced validation, restriction, or monitoring.

3. Primary Risk Domains
3.1 Administrative Delegation

Overly broad sudo permissions

Wildcard command execution rights

Lack of periodic privilege reviews

Inadequate logging of privileged actions

3.2 Automation & Scheduled Execution

Root cron jobs executing writable scripts

Systemd services referencing unprotected binaries

Backup or maintenance tasks stored in shared directories

Implicit trust chains within configuration management tools

Automation misconfiguration is one of the most common escalation vectors in enterprise environments.

3.3 Container & Runtime Governance

Docker group membership treated as non-privileged

Privileged container execution

Host filesystem bind mounts

Excessive Kubernetes RBAC privileges

Container runtime access frequently equates to host-level control if not properly restricted.

3.4 DevOps & CI/CD Pipelines

Root-level build agents

Excessive service account permissions

Unrestricted pipeline modifications

Lack of separation between build and deployment identities

Modern escalation frequently originates within automated delivery systems rather than user accounts.

3.5 Cloud & Identity Governance

Over-permissioned IAM roles

Metadata endpoint exposure

Inadequate workload identity isolation

Unrestricted cluster-admin assignments

In cloud environments, escalation is predominantly identity-based rather than binary-based.

4. Preventive Control Principles

Effective privilege escalation prevention requires:

Strict enforcement of least privilege

Explicit separation of duties

Controlled and reviewed administrative delegation

Hardened automation workflows

Restricted container runtime capabilities

Strong identity and access governance

Continuous configuration validation

Privilege boundaries must be intentionally designed and continuously monitored.

5. Detection & Monitoring Requirements

Security operations must maintain visibility over privilege transitions, including:

Sudo activity and elevation attempts

Administrative group membership changes

Scheduled task modifications

Service configuration updates

Container runtime access events

Capability assignments and permission changes

Centralized logging, correlation analysis, and defined alerting thresholds are mandatory components of an effective control framework.

6. Governance & Review Expectations

Organizations should implement:

Quarterly review of delegated privileges

Periodic audit of container and cloud role assignments

Formal change management for privileged configuration modifications

Documented separation between development and production administrative access

Continuous compliance validation aligned with recognized benchmarks

Privilege governance must be treated as an ongoing operational discipline rather than a one-time hardening exercise.

7. Strategic Risk Perspective

Privilege escalation is rarely the result of sophisticated zero-day exploitation within enterprise Linux environments. It is most frequently attributable to:

Excessive delegation

Weak automation controls

Poor identity segmentation

Inconsistent monitoring practices

Organizations that enforce least privilege, restrict implicit trust relationships, and maintain continuous oversight of administrative boundaries materially reduce systemic compromise risk.

8. Conclusion

Privilege escalation risk is fundamentally a control architecture issue.

Security maturity is demonstrated not by the absence of vulnerabilities, but by the consistency with which privilege boundaries are defined, enforced, monitored, and reviewed.

A disciplined governance approach transforms privilege escalation from a systemic risk into a manageable operational concern.`},
    ]},
    {id:'eth',title:'🔓 Ethical Hacking',subs:[
      {sub:'Methodology',text:`Real-World Ethical Hacking Scenario
Internal Network Penetration Test – Mid-Sized Enterprise
1. Engagement Overview

Client: Mid-sized financial services company
Scope: Internal network (post-authentication)
Objective: Assess risk of privilege escalation and lateral movement
Authorization: Written approval from executive leadership and legal

The organization wanted to evaluate what a malicious insider or compromised employee account could realistically achieve.

2. Initial Access Assumption

The red team was provided with:

A standard domain user account

VPN access

No administrative privileges

This simulated:

Phished employee credentials

Compromised workstation access

3. Phase 1 – Reconnaissance (Internal)

Without performing intrusive actions, the assessment focused on:

Identifying accessible file shares

Reviewing accessible configuration files

Enumerating user groups

Mapping accessible servers

Key Observation

A shared IT folder was accessible to all authenticated users.

Inside it:

Backup scripts

Infrastructure documentation

A PowerShell deployment script

4. Phase 2 – Configuration Review

The backup script:

Ran nightly on a production database server

Executed with elevated privileges

Was stored in a network share

Had write permissions for “Domain Users”

This created a trust boundary failure:

Low-privilege user → writable script → executed by privileged service

5. Risk Validation (Controlled)

Rather than inserting malicious content, the red team:

Demonstrated that the script could be modified

Documented that it executed automatically as a privileged account

Proved that arbitrary commands would run under elevated context

At this point, full server compromise was achievable.

No destructive payloads were deployed.

6. Business Impact Assessment

If exploited maliciously, this vulnerability could allow:

Full database server takeover

Extraction of sensitive financial records

Credential harvesting

Lateral movement to other production systems

Potential domain-level compromise

The issue originated from:

Convenience-based file sharing

Lack of permission review

Absence of script integrity monitoring

7. Escalation Chain (What Could Have Happened)

Compromised employee credentials

Access shared IT folder

Modify privileged backup script

Wait for scheduled execution

Gain elevated access to production server

Pivot to additional systems

No exploit kits.
No zero-days.
Pure misconfiguration.

8. Root Cause Analysis

The vulnerability was caused by:

Improper access control on shared resources

Lack of least privilege enforcement

No periodic permission audits

No integrity monitoring on automation assets

9. Blue Team Detection Gaps Identified

No alerting on script modification

No monitoring of privileged scheduled tasks

No detection of abnormal service account activity

Limited centralized logging

10. Remediation Recommendations

Restrict write access to privileged automation assets

Move scripts to local protected directories

Implement file integrity monitoring

Review all shared folder permissions

Enforce separation between user-accessible and privileged assets

Enable logging and alerting on scheduled task modifications

11. Executive Summary

The assessment demonstrated that:

A standard employee account could lead to production server compromise due to a misconfigured automation process.

This represents a governance and configuration failure — not a technical exploit weakness.

The risk was systemic and easily preventable through proper access control and monitoring.

Key Real-World Lesson

Most enterprise privilege escalation scenarios are:

Procedural

Operational

Permission-based

Automation-related

They rarely require advanced hacking techniques.

Security maturity depends on boundary control discipline, not exploit complexity.`},
      {sub:'Tool Reference',text:`=================================================
OFFENSIVE SECURITY TOOLKIT (Red Team / Pentest)
=================================================

Nmap           → Network discovery & service enumeration
Burp Suite     → Web proxy, manual testing, request manipulation
Metasploit     → Exploit framework & payload delivery
SQLmap         → Automated SQL injection testing
Nikto          → Web server vulnerability scanner
Gobuster       → Directory & DNS brute forcing
Hydra          → Online password brute-force attacks
Hashcat        → Offline password cracking (GPU accelerated)
Responder      → LLMNR/NBT-NS poisoning (internal networks)
BloodHound     → Active Directory attack path mapping

Used In:
• Web Application Pentesting
• Internal Network Assessments
• Active Directory Exploitation
• Red Team Operations

-------------------------------------------------

DEFENSIVE SECURITY TOOLKIT (Blue Team / SOC)
=================================================

Wireshark      → Deep packet inspection & traffic analysis
Snort/Suricata → Intrusion Detection/Prevention Systems (IDS/IPS)
Splunk         → SIEM (log analysis & threat detection)
Wazuh          → Open-source SIEM & endpoint monitoring
OSSEC          → Host-based intrusion detection
CrowdStrike    → Enterprise EDR (Endpoint Detection & Response)
Velociraptor   → Digital forensics & incident response
TheHive        → Incident response case management platform

Used In:
• Security Operations Center (SOC)
• Threat Hunting
• Incident Response
• Malware Investigation
• Log Correlation & Alerting

-------------------------------------------------

CTF & RESEARCH TOOLKIT (Learning / Exploit Dev)
=================================================

CyberChef      → Data encoding/decoding & transformation
Binwalk        → Firmware analysis & extraction
Strings        → Extract readable strings from binaries
Steghide       → Steganography analysis
Ghidra         → Reverse engineering framework
radare2        → Advanced binary analysis
pwndbg         → GDB exploit development plugin
ROPgadget      → Find ROP chains in binaries
pycryptodome   → Python cryptography library

Used In:
• Capture The Flag competitions
• Reverse Engineering practice
• Binary Exploitation
• Malware analysis
• Cryptography challenges

-------------------------------------------------

OSINT TOOLKIT (Open-Source Intelligence)
=================================================

theHarvester   → Email & subdomain collection
Maltego        → Relationship & entity mapping
Shodan         → Internet-exposed device search engine
Recon-ng       → Modular reconnaissance framework
SpiderFoot     → Automated OSINT automation
Amass          → Subdomain enumeration
subfinder      → Passive subdomain discovery

Used In:
• Reconnaissance Phase
• External Attack Surface Mapping
• Bug Bounty Hunting
• Corporate Exposure Assessment

-------------------------------------------------

PROFESSIONAL INSIGHT:
-------------------------------------------------
Offensive = Break systems (legally)
Defensive = Protect systems
CTF = Build technical depth
OSINT = Gather intelligence before attack

A strong cybersecurity professional should understand
BOTH offensive and defensive perspectives.`},
    ]},
    {id:'red-team',title:'🔴 Red Team Path',subs:[
      {sub:'Phase 1 — Foundations (0–7 months)',text:`=================================================
RED TEAM MINDSET
=================================================
Think like an attacker.
Goal = Gain initial access → Escalate privileges →
Maintain persistence → Move laterally → Exfiltrate data →
Erase traces (if engagement scope allows).

Red Teaming is not about tools.
It is about methodology, stealth, and understanding systems deeply.

-------------------------------------------------

CORE TOOLS TO MASTER
=================================================

• Nmap (nmap.org)
  - Port scanning
  - Service/version detection
  - OS fingerprinting
  - Script engine (NSE)

• Metasploit (metasploit.com)
  - Exploit framework
  - Payload generation (reverse shells, bind shells)
  - Post-exploitation modules

• Burp Suite (portswigger.net)
  - Intercept HTTP requests
  - Manipulate parameters
  - Manual vulnerability discovery
  - Repeater & Intruder modules

• sqlmap (sqlmap.org)
  - Automated SQL Injection
  - Database enumeration
  - Data extraction

• Gobuster (github.com/OJ/gobuster)
  - Directory brute-forcing
  - DNS enumeration

• Hashcat (hashcat.net)
  - GPU-based password cracking
  - Wordlists & rule-based attacks

• John the Ripper
  - Hash cracking (CPU based)
  - Good for learning password internals

-------------------------------------------------

FIRST LAB ENVIRONMENT (Beginner → Intermediate)
=================================================

1. Install Kali Linux in VirtualBox / VMware
2. Create a safe isolated lab network
3. Practice only on legal environments

Recommended Platforms:

- TryHackMe
  Paths:
    • "Pre-Security"
    • "Jr Penetration Tester"

- HackTheBox
  Starting Point → Tier 1 → Easy machines

- DVWA (Damn Vulnerable Web Application)
  Local web vulnerability practice

-------------------------------------------------

SKILL PROGRESSION ROADMAP
=================================================

STAGE 1: Fundamentals
  • Linux commands
  • Networking basics (TCP/IP, ports, DNS)
  • HTTP protocol understanding
  • Basic scripting (Bash / Python)

STAGE 2: Web Exploitation
  • SQL Injection
  • XSS
  • Authentication bypass
  • File upload vulnerabilities

STAGE 3: System Exploitation
  • Reverse shells
  • Privilege escalation (Linux & Windows)
  • SUID & misconfigurations
  • Credential harvesting

STAGE 4: Active Directory Attacks
  • Kerberoasting
  • Pass-the-Hash
  • BloodHound analysis
  • Lateral movement

-------------------------------------------------

MILESTONES
=================================================

✅ Set up Kali Linux VM
✅ Complete 10 TryHackMe rooms
✅ Perform your first full Nmap scan
✅ Exploit a vulnerable web app locally
✅ Gain root on a HackTheBox easy machine
✅ Write your first basic penetration testing report

-------------------------------------------------

PROFESSIONAL ADVICE
=================================================

• Always stay within legal boundaries.
• Document everything you do.
• Learn manual testing — do not rely only on automation.
• Understand WHY an exploit works.
• Read write-ups but try first yourself.

Red Teaming is 20% tools and 80% understanding systems.`},
      {sub:'Phase 2 — Advanced Red Team (7-12 months)',text:`C2 FRAMEWORKS (Command & Control):
• Cobalt Strike [research yourself] — industry standard (paid, but learn concepts)
• Covenant (github.com/cobbr/Covenant) — .NET C2, free
• Havoc (github.com/HavocFramework/Havoc) — modern open-source C2
• Sliver (github.com/BishopFox/sliver) — cross-platform C2, free

EVASION & POST-EXPLOITATION:
• Mimikatz [research yourself] — credential extraction from Windows memory
• Rubeus [research yourself] — Kerberos attack toolkit
• AMSI bypass techniques | EDR evasion | LOLBins (Living-off-the-land)
• Empire (github.com/BC-SECURITY/Empire) — PowerShell C2 framework

ADVANCED RESOURCES:
• TCM Security PNPT certification (tcm-sec.com) — practical, respected
• OSCP (offensive-security.com) — gold standard, 24-hour hands-on exam
• ired.team (ired.team) — free AD attack reference
• HackTricks (book.hacktricks.xyz) — comprehensive pentest reference

MILESTONES:
✅ OSCP certified | ✅ 10 HTB Medium/Hard machines | ✅ Active bug bounty hunter`},
    ]},
    {id:'blue-team',title:'🔵 Blue Team Path',subs:[
      {sub:'Phase 1 — SOC & Monitoring Basics (0–3 months)',text:`BLUE TEAM MINDSET
=================================================
Detect → Investigate → Respond → Contain → Eradicate → Recover

Primary Goal:
Identify threats before they cause impact.
Minimize dwell time.
Reduce attacker persistence.
Improve organizational resilience.

Blue Teaming is about visibility, logs, and pattern recognition.

-------------------------------------------------

CORE TOOLS TO MASTER
=================================================

• Wireshark
  - Deep packet inspection
  - Identify suspicious traffic
  - Analyze DNS, HTTP, SMB anomalies

• Splunk
  - SIEM platform
  - Log ingestion & correlation
  - Search Processing Language (SPL)
  - Alert creation & dashboards

• Elastic SIEM / ELK Stack
  - Elasticsearch + Logstash + Kibana
  - Open-source log analysis
  - Detection engineering practice

• Wazuh
  - Open-source SIEM/XDR
  - File integrity monitoring
  - Host-based detection

• Snort
  - IDS/IPS engine
  - Signature-based detection
  - Custom rule creation

• Zeek
  - Network security monitoring
  - Behavioral detection
  - Protocol analysis

• Volatility
  - Memory forensics
  - Detect malware in RAM
  - Analyze compromised systems

-------------------------------------------------

FIRST BLUE TEAM LABS
=================================================

• Blue Team Labs Online
  - Practical SOC-style investigations

• LetsDefend
  - Realistic SOC simulator
  - Alert triage workflow

• CyberDefenders
  - Forensics & log analysis challenges

Goal in Labs:
  → Understand alerts
  → Reduce false positives
  → Investigate Indicators of Compromise (IOCs)
  → Write investigation notes

-------------------------------------------------

WINDOWS EVENT IDs (CRITICAL FOR SOC)
=================================================

4624  — Successful Logon
4625  — Failed Logon
4648  — Logon with Explicit Credentials
4688  — New Process Created
4698  — Scheduled Task Created
4720  — New User Account Created
4728  — User Added to Privileged Group
4732  — Member Added to Local Group
4769  — Kerberos Service Ticket Requested

You should not only memorize them —
you should understand the attack patterns behind them.

-------------------------------------------------

BLUE TEAM SKILL PROGRESSION
=================================================

STAGE 1: Foundations
  • Networking basics
  • Windows logging
  • Linux log locations
  • Understanding normal vs abnormal behavior

STAGE 2: SOC Analyst Skills
  • Log correlation
  • Alert triage
  • Writing incident reports
  • IOC investigation

STAGE 3: Detection Engineering
  • Write detection rules
  • Build Sigma rules
  • Map detections to MITRE ATT&CK
  • Tune alerts to reduce noise

STAGE 4: Incident Response & Forensics
  • Memory analysis
  • Disk forensics
  • Timeline creation
  • Root cause analysis

-------------------------------------------------

PROFESSIONAL INSIGHT
=================================================

Beginner:
  → Reads alerts.

Intermediate:
  → Investigates alerts.

Advanced:
  → Writes detections.

Expert:
  → Designs monitoring architecture
    and improves detection coverage.

Red Team breaks.
Blue Team prevents.
Elite security professionals understand both.`},
      {sub:'Phase 2 — DFIR & Threat Hunting (3–9 months)',text:`=================================================
DIGITAL FORENSICS & INCIDENT RESPONSE (DFIR)
=================================================

Objective:
Investigate security incidents.
Preserve evidence.
Determine root cause.
Contain and eradicate threats.
Produce legally defensible reports.

-------------------------------------------------

CORE DFIR TOOLS
=================================================

• Autopsy
  - Disk forensics GUI
  - File system analysis
  - Timeline creation
  - Deleted file recovery

• FTK Imager
  - Disk imaging & acquisition
  - Create forensic copies (E01, RAW)
  - Verify hash integrity (MD5/SHA1)

• Volatility3
  - Memory forensics framework
  - Analyze RAM dumps
  - Detect injected processes
  - Extract credentials & network artifacts

• Velociraptor
  - Enterprise DFIR platform
  - Live endpoint investigation
  - Remote artifact collection
  - Threat hunting at scale

• TheHive
  - Incident response case management
  - Task tracking
  - SOC collaboration workflow

-------------------------------------------------

DFIR WORKFLOW (SIMPLIFIED)
=================================================

1. Detection (Alert or anomaly)
2. Triage (Validate incident)
3. Containment (Isolate affected host)
4. Evidence Collection (Disk, memory, logs)
5. Analysis (Timeline + artifact correlation)
6. Eradication (Remove persistence/malware)
7. Recovery (Restore normal operations)
8. Post-Incident Report (Lessons learned)

-------------------------------------------------

THREAT INTELLIGENCE
=================================================

Purpose:
Understand adversary behavior, infrastructure,
and tactics before they impact your organization.

• MITRE ATT&CK
  - Framework of adversary tactics & techniques
  - Used to map detections
  - Improves coverage visibility

• AlienVault OTX
  - Open threat intel feeds
  - IOC sharing community

• VirusTotal
  - File & URL reputation analysis
  - Hash lookups
  - Sandbox behavior reports

• URLhaus
  - Malicious URL tracking
  - Malware distribution monitoring

• Shodan
  - Internet-exposed asset discovery
  - Useful for external attack surface visibility

-------------------------------------------------

THREAT HUNTING EXAMPLES
=================================================

Hunt Encoded PowerShell:
  process_name="powershell"
  AND "-enc" in cmdline

Detect Lateral Movement:
  Multiple 4624 (successful logon)
  from same source IP within short timeframe

Find Persistence:
  Event ID 4698 (Scheduled Task Created)
  OR
  Event ID 4720 (New Account Created)
  within 24-hour correlation window

Hunting Mindset:
  • Assume breach.
  • Look for anomalies.
  • Validate against baseline behavior.
  • Correlate across logs.

-------------------------------------------------

SKILL PROGRESSION (DFIR PATH)
=================================================

STAGE 1:
  • Understand Windows event logs
  • Learn networking fundamentals
  • Analyze basic PCAP files

STAGE 2:
  • Disk & memory forensics
  • Malware behavioral analysis
  • Timeline reconstruction

STAGE 3:
  • Threat hunting queries
  • Detection engineering
  • Adversary emulation mapping to MITRE

STAGE 4:
  • Enterprise IR leadership
  • Build playbooks
  • Conduct tabletop exercises
  • Post-incident reporting & improvement

-------------------------------------------------

MILESTONES
=================================================

✅ Analyze 5 malware samples (static + basic dynamic)
✅ Complete CyberDefenders DFIR labs
✅ Perform full memory analysis using Volatility
✅ Write 3 detailed incident investigation reports
✅ Prepare for CySA+ or equivalent defensive cert

-------------------------------------------------

PROFESSIONAL INSIGHT
=================================================

Red Team tests controls.
Blue Team monitors controls.
DFIR proves what actually happened.

Elite defenders:
  → Understand attacker tradecraft.
  → Use threat intelligence proactively.
  → Reduce Mean Time To Detect (MTTD).
  → Reduce Mean Time To Respond (MTTR).

The best security professionals understand
Offense, Defense, and Forensics together.`},
      {sub:'Phase 3 — Advanced Defense (9–18 months)',text:`SIEM ENGINEERING:
• Write Sigma rules (github.com/SigmaHQ/sigma) — vendor-agnostic detection rules
• Elastic Security rules (github.com/elastic/detection-rules) — study real detections
• Chronicle SIEM [research yourself] — Google Cloud SIEM
• Azure Sentinel (Microsoft Defender XDR) [research yourself] — cloud-native SIEM

SECURITY ARCHITECTURE:
• Zero Trust concepts: never trust, always verify, least privilege everywhere
• NIST CSF (Identify → Protect → Detect → Respond → Recover)
• SOC maturity levels: reactive (L1) → proactive hunting (L3)
• Purple team exercises: ATT&CK techniques → detection rules → test

ADVANCED CERTIFICATIONS:
• CompTIA CySA+ (CS0-003) — analyst certification, test after Security+
• BTL1 (Blue Team Labs Level 1) — practical blue team cert (securityblue.team)
• GCFE / GCIH / GREM (GIAC) [research yourself] — gold standard forensics/response
• Microsoft SC-200 Security Operations Analyst [research yourself] — Azure/Sentinel

LOG SOURCES TO MASTER:
Windows (Event Logs, Sysmon) → Linux (/var/log/auth.log, syslog) 
→ Network (Zeek logs, firewall logs) → Cloud (AWS CloudTrail, Azure Activity Log)

MILESTONES:
✅ CySA+ or BTL1 certified | ✅ Built working SIEM detection pipeline | ✅ First SOC job`},
      {sub:'AWS Security Basics',text:`IAM BEST PRACTICES:
Principle of least privilege | Enable MFA for root | Use roles, not users for EC2
Never hardcode credentials — use IAM roles or Secrets Manager
Rotate access keys every 90 days | Enable CloudTrail for audit logs

COMMON MISCONFIGS:
S3 public buckets → data leaks (check: aws s3api get-bucket-acl --bucket NAME)
Security Groups 0.0.0.0/0 on port 22/3389 → exposed SSH/RDP
IMDSv1 enabled → SSRF to steal EC2 credentials via http://169.254.169.254
Overly permissive IAM policies (AdministratorAccess given to services)

TOOLS: ScoutSuite | Prowler | CloudMapper | Pacu (AWS exploitation framework)`},
      {sub:'Container Security',text:`DOCKER SECURITY:
Never run containers as root — use USER directive in Dockerfile
Scan images: docker scan IMAGE | trivy image IMAGE
Secrets in env vars are visible in docker inspect — use Docker Secrets instead
Use read-only filesystems: --read-only flag
Limit capabilities: --cap-drop=ALL --cap-add=NET_BIND_SERVICE

KUBERNETES:
RBAC: ClusterRole vs Role | ClusterRoleBinding vs RoleBinding
Pod Security Standards: Privileged / Baseline / Restricted
Network Policies: restrict pod-to-pod communication
Secrets base64 encoded (not encrypted!) — use Sealed Secrets or Vault`},
    ]},
    {id:'malware',title:'🦠 Malware & Forensics',subs:[
      {sub:'Malware Analysis',text:`=================================================
🧪 MALWARE ANALYSIS – COMPLETE BEGINNER → PRO GUIDE
=================================================

Goal:
Understand what malware does,
how it spreads,
how it persists,
and how to detect & stop it.

-------------------------------------------------
1️⃣ WHAT IS MALWARE ANALYSIS?
-------------------------------------------------

Malware analysis is the process of:
• Studying malicious software safely
• Understanding its behavior
• Extracting Indicators of Compromise (IOCs)
• Supporting detection & incident response

Blue Team Goal:
Detect → Contain → Eradicate → Prevent

-------------------------------------------------
2️⃣ TYPES OF MALWARE
-------------------------------------------------

Virus        → Attaches to files, spreads on execution
Worm         → Self-spreads over network
Trojan       → Disguised as legitimate software
Ransomware   → Encrypts files, demands payment
Rootkit      → Hides deep in OS (kernel level)
Spyware      → Monitors activity silently
Backdoor     → Provides remote unauthorized access
Botnet       → Infected device controlled remotely

-------------------------------------------------
3️⃣ ANALYSIS ENVIRONMENT (VERY IMPORTANT)
-------------------------------------------------

⚠ Never analyze malware on your main system.

Use:
• Virtual Machine (VMware / VirtualBox)
• Isolated network (Host-only or Internal)
• Snapshot before execution
• Disable shared clipboard & folders

Optional:
• REMnux VM (Linux malware analysis)
• FLARE VM (Windows malware analysis)

-------------------------------------------------
4️⃣ TYPES OF MALWARE ANALYSIS
-------------------------------------------------

A) STATIC ANALYSIS (No Execution)

You inspect the file without running it.

Techniques:
• File hashing (MD5 / SHA256)
• strings analysis
• Check file headers (PE structure)
• Detect packer
• VirusTotal lookup

Tools:
• strings
• PEStudio
• Detect-It-Easy
• HashCalc
• ExifTool

What You Look For:
• Suspicious URLs
• IP addresses
• Registry keys
• File paths
• Encoded strings

-------------------------------------------------

B) DYNAMIC ANALYSIS (Execute Safely)

You run malware in a controlled sandbox.

Monitor:
• Processes created
• Network connections
• Registry changes
• File modifications
• Persistence mechanisms

Tools:
• Process Monitor
• Process Explorer
• Wireshark
• RegShot
• ANY.RUN
• Cuckoo Sandbox

-------------------------------------------------
5️⃣ ADVANCED ANALYSIS
-------------------------------------------------

C) MEMORY FORENSICS
• Analyze RAM dump
• Extract injected code
• Find hidden processes

Tool:
• Volatility

D) REVERSE ENGINEERING
• Disassemble binary
• Understand assembly logic
• Deobfuscate code

Tools:
• Ghidra
• IDA
• x64dbg

-------------------------------------------------
6️⃣ COMMON MALWARE TECHNIQUES
-------------------------------------------------

🔹 Obfuscation
Code intentionally made unreadable

🔹 Packing
Executable compressed to hide content

🔹 Process Injection
Inject malicious code into legitimate process

🔹 Persistence
Registry Run keys
Scheduled tasks
Startup folder
Services

🔹 Privilege Escalation
Attempts to gain admin rights

🔹 C2 Communication
Connects to Command & Control server

-------------------------------------------------
7️⃣ INDICATORS OF COMPROMISE (IOCs)
-------------------------------------------------

• File hashes
• Suspicious domains
• IP addresses
• Registry keys
• File names
• Mutex values
• User-Agent strings

Used in:
• SIEM
• EDR
• Firewall rules
• Threat hunting

-------------------------------------------------
8️⃣ BASIC ANALYSIS WORKFLOW
-------------------------------------------------

Step 1: Get hash
Step 2: Check VirusTotal
Step 3: Static analysis (strings, headers)
Step 4: Run in sandbox
Step 5: Monitor behavior
Step 6: Extract IOCs
Step 7: Write report

-------------------------------------------------
9️⃣ MALWARE ANALYSIS REPORT STRUCTURE
-------------------------------------------------

• Executive Summary
• File Details (hash, size, type)
• Static Findings
• Dynamic Findings
• Network Activity
• Persistence Mechanisms
• IOCs
• Risk Assessment
• Recommendations

-------------------------------------------------
🔟 SAFETY RULES
-------------------------------------------------

❌ Never double-click suspicious files.
❌ Never connect infected VM to real network.
❌ Never reuse analysis VM for personal work.
❌ Never upload confidential samples publicly.

-------------------------------------------------
🎯 SKILLS REQUIRED
-------------------------------------------------

• Networking basics (TCP/IP, DNS)
• Windows internals
• Linux fundamentals
• Basic assembly
• Threat intelligence concepts

-------------------------------------------------
🚀 HOW TO PRACTICE
-------------------------------------------------

• Blue Team Labs Online
• LetsDefend
• CyberDefenders
• Malware-Traffic-Analysis.net
• TryHackMe (Blue team paths)

-------------------------------------------------
FINAL MINDSET
-------------------------------------------------

Malware analysis is not about hacking.

It is about:
Understanding attacker behavior
Strengthening defenses
Protecting organizations

Think like the attacker.
Defend like an engineer.
Document like a forensic expert.`},
      {sub:'Digital Forensics',text:`=============================================================
🧠 DIGITAL FORENSICS QUICK REFERENCE
Disk Acquisition | Memory Analysis | Log Investigation
=============================================================

-------------------------------------------------------------
1️⃣ DISK ACQUISITION (FORENSIC IMAGING)
-------------------------------------------------------------

Goal:
Create an exact bit-by-bit copy of storage without altering evidence.

Linux (Raw Imaging):
dd if=/dev/sda of=image.dd bs=4M

if  → input file (source disk)
of  → output file (forensic image)
bs  → block size (faster imaging with 4M)

⚠ Always:
• Use write blocker
• Verify hash (MD5/SHA256) before & after imaging
• Document chain of custody

Windows Tools:
• FTK Imager
• Autopsy

Best Practice:
1. Acquire image
2. Generate hash
3. Verify integrity
4. Work only on image copy (never original disk)

-------------------------------------------------------------
2️⃣ MEMORY FORENSICS (VOLATILITY)
-------------------------------------------------------------

Why Memory Matters:
RAM contains:
• Running processes
• Network connections
• Injected malware
• Encryption keys
• Command history

Step 1: Identify Profile
volatility -f dump.mem imageinfo

→ Determines correct OS profile (e.g., Win10x64)

Step 2: Running Processes
volatility -f dump.mem --profile=Win10x64 pslist

Look for:
• Suspicious process names
• Unknown parent-child relationships
• High PID anomalies

Step 3: Network Connections
volatility -f dump.mem --profile=Win10x64 netscan

Look for:
• Unknown external IPs
• Suspicious ports
• Established outbound connections

Step 4: Command History
volatility -f dump.mem --profile=Win10x64 cmdline

Look for:
• PowerShell abuse
• Encoded commands
• Download & execute patterns

Other Useful Plugins:
• malfind      → detect injected code
• hashdump     → dump password hashes
• svcscan      → services
• handles      → open files

-------------------------------------------------------------
3️⃣ LOG ANALYSIS
-------------------------------------------------------------

Logs tell the attack story.
You are building a timeline of compromise.

----------------------------
WINDOWS LOGS
----------------------------

Tool:
Event Viewer

Critical Event IDs:

4624  → Successful logon
4625  → Failed logon
4688  → New process created
4698  → Scheduled task created
4720  → New user created

What To Look For:
• Brute-force attempts (multiple 4625)
• Suspicious admin logins
• Unknown processes spawning cmd or PowerShell
• Logons at unusual hours

----------------------------
LINUX LOGS
----------------------------

Important Files:
• /var/log/auth.log
• /var/log/syslog

Check SSH activity:
journalctl -u ssh

Search suspicious entries:
grep -i "suspicious" /var/log/auth.log

Look For:
• Failed password attempts
• Root login attempts
• IP addresses from unusual countries
• New user creation

-------------------------------------------------------------
4️⃣ TIMELINE ANALYSIS
-------------------------------------------------------------

Tool:
log2timeline (plaso)

Purpose:
Create chronological sequence of events from:
• Logs
• File metadata
• Registry
• Browser history

Why Timeline Matters:
Attackers leave traces across systems.
Timeline connects the dots.

-------------------------------------------------------------
5️⃣ FORENSIC INVESTIGATION WORKFLOW
-------------------------------------------------------------

1. Identify incident
2. Isolate affected system
3. Acquire disk & memory
4. Hash & verify evidence
5. Analyze memory (live activity)
6. Analyze disk (persistence, artifacts)
7. Review logs
8. Build timeline
9. Extract IOCs
10. Write report

-------------------------------------------------------------
6️⃣ WHAT INVESTIGATORS LOOK FOR
-------------------------------------------------------------

• Initial access vector
• Privilege escalation
• Persistence mechanism
• Lateral movement
• Data exfiltration
• C2 communication

-------------------------------------------------------------
7️⃣ REPORT STRUCTURE
-------------------------------------------------------------

• Executive Summary
• Scope of Investigation
• Evidence Acquired
• Findings
• Timeline
• Indicators of Compromise
• Impact Assessment
• Remediation Recommendations

-------------------------------------------------------------
FINAL MINDSET
-------------------------------------------------------------

Forensics is not guessing.
It is evidence-based reconstruction.

Every:
Log entry,
Process ID,
Timestamp,
Hash value

…is a piece of the puzzle.

Think like an investigator.
Verify everything.
Trust nothing without evidence.
Document everything.
=============================================================`},
    ]},
  ],
  "Full Stack":[
    {id:'html',title:'🌐 HTML & CSS',subs:[
      {sub:'HTML MNC Level',text:`✅ FORM ATTRIBUTES

required
Makes a field mandatory. The form cannot be submitted if this field is empty.

minlength
Sets the minimum number of characters a user must enter.

maxlength
Sets the maximum number of characters allowed.

pattern
Defines a custom rule (using a format) that the input must follow.

autocomplete
Allows the browser to automatically fill in saved user information.

aria-label
Provides a name for screen readers when there is no visible label.

aria-describedby
Connects an input field to extra help text or an error message.

✅ INPUT TYPES

email
Accepts only valid email format.

password
Hides the text while typing for security.

number
Allows only numeric values.

range
Shows a slider to select a value.

date
Opens a calendar to pick a date.

file
Allows users to upload files.

color
Opens a color picker.

search
Used for search fields.

tel
Used for phone numbers.

url
Accepts only valid website links.

✅ DATA ATTRIBUTES

data- attributes*
Used to store extra custom information inside HTML elements.
JavaScript can easily read and use this stored data.

✅ ACCESSIBILITY (A11Y)

alt (for images)
Describes an image for people using screen readers.

aria-expanded
Tells if something (like a menu) is open or closed.

tabindex="0"
Allows an element to be selected using the keyboard.

role="button"
Tells assistive technology that an element works like a button.

role="alert"
Announces important messages immediately to screen readers.

✅ SEO

rel="canonical"
Tells search engines which version of a page is the main one to avoid duplicate content problems.

meta description
A short summary of the page shown in search engine results.`},
      {sub:'CSS Mastery',text:`✅ FLEXBOX

display: flex
Turns a container into a flexible layout system. Items inside can be aligned and distributed easily.

justify-content
Controls horizontal alignment of items (left, center, space-between, etc.).

align-items
Controls vertical alignment of items inside the container.

flex: 1
Makes an item grow and fill available space equally with other flex items.

gap: 16px
Adds space between flex items without using margin.

flex-wrap: wrap
Allows items to move to the next line if there is not enough space.

✅ GRID

grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))
Creates responsive columns that automatically fit as many 200px columns as possible.

place-items: center
Centers items both horizontally and vertically inside grid cells.

grid-area
Defines a specific area for a grid item in a grid layout.

✅ CSS VARIABLES

:root { --primary: #63b3ed }
Defines a global reusable variable.

var(--primary, fallback)
Uses the variable value. If it doesn’t exist, it uses the fallback value.

✅ RESPONSIVE DESIGN

@media (min-width: 768px)
Applies styles only on screens 768px or wider (tablet and desktop).

@media (prefers-color-scheme: dark)
Applies styles when the user’s system is in dark mode.

@media (prefers-reduced-motion)
Applies styles when the user prefers less animation for accessibility reasons.

✅ FLUID DESIGN

font-size: clamp(1rem, 2.5vw, 1.5rem)
Creates flexible text size that grows with screen width but stays within a minimum and maximum size.

Container queries
Allows styling elements based on the size of their parent container (not the whole screen).

✅ ANIMATIONS

@keyframes + animation-name
Defines custom animation steps and applies them to elements.

transition: all 0.2s cubic-bezier(.4,0,.2,1)
Smoothly animates changes (like hover effects) using a custom easing curve.

✅ PERFORMANCE

will-change: transform
Tells the browser that an element will change soon, so it prepares for better performance.

transform: translateZ(0)
Forces hardware acceleration to improve animation smoothness.

contain: layout
Limits layout calculations to that element, improving rendering performance.`},
    ]},
    {id:'js',title:'⚡ JavaScript',subs:[
      {sub:'Core Concepts',text:`✅ CLOSURES

A closure happens when an inner function remembers and keeps access to variables from its outer function — even after the outer function has finished running.

In simple words:
The inner function “remembers” the environment where it was created.

Why it matters:

Used for data privacy

Used in callbacks

Used in function factories

Very common in React and async JavaScript

✅ PROTOTYPES

In JavaScript, every object has a hidden link to another object called its prototype.

When you try to access a property:

JavaScript checks the object itself.

If not found, it checks its prototype.

Then the prototype’s prototype.

This continues up the prototype chain until found or null.

This is how inheritance works in JavaScript.

Important idea:
Objects inherit properties and methods from their prototype.

✅ THIS KEYWORD
Arrow Function

Does NOT have its own this

Uses this from the surrounding (outer) scope

Called lexical this

Regular Function

this depends on how the function is called

Called by an object → this is that object

Called normally → this is global (or undefined in strict mode)

bind / call / apply

Used to manually set what this should be.

bind → returns a new function with fixed this

call → calls function immediately with chosen this

apply → same as call but arguments are passed as array

✅ EVENT LOOP (Execution Order)

JavaScript runs in this order:

Synchronous code runs first.

process.nextTick (Node.js only)

Microtasks (Promises, queueMicrotask)

Macrotasks (setTimeout, setInterval, setImmediate)

Important rule:
Microtasks always run before Macrotasks.

✅ QUIZ OUTPUT EXPLANATION

Execution order:

1 → synchronous
4 → synchronous
3 → Promise (microtask)
2 → setTimeout (macrotask)

Final output:
1, 4, 3, 2

Because:

Sync runs first

Promise runs before setTimeout

setTimeout runs last

✅ MODULES

JavaScript has two module systems:

ESM (Modern – Preferred)

Uses:

import

export

Works in:

Modern browsers

Modern Node.js

Frontend frameworks

Benefits:

Static analysis

Tree shaking

Cleaner syntax

Official standard

CJS (CommonJS – Older)

Uses:

require

module.exports

Works mainly in:

Older Node.js projects

Best Practice

Learn both.
Use ESM for modern development.
Understand CJS for legacy projects and interviews.`},
    ]},
    {id:'db',title:'🗄️ Databases',subs:[
      {sub:'SQL Essentials',text:`✅ KEY SQL COMMAND

SELECT with WHERE, ORDER BY, LIMIT, OFFSET

SELECT → chooses which columns to return.

WHERE → filters rows based on a condition.

ORDER BY → sorts the results (ascending or descending).

LIMIT → restricts how many rows to return.

OFFSET → skips a number of rows before starting to return results.

Commonly used for:

Pagination (page 2, page 3, etc.)

Filtering and sorting data

✅ JOIN TYPES

INNER JOIN
Returns only rows that match in both tables.

LEFT JOIN
Returns all rows from the left table + matching rows from the right table.
If no match, right side becomes NULL.

FULL OUTER JOIN
Returns all rows from both tables.
If no match, missing side becomes NULL.

Use JOINs to combine related data from multiple tables.

✅ GROUP BY + HAVING

GROUP BY
Groups rows that have the same value in a column.

Example use:

Count employees per department

Sum sales per month

HAVING
Filters grouped results (used after GROUP BY).

Important difference:

WHERE filters rows before grouping.

HAVING filters groups after grouping.

✅ INDEXES

An index is like a book index.

It makes searching faster for:

WHERE conditions

JOIN conditions

ORDER BY columns

Without index:
Database scans the entire table (slow).

With index:
Database jumps directly to matching data (fast).

Important:

Speeds up reads.

Slightly slows down INSERT/UPDATE.

✅ TRANSACTIONS

A transaction is a group of queries treated as one unit.

Steps:

BEGIN → start transaction

COMMIT → save changes permanently

ROLLBACK → undo changes

Used when:

Transferring money

Updating multiple related tables

Any critical operation

✅ ACID PROPERTIES

Transactions follow ACID:

Atomicity
All operations succeed or none do.

Consistency
Database rules are always maintained.

Isolation
Transactions do not interfere with each other.

Durability
Once committed, data is permanently saved.

✅ NORMALIZATION

Process of organizing database tables to reduce redundancy.

1NF (First Normal Form)

No repeating groups

Atomic (single) values in each cell

2NF (Second Normal Form)

Must be in 1NF

No partial dependency on composite primary key

3NF (Third Normal Form)

Must be in 2NF

No transitive dependency (non-key depends on non-key)

Goal:

Reduce duplication

Prevent update anomalies

Improve data integrity

✅ N+1 PROBLEM

Problem:
1 query to fetch users
Then N extra queries to fetch posts for each user

If 100 users → 101 queries (slow)

Why bad:

Too many database calls

Performance issues

Solution:

Use JOIN

Use eager loading (load related data in one query)

Goal:
Fetch everything efficiently in fewer queries.`},
      {sub:'NoSQL & Redis',text:`✅ MONGODB

MongoDB is a NoSQL document database.
It stores data as flexible JSON-like documents (not tables).

🔹 Basic Query (find + sort + limit)

find → filters documents based on conditions

$gt → means “greater than”

sort → sorts results (1 = ascending, -1 = descending)

limit → restricts number of returned documents

Used for:

Filtering users

Sorting results

Pagination

🔹 Aggregation

Aggregation is used for:

Data analysis

Grouping

Calculations (sum, avg, count)

Main stages:

$match → filters documents (like WHERE)

$group → groups documents by a field

$sum → calculates total values

Used for:

Total sales per user

Reports

Statistics

🔹 Indexes

Indexes make queries faster.

Speeds up searches

Speeds up sorting

Improves performance

unique index:

Prevents duplicate values (like duplicate emails)

Important:

Faster reads

Slightly slower writes

🔹 When to Use MongoDB

Use MongoDB when you need:

Flexible schema (data structure may change)

Horizontal scaling (large systems)

Document-style data (nested JSON)

Best for:

Blogs

Product catalogs

User profiles

Content management

Real-time apps

✅ REDIS

Redis is an in-memory key-value database.
It is extremely fast because data is stored in RAM.

🔹 Session Storage

Used to store:

Login sessions

Authentication tokens

Why:

Very fast read/write

Temporary storage

🔹 Rate Limiting

Used to:

Limit API requests per user

Prevent spam

Works by:

Increasing a counter

Setting expiration time

🔹 Pub/Sub

Publish/Subscribe system.

Used for:

Chat systems

Real-time notifications

Messaging systems

One service publishes messages.
Others subscribe and receive instantly.

🔹 Caching

Stores frequently used data temporarily.

Why:

Reduces database load

Improves speed

Saves computation time

Data automatically expires after set time.

🔹 Leaderboards

Uses Sorted Sets.

Allows:

Ranking users by score

Getting top players

Finding user position

Used in:

Games

Ranking systems

Points systems

🔹 Common Redis Commands (What They Do)

SET → store value
GET → retrieve value
DEL → delete key
EXPIRE → set expiration time
TTL → check remaining time before expiration
INCR → increase numeric value
LPUSH → add item to list (left side)
LPOP → remove item from list
SADD → add item to set (unique values)
ZADD → add item to sorted set (with score)`},
    ]},
    {id:'devops',title:'⚙️ DevOps & Cloud',subs:[
      {sub:'Docker & Kubernetes',text:`✅ DOCKER ESSENTIALS

Docker is used to package an application with all its dependencies into a container so it runs the same everywhere.

🔹 Dockerfile (What Each Instruction Does)

FROM node:20-alpine
Defines the base image (lightweight Node.js environment).

WORKDIR /app
Sets the working directory inside the container.

COPY . .
Copies project files into the container.

RUN npm ci
Installs project dependencies.

EXPOSE 3000
Tells Docker the app runs on port 3000.

CMD ["node","index.js"]
Defines the default command to start the app.

🔹 Docker Commands

docker build
Builds a Docker image from the Dockerfile.

-t myapp:1.0
Tags the image with name and version.

docker run
Starts a container from the image.

-d
Runs in background (detached mode).

-p 3000:3000
Maps host port to container port.

--name app
Names the container.

🔹 Docker Compose

Used to run multiple containers together (e.g., app + database).

docker-compose up -d
Starts all services in background.

docker logs -f app
Shows live logs of a container.

docker exec -it app sh
Opens a shell inside a running container.

✅ KUBERNETES (K8S)

Kubernetes manages and scales containers automatically.

🔹 Pod

Smallest unit in Kubernetes.
Runs one or more containers.

Think of it as:
A wrapper around container(s).

🔹 Deployment

Manages Pods.

Features:

Maintains desired number of Pods

Rolling updates (no downtime)

Rollback to previous version

Self-healing (restarts crashed Pods)

🔹 Service

Exposes Pods so they can communicate.

Types:

ClusterIP
Internal access only (inside cluster).

NodePort
Exposes service on a node’s IP and port.

LoadBalancer
Cloud-based external load balancer.

🔹 ConfigMap

Stores non-sensitive configuration:

Environment variables

App settings

🔹 Secret

Stores sensitive data:

Passwords

API keys

Tokens

Data is base64 encoded (not encrypted by default).

🔹 kubectl Commands

kubectl get pods
Lists running pods.

kubectl describe pod NAME
Shows detailed information about a pod.

kubectl logs NAME
Shows logs of a pod.

kubectl exec -it NAME -- sh
Opens a shell inside a pod.

🔹 Horizontal Pod Autoscaler (HPA)

Automatically scales the number of Pods based on:

CPU usage

Memory usage

Custom metrics

If traffic increases → more Pods
If traffic decreases → fewer Pods

Ensures:

Better performance

Cost efficiency

Automatic scaling`},
      {sub:'CI/CD & GitHub Actions',text:`GITHUB ACTIONS WORKFLOW:
name: CI/CD Pipeline
on: push: branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4 with: node-version: 20
      - run: npm ci
      - run: npm test
      - run: npm run build
      - uses: docker/login-action (if pushing image)

CI BEST PRACTICES:
Fast feedback loop: lint → unit test → integration test → build → deploy
Never commit secrets — use GitHub Actions Secrets (vars.MY_SECRET)
Branch protection: require CI pass before merge
Rollback strategy: blue/green or canary deployments
Tools: GitHub Actions | GitLab CI | Jenkins | CircleCI | ArgoCD (GitOps)`},
    ]},
    {id:'sysdesign',title:'🏗️ System Design',subs:[
      {sub:'Core Concepts',text:`SCALABILITY PATTERNS:
Horizontal scaling (add servers) vs Vertical (bigger server) — prefer horizontal
Load Balancing: Round Robin | Least Connections | IP Hash
Caching layers: CDN (static) → API Gateway → App Cache (Redis) → DB Cache
CAP Theorem: Consistency, Availability, Partition Tolerance — pick 2

DATABASE SCALING:
Read Replicas — route SELECT queries to replicas, writes to primary
Sharding — split data by key (user_id % N) across multiple DBs
Database partitioning — split large tables by range/list/hash

COMMON INTERVIEW QUESTIONS:
Design URL Shortener: hashing (base62) + redirect table + Redis cache
Design Twitter Feed: fan-out on write vs fan-out on read (hybrid for celebrities)
Design Netflix: CDN for video + metadata DB + microservices for recommendations`},
      {sub:'Microservices & APIs',text:`REST vs GraphQL vs gRPC:
REST: stateless, cacheable, HTTP methods. Best for: public APIs
GraphQL: client specifies exact data. Best for: complex nested data, mobile apps
gRPC: binary protobuf, bidirectional streaming. Best for: internal microservices

API DESIGN PRINCIPLES:
Versioning: /api/v1/users (URL) or Accept: application/vnd.api+json;version=1 (header)
Pagination: cursor-based > offset (no data drift on concurrent writes)
Rate limiting: 429 Too Many Requests + Retry-After header
Error responses: {error: "USER_NOT_FOUND", message: "...", statusCode: 404}
Idempotency: PUT/DELETE are idempotent | POST is not — use idempotency keys

MESSAGE QUEUES: RabbitMQ (AMQP) | Apache Kafka (log streaming, high throughput)
Use cases: async tasks, event sourcing, decoupling services, retry logic`},
    ]},
  ],
  AI:[
    {id:'ml',title:'🤖 Machine Learning',subs:[
      {sub:'Core ML Concepts',text:`🔵 SUPERVISED LEARNING

Supervised learning means training a model using labeled data (you know the correct answers during training).

1️⃣ Regression

Used when predicting continuous numerical values.

Examples:

House price prediction

Stock price forecasting

Temperature prediction

Common loss functions:

MSE (Mean Squared Error) – Penalizes large mistakes more heavily. Sensitive to outliers.

MAE (Mean Absolute Error) – Treats all errors equally. More robust to outliers.

2️⃣ Classification

Used when predicting categories or classes.

Examples:

Spam vs not spam

Fraud detection

Disease diagnosis

Cross-entropy (log loss) is commonly used:

Measures how confident and correct predictions are.

Strongly penalizes confident wrong predictions.

Standard choice for neural networks.

3️⃣ Train / Validation / Test Split (70/15/15)

A common data splitting strategy:

70% Training set → Model learns patterns

15% Validation set → Tune hyperparameters & prevent overfitting

15% Test set → Final unbiased performance evaluation

This prevents “cheating” and ensures generalization.

🟢 UNSUPERVISED LEARNING

Unsupervised learning works with unlabeled data.

🔹 K-Means

Clustering algorithm.

Groups data into K clusters based on similarity.

Requires you to choose number of clusters beforehand.

🔹 PCA (Principal Component Analysis)

Dimensionality reduction technique.

Compresses data while preserving maximum variance.

Often used before visualization or modeling.

🔹 DBSCAN

Density-based clustering.

Can find arbitrarily shaped clusters.

Automatically detects outliers.

Does not require pre-specifying number of clusters.

🔹 Autoencoders

Neural networks trained to reconstruct input data.

Used for:

Dimensionality reduction

Anomaly detection

Feature learning

🔹 t-SNE

Visualization technique.

Good at showing clusters in 2D/3D.

Preserves local structure well.

Not ideal for large datasets.

🔹 UMAP

Faster alternative to t-SNE.

Preserves both global and local structure better.

Scales better to large datasets.

📊 EVALUATION METRICS
🔹 Classification Metrics

Accuracy – Overall correctness.

Precision – How many predicted positives are actually correct.

Recall – How many actual positives were found.

F1-score – Balance between precision and recall.

AUC-ROC – Measures classification quality across thresholds.

Log Loss – Measures confidence of probability predictions.

🔹 Regression Metrics

RMSE – Penalizes large errors more.

R² (R-squared) – Explains how much variance the model captures.

🛡️ REGULARIZATION (Preventing Overfitting)

Regularization reduces overfitting by constraining model complexity.

🔹 L1 (Lasso)

Encourages sparsity.

Can eliminate irrelevant features.

Useful for feature selection.

🔹 L2 (Ridge / Weight Decay)

Shrinks weights smoothly.

Reduces model sensitivity.

More stable than L1.

🔹 Dropout

Randomly turns off neurons during training.

Prevents co-dependency of neurons.

Very effective in deep learning.

🔹 Early Stopping

Stop training when validation performance stops improving.

Prevents overfitting automatically.

🔹 Data Augmentation

Artificially increases dataset size.

Common in computer vision (rotations, flips).

Improves generalization.

⚡ OPTIMIZATION ALGORITHMS

Optimization algorithms update model weights to minimize loss.

🔹 SGD (Stochastic Gradient Descent)

Updates weights using small batches.

Simple and memory efficient.

Can be noisy.

🔹 Momentum

Adds “velocity” to SGD.

Helps move faster in correct direction.

Reduces oscillations.

🔹 RMSProp

Adapts learning rate per parameter.

Good for non-stationary problems.

🔹 Adam (Most Popular in Practice)

Combines Momentum + RMSProp.

Adaptive learning rates.

Works well out-of-the-box.

Default choice in many deep learning tasks.

🔹 Cosine Learning Rate Scheduling

Learning rate gradually decreases following a cosine curve.

Helps fine-tune models at later stages.

Often improves final accuracy.

🔹 Warmup

Starts training with a very small learning rate.

Gradually increases it.

Prevents unstable early training.

Especially useful in large transformers.`},
      {sub:'Deep Learning & LLMs',text:`🔷 TRANSFORMERS
🔹 Attention Mechanism (Core Idea)

Attention allows each word to:

Look at all other words

Decide which ones matter more

Build a weighted representation

Process conceptually:

Compare a word with all others (Query vs Key similarity).

Normalize the importance scores (softmax).

Use those scores to combine Value vectors.

Produce context-aware output.

👉 Result: Each token becomes aware of relevant context.

🔹 Multi-Head Attention

Instead of one attention operation:

Run h parallel attention heads

Each head learns different relationships:

Grammar

Long-range dependencies

Coreference

Syntax

Outputs are combined → richer representation.

Think of it as:

Multiple “perspectives” analyzing the same sentence.

🔷 BERT vs GPT
🔹 BERT (Encoder-Only)

Fully bidirectional.

Sees left and right context simultaneously.

Strong for understanding tasks.

Pretraining tasks:

MLM (Masked Language Modeling) – Predict masked words.

NSP (Next Sentence Prediction) – Predict sentence continuity.

Best for:

Classification

Question answering

Embeddings

🔹 GPT (Decoder-Only)

Causal (left-to-right).

Cannot see future tokens.

Predicts next token sequentially.

Pretraining:

Next-token prediction

Best for:

Text generation

Chat

Story writing

Code generation

🔷 RLHF (Reinforcement Learning from Human Feedback)

Aligns models with human preferences.

Pipeline:
1️⃣ SFT (Supervised Fine-Tuning)

Train on high-quality human-written responses.

2️⃣ Reward Model Training

Humans rank outputs.

Model learns what “good” looks like.

3️⃣ PPO Optimization

Reinforcement learning improves policy.

Maximizes reward while staying close to base model.

🔹 Newer Alternatives
Constitutional AI

Uses a set of principles instead of human rankings.

Self-critique + revision process.

DPO (Direct Preference Optimization)

Skips PPO.

Directly optimizes from preference data.

Simpler and more stable than RLHF.

🔷 RAG (Retrieval-Augmented Generation)

Adds external knowledge to LLMs.

Pipeline:

1️⃣ User query
2️⃣ Convert query to embedding
3️⃣ Search vector database (e.g., FAISS)
4️⃣ Retrieve relevant chunks
5️⃣ Insert chunks into prompt
6️⃣ LLM generates grounded answer

Benefits:

Reduces hallucinations

Access to private or up-to-date data

No need to retrain model

🔷 FINE-TUNING METHODS
🔹 Full Fine-Tuning

Update all model parameters.

Best performance.

Very expensive (GPU + memory heavy).

🔹 LoRA (Low-Rank Adaptation)

Freeze original weights.

Train small adapter matrices.

Very memory efficient.

Almost same performance in many tasks.

🔹 QLoRA

Quantize base model to 4-bit precision.

Apply LoRA adapters on top.

Extremely memory efficient.

Enables large models on small GPUs.

🔷 EVALUATION METHODS
🔹 BLEU

Measures n-gram overlap.

Common in translation.

🔹 ROUGE

Measures overlap with reference summaries.

Used in summarization.

🔹 Perplexity

Measures how surprised the model is.

Lower = better language modeling.

Does NOT measure quality of chat well.

🔹 Human Evaluation

Gold standard for chat models.

Evaluates:

Helpfulness

Harmlessness

Coherence

Factuality`},
    ]},
    {id:'nlp',title:'📝 NLP & GenAI',subs:[
      {sub:'NLP Fundamentals',text:`🔹 TEXT PREPROCESSING PIPELINE

Raw text must be cleaned before modeling.

1️⃣ Tokenization

Split text into units (words, subwords, or characters).

Modern models use subword tokenization (like WordPiece or BPE).

Example:
"playing" → play + ##ing (subword)

2️⃣ Lowercasing

Convert all text to lowercase.

Reduces vocabulary size.

May remove useful signals (e.g., names).

3️⃣ Stop Word Removal

Remove very common words:

the, is, and, of, in

Helps traditional models.

Not always good for deep learning (context matters).

4️⃣ Stemming / Lemmatization

Stemming

Cuts words to base form crudely.
"running" → "run"

Lemmatization

Uses linguistic rules.
"better" → "good"

Lemmatization is more accurate.

5️⃣ Vectorization

Convert text into numbers (models cannot read text directly).

🔹 VECTORIZATION METHODS
🟦 Bag of Words (BoW)

Counts word occurrences.

Creates large sparse matrix.

Ignores word order.

Simple but effective for small tasks.

Limitation:

“Dog bites man” = “Man bites dog” (same representation)

🟦 TF-IDF

Improves BoW by:

Downweighting common words

Upweighting rare but informative words

Better signal than raw counts.

Still:

Sparse

No semantic meaning

No word order

🟦 Word2Vec

Dense word embeddings (~300 dimensions).

Learns meaning from context.

Captures semantic relationships.

Famous property:

king − man + woman ≈ queen

Words with similar meaning are close in vector space.

Limitation:

Same embedding for every context.

“Bank” always same vector.

🟦 GloVe

Based on global co-occurrence statistics.

Matrix factorization approach.

Similar quality to Word2Vec.

Captures global relationships better.

Still static (not contextual).

🟦 BERT Embeddings

Contextual embeddings.

The word:

“bank” (river bank)

“bank” (financial bank)

→ Different embeddings depending on sentence.

Major breakthrough:

Meaning depends on context.

🔹 NLP TASKS
🟢 Sentiment Analysis

Classify text into:

Positive

Negative

Neutral

Applications:

Product reviews

Social media monitoring

Customer feedback

Usually solved with classification models.

🟢 Named Entity Recognition (NER)

Extract structured entities from text:

Example:
“Barack Obama was born in Hawaii.”

Output:

PERSON → Barack Obama

LOCATION → Hawaii

Common entity types:

PERSON

ORG

DATE

LOCATION

MONEY

Used in:

Information extraction

Search systems

Knowledge graphs

🟢 Text Summarization

Two types:

1️⃣ Extractive

Select important sentences from original text.

Simpler.

More factual.

2️⃣ Abstractive

Generate new sentences.

More human-like.

Requires generative models.

Modern transformers excel here.

🟢 Machine Translation

Translate text between languages.

Modern approach:

Encoder-decoder architecture

Attention mechanism

Original Transformer model

Encoder → Understand source
Decoder → Generate target

Now dominated by large multilingual transformers.

🟢 Question Answering (QA)

Two main types:

1️⃣ Extractive QA

Select answer span from given context.

Used in SQuAD benchmark.

Example: highlight answer in paragraph.

2️⃣ Generative QA

Model generates free-form answer.

Used in chat systems.

Can combine with retrieval (RAG).

🔥 Big Picture Evolution

BoW → TF-IDF → Word2Vec → GloVe → BERT → Large Language Models

From:

Counting words
To:

Understanding context
To:

Generating language`},
      {sub:'Prompt Engineering',text:`🔹 CORE PROMPTING TECHNIQUES
🟢 Zero-Shot Prompting

No examples given.
You directly instruct the model.

Example:

“Classify this review as positive or negative: …”

Works well with large modern LLMs because they already learned general patterns during pretraining.

Best for:

Simple classification

Basic transformations

Direct Q&A

🟢 Few-Shot Prompting

Provide 2–3 examples before the real question.

Example structure:

Input → Output

Input → Output

Input → ?

Why it works:

Model infers the pattern from examples.

Reduces ambiguity.

Improves structured output quality.

Best for:

Custom formatting

Specialized classification

Domain-specific tone

🟢 Chain-of-Thought (CoT)

Encourage step-by-step reasoning.

Trigger phrase:

“Let’s think step by step.”

Effect:

Improves reasoning accuracy

Reduces logical jumps

Especially useful for math, logic, multi-step tasks

It works because:

The model generates intermediate reasoning tokens before the final answer.

🟢 ReAct (Reason + Act)

LLM alternates between:

Thinking (reasoning steps)

Acting (calling tools)

Pattern:

Thought

Action (e.g., search, calculator, API)

Observation

Thought

Final answer

Used in:

Agents

Tool-using LLM systems

Web-browsing assistants

It bridges reasoning + real-world information access.

🔹 SYSTEM PROMPT STRUCTURE

A well-designed system prompt usually includes:

1️⃣ Role

Define identity.

“You are a senior Python developer.”

2️⃣ Task

What should be done?

“Explain {concept}.”

3️⃣ Format

Output structure.

“Use 3 bullet points.”

4️⃣ Constraints

Limit behavior.

“Use simple language. No jargon.”

5️⃣ Examples (Optional)

Clarifies expectations.

🔥 Strong Prompt Template

Role + Task + Format + Constraints + Examples

Example:

You are a senior Python developer.
Explain {concept} in 3 bullet points.
Use simple language. No jargon.
Keep each bullet under 20 words.

Clear instructions = predictable output.

🔹 ADVANCED REASONING TECHNIQUES
🌳 Tree-of-Thought (ToT)

Instead of one reasoning path:

Explore multiple reasoning branches simultaneously.

Evaluate which branch looks most promising.

Continue expanding best branches.

Think of it as:

Breadth-first search over reasoning steps.

More compute-heavy but improves complex problem solving.

🗳 Self-Consistency

Generate multiple Chain-of-Thought responses.

Take majority vote on final answer.

Why it works:

Different reasoning paths may lead to same correct solution.

Reduces random reasoning errors.

Improves:

Math

Logical puzzles

Structured reasoning tasks

🔍 RAG + Prompting

Combine retrieval with structured prompting.

Pipeline:

Retrieve relevant documents.

Inject them into the prompt.

Ask the model to answer using only that context.

Benefits:

Grounded answers

Reduced hallucination

Access to private knowledge

Prompt pattern:

“Answer using only the provided context.”

🛡 Guardrails

Safety & reliability mechanisms.

Input Guardrails

Prompt injection detection

PII detection

Toxic content filtering

Output Guardrails

Response validation

Format enforcement

Policy compliance checks

Often implemented via:

Regex rules

Classifiers

Secondary LLM validators

Critical for:

Production systems

Enterprise AI

Regulated industries

🔥 Big Picture

Basic prompting → CoT → ReAct → Tree-of-Thought
Static LLM → Tool-using Agent → Retrieval-augmented Agent

Prompting is not just wording — it is:

Designing cognitive scaffolding for the model.`},
    ]},
    {id:'mlops',title:'🔧 MLOps',subs:[
      {sub:'ML Pipeline & Tracking',text:`🔷 ML LIFECYCLE

A complete machine learning workflow from idea to production.

1️⃣ Data Collection

Gather raw data (logs, APIs, sensors, databases).

Ensure labeling quality.

Check legal/compliance requirements.

2️⃣ EDA (Exploratory Data Analysis)

Understand distributions.

Check missing values.

Detect outliers.

Identify correlations.

Spot data leakage risks.

Goal:

Understand your data before modeling.

3️⃣ Feature Engineering

Create meaningful input variables.

Handle categorical encoding.

Normalize/scale numeric values.

Create time-based features.

Remove leakage features.

Good features often matter more than model choice.

4️⃣ Model Training

Choose algorithm.

Tune hyperparameters.

Use cross-validation.

Track experiments.

5️⃣ Evaluation

Use proper metrics.

Check bias and fairness.

Evaluate on holdout test set.

Compare against baseline.

Never deploy without a baseline comparison.

6️⃣ Deployment

Batch predictions (offline scoring)

Real-time API inference

Edge deployment (mobile/IoT)

Use:

Docker containers

CI/CD pipelines

Model registry

7️⃣ Monitoring

Monitor in production:

Prediction distribution

Data drift

Model drift

Latency

Error rates

Models degrade over time — monitoring is critical.

🔷 EXPERIMENT TRACKING

Tools:

Weights & Biases

MLflow

What to Log

Hyperparameters

Metrics per epoch

Training/validation curves

Confusion matrices

Model artifacts

Dataset version

Git commit hash

Why?

If you can’t reproduce it, it doesn’t exist.

🔹 Dataset Versioning (DVC)

Data Version Control:

Version datasets like Git.

Track which data produced which model.

Store large data outside Git.

Prevents:

“Which dataset did we use?” chaos.

🔹 Reproducibility Best Practices

Fix random seeds.

Log library versions.

Log hardware details.

Use Docker for consistent training environment.

Store preprocessing pipelines.

Reproducibility = production readiness.

🔷 FEATURE STORES

Purpose:

Centralized feature management for training + serving.

Popular systems:

Feast

Tecton

Vertex AI Feature Store

Why Feature Stores Matter
🟢 Avoid Training-Serving Skew

Ensure same feature logic is used in:

Offline training

Online inference

Mismatch = silent model failure.

🟢 Share Features Across Teams

Reuse engineered features.

Avoid duplication.

Standardize definitions.

Example:
“Customer lifetime value” should be computed once.

🟢 Online vs Offline Store
🔹 Offline Store

Used for batch training.

Large historical datasets.

Stored in data warehouse (BigQuery, Snowflake).

🔹 Online Store

Low-latency serving.

Real-time predictions.

Typically Redis or NoSQL.

Both must stay consistent.

🔷 DATA VALIDATION

Data issues cause most ML failures.

🟢 Great Expectations

Used to assert data quality rules:

Schema validation

Column types

Null rate thresholds

Value ranges

Unique constraints

Example checks:

Null rate < 5%

Age between 0 and 120

Category values in allowed set

🔷 DATA DRIFT DETECTION

Production data changes over time.

Two types:

Data drift (input distribution changes)

Concept drift (label relationship changes)

🔹 KL Divergence

Measures:

Difference between probability distributions.

Used for:

Comparing training vs production feature distributions.

🔹 Population Stability Index (PSI)

Measures:

Shift in distribution across time windows.

Common thresholds:

< 0.1 → Stable

0.1–0.25 → Moderate shift

0.25 → Significant drift

🔔 ALERT WHEN

Null rate > 5%

Distribution shift detected

New category appears

Schema changes

Prediction distribution shifts

Model performance drops

Alerts should trigger:

Investigation

Retraining pipeline

Rollback if needed

🔥 Production-Grade ML Stack (Big Picture)

Data → Feature Store → Training → Experiment Tracking → Model Registry → Deployment → Monitoring → Retraining Loop

Modern ML is:

20% modeling
80% data + infrastructure + monitoring`},
      {sub:'Model Deployment',text:`SERVING PATTERNS:
REST API: FastAPI + Uvicorn → simple, stateless predictions
Batch inference: scheduled jobs on S3/BigQuery → cost-effective for non-realtime
Streaming: Kafka → Flink → model → Kafka output (fraud detection, recommendations)
Edge deployment: ONNX / TensorFlow Lite → mobile, IoT devices

OPTIMIZATION:
Quantization: FP32 → INT8 (4× smaller, ~2× faster, minor accuracy loss)
Pruning: remove near-zero weights (unstructured) or entire neurons (structured)
Knowledge Distillation: train small student model to mimic large teacher model
ONNX: framework-agnostic model format for cross-platform deployment

MONITORING (production):
Data drift: input distribution shifts vs training data
Concept drift: model accuracy degrades over time
Latency: P50/P95/P99 SLAs | Throughput: requests/second
Tools: Evidently AI | Arize AI | Prometheus + Grafana`},
    ]},
  ],
  Programming:{
    beginner:{
      Java:[
      "Variables - Write a program to swap two variables without using a third variable.",
"Operators - Write a program to check if a number is even or odd.",
"Conditional Statements - Write a program to find the largest of three numbers.",
"Loops - Write a program to calculate factorial using loop and recursion.",
"Prime Numbers - Write a program to check if a number is prime.",
"Fibonacci - Write a program to print Fibonacci series up to n terms.",
"Palindrome Number - Write a program to check if a number is palindrome.",
"Digits - Write a program to find sum of digits of a number.",
"Power - Write a program to calculate power of a number without using built-in functions.",
"GCD & LCM - Write a program to find GCD and LCM of two numbers.",
"Leap Year - Write a program to check if a year is a leap year.",
"Simple Interest - Write a program to calculate simple interest.",
"Temperature Conversion - Write a program to convert Celsius to Fahrenheit.",
"ASCII - Write a program to print ASCII value of a character.",
"Positive/Negative - Write a program to check if a number is positive, negative, or zero.",
"Star Pattern - Write a program to print right triangle star pattern.",
"Pyramid Pattern - Write a program to print pyramid star pattern.",
"Floyd’s Triangle - Write a program to print Floyd’s triangle.",
"Pascal’s Triangle - Write a program to print Pascal’s triangle.",
"Number Series - Write a program to print numbers from 1 to 100.",
"String Reverse - Write a program to reverse a string without using built-in method.",
"String Palindrome - Write a program to check if a string is palindrome.",
"Anagram - Write a program to check if two strings are anagrams.",
"Character Frequency - Write a program to count frequency of characters in a string.",
"Duplicate Characters - Write a program to remove duplicate characters from a string.",
"First Non-Repeating - Write a program to find first non-repeating character in a string.",
"Substring - Write a program to generate all substrings of a string.",
"String Rotation - Write a program to check if one string is rotation of another.",
"String Compression - Write a program to perform basic string compression.",
"Longest Substring - Write a program to find longest substring without repeating characters.",
"Array Maximum - Write a program to find largest element in an array.",
"Array Minimum - Write a program to find smallest element in an array.",
"Second Largest - Write a program to find second largest element in an array.",
"Array Sorting - Write a program to sort an array using bubble sort.",
"Binary Search - Write a program to implement binary search.",
"Linear Search - Write a program to implement linear search.",
"Merge Arrays - Write a program to merge two sorted arrays.",
"Missing Number - Write a program to find missing number in array from 1 to n.",
"Duplicate Elements - Write a program to find duplicate elements in an array.",
"Array Rotation - Write a program to rotate array by k positions.",
"Subarray Sum - Write a program to find subarray with given sum.",
"Maximum Subarray - Write a program to find maximum subarray sum using Kadane’s algorithm.",
"Matrix Addition - Write a program to add two matrices.",
"Matrix Multiplication - Write a program to multiply two matrices.",
"Matrix Transpose - Write a program to find transpose of a matrix.",
"Class - Write a program to create a class and object.",
"Constructor - Write a program to demonstrate constructor overloading.",
"Method Overloading - Write a program to demonstrate method overloading.",
"Method Overriding - Write a program to demonstrate method overriding.",
"Inheritance - Write a program to demonstrate inheritance.",
"Encapsulation - Write a program to demonstrate encapsulation.",
"Abstraction - Write a program to demonstrate abstraction using interface or abstract class.",
"Exception Handling - Write a program to handle divide by zero exception.",
"Custom Exception - Write a program to create and use custom exception.",
"Collections - Write a program to store elements in ArrayList/List and iterate them.",
"HashMap - Write a program to count frequency of elements using HashMap/Dictionary.",
"Set - Write a program to remove duplicates using Set.",
"Stack - Write a program to implement stack using array or list.",
"Queue - Write a program to implement queue using array or list.",
"Recursion - Write a program to solve Tower of Hanoi problem.",
"Two Sum - Write a program to find two numbers in array whose sum equals target.",
"Palindrome Linked List - Write a program to check if a linked list is palindrome.",
"Reverse Linked List - Write a program to reverse a linked list.",
"Balanced Parentheses - Write a program to check if parentheses are balanced.",
      ],
      Python:[
        "Variables - Write a program to swap two numbers without using a third variable.",
"Data Types - Write a program to check the data type of user input.",
"Operators - Write a program to check if a number is even or odd.",
"Conditional Statements - Write a program to find the largest of three numbers.",
"Loops - Write a program to print numbers from 1 to 100 using a loop.",
"Recursion - Write a program to calculate factorial using recursion.",
"Prime Number - Write a program to check if a number is prime.",
"Fibonacci - Write a program to print Fibonacci series up to n terms.",
"Palindrome - Write a program to check if a number is palindrome.",
"String Reverse - Write a program to reverse a string without using slicing.",
"Anagram - Write a program to check if two strings are anagrams.",
"Character Frequency - Write a program to count frequency of characters in a string.",
"List - Write a program to remove duplicates from a list.",
"List Comprehension - Write a program to create a list of squares using list comprehension.",
"Tuple - Write a program to convert a tuple into a list.",
"Dictionary - Write a program to merge two dictionaries.",
"Set - Write a program to find common elements between two lists using set.",
"Sorting - Write a program to sort a list without using built-in sort function.",
"Searching - Write a program to implement binary search.",
"Two Sum - Write a program to find two numbers in a list whose sum equals target.",
"Second Largest - Write a program to find second largest element in a list.",
"Missing Number - Write a program to find missing number in range 1 to n.",
"Duplicate Elements - Write a program to find duplicate elements in a list.",
"Matrix - Write a program to transpose a matrix.",
"File Handling - Write a program to read a file and count number of words.",
"Exception Handling - Write a program to handle division by zero exception.",
"Custom Exception - Write a program to create and use custom exception.",
"OOPS - Write a program to demonstrate class and object creation.",
"Inheritance - Write a program to demonstrate inheritance in Python.",
"Polymorphism - Write a program to demonstrate method overriding.",
"Encapsulation - Write a program to demonstrate encapsulation using private variables.",
"Abstraction - Write a program to demonstrate abstraction using ABC module.",
"Decorators - Write a program to create a simple decorator function.",
"Generators - Write a program to create a generator for Fibonacci numbers.",
"Lambda - Write a program to sort a list of tuples using lambda function.",
"Map Filter Reduce - Write a program to use map, filter and reduce functions.",
"Collections Module - Write a program using Counter to count elements.",
"Heap - Write a program to find k largest elements using heapq.",
"Stack - Write a program to implement stack using list.",
"Queue - Write a program to implement queue using collections.deque.",
"Linked List - Write a program to reverse a singly linked list.",
"Balanced Parentheses - Write a program to check if parentheses are balanced.",
"Sliding Window - Write a program to find maximum sum of subarray of size k.",
"Kadane Algorithm - Write a program to find maximum subarray sum.",
"String Rotation - Write a program to check if one string is rotation of another.",
"Longest Substring - Write a program to find longest substring without repeating characters.",
"Recursion Backtracking - Write a program to solve N-Queens problem.",
"Dynamic Programming - Write a program to solve coin change problem.",
"Multithreading - Write a program to create multiple threads using threading module.",
"API Handling - Write a program to make a GET request using requests module.",
      ],
    },
    Java:{
      questions:[
"Arrays - Write a program to find two numbers in an array whose sum equals a target.",
"Arrays - Write a program to find the maximum subarray sum.",
"Arrays - Write a program to find the product of array except self.",
"Arrays - Write a program to rotate an array by k positions.",
"Arrays - Write a program to merge overlapping intervals.",
"Arrays - Write a program to find the missing number in an array.",
"Arrays - Write a program to find duplicate numbers in an array.",
"Strings - Write a program to find the longest substring without repeating characters.",
"Strings - Write a program to check if two strings are anagrams.",
"Strings - Write a program to group anagrams from a list of strings.",
"Strings - Write a program to find the longest palindromic substring.",
"Strings - Write a program to convert string to integer (atoi).",
"Strings - Write a program to check if a string is a valid palindrome.",
"Two Pointers - Write a program to remove duplicates from sorted array.",
"Two Pointers - Write a program to check if a string is palindrome using two pointers.",
"Sliding Window - Write a program to find maximum sum subarray of size k.",
"Binary Search - Write a program to search an element in rotated sorted array.",
"Binary Search - Write a program to find first and last position of an element in sorted array.",
"Sorting - Write a program to implement quicksort.",
"Sorting - Write a program to implement mergesort.",
"Recursion - Write a program to generate all permutations of a string.",
"Backtracking - Write a program to solve N-Queens problem.",
"Backtracking - Write a program to generate all subsets of a set.",
"Linked List - Write a program to reverse a linked list.",
"Linked List - Write a program to detect cycle in a linked list.",
"Linked List - Write a program to merge two sorted linked lists.",
"Stack - Write a program to check if parentheses are balanced.",
"Stack - Write a program to implement a min stack.",
"Queue - Write a program to implement queue using two stacks.",
"Heap - Write a program to find k largest elements in an array.",
"Heap - Write a program to merge k sorted arrays.",
"Hashing - Write a program to find first non-repeating character in a string.",
"Hashing - Write a program to find intersection of two arrays.",
"Dynamic Programming - Write a program to solve coin change problem.",
"Dynamic Programming - Write a program to find longest increasing subsequence.",
"Dynamic Programming - Write a program to solve 0/1 knapsack problem.",
"Dynamic Programming - Write a program to find edit distance between two strings.",
"Greedy - Write a program to solve activity selection problem.",
"Greedy - Write a program to find minimum number of platforms required.",
"Graph - Write a program to perform BFS traversal.",
"Graph - Write a program to perform DFS traversal.",
"Graph - Write a program to detect cycle in a graph.",
"Graph - Write a program to find shortest path using Dijkstra’s algorithm.",
"Tree - Write a program to find height of a binary tree.",
"Tree - Write a program to perform inorder traversal of a binary tree.",
"Tree - Write a program to check if a binary tree is balanced.",
"Tree - Write a program to find lowest common ancestor in a binary tree.",
"Trie - Write a program to implement Trie with insert and search operations.",
"Bit Manipulation - Write a program to find single number where others appear twice.",
"System Design Logic - Write a program to design an LRU cache.",
      ],
      shortcuts:[
        {cat:"Collections",items:["List<String> list = new ArrayList<>() — dynamic array","Map<K,V> map = new HashMap<>() — O(1) get/put","Set<Integer> set = new HashSet<>() — unique elements","Queue<Integer> q = new LinkedList<>() — FIFO","Deque<Integer> dq = new ArrayDeque<>() — double-ended queue","PriorityQueue<Integer> pq = new PriorityQueue<>() — min-heap","Collections.sort(list) | Collections.reverse(list)","Collections.frequency(list, elem) — count occurrences"]},
        {cat:"String Methods",items:["s.length() | s.charAt(i) | s.substring(i,j)","s.toLowerCase() | s.toUpperCase() | s.trim()","s.split(regex) → String[] | String.join(delim, arr)","s.contains(sub) | s.startsWith(p) | s.endsWith(p)","s.replace(old,new) | s.replaceAll(regex,new)","s.indexOf(ch) | s.lastIndexOf(ch)","String.valueOf(int) | Integer.parseInt(str)","new StringBuilder(s).reverse().toString()"]},
        {cat:"Arrays",items:["int[] arr = new int[10] — default 0","Arrays.sort(arr) — O(n log n)","Arrays.fill(arr, value) — fill all elements","Arrays.copyOfRange(arr, from, to)","Arrays.toString(arr) — print array","int[][] matrix = new int[rows][cols]","System.arraycopy(src,srcPos,dest,destPos,len)","Arrays.stream(arr).sum() / .max() / .min()"]},
        {cat:"Stream API",items:["list.stream().filter(x -> x > 5).collect(Collectors.toList())","list.stream().map(String::toUpperCase).toList()","list.stream().reduce(0, Integer::sum)","list.stream().distinct().sorted().limit(5).toList()","Map<K,List<V>> = list.stream().collect(Collectors.groupingBy(fn))","long count = list.stream().filter(x->x%2==0).count()","OptionalInt max = Arrays.stream(arr).max()","list.stream().anyMatch(x->x>0) | allMatch | noneMatch"]},
        {cat:"OOP Shortcuts",items:["class Dog extends Animal implements Runnable { }","@Override — always use when overriding methods","super.method() — call parent method | this() — call own constructor","abstract class Shape { abstract double area(); }","interface Flyable { default void fly() { ... } }","instanceof operator: if(obj instanceof Dog d) { d.bark(); }","static nested class vs inner class (inner holds ref to outer)","Enum: enum Day { MON, TUE } — Day.MON.name(), Day.MON.ordinal()"]},
        {cat:"Exception Handling",items:["try { } catch(Exception e) { } finally { }","throw new IllegalArgumentException('msg')","Custom: class AppException extends RuntimeException { }","try-with-resources: try(Scanner sc = new Scanner(f)) { }","Multi-catch: catch(IOException | SQLException e) { }","Checked vs Unchecked: checked must be declared/caught","e.getMessage() | e.printStackTrace() | e.getCause()","Optional<T> to avoid NPE: Optional.ofNullable(val).orElse(default)"]},
        {cat:"Generics & Lambda",items:["<T> T getFirst(List<T> list) { return list.get(0); }","<T extends Comparable<T>> T max(T a, T b)","Functional interface: @FunctionalInterface","Lambda: (a,b) -> a+b | Comparator: list.sort((a,b)->a-b)","Method refs: String::toUpperCase | list::add | MyClass::new","Predicate<T>, Function<T,R>, Consumer<T>, Supplier<T>","BiFunction<T,U,R>: takes 2 args returns 1","UnaryOperator<T>: same type in and out"]},
      ],
    },
    Python:{
      questions:[
        "Write a function to reverse a list without using built-in reverse().",
        "Implement a function to check if a string is a palindrome.",
        "Write a program to find the second largest element in a list.",
        "Implement bubble sort in Python.",
        "Write a function to find all duplicates in a list.",
        "Implement a stack using a list with push, pop, and peek operations.",
        "Write a program to check if two strings are anagrams.",
        "Implement binary search on a sorted list.",
        "Write a program to generate Fibonacci series up to N terms.",
        "Implement a singly linked list in Python.",
        "Write a program to detect a cycle in a linked list.",
        "Write a function to merge two sorted lists.",
        "Write a program to find the missing number in a list [1..N].",
        "Implement a queue using two stacks (lists).",
        "Write a program to count word frequency in a sentence using dict.",
        "Write a program to flatten a nested list.",
        "Write a function to find the longest common prefix in a list of strings.",
        "Implement a function to remove duplicates from a list while preserving order.",
        "Write a program to print all prime numbers up to N.",
        "Implement a basic calculator using a stack.",
        "Write a program to rotate a list by K positions.",
        "Write a function to find the intersection of two lists.",
        "Write a program to group anagrams from a list of strings.",
        "Implement DFS on a graph represented as a dictionary.",
        "Write a program for maximum subarray sum (Kadane's algorithm).",
      ],
      shortcuts:[
        {cat:"List Tricks",items:["lst[::-1] — reverse | lst[::2] — every 2nd element","sorted(lst) / sorted(lst, reverse=True, key=fn)","lst.append(x) | lst.extend(other) | lst.insert(i,x)","[x*2 for x in lst if x > 0] — list comprehension","list(set(lst)) — remove duplicates (order not preserved)","zip(a,b) → pairs | enumerate(lst) → (index, value)","*a, last = lst — unpack last element","lst.count(x) | lst.index(x) | lst.sort(key=lambda x: x[1])"]},
        {cat:"Dict & Set",items:["d = {} | d = dict() | d.get(k, default)","d.items() | d.keys() | d.values()","{k:v for k,v in pairs} — dict comprehension","{x for x in lst if x > 0} — set comprehension","Counter(lst) → {elem: count} — from collections","defaultdict(list) — auto-creates missing keys","d.update(other_dict) | d.pop(key, default)","sorted(d.items(), key=lambda x: x[1]) — sort by value"]},
        {cat:"String Tricks",items:["s[::-1] — reverse string","' '.join(lst) | s.split() — split on whitespace","s.strip() | s.lstrip() | s.rstrip()","s.replace(old, new) | s.count(sub)","f'Hello {name}!' — f-string formatting","s.startswith(p) | s.endswith(p)","s.lower() | s.upper() | s.title()","ord('a')=97 | chr(97)='a' — ASCII tricks"]},
        {cat:"Built-ins & Tricks",items:["map(fn, iterable) | filter(fn, iterable)","functools.reduce(fn, lst, initial)","heapq.heappush(h,x) | heapq.heappop(h) — min-heap","itertools.combinations(lst,r) | permutations(lst,r)","any(cond for x in lst) | all(cond for x in lst)","max(lst, key=fn) | min(lst, key=fn)","collections.deque for O(1) appendleft/popleft","*args for variable args | **kwargs for keyword args"]},
        {cat:"OOP Shortcuts",items:["class Dog(Animal): def __init__(self): super().__init__()","@property def name(self): return self._name","@staticmethod | @classmethod (receives cls, not self)","__str__ for print() | __repr__ for repr() | __len__ | __eq__","__enter__ / __exit__ — context manager (with statement)","dataclasses: @dataclass class Point: x:int; y:int","Multiple inheritance: class C(A,B): — MRO order matters","Abstract: from abc import ABC,abstractmethod; @abstractmethod"]},
        {cat:"File & Error Handling",items:["with open('file.txt','r') as f: data=f.read()","f.readlines() → list of lines | f.readline() → one line","json.load(f) | json.dump(data,f,indent=2)","try: except ValueError as e: else: finally:","raise ValueError('Invalid input') | raise from e","logging.basicConfig(level=logging.DEBUG)","os.path.exists(path) | os.makedirs(path,exist_ok=True)","pathlib.Path('file.txt').read_text()"]},
        {cat:"NumPy & Pandas",items:["np.array([1,2,3]) | np.zeros((3,3)) | np.arange(0,10,2)","np.dot(a,b) | a@b — matrix multiply | a.T — transpose","df = pd.read_csv('file.csv') | df.head() | df.info()","df[df['age']>18] — filter rows | df.groupby('dept').mean()","df.fillna(0) | df.dropna() | df.merge(other,on='id')","df['col'].value_counts() | df.sort_values('col')","np.where(condition, x, y) — vectorized if-else","pd.get_dummies(df['category']) — one-hot encoding"]},
      ],
    },
  },
};

// ══ CERTS ══
const CERTS={
  Cybersecurity:[
    {n:"CompTIA Security+",l:"Entry",v:"Most widely required entry cert globally. US DoD 8570 mandate. Gateway to almost every security job.",url:"https://www.comptia.org/certifications/security"},
    {n:"CompTIA Network+",l:"Entry",v:"Foundational networking cert. Validates TCP/IP, routing, switching, troubleshooting skills. Prerequisites for Security+.",url:"https://www.comptia.org/certifications/network"},
    {n:"CompTIA CySA+ (Cybersecurity Analyst)",l:"Intermediate",v:"Blue team cert. Threat detection, SIEM, vulnerability management. Between Security+ and CASP+.",url:"https://www.comptia.org/certifications/cybersecurity-analyst"},
    {n:"Certified Ethical Hacker (CEH)",l:"Intermediate",v:"EC-Council cert. 20 modules of hacking techniques. Valued by government contractors and enterprises.",url:"https://www.eccouncil.org/train-certify/certified-ethical-hacker-ceh/"},
    {n:"eLearnSecurity Junior Penetration Tester (eJPT)",l:"Entry",v:"INE/eLearnSecurity hands-on pen testing cert. 100% practical exam. Great first offensive cert.",url:"https://security.ine.com/certifications/ejpt-certification/"},
    {n:"Practical Network Penetration Tester (PNPT)",l:"Intermediate",v:"TCM Security's 5-day practical exam. Industry-respected, affordable, real-world pen testing cert.",url:"https://certifications.tcm-sec.com/pnpt/"},
    {n:"OSCP (Offensive Security Certified Professional)",l:"Advanced",v:"24-hour hands-on exam. Most respected offensive security certification in the industry. Required by top firms.",url:"https://www.offsec.com/courses/pen-200/"},
    {n:"OSEP (Offensive Security Exp. Penetration Tester)",l:"Advanced",v:"Advanced red team techniques: AV evasion, Active Directory attacks, custom exploits. Above OSCP.",url:"https://www.offsec.com/courses/pen-300/"},
    {n:"CISSP (ISC2)",l:"Expert",v:"Management-level cert. Highest global recognition for security professionals. 5 years experience required.",url:"https://www.isc2.org/certifications/cissp"},
    {n:"CISM (Certified Information Security Manager)",l:"Expert",v:"ISACA management-level cert. Security governance, risk, incident management. For security managers.",url:"https://www.isaca.org/credentialing/cism"},
    {n:"AWS Certified Security Specialty",l:"Advanced",v:"Cloud security on AWS. IAM, KMS, GuardDuty, Shield, WAF. Required for cloud security roles.",url:"https://aws.amazon.com/certification/certified-security-specialty/"},
    {n:"Certified Cloud Security Professional (CCSP)",l:"Expert",v:"ISC2 cloud security architecture cert. Covers all major cloud providers. Respected globally.",url:"https://www.isc2.org/certifications/ccsp"},
  ],
  "Full Stack":[
    {n:"AWS Certified Cloud Practitioner (CCP)",l:"Entry",v:"Entry-level AWS cert. Cloud concepts, core services, pricing, security basics. Best cloud first cert.",url:"https://aws.amazon.com/certification/certified-cloud-practitioner/"},
    {n:"AWS Solutions Architect Associate (SAA-C03)",l:"Intermediate",v:"Most popular cloud cert worldwide. Designing resilient, high-performing AWS architectures.",url:"https://aws.amazon.com/certification/certified-solutions-architect-associate/"},
    {n:"AWS Developer Associate (DVA-C02)",l:"Intermediate",v:"Developing, deploying, debugging cloud apps on AWS. Lambda, DynamoDB, API Gateway, ECS focus.",url:"https://aws.amazon.com/certification/certified-developer-associate/"},
    {n:"Google Associate Cloud Engineer",l:"Intermediate",v:"Deploy and manage production GCP infrastructure. Kubernetes Engine, Compute Engine, BigQuery.",url:"https://cloud.google.com/learn/certification/cloud-engineer"},
    {n:"Google Professional Cloud Developer",l:"Advanced",v:"Designing, building, testing cloud-native apps on GCP. Microservices, CI/CD, containerization.",url:"https://cloud.google.com/learn/certification/cloud-developer"},
    {n:"Microsoft Azure Fundamentals (AZ-900)",l:"Entry",v:"Azure cloud basics. Service types, core concepts, pricing. Entry point to Microsoft cloud career.",url:"https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/"},
    {n:"Microsoft Azure Developer Associate (AZ-204)",l:"Intermediate",v:"Designing, building, testing Azure apps. Functions, App Service, Cosmos DB, Service Bus.",url:"https://learn.microsoft.com/en-us/credentials/certifications/azure-developer/"},
    {n:"Meta Front-End Developer Certificate",l:"Intermediate",v:"Meta-backed React professional cert via Coursera. React, UI/UX, testing, accessibility, portfolio.",url:"https://www.coursera.org/professional-certificates/meta-front-end-developer"},
    {n:"Meta Back-End Developer Certificate",l:"Intermediate",v:"Meta-backed Python + Django + REST API professional cert. Database, APIs, security, deployment.",url:"https://www.coursera.org/professional-certificates/meta-back-end-developer"},
    {n:"MongoDB Associate Developer",l:"Entry",v:"Validates MongoDB CRUD, aggregation, indexing, data modeling. Direct from MongoDB University.",url:"https://learn.mongodb.com/pages/mongodb-developer-path"},
    {n:"Kubernetes and Cloud Native Associate (KCNA)",l:"Entry",v:"CNCF entry-level Kubernetes cert. Cloud native concepts, containers, orchestration basics.",url:"https://www.cncf.io/training/certification/kcna/"},
    {n:"Certified Kubernetes Administrator (CKA)",l:"Advanced",v:"CNCF hands-on 2-hour exam. Cluster setup, upgrades, networking, storage, RBAC. Required for DevOps.",url:"https://www.cncf.io/training/certification/cka/"},
    {n:"GitHub Actions Certification",l:"Intermediate",v:"Official GitHub CI/CD cert. Workflows, runners, secrets, environments, reusable actions.",url:"https://resources.github.com/learn/pathways/automation/essentials/github-actions/"},
    {n:"HashiCorp Terraform Associate",l:"Intermediate",v:"IaC certification from HashiCorp. Provision, manage, destroy cloud infrastructure as code.",url:"https://www.hashicorp.com/certification/terraform-associate"},
  ],
  AI:[
    {n:"TensorFlow Developer Certificate",l:"Intermediate",v:"Official Google TF cert. Tests real model building with TensorFlow & Keras. Respected in industry.",url:"https://www.tensorflow.org/certificate"},
    {n:"Google Professional ML Engineer",l:"Advanced",v:"Production ML systems on Google Cloud. MLOps, model serving, Vertex AI, responsible AI.",url:"https://cloud.google.com/learn/certification/machine-learning-engineer"},
    {n:"AWS Machine Learning Specialty",l:"Advanced",v:"ML solutions on AWS SageMaker. Data engineering, modeling, MLOps, deployment at scale.",url:"https://aws.amazon.com/certification/certified-machine-learning-specialty/"},
    {n:"Azure AI Engineer Associate (AI-102)",l:"Intermediate",v:"Building, managing Azure AI solutions. Cognitive Services, NLP, computer vision, Azure OpenAI.",url:"https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/"},
    {n:"Azure AI Fundamentals (AI-900)",l:"Entry",v:"AI and ML concepts on Azure. NLP, computer vision, responsible AI. Best first AI cert for cloud.",url:"https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/"},
    {n:"IBM AI Engineering Professional Certificate",l:"Intermediate",v:"Coursera IBM cert. ML with sklearn, deep learning with Keras/PyTorch, NLP, computer vision.",url:"https://www.coursera.org/professional-certificates/ai-engineer"},
    {n:"Databricks Certified ML Professional",l:"Advanced",v:"Production ML on Databricks. Feature engineering, model lifecycle with MLflow, deployment.",url:"https://www.databricks.com/learn/certification/machine-learning-professional"},
    {n:"Databricks Generative AI Engineer Associate",l:"Intermediate",v:"LLM apps, RAG pipelines, vector search, responsible GenAI on Databricks/Unity Catalog.",url:"https://www.databricks.com/learn/certification/generative-ai-engineer-associate"},
    {n:"DeepLearning.AI TensorFlow Developer (Coursera)",l:"Intermediate",v:"Laurence Moroney's 4-course TF specialization. CNNs, NLP, sequences, time series.",url:"https://www.coursera.org/professional-certificates/tensorflow-in-practice"},
    {n:"Hugging Face Certified NLP Engineer",l:"Intermediate",v:"HuggingFace transformers, fine-tuning, tokenizers, model deployment on Hub and Spaces.",url:"https://huggingface.co/learn/nlp-course"},
    {n:"Kaggle Competition Expert/Master",l:"Advanced",v:"Performance-based recognition. Kaggle Expert requires placing in top 40% of competitions. Industry-recognized.",url:"https://www.kaggle.com/progression"},
    {n:"NVIDIA Deep Learning Institute (DLI) Certificate",l:"Intermediate",v:"NVIDIA official DL certs: fundamentals, computer vision, NLP, accelerated computing on GPU.",url:"https://www.nvidia.com/en-us/training/"},
  ],
};

// ══ HACKATHON ══
const HACK={
  Cybersecurity:{
    tips:["Enumerate ALL attack surfaces before exploiting anything","Document every step — methodology beats just having findings","Have pre-built tool kit ready — no installs during competition","Practice on HackTheBox/TryHackMe weekly","Read OWASP top 10 and PTES methodology before the event","Communicate clearly with teammates — use Notion or Google Docs for notes","Time-box each target: 30 mins max before pivoting to another vector"],
    stack:[
      {name:"Kali Linux",url:"https://www.kali.org/get-kali/"},
      {name:"Nmap",url:"https://nmap.org"},
      {name:"Gobuster",url:"https://github.com/OJ/gobuster"},
      {name:"Burp Suite Community",url:"https://portswigger.net/burp/communitydownload"},
      {name:"Metasploit Framework",url:"https://www.metasploit.com"},
      {name:"Wireshark",url:"https://www.wireshark.org"},
      {name:"CyberChef",url:"https://gchq.github.io/CyberChef/"},
      {name:"sqlmap",url:"https://sqlmap.org"},
      {name:"Hashcat",url:"https://hashcat.net/hashcat/"},
    ],
    ideas:["🔍 Automated Recon Dashboard — web app that runs nmap, gobuster, nikto on a target and visualizes results","🛡️ Phishing Detector — ML model trained on email headers to classify phishing vs. legitimate","🔑 Credential Leak Scanner — searches public breach datasets for an email domain","🕵️ OSINT Aggregator — pulls LinkedIn, GitHub, WHOIS, Shodan data for a target organization","📊 CTF Team Score Tracker — real-time leaderboard with flag submission via API","🤖 Log Anomaly Detector — unsupervised ML on syslog to flag unusual patterns","🔒 Password Strength Auditor — checks company passwords against breach databases","🌐 Network Topology Visualizer — interactive graph from nmap scan results"],
    platforms:[
      {name:"HackTheBox",url:"https://www.hackthebox.com"},
      {name:"TryHackMe",url:"https://tryhackme.com"},
      {name:"picoCTF",url:"https://picoctf.org"},
      {name:"CTFtime.org",url:"https://ctftime.org"},
      {name:"VulnHub",url:"https://www.vulnhub.com"},
      {name:"PortSwigger Web Academy",url:"https://portswigger.net/web-security"},
      {name:"CyberDefenders",url:"https://cyberdefenders.org"},
      {name:"Blue Team Labs Online",url:"https://blueteamlabs.online"},
    ],
  },
  "Full Stack":{
    tips:["Plan your data model FIRST — schema changes waste precious hours","Deploy to Vercel on DAY 1 — gives you a live URL in 30 seconds","Build MVP first, polish after — judges want to see it WORKING","30-min Figma wireframe before any code — prevents pivots","Use Supabase/Firebase for instant backend without setup","Add mobile responsiveness from the start — judges use phones","Record a 2-minute demo video as backup in case live demo fails"],
    stack:[
      {name:"VS Code",url:"https://code.visualstudio.com"},
      {name:"GitHub Copilot",url:"https://github.com/features/copilot"},
      {name:"Postman",url:"https://www.postman.com"},
      {name:"Figma",url:"https://www.figma.com"},
      {name:"Supabase",url:"https://supabase.com"},
      {name:"Vercel",url:"https://vercel.com"},
      {name:"shadcn/ui",url:"https://ui.shadcn.com"},
      {name:"Tailwind CSS",url:"https://tailwindcss.com"},
      {name:"Prisma ORM",url:"https://www.prisma.io"},
    ],
    ideas:["🏥 AI Healthcare Triage — symptom checker that suggests urgency level and next steps","📚 Personalized Learning Path Generator — takes skill gaps, generates curriculum with resources","🏘️ Community Resource Map — crowdsourced map of food banks, shelters, free clinics","♿ Accessibility Audit Tool — scans any URL and reports WCAG violations with fixes","🌱 Carbon Footprint Tracker — input daily habits, get personalized reduction suggestions","🤝 Volunteer Matching Platform — matches volunteers to local NGOs by skills and availability","💰 Micro-Investment Explainer — gamified platform teaching Gen-Z about index funds","🏠 Rent vs Buy Calculator — location-aware, accounts for opportunity cost and tax benefits"],
    platforms:[
      {name:"DevPost",url:"https://devpost.com"},
      {name:"MLH (Major League Hacking)",url:"https://mlh.io"},
      {name:"Unstop",url:"https://unstop.com"},
      {name:"HackerEarth",url:"https://www.hackerearth.com"},
      {name:"AngelHack",url:"https://angelhack.com"},
      {name:"Hack2Skill",url:"https://hack2skill.com"},
      {name:"Smart India Hackathon",url:"https://www.sih.gov.in"},
    ],
  },
  AI:{
    tips:["Use HuggingFace pre-trained models — NEVER train from scratch in a hackathon","A working Streamlit demo beats 99.5% accuracy that nobody can use","Use Kaggle/HuggingFace datasets — skip data collection entirely","Have a compelling story about WHY your AI matters","Quantify your results: '40% more accurate than baseline' wins pitches","Cache all API calls — rate limits will hit you at the worst moment","Have a fallback: if the model fails, show pre-computed demo results"],
    stack:[
      {name:"HuggingFace Transformers",url:"https://huggingface.co/transformers"},
      {name:"Streamlit",url:"https://streamlit.io"},
      {name:"Gradio",url:"https://www.gradio.app"},
      {name:"Google Colab",url:"https://colab.research.google.com"},
      {name:"LangChain",url:"https://python.langchain.com"},
      {name:"FAISS",url:"https://github.com/facebookresearch/faiss"},
      {name:"Weights & Biases",url:"https://wandb.ai"},
      {name:"FastAPI",url:"https://fastapi.tiangolo.com"},
      {name:"Kaggle Notebooks",url:"https://www.kaggle.com/code"},
    ],
    ideas:["🧑‍⚕️ Mental Health Companion — LLM-based chatbot with crisis detection and resource routing","📰 Fake News Detector — fine-tuned BERT classifier with confidence scores and evidence links","🌾 Crop Disease Classifier — image model (MobileNet) diagnosing plant diseases from phone photos","🎓 Adaptive Quiz Generator — RAG system that creates questions from your own study notes","♿ Real-Time Sign Language Translator — MediaPipe + LSTM converting hand gestures to text","🌍 Multilingual Legal Aid — LLM that explains legal documents in plain language for any language","🏗️ Construction Safety Monitor — YOLOv8 detecting missing helmets/vests in site footage","💊 Drug Interaction Checker — knowledge graph + LLM warning about dangerous drug combinations"],
    platforms:[
      {name:"Kaggle Competitions",url:"https://www.kaggle.com/competitions"},
      {name:"HuggingFace Spaces",url:"https://huggingface.co/spaces"},
      {name:"Google AI Hackathon",url:"https://ai.google/build/competitions"},
      {name:"Microsoft AI Hackathon",url:"https://www.microsoftaicontest.com"},
      {name:"AWS Build-On Hackathon",url:"https://awsbuildon.devpost.com"},
      {name:"Anthropic Hackathon",url:"https://anthropic.com"},
      {name:"NASSCOM AI Hackathon",url:"https://nasscom.in/ai"},
    ],
  },
};

// ══════════════════════════════════════════════════
//  AMBIENT MUSIC ENGINE
// ══════════════════════════════════════════════════
class AmbientBGM {
  constructor(){this.ctx=null;this.master=null;this.rev=null;this.playing=false;this._t=null;this.vol=0.15;}
  init(){
    if(this.ctx)return;
    try{
      this.ctx=new(window.AudioContext||window.webkitAudioContext)();
      this.master=this.ctx.createGain();this.master.gain.value=this.vol;
      this.rev=this._reverb();this.rev.connect(this.master);
      this.master.connect(this.ctx.destination);
    }catch(e){}
  }
  _reverb(){
    const c=this.ctx,cv=c.createConvolver(),l=c.sampleRate*5,b=c.createBuffer(2,l,c.sampleRate);
    for(let ch=0;ch<2;ch++){const d=b.getChannelData(ch);for(let i=0;i<l;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/l,2);}
    cv.buffer=b;return cv;
  }
  _hz(semi){return 55*Math.pow(2,semi/12);}
  _pad(f,s,d){
    if(!this.ctx)return;
    [0,7,12,19].forEach((h,i)=>{
      const o=this.ctx.createOscillator(),g=this.ctx.createGain();
      o.type=i%2?'triangle':'sine';o.frequency.value=f*Math.pow(2,h/12);
      g.gain.setValueAtTime(0,s);g.gain.linearRampToValueAtTime(.02/(i+1),s+2.5);
      g.gain.setValueAtTime(.02/(i+1),s+d-1.5);g.gain.exponentialRampToValueAtTime(.001,s+d);
      o.connect(g);g.connect(this.rev);o.start(s);o.stop(s+d);
    });
  }
  _note(f,s,d,v=.035){
    if(!this.ctx)return;
    const o=this.ctx.createOscillator(),g=this.ctx.createGain(),fl=this.ctx.createBiquadFilter();
    fl.type='lowpass';fl.frequency.value=700;o.type='sine';o.frequency.value=f;
    g.gain.setValueAtTime(0,s);g.gain.linearRampToValueAtTime(v,s+.5);
    g.gain.setValueAtTime(v,s+d-.6);g.gain.exponentialRampToValueAtTime(.001,s+d);
    o.connect(fl);fl.connect(this.rev);o.connect(g);g.connect(this.master);
    o.start(s);o.stop(s+d);
  }
  start(){
    if(this.playing||!this.ctx)return;this.playing=true;
    const sc=[0,3,5,7,10,12,15,17,19,22].map(s=>this._hz(s));
    let t=this.ctx.currentTime+.3;
    const loop=()=>{
      if(!this.playing)return;
      const now=this.ctx.currentTime;
      while(t<now+22){
        if(Math.round(t/8)%1===0)sc.slice(0,3).forEach(f=>this._pad(f,t,8));
        if(Math.random()<.28)this._note(sc[Math.floor(Math.random()*sc.length)]*(Math.random()<.4?2:1),t,2+Math.random()*3,.035);
        if(Math.round(t*.4)%2===0)this._note(sc[0]*.25,t,1.8,.022);
        t+=.75+Math.random()*.6;
      }
      if(this.playing)this._t=setTimeout(loop,4000);
    };
    loop();
  }
  stop(){this.playing=false;clearTimeout(this._t);}
  setVol(v){this.vol=v;if(this.master)this.master.gain.value=v;}
}
const BGM=new AmbientBGM();

// ══ SFX ══
let _sfxCtx=null;
const sfx=t=>{
  try{if(!_sfxCtx)_sfxCtx=new(window.AudioContext||window.webkitAudioContext)();}catch(e){return;}
  const c=_sfxCtx,o=c.createOscillator(),g=c.createGain();o.connect(g);g.connect(c.destination);
  const n=c.currentTime;
  if(t==='nav'){o.frequency.setValueAtTime(440,n);o.frequency.exponentialRampToValueAtTime(660,n+.1);g.gain.setValueAtTime(.06,n);g.gain.exponentialRampToValueAtTime(.001,n+.15);o.start(n);o.stop(n+.15);}
  else if(t==='correct'){[523,659,784,1047].forEach((f,i)=>{const oo=c.createOscillator(),gg=c.createGain();oo.connect(gg);gg.connect(c.destination);oo.frequency.value=f;gg.gain.setValueAtTime(.1,n+i*.1);gg.gain.exponentialRampToValueAtTime(.001,n+i*.1+.15);oo.start(n+i*.1);oo.stop(n+i*.1+.15);});}
  else if(t==='wrong'){o.frequency.setValueAtTime(260,n);o.frequency.exponentialRampToValueAtTime(130,n+.25);g.gain.setValueAtTime(.1,n);g.gain.exponentialRampToValueAtTime(.001,n+.25);o.start(n);o.stop(n+.25);}
  else if(t==='click'){o.frequency.setValueAtTime(700,n);g.gain.setValueAtTime(.04,n);g.gain.exponentialRampToValueAtTime(.001,n+.06);o.start(n);o.stop(n+.06);}
};

// ══════════════════════════════════════════════════
//  UI STATE
// ══════════════════════════════════════════════════
let curSection='Home',musicOn=false;
let curChallengeDay=1;
let quizState={domain:'Cybersecurity',idx:0,score:0,answered:false,timer:null,timeLeft:20};
let dsaCurTopic=0;
let iqFilter='All';
let aptFilter='Number System';
let learnDomain='Cybersecurity';
let certDomain='Cybersecurity';
let hackDomain='Cybersecurity';
let resDomain='Cybersecurity';

// ══════════════════════════════════════════════════
//  MATRIX RAIN
// ══════════════════════════════════════════════════
(()=>{
  const canvas=document.getElementById('matrix-canvas');
  const ctx=canvas.getContext('2d');
  let cols=[],W,H;
  const chars='アイウエオカキクケコサシスセソタチツテトナニヌネノ01ABCDEF♠♥♦♣✦✧01010110100';
  function init(){
    W=canvas.width=window.innerWidth;H=canvas.height=window.innerHeight;
    cols=Array.from({length:Math.floor(W/14)},()=>Math.random()*H|-0);
  }
  function draw(){
    ctx.fillStyle='rgba(2,0,8,.05)';ctx.fillRect(0,0,W,H);
    ctx.fillStyle='#00ffcc';ctx.font='12px monospace';
    cols.forEach((y,i)=>{
      ctx.fillText(chars[Math.random()*chars.length|0],i*14,y);
      cols[i]=y>H&&Math.random()>.975?0:y+14;
    });
  }
  init();setInterval(draw,60);window.addEventListener('resize',init);
})();

// ══════════════════════════════════════════════════
//  FLOATING PARTICLES
// ══════════════════════════════════════════════════
(()=>{
  const container=document.getElementById('particles');
  for(let i=0;i<30;i++){
    const p=document.createElement('div');
    const s=2+Math.random()*4;
    p.style.cssText=`position:absolute;width:${s}px;height:${s}px;border-radius:50%;background:${['#00ffcc','#7b2fff','#ff2d78','#ffcc00'][Math.floor(Math.random()*4)]};opacity:${.1+Math.random()*.3};left:${Math.random()*100}%;top:${Math.random()*100}%;animation:floatParticle ${5+Math.random()*10}s ${Math.random()*5}s infinite ease-in-out;`;
    container.appendChild(p);
  }
  if(!document.getElementById('pStyle')){
    const s=document.createElement('style');s.id='pStyle';
    s.textContent='@keyframes floatParticle{0%,100%{transform:translateY(0) translateX(0) rotate(0);}33%{transform:translateY(-30px) translateX(15px) rotate(120deg);}66%{transform:translateY(20px) translateX(-10px) rotate(240deg);}}';
    document.head.appendChild(s);
  }
})();

// ══════════════════════════════════════════════════
//  CURSOR
// ══════════════════════════════════════════════════
const cursor=document.getElementById('cursor'),ring=document.getElementById('cursor-ring');
document.addEventListener('mousemove',e=>{
  cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px';
  setTimeout(()=>{ring.style.left=e.clientX+'px';ring.style.top=e.clientY+'px';},80);
});
document.addEventListener('mousedown',()=>{cursor.style.width='6px';cursor.style.height='6px';ring.style.transform='translate(-50%,-50%) scale(1.5)';});
document.addEventListener('mouseup',()=>{cursor.style.width='12px';cursor.style.height='12px';ring.style.transform='translate(-50%,-50%) scale(1)';});

// ══════════════════════════════════════════════════
//  QUOTE SPLASH
// ══════════════════════════════════════════════════
//  ⚡ LIGHTNING LOADER ENGINE
// ══════════════════════════════════════════════════
(function(){
  const canvas=document.getElementById('lightning-canvas');
  const ctx=canvas.getContext('2d');
  let W,H,bolts=[],flashes=0;

  function resize(){W=canvas.width=window.innerWidth;H=canvas.height=window.innerHeight;}
  resize();window.addEventListener('resize',resize);

  function rand(a,b){return a+Math.random()*(b-a);}

  // Draw a recursive lightning bolt
  function drawBolt(x1,y1,x2,y2,depth,color,alpha){
    if(depth===0||alpha<0.02)return;
    ctx.save();
    ctx.globalAlpha=alpha;
    ctx.strokeStyle=color;
    ctx.lineWidth=depth*.8;
    ctx.shadowColor=color;
    ctx.shadowBlur=depth*6;
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    const mx=(x1+x2)/2+rand(-80,80),my=(y1+y2)/2+rand(-80,80);
    ctx.quadraticCurveTo(mx,my,x2,y2);
    ctx.stroke();
    ctx.restore();
    // Branch
    if(depth>1&&Math.random()>.5){
      const bx=mx+rand(-120,120),by=my+rand(-80,80);
      drawBolt(mx,my,bx,by,depth-1,color,alpha*.7);
    }
  }

  const COLS=['#00ffcc','#7b2fff','#ffcc00','#ff2d78','#ffffff'];

  function spawnBolt(){
    const fromTop=Math.random()>.4;
    bolts.push({
      x1:fromTop?rand(0,W):Math.random()>.5?0:W,
      y1:fromTop?0:rand(0,H*.4),
      x2:rand(W*.1,W*.9),
      y2:rand(H*.3,H),
      depth:Math.floor(rand(3,7)),
      color:COLS[Math.floor(Math.random()*COLS.length)],
      alpha:rand(.7,1),
      life:rand(4,10),
      age:0
    });
  }

  let frameCount=0;
  function animateLoader(){
    if(!document.getElementById('lightning-loader')||document.getElementById('lightning-loader').classList.contains('hidden'))return;
    frameCount++;
    ctx.clearRect(0,0,W,H);
    // Dark stormy bg
    ctx.fillStyle=`rgba(0,0,6,${frameCount%3===0?.9:.4})`;
    ctx.fillRect(0,0,W,H);
    // Screen flash occasionally
    if(Math.random()>.96){
      ctx.fillStyle=`rgba(255,255,255,${rand(.03,.1)})`;
      ctx.fillRect(0,0,W,H);
    }
    // Spawn new bolts
    if(Math.random()>.55)spawnBolt();
    bolts=bolts.filter(b=>{
      drawBolt(b.x1,b.y1,b.x2,b.y2,b.depth,b.color,b.alpha*(1-b.age/b.life));
      // glow at endpoints
      const g=ctx.createRadialGradient(b.x2,b.y2,0,b.x2,b.y2,60);
      g.addColorStop(0,b.color+'99');g.addColorStop(1,'transparent');
      ctx.fillStyle=g;ctx.beginPath();ctx.arc(b.x2,b.y2,60,0,Math.PI*2);ctx.fill();
      b.age++;
      return b.age<b.life;
    });
    requestAnimationFrame(animateLoader);
  }
  animateLoader();

  // Progress counter
  let pct=0;
  const pctEl=document.getElementById('loader-pct');
  const barEl=document.getElementById('loader-bar');
  const enterBtn=document.getElementById('loader-enter-btn');
  const ticker=setInterval(()=>{
    pct=Math.min(100,pct+(pct<70?rand(1,4):pct<90?rand(.5,2):rand(.2,.8)));
    if(pctEl)pctEl.textContent=Math.floor(pct)+'%';
    if(barEl)barEl.style.width=pct+'%';
    if(pct>=100){
      clearInterval(ticker);
      if(pctEl)pctEl.textContent='100% — SYSTEMS ONLINE';
      if(enterBtn){enterBtn.style.display='inline-block';}
    }
  },60);
  // Auto-enter after 4s
  setTimeout(()=>{if(!document.getElementById('lightning-loader').classList.contains('hidden'))enterApp();},4200);
})();

function enterApp(){
  const loader=document.getElementById('lightning-loader');
  // Final lightning burst — bright white flash
  const canvas=document.getElementById('lightning-canvas');
  if(canvas){
    const ctx=canvas.getContext('2d');
    // Multiple burst flashes
    let flashes=0;
    const burstFlash=()=>{
      ctx.fillStyle=`rgba(255,255,255,${0.4+flashes*.15})`;
      ctx.fillRect(0,0,canvas.width,canvas.height);
      flashes++;
      if(flashes<3)setTimeout(burstFlash,60);
    };
    burstFlash();
  }
  setTimeout(()=>{
    loader.classList.add('hidden');
    // Remove dark-intro (it auto-fades via CSS animation)
    const darkIntro=document.getElementById('dark-intro');
    if(darkIntro){setTimeout(()=>{darkIntro.remove();},1300);}
    setTimeout(initAll,400);
  },200);
}

// ══════════════════════════════════════════════════
//  CLOUD TRANSITION
// ══════════════════════════════════════════════════
function cloudTransition(cb){
  const o=document.getElementById('cloud-overlay');
  o.classList.add('active');
  setTimeout(()=>{if(cb)cb();o.classList.remove('active');},300);
}


// ══ MOTIVATIONAL LINE SYSTEM ══
const MOTIV_LINES = {
  'Home': [{icon:'🚀',text:'YOUR JOURNEY TO FAANG STARTS WITH ONE LINE OF CODE.'},
           {icon:'⚡',text:'EVERY EXPERT WAS ONCE A BEGINNER WHO REFUSED TO QUIT.'},
           {icon:'🔥',text:'THE GRIND YOU HATE TODAY BECOMES THE SUCCESS YOU LOVE TOMORROW.'}],
  'DSA Arena':[{icon:'⚔️',text:'ALL DIFFICULTIES UNLOCKED. THIS IS YOUR ARENA.'},
               {icon:'🏆',text:'EASY. MEDIUM. HARD. MASTER THEM ALL.'},
               {icon:'🔥',text:'DSA TOP QUESTIONS. INFINITE POTENTIAL. GO.'}],
  'DSA':  [{icon:'📊',text:'MASTER DSA AND EVERY INTERVIEW DOOR OPENS FOR YOU.'},
           {icon:'💡',text:'UNDERSTAND THE PATTERN. OWN THE INTERVIEW.'},
           {icon:'🎯',text:'ONE PROBLEM AT A TIME. ONE DAY AT A TIME. UNSTOPPABLE.'}],
  'DSA Easy':[{icon:'🟢',text:'EASY TODAY. INTERVIEW-READY TOMORROW. START HERE.'},
              {icon:'🌱',text:'FOUNDATIONS BUILT HERE HOLD UP YOUR ENTIRE CAREER.'}],
  'DSA Medium':[{icon:'🟡',text:'THIS IS WHERE MOST PEOPLE GIVE UP. NOT YOU.'},
                {icon:'💪',text:'MEDIUM PROBLEMS ARE WHERE REAL ENGINEERS ARE FORGED.'}],
  'DSA Hard':[{icon:'🔴',text:'FAANG-LEVEL. YOU BELONG HERE. TRUST THE PROCESS.'},
              {icon:'🏆',text:'HARD IS WHERE LEGENDS ARE MADE. YOU\'RE ONE OF THEM.'}],
  'Learn': [{icon:'🧠',text:'KNOWLEDGE IS THE ONLY INVESTMENT THAT ALWAYS PAYS.'},
            {icon:'📚',text:'LEARN TODAY. LEAD TOMORROW.'}],
  'Games': [{icon:'🎮',text:'TEST YOUR SKILLS. SHARPEN YOUR MIND. LEVEL UP.'},
            {icon:'⭐',text:'EVERY QUIZ IS A STEP CLOSER TO MASTERY.'}],
  'Challenges':[{icon:'🔥',text:'45 DAYS OF CONSISTENCY BUILDS LIFETIME SKILLS.'},
                {icon:'⚔️',text:'THE CHALLENGE IS THE PATH. EMBRACE IT.'}],
  'Interview':[{icon:'💼',text:'PREPARATION TRANSFORMS NERVOUSNESS INTO CONFIDENCE.'},
               {icon:'🎤',text:'YOU\'VE DONE THE WORK. NOW GO SHOW THEM WHO YOU ARE.'}],
  'Aptitude':[{icon:'🧮',text:'SHARP MATH = SHARP MIND = SHARP ENGINEER.'},
              {icon:'📐',text:'SHORTCUTS ARE NOT CHEATING — THEY ARE MASTERY.'}],
  'Job Roadmap':[{icon:'🚀',text:'14 MONTHS. ONE GOAL. ONE JOB OFFER. LET\'S GO.'},
                 {icon:'🗺️',text:'EVERY MONTH IS A MILESTONE. EVERY SKILL IS A WEAPON.'}],
  'GATE':  [{icon:'🎓',text:'GATE AIR < 100 IS WITHIN REACH. TRUST YOUR PREPARATION.'},
            {icon:'🏛️',text:'IITS AND IISC AWAIT. KEEP GOING.'}],
  'UPSC':  [{icon:'🇮🇳',text:'SERVING THE NATION STARTS WITH SERVING YOUR AMBITION.'},
            {icon:'📜',text:'CSE SELECTION DAY IS THE PROUDEST DAY. EARN IT.'}],
  'Certificates':[{icon:'🏅',text:'A CERTIFICATE IS PROOF OF YOUR DEDICATION.'},
                  {icon:'🎖️',text:'GET CERTIFIED. GET NOTICED. GET HIRED.'}],
  'Hackathon':[{icon:'⚡',text:'HACKATHONS ARE NOT COMPETITIONS — THEY ARE ACCELERATORS.'},
               {icon:'🛠️',text:'BUILD SOMETHING PEOPLE WISH EXISTED. THEN SHIP IT.'}],
  'Resources':[{icon:'🎬',text:'THE BEST RESOURCE IS THE ONE YOU ACTUALLY USE.'},
               {icon:'📺',text:'LEARN FROM THE BEST. BECOME THE BEST.'}],
  'Practical':[{icon:'🔬',text:'HANDS-ON PRACTICE > 10 HOURS OF THEORY.'},
               {icon:'⚗️',text:'BUILD REAL THINGS. GET REAL RESULTS.'}],
  'Roadmap':[{icon:'🗺️',text:'THE MAP IS NOT THE TERRITORY — BUT IT LIGHTS THE WAY.'},
             {icon:'🧭',text:'FOLLOW THE PATH. TRUST THE PROCESS. REACH THE DESTINATION.'}],
  'Jobs':  [{icon:'💼',text:'YOUR DREAM COMPANY IS LOOKING FOR SOMEONE EXACTLY LIKE YOU.'},
            {icon:'🚪',text:'EVERY APPLICATION IS A STEP CLOSER TO YOUR YES.'}],
  'About': [{icon:'💫',text:'BUILT WITH PASSION. POWERED BY PURPOSE. MADE FOR YOU.'},
            {icon:'❤️',text:'PravAstra — WHERE CAREERS BEGIN.'}],
  'Support':[{icon:'🤝',text:'EVERY GREAT JOURNEY IS BETTER WITH A MENTOR.'},
             {icon:'💬',text:'REACH OUT. PRAVEEN IS HERE FOR YOUR SUCCESS.'}]
};
let motivTimer=null;
let flameAnimId=null;

function showMotivLine(section){
  const lines=MOTIV_LINES[section]||[{icon:'⚡',text:'KEEP CODING. KEEP GROWING. KEEP WINNING.'}];
  const pick=lines[Math.floor(Math.random()*lines.length)];
  const overlay=document.getElementById('motiv-center');
  const iconEl=document.getElementById('motiv-center-icon');
  const textEl=document.getElementById('motiv-center-text');
  const subEl=document.getElementById('motiv-center-sub');
  const inner=document.getElementById('motiv-center-inner');
  if(!overlay||!iconEl||!textEl)return;

  // Set section color theme
  const colors={
    'DSA Hard':'#ff2d78','DSA Medium':'#ffcc00','DSA Easy':'#00ffcc',
    'DSA Arena':'#ffd700','Challenges':'#ff2d78','GATE':'#ffcc00',
    'UPSC':'#ffcc00','Hackathon':'#ffcc00','Games':'#7b2fff',
    'Learn':'#7b2fff','Jobs':'#00ffcc','About':'#00ffcc'
  };
  const col=colors[section]||'#00ffcc';
  iconEl.textContent=pick.icon;
  iconEl.style.color=col;
  textEl.textContent=pick.text;
  textEl.style.color=col;
  textEl.style.textShadow=`0 0 30px ${col}`;
  inner.style.borderColor=col+'44';
  inner.style.boxShadow=`0 0 60px ${col}22,0 0 120px rgba(123,47,255,.1)`;
  subEl.textContent=`// ${section} — PravAstra by Praveen Rathod`;

  // Re-trigger pop animation
  inner.style.animation='none';
  void inner.offsetWidth;
  inner.style.animation='motivPop .5s cubic-bezier(.34,1.56,.64,1) forwards';

  overlay.style.display='flex';
  overlay.classList.add('show');

  // Start flame animation
  startFlameCanvas(col);

  if(motivTimer)clearTimeout(motivTimer);
  motivTimer=setTimeout(()=>{
    overlay.classList.remove('show');
    setTimeout(()=>{
      overlay.style.display='none';
      stopFlameCanvas();
    },350);
  },2800);
}

// ══ FLAME CANVAS ANIMATION ══
function startFlameCanvas(color){
  const canvas=document.getElementById('flame-canvas');
  if(!canvas)return;
  const inner=document.getElementById('motiv-center-inner');
  canvas.width=inner.offsetWidth||600;
  canvas.height=inner.offsetHeight||180;
  const ctx=canvas.getContext('2d');
  const particles=[];

  function makeFlame(){
    const x=Math.random()*canvas.width;
    const y=canvas.height;
    particles.push({
      x,y,vx:(Math.random()-.5)*2,vy:-(Math.random()*4+2),
      life:1,size:Math.random()*8+3,
      color:Math.random()>.5?color:'#ff8800',
      decay:Math.random()*.025+.015
    });
  }

  function drawFlames(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(let i=particles.length-1;i>=0;i--){
      const p=particles[i];
      p.x+=p.vx;p.y+=p.vy;p.life-=p.decay;p.size*=.97;
      if(p.life<=0){particles.splice(i,1);continue;}
      const grad=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.size*2);
      grad.addColorStop(0,p.color+(Math.floor(p.life*255).toString(16).padStart(2,'0')));
      grad.addColorStop(1,'transparent');
      ctx.beginPath();ctx.arc(p.x,p.y,p.size*2,0,Math.PI*2);
      ctx.fillStyle=grad;ctx.fill();
    }
    // Spawn flames along the bottom border
    if(Math.random()>.2)makeFlame();
    // Also along all edges
    if(Math.random()>.5){
      particles.push({
        x:Math.random()>0.5?0:canvas.width,
        y:Math.random()*canvas.height,
        vx:(Math.random()-.5)*3,vy:-(Math.random()*2+1),
        life:.8,size:Math.random()*5+2,
        color:color,decay:.03
      });
    }
    flameAnimId=requestAnimationFrame(drawFlames);
  }
  drawFlames();
}

function stopFlameCanvas(){
  if(flameAnimId){cancelAnimationFrame(flameAnimId);flameAnimId=null;}
  const canvas=document.getElementById('flame-canvas');
  if(canvas){const ctx=canvas.getContext('2d');ctx.clearRect(0,0,canvas.width,canvas.height);}
}

// ══════════════════════════════════════════════════
//  NAVIGATION
// ══════════════════════════════════════════════════
const NAV=['Home','Learn','Games','DSA Arena','DSA','DSA Easy','DSA Medium','DSA Hard','Challenges','Interview','Aptitude','Job Roadmap','GATE','UPSC','Certificates','Hackathon','Resources','Practical','AI Tools','Jobs','About','Support'];

function buildNav(){
  const nav=document.getElementById('nav');
  nav.innerHTML=NAV.map(n=>`<button class="nav-btn ${n===curSection?'active':''}" data-sec="${n}" onclick="navTo('${n}')">${n}</button>`).join('');
}
function navTo(sec){
  if(sec===curSection)return;
  sfx('nav');
  if(curSection==='About'&&sec!=='About')stopAboutFireworks();
  cloudTransition(()=>{
    document.getElementById('sec-'+curSection).classList.remove('active');
    curSection=sec;
    document.getElementById('sec-'+sec).classList.add('active');
    buildNav();
    renderSection(sec);
    window.scrollTo(0,0);
    // Push state for back-navigation (only push if not already this state)
    if(sec==='Home'){history.replaceState({sec:'Home'},'','');}
    else{history.pushState({sec},'','');}
  });
}

// ══ BROWSER BACK / FORWARD HANDLING ══
window.addEventListener('popstate',function(e){
  const state=e.state;
  if(state&&state.sec){
    // Browser navigated to a state we pushed
    if(state.sec!==curSection){
      sfx('nav');
      if(curSection==='About')stopAboutFireworks();
      cloudTransition(()=>{
        document.getElementById('sec-'+curSection).classList.remove('active');
        curSection=state.sec;
        document.getElementById('sec-'+state.sec).classList.add('active');
        buildNav();
        renderSection(state.sec);
        window.scrollTo(0,0);
      });
    }
  } else {
    // No state means we're at the very bottom of history — allow leave
    // Do nothing, browser will leave
  }
});
function renderSection(sec){
  showMotivLine(sec);
  if(sec==='Learn')renderLearn();
  else if(sec==='Games')renderGame();
  else if(sec==='DSA')renderDSA();
  else if(sec==='DSA Arena')renderDSAArena();
  else if(sec==='Challenges')loadChallenge();
  else if(sec==='Interview')renderInterview();
  else if(sec==='Aptitude')renderAptitude();
  else if(sec==='Job Roadmap')renderJobRoadmap();
  else if(sec==='GATE')renderGATE();
  else if(sec==='UPSC')renderUPSC();
  else if(sec==='Certificates')renderCerts();
  else if(sec==='Hackathon')renderHack();
  else if(sec==='Resources')renderResources();
  else if(sec==='Practical')renderPractical();
  else if(sec==='Jobs')renderJobs();
  else if(sec==='AI Tools')renderAITools();
  else if(sec==='DSA Easy')renderDSAFilter('Easy');
  else if(sec==='DSA Medium')renderDSAFilter('Medium');
  else if(sec==='DSA Hard')renderDSAFilter('Hard');
  else if(sec==='About')startAboutFireworks();
}

// ══════════════════════════════════════════════════
//  ABOUT SECTION — FIRE & SPARK ANIMATION
// ══════════════════════════════════════════════════
let aboutFireRunning=false;
let aboutFireAnim=null;
function startAboutFireworks(){
  if(aboutFireRunning)return;
  aboutFireRunning=true;
  const canvas=document.getElementById('about-fire-canvas');
  if(!canvas)return;
  const ctx=canvas.getContext('2d');
  canvas.style.opacity='1';
  // Resize canvas to section
  const sec=document.getElementById('sec-About');
  canvas.width=sec.offsetWidth||1200;
  canvas.height=sec.offsetHeight||800;

  // Particles pool
  const particles=[];
  const embers=[];

  class Spark{
    constructor(x,y,color){
      this.x=x;this.y=y;
      this.vx=(Math.random()-0.5)*6;
      this.vy=-(Math.random()*8+4);
      this.life=1;
      this.decay=Math.random()*.02+.01;
      this.size=Math.random()*4+1;
      this.color=color||`hsl(${Math.random()*40+10},100%,60%)`;
      this.gravity=0.2;
    }
    update(){
      this.x+=this.vx;this.y+=this.vy;
      this.vy+=this.gravity;
      this.vx*=0.97;
      this.life-=this.decay;
    }
    draw(){
      ctx.globalAlpha=Math.max(0,this.life);
      ctx.fillStyle=this.color;
      ctx.shadowBlur=8;ctx.shadowColor=this.color;
      const r=Math.max(0.01,this.size*this.life);
      ctx.beginPath();ctx.arc(this.x,this.y,r,0,Math.PI*2);ctx.fill();
      ctx.globalAlpha=1;ctx.shadowBlur=0;
    }
  }

  class FireParticle{
    constructor(x,y){
      this.x=x+(Math.random()-0.5)*30;
      this.y=y;
      this.vx=(Math.random()-0.5)*1.5;
      this.vy=-(Math.random()*3+2);
      this.life=1;
      this.size=Math.random()*18+8;
      this.decay=Math.random()*.025+.012;
    }
    update(){
      this.x+=this.vx+(Math.random()-0.5)*0.5;
      this.y+=this.vy;
      this.vy*=0.98;
      this.life-=this.decay;
      this.size*=0.97;
    }
    draw(){
      const prog=1-this.life;
      const r=255,g=Math.floor(200*(1-prog)),b=0;
      const gradient=ctx.createRadialGradient(this.x,this.y,0,this.x,this.y,this.size);
      gradient.addColorStop(0,`rgba(255,255,180,${this.life*0.9})`);
      gradient.addColorStop(0.3,`rgba(${r},${g},0,${this.life*0.7})`);
      gradient.addColorStop(1,`rgba(180,0,0,0)`);
      ctx.fillStyle=gradient;
      ctx.beginPath();ctx.arc(this.x,this.y,this.size,0,Math.PI*2);ctx.fill();
    }
  }

  class Firework{
    constructor(){
      this.x=Math.random()*canvas.width;
      this.y=canvas.height*0.7+Math.random()*canvas.height*0.3;
      this.tx=Math.random()*canvas.width;
      this.ty=Math.random()*canvas.height*0.5;
      const dx=this.tx-this.x,dy=this.ty-this.y;
      const dist=Math.sqrt(dx*dx+dy*dy);
      const speed=12+Math.random()*6;
      this.vx=dx/dist*speed;this.vy=dy/dist*speed;
      this.trail=[];this.exploded=false;
      this.color=`hsl(${Math.random()*360},100%,65%)`;
    }
    update(){
      this.trail.push({x:this.x,y:this.y});
      if(this.trail.length>12)this.trail.shift();
      this.x+=this.vx;this.y+=this.vy;
      this.vy+=0.15;
      if(this.vy>0&&!this.exploded){
        this.exploded=true;
        for(let i=0;i<80;i++)particles.push(new Spark(this.x,this.y,this.color));
      }
    }
    draw(){
      if(this.exploded)return;
      ctx.shadowBlur=12;ctx.shadowColor=this.color;
      this.trail.forEach((p,i)=>{
        ctx.globalAlpha=(i/this.trail.length)*0.7;
        ctx.fillStyle=this.color;
        ctx.beginPath();ctx.arc(p.x,p.y,2,0,Math.PI*2);ctx.fill();
      });
      ctx.globalAlpha=1;ctx.fillStyle=this.color;
      ctx.beginPath();ctx.arc(this.x,this.y,3,0,Math.PI*2);ctx.fill();
      ctx.shadowBlur=0;ctx.globalAlpha=1;
    }
  }

  // Fire sources at bottom of section
  const fireSources=[
    canvas.width*0.1,canvas.width*0.25,canvas.width*0.5,
    canvas.width*0.75,canvas.width*0.9
  ];

  const fireworks=[];
  let frame=0;
  let fwTimer=0;

  function loop(){
    if(!aboutFireRunning){canvas.style.opacity='0';return;}
    // Fade trail
    ctx.fillStyle='rgba(2,0,8,0.18)';
    ctx.fillRect(0,0,canvas.width,canvas.height);

    // Emit fire particles from bottom
    fireSources.forEach(sx=>{
      if(Math.random()<0.4){
        embers.push(new FireParticle(sx,canvas.height));
      }
    });
    // Random embers anywhere on floor
    if(Math.random()<0.3)embers.push(new FireParticle(Math.random()*canvas.width,canvas.height));

    // Launch fireworks
    fwTimer++;
    if(fwTimer>40){fwTimer=0;fireworks.push(new Firework());}

    // Update & draw fire
    for(let i=embers.length-1;i>=0;i--){
      embers[i].update();embers[i].draw();
      if(embers[i].life<=0)embers.splice(i,1);
    }
    // Update & draw fireworks
    for(let i=fireworks.length-1;i>=0;i--){
      fireworks[i].update();fireworks[i].draw();
      if(fireworks[i].exploded&&fireworks[i].trail.length===0)fireworks.splice(i,1);
    }
    // Update & draw sparks
    for(let i=particles.length-1;i>=0;i--){
      particles[i].update();particles[i].draw();
      if(particles[i].life<=0)particles.splice(i,1);
    }
    aboutFireAnim=requestAnimationFrame(loop);
  }
  loop();
}
function stopAboutFireworks(){
  aboutFireRunning=false;
  if(aboutFireAnim)cancelAnimationFrame(aboutFireAnim);
  aboutFireAnim=null;
}

// ══════════════════════════════════════════════════
//  MUSIC TOGGLE
// ══════════════════════════════════════════════════
function toggleMusic(){
  BGM.init();
  musicOn=!musicOn;
  if(musicOn){BGM.start();document.getElementById('music-btn').textContent='🔇 MUTE';}
  else{BGM.stop();document.getElementById('music-btn').textContent='🎵 MUSIC';}
}

// ══════════════════════════════════════════════════
//  COUNTER ANIMATION
// ══════════════════════════════════════════════════
function animateCounters(){
  document.querySelectorAll('[data-target]').forEach(el=>{
    const target=+el.dataset.target,start=Date.now(),dur=1500;
    const tick=()=>{
      const t=Math.min((Date.now()-start)/dur,1);
      el.textContent=Math.round(t*target)+(target>=100?'+':'');
      if(t<1)requestAnimationFrame(tick);
    };
    tick();
  });
}

// ══════════════════════════════════════════════════
//  TYPING ANIMATION
// ══════════════════════════════════════════════════
let typedIdx=0,charIdx=0,deleting=false;
function typeNext(){
  const el=document.getElementById('typed-text');
  if(!el)return;
  const str=TYPED_STRINGS[typedIdx];
  if(!deleting){
    el.textContent=str.substring(0,++charIdx);
    if(charIdx===str.length){deleting=true;setTimeout(typeNext,2000);return;}
  }else{
    el.textContent=str.substring(0,--charIdx);
    if(charIdx===0){deleting=false;typedIdx=(typedIdx+1)%TYPED_STRINGS.length;}
  }
  setTimeout(typeNext,deleting?40:80);
}

// ══════════════════════════════════════════════════
//  PARTICLE BURST
// ══════════════════════════════════════════════════
function burst(x,y,color='#00ffcc'){
  for(let i=0;i<12;i++){
    const p=document.createElement('div');
    const angle=Math.random()*Math.PI*2,d=40+Math.random()*60;
    p.className='particle';
    p.style.cssText=`left:${x}px;top:${y}px;width:${3+Math.random()*5}px;height:${3+Math.random()*5}px;background:${color};--tx:${Math.cos(angle)*d}px;--ty:${Math.sin(angle)*d}px;`;
    document.body.appendChild(p);
    setTimeout(()=>p.remove(),1000);
  }
}
document.addEventListener('click',e=>burst(e.clientX,e.clientY,['#00ffcc','#7b2fff','#ff2d78','#ffcc00'][Math.floor(Math.random()*4)]));

// ══════════════════════════════════════════════════
//  LEARN SECTION
// ══════════════════════════════════════════════════
let learnProgLang='Java';
let learnProgTab='questions'; // 'questions' | 'shortcuts'

function renderLearn(){
  const domains=['Cybersecurity','Full Stack','AI','Programming','🧠 DSA Shortcuts','🟢 DSA Beginner'];
  const learnColors={
    'Cybersecurity':{c:'#ff2d55',bg:'rgba(255,45,85'},
    'Full Stack':{c:'#0099ff',bg:'rgba(0,153,255'},
    'AI':{c:'#00e676',bg:'rgba(0,230,118'},
    'Programming':{c:'#ff8c00',bg:'rgba(255,140,0'},
    '🧠 DSA Shortcuts':{c:'#ffcc00',bg:'rgba(255,204,0'},
    '🟢 DSA Beginner':{c:'#00e676',bg:'rgba(0,230,118'},
  };
  document.getElementById('learn-tabs').innerHTML=domains.map(d=>{
    const lc=learnColors[d]||{c:'#00ffcc',bg:'rgba(0,255,204'};
    const isActive=d===learnDomain;
    return `<button class="tab ${isActive?'active':''}" onclick="setLearnDomain('${d}')"
      style="border-color:${lc.c}${isActive?'':'66'};color:${isActive?lc.c:lc.c+'99'};background:${lc.bg},${isActive?'.28)':'.10)'};${isActive?'box-shadow:0 0 18px '+lc.c+'44,inset 0 0 12px '+lc.c+'20;font-weight:700;':''}">
      ${d==='Programming'?'💻 '+d:d}</button>`;
  }).join('');

  if(learnDomain==='Programming'){
    renderProgrammingSection();
    return;
  }
  if(learnDomain==='🧠 DSA Shortcuts'){
    renderDSAShortcuts();
    return;
  }
  if(learnDomain==='🟢 DSA Beginner'){
    renderDSABeginner();
    return;
  }

  const domainCol={'Cybersecurity':'#ff2d55','Full Stack':'#0099ff','AI':'#00e676'}[learnDomain]||'var(--neon2)';
  const domainBg={'Cybersecurity':'rgba(255,40,80,.08)','Full Stack':'rgba(0,153,255,.08)','AI':'rgba(0,230,118,.06)'}[learnDomain]||'rgba(0,0,0,.3)';
  const data=LEARN_DATA[learnDomain]||[];
  document.getElementById('learn-content').innerHTML=data.map(topic=>`
    <div class="card" style="margin-bottom:16px;border-left:4px solid ${domainCol};background:linear-gradient(135deg,${domainBg.replace('.04)', '.12)')},rgba(8,0,26,.8));border-color:${domainCol}33;">
      <div style="font-family:'Orbitron',monospace;font-size:1rem;font-weight:700;color:${domainCol};margin-bottom:16px;display:flex;align-items:center;gap:8px;"><span style="width:6px;height:6px;border-radius:50%;background:${domainCol};box-shadow:0 0 8px ${domainCol};flex-shrink:0;"></span>${topic.title}</div>
      ${topic.subs.map(sub=>`
        <div class="accord" id="acc-${sub.sub.replace(/\s/g,'_')}" style="--sec-col:${domainCol};">
          <div class="accord-head" onclick="toggleAccord(this)">
            <span style="font-size:.9rem;font-weight:700">${sub.sub}</span>
            <span class="accord-arrow">▼</span>
          </div>
          <div class="accord-body">
            <pre style="font-family:'JetBrains Mono',monospace;font-size:.75rem;color:var(--text);line-height:1.7;white-space:pre-wrap;word-break:break-word">${sub.text}</pre>
          </div>
        </div>
      `).join('')}
    </div>
  `).join('');
}

function renderProgrammingSection(){
  const langData=LEARN_DATA.Programming[learnProgLang];
  document.getElementById('learn-content').innerHTML=`
    <!-- Lang tabs -->
    <div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap;">
      ${['Java','Python'].map(l=>`<button onclick="setProgLang('${l}')" style="padding:8px 22px;border:1px solid ${l===learnProgLang?(l==='Java'?'#ff6b35':'#3776ab'):'var(--border)'};background:${l===learnProgLang?(l==='Java'?'rgba(255,107,53,.15)':'rgba(55,118,171,.15)'):'transparent'};color:${l===learnProgLang?(l==='Java'?'#ff6b35':'#3776ab'):'var(--muted)'};border-radius:6px;font-family:'JetBrains Mono',monospace;font-size:.7rem;cursor:pointer;transition:all .2s;letter-spacing:.05em;">${l==='Java'?'☕ Java':'🐍 Python'}</button>`).join('')}
    </div>
    <!-- Sub tabs -->
    <div style="display:flex;gap:8px;margin-bottom:20px;flex-wrap:wrap;">
      <button onclick="setProgTab('beginner')" style="padding:7px 18px;border:1px solid ${learnProgTab==='beginner'?'var(--neon1)':'var(--border)'};background:${learnProgTab==='beginner'?'rgba(0,255,204,.1)':'transparent'};color:${learnProgTab==='beginner'?'var(--neon1)':'var(--muted)'};border-radius:4px;font-family:'JetBrains Mono',monospace;font-size:.65rem;cursor:pointer;transition:all .2s;">🌱 Beginner Questions</button>
      <button onclick="setProgTab('questions')" style="padding:7px 18px;border:1px solid ${learnProgTab==='questions'?'var(--neon4)':'var(--border)'};background:${learnProgTab==='questions'?'rgba(255,204,0,.1)':'transparent'};color:${learnProgTab==='questions'?'var(--neon4)':'var(--muted)'};border-radius:4px;font-family:'JetBrains Mono',monospace;font-size:.65rem;cursor:pointer;transition:all .2s;">❓ Interview Questions</button>
      <button onclick="setProgTab('shortcuts')" style="padding:7px 18px;border:1px solid ${learnProgTab==='shortcuts'?'var(--neon2)':'var(--border)'};background:${learnProgTab==='shortcuts'?'rgba(123,47,255,.1)':'transparent'};color:${learnProgTab==='shortcuts'?'var(--neon2)':'var(--muted)'};border-radius:4px;font-family:'JetBrains Mono',monospace;font-size:.65rem;cursor:pointer;transition:all .2s;">⚡ Shortcuts & Tricks</button>
    </div>
    <div id="prog-content"></div>`;
  renderProgContent();
}

function renderProgContent(){
  const langData=LEARN_DATA.Programming[learnProgLang];
  const langColor=learnProgLang==='Java'?'#ff6b35':'#3776ab';
  const langBg=learnProgLang==='Java'?'rgba(255,107,53,.08)':'rgba(55,118,171,.08)';
  const el=document.getElementById('prog-content');
  if(!el)return;
  if(learnProgTab==='beginner'){
    const bqs=LEARN_DATA.Programming.beginner[learnProgLang];
    el.innerHTML=`
      <div style="padding:12px 16px;background:rgba(0,255,204,.07);border:1px solid rgba(0,255,204,.25);border-radius:8px;margin-bottom:16px;">
        <div style="font-family:'JetBrains Mono',monospace;font-size:.65rem;color:var(--neon1);">🌱 ${bqs.length} beginner-level questions to build your programming foundation. Perfect for freshers and those just starting out!</div>
      </div>
      <div style="display:grid;gap:8px;">
        ${bqs.map((q,i)=>`
          <div style="padding:12px 16px;border:1px solid rgba(0,255,204,.15);border-left:3px solid var(--neon1);border-radius:0 8px 8px 0;background:rgba(0,255,204,.02);display:flex;align-items:flex-start;gap:12px;transition:background .2s;" onmouseover="this.style.background='rgba(0,255,204,.06)'" onmouseout="this.style.background='rgba(0,255,204,.02)'">
            <span style="font-family:'JetBrains Mono',monospace;font-size:.6rem;color:var(--neon1);min-width:28px;margin-top:2px;font-weight:700;">B${String(i+1).padStart(2,'0')}</span>
            <span style="font-size:.88rem;color:var(--text);line-height:1.5;">${q}</span>
          </div>`).join('')}
      </div>`;
  } else if(learnProgTab==='questions'){
    el.innerHTML=`
      <div style="padding:12px 16px;background:${langBg};border:1px solid ${langColor}44;border-radius:8px;margin-bottom:16px;">
        <div style="font-family:'JetBrains Mono',monospace;font-size:.65rem;color:${langColor};">💡 ${langData.questions.length} coding questions commonly asked by interviewers at top companies. Practice these — only the question is shown, figure out the solution yourself!</div>
      </div>
      <div style="display:grid;gap:8px;">
        ${langData.questions.map((q,i)=>`
          <div style="padding:14px 18px;border:1px solid rgba(255,255,255,.06);border-left:3px solid ${langColor};border-radius:0 10px 10px 0;background:rgba(255,255,255,.02);display:flex;align-items:flex-start;gap:14px;transition:background .2s;" onmouseover="this.style.background='${langBg}'" onmouseout="this.style.background='rgba(255,255,255,.02)'">
            <span style="font-family:'JetBrains Mono',monospace;font-size:.62rem;color:${langColor};min-width:28px;margin-top:2px;font-weight:700;">Q${String(i+1).padStart(2,'0')}</span>
            <span style="font-size:.88rem;color:var(--text);line-height:1.55;">${q}</span>
          </div>`).join('')}
      </div>`;
  } else {
    el.innerHTML=`
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:16px;">
        ${langData.shortcuts.map(cat=>`
          <div style="border:1px solid ${langColor}33;border-radius:10px;overflow:hidden;background:var(--card);">
            <div style="padding:10px 16px;background:${langBg};border-bottom:1px solid ${langColor}33;">
              <div style="font-family:'Orbitron',monospace;font-size:.75rem;font-weight:700;color:${langColor};">⚡ ${cat.cat}</div>
            </div>
            <div style="padding:12px 16px;display:flex;flex-direction:column;gap:6px;">
              ${cat.items.map(item=>`<div style="font-family:'JetBrains Mono',monospace;font-size:.68rem;color:var(--text);line-height:1.5;padding:5px 8px;background:rgba(0,0,0,.2);border-radius:4px;">${item}</div>`).join('')}
            </div>
          </div>`).join('')}
      </div>`;
  }
}

function setLearnDomain(d){learnDomain=d;renderLearn();}

// ══ DSA SHORTCUTS (Interview Level) ══
const DSA_SHORTCUTS=[
  {topic:'⚡ Arrays & Hashing',color:'#00ffcc',shortcuts:[
    'Two Sum → HashMap {val:idx} — O(n)',
    'Sliding window fixed-k → subtract left, add right',
    'Kadane\'s → maxSoFar = max(num, maxSoFar+num)',
    'Prefix sum → ps[i] = ps[i-1]+a[i], range sum = ps[r]-ps[l-1]',
    'Dutch Flag → 3 pointers: lo=0,mid=0,hi=n-1',
    'Rotate array k steps → reverse all, reverse [0,k-1], reverse [k,n-1]',
    'Product except self → left pass × right pass, no division',
  ]},
  {topic:'🔗 Linked List',color:'#7b2fff',shortcuts:[
    'Detect cycle → slow+fast pointers; meet = cycle exists',
    'Find cycle start → reset slow to head, move both 1 step',
    'Find middle → slow/fast; fast==null → slow is middle',
    'Reverse → prev=null, curr=head, while curr: next=curr.next, curr.next=prev, prev=curr, curr=next',
    'Merge two sorted → compare heads, link smaller, recurse',
    'k-th from end → two pointers k apart, move together',
    'Palindrome → find mid → reverse 2nd half → compare',
  ]},
  {topic:'🌲 Trees',color:'#ffcc00',shortcuts:[
    'BFS → use Queue (deque); process level by level',
    'DFS preorder → root,left,right | inorder → left,root,right | postorder → left,right,root',
    'Height → max(left,right)+1; O(n)',
    'BST insert → left if <root, right if >root',
    'BST validate → pass min/max bounds down recursion',
    'LCA → if both < root: go left; if both > root: go right; else root=LCA',
    'Level order by levels → use size of queue at each level',
    'Max path sum → return max single branch; update global with left+node+right',
  ]},
  {topic:'📊 Graphs',color:'#00ccff',shortcuts:[
    'BFS → shortest path in unweighted graph',
    'DFS → cycle detection, connected components, topological sort',
    'Topological sort → Kahn\'s: in-degree array + queue',
    'Cycle in directed graph → DFS with 3 colors: 0=unvisited, 1=visiting, 2=done',
    'Union-Find → find(x): path compress; union(x,y): rank merge',
    'Dijkstra → min-heap (dist, node); relax neighbors',
    'Bellman-Ford → n-1 edge relaxations; detect -ve cycle on nth',
    'BFS in grid → directions = [(0,1),(0,-1),(1,0),(-1,0)]',
  ]},
  {topic:'💡 Dynamic Programming',color:'#ff2d78',shortcuts:[
    '0/1 Knapsack → dp[i][w] = max(dp[i-1][w], dp[i-1][w-wt]+val)',
    'Unbounded knapsack → dp[w] = max(dp[w], dp[w-wt]+val)',
    'LCS → dp[i][j] = dp[i-1][j-1]+1 if match, else max(dp[i-1][j],dp[i][j-1])',
    'LIS → O(n log n): patience sort with binary search on tails array',
    'Coin change → dp[i] = min(dp[i-coin]+1) for all coins',
    'Edit distance → match:dp[i-1][j-1], else 1+min(del,ins,rep)',
    'Matrix chain → dp[i][j] = min over all k of dp[i][k]+dp[k+1][j]+dims',
    'Palindrome substrings → expand from center: O(n²)',
  ]},
  {topic:'🔍 Binary Search',color:'#7b2fff',shortcuts:[
    'Template → lo=0,hi=n-1; while lo<=hi: mid=(lo+hi)>>1',
    'First true → lo=0,hi=n; while lo<hi: mid=(lo+hi)>>1; if f(mid): hi=mid else lo=mid+1',
    'Search rotated → find which half is sorted, check if target is in it',
    'Find peak → if mid < mid+1: go right; else go left',
    'Answer binary search → binary search on the ANSWER space, not array',
    'Lower bound → first position where arr[i]>=target',
    'Upper bound → first position where arr[i]>target',
  ]},
  {topic:'🪟 Sliding Window',color:'#00ffcc',shortcuts:[
    'Fixed window → init first k elements, slide: add right, remove left',
    'Variable window shrink → while condition violated: shrink from left',
    'Max/min in window → monotonic deque (O(n))',
    'String window → use char freq maps; match counter',
    'At most k distinct → use map.size <= k condition',
    'Subarray sum equals k → prefix sum + hashmap count',
  ]},
  {topic:'📚 Stack & Monotonic',color:'#ffcc00',shortcuts:[
    'Next greater → mono decreasing stack; pop when smaller found',
    'Previous smaller → mono increasing stack, process left to right',
    'Largest rectangle histogram → mono increasing stack with area calc on pop',
    'Valid parentheses → push open, pop on close, check match',
    'Evaluate expression → two stacks: nums and ops',
    'Min stack → aux stack stores minimum at each state',
    'Asteroid collision → push positive; on negative: pop while top>0',
  ]},
  {topic:'↩️ Backtracking',color:'#ff2d78',shortcuts:[
    'Template → choose → recurse → unchoose (backtrack)',
    'Permutations → swap idx with each subsequent; backtrack by swapping back',
    'Subsets → include/exclude each element; 2^n results',
    'Combinations → start from index i to avoid duplicates',
    'N-Queens → use col_set, diag1_set, diag2_set for O(1) conflict check',
    'Prune early → if remaining can\'t possibly reach target, return',
    'Avoid duplicates in input → sort first, skip duplicate values at same level',
  ]},
  {topic:'⛰️ Heap Patterns',color:'#00ccff',shortcuts:[
    'K largest → min-heap size k; push, pop if >k',
    'K smallest → max-heap size k; push, pop if >k',
    'Median stream → max-heap left + min-heap right; balance sizes',
    'Merge k sorted → min-heap of (val,list_idx,elem_idx)',
    'Top K frequent → heapq.nlargest(k, count.items(), key=lambda x:x[1])',
    'Task scheduler → max-heap by freq; cooldown via queue',
  ]},
  {topic:'🔢 Bit Tricks',color:'#7b2fff',shortcuts:[
    'x & (x-1) → clears lowest set bit (count bits: Brian Kernighan)',
    'x & (-x) → isolates lowest set bit',
    'x ^ x = 0, x ^ 0 = x → find unique element in pairs array',
    'n & (n-1) == 0 → n is power of 2',
    'Swap without temp → a^=b; b^=a; a^=b',
    'Get bit i → (n >> i) & 1',
    'Set bit i → n | (1 << i)',
    'Clear bit i → n & ~(1 << i)',
    'XOR of 1..n → cyclic pattern: n%4==0:n, 1:1, 2:n+1, 3:0',
  ]},
  {topic:'🌳 Trie Patterns',color:'#00ffcc',shortcuts:[
    'Insert → for each char: if not child, create node; mark end',
    'Search → traverse chars; return isEnd',
    'StartsWith → traverse chars; return True if all found',
    'Word Search → Trie + DFS on grid; prune if no prefix match',
    'Max XOR → insert binary; for each num greedily pick opposite bit',
    'Autocomplete → traverse to prefix node, then DFS for all words',
  ]},
  {topic:'🔀 Union-Find',color:'#ffcc00',shortcuts:[
    'Find with path compression → if p[x]!=x: p[x]=find(p[x]); return p[x]',
    'Union by rank → if rank[rx]<rank[ry]: p[rx]=ry else if equal: rank++',
    'Count components → init count=n; decrement on each union',
    'Redundant edge → first union that returns false (already same component)',
    'Accounts merge → union emails belonging to same account',
  ]},
];

const DSA_BEGINNER=[
  {topic:'📊 Arrays Basics',color:'#00ffcc',shortcuts:[
    'Access element → arr[i] → O(1)',
    'Linear search → loop i=0 to n-1, check arr[i]==target → O(n)',
    'Find max → max=arr[0], loop and update if arr[i]>max',
    'Reverse array → swap arr[0]&arr[n-1], arr[1]&arr[n-2]... until middle',
    'Count occurrences → loop and keep counter for target value',
    'Sum of array → total=0, add each element → O(n)',
    'Check sorted → loop, if arr[i]>arr[i+1] return false',
    'Remove duplicates (sorted) → two pointers: slow tracks unique position',
  ]},
  {topic:'🔤 String Basics',color:'#7b2fff',shortcuts:[
    'Check palindrome → compare s[i] and s[n-1-i] from both ends',
    'Count vowels → check each char in "aeiouAEIOU"',
    'Reverse string → s.split(\'\').reverse().join(\'\') in JS',
    'Count words → split by space, filter empty strings',
    'String to int → parseInt(s) | handle leading zeros and negatives',
    'Capitalize first letter → s[0].toUpperCase()+s.slice(1)',
    'Check anagram → sort both strings, compare (or use freq map)',
    'Longest word → split by space, find max length word',
  ]},
  {topic:'🔍 Searching',color:'#ffcc00',shortcuts:[
    'Linear search → O(n) — check every element',
    'Binary search → ONLY on SORTED array; halve search space each step',
    'Binary search code → lo=0,hi=n-1; while lo<=hi: mid=(lo+hi)/2',
    'If target<mid → search left (hi=mid-1)',
    'If target>mid → search right (lo=mid+1)',
    'If target==mid → found! return mid',
    'Binary search → O(log n) — much faster than linear for large arrays',
  ]},
  {topic:'🗂️ Sorting Basics',color:'#ff2d78',shortcuts:[
    'Bubble sort → compare adjacent, swap if out of order; O(n²)',
    'Selection sort → find minimum in unsorted part, swap to front; O(n²)',
    'Insertion sort → take element, insert into correct position; O(n²) worst, O(n) best',
    'Merge sort → divide in half, sort each, merge; O(n log n) always',
    'Quick sort → pick pivot, partition; O(n log n) avg, O(n²) worst',
    'Built-in sort → arr.sort((a,b)=>a-b) in JS; always use unless asked otherwise',
    'Counting sort → O(n+k) for small integer ranges',
  ]},
  {topic:'🔗 Linked List Basics',color:'#00ccff',shortcuts:[
    'Node structure → {val, next} — val holds data, next points to next node',
    'Traverse → while node: print node.val, node=node.next',
    'Insert at head → newNode.next=head; head=newNode',
    'Insert at tail → traverse to last, lastNode.next=newNode',
    'Delete node → prevNode.next=nodeToDelete.next',
    'Count nodes → traverse and increment counter',
    'Check if empty → head==null means empty list',
  ]},
  {topic:'📚 Stack Basics',color:'#7b2fff',shortcuts:[
    'Stack = LIFO (Last In First Out)',
    'Push → add to top; Pop → remove from top; Peek → see top',
    'Implement with array → push: arr.push(x); pop: arr.pop()',
    'Valid parentheses → push \'(\', on \')\' check top matches',
    'Stack empty check → stack.length===0',
    'Use case: function call stack, undo operations, expression evaluation',
    'Stack overflow → too many recursive calls without base case',
  ]},
  {topic:'🚦 Queue Basics',color:'#ffcc00',shortcuts:[
    'Queue = FIFO (First In First Out)',
    'Enqueue → add to back; Dequeue → remove from front',
    'Implement with array → enqueue: push(x); dequeue: shift()',
    'BFS uses a Queue',
    'Circular queue → avoid O(n) shift by using front/rear pointers',
    'Use case: BFS, printer queue, task scheduling',
    'isEmpty → front===rear (for circular) or arr.length===0',
  ]},
  {topic:'🌲 Tree Basics',color:'#ff2d78',shortcuts:[
    'Tree nodes → {val, left, right}; leaf if both null',
    'Height → recursively: max(height(left),height(right))+1',
    'Inorder (sorted output for BST) → left, root, right',
    'Preorder (copy tree) → root, left, right',
    'Postorder (delete tree) → left, right, root',
    'Level order → use Queue, process node by node per level',
    'BST property → left < root < right at every node',
    'BST search → if target<node: go left; if >node: go right; found if equal',
  ]},
  {topic:'🗺️ HashMap Basics',color:'#00ccff',shortcuts:[
    'HashMap → stores key:value pairs; O(1) average get/set',
    'Count frequency → map[val]=(map[val]||0)+1',
    'Check exists → key in map (JS) or map.has(key)',
    'Two Sum pattern → store val:idx in map, check if target-num exists',
    'Group by property → if(!map[key]) map[key]=[]; map[key].push(val)',
    'Find duplicate → add to set; if already exists → duplicate found',
    'Most frequent element → build freq map, find max value',
  ]},
  {topic:'🔄 Recursion Basics',color:'#7b2fff',shortcuts:[
    'Base case → when to STOP (e.g., n==0 return 1)',
    'Recursive case → call function with smaller input',
    'Factorial → fact(n) = n * fact(n-1); base: fact(0)=1',
    'Fibonacci → fib(n) = fib(n-1)+fib(n-2); base: fib(0)=0,fib(1)=1',
    'Sum of array → sum(arr,n) = arr[n-1]+sum(arr,n-1); base: n==0 return 0',
    'Binary search recursive → pass lo,hi as parameters',
    'Think recursively: solve for n assuming n-1 is already solved',
    'Every recursion can be converted to iteration with explicit stack',
  ]},
  {topic:'⏱️ Time Complexity Basics',color:'#00ffcc',shortcuts:[
    'O(1) → constant: array access, hashmap lookup',
    'O(log n) → binary search, balanced BST operations',
    'O(n) → linear scan, single loop',
    'O(n log n) → merge sort, heap sort, most efficient comparison sorts',
    'O(n²) → nested loops, bubble sort, selection sort',
    'O(2^n) → recursion with 2 branches (backtracking)',
    'O(n!) → permutation generation',
    'Best < Average < Worst case; usually state worst case in interviews',
  ]},
];

function renderDSAShortcuts(){
  let html=`<div style="margin-bottom:20px;">
    <div style="font-family:'JetBrains Mono',monospace;font-size:.7rem;color:var(--neon3);letter-spacing:.15em;margin-bottom:8px;">🧠 INTERVIEW-LEVEL DSA SHORTCUTS</div>
    <div style="font-size:.85rem;color:var(--muted);">Quick-recall patterns for FAANG & MNC interviews. Memorize these shortcuts, not textbook definitions.</div>
  </div>
  <div style="display:flex;flex-direction:column;gap:16px;">`;
  DSA_SHORTCUTS.forEach(sec=>{
    html+=`<div style="border:1px solid ${sec.color}33;border-radius:12px;overflow:hidden;background:var(--card);">
      <div onclick="this.parentElement.querySelector('.sc-body').style.display=this.parentElement.querySelector('.sc-body').style.display==='none'?'block':'none';this.querySelector('.sc-arrow').textContent=this.parentElement.querySelector('.sc-body').style.display==='none'?'▶':'▼';"
        style="padding:14px 18px;background:${sec.color}15;cursor:pointer;display:flex;align-items:center;gap:10px;user-select:none;">
        <span style="font-family:'Orbitron',monospace;font-size:.9rem;font-weight:700;color:#fff;flex:1;">${sec.topic}</span>
        <span style="font-family:'JetBrains Mono',monospace;font-size:.6rem;color:${sec.color};">${sec.shortcuts.length} shortcuts</span>
        <span class="sc-arrow" style="color:${sec.color};font-size:.7rem;">▶</span>
      </div>
      <div class="sc-body" style="display:none;padding:14px 18px;">
        <div style="display:flex;flex-direction:column;gap:6px;">
          ${sec.shortcuts.map(s=>`<div style="display:flex;gap:10px;padding:8px 12px;background:rgba(0,0,8,.5);border-radius:6px;border-left:2px solid ${sec.color}55;font-family:'JetBrains Mono',monospace;font-size:.72rem;color:var(--text);line-height:1.5;"><span style="color:${sec.color};flex-shrink:0;">→</span><span>${s}</span></div>`).join('')}
        </div>
      </div>
    </div>`;
  });
  html+='</div>';
  document.getElementById('learn-content').innerHTML=html;
}

function renderDSABeginner(){
  let html=`<div style="margin-bottom:20px;">
    <div style="font-family:'JetBrains Mono',monospace;font-size:.7rem;color:var(--neon1);letter-spacing:.15em;margin-bottom:8px;">🟢 BEGINNER DSA SHORTCUTS</div>
    <div style="font-size:.85rem;color:var(--muted);">Core concepts for complete beginners. Click any topic to expand shortcuts.</div>
  </div>
  <div style="display:flex;flex-direction:column;gap:16px;">`;
  DSA_BEGINNER.forEach(sec=>{
    html+=`<div style="border:1px solid ${sec.color}33;border-radius:12px;overflow:hidden;background:var(--card);">
      <div onclick="this.parentElement.querySelector('.bsc-body').style.display=this.parentElement.querySelector('.bsc-body').style.display==='none'?'block':'none';this.querySelector('.bsc-arrow').textContent=this.parentElement.querySelector('.bsc-body').style.display==='none'?'▶':'▼';"
        style="padding:14px 18px;background:${sec.color}15;cursor:pointer;display:flex;align-items:center;gap:10px;user-select:none;">
        <span style="font-family:'Orbitron',monospace;font-size:.9rem;font-weight:700;color:#fff;flex:1;">${sec.topic}</span>
        <span style="font-family:'JetBrains Mono',monospace;font-size:.6rem;color:${sec.color};">${sec.shortcuts.length} tips</span>
        <span class="bsc-arrow" style="color:${sec.color};font-size:.7rem;">▶</span>
      </div>
      <div class="bsc-body" style="display:none;padding:14px 18px;">
        <div style="display:flex;flex-direction:column;gap:6px;">
          ${sec.shortcuts.map(s=>`<div style="display:flex;gap:10px;padding:8px 12px;background:rgba(0,0,8,.5);border-radius:6px;border-left:2px solid ${sec.color}55;font-family:'JetBrains Mono',monospace;font-size:.72rem;color:var(--text);line-height:1.5;"><span style="color:${sec.color};flex-shrink:0;">→</span><span>${s}</span></div>`).join('')}
        </div>
      </div>
    </div>`;
  });
  html+='</div>';
  document.getElementById('learn-content').innerHTML=html;
}
function setProgLang(l){learnProgLang=l;renderProgrammingSection();}
function setProgTab(t){learnProgTab=t;renderProgContent();}
function toggleAccord(head){
  const acc=head.parentElement;acc.classList.toggle('open');sfx('click');
}

// ══════════════════════════════════════════════════
//  GAME / QUIZ
// ══════════════════════════════════════════════════
function renderGame(){
  const domains=['Cybersecurity','Full Stack','AI'];
  const gameColors={'Cybersecurity':{c:'#ff2d55',bg:'rgba(255,45,85'},'Full Stack':{c:'#0099ff',bg:'rgba(0,153,255'},'AI':{c:'#00e676',bg:'rgba(0,230,118'}};
  document.getElementById('game-tabs').innerHTML=domains.map(d=>{
    const gc=gameColors[d]||{c:'#00ffcc',bg:'rgba(0,255,204'};
    const isA=d===quizState.domain;
    return `<button class="tab ${isA?'active':''}" onclick="setQuizDomain('${d}')"
      style="border-color:${gc.c}${isA?'':'55'};color:${isA?gc.c:gc.c+'99'};background:${gc.bg},${isA?'.30)':'.12)'};${isA?'box-shadow:0 0 20px '+gc.c+'50,inset 0 0 12px '+gc.c+'20;font-weight:700;':''}">
      ${d==='Cybersecurity'?'🔒':d==='Full Stack'?'⚡':'🤖'} ${d}</button>`;
  }).join('');
  renderQuestion();
}
function setQuizDomain(d){
  quizState={domain:d,idx:0,score:0,answered:false,timer:null,timeLeft:20};
  clearInterval(quizState.timer);
  renderGame();
}
function renderQuestion(){
  const qArr=QUIZ_DATA[quizState.domain];
  if(quizState.idx>=qArr.length){renderQuizDone();return;}
  const q=qArr[quizState.idx];
  clearInterval(quizState.timer);
  quizState.timeLeft=20;quizState.answered=false;
  document.getElementById('quiz-area').innerHTML=`
    <div class="quiz-header">
      <span class="quiz-level">LVL ${quizState.idx+1} / ${qArr.length}</span>
      <span style="font-family:'Orbitron',monospace;font-size:.8rem;color:var(--muted)">⭐ ${quizState.score}</span>
      <span class="quiz-timer" id="quiz-timer">0:${String(quizState.timeLeft).padStart(2,'0')}</span>
    </div>
    <div class="quiz-progress"><div class="quiz-progress-bar" style="width:${(quizState.idx/qArr.length)*100}%"></div></div>
    <div class="quiz-q">${q.q}</div>
    <div class="quiz-opts">
      ${q.opts.map((o,i)=>`<button class="quiz-opt" id="qo${i}" onclick="answerQuiz(${i})">${String.fromCharCode(65+i)}. ${o}</button>`).join('')}
    </div>
  `;
  quizState.timer=setInterval(()=>{
    quizState.timeLeft--;
    const tEl=document.getElementById('quiz-timer');
    if(tEl)tEl.textContent=`0:${String(quizState.timeLeft).padStart(2,'0')}`;
    if(tEl&&quizState.timeLeft<=5)tEl.classList.add('warn');
    if(quizState.timeLeft<=0){clearInterval(quizState.timer);if(!quizState.answered)answerQuiz(-1);}
  },1000);
}
// ══ ANSWER ANIMATIONS ══
function playCorrectAnim(){
  const canvas=document.getElementById('answer-canvas');
  const sect=document.getElementById('sec-Games');
  const W=sect?sect.offsetWidth:window.innerWidth;
  const H=sect?sect.offsetHeight:window.innerHeight;
  canvas.width=W;canvas.height=H;
  canvas.style.opacity='1';
  const ctx=canvas.getContext('2d');
  const particles=[];
  const colors=['#00ffcc','#7b2fff','#ffcc00','#00ccff','#ffffff'];
  for(let i=0;i<120;i++){
    const angle=Math.random()*Math.PI*2;
    const speed=Math.random()*12+3;
    particles.push({
      x:W/2,y:H/2,
      vx:Math.cos(angle)*speed,vy:Math.sin(angle)*speed,
      life:1,decay:Math.random()*.025+.015,
      size:Math.random()*8+2,
      color:colors[Math.floor(Math.random()*colors.length)],
      shape:Math.random()>0.5?'circle':'star'
    });
  }
  ctx.fillStyle='rgba(0,255,204,0.15)';ctx.fillRect(0,0,W,H);
  let frame=0;
  function anim(){
    if(frame>90){canvas.style.opacity='0';ctx.clearRect(0,0,W,H);return;}
    ctx.fillStyle='rgba(2,0,8,0.15)';ctx.fillRect(0,0,W,H);
    particles.forEach(p=>{
      if(p.life<=0)return;
      p.x+=p.vx;p.y+=p.vy;p.vy+=0.15;p.life-=p.decay;
      ctx.globalAlpha=Math.max(0,p.life);
      ctx.fillStyle=p.color;ctx.shadowBlur=10;ctx.shadowColor=p.color;
      const r=Math.max(0.01,p.size*p.life);
      if(p.shape==='star'){
        ctx.save();ctx.translate(p.x,p.y);ctx.rotate(frame*0.1);
        ctx.beginPath();
        for(let j=0;j<5;j++){ctx.lineTo(Math.cos((j*4*Math.PI/5)-Math.PI/2)*r,Math.sin((j*4*Math.PI/5)-Math.PI/2)*r);}
        ctx.closePath();ctx.fill();ctx.restore();
      } else {
        ctx.beginPath();ctx.arc(p.x,p.y,r,0,Math.PI*2);ctx.fill();
      }
      ctx.globalAlpha=1;ctx.shadowBlur=0;
    });
    if(frame===5){
      ctx.globalAlpha=1;ctx.fillStyle='#00ffcc';ctx.shadowBlur=30;ctx.shadowColor='#00ffcc';
      ctx.font='bold 80px Arial';ctx.textAlign='center';ctx.textBaseline='middle';
      ctx.fillText('✓',W/2,H/2);
      ctx.shadowBlur=0;
    }
    frame++;requestAnimationFrame(anim);
  }
  anim();
  if(sect){sect.style.boxShadow='inset 0 0 60px rgba(0,255,204,0.4)';}
  setTimeout(()=>{if(sect)sect.style.boxShadow='';},600);
}
function playWrongAnim(){
  const canvas=document.getElementById('answer-canvas');
  const sect=document.getElementById('sec-Games');
  const W=sect?sect.offsetWidth:window.innerWidth;
  const H=sect?sect.offsetHeight:window.innerHeight;
  canvas.width=W;canvas.height=H;
  canvas.style.opacity='1';
  const ctx=canvas.getContext('2d');
  const area=document.getElementById('quiz-area');
  let shakeFrame=0;
  const shakeAnim=setInterval(()=>{
    const s=Math.max(0,(8-shakeFrame)*1.2);
    if(area)area.style.transform=`translateX(${(Math.random()-0.5)*s*2}px)`;
    shakeFrame++;if(shakeFrame>12){clearInterval(shakeAnim);if(area)area.style.transform='';}
  },30);
  const particles=[];
  for(let i=0;i<60;i++){
    const angle=Math.random()*Math.PI*2;
    const speed=Math.random()*8+2;
    particles.push({
      x:W/2,y:H/2,
      vx:Math.cos(angle)*speed,vy:Math.sin(angle)*speed,
      life:1,decay:Math.random()*.03+.02,
      size:Math.random()*6+2,color:'#ff2d78'
    });
  }
  ctx.fillStyle='rgba(255,45,120,0.12)';ctx.fillRect(0,0,W,H);
  let frame=0;
  function anim(){
    if(frame>60){canvas.style.opacity='0';ctx.clearRect(0,0,W,H);return;}
    ctx.fillStyle='rgba(2,0,8,0.2)';ctx.fillRect(0,0,W,H);
    particles.forEach(p=>{
      if(p.life<=0)return;
      p.x+=p.vx;p.y+=p.vy;p.vy+=0.2;p.life-=p.decay;
      ctx.globalAlpha=Math.max(0,p.life);
      const r=Math.max(0.01,p.size*p.life);
      ctx.fillStyle='#ff2d78';ctx.shadowBlur=8;ctx.shadowColor='#ff2d78';
      ctx.beginPath();ctx.arc(p.x,p.y,r,0,Math.PI*2);ctx.fill();
      ctx.globalAlpha=1;ctx.shadowBlur=0;
    });
    if(frame===5){
      ctx.globalAlpha=1;ctx.fillStyle='#ff2d78';ctx.shadowBlur=30;ctx.shadowColor='#ff2d78';
      ctx.font='bold 80px Arial';ctx.textAlign='center';ctx.textBaseline='middle';
      ctx.fillText('✗',W/2,H/2);ctx.shadowBlur=0;
    }
    frame++;requestAnimationFrame(anim);
  }
  anim();
  if(sect){sect.style.boxShadow='inset 0 0 60px rgba(255,45,120,0.35)';}
  setTimeout(()=>{if(sect)sect.style.boxShadow='';},500);
}

function answerQuiz(idx){
  if(quizState.answered)return;
  quizState.answered=true;clearInterval(quizState.timer);
  const q=QUIZ_DATA[quizState.domain][quizState.idx];
  const correct=idx===q.a;
  if(correct){quizState.score++;sfx('correct');playCorrectAnim();}else{sfx('wrong');playWrongAnim();}
  document.querySelectorAll('.quiz-opt').forEach((el,i)=>{
    el.disabled=true;
    if(i===q.a)el.classList.add('correct');
    else if(i===idx)el.classList.add('wrong');
  });
  const area=document.getElementById('quiz-area');
  area.insertAdjacentHTML('beforeend',`
    <div class="quiz-exp">${correct?'✅':'❌'} ${q.exp}</div>
    <button class="quiz-next" onclick="nextQuestion()">NEXT QUESTION →</button>
  `);
}
function nextQuestion(){quizState.idx++;renderQuestion();}
function renderQuizDone(){
  const total=QUIZ_DATA[quizState.domain].length;
  const pct=Math.round(quizState.score/total*100);
  sfx('correct');
  document.getElementById('quiz-area').innerHTML=`
    <div style="text-align:center;padding:40px;">
      <div style="font-size:4rem;margin-bottom:16px;animation:iconSpin 1s ease">${pct>=80?'🏆':pct>=60?'🥈':'🎯'}</div>
      <div style="font-family:'Orbitron',monospace;font-size:1.5rem;font-weight:900;background:var(--grad);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:8px">ROUND COMPLETE!</div>
      <div style="font-size:2rem;font-family:'Orbitron',monospace;color:#fff;margin-bottom:4px">${quizState.score}/${total}</div>
      <div style="color:var(--neon4);font-family:'JetBrains Mono',monospace;margin-bottom:20px">${pct}% • ${pct>=80?'EXPERT':'pct>=60?INTERMEDIATE:KEEP PRACTICING'}</div>
      <div class="xp-bar-wrap" style="max-width:300px;margin:0 auto 24px"><div class="xp-bar" style="width:${pct}%"></div></div>
      <button class="btn-primary" onclick="setQuizDomain('${quizState.domain}')">🔄 RETRY</button>
    </div>`;
}

// ══════════════════════════════════════════════════
//  DSA SECTION
// ══════════════════════════════════════════════════
function renderDSA(){
  const topicsHTML=DSA_DATA.map((t,i)=>`
    <div class="dsa-topic-btn ${i===dsaCurTopic?'active':''}" onclick="setDSATopic(${i})">
      <span class="t-icon">${t.icon}</span>
      <div class="t-name">${t.topic}</div>
      <div class="t-count">${t.questions.filter(q=>q.lv==='Easy').length}E · ${t.questions.filter(q=>q.lv==='Medium').length}M · ${t.questions.filter(q=>q.lv==='Hard').length}H</div>
    </div>
  `).join('');
  document.getElementById('dsa-topics').innerHTML=topicsHTML;
  renderDSAPanel();
}
function setDSATopic(i){
  dsaCurTopic=i;
  dsaCurDiff='All';
  renderDSA();
  document.getElementById('dsa-panel-wrap').scrollIntoView({behavior:'smooth',block:'nearest'});
}
let dsaCurDiff='All';
function setDSADiff(d){
  dsaCurDiff=d;
  document.querySelectorAll('.dsa-dtab').forEach(b=>b.classList.remove('on'));
  document.getElementById('dtab-'+d).classList.add('on');
  renderDSAList();
}
function renderDSAPanel(){
  const t=DSA_DATA[dsaCurTopic];
  if(!t)return;
  document.getElementById('dsa-panel-wrap').innerHTML=`
    <div class="dsa-panel" style="background:linear-gradient(135deg,rgba(255,204,0,.18),rgba(8,0,26,.9));border-color:rgba(255,204,0,.55);border-left:5px solid #ffcc00;box-shadow:0 0 25px rgba(255,204,0,.08);">
      <div class="dsa-panel-header" style="border-bottom-color:rgba(255,204,0,.2);">
        <span class="dsa-panel-icon">${t.icon}</span>
        <span class="dsa-panel-title">${t.topic}</span>
        <span class="dsa-q-count-badge">${t.questions.length} questions</span>
      </div>
      <div class="dsa-diff-tabs">
        <button class="dsa-dtab dsa-dtab-all ${dsaCurDiff==='All'?'on':''}" id="dtab-All" onclick="setDSADiff('All')">All</button>
        <button class="dsa-dtab dsa-dtab-easy ${dsaCurDiff==='Easy'?'on':''}" id="dtab-Easy" onclick="setDSADiff('Easy')">🟢 Easy</button>
        <button class="dsa-dtab dsa-dtab-med ${dsaCurDiff==='Medium'?'on':''}" id="dtab-Medium" onclick="setDSADiff('Medium')">🟡 Medium</button>
        <button class="dsa-dtab dsa-dtab-hard ${dsaCurDiff==='Hard'?'on':''}" id="dtab-Hard" onclick="setDSADiff('Hard')">🔴 Hard</button>
      </div>
      <div class="dsa-q-list" id="dsa-q-list"></div>
    </div>
  `;
  renderDSAList();
}
// ═══════════════════════════════════════════════════════════
// 📝 DSA_RESOURCES — Video + solution links per DSA problem
// Key = exact problem title. Add new problem or new links:
// "Problem Title":{
//   javaYT:[{label:"Channel (Java)",url:"https://youtube.com/watch?v=..."}],
//   pythonYT:[{label:"Channel (Python)",url:"https://youtube.com/watch?v=..."}],
//   solutions:[{label:"LeetCode",url:"..."},{label:"GeeksForGeeks",url:"..."}]
// },
// ═══════════════════════════════════════════════════════════
// ══ DSA RESOURCES MAP — Separate Java & Python YT + LeetCode + GFG ══
const DSA_RESOURCES={
  "Two Sum":{
    javaYT:[
      {label:'Kevin Naughton Jr (Java)',url:'https://www.youtube.com/watch?v=BoHivkqqgaQ'},
      {label:'Nick White (Java)',url:'https://www.youtube.com/watch?v=KLlXCFG5TnA'},
    ],
    pythonYT:[
      {label:'Tech With Tim (Python)',url:'https://www.youtube.com/watch?v=KzZtYxB2Rlk'},
      {label:'Striver (Python)',url:'https://www.youtube.com/watch?v=UXDSeD9mN-k'},
    ],
    solutions:[
      {label:'LeetCode',url:'https://leetcode.com/problems/two-sum/solutions/'},
      {label:'GeeksForGeeks',url:'https://www.geeksforgeeks.org/two-sum-problem/'},
    ]
  },
  "Best Time to Buy and Sell Stock":{
    javaYT:[
      {label:'Kevin Naughton Jr (Java)',url:'https://www.youtube.com/watch?v=mj7N8pLCJ6w'},
      {label:'Back To Back SWE (Java)',url:'https://www.youtube.com/watch?v=1pkOgXD63yU'},
    ],
    pythonYT:[
      {label:'Striver (Python)',url:'https://www.youtube.com/watch?v=j7ZinyXQaD8'},
    ],
    solutions:[
      {label:'LeetCode',url:'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/'},
      {label:'GeeksForGeeks',url:'https://www.geeksforgeeks.org/best-time-to-buy-and-sell-stock/'},
    ]
  },
  "Maximum Subarray (Kadane's)":{
    javaYT:[
      {label:'Back To Back SWE (Java)',url:'https://www.youtube.com/watch?v=2MmGzdiKR9Y'},
      {label:'Striver (Java)',url:'https://www.youtube.com/watch?v=w_KEocd__20'},
    ],
    pythonYT:[
      {label:'NeetCode (Python)',url:'https://www.youtube.com/watch?v=5WZl3MMT0Eg'},
      {label:'Corey Schafer (Python)',url:'https://www.youtube.com/watch?v=VMtyGnNcdPw'},
    ],
    solutions:[
      {label:'LeetCode',url:'https://leetcode.com/'},
      {label:'GeeksForGeeks',url:'https://www.geeksforgeeks.org/'},
    ]
  },
  "Merge Intervals":{
    javaYT:[
      {label:'Kevin Naughton Jr (Java)',url:'https://www.youtube.com/watch?v=qKczfGUrFY4'},
      {label:'Tushar Roy (Java)',url:'https://www.youtube.com/watch?v=44H3cEC2fFM'},
    ],
    pythonYT:[
      {label:'CS Dojo (Python)',url:'https://www.youtube.com/watch?v=44H3cEC2fFM'},
      {label:'NeetCode (Python)',url:'https://www.youtube.com/watch?v=IexN60k62jo'},
    ],
    solutions:[
      {label:'LeetCode',url:'https://leetcode.com/problems/merge-intervals/solutions/'},
      {label:'GeeksForGeeks',url:'https://www.geeksforgeeks.org/merging-intervals/'},
    ]
  },
  "Trapping Rain Water":{
    javaYT:[
      {label:'Tushar Roy (Java)',url:'https://www.youtube.com/watch?v=q7jhBmGADl4'},
      {label:'Back To Back SWE (Java)',url:'https://www.youtube.com/watch?v=ZI2z5pq0TqA'},
    ],
    pythonYT:[
      {label:'NeetCode (Python)',url:'https://www.youtube.com/watch?v=ZI2z5pq0TqA'},
      {label:'Striver (Python)',url:'https://www.youtube.com/watch?v=C3y2tJKd-oY'},
    ],
    solutions:[
      {label:'LeetCode',url:'https://leetcode.com/problems/trapping-rain-water/solutions/'},
      {label:'GeeksForGeeks',url:'https://www.geeksforgeeks.org/trapping-rain-water/'},
    ]
  },
  "First Missing Positive":{
    javaYT:[
      {label:'Nick White (Java)',url:'https://www.youtube.com/watch?v=8g78yfzMlao'},
    ],
    pythonYT:[
      {label:'NeetCode (Python)',url:'https://www.youtube.com/watch?v=8g78yfzMlao'},
    ],
    solutions:[
      {label:'LeetCode',url:'https://leetcode.com/problems/first-missing-positive/solutions/'},
      {label:'GeeksForGeeks',url:'https://www.geeksforgeeks.org/find-the-smallest-positive-number-missing-from-an-unsorted-array/'},
    ]
  },
  "Valid Anagram":{
    javaYT:[
      {label:'Kevin Naughton Jr (Java)',url:'https://www.youtube.com/watch?v=IR4haL3tDZc'},
      {label:'Nick White (Java)',url:'https://www.youtube.com/watch?v=9UtInBqnCgA'},
    ],
    pythonYT:[
      {label:'Tech With Tim (Python)',url:'https://www.youtube.com/watch?v=g-ZzanBgXXs'},
    ],
    solutions:[
      {label:'LeetCode',url:'https://leetcode.com/problems/valid-anagram/solutions/'},
      {label:'GeeksForGeeks',url:'https://www.geeksforgeeks.org/check-whether-two-strings-are-anagram-of-each-other/'},
    ]
  },
  "Valid Palindrome":{
    javaYT:[
      {label:'Nick White (Java)',url:'https://www.youtube.com/watch?v=bYB3Xr1ASRY'},
      {label:'Kevin Naughton Jr (Java)',url:'https://www.youtube.com/watch?v=jJXJ16kPFWg'},
    ],
    pythonYT:[
      {label:'Tech With Tim (Python)',url:'https://www.youtube.com/watch?v=aRy9CDh0ipo'},
    ],
    solutions:[
      {label:'LeetCode',url:'https://leetcode.com/problems/valid-palindrome/solutions/'},
      {label:'GeeksForGeeks',url:'https://www.geeksforgeeks.org/python-program-check-string-palindrome-not/'},
    ]
  },
  "Longest Substring Without Repeating Characters":{
    javaYT:[
      {label:'Back To Back SWE (Java)',url:'https://www.youtube.com/watch?v=c6gLQiC7gEk'},
      {label:'Kevin Naughton Jr (Java)',url:'https://www.youtube.com/watch?v=wiGpQwVHdE0'},
    ],
    pythonYT:[
      {label:'NeetCode (Python)',url:'https://www.youtube.com/watch?v=wiGpQwVHdE0'},
      {label:'Striver (Python)',url:'https://www.youtube.com/watch?v=oFIJxt7ROM0'},
    ],
    solutions:[
      {label:'LeetCode',url:'https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/'},
      {label:'GeeksForGeeks',url:'https://www.geeksforgeeks.org/length-of-the-longest-substring-without-repeating-characters/'},
    ]
  },
  "Group Anagrams":{
    javaYT:[
      {label:'Kevin Naughton Jr (Java)',url:'https://www.youtube.com/watch?v=C9V66KyZCP8'},
    ],
    pythonYT:[
      {label:'NeetCode (Python)',url:'https://www.youtube.com/watch?v=vzdNOK2oB2E'},
    ],
    solutions:[
      {label:'LeetCode',url:'https://leetcode.com/problems/group-anagrams/solutions/'},
      {label:'GeeksForGeeks',url:'https://www.geeksforgeeks.org/given-a-sequence-of-words-print-all-anagrams-together/'},
    ]
  },
  "Minimum Window Substring":{
    javaYT:[
      {label:'Back To Back SWE (Java)',url:'https://www.youtube.com/watch?v=eS6PZjdDFWk'},
      {label:'Tushar Roy (Java)',url:'https://www.youtube.com/watch?v=qgBT38yAu4U'},
    ],
    pythonYT:[
      {label:'NeetCode (Python)',url:'https://www.youtube.com/watch?v=jSto0O4AJbM'},
    ],
    solutions:[
      {label:'LeetCode',url:'https://leetcode.com/problems/minimum-window-substring/solutions/'},
      {label:'GeeksForGeeks',url:'https://www.geeksforgeeks.org/find-the-smallest-window-in-a-string-containing-all-characters-of-another-string/'},
    ]
  },
  "Regular Expression Matching":{
    javaYT:[
      {label:'Tushar Roy (Java)',url:'https://www.youtube.com/watch?v=l3hda49XcDE'},
    ],
    pythonYT:[
      {label:'NeetCode (Python)',url:'https://www.youtube.com/watch?v=HAA8mgxlov8'},
    ],
    solutions:[
      {label:'LeetCode',url:'https://leetcode.com/problems/regular-expression-matching/solutions/'},
      {label:'GeeksForGeeks',url:'https://www.geeksforgeeks.org/regular-expression-matching/'},
    ]
  },
  "Reverse Linked List":{
    javaYT:[
      {label:'Tushar Roy (Java)',url:'https://www.youtube.com/watch?v=sYcOK51hl-A'},
      {label:'Kevin Naughton Jr (Java)',url:'https://www.youtube.com/watch?v=G0_I-ZF0S38'},
    ],
    pythonYT:[
      {label:'NeetCode (Python)',url:'https://www.youtube.com/watch?v=G0_I-ZF0S38'},
      {label:'CS Dojo (Python)',url:'https://www.youtube.com/watch?v=XmVIEE_P8RI'},
    ],
    solutions:[
      {label:'LeetCode',url:'https://leetcode.com/problems/reverse-linked-list/solutions/'},
      {label:'GeeksForGeeks',url:'https://www.geeksforgeeks.org/reverse-a-linked-list/'},
    ]
  },
  "Linked List Cycle Detection":{
    javaYT:[
      {label:'Back To Back SWE (Java)',url:'https://www.youtube.com/watch?v=MFOAbpfrJ8g'},
      {label:'Nick White (Java)',url:'https://www.youtube.com/watch?v=gBTe7lFR3vc'},
    ],
    pythonYT:[
      {label:'NeetCode (Python)',url:'https://www.youtube.com/watch?v=gBTe7lFR3vc'},
    ],
    solutions:[
      {label:'LeetCode',url:'https://leetcode.com/problems/linked-list-cycle/solutions/'},
      {label:'GeeksForGeeks',url:'https://www.geeksforgeeks.org/detect-loop-in-a-linked-list/'},
    ]
  },
  "Reorder List":{
    javaYT:[
      {label:'Nick White (Java)',url:'https://www.youtube.com/watch?v=S5bfdUTrKLM'},
    ],
    pythonYT:[
      {label:'NeetCode (Python)',url:'https://www.youtube.com/watch?v=S5bfdUTrKLM'},
    ],
    solutions:[
      {label:'LeetCode',url:'https://leetcode.com/problems/reorder-list/solutions/'},
      {label:'GeeksForGeeks',url:'https://www.geeksforgeeks.org/rearrange-a-given-linked-list-in-place/'},
    ]
  },
  "Copy List with Random Pointer":{
    javaYT:[
      {label:'Kevin Naughton Jr (Java)',url:'https://www.youtube.com/watch?v=5Y2EiZST97Y'},
    ],
    pythonYT:[
      {label:'NeetCode (Python)',url:'https://www.youtube.com/watch?v=5Y2EiZST97Y'},
    ],
    solutions:[
      {label:'LeetCode',url:'https://leetcode.com/problems/copy-list-with-random-pointer/solutions/'},
      {label:'GeeksForGeeks',url:'https://www.geeksforgeeks.org/clone-linked-list-next-arbit-pointer-set-2/'},
    ]
  },
  "Merge K Sorted Lists":{
    javaYT:[
      {label:'Tushar Roy (Java)',url:'https://www.youtube.com/watch?v=ptPtDu51GZ0'},
      {label:'Kevin Naughton Jr (Java)',url:'https://www.youtube.com/watch?v=q5a5OiGbT6Q'},
    ],
    pythonYT:[
      {label:'NeetCode (Python)',url:'https://www.youtube.com/watch?v=q5a5OiGbT6Q'},
    ],
    solutions:[
      {label:'LeetCode',url:'https://leetcode.com/problems/merge-k-sorted-lists/solutions/'},
      {label:'GeeksForGeeks',url:'https://www.geeksforgeeks.org/merge-k-sorted-linked-lists-set-2-using-min-heap/'},
    ]
  },
  "LRU Cache":{
    javaYT:[
      {label:'Back To Back SWE (Java)',url:'https://www.youtube.com/watch?v=NDpwj0VWz1U'},
      {label:'Tushar Roy (Java)',url:'https://www.youtube.com/watch?v=7ABFKPK2hD4'},
    ],
    pythonYT:[
      {label:'NeetCode (Python)',url:'https://www.youtube.com/watch?v=7ABFKPK2hD4'},
    ],
    solutions:[
      {label:'LeetCode',url:'https://leetcode.com/problems/lru-cache/solutions/'},
      {label:'GeeksForGeeks',url:'https://www.geeksforgeeks.org/lru-cache-implementation/'},
    ]
  },
  "Valid Parentheses":{
    javaYT:[
      {label:'Kevin Naughton Jr (Java)',url:'https://www.youtube.com/watch?v=WTzjTskDFMg'},
    ],
    pythonYT:[
      {label:'Tech With Tim (Python)',url:'https://www.youtube.com/watch?v=fPznMDjST5k'},
    ],
    solutions:[
      {label:'LeetCode',url:'https://leetcode.com/problems/valid-parentheses/solutions/'},
      {label:'GeeksForGeeks',url:'https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/'},
    ]
  },
  "Min Stack":{
    javaYT:[
      {label:'Nick White (Java)',url:'https://www.youtube.com/watch?v=qkLl7nAwDPo'},
    ],
    pythonYT:[
      {label:'NeetCode (Python)',url:'https://www.youtube.com/watch?v=qkLl7nAwDPo'},
    ],
    solutions:[
      {label:'LeetCode',url:'https://leetcode.com/problems/min-stack/solutions/'},
      {label:'GeeksForGeeks',url:'https://www.geeksforgeeks.org/design-a-stack-that-supports-getmin-in-o1-time-and-o1-extra-space/'},
    ]
  },
  "Daily Temperatures":{
    javaYT:[
      {label:'Kevin Naughton Jr (Java)',url:'https://www.youtube.com/watch?v=cTBiBSnjO3c'},
    ],
    pythonYT:[
      {label:'NeetCode (Python)',url:'https://www.youtube.com/watch?v=cTBiBSnjO3c'},
    ],
    solutions:[
      {label:'LeetCode',url:'https://leetcode.com/problems/daily-temperatures/solutions/'},
      {label:'GeeksForGeeks',url:'https://www.geeksforgeeks.org/next-greater-element/'},
    ]
  },
  "Decode String":{
    javaYT:[
      {label:'Nick White (Java)',url:'https://www.youtube.com/watch?v=qB0zZpBJlh8'},
    ],
    pythonYT:[
      {label:'NeetCode (Python)',url:'https://www.youtube.com/watch?v=qB0zZpBJlh8'},
    ],
    solutions:[
      {label:'LeetCode',url:'https://leetcode.com/problems/decode-string/solutions/'},
      {label:'GeeksForGeeks',url:'https://www.geeksforgeeks.org/decode-string-recursively-encoded-count-followed-substring/'},
    ]
  },
  "Sliding Window Maximum":{
    javaYT:[
      {label:'Back To Back SWE (Java)',url:'https://www.youtube.com/watch?v=DfljaUwZsOk'},
    ],
    pythonYT:[
      {label:'NeetCode (Python)',url:'https://www.youtube.com/watch?v=DfljaUwZsOk'},
    ],
    solutions:[
      {label:'LeetCode',url:'https://leetcode.com/problems/sliding-window-maximum/solutions/'},
      {label:'GeeksForGeeks',url:'https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/'},
    ]
  },
  "Binary Search":{
    javaYT:[
      {label:'Kevin Naughton Jr (Java)',url:'https://www.youtube.com/watch?v=P3YID7liBug'},
      {label:'Back To Back SWE (Java)',url:'https://www.youtube.com/watch?v=s4DPM8ct1pI'},
    ],
    pythonYT:[
      {label:'Corey Schafer (Python)',url:'https://www.youtube.com/watch?v=vohuoQfCFOQ'},
      {label:'CS Dojo (Python)',url:'https://www.youtube.com/watch?v=j5uXyPJ0Pew'},
    ],
    solutions:[
      {label:'LeetCode',url:'https://leetcode.com/problems/binary-search/solutions/'},
      {label:'GeeksForGeeks',url:'https://www.geeksforgeeks.org/binary-search/'},
    ]
  },
  "Search in Rotated Sorted Array":{
    javaYT:[
      {label:'Nick White (Java)',url:'https://www.youtube.com/watch?v=U8XENwh8Oy8'},
    ],
    pythonYT:[
      {label:'NeetCode (Python)',url:'https://www.youtube.com/watch?v=U8XENwh8Oy8'},
    ],
    solutions:[
      {label:'LeetCode',url:'https://leetcode.com/problems/search-in-rotated-sorted-array/solutions/'},
      {label:'GeeksForGeeks',url:'https://www.geeksforgeeks.org/search-an-element-in-a-sorted-and-pivoted-array/'},
    ]
  },
  "Find Minimum in Rotated Sorted Array":{
    javaYT:[
      {label:'Kevin Naughton Jr (Java)',url:'https://www.youtube.com/watch?v=nIVW4P8b1VA'},
    ],
    pythonYT:[
      {label:'NeetCode (Python)',url:'https://www.youtube.com/watch?v=nIVW4P8b1VA'},
    ],
    solutions:[
      {label:'LeetCode',url:'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/solutions/'},
      {label:'GeeksForGeeks',url:'https://www.geeksforgeeks.org/find-minimum-element-in-a-sorted-and-rotated-array/'},
    ]
  },
  "Maximum Depth of Binary Tree":{
    javaYT:[
      {label:'Kevin Naughton Jr (Java)',url:'https://www.youtube.com/watch?v=YHF9AA0eFRs'},
      {label:'Back To Back SWE (Java)',url:'https://www.youtube.com/watch?v=hTM3phVI6YQ'},
    ],
    pythonYT:[
      {label:'NeetCode (Python)',url:'https://www.youtube.com/watch?v=hTM3phVI6YQ'},
    ],
    solutions:[
      {label:'LeetCode',url:'https://leetcode.com/problems/maximum-depth-of-binary-tree/solutions/'},
      {label:'GeeksForGeeks',url:'https://www.geeksforgeeks.org/find-the-maximum-depth-or-height-of-a-tree/'},
    ]
  },
  "Lowest Common Ancestor of BST":{
    javaYT:[
      {label:'Tushar Roy (Java)',url:'https://www.youtube.com/watch?v=gs2LMfuOR9k'},
    ],
    pythonYT:[
      {label:'NeetCode (Python)',url:'https://www.youtube.com/watch?v=gs2LMfuOR9k'},
    ],
    solutions:[
      {label:'LeetCode',url:'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/solutions/'},
      {label:'GeeksForGeeks',url:'https://www.geeksforgeeks.org/lowest-common-ancestor-in-a-binary-search-tree/'},
    ]
  },
  "Number of Islands":{
    javaYT:[
      {label:'Kevin Naughton Jr (Java)',url:'https://www.youtube.com/watch?v=o8S2bO3pmO4'},
      {label:'Nick White (Java)',url:'https://www.youtube.com/watch?v=pV2kpPD66nE'},
    ],
    pythonYT:[
      {label:'NeetCode (Python)',url:'https://www.youtube.com/watch?v=pV2kpPD66nE'},
      {label:'Striver (Python)',url:'https://www.youtube.com/watch?v=muncqlKJrH0'},
    ],
    solutions:[
      {label:'LeetCode',url:'https://leetcode.com/problems/number-of-islands/solutions/'},
      {label:'GeeksForGeeks',url:'https://www.geeksforgeeks.org/find-number-of-islands/'},
    ]
  },
  "Clone Graph":{
    javaYT:[
      {label:'Kevin Naughton Jr (Java)',url:'https://www.youtube.com/watch?v=mQeF6bN8hMk'},
    ],
    pythonYT:[
      {label:'NeetCode (Python)',url:'https://www.youtube.com/watch?v=mQeF6bN8hMk'},
    ],
    solutions:[
      {label:'LeetCode',url:'https://leetcode.com/problems/clone-graph/solutions/'},
      {label:'GeeksForGeeks',url:'https://www.geeksforgeeks.org/clone-an-undirected-graph/'},
    ]
  },
  "Climbing Stairs":{
    javaYT:[
      {label:'Aditya Verma (Java)',url:'https://www.youtube.com/watch?v=n4dnW5X5EM4'},
      {label:'Kevin Naughton Jr (Java)',url:'https://www.youtube.com/watch?v=Y0lT9Fck7qI'},
    ],
    pythonYT:[
      {label:'NeetCode (Python)',url:'https://www.youtube.com/watch?v=Y0lT9Fck7qI'},
      {label:'CS Dojo (Python)',url:'https://www.youtube.com/watch?v=5o0_fFznAjM'},
    ],
    solutions:[
      {label:'LeetCode',url:'https://leetcode.com/problems/climbing-stairs/solutions/'},
      {label:'GeeksForGeeks',url:'https://www.geeksforgeeks.org/count-ways-reach-nth-stair/'},
    ]
  },
  "House Robber":{
    javaYT:[
      {label:'Kevin Naughton Jr (Java)',url:'https://www.youtube.com/watch?v=73r3KWiEvyk'},
    ],
    pythonYT:[
      {label:'NeetCode (Python)',url:'https://www.youtube.com/watch?v=73r3KWiEvyk'},
    ],
    solutions:[
      {label:'LeetCode',url:'https://leetcode.com/problems/house-robber/solutions/'},
      {label:'GeeksForGeeks',url:'https://www.geeksforgeeks.org/find-maximum-possible-stolen-value-houses/'},
    ]
  },
  "Coin Change":{
    javaYT:[
      {label:'Aditya Verma DP (Java)',url:'https://www.youtube.com/watch?v=opnGjKBmoro'},
      {label:'Tushar Roy (Java)',url:'https://www.youtube.com/watch?v=H9bfqozjoqs'},
    ],
    pythonYT:[
      {label:'NeetCode (Python)',url:'https://www.youtube.com/watch?v=H9bfqozjoqs'},
      {label:'Back To Back SWE (Python)',url:'https://www.youtube.com/watch?v=1R0_7HqNaW0'},
    ],
    solutions:[
      {label:'LeetCode',url:'https://leetcode.com/problems/coin-change/solutions/'},
      {label:'GeeksForGeeks',url:'https://www.geeksforgeeks.org/coin-change-dp-7/'},
    ]
  },
  "3Sum":{
    javaYT:[
      {label:'Kevin Naughton Jr (Java)',url:'https://www.youtube.com/watch?v=jFq4zgEyvdA'},
      {label:'Back To Back SWE (Java)',url:'https://www.youtube.com/watch?v=jzZsG8n2R9A'},
    ],
    pythonYT:[
      {label:'NeetCode (Python)',url:'https://www.youtube.com/watch?v=jzZsG8n2R9A'},
      {label:'Tech With Tim (Python)',url:'https://www.youtube.com/watch?v=woYB_pFb71E'},
    ],
    solutions:[
      {label:'LeetCode',url:'https://leetcode.com/problems/3sum/solutions/'},
      {label:'GeeksForGeeks',url:'https://www.geeksforgeeks.org/find-a-triplet-that-sum-to-a-given-value/'},
    ]
  },
  "Combination Sum":{
    javaYT:[
      {label:'Back To Back SWE (Java)',url:'https://www.youtube.com/watch?v=78t_yHuGg-0'},
      {label:'Kevin Naughton Jr (Java)',url:'https://www.youtube.com/watch?v=GBKI9VSKdGg'},
    ],
    pythonYT:[
      {label:'NeetCode (Python)',url:'https://www.youtube.com/watch?v=GBKI9VSKdGg'},
    ],
    solutions:[
      {label:'LeetCode',url:'https://leetcode.com/problems/combination-sum/solutions/'},
      {label:'GeeksForGeeks',url:'https://www.geeksforgeeks.org/combinational-sum/'},
    ]
  },
  "N-Queens":{
    javaYT:[
      {label:'Tushar Roy (Java)',url:'https://www.youtube.com/watch?v=xFv_Hl4B83A'},
      {label:'Kevin Naughton Jr (Java)',url:'https://www.youtube.com/watch?v=Ph95IHmRp5M'},
    ],
    pythonYT:[
      {label:'NeetCode (Python)',url:'https://www.youtube.com/watch?v=Ph95IHmRp5M'},
    ],
    solutions:[
      {label:'LeetCode',url:'https://leetcode.com/problems/n-queens/solutions/'},
      {label:'GeeksForGeeks',url:'https://www.geeksforgeeks.org/n-queen-problem-backtracking-3/'},
    ]
  },
  "Find Median from Data Stream":{
    javaYT:[
      {label:'Kevin Naughton Jr (Java)',url:'https://www.youtube.com/watch?v=itmhHWaHupI'},
    ],
    pythonYT:[
      {label:'NeetCode (Python)',url:'https://www.youtube.com/watch?v=itmhHWaHupI'},
    ],
    solutions:[
      {label:'LeetCode',url:'https://leetcode.com/problems/find-median-from-data-stream/solutions/'},
      {label:'GeeksForGeeks',url:'https://www.geeksforgeeks.org/median-of-stream-of-integers-running-integers/'},
    ]
  },
  "Edit Distance":{
    javaYT:[
      {label:'Tushar Roy (Java)',url:'https://www.youtube.com/watch?v=We3lLo-UHFQ'},
      {label:'Back To Back SWE (Java)',url:'https://www.youtube.com/watch?v=XYi2-LPrwm4'},
    ],
    pythonYT:[
      {label:'NeetCode (Python)',url:'https://www.youtube.com/watch?v=XYi2-LPrwm4'},
    ],
    solutions:[
      {label:'LeetCode',url:'https://leetcode.com/problems/edit-distance/solutions/'},
      {label:'GeeksForGeeks',url:'https://www.geeksforgeeks.org/edit-distance-dp-5/'},
    ]
  },
  "Subarray Sum Equals K":{
    javaYT:[
      {label:'Striver (Java)',url:'https://www.youtube.com/watch?v=ufXxc8Vty9A'},
      {label:'Back To Back SWE (Java)',url:'https://www.youtube.com/watch?v=fFVZt-6sgyo'},
    ],
    pythonYT:[
      {label:'NeetCode (Python)',url:'https://www.youtube.com/watch?v=fFVZt-6sgyo'},
    ],
    solutions:[
      {label:'LeetCode',url:'https://leetcode.com/problems/subarray-sum-equals-k/solutions/'},
      {label:'GeeksForGeeks',url:'https://www.geeksforgeeks.org/number-subarrays-sum-exactly-equal-k/'},
    ]
  },
  "Single Number":{
    javaYT:[
      {label:'Kevin Naughton Jr (Java)',url:'https://www.youtube.com/watch?v=qMPX1AOa83k'},
    ],
    pythonYT:[
      {label:'NeetCode (Python)',url:'https://www.youtube.com/watch?v=qMPX1AOa83k'},
    ],
    solutions:[
      {label:'LeetCode',url:'https://leetcode.com/problems/single-number/solutions/'},
      {label:'GeeksForGeeks',url:'https://www.geeksforgeeks.org/find-element-appears-array-every-element-appears-twice/'},
    ]
  },
  "Next Greater Element I":{
    javaYT:[
      {label:'Kevin Naughton Jr (Java)',url:'https://www.youtube.com/watch?v=68a1Dc_qVq4'},
    ],
    pythonYT:[
      {label:'NeetCode (Python)',url:'https://www.youtube.com/watch?v=68a1Dc_qVq4'},
    ],
    solutions:[
      {label:'LeetCode',url:'https://leetcode.com/problems/next-greater-element-i/solutions/'},
      {label:'GeeksForGeeks',url:'https://www.geeksforgeeks.org/next-greater-element/'},
    ]
  },
  "Largest Rectangle in Histogram":{
    javaYT:[
      {label:'Tushar Roy (Java)',url:'https://www.youtube.com/watch?v=ZmnqCZp9bBs'},
      {label:'Back To Back SWE (Java)',url:'https://www.youtube.com/watch?v=zx5Sw9130L0'},
    ],
    pythonYT:[
      {label:'NeetCode (Python)',url:'https://www.youtube.com/watch?v=zx5Sw9130L0'},
    ],
    solutions:[
      {label:'LeetCode',url:'https://leetcode.com/problems/largest-rectangle-in-histogram/solutions/'},
      {label:'GeeksForGeeks',url:'https://www.geeksforgeeks.org/largest-rectangle-under-histogram/'},
    ]
  },
  "Network Delay Time":{
    javaYT:[
      {label:'Kevin Naughton Jr (Java)',url:'https://www.youtube.com/watch?v=EaphyqKU4PQ'},
    ],
    pythonYT:[
      {label:'NeetCode (Python)',url:'https://www.youtube.com/watch?v=EaphyqKU4PQ'},
    ],
    solutions:[
      {label:'LeetCode',url:'https://leetcode.com/problems/network-delay-time/solutions/'},
      {label:'GeeksForGeeks',url:'https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/'},
    ]
  },
  "Min Cost to Connect All Points":{
    javaYT:[
      {label:'Kevin Naughton Jr (Java)',url:'https://www.youtube.com/watch?v=f7JOBJIC-NA'},
    ],
    pythonYT:[
      {label:'NeetCode (Python)',url:'https://www.youtube.com/watch?v=f7JOBJIC-NA'},
    ],
    solutions:[
      {label:'LeetCode',url:'https://leetcode.com/problems/min-cost-to-connect-all-points/solutions/'},
      {label:'GeeksForGeeks',url:'https://www.geeksforgeeks.org/prims-minimum-spanning-tree-mst-greedy-algo-5/'},
    ]
  },
};


function getDSAResourceHTML(title){
  const r=DSA_RESOURCES[title];
  if(!r)return '';
  // Java YT links
  const jYT=(r.javaYT||[]).map(s=>`<a href="${s.url}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:5px;padding:6px 12px;background:rgba(255,107,53,.12);border:1px solid rgba(255,107,53,.35);border-radius:5px;text-decoration:none;font-family:'JetBrains Mono',monospace;font-size:.6rem;color:#ff6b35;transition:all .2s;white-space:nowrap;" onmouseover="this.style.background='rgba(255,107,53,.25)'" onmouseout="this.style.background='rgba(255,107,53,.12)'">☕▶ ${s.label}</a>`).join('');
  // Python YT links
  const pYT=(r.pythonYT||[]).map(s=>`<a href="${s.url}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:5px;padding:6px 12px;background:rgba(55,118,171,.14);border:1px solid rgba(100,149,237,.35);border-radius:5px;text-decoration:none;font-family:'JetBrains Mono',monospace;font-size:.6rem;color:#87ceeb;transition:all .2s;white-space:nowrap;" onmouseover="this.style.background='rgba(55,118,171,.28)'" onmouseout="this.style.background='rgba(55,118,171,.14)'">🐍▶ ${s.label}</a>`).join('');
  // Written: LeetCode + GFG
  const solHTML=(r.solutions||[]).map(s=>`<a href="${s.url}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:5px;padding:6px 12px;background:rgba(0,255,204,.07);border:1px solid rgba(0,255,204,.25);border-radius:5px;text-decoration:none;font-family:'JetBrains Mono',monospace;font-size:.6rem;color:var(--neon1);transition:all .2s;white-space:nowrap;" onmouseover="this.style.background='rgba(0,255,204,.17)'" onmouseout="this.style.background='rgba(0,255,204,.07)'">🔗 ${s.label}</a>`).join('');
  return `<div style="margin-top:12px;border:1px solid rgba(255,255,255,.07);border-radius:10px;overflow:hidden;">
    <div style="padding:10px 14px;background:rgba(255,107,53,.06);border-bottom:1px solid rgba(255,255,255,.06);">
      <div style="font-family:'JetBrains Mono',monospace;font-size:.52rem;color:#ff6b35;letter-spacing:.13em;margin-bottom:7px;">☕ JAVA — VIDEO SOLUTIONS</div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;">${jYT||'<span style="font-size:.6rem;color:var(--muted);">—</span>'}</div>
    </div>
    <div style="padding:10px 14px;background:rgba(55,118,171,.06);border-bottom:1px solid rgba(255,255,255,.06);">
      <div style="font-family:'JetBrains Mono',monospace;font-size:.52rem;color:#87ceeb;letter-spacing:.13em;margin-bottom:7px;">🐍 PYTHON — VIDEO SOLUTIONS</div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;">${pYT||'<span style="font-size:.6rem;color:var(--muted);">—</span>'}</div>
    </div>
    <div style="padding:10px 14px;background:rgba(0,255,204,.04);">
      <div style="font-family:'JetBrains Mono',monospace;font-size:.52rem;color:var(--neon1);letter-spacing:.13em;margin-bottom:7px;">🔗 WRITTEN SOLUTIONS — LeetCode &amp; GeeksForGeeks</div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;">${solHTML||'<span style="font-size:.6rem;color:var(--muted);">—</span>'}</div>
    </div>
  </div>`;
}
function swSol(uid,lang){
  const jc=document.getElementById(uid+'_jc'),pc=document.getElementById(uid+'_pc');
  const jb=document.getElementById(uid+'_j'),pb=document.getElementById(uid+'_p');
  if(!jc||!pc)return;
  if(lang==='j'){jc.style.display='block';pc.style.display='none';jb.style.background='rgba(255,107,53,.2)';jb.style.color='#ff6b35';pb.style.background='transparent';pb.style.color='var(--muted)';}
  else{jc.style.display='none';pc.style.display='block';pb.style.background='rgba(55,118,171,.2)';pb.style.color='#87ceeb';jb.style.background='transparent';jb.style.color='var(--muted)';}
}


// ═══════════════════════════════════════════════════════════
// 📝 DSA_SOLUTIONS — Java + Python code per DSA problem
// Key = exact problem title:
// "Problem Title":{
//   java: `// Java code here`,
//   python: `# Python code here`
// },
// ═══════════════════════════════════════════════════════════
// ══ DSA SOLUTIONS (Java + Python) ══
const DSA_SOLUTIONS = {
  "Two Sum": {
    java: `// O(n) time, O(n) space – HashMap approach
public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        if (map.containsKey(complement))
            return new int[]{map.get(complement), i};
        map.put(nums[i], i);
    }
    return new int[]{};
}`,
    python: `# O(n) time, O(n) space – HashMap approach
def twoSum(nums: list[int], target: int) -> list[int]:
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []`
  },
  "Best Time to Buy and Sell Stock": {
    java: `// O(n) time, O(1) space – One pass greedy
public int maxProfit(int[] prices) {
    int minPrice = Integer.MAX_VALUE, maxProfit = 0;
    for (int price : prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }
    return maxProfit;
}`,
    python: `# O(n) time, O(1) space – One pass greedy
def maxProfit(prices: list[int]) -> int:
    min_price, max_profit = float('inf'), 0
    for price in prices:
        min_price = min(min_price, price)
        max_profit = max(max_profit, price - min_price)
    return max_profit`
  },
  "Maximum Subarray (Kadane's)": {
    java: `// O(n) time, O(1) space – Kadane's Algorithm
public int maxSubArray(int[] nums) {
    int maxSum = nums[0], curSum = nums[0];
    for (int i = 1; i < nums.length; i++) {
        curSum = Math.max(nums[i], curSum + nums[i]);
        maxSum = Math.max(maxSum, curSum);
    }
    return maxSum;
}`,
    python: `# O(n) time, O(1) space – Kadane's Algorithm
def maxSubArray(nums: list[int]) -> int:
    max_sum = cur_sum = nums[0]
    for num in nums[1:]:
        cur_sum = max(num, cur_sum + num)
        max_sum = max(max_sum, cur_sum)
    return max_sum`
  },
  "Merge Intervals": {
    java: `// O(n log n) time – Sort then merge
public int[][] merge(int[][] intervals) {
    Arrays.sort(intervals, (a, b) -> a[0] - b[0]);
    List<int[]> res = new ArrayList<>();
    res.add(intervals[0]);
    for (int i = 1; i < intervals.length; i++) {
        int[] last = res.get(res.size() - 1);
        if (intervals[i][0] <= last[1])
            last[1] = Math.max(last[1], intervals[i][1]);
        else
            res.add(intervals[i]);
    }
    return res.toArray(new int[0][]);
}`,
    python: `# O(n log n) time – Sort then merge
def merge(intervals: list[list[int]]) -> list[list[int]]:
    intervals.sort(key=lambda x: x[0])
    merged = [intervals[0]]
    for start, end in intervals[1:]:
        if start <= merged[-1][1]:
            merged[-1][1] = max(merged[-1][1], end)
        else:
            merged.append([start, end])
    return merged`
  },
  "Trapping Rain Water": {
    java: `// O(n) time, O(1) space – Two pointers
public int trap(int[] height) {
    int l = 0, r = height.length - 1, lMax = 0, rMax = 0, water = 0;
    while (l < r) {
        if (height[l] <= height[r]) {
            lMax = Math.max(lMax, height[l]);
            water += lMax - height[l++];
        } else {
            rMax = Math.max(rMax, height[r]);
            water += rMax - height[r--];
        }
    }
    return water;
}`,
    python: `# O(n) time, O(1) space – Two pointers
def trap(height: list[int]) -> int:
    l, r = 0, len(height) - 1
    l_max = r_max = water = 0
    while l < r:
        if height[l] <= height[r]:
            l_max = max(l_max, height[l])
            water += l_max - height[l]; l += 1
        else:
            r_max = max(r_max, height[r])
            water += r_max - height[r]; r -= 1
    return water`
  },
  "Valid Anagram": {
    java: `// O(n) time – Frequency map
public boolean isAnagram(String s, String t) {
    if (s.length() != t.length()) return false;
    int[] count = new int[26];
    for (char c : s.toCharArray()) count[c - 'a']++;
    for (char c : t.toCharArray()) count[c - 'a']--;
    for (int n : count) if (n != 0) return false;
    return true;
}`,
    python: `# O(n) time – Counter comparison
from collections import Counter
def isAnagram(s: str, t: str) -> bool:
    return Counter(s) == Counter(t)
# Alternative: return sorted(s) == sorted(t)  [O(n log n)]`
  },
  "Valid Palindrome": {
    java: `// O(n) time, O(1) space – Two pointers
public boolean isPalindrome(String s) {
    int l = 0, r = s.length() - 1;
    while (l < r) {
        while (l < r && !Character.isLetterOrDigit(s.charAt(l))) l++;
        while (l < r && !Character.isLetterOrDigit(s.charAt(r))) r--;
        if (Character.toLowerCase(s.charAt(l)) != Character.toLowerCase(s.charAt(r)))
            return false;
        l++; r--;
    }
    return true;
}`,
    python: `# O(n) time, O(1) space – Two pointers
def isPalindrome(s: str) -> bool:
    l, r = 0, len(s) - 1
    while l < r:
        while l < r and not s[l].isalnum(): l += 1
        while l < r and not s[r].isalnum(): r -= 1
        if s[l].lower() != s[r].lower(): return False
        l += 1; r -= 1
    return True`
  },
  "Longest Substring Without Repeating Characters": {
    java: `// O(n) time, O(1) space – Sliding window + HashMap
public int lengthOfLongestSubstring(String s) {
    Map<Character, Integer> map = new HashMap<>();
    int res = 0, l = 0;
    for (int r = 0; r < s.length(); r++) {
        char c = s.charAt(r);
        if (map.containsKey(c)) l = Math.max(l, map.get(c) + 1);
        map.put(c, r);
        res = Math.max(res, r - l + 1);
    }
    return res;
}`,
    python: `# O(n) time – Sliding window + HashMap
def lengthOfLongestSubstring(s: str) -> int:
    char_idx = {}
    res = l = 0
    for r, c in enumerate(s):
        if c in char_idx and char_idx[c] >= l:
            l = char_idx[c] + 1
        char_idx[c] = r
        res = max(res, r - l + 1)
    return res`
  },
  "Reverse Linked List": {
    java: `// O(n) time, O(1) space – Iterative
public ListNode reverseList(ListNode head) {
    ListNode prev = null, curr = head;
    while (curr != null) {
        ListNode next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}
// Recursive: O(n) time, O(n) space
public ListNode reverseListRec(ListNode head) {
    if (head == null || head.next == null) return head;
    ListNode newHead = reverseListRec(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
}`,
    python: `# O(n) time, O(1) space – Iterative
def reverseList(head):
    prev, curr = None, head
    while curr:
        curr.next, prev, curr = prev, curr, curr.next
    return prev

# Recursive: O(n) time, O(n) space
def reverseListRec(head):
    if not head or not head.next: return head
    new_head = reverseListRec(head.next)
    head.next.next = head
    head.next = None
    return new_head`
  },
  "Valid Parentheses": {
    java: `// O(n) time, O(n) space – Stack
public boolean isValid(String s) {
    Deque<Character> stack = new ArrayDeque<>();
    for (char c : s.toCharArray()) {
        if (c == '(' || c == '[' || c == '{') { stack.push(c); continue; }
        if (stack.isEmpty()) return false;
        char top = stack.pop();
        if (c == ')' && top != '(') return false;
        if (c == ']' && top != '[') return false;
        if (c == '}' && top != '{') return false;
    }
    return stack.isEmpty();
}`,
    python: `# O(n) time, O(n) space – Stack
def isValid(s: str) -> bool:
    stack = []
    pairs = {')': '(', ']': '[', '}': '{'}
    for c in s:
        if c in '([{':
            stack.append(c)
        elif not stack or stack[-1] != pairs[c]:
            return False
        else:
            stack.pop()
    return not stack`
  },
  "Binary Search": {
    java: `// O(log n) time, O(1) space – Classic binary search
public int search(int[] nums, int target) {
    int lo = 0, hi = nums.length - 1;
    while (lo <= hi) {
        int mid = lo + (hi - lo) / 2;
        if (nums[mid] == target) return mid;
        if (nums[mid] < target) lo = mid + 1;
        else hi = mid - 1;
    }
    return -1;
}`,
    python: `# O(log n) time, O(1) space – Classic binary search
def search(nums: list[int], target: int) -> int:
    lo, hi = 0, len(nums) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if nums[mid] == target: return mid
        elif nums[mid] < target: lo = mid + 1
        else: hi = mid - 1
    return -1`
  },
  "Maximum Depth of Binary Tree": {
    java: `// O(n) time – DFS recursive
public int maxDepth(TreeNode root) {
    if (root == null) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
// BFS iterative
public int maxDepthBFS(TreeNode root) {
    if (root == null) return 0;
    Queue<TreeNode> q = new LinkedList<>();
    q.offer(root); int depth = 0;
    while (!q.isEmpty()) {
        depth++;
        for (int i = q.size(); i > 0; i--) {
            TreeNode n = q.poll();
            if (n.left != null) q.offer(n.left);
            if (n.right != null) q.offer(n.right);
        }
    }
    return depth;
}`,
    python: `# O(n) time – DFS recursive
def maxDepth(root) -> int:
    if not root: return 0
    return 1 + max(maxDepth(root.left), maxDepth(root.right))

# BFS iterative
from collections import deque
def maxDepthBFS(root) -> int:
    if not root: return 0
    q, depth = deque([root]), 0
    while q:
        depth += 1
        for _ in range(len(q)):
            node = q.popleft()
            if node.left: q.append(node.left)
            if node.right: q.append(node.right)
    return depth`
  },
  "Number of Islands": {
    java: `// O(m*n) time – DFS
public int numIslands(char[][] grid) {
    int count = 0;
    for (int r = 0; r < grid.length; r++)
        for (int c = 0; c < grid[0].length; c++)
            if (grid[r][c] == '1') { dfs(grid, r, c); count++; }
    return count;
}
void dfs(char[][] g, int r, int c) {
    if (r < 0 || r >= g.length || c < 0 || c >= g[0].length || g[r][c] != '1') return;
    g[r][c] = '0';
    dfs(g,r+1,c); dfs(g,r-1,c); dfs(g,r,c+1); dfs(g,r,c-1);
}`,
    python: `# O(m*n) time – DFS
def numIslands(grid: list[list[str]]) -> int:
    def dfs(r, c):
        if not (0 <= r < len(grid) and 0 <= c < len(grid[0])): return
        if grid[r][c] != '1': return
        grid[r][c] = '0'
        for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)]: dfs(r+dr, c+dc)
    count = 0
    for r in range(len(grid)):
        for c in range(len(grid[0])):
            if grid[r][c] == '1': dfs(r, c); count += 1
    return count`
  },
  "Climbing Stairs": {
    java: `// O(n) time, O(1) space – DP Fibonacci pattern
public int climbStairs(int n) {
    if (n <= 2) return n;
    int a = 1, b = 2;
    for (int i = 3; i <= n; i++) {
        int c = a + b; a = b; b = c;
    }
    return b;
}`,
    python: `# O(n) time, O(1) space – DP Fibonacci pattern
def climbStairs(n: int) -> int:
    a, b = 1, 2
    for _ in range(n - 2):
        a, b = b, a + b
    return b if n >= 2 else n`
  },
  "Coin Change": {
    java: `// O(amount * coins) time – Bottom-up DP
public int coinChange(int[] coins, int amount) {
    int[] dp = new int[amount + 1];
    Arrays.fill(dp, amount + 1);
    dp[0] = 0;
    for (int i = 1; i <= amount; i++)
        for (int c : coins)
            if (c <= i) dp[i] = Math.min(dp[i], dp[i - c] + 1);
    return dp[amount] > amount ? -1 : dp[amount];
}`,
    python: `# O(amount * coins) time – Bottom-up DP
def coinChange(coins: list[int], amount: int) -> int:
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    for i in range(1, amount + 1):
        for c in coins:
            if c <= i:
                dp[i] = min(dp[i], dp[i - c] + 1)
    return dp[amount] if dp[amount] != float('inf') else -1`
  },
  "3Sum": {
    java: `// O(n²) time, O(n) space – Sort + Two Pointers
public List<List<Integer>> threeSum(int[] nums) {
    Arrays.sort(nums);
    List<List<Integer>> res = new ArrayList<>();
    for (int i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] == nums[i-1]) continue;
        int l = i+1, r = nums.length-1;
        while (l < r) {
            int sum = nums[i] + nums[l] + nums[r];
            if (sum == 0) {
                res.add(Arrays.asList(nums[i],nums[l],nums[r]));
                while (l<r && nums[l]==nums[l+1]) l++;
                while (l<r && nums[r]==nums[r-1]) r--;
                l++; r--;
            } else if (sum < 0) l++;
            else r--;
        }
    }
    return res;
}`,
    python: `# O(n²) time – Sort + Two Pointers
def threeSum(nums: list[int]) -> list[list[int]]:
    nums.sort(); res = []
    for i in range(len(nums) - 2):
        if i > 0 and nums[i] == nums[i-1]: continue
        l, r = i+1, len(nums)-1
        while l < r:
            s = nums[i] + nums[l] + nums[r]
            if s == 0:
                res.append([nums[i], nums[l], nums[r]])
                while l < r and nums[l] == nums[l+1]: l += 1
                while l < r and nums[r] == nums[r-1]: r -= 1
                l += 1; r -= 1
            elif s < 0: l += 1
            else: r -= 1
    return res`
  },
  "Single Number": {
    java: `// O(n) time, O(1) space – XOR trick
public int singleNumber(int[] nums) {
    int result = 0;
    for (int n : nums) result ^= n;
    return result;
    // Explanation: a^a=0, 0^a=a; pairs cancel, leaving unique
}`,
    python: `# O(n) time, O(1) space – XOR trick
from functools import reduce
from operator import xor
def singleNumber(nums: list[int]) -> int:
    return reduce(xor, nums)
# Or: result = 0; for n in nums: result ^= n; return result`
  },
  "Meeting Rooms": {
    java: `// O(n log n) time – Sort by start time
public boolean canAttendMeetings(int[][] intervals) {
    Arrays.sort(intervals, (a, b) -> a[0] - b[0]);
    for (int i = 1; i < intervals.length; i++)
        if (intervals[i][0] < intervals[i-1][1]) return false;
    return true;
}`,
    python: `# O(n log n) time – Sort by start time
def canAttendMeetings(intervals: list[list[int]]) -> bool:
    intervals.sort(key=lambda x: x[0])
    for i in range(1, len(intervals)):
        if intervals[i][0] < intervals[i-1][1]:
            return False
    return True`
  },
  "Combination Sum": {
    java: `// O(2^(t/m)) time – Backtracking
public List<List<Integer>> combinationSum(int[] candidates, int target) {
    List<List<Integer>> res = new ArrayList<>();
    Arrays.sort(candidates);
    backtrack(candidates, target, 0, new ArrayList<>(), res);
    return res;
}
void backtrack(int[] c, int remain, int start, List<Integer> curr, List<List<Integer>> res) {
    if (remain == 0) { res.add(new ArrayList<>(curr)); return; }
    for (int i = start; i < c.length && c[i] <= remain; i++) {
        curr.add(c[i]);
        backtrack(c, remain - c[i], i, curr, res);
        curr.remove(curr.size()-1);
    }
}`,
    python: `# O(2^(t/m)) time – Backtracking
def combinationSum(candidates: list[int], target: int) -> list[list[int]]:
    res = []
    def backtrack(start, curr, remain):
        if remain == 0: res.append(curr[:]); return
        for i in range(start, len(candidates)):
            if candidates[i] > remain: break
            curr.append(candidates[i])
            backtrack(i, curr, remain - candidates[i])
            curr.pop()
    candidates.sort()
    backtrack(0, [], target)
    return res`
  },
  "N-Queens": {
    java: `// Backtracking – O(n!) time
public List<List<String>> solveNQueens(int n) {
    List<List<String>> res = new ArrayList<>();
    Set<Integer> cols = new HashSet<>(), d1 = new HashSet<>(), d2 = new HashSet<>();
    char[][] board = new char[n][n];
    for (char[] row : board) Arrays.fill(row, '.');
    backtrack(board, 0, cols, d1, d2, res, n);
    return res;
}
void backtrack(char[][] b, int row, Set<Integer> cols, Set<Integer> d1, Set<Integer> d2, List<List<String>> res, int n) {
    if (row == n) { List<String> r = new ArrayList<>(); for (char[] row2 : b) r.add(new String(row2)); res.add(r); return; }
    for (int col = 0; col < n; col++) {
        if (cols.contains(col) || d1.contains(row-col) || d2.contains(row+col)) continue;
        b[row][col] = 'Q'; cols.add(col); d1.add(row-col); d2.add(row+col);
        backtrack(b, row+1, cols, d1, d2, res, n);
        b[row][col] = '.'; cols.remove(col); d1.remove(row-col); d2.remove(row+col);
    }
}`,
    python: `# Backtracking – O(n!) time
def solveNQueens(n: int) -> list[list[str]]:
    res, cols, d1, d2 = [], set(), set(), set()
    board = [['.']*n for _ in range(n)]
    def backtrack(row):
        if row == n:
            res.append([''.join(r) for r in board]); return
        for col in range(n):
            if col in cols or (row-col) in d1 or (row+col) in d2: continue
            board[row][col] = 'Q'; cols.add(col); d1.add(row-col); d2.add(row+col)
            backtrack(row+1)
            board[row][col] = '.'; cols.remove(col); d1.remove(row-col); d2.remove(row+col)
    backtrack(0); return res`
  }
};

function renderDSAList(){
  const t=DSA_DATA[dsaCurTopic];
  const filtered=dsaCurDiff==='All'?t.questions:t.questions.filter(q=>q.lv===dsaCurDiff);
  const lvClass={Easy:'easy-card',Medium:'medium-card',Hard:'hard-card'};
  const lvIcon={Easy:'🟢',Medium:'🟡',Hard:'🔴'};
  document.getElementById('dsa-q-list').innerHTML=filtered.map((q,qi)=>`
    <div class="dsa-q-item ${lvClass[q.lv]}" id="dqi-${qi}">
      <div class="dsa-q-row" onclick="toggleDSAItem(${qi})">
        <span class="dsa-q-num">${String(qi+1).padStart(2,'0')}</span>
        <span style="font-size:.85rem;flex-shrink:0">${lvIcon[q.lv]}</span>
        <span class="dsa-q-title">${q.title}</span>
        <span class="dsa-q-mnc">${q.mnc}</span>
        <span class="dsa-q-arrow">▼</span>
      </div>
      <div class="dsa-q-desc">
        <div class="dsa-q-desc-inner">
          <div class="dsa-q-desc-text">${q.desc}</div>
          ${q.hint?`<div class="dsa-q-tip">💡 <strong>Hint:</strong> ${q.hint}</div>`:''}
          ${getDSAResourceHTML(q.title)}
        </div>
      </div>
    </div>
  `).join('');
}
function toggleDSAItem(qi){
  const el=document.getElementById('dqi-'+qi);
  el.classList.toggle('open');
  sfx('click');
}


// ══════════════════════════════════════════════════
//  DSA FILTER SECTIONS (Easy / Medium / Hard Arenas)
// ══════════════════════════════════════════════════
// Extra questions bank (3rd question per topic per level)
const DSA_EXTRA={
  Arrays:{
    Easy:{title:"Contains Duplicate",mnc:"Amazon · Apple · Google",desc:"Given an integer array <code>nums</code>, return <code>true</code> if any value appears <strong>at least twice</strong>. Use a HashSet for <strong>O(n)</strong> solution. Follow-up: what if you can use only O(1) extra space?"},
    Medium:{title:"Product of Array Except Self",mnc:"Facebook · Amazon · Microsoft · LinkedIn",desc:"Return an array where each element is the product of all other elements, <strong>without division</strong>, in <strong>O(n)</strong> time and <strong>O(1)</strong> extra space (output array doesn't count). Use prefix and suffix product passes."},
    Hard:{title:"Sliding Window Maximum",mnc:"Google · Amazon · Citadel",desc:"Given an array and window size <code>k</code>, return the maximum of each sliding window. Brute force is O(nk). Achieve <strong>O(n)</strong> using a monotonic deque that stores indices. Explain why the deque front always holds the current window maximum."}
  },
  Strings:{
    Easy:{title:"Longest Common Prefix",mnc:"Amazon · Google · Adobe",desc:"Find the longest common prefix string among an array of strings. If no prefix exists, return <code>\"\"</code>. You can sort first, then only compare the first and last string. Why does this work? Expected: <strong>O(n·m)</strong> where m is the prefix length."},
    Medium:{title:"Decode Ways",mnc:"Facebook · Amazon · Microsoft",desc:"A digit string can be decoded as letters (1='A', 26='Z'). Count the number of ways to decode the string. Use <strong>dynamic programming</strong>. Key edge cases: leading zeros, '0' alone, '06', numbers >26. Expected: <strong>O(n) time, O(1) space</strong>."},
    Hard:{title:"Wildcard Matching",mnc:"Google · Facebook · Microsoft",desc:"Implement wildcard pattern matching where <code>'?'</code> matches any single character and <code>'*'</code> matches any sequence (including empty). Solve with <strong>2D DP</strong> (O(m·n) time/space) and then optimize to <strong>O(m) space</strong>. Explain the two pointers greedy approach."}
  },
  "Linked List":{
    Easy:{title:"Middle of Linked List",mnc:"Amazon · Google · Facebook",desc:"Find the middle node of a singly linked list. If two middle nodes exist, return the second. Use <strong>slow/fast pointers</strong> — when fast reaches end, slow is at middle. Expected: <strong>O(n) time, O(1) space</strong>. One-pass solution only."},
    Medium:{title:"Add Two Numbers",mnc:"Amazon · Microsoft · Facebook · Adobe",desc:"Two non-empty linked lists represent non-negative integers in <strong>reverse order</strong>. Add them and return the result as a linked list in reverse. Handle carry carefully. What is the time and space complexity? What if the numbers were stored in forward order?"},
    Hard:{title:"Reverse Nodes in k-Group",mnc:"Google · Facebook · Microsoft · Uber",desc:"Reverse every <code>k</code> nodes of a linked list. If remaining nodes are fewer than <code>k</code>, leave them as-is. Implement <strong>in-place</strong> with <strong>O(1)</strong> extra space. Explain both iterative and recursive approaches and their trade-offs."}
  },
  "Stack & Queue":{
    Easy:{title:"Implement Queue using Stacks",mnc:"Amazon · Microsoft · Apple",desc:"Implement FIFO queue using only two stacks. Support <code>push</code>, <code>pop</code>, <code>peek</code>, <code>empty</code>. Amortized <strong>O(1)</strong> for all operations. The lazy-transfer approach only moves elements when pop stack is empty. Explain the amortized analysis."},
    Medium:{title:"Daily Temperatures",mnc:"Google · Amazon · LinkedIn",desc:"Given array of temperatures, return an array where each element is the number of days you must wait for a warmer temperature. Use a <strong>monotonic decreasing stack</strong> storing indices. Each element is pushed/popped once giving <strong>O(n)</strong>. Walk through an example."},
    Hard:{title:"Largest Rectangle in Histogram",mnc:"Google · Amazon · Microsoft · Apple",desc:"Given histogram bar heights, find the largest rectangle. Use a <strong>monotonic increasing stack</strong>. When a shorter bar is encountered, calculate area with previous bars as height. Append 0 to handle final cleanup. Expected: <strong>O(n) time, O(n) space</strong>."}
  },
  "Binary Search":{
    Easy:{title:"Sqrt(x)",mnc:"Apple · Google · Amazon",desc:"Compute the integer square root of <code>x</code> (floor of actual sqrt) without using <code>Math.sqrt</code>. Binary search in range <code>[0, x/2+1]</code>. Careful with integer overflow when squaring mid. Expected: <strong>O(log x)</strong>. What is Newton's method approach?"},
    Medium:{title:"Find Peak Element",mnc:"Google · Facebook · Amazon",desc:"A peak element is strictly greater than its neighbors. Find any peak in <strong>O(log n)</strong>. Binary search: if <code>nums[mid] < nums[mid+1]</code>, peak must be to the right (and vice versa). Why is this guaranteed? What if multiple peaks exist?"},
    Hard:{title:"Median of Two Sorted Arrays",mnc:"Google · Amazon · Microsoft · Goldman Sachs",desc:"Find the median of two sorted arrays in <strong>O(log(min(m,n)))</strong> time. Binary search on the smaller array's partition point. Ensure left halves have (m+n)/2 total elements. Handle odd/even total sizes. This is a classic hard problem — explain the partition logic clearly."}
  },
  Trees:{
    Easy:{title:"Symmetric Tree",mnc:"Amazon · Microsoft · Bloomberg",desc:"Check if a binary tree is a mirror of itself. Use <strong>recursive</strong> approach with helper <code>isMirror(left, right)</code> — they are mirrors if both null, same value, and their children are cross-mirrors. Also implement the <strong>iterative BFS queue</strong> approach."},
    Medium:{title:"Path Sum II",mnc:"Amazon · Microsoft · Facebook",desc:"Find all root-to-leaf paths where the sum of node values equals <code>targetSum</code>. Use <strong>DFS with backtracking</strong> — add node to path, recurse, then remove. At leaf, check if remaining sum is 0. Time: <strong>O(n²)</strong> in worst case due to copying paths."},
    Hard:{title:"Binary Tree Maximum Path Sum",mnc:"Google · Amazon · Facebook · Microsoft",desc:"A path in a binary tree can start and end at any node. Find the maximum path sum. Each node tracks the max <strong>single-path contribution</strong> upward, while globally updating the answer as <code>left + node + right</code>. Expected: <strong>O(n)</strong>. Handle negative values."}
  },
  Graphs:{
    Easy:{title:"Find if Path Exists in Graph",mnc:"Google · Amazon · Facebook",desc:"Given an undirected graph, determine if a path exists from <code>source</code> to <code>destination</code>. Use <strong>BFS or DFS</strong>. Union-Find also works in <strong>O(α(n))</strong>. What are the trade-offs between the three approaches? Which is most efficient for dense graphs?"},
    Medium:{title:"Course Schedule",mnc:"Google · Facebook · Amazon · Airbnb",desc:"Given course prerequisites as directed edges, determine if you can finish all courses (i.e., no cycle). Build adjacency list and run <strong>DFS cycle detection</strong> with three states: unvisited, visiting, visited. Alternatively use <strong>Kahn's topological sort</strong> with in-degree counting."},
    Hard:{title:"Word Ladder",mnc:"Amazon · Facebook · Microsoft · LinkedIn",desc:"Find shortest transformation from <code>beginWord</code> to <code>endWord</code>, changing one letter at a time (each intermediate must be in <code>wordList</code>). Use <strong>BFS</strong> — each level is one transformation. Optimization: <strong>bidirectional BFS</strong> reduces search space from O(b^d) to O(2·b^(d/2))."}
  },
  "Dynamic Programming":{
    Easy:{title:"Climbing Stairs",mnc:"Amazon · Google · Uber",desc:"Climbing <code>n</code> stairs with 1 or 2 steps at a time — how many distinct ways? This is exactly <strong>Fibonacci</strong>. f(n) = f(n-1) + f(n-2), base cases f(1)=1, f(2)=2. Optimize to <strong>O(1) space</strong> with two variables. This introduces the DP pattern for all stair-type problems."},
    Medium:{title:"Coin Change",mnc:"Google · Amazon · Facebook · Uber",desc:"Given coin denominations and an amount, find the <strong>minimum number of coins</strong> to make exact change. Use bottom-up DP: <code>dp[i] = min(dp[i], dp[i-coin]+1)</code> for all coins. Initialize <code>dp[0]=0</code>, others to <code>Infinity</code>. Expected: <strong>O(amount × coins)</strong>."},
    Hard:{title:"Edit Distance",mnc:"Google · Facebook · Amazon · Microsoft",desc:"Find minimum operations (insert, delete, replace) to transform <code>word1</code> to <code>word2</code>. Classic 2D DP: when characters match, <code>dp[i][j]=dp[i-1][j-1]</code>; otherwise, <code>1+min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])</code>. Optimize to <strong>O(min(m,n)) space</strong>."}
  },
  "Heap / Priority Queue":{
    Easy:{title:"Last Stone Weight",mnc:"Amazon · Google · Apple",desc:"Repeatedly smash the two heaviest stones. If equal, both are destroyed; otherwise, the smaller is removed and heavier gets the difference. Use a <strong>max-heap</strong>. Python: negate values in <code>heapq</code>. Return the last stone weight or 0. Expected: <strong>O(n log n)</strong>."},
    Medium:{title:"Task Scheduler",mnc:"Google · Facebook · Amazon",desc:"Given tasks and cooldown <code>n</code>, find minimum CPU intervals. Use a <strong>greedy + max-heap</strong>: always pick the most frequent available task. Alternatively: mathematical formula using idle slots. Follow-up: return the actual schedule, not just the count. Expected: <strong>O(n)</strong>."},
    Hard:{title:"Find Median from Data Stream",mnc:"Google · Amazon · Facebook · Apple",desc:"Design a data structure supporting <code>addNum</code> and <code>findMedian</code> efficiently. Use <strong>two heaps</strong>: max-heap for lower half, min-heap for upper half, balanced so sizes differ by at most 1. <code>addNum</code>: O(log n), <code>findMedian</code>: O(1). Handle even and odd total counts."}
  },
  Backtracking:{
    Easy:{title:"Letter Case Permutation",mnc:"Amazon · Google · Facebook",desc:"Given a string, generate all permutations by changing each letter to uppercase or lowercase. Use <strong>backtracking</strong> — at each character position, if it's a letter, branch into two recursive calls. Total: <strong>2^letters</strong> results. Expected space: <strong>O(n·2^n)</strong>."},
    Medium:{title:"Combination Sum",mnc:"Google · Amazon · Facebook · Microsoft",desc:"Given candidates (no duplicates) and a target, find all unique combinations summing to target. Elements can be reused. <strong>Backtrack</strong> with current sum tracking; if sum > target, prune. Pass index <code>i</code> (not i+1) to allow reuse. Sort first for efficient pruning."},
    Hard:{title:"N-Queens",mnc:"Google · Amazon · Microsoft",desc:"Place N queens on N×N board with no two queens attacking. Use backtracking with <strong>three sets</strong> for column, main diagonal, anti-diagonal attacks (all O(1) checks). Expected: <strong>O(n!)</strong> time. For N-Queens II (count only), the same approach works faster with early pruning."}
  },
  Tries:{
    Easy:{title:"Longest Word in Dictionary",mnc:"Amazon · Google · Apple",desc:"Given an array of strings, find the longest word that can be built character by character from other words in the array. Insert all words in a <strong>Trie</strong>, then BFS/DFS from root following only nodes with complete words. Lexicographically smallest on tie."},
    Medium:{title:"Word Search II",mnc:"Google · Amazon · Airbnb",desc:"Find all words from a dictionary in a 2D board by connecting adjacent cells (no reuse). Build a <strong>Trie</strong> of words, then DFS on the board. Prune: if current path isn't a Trie prefix, stop. Remove found words from Trie to avoid duplicates. Expected: <strong>O(M(4·3^(L-1)))</strong>."},
    Hard:{title:"Stream of Characters",mnc:"Google · Amazon",desc:"Design a data structure that streams characters one by one and checks if any suffix of the current stream matches a search word from a pre-built dictionary. Use a <strong>reversed Trie</strong> — insert words backwards. On each query, walk up to maxLen recent characters through the reversed Trie."}
  },
  "Union Find":{
    Easy:{title:"Number of Connected Components",mnc:"LinkedIn · Amazon · Google",desc:"Given <code>n</code> nodes and edges, count connected components using <strong>Union-Find</strong> with path compression and union by rank. Initialize components=n, decrement on each union. Alternatively use DFS/BFS. Expected: <strong>O(α(n))</strong> per operation (nearly O(1))."},
    Medium:{title:"Redundant Connection",mnc:"Amazon · Google · Microsoft",desc:"Given an undirected graph formed as a tree plus one extra edge, find that extra edge. Use <strong>Union-Find</strong>: process edges in order, the first edge where both nodes are already connected is the answer. Expected: <strong>O(n·α(n))</strong>. Explain path compression."},
    Hard:{title:"Accounts Merge",mnc:"Google · Facebook · Amazon",desc:"Merge accounts with shared emails. Use <strong>Union-Find or DFS</strong>. Map each email to an account id, union ids sharing an email, group emails by root id, sort each group, prepend name. Expected: <strong>O(nk log(nk))</strong> where k is max emails per account."}
  },
  Greedy:{
    Easy:{title:"Assign Cookies",mnc:"Amazon · Google",desc:"Assign cookies to satisfy children: each child needs <code>g[i]</code> minimum cookie size; cookie <code>j</code> has size <code>s[j]</code>. Maximize satisfied children. <strong>Greedy</strong>: sort both arrays, use two pointers — match the smallest sufficient cookie to each child. Expected: <strong>O(n log n)</strong>."},
    Medium:{title:"Jump Game",mnc:"Amazon · Google · Microsoft",desc:"Given an array where each element is max jump length, determine if you can reach the last index. <strong>Greedy</strong>: track <code>maxReach</code>. At each index, if index > maxReach, return false. Update maxReach = max(maxReach, i+nums[i]). Expected: <strong>O(n) time, O(1) space</strong>."},
    Hard:{title:"IPO",mnc:"Google · Amazon · Apple",desc:"Maximize capital after completing <code>k</code> projects. Each project has a capital requirement and profit. <strong>Greedy + two heaps</strong>: min-heap by capital, max-heap by profit. Add all affordable projects to max-heap, pick most profitable, repeat k times. Expected: <strong>O(n log n)</strong>."}
  },
"Math & Numbers":{
    Easy:{title:"Missing Number",mnc:"Amazon · Google · Microsoft",desc:"Given an array <code>nums</code> containing <code>n</code> distinct numbers in range <code>[0, n]</code>, find the missing number. Use the <strong>Gauss sum formula</strong>: <code>expected = n*(n+1)/2</code>, then subtract the array sum. <strong>O(n) time, O(1) space</strong>. XOR approach also works."},
    Medium:{title:"Happy Number",mnc:"Amazon · Google · Microsoft",desc:"A number is happy if repeatedly replacing it with the sum of squares of its digits eventually reaches 1. Detect cycles with <strong>Floyd's algorithm</strong> (fast/slow pointers on the sequence). If slow ever equals 1 → happy. If slow meets fast and fast≠1 → cycle."},
    Hard:{title:"Max Points on a Line",mnc:"Google · Facebook · Amazon",desc:"Find the maximum number of points on the same line. For each point, compute the slope to all other points and group by slope. Use <code>gcd</code> to normalize slopes (p/q irreducible form, handle negatives and vertical lines). <strong>O(n²) time</strong>."}
  },
  "Intervals":{
    Easy:{title:"Non-overlapping Intervals",mnc:"Google · Amazon · Microsoft",desc:"Given intervals, find the <strong>minimum number to remove</strong> so the rest are non-overlapping. Equivalent to finding maximum non-overlapping intervals (greedy: sort by end time, always keep interval with earliest end). Answer = total − maximum_non_overlapping. <strong>O(n log n)</strong>."},
    Medium:{title:"Minimum Interval to Include Each Query",mnc:"Google · Amazon · Citadel",desc:"Given intervals and queries, for each query return the size of the smallest interval that contains it. Sort both. Use a <strong>min-heap</strong> by interval size. For each sorted query, add all intervals that start ≤ query, remove intervals from heap that end < query. Heap top is the answer."},
    Hard:{title:"Data Stream as Disjoint Intervals",mnc:"Google · Bloomberg · Amazon",desc:"Design a data structure that adds integers to a stream and returns them as disjoint sorted intervals. Use a <strong>sorted map/TreeMap</strong>: on each add, find neighbors by key, check if they touch the new integer, merge if so. Each add is <strong>O(log n)</strong>. The data structure supports getIntervals in O(n)."}
  },
  "Sliding Window":{
    Easy:{title:"Maximum Average Subarray I",mnc:"Amazon · Google · Facebook",desc:"Find the contiguous subarray of length <code>k</code> with maximum average. Use <strong>fixed-size sliding window</strong>: compute first window sum, then slide right by adding next and removing leftmost element. Expected: <strong>O(n) time, O(1) space</strong>."},
    Medium:{title:"Permutation in String",mnc:"Amazon · Google · Facebook",desc:"Given <code>s1</code> and <code>s2</code>, check if any permutation of <code>s1</code> is a substring of <code>s2</code>. Use <strong>fixed-size sliding window</strong> of length s1.length with character frequency comparison. Compare frequency arrays as the window slides. Expected: <strong>O(n)</strong>."},
    Hard:{title:"Minimum Window Substring",mnc:"Facebook · Google · Amazon · Snapchat",desc:"Given strings <code>s</code> and <code>t</code>, find the smallest window in <code>s</code> containing all characters of <code>t</code>. Use <strong>variable sliding window</strong> with two frequency maps and a counter. Shrink left when window is valid, expand right otherwise. Expected: <strong>O(|s|+|t|)</strong>."}
  },
  "Two Pointers":{
    Easy:{title:"Squares of a Sorted Array",mnc:"Amazon · Google · Apple",desc:"Given a sorted integer array, return sorted squares. Naive: square then sort = O(n log n). Optimal: <strong>two pointers</strong> from both ends, fill result array from back to front (largest square goes last). Expected: <strong>O(n) time, O(n) space</strong>."},
    Medium:{title:"3Sum",mnc:"Amazon · Facebook · Google · Microsoft",desc:"Find all unique triplets summing to zero. Sort array, fix one element, use <strong>two pointers</strong> on the rest. Skip duplicates carefully at both outer loop and inner pointers. Expected: <strong>O(n²)</strong> time. How do you handle the duplicate-skipping logic?"},
    Hard:{title:"4Sum",mnc:"Google · Amazon · Adobe",desc:"Find all unique quadruplets summing to <code>target</code>. Extend 3Sum: two nested loops + two pointers = <strong>O(n³)</strong>. Skip duplicates at all four pointer levels. Can you generalize to kSum recursively? What is the generalized time complexity?"}
  },
  "Bit Manipulation":{
    Easy:{title:"Number of 1 Bits",mnc:"Apple · Microsoft · Google",desc:"Count the number of set bits in an integer's binary representation (Hamming weight). Two approaches: (1) check each bit with <code>n & 1</code> and right-shift, (2) <strong>Brian Kernighan's algorithm</strong>: <code>n = n & (n-1)</code> clears the lowest set bit each iteration. Expected: <strong>O(k)</strong> where k = set bits."},
    Medium:{title:"Sum of Two Integers",mnc:"Amazon · Google · Facebook",desc:"Add two integers <strong>without arithmetic operators</strong>. Use bit manipulation: XOR gives sum without carry, AND-then-shift gives carry. Repeat until carry is 0. Handle negative numbers in JavaScript (32-bit). Expected: <strong>O(1)</strong> since integers are fixed-width."},
    Hard:{title:"Maximum XOR of Two Numbers",mnc:"Google · Amazon · Facebook",desc:"Find the maximum XOR of any two numbers in an array. Naïve O(n²). Optimal: <strong>bit-by-bit greedy using a Trie</strong> or using prefix bitmask and the property <code>a XOR b = c ↔ a XOR c = b</code> — process from MSB using HashSets. Expected: <strong>O(n)</strong>."}
  },
  Sorting:{
    Easy:{title:"Merge Sorted Array",mnc:"Amazon · Microsoft · Facebook",desc:"Merge two sorted arrays <code>nums1</code> and <code>nums2</code> into <code>nums1</code> in-place. Use <strong>three pointers from the end</strong> to avoid overwriting. Start placing the larger element at position <code>m+n-1</code>. Expected: <strong>O(m+n) time, O(1) space</strong>. No extra array needed."},
    Medium:{title:"Sort an Array (QuickSort)",mnc:"Google · Amazon · Bloomberg",desc:"Implement <strong>QuickSort</strong> from scratch. Choose pivot (random for average O(n log n)), partition using two pointers, recursively sort sub-arrays. Explain worst-case O(n²) (sorted input with bad pivot) and how randomized pivot mitigates it. Implement both Lomuto and Hoare partition schemes."},
    Hard:{title:"Median of Two Sorted Arrays",mnc:"Google · Amazon · Goldman Sachs",desc:"Already classic hard — see Binary Search section for the O(log(min(m,n))) solution. Alternative approach: merge the arrays mentally using binary search on partition points. Ensure combined left half has exactly (m+n+1)/2 elements with max(left) ≤ min(right). Handle all edge cases."}
  },
  "Math & Numbers":{
    Easy:{title:"Count Digits That Divide a Number",mnc:"Amazon · Google",desc:"Given integer num, count how many of its digits evenly divide num. Extract each digit with modulo, skip zeros (division by zero), check <code>num % digit === 0</code>. Expected: <strong>O(d)</strong> where d is number of digits. Follow-up: what if digits can include leading zeros after manipulation?"},
    Medium:{title:"Factorial Trailing Zeroes",mnc:"Bloomberg · Amazon · Microsoft",desc:"Count trailing zeroes in n! without computing the factorial. Trailing zeros come from factors of 10 = 2×5. Since factors of 2 always exceed 5, count factors of 5: <code>n/5 + n/25 + n/125 + ...</code>. Expected: <strong>O(log n)</strong>. Why don't we count factors of 2?"},
    Hard:{title:"Largest Number",mnc:"Amazon · Google · Oracle",desc:"Given non-negative integers, arrange them to form the largest number. Custom comparator: compare two numbers by their concatenated strings — if <code>ab > ba</code>, a comes first. Handle edge case where all numbers are zero. Use language sort with custom comparator. Expected: <strong>O(n log n)</strong>."}
  },
  "Matrix & 2D":{
    Easy:{title:"Transpose Matrix",mnc:"Amazon · Google · Apple",desc:"Given an m×n matrix, return its transpose (swap rows and columns). For <strong>square matrix</strong>: swap in-place with <code>mat[i][j] ↔ mat[j][i]</code> for j > i. For non-square: create new n×m matrix. Expected: <strong>O(m×n)</strong>. Used as step 1 in rotate image."},
    Medium:{title:"Search a 2D Matrix",mnc:"Amazon · Google · Facebook",title2:"Search a 2D Matrix",desc:"Search a value in a matrix where each row is sorted and each row's first value is greater than last row's last value. Treat as flattened sorted array, apply <strong>binary search</strong> with index mapping: row=mid/n, col=mid%n. Expected: <strong>O(log(m×n))</strong>."},
    Hard:{title:"Maximal Rectangle",mnc:"Amazon · Google · Microsoft",desc:"Find the largest rectangle containing only 1s in a binary matrix. Convert each row to a histogram of heights (reset on 0, increment on 1). For each row, apply <strong>Largest Rectangle in Histogram</strong> algorithm using a monotonic stack. Expected: <strong>O(m×n) time, O(n) space</strong>."}
  },
  Intervals:{
    Easy:{title:"Count Days Between Intervals",mnc:"Amazon · Google",desc:"Given a list of intervals, find total days covered (no double counting). Sort by start, merge overlapping intervals by extending end. Count total merged duration. This reduces to Merge Intervals. Expected: <strong>O(n log n)</strong>. Useful in calendar/scheduling apps."},
    Medium:{title:"Task Scheduler Intervals",mnc:"Google · Facebook · Amazon",desc:"Given tasks (same letter = same type) and cooldown n, find minimum intervals needed. <strong>Greedy</strong>: most frequent task determines structure. Formula: <code>(maxCount-1) * (n+1) + countOfMaxFreq</code>. Or simulate with a max-heap. Return max of formula and total task count. Expected: <strong>O(n)</strong>."},
    Hard:{title:"Employee Free Time",mnc:"Google · Uber · Amazon",desc:"Given employees' work schedules (list of intervals per employee), find all free time intervals. Flatten all intervals, sort by start, merge overlapping. Gaps between merged intervals are free time. Expected: <strong>O(n log n)</strong> for sort where n is total intervals. Follow-up: stream of intervals?"}
  },
  "Prefix & Sliding":{
    Easy:{title:"Richest Customer Wealth",mnc:"Amazon · Google",desc:"Find the richest customer: maximum of row sums in a 2D array. Use <code>Math.max(...accounts.map(r=>r.reduce((a,b)=>a+b,0)))</code>. This introduces row-sum pattern used in prefix sum problems. Expected: <strong>O(m×n)</strong>. Follow-up: return both the wealth and the customer index."},
    Medium:{title:"Maximum Points You Can Obtain",mnc:"Google · Amazon · Facebook",desc:"Take k cards from either end (left or right) to maximize sum. Key insight: taking k from ends = leaving n-k consecutive in the middle. Find the <strong>minimum subarray sum of length n-k</strong> using sliding window. Answer = total sum - that minimum. Expected: <strong>O(n) time, O(1) space</strong>."},
    Hard:{title:"Longest Turbulent Subarray",mnc:"Amazon · Google",desc:"Find longest subarray where sign of comparisons alternates (turbulent). Use <strong>sliding window with state</strong>: track whether last comparison was up or down. Shrink window when turbulence breaks. Edge case: equal consecutive elements reset window. Expected: <strong>O(n) time, O(1) space</strong>."}
  }
,
  "Monotonic Stack":{
    Easy:{title:"Remove Duplicate Letters",mnc:"Google · Amazon · Microsoft",desc:"Remove duplicate letters from a string so each appears once, and the result is the lexicographically smallest in all possible results that respect original relative order. Use a <strong>monotonic stack</strong>: for each character, pop larger characters if they appear later. Use a 'seen' set to avoid re-adding characters."},
    Medium:{title:"Remove K Digits",mnc:"Amazon · Google · Bloomberg",desc:"Given a string of digits and integer k, remove k digits to make the number as small as possible. Use a <strong>monotonic increasing stack</strong>: for each digit, pop larger digits from the stack (while k > 0). After processing all digits, if k > 0 remove from the end. Handle leading zeros. <strong>O(n)</strong>."},
    Hard:{title:"Sum of Subarray Minimums",mnc:"Google · Amazon · Microsoft",desc:"Find the sum of minimums of all subarrays. For each element, find how many subarrays it is the minimum of using a <strong>monotonic stack</strong> to find Previous Smaller Element and Next Smaller Element. Contribution = PSE_distance × NSE_distance × element value. Handle duplicates with strict/non-strict comparison. <strong>O(n)</strong>."}
  },
  "Advanced Graphs":{
    Easy:{title:"Number of Provinces",mnc:"Google · Amazon · Facebook",desc:"Given a matrix where <code>isConnected[i][j]=1</code> means cities i and j are directly connected, count the total number of provinces (connected components). Use <strong>DFS/BFS</strong> or <strong>Union-Find</strong>. For Union-Find: initially n components; union reduces count. Return final count. <strong>O(n²)</strong>."},
    Medium:{title:"Cheapest Flights Within K Stops",mnc:"Google · Amazon · Airbnb",desc:"Find cheapest price from src to dst with at most k stops. Use <strong>Bellman-Ford</strong> with k+1 relaxation rounds (not k like standard). Use a copy of distance array to prevent using same-round updates. Or BFS level-by-level (k levels). Dijkstra with (cost, node, stops) also works. <strong>O(k·E)</strong>."},
    Hard:{title:"Critical Connections in a Network",mnc:"Amazon · Google · Facebook",desc:"Find all critical connections (bridges) in a graph. Use <strong>Tarjan's algorithm</strong>: DFS with discovery timestamps and low values. A connection u→v is a bridge if <code>low[v] > disc[u]</code> (v can't reach u or ancestors without this edge). Time and space: <strong>O(V+E)</strong>."}
  }
};

// ══ CURATED 25 QUESTIONS PER LEVEL ══
const DSA_CURATED={
  Easy:[
    {title:"Two Sum",topic:"Arrays",mnc:"Amazon · Google · Meta",desc:"Given an array <code>nums</code> and a <code>target</code>, return indices of the two numbers that add up to the target. Use HashMap for <strong>O(n) time, O(n) space</strong>. Store each number's index; check if the complement exists before inserting."},
    {title:"Best Time to Buy and Sell Stock",topic:"Arrays",mnc:"Meta · Microsoft · Apple",desc:"Find maximum profit buying on one day and selling on a later day. Single pass: track minimum price seen so far. Profit at each step = current price − running minimum. Return 0 if no profit possible. <strong>O(n) time, O(1) space</strong>."},
    {title:"Contains Duplicate",topic:"Arrays",mnc:"Amazon · Apple · Google",desc:"Return <code>true</code> if any value appears at least twice. HashSet approach: add each number; if <code>add()</code> returns false, duplicate found. Python shortcut: <code>len(set(nums)) != len(nums)</code>. <strong>O(n) time, O(n) space</strong>."},
    {title:"Valid Anagram",topic:"Strings",mnc:"Facebook · Amazon · Microsoft",desc:"Return true if <code>t</code> is an anagram of <code>s</code>. Count character frequencies in both strings — compare the two frequency maps. Java: sort both; Python: use Counter. <strong>O(n) time</strong>."},
    {title:"Valid Palindrome",topic:"Strings",mnc:"Amazon · Microsoft · Bloomberg",desc:"Check if a string is a palindrome using only alphanumeric characters, ignoring case. Two-pointer from both ends, skip non-alphanumeric, compare lowercase. <strong>O(n) time, O(1) space</strong>."},
    {title:"Longest Common Prefix",topic:"Strings",mnc:"Amazon · Google · Adobe",desc:"Find longest common prefix among an array of strings. Sort first, then compare only the first and last strings character by character. Why? Sorting brings most different strings to extremes. <strong>O(n·m)</strong>."},
    {title:"Reverse Linked List",topic:"Linked List",mnc:"Amazon · Apple · Microsoft",desc:"Reverse a singly linked list iteratively in <strong>O(1) extra space</strong>. Three pointers: prev (null), curr (head), next. At each step: save next, point curr to prev, advance both. Return prev at the end."},
    {title:"Linked List Cycle Detection",topic:"Linked List",mnc:"Amazon · Microsoft · Bloomberg · Adobe",desc:"Detect if a linked list has a cycle in <strong>O(1) memory</strong> using Floyd's algorithm. Slow moves 1 step, fast moves 2 steps. If they meet, cycle exists. If fast reaches null, no cycle."},
    {title:"Middle of Linked List",topic:"Linked List",mnc:"Amazon · Google · Facebook",desc:"Find middle node using slow/fast pointers. When fast reaches the end, slow is at middle. If two middles, return the second. <strong>O(n) time, O(1) space</strong>. Classic two-pointer trick."},
    {title:"Valid Parentheses",topic:"Stack & Queue",mnc:"Amazon · Google · Meta · Bloomberg",desc:"Check if bracket string is valid. Use a stack: push open brackets; on closing bracket, check stack top. If mismatched or empty, return false. Valid if stack is empty at end. <strong>O(n) time, O(n) space</strong>."},
    {title:"Min Stack",topic:"Stack & Queue",mnc:"Amazon · Bloomberg · Microsoft",desc:"Design a stack with <code>getMin()</code> in <strong>O(1) time</strong>. Use two stacks: one main, one tracking minimums. Push to min-stack only when new min ≤ current min. Pop from both stacks together."},
    {title:"Binary Search",topic:"Binary Search",mnc:"Amazon · Google · Facebook",desc:"Classic binary search in a sorted array. Maintain <code>lo</code> and <code>hi</code> pointers. Calculate <code>mid = lo + (hi-lo)/2</code> to avoid overflow. Narrow the range based on comparison. <strong>O(log n)</strong>."},
    {title:"Maximum Depth of Binary Tree",topic:"Trees",mnc:"Amazon · Microsoft · Google",desc:"Find max depth using recursion: <code>1 + max(depth(left), depth(right))</code>. Base case: null returns 0. Or use BFS and count levels. <strong>O(n) time, O(h) space</strong> where h is height."},
    {title:"Lowest Common Ancestor of BST",topic:"Trees",mnc:"Facebook · Amazon · Google",desc:"In a BST, LCA is the node where one target is in left subtree and other is in right (or one IS the node). Traverse: if both targets < node → go left; both > node → go right; else current node is LCA. <strong>O(h) time</strong>."},
    {title:"Symmetric Tree",topic:"Trees",mnc:"Amazon · Microsoft · Bloomberg",desc:"Check if tree is a mirror of itself. Recursive helper <code>isMirror(left, right)</code>: both null = true; one null = false; values must match; recurse cross-ways. <strong>O(n) time</strong>."},
    {title:"Number of Islands",topic:"Graphs",mnc:"Amazon · Google · Meta · Bloomberg",desc:"Count islands in a 2D grid. DFS/BFS from each unvisited '1': mark visited by setting to '0', explore 4 directions. Each DFS call counts one island. <strong>O(m×n) time and space</strong>."},
    {title:"Find if Path Exists in Graph",topic:"Graphs",mnc:"Google · Amazon · Facebook",desc:"Check if path exists from source to destination in undirected graph. Use BFS/DFS with visited set. Or Union-Find: union all edges, check if source and destination share the same root. <strong>O(V+E)</strong>."},
    {title:"Climbing Stairs",topic:"Dynamic Programming",mnc:"Amazon · Google · Microsoft",desc:"Count ways to reach n-th stair taking 1 or 2 steps. This is Fibonacci: <code>f(n) = f(n-1) + f(n-2)</code>. Use two variables to optimize to <strong>O(1) space</strong>. Classic intro to DP."},
    {title:"House Robber",topic:"Dynamic Programming",mnc:"Amazon · Microsoft · LinkedIn",desc:"Max money without robbing adjacent houses. DP: at each house, choose max of (rob current + prev-prev) vs (skip). Space-optimized: track only last two values. <strong>O(n) time, O(1) space</strong>."},
    {title:"Last Stone Weight",topic:"Heap / Priority Queue",mnc:"Amazon · Google · Apple",desc:"Repeatedly smash two heaviest stones. Max-heap approach: poll two heaviest; push difference if not equal; return 0 if empty. Python: negate values since <code>heapq</code> is min-heap. <strong>O(n log n)</strong>."},
    {title:"Missing Number",topic:"Math & Numbers",mnc:"Amazon · Google · Microsoft",desc:"Find missing number in range [0,n]. Gauss sum: <code>expected = n*(n+1)/2</code>, subtract actual sum. XOR approach: XOR all indices and values; missing number cancels. <strong>O(n) time, O(1) space</strong>."},
    {title:"Single Number",topic:"Math & Numbers",mnc:"Amazon · Google · Apple",desc:"Find the element that appears only once (others appear twice). XOR all numbers: duplicate pairs cancel to 0, leaving the single number. <strong>O(n) time, O(1) space</strong>. Classic bit manipulation."},
    {title:"Next Greater Element I",topic:"Monotonic Stack",mnc:"Amazon · Google · Microsoft",desc:"For each element in nums1 (subset of nums2), find next greater element in nums2. Monotonic decreasing stack on nums2: when larger element found, pop and store mapping. <strong>O(n+m) time</strong>."},
    {title:"Number of Connected Components",topic:"Union Find",mnc:"LinkedIn · Amazon · Google",desc:"Count connected components in an undirected graph. Union-Find: initialize components=n, union edges, decrement on each successful union. Or DFS/BFS marking visited nodes. <strong>O(α(n)) per union</strong>."},
    {title:"Maximum Average Subarray I",topic:"Sliding Window",mnc:"Amazon · Google · Facebook",desc:"Fixed-size window of length k: compute first window sum, slide by adding next and subtracting leftmost element. Track maximum window sum, divide by k at end. <strong>O(n) time, O(1) space</strong>."},
  ],
  Medium:[
    {title:"Maximum Subarray (Kadane's)",topic:"Arrays",mnc:"Google · Facebook · Amazon · Bloomberg",desc:"Find subarray with largest sum using Kadane's algorithm. At each element: <code>cur = max(nums[i], cur + nums[i])</code>. Update global max. If subarray can start fresh from current element, it should. <strong>O(n) time, O(1) space</strong>."},
    {title:"Merge Intervals",topic:"Arrays",mnc:"Google · Twitter · Oracle · Microsoft",desc:"Sort intervals by start time. Iterate: if current start ≤ previous end, merge by extending end. Otherwise add new interval. Return merged list. <strong>O(n log n)</strong> due to sorting."},
    {title:"Product of Array Except Self",topic:"Arrays",mnc:"Facebook · Amazon · Microsoft · LinkedIn",desc:"Return array where each element is product of all others, <strong>without division</strong>, in <strong>O(n) time, O(1) extra space</strong>. Two passes: prefix products left-to-right, suffix products right-to-left, multiply in-place."},
    {title:"Longest Substring Without Repeating Characters",topic:"Strings",mnc:"Amazon · Google · Bloomberg · LinkedIn",desc:"Sliding window with HashSet or HashMap. Expand right; when duplicate found, shrink left until valid. Track max window size. <strong>O(n) time</strong>. Follow-up: return the actual substring."},
    {title:"Group Anagrams",topic:"Strings",mnc:"Amazon · Google · Adobe",desc:"Group strings that are anagrams. Sort each string as key → group strings by key. Or use character frequency count tuple as key. <strong>O(n·k log k)</strong> with sort, <strong>O(n·k)</strong> with count."},
    {title:"Decode Ways",topic:"Strings",mnc:"Facebook · Amazon · Microsoft",desc:"Count ways to decode a digit string (1='A', 26='Z'). DP: valid 1-digit → dp[i]+=dp[i-1]; valid 2-digit → dp[i]+=dp[i-2]. Edge cases: leading zeros, '06', numbers >26. <strong>O(n) time, O(1) space</strong>."},
    {title:"Reorder List",topic:"Linked List",mnc:"Amazon · Bloomberg · Goldman Sachs",desc:"Reorder L0→Ln→L1→Ln-1→… in-place. Three steps: (1) find middle, (2) reverse second half, (3) merge two halves. Each step is a classic linked list technique. <strong>O(n) time, O(1) space</strong>."},
    {title:"Add Two Numbers",topic:"Linked List",mnc:"Amazon · Microsoft · Facebook · Adobe",desc:"Add two numbers represented as reversed linked lists. Simulate addition digit by digit with carry. Create new node for each digit. Handle extra carry at end. <strong>O(max(m,n)) time and space</strong>."},
    {title:"Daily Temperatures",topic:"Stack & Queue",mnc:"Amazon · Google · Uber · Lyft",desc:"For each day, find days until warmer temperature. Monotonic decreasing stack of indices: when warmer day found, pop and compute day difference. <strong>O(n) time, O(n) space</strong>. Each element pushed/popped once."},
    {title:"Decode String",topic:"Stack & Queue",mnc:"Amazon · Microsoft · Flipkart",desc:"Decode strings like <code>3[a2[c]]</code>. Two stacks: one for counts, one for partial strings. On '[': push count and current. On ']': pop, repeat string count times. Characters: append. Handle nested brackets. <strong>O(n)</strong>."},
    {title:"Search in Rotated Sorted Array",topic:"Binary Search",mnc:"Amazon · Google · Facebook",desc:"Binary search on rotated array. At each mid, determine which half is sorted. If target in sorted half, search there; else search other half. <strong>O(log n)</strong>. Handle duplicates as follow-up."},
    {title:"Find Peak Element",topic:"Binary Search",mnc:"Google · Facebook · Amazon",desc:"Find any peak element (greater than neighbors) in <strong>O(log n)</strong>. Binary search: if nums[mid] < nums[mid+1], peak must be to the right. Else peak is in left half (or at mid). Guaranteed by boundary conditions."},
    {title:"Path Sum II",topic:"Trees",mnc:"Amazon · Microsoft · Facebook",desc:"Find all root-to-leaf paths with sum equal to targetSum. DFS with backtracking: add node, recurse, remove. At leaf: check if remaining sum is 0. <strong>O(n²)</strong> worst case due to copying paths. Use reference if possible."},
    {title:"Course Schedule",topic:"Graphs",mnc:"Google · Facebook · Amazon · Airbnb",desc:"Detect cycle in directed graph (prerequisites). DFS with three states: unvisited, visiting, visited. If visiting a node already marked 'visiting', cycle found. Or Kahn's BFS topological sort using in-degree counting. <strong>O(V+E)</strong>."},
    {title:"Number of Provinces",topic:"Graphs",mnc:"Google · Amazon · Facebook",desc:"Count connected components in adjacency matrix. DFS/BFS from each unvisited city, mark all reachable as visited. Count DFS/BFS calls. Or Union-Find: union adjacent pairs, count unique roots. <strong>O(n²)</strong>."},
    {title:"Coin Change",topic:"Dynamic Programming",mnc:"Google · Amazon · Facebook · Uber",desc:"Minimum coins to make amount. Bottom-up DP: <code>dp[i] = min(dp[i], dp[i-coin]+1)</code> for all coins. Initialize dp[0]=0, others infinity. Return dp[amount] or -1 if unreachable. <strong>O(amount × coins)</strong>."},
    {title:"Jump Game",topic:"Greedy",mnc:"Amazon · Google · Microsoft",desc:"Determine if you can reach the last index. Greedy: track <code>maxReach</code>. At each index, if index > maxReach, return false. Update maxReach = max(maxReach, i+nums[i]). <strong>O(n) time, O(1) space</strong>."},
    {title:"Redundant Connection",topic:"Union Find",mnc:"Amazon · Google · Microsoft",desc:"Find extra edge in a graph that forms a cycle. Process edges in order; the first edge where both endpoints already have the same root (Union-Find) is the redundant edge. Path compression + union by rank: <strong>O(α(n)) per op</strong>."},
    {title:"Task Scheduler",topic:"Heap / Priority Queue",mnc:"Google · Facebook · Amazon",desc:"Min CPU intervals with cooldown n. Greedy + max-heap: always pick most frequent available task. Or formula: <code>(maxCount-1)*(n+1) + countOfMaxFreq</code>. Return max of formula and total tasks. <strong>O(n)</strong>."},
    {title:"Combination Sum",topic:"Backtracking",mnc:"Google · Amazon · Facebook · Microsoft",desc:"Find all unique combinations summing to target (elements can repeat). Backtrack: try each candidate from current index forward. If sum > target, prune. Passing index i (not i+1) allows reuse. <strong>O(n^(t/m))</strong>."},
    {title:"Network Delay Time",topic:"Advanced Graphs",mnc:"Google · Amazon · Meta",desc:"Shortest time for signal to reach all nodes. Dijkstra's from source: min-heap of (time, node), relax edges greedily. Answer = max of all shortest distances. Return -1 if any node unreachable. <strong>O((V+E) log V)</strong>."},
    {title:"Cheapest Flights Within K Stops",topic:"Advanced Graphs",mnc:"Google · Amazon · Airbnb",desc:"Min cost from src to dst with ≤k stops. Bellman-Ford with k+1 relaxation rounds. Use copy of distance array per round to prevent using same-round updates. Or BFS level by level. <strong>O(k·E)</strong>."},
    {title:"Subarray Sum Equals K",topic:"Prefix & Sliding",mnc:"Amazon · Google · Lyft",desc:"Count subarrays with sum = k. Prefix sum + HashMap: store frequency of each prefix sum. At each index: if <code>prefix-k</code> in map, add its frequency to count. <strong>O(n) time and space</strong>. Explain why sliding window fails here."},
    {title:"Permutation in String",topic:"Sliding Window",mnc:"Amazon · Google · Facebook",desc:"Check if any permutation of s1 is a substring of s2. Fixed-size sliding window of length s1.length. Compare character frequency arrays as window slides (or use a match counter). <strong>O(n)</strong>."},
    {title:"3Sum",topic:"Arrays",mnc:"Google · Facebook · Amazon",desc:"Find all unique triplets summing to zero. Sort first. For each element i, use two pointers l and r. Skip duplicates at all three levels. If sum>0: r--; if sum<0: l++; if sum==0: record and skip duplicates. <strong>O(n²)</strong>."},
  ],
  Hard:[
    {title:"Trapping Rain Water",topic:"Arrays",mnc:"Google · Amazon · Goldman Sachs · Uber",desc:"Two-pointer approach: maintain maxLeft and maxRight. Move pointer from side with smaller max. Water at each step = min(maxLeft,maxRight) - height. <strong>O(n) time, O(1) space</strong>. Research: also solvable with stack and prefix/suffix arrays.",research:true},
    {title:"First Missing Positive",topic:"Arrays",mnc:"Google · Amazon · Microsoft",desc:"Find smallest missing positive in <strong>O(n) time, O(1) space</strong>. Use array itself as hash: place each num n in position n-1. Then scan for first position where arr[i] != i+1. Answer is always in [1, n+1]. Research: index-as-hash trick.",research:true},
    {title:"Minimum Window Substring",topic:"Strings",mnc:"Google · Facebook · Amazon · Snapchat",desc:"Smallest window in s containing all chars of t. Sliding window with two frequency maps and a 'formed' counter. Expand right until valid; shrink left while still valid; update answer. <strong>O(|s|+|t|) time</strong>."},
    {title:"Regular Expression Matching",topic:"Strings",mnc:"Facebook · Google · Apple",desc:"DP matching with '.' (any char) and '*' (zero or more of preceding). <code>dp[i][j]</code> = true if s[0..i] matches p[0..j]. Handle '*' as zero occurrences (skip 2) or more (copy dp[i-1][j]). <strong>O(m·n) time and space</strong>.",research:true},
    {title:"Wildcard Matching",topic:"Strings",mnc:"Google · Facebook · Microsoft",desc:"Similar to regex but '*' matches any sequence including empty. 2D DP: dp[i][j] = s[0..i] matches p[0..j]. When p[j]='*': either skip it (dp[i][j-1]) or match one more char (dp[i-1][j]). Optimize to O(m) space.",research:true},
    {title:"Merge K Sorted Lists",topic:"Linked List",mnc:"Google · Amazon · Meta · Microsoft",desc:"Merge k sorted linked lists. Min-heap approach: push all list heads into heap; poll min, push next node of polled. <strong>O(N log k)</strong>. Divide and conquer: merge pairs repeatedly. Space: <strong>O(k)</strong> for heap."},
    {title:"LRU Cache",topic:"Linked List",mnc:"Microsoft · Salesforce · Bloomberg",desc:"O(1) get and put using HashMap + doubly linked list. HashMap: key→node. Doubly linked list: maintains access order (MRU at head, LRU at tail). On get: move to head. On put: add to head, evict tail if over capacity."},
    {title:"Reverse Nodes in k-Group",topic:"Linked List",mnc:"Google · Facebook · Microsoft · Uber",desc:"Reverse every k nodes in-place. Check if k nodes remain; reverse current group; recursively handle rest; connect original head to result of recursive call. <strong>O(n) time, O(n/k) recursion space</strong>. Iterative version uses O(1) space.",research:true},
    {title:"Sliding Window Maximum",topic:"Stack & Queue",mnc:"Amazon · Google · Microsoft · Bloomberg",desc:"Max in each window of size k. Monotonic deque of indices: pop from back if smaller than current, pop from front if outside window. Front is always window maximum. <strong>O(n) time, O(k) space</strong>."},
    {title:"Largest Rectangle in Histogram",topic:"Monotonic Stack",mnc:"Google · Amazon · Microsoft · Apple",desc:"Monotonic increasing stack. When shorter bar found: pop and compute area = popped height × (current − last_popped_index). Append sentinel 0 at end. Each element pushed/popped once: <strong>O(n) time, O(n) space</strong>."},
    {title:"Median of Two Sorted Arrays",topic:"Binary Search",mnc:"Google · Amazon · Microsoft · Goldman Sachs",desc:"Binary search on smaller array's partition. Ensure left halves total (m+n)/2. Check maxLeft ≤ minRight on both sides. Handle odd/even total size. <strong>O(log(min(m,n)))</strong>. This is one of the most challenging binary search problems.",research:true},
    {title:"Binary Tree Maximum Path Sum",topic:"Trees",mnc:"Google · Amazon · Facebook · Microsoft",desc:"DFS returning max single-path contribution upward. At each node: globally update answer as left + node + right (where left/right ≥ 0). Return node + max(left, right). Handle negatives by clamping to 0. <strong>O(n)</strong>.",research:true},
    {title:"Word Ladder",topic:"Graphs",mnc:"Amazon · Facebook · Microsoft · LinkedIn",desc:"BFS for shortest word transformation path. Each level = one transformation. Generate all possible words by changing each letter. Check if word in wordSet. Bidirectional BFS optimization: search from both ends simultaneously. <strong>O(n²·k)</strong>."},
    {title:"Critical Connections in a Network",topic:"Advanced Graphs",mnc:"Amazon · Google · Facebook",desc:"Find bridges using Tarjan's algorithm. DFS with discovery time and low values. Edge u→v is a bridge if low[v] > disc[u] (v can't reach u or ancestors without this edge). <strong>O(V+E) time and space</strong>.",research:true},
    {title:"Alien Dictionary",topic:"Advanced Graphs",mnc:"Google · Meta · Amazon",desc:"Build character ordering from sorted word list. Compare adjacent words: first differing char gives a directed edge. Topological sort (Kahn's BFS). If cycle → invalid. Edge case: word is prefix of shorter word → invalid. <strong>O(C)</strong>.",research:true},
    {title:"Edit Distance",topic:"Dynamic Programming",mnc:"Google · Facebook · Amazon · Microsoft",desc:"Minimum operations to transform word1 to word2. 2D DP: if chars match, copy diagonal; else 1 + min(insert=dp[i][j-1], delete=dp[i-1][j], replace=dp[i-1][j-1]). Optimize to O(min(m,n)) space with rolling array. <strong>O(m·n)</strong>."},
    {title:"N-Queens",topic:"Backtracking",mnc:"Google · Amazon · Microsoft",desc:"Place N queens with no two attacking. Backtrack with three sets for column, main diagonal (/), anti-diagonal (\\) attacks — all O(1) checks. Explore each row, placing queen in valid column. <strong>O(n!) time, O(n) space</strong>."},
    {title:"Stream of Characters",topic:"Tries",mnc:"Google · Amazon",desc:"Check if any suffix of character stream matches a word. Insert reversed words in Trie. On each character add, walk through recent chars via reversed Trie. Efficient for multiple queries. <strong>O(S) insert, O(L) query</strong> per char.",research:true},
    {title:"Find Median from Data Stream",topic:"Heap / Priority Queue",mnc:"Google · Amazon · Facebook · Apple",desc:"Two heaps: max-heap for lower half, min-heap for upper half. Balance: sizes differ by at most 1. Median: if equal size, average tops; if unequal, top of larger heap. <code>addNum</code>: O(log n), <code>findMedian</code>: O(1)."},
    {title:"Maximum Sum of Two Non-Overlapping Subarrays",topic:"Prefix & Sliding",mnc:"Amazon · Google · Microsoft",desc:"Find two non-overlapping subarrays of lengths L and M with max combined sum. Prefix sums + two extra arrays: maxL[i] = max L-sum ending at or before i. Combine from both directions. <strong>O(n) time, O(n) space</strong>.",research:true},
    {title:"Maximal Rectangle",topic:"Matrix & 2D",mnc:"Amazon · Google · Microsoft",desc:"Build histogram row by row: if cell is 1, increment height; else reset to 0. Apply Largest Rectangle in Histogram algorithm to each row using monotonic stack. <strong>O(m×n) time, O(n) space</strong>.",research:true},
    {title:"Accounts Merge",topic:"Union Find",mnc:"Google · Facebook · Amazon",desc:"Merge accounts with shared emails. Union-Find: map each email to account id, union ids sharing email, group emails by root, sort each group, prepend name. Or DFS graph approach. <strong>O(nk log(nk))</strong> where k = max emails.",},
    {title:"IPO",topic:"Greedy",mnc:"Google · Amazon · Apple",desc:"Maximize capital after k projects. Two heaps: min-heap by capital requirement, max-heap by profit. Greedily: add all affordable projects to max-heap, pick most profitable, repeat k times. <strong>O(n log n)</strong>.",research:true},
    {title:"Reconstruct Itinerary",topic:"Advanced Graphs",mnc:"Google · Amazon · Uber",desc:"Euler path using Hierholzer's algorithm. DFS with min-heap for lexicographic order. Post-order addition to result, reverse at end. Start from 'JFK'. Handles dead ends by ensuring all edges are used. <strong>O(E log E)</strong>.",research:true},
    {title:"Data Stream as Disjoint Intervals",topic:"Intervals",mnc:"Google · Bloomberg · Amazon",desc:"Add integers one by one; return as sorted disjoint intervals. TreeMap/sorted map: on each add, find neighboring intervals, merge if they touch or overlap. Each add: <strong>O(log n)</strong>. getIntervals: <strong>O(n)</strong>.",research:true},
  ]
};

// Add research tag to DSA_RESOURCES for curated hard questions
DSA_CURATED.Hard.forEach(q=>{
  if(q.research && DSA_RESOURCES[q.title]){
    DSA_RESOURCES[q.title].research=true;
  }
});

function renderDSAFilter(level){
  const containerId='dsa-'+level.toLowerCase()+'-content';
  const container=document.getElementById(containerId);
  if(!container)return;
  const lvClass={Easy:'easy-card',Medium:'medium-card',Hard:'hard-card'};
  const lvColor={Easy:'var(--neon1)',Medium:'var(--neon4)',Hard:'var(--neon3)'};
  const lvIcon={Easy:'🟢',Medium:'🟡',Hard:'🔴'};
  const questions=DSA_CURATED[level]||[];

  let html=`<div style="margin-bottom:16px;padding:12px 18px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:10px;display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
    <span style="font-family:'Orbitron',monospace;font-size:.85rem;font-weight:700;color:${lvColor[level]};">${lvIcon[level]} ${level} — 25 Questions</span>
    <span style="font-family:'JetBrains Mono',monospace;font-size:.6rem;color:var(--muted);">Java YT · Python YT · LeetCode · GeeksForGeeks — No code shown, solve yourself!</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:10px;">`;

  questions.forEach((q,qi)=>{
    const uid='dcf_${level}_${qi}'.replace(/\${level}/g,level);
    const isResearch=!!q.research;
    const r=DSA_RESOURCES[q.title]||{};
    const jYT=(r.javaYT||[]).map(s=>`<a href="${s.url}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:5px;padding:5px 11px;background:rgba(255,107,53,.12);border:1px solid rgba(255,107,53,.35);border-radius:5px;text-decoration:none;font-family:'JetBrains Mono',monospace;font-size:.58rem;color:#ff6b35;white-space:nowrap;transition:all .2s;" onmouseover="this.style.background='rgba(255,107,53,.25)'" onmouseout="this.style.background='rgba(255,107,53,.12)'">☕▶ ${s.label}</a>`).join('');
    const pYT=(r.pythonYT||[]).map(s=>`<a href="${s.url}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:5px;padding:5px 11px;background:rgba(55,118,171,.14);border:1px solid rgba(100,149,237,.35);border-radius:5px;text-decoration:none;font-family:'JetBrains Mono',monospace;font-size:.58rem;color:#87ceeb;white-space:nowrap;transition:all .2s;" onmouseover="this.style.background='rgba(55,118,171,.28)'" onmouseout="this.style.background='rgba(55,118,171,.14)'">🐍▶ ${s.label}</a>`).join('');
    const solHTML=(r.solutions||[]).map(s=>`<a href="${s.url}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:5px;padding:5px 11px;background:rgba(0,255,204,.07);border:1px solid rgba(0,255,204,.25);border-radius:5px;text-decoration:none;font-family:'JetBrains Mono',monospace;font-size:.58rem;color:var(--neon1);white-space:nowrap;transition:all .2s;" onmouseover="this.style.background='rgba(0,255,204,.17)'" onmouseout="this.style.background='rgba(0,255,204,.07)'">🔗 ${s.label}</a>`).join('');

    html+=`
    <div class="dsa-q-item ${lvClass[level]}" id="dcf_${level}_${qi}" style="border-left-color:${lvColor[level]};">
      <div class="dsa-q-row" onclick="toggleDSAFilterItem('dcf_${level}_${qi}')">
        <span class="dsa-q-num">${String(qi+1).padStart(2,'0')}</span>
        <span style="font-size:.85rem;flex-shrink:0">${lvIcon[level]}</span>
        <span class="dsa-q-title">${q.title}</span>
        <span class="dsa-q-mnc">${q.mnc}</span>
        ${isResearch?`<span style="font-family:'JetBrains Mono',monospace;font-size:.55rem;padding:2px 7px;background:rgba(255,204,0,.15);color:var(--neon4);border:1px solid rgba(255,204,0,.3);border-radius:4px;white-space:nowrap;">🔬 RESEARCH</span>`:''}
        <span class="dsa-q-arrow">▼</span>
      </div>
      <div class="dsa-q-desc">
        <div class="dsa-q-desc-inner">
          <div class="dsa-q-desc-text">${q.desc}</div>
          ${isResearch?`<div style="margin-top:10px;padding:8px 12px;background:rgba(255,204,0,.07);border-left:3px solid var(--neon4);border-radius:4px;font-family:'JetBrains Mono',monospace;font-size:.67rem;color:var(--neon4);">🔬 RESEARCH YOURSELF — Try solving before watching. Use hints in description. This builds real problem-solving skills!</div>`:''}
          <div style="margin-top:12px;border:1px solid rgba(255,255,255,.07);border-radius:10px;overflow:hidden;">
            <div style="padding:9px 13px;background:rgba(255,107,53,.05);border-bottom:1px solid rgba(255,255,255,.05);">
              <div style="font-family:'JetBrains Mono',monospace;font-size:.5rem;color:#ff6b35;letter-spacing:.12em;margin-bottom:6px;">☕ JAVA — VIDEO SOLUTIONS</div>
              <div style="display:flex;gap:5px;flex-wrap:wrap;">${jYT||'<span style="font-size:.58rem;color:var(--muted);">Search on YouTube</span>'}</div>
            </div>
            <div style="padding:9px 13px;background:rgba(55,118,171,.05);border-bottom:1px solid rgba(255,255,255,.05);">
              <div style="font-family:'JetBrains Mono',monospace;font-size:.5rem;color:#87ceeb;letter-spacing:.12em;margin-bottom:6px;">🐍 PYTHON — VIDEO SOLUTIONS</div>
              <div style="display:flex;gap:5px;flex-wrap:wrap;">${pYT||'<span style="font-size:.58rem;color:var(--muted);">Search on YouTube</span>'}</div>
            </div>
            <div style="padding:9px 13px;background:rgba(0,255,204,.03);">
              <div style="font-family:'JetBrains Mono',monospace;font-size:.5rem;color:var(--neon1);letter-spacing:.12em;margin-bottom:6px;">🔗 WRITTEN SOLUTIONS</div>
              <div style="display:flex;gap:5px;flex-wrap:wrap;">${solHTML||'<span style="font-size:.58rem;color:var(--muted);">Search on LeetCode/GFG</span>'}</div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  });

  html+='</div>';
  container.innerHTML=html;
}
function toggleDSAFilterItem(id){
  const el=document.getElementById(id);
  if(el)el.classList.toggle('open');
  sfx('click');
}

// ══════════════════════════════════════════════════
//  CHALLENGE SECTION
// ══════════════════════════════════════════════════

// ══ CHALLENGE DSA SOLUTIONS (Video + Java + Python) ══
const CHALLENGE_SOL={
  "Two Sum":{
    videos:[
      {label:'NeetCode',url:'https://www.youtube.com/watch?v=KLlXCFG5TnA'},
      {label:'Kevin Naughton Jr',url:'https://www.youtube.com/watch?v=BoHivkqqgaQ'},
    ],
    java:`HashMap<Integer,Integer> map = new HashMap<>();
for(int i=0;i<nums.length;i++){
  int comp=target-nums[i];
  if(map.containsKey(comp)) return new int[]{map.get(comp),i};
  map.put(nums[i],i);
}`,
    python:`seen={}
for i,n in enumerate(nums):
    comp=target-n
    if comp in seen: return [seen[comp],i]
    seen[n]=i`
  },
  "Climbing Stairs":{
    videos:[
      {label:'NeetCode',url:'https://www.youtube.com/watch?v=Y0lT9Fck7qI'},
      {label:'Aditya Verma',url:'https://www.youtube.com/watch?v=n4dnW5X5EM4'},
    ],
    java:`int a=1,b=2;
if(n==1)return 1;
for(int i=3;i<=n;i++){int c=a+b;a=b;b=c;}
return b;`,
    python:`a,b=1,2
if n==1: return 1
for _ in range(n-2): a,b=b,a+b
return b`
  },
  "Coin Change":{
    videos:[
      {label:'NeetCode',url:'https://www.youtube.com/watch?v=H9bfqozjoqs'},
      {label:'Aditya Verma (DP)',url:'https://www.youtube.com/watch?v=opnGjKBmoro'},
    ],
    java:`int[] dp=new int[amount+1];
Arrays.fill(dp,amount+1); dp[0]=0;
for(int i=1;i<=amount;i++)
  for(int c:coins) if(c<=i) dp[i]=Math.min(dp[i],dp[i-c]+1);
return dp[amount]>amount?-1:dp[amount];`,
    python:`dp=[float('inf')]*(amount+1); dp[0]=0
for i in range(1,amount+1):
    for c in coins:
        if c<=i: dp[i]=min(dp[i],dp[i-c]+1)
return dp[amount] if dp[amount]!=float('inf') else -1`
  },
  "Maximum Subarray (Kadane's)":{
    videos:[
      {label:'NeetCode',url:'https://www.youtube.com/watch?v=5WZl3MMT0Eg'},
      {label:'Back To Back SWE',url:'https://www.youtube.com/watch?v=2MmGzdiKR9Y'},
    ],
    java:`int maxSum=nums[0],cur=nums[0];
for(int i=1;i<nums.length;i++){
  cur=Math.max(nums[i],cur+nums[i]);
  maxSum=Math.max(maxSum,cur);
}
return maxSum;`,
    python:`max_sum=cur=nums[0]
for n in nums[1:]:
    cur=max(n,cur+n)
    max_sum=max(max_sum,cur)
return max_sum`
  },
  "Number of Islands":{
    videos:[
      {label:'NeetCode',url:'https://www.youtube.com/watch?v=pV2kpPD66nE'},
      {label:'Striver',url:'https://www.youtube.com/watch?v=muncqlKJrH0'},
    ],
    java:`int count=0;
for(int r=0;r<grid.length;r++)
  for(int c=0;c<grid[0].length;c++)
    if(grid[r][c]=='1'){dfs(grid,r,c);count++;}
return count;
// DFS: mark '1' as '0', recurse 4 directions`,
    python:`def dfs(r,c):
    if not(0<=r<len(grid) and 0<=c<len(grid[0])): return
    if grid[r][c]!='1': return
    grid[r][c]='0'
    for dr,dc in[(1,0),(-1,0),(0,1),(0,-1)]: dfs(r+dr,c+dc)
count=0
for r in range(len(grid)):
    for c in range(len(grid[0])):
        if grid[r][c]=='1': dfs(r,c); count+=1
return count`
  },
  "Binary Search":{
    videos:[
      {label:'NeetCode',url:'https://www.youtube.com/watch?v=s4DPM8ct1pI'},
      {label:'CS Dojo',url:'https://www.youtube.com/watch?v=P3YID7liBug'},
    ],
    java:`int lo=0,hi=nums.length-1;
while(lo<=hi){
  int mid=lo+(hi-lo)/2;
  if(nums[mid]==target) return mid;
  if(nums[mid]<target) lo=mid+1;
  else hi=mid-1;
}
return -1;`,
    python:`lo,hi=0,len(nums)-1
while lo<=hi:
    mid=(lo+hi)//2
    if nums[mid]==target: return mid
    elif nums[mid]<target: lo=mid+1
    else: hi=mid-1
return -1`
  },
  "Valid Parentheses":{
    videos:[
      {label:'NeetCode',url:'https://www.youtube.com/watch?v=WTzjTskDFMg'},
      {label:'Kevin Naughton Jr',url:'https://www.youtube.com/watch?v=we3lLo-UHFQ'},
    ],
    java:`Deque<Character> st=new ArrayDeque<>();
for(char c:s.toCharArray()){
  if(c=='('||c=='['||c=='{'){st.push(c);continue;}
  if(st.isEmpty()) return false;
  char t=st.pop();
  if(c==')'&&t!='('||c==']'&&t!='['||c=='}'&&t!='{') return false;
}
return st.isEmpty();`,
    python:`st=[]; pairs={')':'(',']':'[','}':'{'}
for c in s:
    if c in '([{': st.append(c)
    elif not st or st[-1]!=pairs[c]: return False
    else: st.pop()
return not st`
  },
  "Merge Intervals":{
    videos:[
      {label:'NeetCode',url:'https://www.youtube.com/watch?v=44H3cEC2fFM'},
      {label:'Kevin Naughton Jr',url:'https://www.youtube.com/watch?v=qKczfGUrFY4'},
    ],
    java:`Arrays.sort(intervals,(a,b)->a[0]-b[0]);
List<int[]> res=new ArrayList<>(); res.add(intervals[0]);
for(int i=1;i<intervals.length;i++){
  int[] last=res.get(res.size()-1);
  if(intervals[i][0]<=last[1]) last[1]=Math.max(last[1],intervals[i][1]);
  else res.add(intervals[i]);
}
return res.toArray(new int[0][]);`,
    python:`intervals.sort(key=lambda x:x[0])
merged=[intervals[0]]
for s,e in intervals[1:]:
    if s<=merged[-1][1]: merged[-1][1]=max(merged[-1][1],e)
    else: merged.append([s,e])
return merged`
  },
  "Trapping Rain Water":{
    videos:[
      {label:'NeetCode',url:'https://www.youtube.com/watch?v=ZI2z5pq0TqA'},
      {label:'Tushar Roy',url:'https://www.youtube.com/watch?v=q7jhBmGADl4'},
    ],
    java:`int l=0,r=height.length-1,lm=0,rm=0,water=0;
while(l<r){
  if(height[l]<=height[r]){lm=Math.max(lm,height[l]);water+=lm-height[l++];}
  else{rm=Math.max(rm,height[r]);water+=rm-height[r--];}
}
return water;`,
    python:`l,r=0,len(height)-1; lm=rm=water=0
while l<r:
    if height[l]<=height[r]:
        lm=max(lm,height[l]); water+=lm-height[l]; l+=1
    else:
        rm=max(rm,height[r]); water+=rm-height[r]; r-=1
return water`
  },
  "Maximum Depth of Binary Tree":{
    videos:[
      {label:'NeetCode',url:'https://www.youtube.com/watch?v=hTM3phVI6YQ'},
      {label:'Kevin Naughton Jr',url:'https://www.youtube.com/watch?v=YHF9AA0eFRs'},
    ],
    java:`// DFS
if(root==null) return 0;
return 1+Math.max(maxDepth(root.left),maxDepth(root.right));`,
    python:`# DFS
if not root: return 0
return 1+max(maxDepth(root.left),maxDepth(root.right))`
  },
  "Reverse Linked List":{
    videos:[
      {label:'NeetCode',url:'https://www.youtube.com/watch?v=G0_I-ZF0S38'},
      {label:'Tushar Roy',url:'https://www.youtube.com/watch?v=sYcOK51hl-A'},
    ],
    java:`ListNode prev=null,curr=head;
while(curr!=null){ListNode next=curr.next;curr.next=prev;prev=curr;curr=next;}
return prev;`,
    python:`prev,curr=None,head
while curr:
    curr.next,prev,curr=prev,curr,curr.next
return prev`
  },
  "3Sum":{
    videos:[
      {label:'NeetCode',url:'https://www.youtube.com/watch?v=jzZsG8n2R9A'},
      {label:'Kevin Naughton Jr',url:'https://www.youtube.com/watch?v=jFq4zgEyvdA'},
    ],
    java:`Arrays.sort(nums); List<List<Integer>> res=new ArrayList<>();
for(int i=0;i<nums.length-2;i++){
  if(i>0&&nums[i]==nums[i-1]) continue;
  int l=i+1,r=nums.length-1;
  while(l<r){int s=nums[i]+nums[l]+nums[r];
    if(s==0){res.add(Arrays.asList(nums[i],nums[l++],nums[r--]));
      while(l<r&&nums[l]==nums[l-1])l++;while(l<r&&nums[r]==nums[r+1])r--;}
    else if(s<0) l++; else r--;}
}
return res;`,
    python:`nums.sort(); res=[]
for i in range(len(nums)-2):
    if i>0 and nums[i]==nums[i-1]: continue
    l,r=i+1,len(nums)-1
    while l<r:
        s=nums[i]+nums[l]+nums[r]
        if s==0:
            res.append([nums[i],nums[l],nums[r]])
            while l<r and nums[l]==nums[l+1]: l+=1
            while l<r and nums[r]==nums[r-1]: r-=1
            l+=1; r-=1
        elif s<0: l+=1
        else: r-=1
return res`
  },
};

function getCompletedDays(){
  try{return JSON.parse(localStorage.getItem('sf_completed')||'[]');}
  catch(e){return[];}
}

function markDayComplete(day){
  const done=getCompletedDays();
  if(!done.includes(day)){
    done.push(day);
    try{localStorage.setItem('sf_completed',JSON.stringify(done));}catch(e){}
  }
}

function completeDayBtn(day){
  sfx('correct');
  markDayComplete(day);
  setTimeout(()=>loadChallenge(),300);
}

function goToDay(d){
  d=Math.max(1,Math.min(DAILY.length,d));
  curChallengeDay=d;
  loadChallenge();
}

function loadChallenge(dayArg){
  if(dayArg!==undefined) curChallengeDay=Math.max(1,Math.min(DAILY.length,dayArg));
  const day=curChallengeDay;

  const lvLabel=['','Beginner','Beginner','Beginner','Beginner','Beginner','Beginner','Beginner',
    'Beginner','Beginner','Beginner','Intermediate','Intermediate','Intermediate','Intermediate',
    'Intermediate','Intermediate','Intermediate','Intermediate','Intermediate','Intermediate',
    'Advanced','Advanced','Advanced','Advanced','Advanced','Advanced','Advanced','Advanced','Advanced','Advanced',
    'Expert','Expert','Expert','Expert','Expert','Expert','Expert','Expert','Expert','Expert',
    'Expert','Expert','Expert','Expert','Expert'][day]||'Expert';
  const lvColor=day<=10?'tag-easy':day<=20?'tag-medium':day<=30?'tag-hard':'tag-hr';
  const lvBg=day<=10?'rgba(0,255,204,.1)':day<=20?'rgba(255,204,0,.1)':day<=30?'rgba(255,45,120,.1)':'rgba(0,204,255,.1)';
  const lvNeon=day<=10?'var(--neon1)':day<=20?'var(--neon4)':day<=30?'var(--neon3)':'var(--neon5)';
  const completedDays=getCompletedDays();

  const entry=DAILY[day-1];
  if(!entry){
    document.getElementById('challenge-content').innerHTML=`<div style="text-align:center;padding:60px;color:var(--muted);font-family:'JetBrains Mono',monospace;">Day ${day} coming soon — keep grinding!</div>`;
    return;
  }

  // Build day dots grid (grouped by 10 = each level)
  const groups=[
    {label:'🟢 Beginner',days:Array.from({length:10},(_,i)=>i+1)},
    {label:'🟡 Intermediate',days:Array.from({length:10},(_,i)=>i+11)},
    {label:'🔴 Advanced',days:Array.from({length:10},(_,i)=>i+21)},
    {label:'💎 Expert',days:Array.from({length:Math.max(0,DAILY.length-30)},(_,i)=>i+31)},
  ].filter(g=>g.days.length>0);

  const dotsHTML=groups.map((g,gi)=>{
    const groupColors=['rgba(0,255,204,.22)','rgba(255,204,0,.22)','rgba(255,50,80,.22)','rgba(0,153,255,.22)'];
    const groupBorders=['rgba(0,255,204,.5)','rgba(255,204,0,.5)','rgba(255,50,80,.5)','rgba(0,153,255,.5)'];
    const groupLabelColors=['#00ffcc','#ffcc00','#ff2d55','#0099ff'];
    return `
    <div style="margin-bottom:12px;padding:10px 14px;border-radius:10px;background:${groupColors[gi]||'rgba(255,255,255,.04)'};border:1px solid ${groupBorders[gi]||'rgba(255,255,255,.1)'};">
      <div style="font-family:'JetBrains Mono',monospace;font-size:.55rem;color:${groupLabelColors[gi]||'var(--muted)'};letter-spacing:.15em;margin-bottom:7px;font-weight:700;">${g.label}</div>
      <div style="display:flex;gap:5px;flex-wrap:wrap;">
        ${g.days.map(d=>{
          const isCur=d===day;
          const isDone=completedDays.includes(d);
          return `<div onclick="goToDay(${d})" title="Day ${d}" class="chal-day-dot${isCur?' active':isDone?' done':''}">${d}</div>`;
        }).join('')}
      </div>
    </div>
  `}).join('');

  document.getElementById('challenge-content').innerHTML=`
    <!-- Day Navigation Bar -->
    <div id="challenge-nav-bar">
      <!-- Prev button -->
      ${day>1
        ? `<button class="chal-nav-btn" onclick="goToDay(${day-1})" style="border-color:var(--neon5);color:var(--neon5);background:rgba(0,204,255,.08);" onmouseover="this.style.background='rgba(0,204,255,.2)'" onmouseout="this.style.background='rgba(0,204,255,.08)'">⬅ Day ${day-1}</button>`
        : `<button class="chal-nav-btn" disabled style="border-color:rgba(255,255,255,.1);color:rgba(255,255,255,.2);cursor:not-allowed;background:transparent;">⬅ Start</button>`}

      <!-- Day counter + quick input -->
      <div style="display:flex;flex-direction:column;align-items:center;gap:5px;">
        <div style="font-family:'Orbitron',monospace;font-size:1.4rem;font-weight:900;color:${lvNeon};text-shadow:0 0 16px ${lvNeon};">DAY ${String(day).padStart(2,'0')}</div>
        <div style="display:flex;align-items:center;gap:6px;">
          <span style="font-family:'JetBrains Mono',monospace;font-size:.58rem;color:var(--muted);">Jump:</span>
          <input type="number" id="day-jump" min="1" max="${DAILY.length}" value="${day}"
            style="width:54px;background:rgba(13,0,37,.8);border:1px solid var(--border);border-radius:5px;padding:4px 7px;color:var(--text);font-family:'JetBrains Mono',monospace;font-size:.72rem;"
            onchange="goToDay(parseInt(this.value)||1)"
            onkeydown="if(event.key==='Enter')goToDay(parseInt(this.value)||1)">
          <button onclick="goToDay(parseInt(document.getElementById('day-jump').value)||1)" style="padding:4px 10px;border:1px solid ${lvNeon};background:transparent;color:${lvNeon};border-radius:4px;cursor:pointer;font-family:'JetBrains Mono',monospace;font-size:.6rem;">GO</button>
        </div>
        <span class="card-tag ${lvColor}">${lvLabel}</span>
      </div>

      <!-- Next button -->
      ${day<DAILY.length
        ? `<button class="chal-nav-btn" onclick="goToDay(${day+1})" style="border-color:${lvNeon};color:${lvNeon};background:${lvBg};" onmouseover="this.style.background='rgba(255,255,255,.12)'" onmouseout="this.style.background='${lvBg}'">Day ${day+1} ➡</button>`
        : `<div style="padding:10px 18px;border:2px solid var(--neon1);border-radius:10px;font-family:'Orbitron',monospace;font-size:.8rem;color:var(--neon1);background:rgba(0,255,204,.1);">🏆 DONE!</div>`}
    </div>

    <!-- Day Dots Grid -->
    <div style="padding:16px 18px;background:rgba(255,45,120,.08);border:1px solid rgba(255,45,120,.28);border-radius:12px;margin-bottom:22px;">
      <div style="font-family:'JetBrains Mono',monospace;font-size:.6rem;color:var(--muted);margin-bottom:12px;display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
        <span>📅 NAVIGATE ALL ${DAILY.length} DAYS</span>
        <span style="display:flex;align-items:center;gap:4px;"><span class="chal-day-dot active" style="width:18px;height:18px;font-size:.5rem;pointer-events:none;">${day}</span> Current</span>
        <span style="display:flex;align-items:center;gap:4px;"><span class="chal-day-dot done" style="width:18px;height:18px;pointer-events:none;"></span> Completed</span>
      </div>
      ${dotsHTML}
    </div>

    <!-- Day header -->
    <div style="display:flex;align-items:center;gap:14px;margin-bottom:18px;padding:16px 20px;border:1px solid ${lvNeon}44;border-radius:12px;background:${lvBg};">
      <div style="font-family:'Orbitron',monospace;font-size:1.6rem;color:${lvNeon};font-weight:900;min-width:60px;text-shadow:0 0 12px ${lvNeon};">DAY<br>${String(day).padStart(2,'0')}</div>
      <div>
        <span class="card-tag ${lvColor}" style="margin-bottom:6px;display:inline-block;">${lvLabel}</span>
        <div style="font-family:'JetBrains Mono',monospace;font-size:.72rem;color:var(--muted);">Complete all 4 tasks below at your own pace</div>
      </div>
      ${completedDays.includes(day)?`<span style="margin-left:auto;padding:6px 14px;background:rgba(0,255,204,.15);border:1px solid rgba(0,255,204,.4);border-radius:20px;font-family:'JetBrains Mono',monospace;font-size:.62rem;color:var(--neon1);">✅ COMPLETED</span>`:
      `<button onclick="completeDayBtn(${day})" style="margin-left:auto;padding:8px 16px;border:1px solid rgba(0,255,204,.5);background:rgba(0,255,204,.1);color:var(--neon1);border-radius:8px;cursor:pointer;font-family:'JetBrains Mono',monospace;font-size:.65rem;transition:all .2s;" onmouseover="this.style.background='rgba(0,255,204,.22)'" onmouseout="this.style.background='rgba(0,255,204,.1)'">✓ Mark Done</button>`}
    </div>

    <!-- DSA Challenge -->
    <div class="challenge-dsa" style="margin-bottom:16px;border:1px solid ${lvNeon}33;border-radius:12px;padding:18px 20px;background:rgba(0,0,0,.15);">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;flex-wrap:wrap;">
        <span style="font-family:'JetBrains Mono',monospace;font-size:.62rem;letter-spacing:.2em;color:var(--neon2);">📊 DSA PROBLEM</span>
        <span class="card-tag tag-${entry.dsa.lv.toLowerCase()}">${entry.dsa.lv}</span>
      </div>
      <div style="font-family:'Orbitron',monospace;font-size:1.05rem;color:#fff;margin-bottom:10px;line-height:1.4;">${entry.dsa.t}</div>
      <div style="font-size:.88rem;color:var(--text);line-height:1.65;">${entry.dsa.desc}</div>
      <div style="margin-top:12px;padding:10px;background:rgba(0,255,204,.05);border-radius:8px;border-left:3px solid var(--neon2);">
        <span style="font-family:'JetBrains Mono',monospace;font-size:.68rem;color:var(--neon2);">💡 Try solving yourself first! Solutions below.</span>
      </div>
      ${(function(){
        const cs=CHALLENGE_SOL[entry.dsa.t];
        const r=DSA_RESOURCES[entry.dsa.t];
        let html='';
        if(cs&&cs.videos&&cs.videos.length){
          const vids=cs.videos.map(v=>`<a href="${v.url}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:5px;padding:6px 12px;background:rgba(255,0,0,.12);border:1px solid rgba(255,0,0,.3);border-radius:5px;text-decoration:none;font-family:'JetBrains Mono',monospace;font-size:.62rem;color:#ff5555;white-space:nowrap;transition:all .2s;" onmouseover="this.style.background='rgba(255,0,0,.22)'" onmouseout="this.style.background='rgba(255,0,0,.12)'">▶ ${v.label}</a>`).join('');
          html+=`<div style="margin-top:16px;padding:10px 14px;background:rgba(255,0,0,.06);border:1px solid rgba(255,0,0,.2);border-radius:8px;">
            <div style="font-family:'JetBrains Mono',monospace;font-size:.55rem;color:#ff5555;letter-spacing:.13em;margin-bottom:7px;">▶ VIDEO SOLUTIONS</div>
            <div style="display:flex;gap:6px;flex-wrap:wrap;">${vids}</div>
          </div>`;
        }
        if(r&&r.javaYT&&r.javaYT.length){
          const jYT=r.javaYT.map(s=>`<a href="${s.url}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:5px;padding:6px 12px;background:rgba(255,107,53,.12);border:1px solid rgba(255,107,53,.35);border-radius:5px;text-decoration:none;font-family:'JetBrains Mono',monospace;font-size:.6rem;color:#ff6b35;white-space:nowrap;transition:all .2s;" onmouseover="this.style.background='rgba(255,107,53,.25)'" onmouseout="this.style.background='rgba(255,107,53,.12)'">☕▶ ${s.label}</a>`).join('');
          html+=`<div style="margin-top:8px;padding:10px 14px;background:rgba(255,107,53,.06);border:1px solid rgba(255,107,53,.2);border-radius:8px;">
            <div style="font-family:'JetBrains Mono',monospace;font-size:.55rem;color:#ff6b35;letter-spacing:.13em;margin-bottom:7px;">☕ JAVA VIDEO SOLUTIONS</div>
            <div style="display:flex;gap:6px;flex-wrap:wrap;">${jYT}</div>
          </div>`;
        }
        if(r&&r.pythonYT&&r.pythonYT.length){
          const pYT=r.pythonYT.map(s=>`<a href="${s.url}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:5px;padding:6px 12px;background:rgba(55,118,171,.14);border:1px solid rgba(100,149,237,.35);border-radius:5px;text-decoration:none;font-family:'JetBrains Mono',monospace;font-size:.6rem;color:#87ceeb;white-space:nowrap;transition:all .2s;" onmouseover="this.style.background='rgba(55,118,171,.28)'" onmouseout="this.style.background='rgba(55,118,171,.14)'">🐍▶ ${s.label}</a>`).join('');
          html+=`<div style="margin-top:8px;padding:10px 14px;background:rgba(55,118,171,.06);border:1px solid rgba(100,149,237,.2);border-radius:8px;">
            <div style="font-family:'JetBrains Mono',monospace;font-size:.55rem;color:#87ceeb;letter-spacing:.13em;margin-bottom:7px;">🐍 PYTHON VIDEO SOLUTIONS</div>
            <div style="display:flex;gap:6px;flex-wrap:wrap;">${pYT}</div>
          </div>`;
        }
        if(r&&r.solutions&&r.solutions.length){
          const solHTML=r.solutions.map(s=>`<a href="${s.url}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:5px;padding:6px 12px;background:rgba(0,255,204,.07);border:1px solid rgba(0,255,204,.25);border-radius:5px;text-decoration:none;font-family:'JetBrains Mono',monospace;font-size:.6rem;color:var(--neon1);white-space:nowrap;transition:all .2s;" onmouseover="this.style.background='rgba(0,255,204,.17)'" onmouseout="this.style.background='rgba(0,255,204,.07)'">🔗 ${s.label}</a>`).join('');
          html+=`<div style="margin-top:8px;padding:10px 14px;background:rgba(0,255,204,.04);border:1px solid rgba(0,255,204,.18);border-radius:8px;">
            <div style="font-family:'JetBrains Mono',monospace;font-size:.55rem;color:var(--neon1);letter-spacing:.13em;margin-bottom:7px;">🔗 WRITTEN SOLUTIONS</div>
            <div style="display:flex;gap:6px;flex-wrap:wrap;">${solHTML}</div>
          </div>`;
        }
        return html;
      })()}
    </div>

    <!-- Domain Tasks Grid -->
    <div class="domain-challenge-grid" style="margin-bottom:16px;">
      <div class="dc-block fullstack">
        <div class="dc-domain-tag" style="color:var(--neon5);margin-bottom:10px;">⚡ FULL STACK</div>
        <div style="font-family:'JetBrains Mono',monospace;font-size:.65rem;color:var(--neon5);margin-bottom:10px;padding:4px 10px;background:rgba(0,204,255,.1);border-radius:20px;display:inline-block;">GOAL: ${entry.fs.goal}</div>
        <div style="color:var(--text);font-size:.88rem;line-height:1.65;">${entry.fs.task}</div>
      </div>
      <div class="dc-block cyber">
        <div class="dc-domain-tag" style="color:var(--neon3);margin-bottom:10px;">🔒 CYBERSECURITY</div>
        <div style="font-family:'JetBrains Mono',monospace;font-size:.65rem;color:var(--neon3);margin-bottom:10px;padding:4px 10px;background:rgba(255,45,120,.1);border-radius:20px;display:inline-block;">GOAL: ${entry.cy.goal}</div>
        <div style="color:var(--text);font-size:.88rem;line-height:1.65;">${entry.cy.task}</div>
      </div>
      <div class="dc-block ai-block">
        <div class="dc-domain-tag" style="color:var(--neon4);margin-bottom:10px;">🤖 AI / ML</div>
        <div style="font-family:'JetBrains Mono',monospace;font-size:.65rem;color:var(--neon4);margin-bottom:10px;padding:4px 10px;background:rgba(255,204,0,.1);border-radius:20px;display:inline-block;">GOAL: ${entry.ai.goal}</div>
        <div style="color:var(--text);font-size:.88rem;line-height:1.65;">${entry.ai.task}</div>
      </div>
    </div>

    <!-- Bottom Navigation -->
    <div style="display:flex;gap:14px;justify-content:space-between;align-items:center;flex-wrap:wrap;padding:16px 20px;border:1px solid rgba(255,45,120,.2);border-radius:14px;background:rgba(255,45,120,.04);margin-bottom:16px;">
      ${day>1?`<button onclick="goToDay(${day-1})" style="padding:12px 28px;border:2px solid var(--neon5);background:rgba(0,204,255,.08);color:var(--neon5);border-radius:10px;cursor:pointer;font-family:'JetBrains Mono',monospace;font-size:.82rem;font-weight:700;transition:all .2s;" onmouseover="this.style.background='rgba(0,204,255,.2)'" onmouseout="this.style.background='rgba(0,204,255,.08)'">⬅ DAY ${day-1}</button>`:`<div></div>`}
      <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
        <div style="font-family:'Orbitron',monospace;font-size:1.1rem;color:${lvNeon};font-weight:900;text-shadow:0 0 12px ${lvNeon};">DAY ${String(day).padStart(2,'0')} / ${DAILY.length}</div>
        <div style="font-family:'JetBrains Mono',monospace;font-size:.55rem;color:var(--muted);">${completedDays.length} days completed</div>
      </div>
      ${day<DAILY.length?`<button onclick="goToDay(${day+1})" style="padding:12px 28px;border:2px solid ${lvNeon};background:${lvBg};color:${lvNeon};border-radius:10px;cursor:pointer;font-family:'JetBrains Mono',monospace;font-size:.82rem;font-weight:700;transition:all .2s;" onmouseover="this.style.background='rgba(255,255,255,.12)'" onmouseout="this.style.background='${lvBg}'">DAY ${day+1} ➡</button>`:`<div style="color:var(--neon1);font-family:'Orbitron',monospace;font-size:.82rem;font-weight:700;padding:12px 20px;border:2px solid var(--neon1);border-radius:10px;background:rgba(0,255,204,.1);">🏆 ALL DONE!</div>`}
    </div>

    ${entry.study?`
    <div style="margin-top:4px;padding:20px;background:rgba(255,0,0,.04);border:1px solid rgba(255,68,68,.25);border-radius:14px;">
      <div style="font-family:'Orbitron',monospace;font-size:.78rem;color:#ff4444;margin-bottom:14px;letter-spacing:.1em;">▶ TODAY'S STUDY RESOURCES</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:10px;">
        ${Object.entries(entry.study).map(([domain,s])=>{
          const colors={dsa:'var(--neon2)',fs:'var(--neon5)',cy:'var(--neon3)',ai:'var(--neon4)'};
          const labels={dsa:'📊 DSA',fs:'⚡ Full Stack',cy:'🔒 Cybersecurity',ai:'🤖 AI/ML'};
          const col=colors[domain]||'var(--neon1)';
          return `<a href="${s.url}" target="_blank" rel="noopener" style="display:flex;flex-direction:column;gap:6px;padding:12px 14px;border:1px solid ${col}33;border-left:3px solid ${col};border-radius:0 10px 10px 0;text-decoration:none;background:rgba(0,0,0,.2);transition:all .2s;" onmouseover="this.style.background='rgba(255,255,255,.05)'" onmouseout="this.style.background='rgba(0,0,0,.2)'">
            <div style="font-family:'JetBrains Mono',monospace;font-size:.58rem;color:${col};letter-spacing:.1em;">${labels[domain]||domain}</div>
            <div style="font-family:'Rajdhani',sans-serif;font-weight:700;color:#fff;font-size:.88rem;line-height:1.3;">${s.title}</div>
            <div style="font-family:'JetBrains Mono',monospace;font-size:.58rem;color:var(--muted);">${s.channel} · ${s.dur||s.duration}</div>
            <div style="font-family:'JetBrains Mono',monospace;font-size:.6rem;color:${col};margin-top:2px;">▶ WATCH FREE →</div>
          </a>`;
        }).join('')}
      </div>
    </div>`:''}
  `;
}



// ══════════════════════════════════════════════════
//  INTERVIEW SECTION
// ══════════════════════════════════════════════════
function renderInterview(){
  const cats=['All','HR','Technical'];
  const catInfo={
    All:{col:'#00ccff',label:'All Interview Questions'},
    HR:{col:'#00ffcc',label:'HR & Behavioural Questions'},
    Technical:{col:'#7b2fff',label:'Technical Interview Questions'},
  };
  const info=catInfo[iqFilter]||catInfo.All;
  document.getElementById('iq-tabs').innerHTML=cats.map(c=>{
    const ci=catInfo[c];
    const isA=c===iqFilter;
    return `<button class="tab ${isA?'active':''}" onclick="setIQFilter('${c}')"
      style="border-color:${ci.col}${isA?'':'55'};color:${isA?ci.col:ci.col+'99'};background:linear-gradient(135deg,${ci.col}${isA?'30':'12'},${ci.col}${isA?'15':'06'});${isA?'box-shadow:0 0 20px '+ci.col+'55,inset 0 0 12px '+ci.col+'20;font-weight:700;':''}">
      ${c==='HR'?'🤝':c==='Technical'?'💻':'📋'} ${c}</button>`;
  }).join('');
  const list=IQA.filter(q=>iqFilter==='All'||q.cat===iqFilter);
  document.getElementById('iq-list').innerHTML=`
    <div class="sub-panel" style="background:linear-gradient(135deg,${info.col}28,${info.col}0a);border-color:${info.col}66;padding:18px;position:relative;overflow:hidden;">
      <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,${info.col},${info.col}55);"></div>
      <div class="sub-panel-label" style="color:${info.col};">${iqFilter==='HR'?'🤝':iqFilter==='Technical'?'💻':'📋'} ${info.label} — ${list.length} questions</div>
      <div style="display:flex;flex-direction:column;gap:8px;">
        ${list.map((q,i)=>`
          <div class="iq-card ${q.cat==='HR'?'iq-hr':'iq-tech'}" id="iq${i}">
            <div class="iq-head" onclick="toggleIQ(${i})">
              <span class="card-tag ${q.cat==='HR'?'tag-hr':'tag-tech'}">${q.cat}</span>
              <span class="iq-q">Q${i+1}. ${q.q}</span>
              <span style="color:var(--muted);font-size:.75rem">▼</span>
            </div>
            <div class="iq-body"><pre>${q.ans}</pre></div>
          </div>`).join('')}
      </div>
    </div>`;
}
function setIQFilter(f){iqFilter=f;renderInterview();}
function toggleIQ(i){document.getElementById('iq'+i).classList.toggle('open');sfx('click');}

// ══════════════════════════════════════════════════
//  APTITUDE SECTION
// ══════════════════════════════════════════════════
const APTITUDE_REALLIFE={
  "Number System":"🏦 Banks use divisibility rules to detect fraud — card numbers use Luhn's algorithm (mod 10 check). UPI transaction IDs use digital root checks.",
  "Percentages":"🛒 E-commerce: 20% off then 10% off ≠ 30% off. Use successive % formula. EMI calculators, tax slabs, salary hike negotiations all use percentage math.",
  "Profit & Loss":"📦 Flipkart/Amazon sellers set prices using cost price + desired % profit. Markdown pricing, discount strategies, wholesale vs retail all use P&L concepts.",
  "Time & Work":"⚙️ Sprint planning in Agile: if 3 devs finish a feature in 5 days, how long for 2 devs? AWS Lambda billing = function duration × requests. Work-rate problems appear in SLA calculations.",
  "Speed, Distance, Time":"🚗 Google Maps ETA uses avg speed × time. Train scheduling, flight time zones, relative speed for overtaking — all SDT. Networking: packet latency = distance / (speed of light in fiber).",
  "Simple & Compound Interest":"💰 FD vs SIP returns: bank FDs use SI, mutual funds compound annually. Credit card outstanding compounds monthly! Loan amortization uses CI math.",
  "Ratio & Proportion":"🎨 CSS design: viewport ratios, aspect ratios (16:9). Recipe APIs scale ingredients proportionally. Database sharding splits load in ratio to server capacity.",
  "Permutation & Combination":"🔐 Password strength: 8 chars from 26 letters + 10 digits = 36^8 combinations (nCr for permutations). OTP generation, lottery odds, A/B test variants.",
  "Probability":"🤖 Machine learning: Naive Bayes spam filter uses conditional probability. A/B testing uses statistical significance (p-value). Risk assessment in cybersecurity uses probability trees.",
  "Geometry & Mensuration":"📐 Game dev uses circle/sphere collision detection. Image processing: cropping uses area formulas. CSS border-radius, SVG paths use geometric formulas.",
  "Data Interpretation":"📊 Every dashboards in product companies — MAU, retention curves, funnel conversion. Data analysts use bar/line charts for business decisions. SQL aggregation = DI math.",
  "Logical Reasoning":"🧩 Coding interviews often ask logical puzzles. Code debugging = finding the pattern in a sequence of errors. Database query optimization uses systematic elimination.",
};

function renderAptitude(){
  const topics=APTITUDE.map(a=>a.topic);
  document.getElementById('apt-tabs').innerHTML=`
    <button class="tab ${aptFilter==='All'?'active':''}" onclick="setAptFilter('All')"
      style="border-color:${aptFilter==='All'?'#ffcc00':'rgba(255,204,0,.4)'};color:${aptFilter==='All'?'#ffcc00':'rgba(255,204,0,.7)'};background:linear-gradient(135deg,rgba(255,204,0,${aptFilter==='All'?'.28':'.10'}),rgba(255,204,0,${aptFilter==='All'?'.14':'.05'}));${aptFilter==='All'?'box-shadow:0 0 20px rgba(255,204,0,.5),inset 0 0 12px rgba(255,204,0,.2);font-weight:700;':''}">
      📐 All Topics</button>
    ${topics.map(t=>`<button class="tab ${t===aptFilter?'active':''}" onclick="setAptFilter('${t}')"
      style="border-color:${t===aptFilter?'#ffcc00':'rgba(255,204,0,.35)'};color:${t===aptFilter?'#ffcc00':'rgba(255,204,0,.65)'};background:rgba(255,204,0,${t===aptFilter?'.22':'.08'});${t===aptFilter?'box-shadow:0 0 18px rgba(255,204,0,.45);font-weight:700;':''}">
      ${t}</button>`).join('')}
  `;
  const data=aptFilter==='All'?APTITUDE:APTITUDE.filter(a=>a.topic===aptFilter);
  document.getElementById('apt-content').innerHTML=`
    <div class="sub-panel sub-aptitude">
      <div class="sub-panel-label" style="color:var(--neon4);">📐 ${aptFilter==='All'?'All Aptitude Topics':'Topic: '+aptFilter}</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:14px;">
        ${data.map(a=>`
          <div class="apt-card">
            <div class="apt-topic">${a.icon} ${a.topic}</div>
            ${APTITUDE_REALLIFE[a.topic]?`
              <div style="margin-bottom:12px;padding:10px 14px;background:rgba(0,255,204,.06);border:1px solid rgba(0,255,204,.2);border-radius:8px;font-family:'JetBrains Mono',monospace;font-size:.68rem;color:var(--neon1);line-height:1.6;">
                <span style="font-size:.6rem;letter-spacing:.1em;display:block;margin-bottom:4px;color:var(--muted);">💡 REAL-LIFE USE</span>
                ${APTITUDE_REALLIFE[a.topic]}
              </div>
            `:''}
            ${a.tips.map(t=>`<div class="apt-tip">${t}</div>`).join('')}
          </div>
        `).join('')}
      </div>
    </div>`;
}
function setAptFilter(f){aptFilter=f;renderAptitude();}

// ══════════════════════════════════════════════════
//  CERTIFICATES
// ══════════════════════════════════════════════════
function renderCerts(){
  const domains=['Cybersecurity','Full Stack','AI'];
  const domData={Cybersecurity:{col:'#ff2d55',cls:'sub-cyber',icon:'🔒'},['Full Stack']:{col:'#0099ff',cls:'sub-fullstack',icon:'⚡'},AI:{col:'#00e676',cls:'sub-ai',icon:'🤖'}};
  const dm=domData[certDomain]||domData['Cybersecurity'];
  document.getElementById('cert-tabs').innerHTML=domains.map(d=>{
    const dc=domData[d];
    const isA=d===certDomain;
    return `<button class="tab ${isA?'active':''}" onclick="setCertDomain('${d}')"
      style="border-color:${dc.col}${isA?'':'55'};color:${isA?dc.col:dc.col+'99'};background:linear-gradient(135deg,${dc.col}${isA?'30':'12'},${dc.col}${isA?'15':'06'});${isA?'box-shadow:0 0 20px '+dc.col+'50,inset 0 0 12px '+dc.col+'20;font-weight:700;':''}">
      ${dc.icon} ${d}</button>`;
  }).join('');
  const data=CERTS[certDomain]||[];
  document.getElementById('cert-content').innerHTML=`
    <div class="sub-panel ${dm.cls}" style="border-color:${dm.col}66;background:linear-gradient(135deg,${dm.col}28,${dm.col}0a);">
      <div class="sub-panel-label" style="color:${dm.col};font-size:.68rem;">${dm.icon} ${certDomain} Certifications</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:14px;">
        ${data.map(c=>`
          <a href="${c.url||'#'}" target="_blank" rel="noopener noreferrer" style="text-decoration:none;display:block;">
          <div class="cert-card ${certDomain==='Cybersecurity'?'cyber-cert':certDomain==='Full Stack'?'fs-cert':'ai-cert'}" style="--sec-col:${dm.col};cursor:pointer;transition:all .25s;position:relative;overflow:hidden;">
            <div style="position:absolute;top:10px;right:12px;font-size:.65rem;font-family:'JetBrains Mono',monospace;color:${dm.col};opacity:.7;">↗ OPEN</div>
            <span class="cert-level ${c.l.toLowerCase().replace(' ','-')}">${c.l}</span>
            <div class="cert-name" style="margin-right:36px;">${c.n}</div>
            <div class="cert-val">${c.v}</div>
          </div>
          </a>
        `).join('')}
      </div>
    </div>`;
}
function setCertDomain(d){certDomain=d;renderCerts();}

// ══════════════════════════════════════════════════
//  HACKATHON
// ══════════════════════════════════════════════════
function renderHack(){
  const domains=['Cybersecurity','Full Stack','AI'];
  const domData={Cybersecurity:{col:'#ff2d55',cls:'sub-cyber',icon:'🔒'},['Full Stack']:{col:'#0099ff',cls:'sub-fullstack',icon:'⚡'},AI:{col:'#00e676',cls:'sub-ai',icon:'🤖'}};
  const dm=domData[hackDomain]||domData['Cybersecurity'];
  document.getElementById('hack-tabs').innerHTML=domains.map(d=>{
    const dc=domData[d];
    const isA=d===hackDomain;
    return `<button class="tab ${isA?'active':''}" onclick="setHackDomain('${d}')"
      style="border-color:${dc.col}${isA?'':'55'};color:${isA?dc.col:dc.col+'99'};background:linear-gradient(135deg,${dc.col}${isA?'30':'12'},${dc.col}${isA?'15':'06'});${isA?'box-shadow:0 0 20px '+dc.col+'50,inset 0 0 12px '+dc.col+'20;font-weight:700;':''}">
      ${dc.icon} ${d}</button>`;
  }).join('');
  const data=HACK[hackDomain];
  document.getElementById('hack-content').innerHTML=`
    <div class="sub-panel ${dm.cls}" style="border-color:${dm.col}66;background:linear-gradient(135deg,${dm.col}28,${dm.col}0a);">
      <div class="sub-panel-label" style="color:${dm.col};">${dm.icon} ${hackDomain} Hackathon Strategy</div>
      <div class="grid-2" style="margin-bottom:16px;">
        <div style="border:1px solid ${dm.col}55;background:${dm.col}14;border-radius:10px;padding:18px;border-left:5px solid ${dm.col};box-shadow:inset 0 0 20px ${dm.col}0a;">
          <div style="font-family:'Orbitron',monospace;font-size:.85rem;color:${dm.col};margin-bottom:14px">⚡ WINNING STRATEGIES</div>
          ${data.tips.map(t=>`<div class="hack-tip" style="border-left-color:${dm.col};background:${dm.col}0a;">${t}</div>`).join('')}
        </div>
        <div style="border:1px solid rgba(123,47,255,.25);background:rgba(123,47,255,.06);border-radius:10px;padding:18px;border-left:4px solid var(--neon2);">
          <div style="font-family:'Orbitron',monospace;font-size:.85rem;color:var(--neon2);margin-bottom:14px">🔧 RECOMMENDED TECH STACK</div>
          ${data.stack.map(s=>`<a href="${s.url}" target="_blank" rel="noopener" class="hack-tip" style="display:flex;align-items:center;gap:8px;text-decoration:none;color:var(--text);transition:all .2s;border-left-color:var(--neon2);background:rgba(123,47,255,.06);" onmouseover="this.style.color='var(--neon2)'" onmouseout="this.style.color='var(--text)'">🔗 ${s.name}</a>`).join('')}
        </div>
      </div>
    </div>
    <div style="border:1px solid rgba(0,255,204,.2);border-radius:14px;padding:20px;margin-bottom:16px;background:linear-gradient(135deg,rgba(0,255,204,.05),rgba(123,47,255,.07));">
      <div style="font-family:'Orbitron',monospace;font-size:.85rem;color:var(--neon1);margin-bottom:18px">💬 HACKATHON MINDSET — FUEL YOUR GRIND</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:14px;">
        ${[
          {q:"The best hacks aren't written under pressure — they're written by people who practiced under pressure.",a:"— HackTheBox Community"},
          {q:"You don't rise to the level of your goals. You fall to the level of your systems. Build systems.",a:"— James Clear"},
          {q:"At a hackathon, a working prototype with a great story beats a perfect product with no demo.",a:"— MLH Veteran"},
          {q:"The team that ships first learns first. Done is better than perfect — especially at hour 12.",a:"— Y Combinator Wisdom"},
          {q:"Every expert was once a beginner who kept showing up. Every winning hackathon team was once lost at 3 AM.",a:"— Praveen Rathod"},
          {q:"In a hackathon, sleep is optional. Passion is not. Build something you wish existed.",a:"— Devpost Community"},
          {q:"Hackers don't ask for permission to solve problems. They identify the constraint and route around it.",a:"— Security Mindset"},
          {q:"The fastest way to learn anything is to build something real with it, under a deadline, with people smarter than you.",a:"— Startup Culture"},
        ].map(m=>`
          <div style="padding:16px;border:1px solid rgba(0,255,204,.15);border-left:3px solid var(--neon1);border-radius:0 10px 10px 0;background:rgba(0,255,204,.03);">
            <div style="font-size:.83rem;color:var(--text);line-height:1.65;font-style:italic;margin-bottom:8px;">"${m.q}"</div>
            <div style="font-family:'JetBrains Mono',monospace;font-size:.62rem;color:var(--neon1);">${m.a}</div>
          </div>`).join('')}
      </div>
    </div>
    <div style="border:1px solid rgba(255,45,120,.2);border-radius:14px;padding:20px;margin-bottom:16px;background:linear-gradient(135deg,rgba(255,45,120,.05),rgba(255,45,120,.02));">
      <div style="font-family:'Orbitron',monospace;font-size:.85rem;color:var(--neon3);margin-bottom:14px">🏆 WHERE TO COMPETE — PLATFORMS & EVENTS</div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;">
        ${data.platforms.map(p=>`<a href="${p.url}" target="_blank" rel="noopener" style="padding:8px 16px;border:1px solid rgba(255,45,120,.35);background:rgba(255,45,120,.08);border-radius:20px;font-family:'JetBrains Mono',monospace;font-size:.68rem;color:var(--neon3);text-decoration:none;transition:all .2s;display:inline-flex;align-items:center;gap:5px;" onmouseover="this.style.background='rgba(255,45,120,.2)'" onmouseout="this.style.background='rgba(255,45,120,.08)'">🔗 ${p.name}</a>`).join('')}
      </div>
    </div>
    <div style="border:1px solid rgba(123,47,255,.25);border-radius:14px;padding:20px;background:linear-gradient(135deg,rgba(123,47,255,.08),rgba(0,255,204,.03));">
      <div style="font-family:'Orbitron',monospace;font-size:.85rem;color:var(--neon2);margin-bottom:12px">📋 HACKATHON DAY-OF CHECKLIST</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:8px;">
        ${['✅ Read the problem statement 3× before writing code','✅ Set up GitHub repo in first 10 minutes','✅ Assign clear roles: frontend / backend / ML / pitch','✅ Deploy early, iterate often — always have a live URL','✅ Build the demo flow, not all features','✅ Prepare a 60-second elevator pitch','✅ Add README with problem, solution, tech stack','✅ Screenshots/video backup if live demo can fail'].map(c=>`<div style="padding:8px 12px;font-size:.78rem;color:var(--text);border-left:3px solid var(--neon2);background:rgba(123,47,255,.06);border-radius:0 6px 6px 0;">${c}</div>`).join('')}
      </div>
    </div>
  `;
}
function setHackDomain(d){hackDomain=d;renderHack();}

// ══════════════════════════════════════════════════
//  GATE SECTION
// ══════════════════════════════════════════════════
const GATE_DATA={
  'Subjects':[
    {icon:'🔢',title:'Discrete Mathematics',weight:'8-12%',topics:[
      'Propositional & First-Order Logic — truth tables, predicates, quantifiers',
      'Set Theory — Venn diagrams, power sets, Cartesian product, relations',
      'Functions — injective, surjective, bijective, composition, inverse',
      'Combinatorics — permutations, combinations, pigeonhole principle',
      'Graph Theory — Euler/Hamiltonian paths, spanning trees, planarity',
      'Recurrence Relations — solving linear recurrences, master theorem',
      'Algebraic Structures — groups, rings, fields (basics)',
    ]},
    {icon:'📐',title:'Engineering Mathematics',weight:'10-15%',topics:[
      'Linear Algebra — rank, eigenvalues, eigenvectors, matrix operations',
      'Calculus — limits, derivatives, integrals, maxima/minima',
      'Probability — conditional probability, Bayes theorem, distributions',
      'Statistics — mean, variance, standard deviation, hypothesis testing',
      'Differential Equations — first-order ODEs, linear equations',
      'Numerical Methods — Newton-Raphson, Gauss elimination',
    ]},
    {icon:'🖥️',title:'Digital Logic',weight:'5-8%',topics:[
      'Boolean Algebra — K-maps, simplification, De Morgan\'s laws',
      'Combinational Circuits — adders, multiplexers, decoders, encoders',
      'Sequential Circuits — flip-flops (SR, JK, D, T), latches',
      'Finite State Machines — Mealy and Moore machines, state minimization',
      'Number Systems — binary, octal, hexadecimal conversions, 2\'s complement',
    ]},
    {icon:'⚙️',title:'Computer Organization',weight:'5-8%',topics:[
      'Machine Instructions — addressing modes, instruction formats',
      'CPU Design — ALU, control unit, datapath, pipelining hazards',
      'Memory Hierarchy — cache (direct-mapped, set-associative, fully-associative)',
      'Virtual Memory — paging, segmentation, TLB, page replacement algorithms',
      'I/O Systems — DMA, interrupts, buses',
    ]},
    {icon:'📋',title:'Programming & DS',weight:'10-15%',topics:[
      'C Programming — pointers, arrays, structures, recursion, file I/O',
      'Arrays & Strings — searching, sorting algorithms (complexity analysis)',
      'Linked Lists — single, double, circular; insertion, deletion',
      'Stacks & Queues — infix/postfix conversion, BFS/DFS implementations',
      'Trees — BST, AVL, B-Trees, heaps, tree traversals',
      'Graphs — BFS, DFS, Dijkstra, Bellman-Ford, Floyd-Warshall, Kruskal, Prim',
      'Hashing — collision resolution, load factor, chaining vs open addressing',
    ]},
    {icon:'⏱️',title:'Algorithms',weight:'8-12%',topics:[
      'Asymptotic Analysis — Big O, Omega, Theta; best/worst/average case',
      'Divide & Conquer — merge sort, quicksort, binary search analysis',
      'Dynamic Programming — LCS, LIS, knapsack, matrix chain multiplication',
      'Greedy Algorithms — activity selection, Huffman coding, fractional knapsack',
      'NP-Completeness — P vs NP, reduction proofs, Cook\'s theorem',
      'Master Theorem — solve T(n) = aT(n/b) + f(n) quickly',
    ]},
    {icon:'🔄',title:'Operating Systems',weight:'8-12%',topics:[
      'Process Management — PCB, process states, context switching',
      'CPU Scheduling — FCFS, SJF, Priority, Round Robin (with calculations)',
      'Synchronization — mutex, semaphores, Peterson\'s algorithm, deadlock',
      'Deadlock — conditions, detection, prevention, avoidance (Banker\'s)',
      'Memory Management — segmentation, paging, virtual memory',
      'File Systems — inodes, FAT, directory structures, disk scheduling',
    ]},
    {icon:'🌐',title:'Computer Networks',weight:'8-12%',topics:[
      'OSI & TCP/IP — layers, protocols, encapsulation',
      'Data Link — framing, error detection/correction, HDLC, sliding window',
      'MAC Protocols — ALOHA, CSMA/CD, CSMA/CA, collision avoidance',
      'Network Layer — IP addressing, subnetting, routing (RIP, OSPF, BGP)',
      'Transport Layer — TCP 3-way handshake, congestion control, UDP',
      'Application Layer — DNS, HTTP, FTP, SMTP, DHCP',
    ]},
    {icon:'🗃️',title:'DBMS',weight:'8-12%',topics:[
      'ER Model — entities, attributes, relationships, cardinality',
      'Relational Model — keys (super, candidate, primary, foreign), integrity',
      'SQL — joins (inner, outer, cross), aggregations, subqueries, views',
      'Normalization — 1NF, 2NF, 3NF, BCNF, lossless decomposition',
      'Transactions — ACID properties, serializability, conflict/view equivalence',
      'Indexing — B+ tree, hashing, dense vs sparse, clustered vs unclustered',
    ]},
    {icon:'💻',title:'Theory of Computation',weight:'8-12%',topics:[
      'Regular Languages — DFA, NFA, ε-NFA, subset construction, minimization',
      'Regular Expressions — equivalence with FA, Pumping Lemma',
      'CFG & PDA — context-free grammars, pushdown automata, CYK algorithm',
      'Turing Machines — variants, decidability, halting problem',
      'Decidability & Reducibility — Rice\'s theorem, undecidable problems',
    ]},
    {icon:'🔒',title:'Compiler Design',weight:'5-8%',topics:[
      'Lexical Analysis — tokens, patterns, LEX tool, DFA construction',
      'Parsing — LL(1), LR(0), SLR(1), LALR(1) parsers, parse trees',
      'Semantic Analysis — type checking, symbol tables, scope rules',
      'Intermediate Code — three-address code, DAG, quadruples',
      'Code Optimization — constant folding, dead code elimination, loop optimization',
      'Code Generation — register allocation, instruction selection',
    ]},
  ],
  'Strategy':[
    {title:'📅 GATE Preparation Timeline',tips:[
      '12 months out: Complete all subjects once, focus on understanding over memorization',
      '9 months out: Start solving previous year questions (PYQs) from 2010–2024',
      '6 months out: Topic-wise revision — spend 2 weeks per subject systematically',
      '4 months out: Full-length mock tests — minimum 2 per week, analyze every mistake',
      '3 months out: Focus on high-weightage topics (DS, Algorithms, OS, Networks, DBMS)',
      '2 months out: Daily PYQ practice, formula sheets, numerical problem speed drilling',
      '1 month out: Light revision, mental preparation, no new topics',
      'Final week: Only formula sheets, previous year papers — don\'t study new material',
    ]},
    {title:'⚡ Subject-Wise Preparation Tips',tips:[
      'Algorithms & DS: Practice every question by hand — trace through algorithms step by step',
      'OS: Draw timeline diagrams for scheduling, Gantt charts for every scheduling question',
      'Networks: Memorize all formula — subnetting, efficiency, throughput calculations',
      'DBMS: Practice SQL queries daily, do all normalization PYQs exhaustively',
      'TOC: DFA/NFA construction by hand is mandatory — never skip the drawing step',
      'Discrete Math: Logic and set theory — solve 10 questions daily for 30 days minimum',
      'Engineering Maths: Linear algebra + probability = ~10-15% weightage, don\'t skip',
      'Compiler Design: Parser tables by hand for SLR/LALR — most asked in GATE',
    ]},
    {title:'🎯 Scoring Strategy (720 to AIR < 100)',tips:[
      'Target 60+ marks in core CS (DS, Algorithms, OS, Networks, DBMS, TOC) = ~55 questions',
      'Never leave a question blank if you\'re > 60% confident — 1/3 negative marking for MCQ',
      'Attempt MSQs (multi-select) only if you\'re very sure — no partial credit, full negative marking',
      'Engineering Maths + Aptitude = 25 marks — relatively easy, aim for 20+ here',
      'First 35 minutes: Scan all 65 questions, mark easy ones, come back to hard ones',
      'GATE rank depends on normalization — a score of 50/100 can be a 95 percentile in a good year',
    ]},
  ],
  'Resources':[
    {title:'📚 Free GATE Study Resources',items:[
      {name:'NPTEL Video Lectures (FREE)',link:'https://nptel.ac.in/',desc:'IIT/IISc faculty lectures for every GATE CS subject. The official gold standard.'},
      {name:'GO Classes (YouTube — FREE)',link:'https://www.youtube.com/@GateSmashers',desc:'Detailed GATE CS solutions and concept videos. Top GATE educator.'},
      {name:'Gate Smashers (YouTube — FREE)',link:'https://www.youtube.com/@GateSmashers',desc:'Subject-wise GATE preparation. Very popular for DS, OS, DBMS, Networks.'},
      {name:'Abhiram G Ranade — Algorithms (IIT Bombay)',link:'https://www.cse.iitb.ac.in/~ranade/',desc:'Free IIT-level algorithm notes. Used by toppers for algorithmic preparation.'},
      {name:'Previous Year Question Papers (FREE)',link:'https://www.geeksforgeeks.org/gate-cs-notes-gq/',desc:'GeeksForGeeks GATE CS notes + all PYQs from 2000 to 2024 with solutions.'},
      {name:'Virtual GATE Mock Tests (FREE)',link:'https://www.testbook.com/gate-cs',desc:'Free GATE mock tests. Take at least 10 full-length mocks before the exam.'},
    ]},
  ],
};

let gateTab='Subjects';
function renderGATE(){
  const tabs=['Subjects','Strategy','Resources'];
  const tabInfo={
    Subjects:{col:'#00ffcc',cls:'sub-gate',icon:'📚',label:'GATE CS Syllabus & Subject Weightage'},
    Strategy:{col:'#ffcc00',cls:'sub-strategy',icon:'🎯',label:'GATE Preparation Strategy'},
    Resources:{col:'#ff2d78',cls:'sub-resources',icon:'🔗',label:'Best GATE Study Resources'},
  };
  document.getElementById('gate-tabs').innerHTML=tabs.map(t=>`
    <button class="tab ${t===gateTab?'active':''}" onclick="setGateTab('${t}')"
      style="${t===gateTab?`border-color:${tabInfo[t].col};color:${tabInfo[t].col};background:${tabInfo[t].col}18;`:''}">
      ${tabInfo[t].icon} ${t}
    </button>`).join('');
  const info=tabInfo[gateTab];
  const content=document.getElementById('gate-content');
  if(gateTab==='Subjects'){
    content.innerHTML=`
      <div class="sub-panel sub-gate" style="border-color:${info.col}55;background:linear-gradient(135deg,${info.col}22,${info.col}08);">
        <div class="sub-panel-label" style="color:${info.col};">${info.icon} ${info.label}</div>
        <div class="exam-subject-grid">
          ${GATE_DATA.Subjects.map(s=>`
            <div class="exam-subject-card" style="border-left:4px solid ${info.col};background:linear-gradient(135deg,${info.col}06,rgba(0,0,0,.2));">
              <div class="exam-subject-title" style="color:${info.col};">${s.icon} ${s.title}<span class="exam-subject-weight" style="background:${info.col}22;color:${info.col};border:1px solid ${info.col}44;">${s.weight}</span></div>
              <ul class="exam-topic-list">${s.topics.map(t=>`<li>${t}</li>`).join('')}</ul>
            </div>`).join('')}
        </div>
      </div>`;
  } else if(gateTab==='Strategy'){
    content.innerHTML=`
      <div class="sub-panel sub-strategy" style="border-color:${info.col}55;background:linear-gradient(135deg,${info.col}22,${info.col}08);">
        <div class="sub-panel-label" style="color:${info.col};">${info.icon} ${info.label}</div>
        <div style="display:grid;gap:14px;">
          ${GATE_DATA.Strategy.map(s=>`
            <div class="exam-strategy-card" style="border-left:4px solid ${info.col};background:linear-gradient(135deg,${info.col}07,rgba(0,0,0,.3));">
              <div class="exam-strategy-title" style="color:${info.col};">${s.title}</div>
              ${s.tips.map(t=>`<div class="exam-tip" style="border-left-color:${info.col}88;">${t}</div>`).join('')}
            </div>`).join('')}
        </div>
      </div>`;
  } else if(gateTab==='Resources'){
    content.innerHTML=`
      <div class="sub-panel sub-resources" style="border-color:${info.col}55;background:linear-gradient(135deg,${info.col}22,${info.col}08);">
        <div class="sub-panel-label" style="color:${info.col};">${info.icon} ${info.label}</div>
        <div style="display:flex;flex-direction:column;gap:18px;">
          ${GATE_DATA.Resources.map(r=>`
            <div style="border:1px solid ${info.col}25;border-left:4px solid ${info.col};border-radius:10px;padding:18px;background:${info.col}06;">
              <div class="exam-strategy-title" style="color:${info.col};margin-bottom:14px;">📚 ${r.title}</div>
              <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:12px;">
                ${r.items.map(item=>`
                  <div style="border:1px solid rgba(255,255,255,.08);border-radius:8px;padding:14px;background:rgba(0,0,0,.3);">
                    <div style="font-weight:700;color:#fff;font-size:.88rem;margin-bottom:5px;">${item.name}</div>
                    <div style="font-size:.78rem;color:var(--muted);margin-bottom:10px;line-height:1.5;">${item.desc}</div>
                    <a href="${item.link}" target="_blank" class="exam-resource-link" style="border-color:${info.col}55;color:${info.col};">🔗 Visit Resource</a>
                  </div>`).join('')}
              </div>
            </div>`).join('')}
        </div>
      </div>`;
  }
}
function setGateTab(t){gateTab=t;renderGATE();}

// ══════════════════════════════════════════════════
//  UPSC SECTION
// ══════════════════════════════════════════════════
const UPSC_DATA={
  'GS Notes':[
    {icon:'🏛️',title:'GS Paper 1 — Indian Heritage, History & Geography',topics:[
      'Ancient India — Indus Valley, Vedic Age, Mauryas, Guptas, key dynasties',
      'Medieval India — Delhi Sultanate, Mughal Empire, Bhakti-Sufi movements',
      'Modern India — 1857 revolt, freedom struggle, Gandhi, partition',
      'World History — Industrial Revolution, World Wars, Cold War, decolonization',
      'Indian Art & Culture — architecture, classical dance, music, painting traditions',
      'Indian Geography — physiographic divisions, rivers, climate, soil, natural vegetation',
      'World Geography — continents, oceans, economic geography, resources distribution',
      'Disaster Management — types of disasters, NDMA framework, vulnerability reduction',
    ]},
    {icon:'⚖️',title:'GS Paper 2 — Governance, Constitution & IR',topics:[
      'Indian Constitution — fundamental rights, DPSP, amendments, schedule analysis',
      'Parliament — functions, committees, legislative process, constitutional bodies',
      'Judiciary — Supreme Court, High Courts, judicial review, PILs, tribunals',
      'Executive — President, PM, Council of Ministers, Cabinet committees',
      'State Government — Governor, CM, Panchayati Raj, urban local bodies',
      'Social Justice — welfare schemes, vulnerable groups, rights-based approach',
      'International Relations — India-US, India-China, India-Pakistan, SAARC, UN',
      'Bilateral & Multilateral Relations — foreign policy, international organizations',
    ]},
    {icon:'📈',title:'GS Paper 3 — Economy, Science & Environment',topics:[
      'Indian Economy — GDP, growth, inflation, monetary & fiscal policy, budget',
      'Agriculture — green revolution, MSP, food security, land reforms, irrigation',
      'Industry & Infrastructure — industrial policy, SEZs, infrastructure challenges',
      'Science & Technology — space, nuclear, biotech, IT — current developments',
      'Environment — climate change, biodiversity, pollution, environmental laws',
      'Internal Security — LWE, NE insurgency, border management, cybersecurity',
      'Disaster Management — NDRF, SDRF, DM Act, international cooperation',
      'Economic Concepts — balance of payments, FDI, FII, trade policy, WTO',
    ]},
    {icon:'💡',title:'GS Paper 4 — Ethics, Integrity & Aptitude',topics:[
      'Ethics Basics — sources, determinants of ethics, moral philosophy schools',
      'Values in Civil Services — integrity, impartiality, empathy, compassion, tolerance',
      'Attitude — components, formation, prejudice, moral reasoning',
      'Emotional Intelligence — self-awareness, empathy, social skills',
      'Probity in Governance — RTI, whistleblower protection, code of conduct',
      'Case Studies — practical ethical dilemmas, balancing competing interests',
      'Thinkers — Plato, Aristotle, Kant, Gandhi, Rawls — brief contributions',
      'Corruption — types, causes, effects, anti-corruption measures',
    ]},
  ],
  'Strategy':[
    {title:'📅 UPSC Preparation Timeline (2-Year Plan)',tips:[
      'Year 1 — Month 1-3: Build foundation. Read NCERT Class 6-12 for History, Geography, Polity, Economy',
      'Year 1 — Month 4-6: Standard reference books — Laxmikanth (Polity), Ramesh Singh (Economy), Goh Cheng Leong (Geography)',
      'Year 1 — Month 7-9: Newspaper (The Hindu/Indian Express) daily, 1 hour. Start making notes',
      'Year 1 — Month 10-12: First revision + start solving previous year Prelims MCQs (2013-2023)',
      'Year 2 — Month 1-3: Mains answer writing practice — 250 words per question, daily',
      'Year 2 — Month 4-6: Mock tests for Prelims, full-length Mains papers every weekend',
      'Year 2 — Month 7-8: Current affairs consolidation, GS 4 case studies deep practice',
      '2 months before Prelims: Only standard books + PYQ revision, no new material',
    ]},
    {title:'📰 Newspaper Reading Strategy',tips:[
      'Read The Hindu or Indian Express — not both, pick one and be consistent',
      'Focus areas: Governance, Economy, Science & Tech, International Relations, Environment',
      'Make 1-page weekly notes — don\'t copy paste, write in your own words',
      'Don\'t read every article — skip sports, entertainment, crime news',
      'Tag articles to GS papers: "GS2 — IR", "GS3 — Economy" etc.',
      'Monthly current affairs magazine (Insights on India, Vision IAS) as supplement',
    ]},
    {title:'✍️ Mains Answer Writing Masterclass',tips:[
      'Structure every answer: Introduction → Body (2-3 dimensions) → Conclusion',
      'Introduction: Start with a quote, fact, or current hook — never define the word directly',
      'Use subheadings for 150+ word answers — makes examiner\'s job easier, gets more marks',
      'Add dimensions: social, economic, political, environmental, international perspectives',
      'Use data: quote NITI Aayog, RBI, UN, WHO reports — even approximate figures work',
      'Conclusion: Always end with forward-looking statement, government initiative, or your recommendation',
      'Practice makes permanent: 1 answer per day minimum for 6 months before Mains',
      'Mock Mains test series is non-negotiable — get your answers evaluated by a mentor',
    ]},
    {title:'🎯 Prelims Strategy — Cut-off Cracking',tips:[
      'CSAT (Paper 2) — get 66+ out of 200 marks, it\'s qualifying only. Don\'t over-invest time',
      'GS Paper 1 — aim for 100+ out of 200. National average cut-off ~90-100 in good years',
      'Elimination technique: In a 4-option MCQ, you usually can eliminate 2 wrong answers easily',
      'Negative marking: -1/3 for wrong. Attempt if 60%+ confident. Skip if genuinely 50-50',
      'Current affairs questions: ~30-40% of Prelims. 18-month current affairs window is key',
      'Last 10 years PYQs are mandatory — solve each paper at least twice, understand why each answer is right',
    ]},
  ],
  'Optional & Resources':[
    {title:'📖 Popular Optional Subjects for Tech Graduates',items:[
      {name:'Public Administration',link:'https://www.insightsonindia.com/public-administration/',desc:'Most popular optional. Good resources available. High correlation with GS.'},
      {name:'Sociology',link:'https://www.insightsonindia.com/sociology/',desc:'Static syllabus, scoring, overlap with GS1. Good for humanities inclination.'},
      {name:'Mathematics',link:'https://www.insightsonindia.com/mathematics/',desc:'Pure numbers, no ambiguity. Best for engineering/math graduates. Very scoring.'},
      {name:'Political Science & IR',link:'https://www.insightsonindia.com/political-science/',desc:'Large overlap with GS2. Good if you follow current affairs deeply.'},
      {name:'Geography',link:'https://www.insightsonindia.com/geography/',desc:'Static + current. Large overlap with GS1 Geography. Diagram-friendly, scoring.'},
    ]},
    {title:'🔗 Free UPSC Resources',items:[
      {name:'Insights on India (FREE)',link:'https://www.insightsonindia.com/',desc:'Best free UPSC resource. Daily current affairs, notes, test series, mindmaps.'},
      {name:'Vision IAS Monthly Current Affairs',link:'https://www.visionias.in/resources/current-affairs/',desc:'The most widely followed monthly CA magazine. Available online.'},
      {name:'UPSC Official Previous Papers (FREE)',link:'https://upsc.gov.in/examinations/previous-question-papers',desc:'All official question papers from UPSC website. Mandatory PYQ practice.'},
      {name:'ForumIAS (FREE)',link:'https://forumias.com/',desc:'Community forum, answer-writing practice, free daily mains questions.'},
      {name:'Mrunal.org (FREE)',link:'https://mrunal.org/',desc:'Economy, Polity, History notes. Clear, exam-focused explanations.'},
      {name:'ClearIAS (FREE)',link:'https://www.clearias.com/',desc:'Free mock tests, study material, strategy guides for all stages.'},
    ]},
  ],
};

let upscTab='GS Notes';
function renderUPSC(){
  const tabs=['GS Notes','Strategy','Optional & Resources'];
  const tabInfo={
    'GS Notes':{col:'#7b2fff',cls:'sub-ai',icon:'📜',label:'UPSC GS Papers 1–4 Notes'},
    'Strategy':{col:'#ffcc00',cls:'sub-strategy',icon:'🎯',label:'UPSC Preparation Strategy'},
    'Optional & Resources':{col:'#ff2d78',cls:'sub-resources',icon:'📚',label:'Optional Subjects & Study Resources'},
  };
  document.getElementById('upsc-tabs').innerHTML=tabs.map(t=>`
    <button class="tab ${t===upscTab?'active':''}" onclick="setUpscTab('${t.replace(' & ',' &amp; ')}')"
      style="${t===upscTab?`border-color:${tabInfo[t].col};color:${tabInfo[t].col};background:${tabInfo[t].col}18;`:''}">
      ${tabInfo[t].icon} ${t.replace(' & ',' & ')}
    </button>`).join('');
  const info=tabInfo[upscTab]||tabInfo['GS Notes'];
  const content=document.getElementById('upsc-content');
  if(upscTab==='GS Notes'){
    content.innerHTML=`
      <div class="sub-panel" style="border-color:${info.col}55;background:linear-gradient(135deg,${info.col}22,${info.col}08);">
        <div class="sub-panel-label" style="color:${info.col};">${info.icon} ${info.label}</div>
        <div class="exam-subject-grid">
          ${UPSC_DATA['GS Notes'].map(s=>`
            <div class="exam-subject-card" style="border-left:4px solid ${info.col};background:linear-gradient(135deg,${info.col}06,rgba(0,0,0,.2));">
              <div class="exam-subject-title" style="color:${info.col};">${s.icon} ${s.title}</div>
              <ul class="exam-topic-list">${s.topics.map(t=>`<li>${t}</li>`).join('')}</ul>
            </div>`).join('')}
        </div>
      </div>`;
  } else if(upscTab==='Strategy'){
    content.innerHTML=`
      <div class="sub-panel sub-strategy" style="border-color:${info.col}55;background:linear-gradient(135deg,${info.col}22,${info.col}08);">
        <div class="sub-panel-label" style="color:${info.col};">${info.icon} ${info.label}</div>
        <div style="display:grid;gap:14px;">
          ${UPSC_DATA.Strategy.map(s=>`
            <div class="exam-strategy-card" style="border-left:4px solid ${info.col};background:linear-gradient(135deg,${info.col}06,rgba(0,0,0,.3));">
              <div class="exam-strategy-title" style="color:${info.col};">${s.title}</div>
              ${s.tips.map(t=>`<div class="exam-tip" style="border-left-color:${info.col}88;">${t}</div>`).join('')}
            </div>`).join('')}
        </div>
      </div>`;
  } else if(upscTab==='Optional & Resources'){
    content.innerHTML=`
      <div class="sub-panel sub-resources" style="border-color:${info.col}55;background:linear-gradient(135deg,${info.col}22,${info.col}08);">
        <div class="sub-panel-label" style="color:${info.col};">${info.icon} ${info.label}</div>
        <div style="display:flex;flex-direction:column;gap:18px;">
          ${UPSC_DATA['Optional & Resources'].map(r=>`
            <div style="border:1px solid ${info.col}25;border-left:4px solid ${info.col};border-radius:10px;padding:18px;background:${info.col}06;">
              <div class="exam-strategy-title" style="color:${info.col};margin-bottom:14px;">📚 ${r.title}</div>
              <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:12px;">
                ${r.items.map(item=>`
                  <div style="border:1px solid rgba(255,255,255,.08);border-radius:8px;padding:14px;background:rgba(0,0,0,.3);">
                    <div style="font-weight:700;color:#fff;font-size:.88rem;margin-bottom:5px;">${item.name}</div>
                    <div style="font-size:.78rem;color:var(--muted);margin-bottom:10px;line-height:1.5;">${item.desc}</div>
                    <a href="${item.link}" target="_blank" class="exam-resource-link" style="border-color:${info.col}55;color:${info.col};">🔗 Visit Resource</a>
                  </div>`).join('')}
              </div>
            </div>`).join('')}
        </div>
      </div>`;
  }
}
function setUpscTab(t){upscTab=t;renderUPSC();}


// ══════════════════════════════════════════════════
//  ROADMAP DATA & SECTION
// ══════════════════════════════════════════════════
const ROADMAP={
  Cybersecurity:[
    {phase:'🌱 Phase 1 — Foundations',time:'0–3 Months',color:'#00ffcc',items:[
      '🖥️ Linux Basics — file system, navigation, permissions, bash scripting',
      '🌐 Networking Fundamentals — OSI model, TCP/IP, DNS, HTTP/S, subnetting',
      '🔐 Security Concepts — CIA triad, authentication, encryption basics, PKI',
      '💻 Python for Security — scripting, socket programming, automation',
      '🛠️ Tools: Wireshark, Nmap, Netcat, VirtualBox/VMware',
      '📚 Free: TryHackMe Pre-Security path, Professor Messer (YouTube), NetworkChuck',
      '🏆 Milestone: Complete TryHackMe Pre-Security + Introduction to Cybersecurity',
    ]},
    {phase:'⚡ Phase 2 — Core Skills',time:'3–6 Months',color:'#7b2fff',items:[
      '🔍 Ethical Hacking Methodology — recon, scanning, exploitation, post-exploitation',
      '🌐 Web App Security — OWASP Top 10, SQL injection, XSS, CSRF, IDOR',
      '🐧 Linux Privilege Escalation — SUID, sudo misconfig, cron jobs, PATH hijack',
      '🔑 Cryptography — symmetric/asymmetric, hashing, TLS/SSL, common attacks',
      '📡 Network Attacks — ARP spoofing, MITM, DNS poisoning, sniffing',
      '🛠️ Tools: Burp Suite, Metasploit, SQLmap, Gobuster, Nikto, Hydra',
      '🏆 Milestone: Earn TryHackMe Jr Penetration Tester certificate',
    ]},
    {phase:'🔥 Phase 3 — Hands-On Practice',time:'6–12 Months',color:'#ffcc00',items:[
      '🎯 CTF Competitions — picoCTF, CTFtime events, HackTheBox Starting Point',
      '🏠 Active Directory — Kerberoasting, Pass-the-Hash, BloodHound attacks',
      '📱 Mobile Security Basics — Android APK analysis, OWASP Mobile Top 10',
      '🔒 Malware Analysis — static/dynamic analysis, sandbox tools, reverse engineering basics',
      '☁️ Cloud Security — AWS/GCP/Azure misconfigs, IAM, S3 bucket exposure',
      '🛠️ Tools: Ghidra, Cutter, CyberChef, OSINT framework, Responder',
      '🏆 Milestone: Solve 30 HackTheBox machines, submit first bug bounty report',
    ]},
    {phase:'🚀 Phase 4 — Professional Level',time:'12–18 Months',color:'#ff2d78',items:[
      '📋 CompTIA Security+ — study and pass (globally recognized, DoD mandate)',
      '🎯 OSCP Preparation — TCM Security PEH course, HackTheBox Pro Labs',
      '🕵️ Threat Intelligence — MITRE ATT&CK framework, threat modeling',
      '🔵 Blue Team Skills — SIEM (Splunk/ELK), incident response, forensics',
      '🐛 Bug Bounty — HackerOne/Bugcrowd programs, P1/P2 vulnerability hunting',
      '📝 Write-ups & Blog — document every CTF solve and learning',
      '🏆 Milestone: Pass CompTIA Security+, start OSCP journey',
    ]},
    {phase:'🏆 Phase 5 — Expert & Career',time:'18–24 Months',color:'#00ccff',items:[
      '🔴 OSCP Certification — 24-hour hands-on exam, most respected offensive cert',
      '💼 Specialization: Pen Testing / Red Team / Blue Team / AppSec / Cloud Security',
      '🤝 Build Portfolio — GitHub with scripts, CTF write-ups, research blog',
      '🌐 Community — DEFCON, BSides, local security meetups, LinkedIn presence',
      '💰 Bug Bounty Income — target private programs, build HackerOne reputation',
      '📜 Advanced Certs: CRTE, CRTO, eWPT, BSCP (depending on specialization)',
      '🏆 Milestone: Land first security job or freelance pen test engagement',
    ]},
  ],
  'Full Stack':[
    {phase:'🌱 Phase 1 — Web Fundamentals',time:'0–2 Months',color:'#00ccff',items:[
      '🌐 HTML5 — semantic tags, forms, accessibility, media elements',
      '🎨 CSS3 — flexbox, grid, animations, responsive design, CSS variables',
      '⚡ JavaScript Basics — variables, functions, DOM manipulation, events',
      '🔧 Git & GitHub — version control, branching, pull requests, GitHub Pages',
      '🛠️ Tools: VS Code, Chrome DevTools, Prettier, ESLint',
      '📚 Free: freeCodeCamp (free cert), The Odin Project, Kevin Powell CSS (YouTube)',
      '🏆 Milestone: Build and deploy 3 responsive static websites to GitHub Pages',
    ]},
    {phase:'⚡ Phase 2 — JavaScript Mastery',time:'2–5 Months',color:'#ffcc00',items:[
      '⚡ ES6+ — arrow functions, destructuring, spread/rest, modules, Promises',
      '🔄 Async JavaScript — async/await, fetch API, error handling, event loop',
      '🧩 DOM & Events — event delegation, bubbling, custom events, web APIs',
      '📦 npm Ecosystem — package.json, node_modules, scripts, bundlers',
      '🧪 Testing Basics — Jest unit tests, TDD mindset, test coverage',
      '🛠️ Tools: Node.js, npm/yarn, Vite, ESLint, Prettier',
      '🏆 Milestone: Build a JavaScript app with API calls, local storage, DOM updates',
    ]},
    {phase:'🔥 Phase 3 — React & Frontend Framework',time:'5–9 Months',color:'#7b2fff',items:[
      '⚛️ React — components, JSX, props, state, hooks (useState, useEffect, useContext)',
      '🔀 React Router — SPA navigation, dynamic routes, protected routes',
      '🗃️ State Management — useReducer, Context API, Zustand or Redux Toolkit',
      '🎨 Styling — Tailwind CSS, shadcn/ui, CSS Modules, styled-components',
      '⚡ Next.js — App Router, Server Components, SSR vs SSG vs ISR, API Routes',
      '🧪 Testing — React Testing Library, Vitest, Playwright E2E',
      '🏆 Milestone: Build a full React/Next.js app with auth, deployed to Vercel',
    ]},
    {phase:'🚀 Phase 4 — Backend & Databases',time:'9–14 Months',color:'#00ffcc',items:[
      '🟢 Node.js & Express — REST API design, middleware, auth (JWT, OAuth)',
      '🗄️ SQL Databases — PostgreSQL, schema design, indexing, complex queries',
      '🍃 NoSQL — MongoDB, Mongoose, document modeling, aggregation pipeline',
      '🔐 Authentication — bcrypt, JWT, sessions, OAuth2, passport.js',
      '📁 File Uploads — Multer, Cloudinary, S3 integration',
      '🛠️ Tools: Postman, Prisma ORM, Supabase, Railway/Render for deployment',
      '🏆 Milestone: Build a full-stack app with user auth, CRUD, and file uploads',
    ]},
    {phase:'🏆 Phase 5 — Production & Career',time:'14–20 Months',color:'#ff2d78',items:[
      '☁️ Cloud & DevOps — AWS/GCP basics, Docker, CI/CD with GitHub Actions',
      '⚡ Performance — Core Web Vitals, lazy loading, code splitting, caching',
      '🔒 Security — HTTPS, CORS, CSRF, SQL injection prevention, rate limiting',
      '📊 System Design — scalability, load balancing, caching (Redis), CDN',
      '🎯 TypeScript — strict typing, generics, utility types, type-safe APIs (tRPC)',
      '💼 Portfolio — 3-5 polished projects, open source contributions, technical blog',
      '🏆 Milestone: First full-stack developer role or successful freelance client',
    ]},
  ],
  AI:[
    {phase:'🌱 Phase 1 — Python & Math Foundations',time:'0–2 Months',color:'#ffcc00',items:[
      '🐍 Python Mastery — lists, dicts, OOP, list comprehensions, file I/O, decorators',
      '📐 Linear Algebra — vectors, matrices, dot product, eigenvalues, SVD',
      '📊 Statistics — probability, distributions, Bayes theorem, hypothesis testing',
      '🔢 Calculus — derivatives, chain rule, gradient, partial derivatives',
      '📦 NumPy & Pandas — array operations, DataFrames, data cleaning, EDA',
      '📚 Free: Kaggle Python (free cert), 3Blue1Brown (YouTube), fast.ai',
      '🏆 Milestone: Complete Kaggle Python + Pandas + Data Visualization courses',
    ]},
    {phase:'⚡ Phase 2 — Core Machine Learning',time:'2–5 Months',color:'#00ffcc',items:[
      '🤖 Supervised Learning — linear/logistic regression, decision trees, SVMs, KNN',
      '🔍 Unsupervised Learning — K-means, PCA, DBSCAN, autoencoders',
      '📊 Model Evaluation — cross-validation, precision/recall/F1, ROC-AUC',
      '🔧 Feature Engineering — encoding, scaling, imputation, feature selection',
      '🌲 Ensemble Methods — random forests, gradient boosting, XGBoost, LightGBM',
      '🛠️ Tools: scikit-learn, Matplotlib, Seaborn, Jupyter, Kaggle Notebooks',
      '🏆 Milestone: Top 30% in a Kaggle competition using classical ML',
    ]},
    {phase:'🔥 Phase 3 — Deep Learning',time:'5–9 Months',color:'#7b2fff',items:[
      '🧠 Neural Networks — perceptrons, backpropagation, activation functions, weight init',
      '🖼️ CNNs — convolutions, pooling, ResNet, EfficientNet, transfer learning',
      '📝 RNNs & LSTMs — sequence modeling, vanishing gradients, time series',
      '🔄 Transformers — attention mechanism, self-attention, positional encoding',
      '🎨 GANs — generator/discriminator, training stability, applications',
      '🛠️ Tools: PyTorch (primary), TensorFlow/Keras, Weights & Biases, fast.ai',
      '🏆 Milestone: Build a custom CNN achieving >95% on CIFAR-10',
    ]},
    {phase:'🚀 Phase 4 — LLMs & GenAI',time:'9–14 Months',color:'#ff2d78',items:[
      '🤗 Hugging Face — transformers library, tokenizers, model hub, Spaces deployment',
      '🔧 Fine-tuning — full fine-tune, LoRA, QLoRA, PEFT, instruction tuning',
      '📚 RAG Systems — embeddings, FAISS/ChromaDB, LangChain, LlamaIndex',
      '🤖 LLM APIs — OpenAI/Anthropic/Gemini APIs, prompt engineering, function calling',
      '🌐 Deployment — FastAPI, Streamlit, Gradio, Docker, Hugging Face Spaces',
      '🛠️ Tools: LangChain, Ollama (local LLMs), vLLM, BitsAndBytes',
      '🏆 Milestone: Deploy a RAG chatbot answering questions from custom docs',
    ]},
    {phase:'🏆 Phase 5 — Research & Career',time:'14–24 Months',color:'#00ccff',items:[
      '📜 ML Paper Reading — Arxiv daily, Papers With Code, implement 2+ papers from scratch',
      '☁️ MLOps — model versioning, experiment tracking (W&B), model serving at scale',
      '🏆 Competitions — Kaggle Grand Master path, NeurIPS/ICML competitions',
      '🎓 Certifications — TensorFlow Developer, AWS ML Specialty, GCP ML Engineer',
      '💼 Portfolio — 3-5 end-to-end ML projects: problem → data → model → deployed API',
      '🔬 Specialization: CV / NLP / RL / MLOps / AI Safety / LLM Engineering',
      '🏆 Milestone: First ML engineer / data scientist / AI researcher role',
    ]},
  ],
};

// ══ MONTHLY ROADMAP DATA ══
const MONTHLY_ROADMAP={
  Cybersecurity:[
    {month:'Month 1',emoji:'🖥️',focus:'Linux & Networking Basics',tasks:['Install Kali Linux on VirtualBox/VMware','Learn essential Linux commands: ls, cd, grep, chmod, find, netstat','Study OSI model layers and TCP/IP fundamentals','Practice subnetting (CIDR notation, /24, /16, /30)','Watch NetworkChuck Linux series on YouTube','Resource: OverTheWire: Bandit (first 10 levels)'],color:'#00ffcc',youtube:[
      {title:'Linux for Ethical Hackers — Full Course',channel:'NetworkChuck',duration:'3.5 hrs',url:'https://www.youtube.com/watch?v=VbEx7B_PTOE'},
      {title:'Networking Fundamentals — OSI & TCP/IP',channel:'Professor Messer',duration:'4 hrs',url:'https://www.youtube.com/watch?v=bzFOCBJewWs'},
    ]},
    {month:'Month 2',emoji:'🌐',focus:'Networking Deep Dive + Python',tasks:['Master TCP/UDP, DNS, HTTP/HTTPS, FTP, SSH protocols','Learn Wireshark — capture and analyze packets','Write Python scripts: port scanner, banner grabber','Study cryptography basics: symmetric, asymmetric, hashing','Start TryHackMe Pre-Security learning path','Resource: Professor Messer CompTIA Network+ (YouTube, free)'],color:'#00ccff',youtube:[
      {title:'Python for Hackers — Full Beginner Course',channel:'freeCodeCamp',duration:'4 hrs',url:'https://www.youtube.com/watch?v=XWuP5Yf5ILI'},
      {title:'Wireshark Tutorial for Beginners',channel:'David Bombal',duration:'3.5 hrs',url:'https://www.youtube.com/watch?v=lb1Dw0elw0Q'},
    ]},
    {month:'Month 3',emoji:'🔐',focus:'Security Fundamentals + First Tools',tasks:['CIA Triad, authentication methods, PKI & certificates','Set up your first lab: Kali + Metasploitable2 + DVWA','Learn Nmap basics: -sV, -sC, -A, -p-, -O flags','Complete TryHackMe "Introduction to Cybersecurity"','Milestone: Pass TryHackMe Pre-Security certificate','Resource: OWASP Testing Guide (free PDF)'],color:'#7b2fff',youtube:[
      {title:'Nmap Tutorial for Beginners',channel:'NetworkChuck',duration:'3 hrs',url:'https://www.youtube.com/watch?v=4t4kBkMsDbQ'},
      {title:'Setting Up a Cybersecurity Home Lab',channel:'David Bombal',duration:'4 hrs',url:'https://www.youtube.com/watch?v=nzZkEM5OONE'},
    ]},
    {month:'Month 4',emoji:'🔍',focus:'Ethical Hacking Methodology',tasks:['Learn recon: theHarvester, Shodan, Google Dorks','Web scanning: Gobuster, Nikto, Dirb directory brute-force','Exploitation phases: initial access → privilege escalation → persistence','Study OWASP Top 10 (2021 edition) — all 10 vulnerabilities','Start TryHackMe "Jr Penetration Tester" path','Resource: TCM Security YouTube (free ethical hacking)'],color:'#ffcc00',youtube:[
      {title:'Full Ethical Hacking Course — TCM Security',channel:'TCM Security',duration:'4 hrs',url:'https://www.youtube.com/watch?v=fNzpcB7ODxQ'},
      {title:'OWASP Top 10 — All Vulnerabilities Explained',channel:'Computerphile',duration:'3 hrs',url:'https://www.youtube.com/watch?v=uo3STUx5mCk'},
    ]},
    {month:'Month 5',emoji:'🌐',focus:'Web Application Security',tasks:['Hands-on SQL injection: manual + sqlmap automation','XSS: reflected, stored, DOM-based — exploit all three','CSRF, IDOR, SSRF, XXE — practical attacks on DVWA','Burp Suite: intercepting proxies, repeater, intruder','Complete PortSwigger Web Security Academy (free labs)','Resource: HackTheBox Starting Point (Tier 1 machines)'],color:'#ff2d78',youtube:[
      {title:'Burp Suite Full Tutorial for Beginners',channel:'TechHacked',duration:'3.5 hrs',url:'https://www.youtube.com/watch?v=VEjD7qB6pCk'},
      {title:'SQL Injection — Full Attack Tutorial',channel:'Seytonic',duration:'3 hrs',url:'https://www.youtube.com/watch?v=2OPVViV-GGk'},
    ]},
    {month:'Month 6',emoji:'🏆',focus:'First CTF + Certificate',tasks:['Solve 5 TryHackMe Easy rooms independently','Attempt your first picoCTF challenge set','Earn TryHackMe Jr Penetration Tester certificate','Document every solution in a write-up blog (GitHub Pages or Medium)','Start studying CompTIA Security+ (objectives PDF, free)','Resource: Jason Dion Security+ course (Udemy)'],color:'#00ffcc',youtube:[
      {title:'How to Solve CTF Challenges — Strategy Guide',channel:'John Hammond',duration:'3 hrs',url:'https://www.youtube.com/watch?v=JkkP2GQOS_s'},
      {title:'CompTIA Security+ Full Course 2024',channel:'Professor Messer',duration:'4 hrs',url:'https://www.youtube.com/watch?v=nc5q_xFvbqE'},
    ]},
    {month:'Month 7',emoji:'🐧',focus:'Linux Privilege Escalation',tasks:['SUID binaries: find / -perm -4000 — GTFOBins practice','Sudo misconfigurations: sudo -l and exploiting permissions','Cron jobs and PATH hijacking techniques','Kernel exploits: identify version, search ExploitDB','Complete TryHackMe "Linux PrivEsc" room','Resource: HackTricks PrivEsc guide (book.hacktricks.xyz)'],color:'#7b2fff',youtube:[
      {title:'Linux Privilege Escalation — Full Guide',channel:'TCM Security',duration:'4 hrs',url:'https://www.youtube.com/watch?v=ZTioFZDMr_I'},
      {title:'GTFOBins Tutorial — PrivEsc Techniques',channel:'S1ren',duration:'3 hrs',url:'https://www.youtube.com/watch?v=dk2wsyFiosg'},
    ]},
    {month:'Month 8',emoji:'🔑',focus:'Cryptography & Password Attacks',tasks:['Study AES, RSA, ECC, Diffie-Hellman in depth','Hash types: MD5, SHA-1, SHA-256, bcrypt, NTLM','Hashcat: dictionary attacks, rule-based, brute-force (rockyou.txt)','John the Ripper: crack /etc/shadow passwords','Complete TryHackMe "Encryption" and "Hashing" rooms','Resource: CryptoHack (cryptohack.org) — free challenges'],color:'#ffcc00',youtube:[
      {title:'Password Cracking with Hashcat — Full Tutorial',channel:'HackerSploit',duration:'3.5 hrs',url:'https://www.youtube.com/watch?v=Ci2sT01oM3s'},
      {title:'Cryptography Basics — AES, RSA, Hashing',channel:'Computerphile',duration:'4 hrs',url:'https://www.youtube.com/watch?v=AQDCe585Lnc'},
    ]},
    {month:'Month 9',emoji:'🎯',focus:'HackTheBox + Active Directory',tasks:['Solve 5 HackTheBox Easy machines (document all)','Participate in a live CTF event from CTFtime.org','Learn Active Directory: users, groups, GPO, Kerberos, LDAP','Study Kerberoasting, AS-REP Roasting, Pass-the-Hash','Complete TryHackMe "Active Directory Basics" room','Resource: HackTheBox Academy (AD module, free)'],color:'#00ccff',youtube:[
      {title:'Active Directory Attacks — Zero to Hero',channel:'TCM Security',duration:'4 hrs',url:'https://www.youtube.com/watch?v=pKtDptzIQLM'},
      {title:'HackTheBox for Beginners — How to Approach Machines',channel:'IppSec',duration:'3 hrs',url:'https://www.youtube.com/watch?v=9RJqrM3sEfI'},
    ]},
    {month:'Month 10',emoji:'📋',focus:'CompTIA Security+ Exam',tasks:['Cover all 5 domains: Threats/Attacks, Architecture, Implementation, Ops, Governance','Complete 500 practice questions (PBQs included)','Study incident response procedures and forensic acquisition','Learn SIEM concepts: log analysis, correlation rules','Take 3 full mock exams (aim >85% before booking)','Milestone: Pass CompTIA Security+ (SY0-701) ✅'],color:'#ff2d78',youtube:[
      {title:'CompTIA Security+ SY0-701 Full Study Course',channel:'Professor Messer',duration:'4 hrs',url:'https://www.youtube.com/watch?v=nc5q_xFvbqE'},
      {title:'Security+ PBQ (Performance-Based Questions) Practice',channel:'Jason Dion',duration:'3 hrs',url:'https://www.youtube.com/watch?v=T1iN0b3hAHk'},
    ]},
    {month:'Month 11',emoji:'🕵️',focus:'Bug Bounty Basics',tasks:['Register on HackerOne and Bugcrowd (free)','Read P1/P2 disclosure reports on HackerOne Hacktivity','Practice SSRF, JWT attacks, OAuth misconfigurations, IDOR chains','Learn subdomain enumeration: amass, subfinder, assetfinder','Find your first low-severity bug on a public program','Resource: PentesterLab (free tier), Intigriti blog'],color:'#00ffcc',youtube:[
      {title:'Bug Bounty Hunting for Beginners — Full Course',channel:'STÖK',duration:'4 hrs',url:'https://www.youtube.com/watch?v=aXSA4d0XoGw'},
      {title:'How to Find Your First Bug Bounty',channel:'NahamSec',duration:'3.5 hrs',url:'https://www.youtube.com/watch?v=UUlRiLrXOLc'},
    ]},
    {month:'Month 12',emoji:'🚀',focus:'OSCP Prep Begins + Portfolio',tasks:['Start TCM Security "Practical Ethical Hacking" course','GitHub portfolio: 10+ write-ups, custom automation scripts','Solve 2 HackTheBox Medium machines independently','Draft professional LinkedIn with Security+ cert','Apply to 5 cybersecurity internships or entry-level positions','Resource: TryHackMe OSCP-like machine list'],color:'#7b2fff',youtube:[
      {title:'OSCP Preparation Guide 2024',channel:'TCM Security',duration:'4 hrs',url:'https://www.youtube.com/watch?v=bBrM8UmmAB0'},
      {title:'How to Build a Cybersecurity Portfolio',channel:'Gerald Auger',duration:'3 hrs',url:'https://www.youtube.com/watch?v=paFADSS7QHc'},
    ]},
    {month:'Month 13',emoji:'🔴',focus:'Red Team — Advanced Exploitation',tasks:['Metasploit Advanced: post-exploitation modules, pivoting, meterpreter','Windows Active Directory attacks: BloodHound, SharpHound, Impacket','Lateral movement: Pass-the-Ticket, DCSync, Golden Ticket attacks','Command & Control: Cobalt Strike concepts, Covenant C2 (research)','Complete HackTheBox Pro Labs — Offshore or RastaLabs','Resource: ired.team (free AD attack reference)'],color:'#ff2d78',youtube:[
      {title:'Metasploit Advanced — Post Exploitation',channel:'HackerSploit',duration:'3.5 hrs',url:'https://www.youtube.com/watch?v=8lR27r8Y3oe'},
      {title:'BloodHound Tutorial — AD Attack Paths',channel:'The Cyber Mentor',duration:'4 hrs',url:'https://www.youtube.com/watch?v=t0VaZ7B1RDU'},
    ]},
    {month:'Month 14',emoji:'🔵',focus:'Blue Team — SIEM & SOC Skills',tasks:['Set up Elastic SIEM or Wazuh on free VM (hands-on)','Write detection rules for common attack patterns (Sigma rules)','Log analysis: Windows event IDs 4624, 4625, 4688, 4698','Network traffic analysis: identify C2 beacons, port scans in pcap','Complete CyberDefenders "SOC Level 1" learning path','Resource: Blue Team Labs Online (free tier)'],color:'#00ccff',youtube:[
      {title:'Splunk SIEM Tutorial for Beginners',channel:'Splunk',duration:'4 hrs',url:'https://www.youtube.com/watch?v=vBYrfNNYpLE'},
      {title:'ELK Stack Setup for Security Monitoring',channel:'MyDFIR',duration:'3.5 hrs',url:'https://www.youtube.com/watch?v=T5sHm8iuvjE'},
    ]},
    {month:'Month 15',emoji:'🧪',focus:'Malware Analysis + Forensics',tasks:['Static malware analysis: strings, PEiD, Detect-It-Easy, VirusTotal','Dynamic analysis: Cuckoo Sandbox or ANY.RUN (online, free)','Memory forensics: Volatility3 pslist, netscan, cmdline, filescan','Disk forensics: Autopsy — recover deleted files, timeline analysis','Complete a forensics CTF challenge on CyberDefenders','Resource: REMnux VM (free malware analysis distro)'],color:'#ffcc00',youtube:[
      {title:'Malware Analysis for Beginners — Full Course',channel:'HuskyHacks',duration:'4 hrs',url:'https://www.youtube.com/watch?v=vg9cNFPQFqM'},
      {title:'Volatility Memory Forensics Tutorial',channel:'13Cubed',duration:'3 hrs',url:'https://www.youtube.com/watch?v=l3DTzBXSxSI'},
    ]},
    {month:'Month 16',emoji:'☁️',focus:'Cloud Penetration Testing',tasks:['AWS misconfigurations: S3 bucket exposure, IAM privilege escalation','Pacu (AWS exploitation framework) — run in test environment','GCP/Azure attack paths: token theft, service account abuse','Container escapes: privileged pods, hostPath mounts in Kubernetes','Complete CloudGoat (Rhino Security Labs, free vulnerable AWS lab)','Resource: Hacking The Cloud (hackingthe.cloud, free)'],color:'#7b2fff',youtube:[
      {title:'AWS Cloud Hacking — Full Tutorial',channel:'HackerSploit',duration:'4 hrs',url:'https://www.youtube.com/watch?v=ylNaRFdSHPU'},
      {title:'Cloud Security Fundamentals',channel:'NetworkChuck',duration:'3.5 hrs',url:'https://www.youtube.com/watch?v=M988_fsOSWo'},
    ]},
    {month:'Month 17',emoji:'📱',focus:'Mobile & API Security',tasks:['Android: APK reverse engineering with jadx, MobSF (static analysis)','OWASP Mobile Top 10 — all 10 categories with examples','API security testing: broken object level auth, mass assignment, rate limiting','Postman: intercept API calls, fuzz parameters, test auth bypass','Complete OWASP crAPI (completely ridiculous API, free vulnerable lab)','Resource: OWASP MSTG (Mobile Security Testing Guide, free PDF)'],color:'#ff2d78',youtube:[
      {title:'Android App Hacking — Beginner to Advanced',channel:'HackerSploit',duration:'3.5 hrs',url:'https://www.youtube.com/watch?v=GEQjYJ1QRYA'},
      {title:'API Security Testing — Full Tutorial',channel:'Rana Khalil',duration:'4 hrs',url:'https://www.youtube.com/watch?v=Q9PGDfnVFMs'},
    ]},
    {month:'Month 18',emoji:'📜',focus:'OSCP Exam Preparation',tasks:['Complete TCM Security PNPT course or PWK (OffSec)','Solve 30+ HackTheBox and PG Practice machines (medium/hard)','Master buffer overflow: BOF on 32-bit Windows (retired HTB/TryHackMe rooms)','Practice report writing: executive summary, technical findings, PoC','Schedule OSCP exam (90-day lab access recommended)','Milestone: OSCP exam attempt — 24-hour hands-on test!'],color:'#00ffcc',youtube:[
      {title:'Buffer Overflow Attack — Full Tutorial',channel:'TCM Security',duration:'4 hrs',url:'https://www.youtube.com/watch?v=qSnPayW6vmY'},
      {title:'OSCP Report Writing — Professional Template',channel:'TCM Security',duration:'3 hrs',url:'https://www.youtube.com/watch?v=Legvcvq_Ees'},
    ]},
    {month:'Month 19',emoji:'💼',focus:'Specialization Choice',tasks:['Choose path: Red Team / Penetration Tester / SOC Analyst / AppSec / Cloud Security','Red Team: CRTE (Certified Red Team Expert) or CRTO course','Blue Team: CompTIA CySA+ (Security Analyst certification)','AppSec: BSCP (Burp Suite Certified Practitioner) or eWPT','Cloud: AWS Security Specialty or GCP Professional Cloud Security Engineer','Build your specialization portfolio: 5 domain-specific projects'],color:'#00ccff',youtube:[
      {title:'Cybersecurity Career Paths — Which One is For You?',channel:'Gerald Auger',duration:'3 hrs',url:'https://www.youtube.com/watch?v=4CuXNs6SboU'},
      {title:'CySA+ Full Study Course 2024',channel:'Jason Dion',duration:'4 hrs',url:'https://www.youtube.com/watch?v=T1iN0b3hAHk'},
    ]},
    {month:'Month 20',emoji:'🌐',focus:'Advanced Network Security',tasks:['Firewall evasion: fragmentation, protocol tunneling, DNS exfiltration','VPN bypass: split tunneling, WebRTC leaks, traffic correlation','VLAN hopping, 802.1Q double-tagging attacks','Wireless: WPA2 cracking, PMKID attack, evil twin AP','Snort/Suricata: write custom IDS rules, tune false positives','Resource: Practical Network Penetration Testing (TCM Security)'],color:'#ffcc00',youtube:[
      {title:'Network Penetration Testing — Full Course',channel:'TCM Security',duration:'4 hrs',url:'https://www.youtube.com/watch?v=3Kq1MIfTWCE'},
      {title:'WiFi Hacking — WPA2 Attack Tutorial',channel:'NetworkChuck',duration:'3.5 hrs',url:'https://www.youtube.com/watch?v=WfYxrLaqlN8'},
    ]},
    {month:'Month 21',emoji:'🏗️',focus:'Threat Intelligence & Red Team Ops',tasks:['MITRE ATT&CK framework: map techniques to your findings','Threat modeling: STRIDE, PASTA, attack trees','Threat hunting: proactive search for IoCs in SIEM data','OSINT advanced: Maltego, Recon-ng, passive DNS analysis','Purple team exercise: attack vs detect the same scenario','Resource: MITRE ATT&CK Navigator (free online tool)'],color:'#7b2fff',youtube:[
      {title:'MITRE ATT&CK Framework — Complete Walkthrough',channel:'John Hammond',duration:'3.5 hrs',url:'https://www.youtube.com/watch?v=ic_6yGhagNY'},
      {title:'Threat Hunting Workshop — Hands-On',channel:'SANS Institute',duration:'4 hrs',url:'https://www.youtube.com/watch?v=bYZqCIIzGHk'},
    ]},
    {month:'Month 22',emoji:'📊',focus:'Reporting & Soft Skills',tasks:['Write a professional penetration test report (executive + technical sections)','CVSS scoring: calculate severity for 10 real vulnerabilities','Learn remediation advice writing — not just finding, also fixing','Practice 30-minute "pitch" of your most impressive finding','Build LinkedIn with OSCP/certs, write 3 cybersecurity blog posts','Join local security community: BSides events, DEFCON DEF, OWASP chapter'],color:'#ff2d78',youtube:[
      {title:'How to Write a Pentest Report — Professional Guide',channel:'TCM Security',duration:'3 hrs',url:'https://www.youtube.com/watch?v=Legvcvq_Ees'},
      {title:'Cybersecurity Networking & Building Your Brand',channel:'John Hammond',duration:'3.5 hrs',url:'https://www.youtube.com/watch?v=a8F2zN0KU4A'},
    ]},
    {month:'Month 23',emoji:'🎯',focus:'Job Applications + Interview Prep',tasks:['Apply to 15 security roles: SOC Analyst, Jr Pen Tester, AppSec Engineer','Practice: walk through a full pentest methodology verbally (30 min)','Technical interview: explain common vulnerabilities to a non-technical person','CTF interview: solve an easy HackTheBox machine live in 90 min','Negotiate salary: research Glassdoor, Levels.fyi for security roles','Network: LinkedIn connections, Discord servers (TCM Security, TryHackMe)'],color:'#00ffcc',youtube:[
      {title:'Cybersecurity Job Interview Questions & Answers',channel:'Gerald Auger',duration:'3.5 hrs',url:'https://www.youtube.com/watch?v=ug5dXFyJF4A'},
      {title:'How to Get a Cybersecurity Job — Full Career Guide',channel:'Professor Messer',duration:'3 hrs',url:'https://www.youtube.com/watch?v=k9ZigsW5il0'},
    ]},
    {month:'Month 24',emoji:'🏆',focus:'Job Ready — Land First Role',tasks:['Final portfolio review: 3 CVEs/bug reports OR 5 CTF write-ups OR 1 research blog','Update GitHub: custom tools, automation scripts, cheat sheets','Target companies: Big4 consulting, MSSPs, product security, startups','Consider bug bounty income while job hunting (HackerOne, Intigriti)','MILESTONE: First cybersecurity role! Junior Pen Tester / SOC Analyst / AppSec Engineer','Salary range: ₹4-8 LPA (India fresh) / $70-90K (US entry level)'],color:'#00ccff',youtube:[
      {title:'How I Got My First Cybersecurity Job',channel:'Gerald Auger',duration:'3 hrs',url:'https://www.youtube.com/watch?v=4CuXNs6SboU'},
      {title:'Bug Bounty Income — Getting Started',channel:'STÖK',duration:'3.5 hrs',url:'https://www.youtube.com/watch?v=aXSA4d0XoGw'},
    ]},
  ],
  'Full Stack':[
    {month:'Month 1',emoji:'🌐',focus:'HTML & CSS Mastery',tasks:['Semantic HTML5: header, main, section, article, footer tags','CSS Flexbox: display:flex, justify-content, align-items, gap','CSS Grid: grid-template-columns, auto-fit, minmax()','Build 2 responsive landing pages (mobile-first approach)','Use Chrome DevTools to debug and inspect layouts','Resource: Kevin Powell CSS YouTube (free, best CSS teacher)'],color:'#00ccff'},
    {month:'Month 2',emoji:'⚡',focus:'JavaScript Fundamentals',tasks:['Variables (let/const), data types, functions, loops, closures','DOM manipulation: querySelector, addEventListener, innerHTML','ES6+: arrow functions, template literals, destructuring, spread','Fetch API: call a public API (OpenWeather, PokeAPI)','Build a Todo app with localStorage persistence','Resource: javascript.info (free, most comprehensive JS reference)'],color:'#ffcc00'},
    {month:'Month 3',emoji:'🔧',focus:'Git + Tools + First Deploy',tasks:['Master Git: init, add, commit, push, pull, branch, merge, rebase','Deploy static site to GitHub Pages (free hosting)','VS Code setup: Prettier, ESLint, Live Server, GitLens','Build and deploy portfolio website with 3 projects','Learn npm: package.json, scripts, installing & using packages','Resource: The Odin Project (free, project-based curriculum)'],color:'#00ffcc'},
    {month:'Month 4',emoji:'⚛️',focus:'React Foundations',tasks:['Components, JSX, props, rendering lists with .map()','useState and useEffect hooks — master dependency array','Event handling and conditional rendering patterns','Build a weather app: React + OpenWeather API + loading states','React Developer Tools browser extension — debug component tree','Resource: official React docs (react.dev) — interactive tutorials'],color:'#00e676'},
    {month:'Month 5',emoji:'🔀',focus:'React Advanced + Routing',tasks:['React Router v6: Link, useNavigate, useParams, Outlet, nested routes','useContext for global state (auth, theme, language)','Custom hooks: extract repeated logic into reusable useXxx hook','API integration patterns: loading/error/success states, retry logic','Build a multi-page React e-commerce app (no backend yet)','Resource: Traversy Media React crash course (YouTube, free)'],color:'#ff2d78'},
    {month:'Month 6',emoji:'🎨',focus:'Tailwind CSS + Next.js',tasks:['Tailwind CSS: utility classes, responsive prefixes (sm/md/lg), dark mode','shadcn/ui: install components, customize theme with CSS variables','Next.js App Router: pages, layouts, loading.tsx, error.tsx, not-found.tsx','Server Components vs Client Components — understand the mental model','Deploy to Vercel in under 5 minutes (free tier, auto SSL)','Resource: Next.js official tutorial (nextjs.org/learn, fully free)'],color:'#00ccff'},
    {month:'Month 7',emoji:'🟢',focus:'Node.js & Express Backend',tasks:['Node.js core: modules (fs, path, http), event emitter, streams','Express: routing, middleware chain, req/res cycle, error handler middleware','Build REST API: CRUD endpoints for a resource (e.g., blog posts)','Input validation with Zod (type-safe) or Joi','Environment variables with dotenv, .env.example pattern','Resource: Traversy Media Node.js crash course (YouTube, free)'],color:'#ffcc00'},
    {month:'Month 8',emoji:'🗄️',focus:'Databases: SQL & NoSQL',tasks:['PostgreSQL: CREATE TABLE, SELECT JOIN, indexes, foreign keys, transactions','MongoDB: collections, documents, CRUD operations with Mongoose','Prisma ORM: define schema, run migrations, query with type-safety','Connect PostgreSQL to Express API, add Prisma for ORM','ACID properties — know when to use SQL vs NoSQL and why','Resource: Neon (free PostgreSQL), MongoDB Atlas (free M0 cluster)'],color:'#00ffcc'},
    {month:'Month 9',emoji:'🔐',focus:'Authentication & Security',tasks:['bcrypt: hash passwords correctly (never store plaintext, ever)','JWT: sign, verify, access token + refresh token rotation pattern','OAuth2: "Sign in with Google" with NextAuth.js (10 min setup)','CORS, CSRF protection, SQL injection prevention, helmet.js headers','Rate limiting: express-rate-limit on auth endpoints','Resource: Web Dev Simplified YouTube — complete auth tutorial'],color:'#00e676'},
    {month:'Month 10',emoji:'☁️',focus:'TypeScript + Testing',tasks:['TypeScript: types, interfaces, generics, utility types (Partial, Pick, Omit)','Convert existing Express API to TypeScript (strict mode)','Unit testing with Jest: test pure functions, mock dependencies','Integration testing with Supertest: test API endpoints end-to-end','React Testing Library: test components by user behavior, not implementation','Resource: Matt Pocock TypeScript YouTube (free), Testing Trophy concept'],color:'#ff2d78'},
    {month:'Month 11',emoji:'📊',focus:'System Design Basics',tasks:['Redis caching: cache-aside pattern, TTL, cache invalidation strategies','Rate limiting algorithms: token bucket, sliding window (implement both)','WebSockets: build real-time chat with Socket.io','Pagination: cursor-based vs offset (understand why cursor is better)','Database optimization: EXPLAIN ANALYZE, index selection, N+1 problem','Resource: ByteByteGo system design YouTube (free, excellent visuals)'],color:'#00ccff'},
    {month:'Month 12',emoji:'🐳',focus:'Docker + CI/CD',tasks:['Docker: Dockerfile, docker-compose.yml, multi-stage builds','Containerize full-stack app: separate containers for app, DB, Redis','GitHub Actions: CI pipeline (lint → test → build Docker image → deploy)','Deploy to Railway or Render with auto-deploy on git push','Environment management: dev/staging/prod configs','Resource: TechWorld with Nana Docker course (YouTube, free)'],color:'#ffcc00'},
    {month:'Month 13',emoji:'⚡',focus:'Performance & Core Web Vitals',tasks:['Core Web Vitals: LCP, FID, CLS — measure with Lighthouse and PageSpeed','Image optimization: next/image, WebP format, lazy loading, blur placeholder','Code splitting: dynamic imports, React.lazy, Suspense boundaries','Caching strategies: CDN, browser cache, stale-while-revalidate','Bundle analysis: webpack-bundle-analyzer or Next.js bundle-analyzer','Resource: Google web.dev (free performance guides)'],color:'#00e676'},
    {month:'Month 14',emoji:'🔒',focus:'Advanced Security',tasks:['HTTPS enforcement: HSTS, certificate pinning concepts','Content Security Policy (CSP) headers — prevent XSS','OWASP Top 10 for web developers — prevent each vulnerability','Secret management: environment variables, AWS Secrets Manager basics','Dependency security: npm audit, Dependabot, Snyk scanning','Resource: OWASP Cheat Sheet Series (free, developer-focused)'],color:'#ff2d78'},
    {month:'Month 15',emoji:'☁️',focus:'AWS / Cloud Fundamentals',tasks:['AWS core services: EC2, S3, RDS, Lambda, CloudFront, Route53','Deploy Node.js app to EC2 with Nginx reverse proxy','S3 + CloudFront for static file hosting and CDN','Lambda functions: create a serverless endpoint (API Gateway + Lambda)','IAM roles and policies: least privilege for each service','Resource: freeCodeCamp AWS certification course (YouTube, 13 hours, free)'],color:'#00ffcc'},
    {month:'Month 16',emoji:'📱',focus:'React Native / Mobile',tasks:['React Native basics: View, Text, StyleSheet, useState in mobile context','Expo: setup, hot reload, build standalone app','Navigation: React Navigation stack, tab, drawer navigators','AsyncStorage for local data, fetch API for remote data','Build and deploy simple mobile app to Expo Go','Resource: official React Native docs + Expo docs (both free)'],color:'#00ccff'},
    {month:'Month 17',emoji:'🏗️',focus:'Advanced Architecture',tasks:['Microservices vs Monolith: when to split, how to communicate','Message queues: RabbitMQ or Bull.js for background job processing','Event-driven architecture: publish/subscribe pattern with Redis Pub/Sub','GraphQL: schema, resolvers, queries, mutations with Apollo Server','API gateway pattern: single entry point for multiple services','Resource: Hussein Nasser Backend Engineering YouTube (free, deep)'],color:'#ffcc00'},
    {month:'Month 18',emoji:'📊',focus:'Data Layer Mastery',tasks:['Advanced SQL: window functions (ROW_NUMBER, RANK, LAG, LEAD)','Database sharding and read replicas: conceptual + implementation','Elasticsearch: full-text search, indexing, relevance scoring','Data migration strategies: blue/green, rolling, schema versioning','Caching layers: L1 (app memory) → L2 (Redis) → L3 (CDN)','Resource: Use The Index Luke (free SQL performance guide)'],color:'#00e676'},
    {month:'Month 19',emoji:'🤖',focus:'AI Integration in Web Apps',tasks:['OpenAI API: chat completions, streaming responses, function calling','Build AI-powered feature: smart search, content generation, classification','LangChain.js: chains, memory, RAG for web apps','Vercel AI SDK: streaming AI responses in Next.js (built-in hooks)','Rate limiting and cost control for LLM API calls','Resource: Vercel AI SDK docs (free, excellent DX)'],color:'#ff2d78'},
    {month:'Month 20',emoji:'🌍',focus:'Scalability & DevOps',tasks:['Kubernetes basics: pods, deployments, services, ingress on Minikube','Load testing with k6 or Artillery: find bottlenecks before production','Observability: structured logging (Winston), metrics (Prometheus), tracing','SLA/SLO/SLI: define reliability targets for your applications','Incident response: postmortem template, runbooks, on-call practices','Resource: Kelsey Hightower Kubernetes the Hard Way (free GitHub)'],color:'#00ffcc'},
    {month:'Month 21',emoji:'🎯',focus:'Open Source + Community',tasks:['Contribute to 2 open-source projects (fix bug, add feature, improve docs)','Write 5 technical blog posts (dev.to or Hashnode, free)','Give a lightning talk at a local meetup or online community','Build a developer tool that solves YOUR pain point','Answer 20 Stack Overflow questions in your expertise area','Share projects on Twitter/X tech community — build small following'],color:'#00ccff'},
    {month:'Month 22',emoji:'💼',focus:'Portfolio Polishing',tasks:['3 flagship projects: each with README, live URL, video demo, architecture diagram','Add analytics to portfolio: track visitor locations and most viewed projects','Performance audit: all projects must score 90+ on Lighthouse','Add a blog showcasing your technical learnings and problem solving','Record a 3-minute project walkthrough video for each main project','Get feedback from developers in communities (Discord, Reddit)'],color:'#ffcc00'},
    {month:'Month 23',emoji:'🎤',focus:'Interview Preparation',tasks:['Solve 100 LeetCode problems: Easy (50) + Medium (50) focused on arrays/trees/DP','System design mock interviews: design Instagram, Netflix, WhatsApp','Behavioral prep: 10 STAR stories covering leadership, conflict, failure, growth','React/Node.js technical deep dives: every hook, every middleware concept','Live coding: practice explaining your approach while coding (Pramp, free)','Research target companies: tech stack, engineering blog, recent launches'],color:'#00e676'},
    {month:'Month 24',emoji:'🏆',focus:'Job Ready — Land First Role',tasks:['Apply to 20 full-stack roles: startups (fast learning), product companies (craft), FAANG (scale)','Referrals: reach out to 10 engineers at target companies on LinkedIn (personalized message)','Negotiate confidently: use Glassdoor, Levels.fyi — know your market value','Consider contract/freelance while hunting: Toptal, Upwork for cashflow','MILESTONE: First full-stack developer role!','Salary: ₹6-12 LPA India fresh / $80-110K US entry / £40-55K UK'],color:'#ff2d78'},
  ],
  AI:[
    {month:'Month 1',emoji:'🐍',focus:'Python & Math Foundations',tasks:['Python mastery: lists, dicts, OOP, comprehensions, file I/O, decorators','NumPy: arrays, broadcasting, vectorized operations over loops','Pandas: DataFrame, read_csv, groupby, merge, pivot, fillna','Linear algebra basics: vectors, dot product, matrix multiplication, transpose','Complete Kaggle Python + Pandas micro-courses (free certificates)','Resource: Sentdex Python programming tutorials (YouTube)'],color:'#ffcc00'},
    {month:'Month 2',emoji:'📊',focus:'Statistics & Math for ML',tasks:['Probability: Bayes theorem, conditional probability, independence, random variables','Distributions: normal, binomial, Poisson — know PDF, mean, variance of each','Statistics: hypothesis testing, p-values, confidence intervals, t-test','Calculus: derivatives, chain rule, partial derivatives, gradient descent intuition','Matplotlib + Seaborn: histograms, scatter plots, box plots, heatmaps','Resource: 3Blue1Brown Essence of Linear Algebra + Calculus (YouTube, free)'],color:'#00ffcc'},
    {month:'Month 3',emoji:'🤖',focus:'Core Machine Learning',tasks:['Linear regression: MSE loss, normal equation, gradient descent from scratch','Logistic regression: sigmoid, binary cross-entropy, decision boundary','Decision trees: Gini impurity, information gain, max_depth parameter','Scikit-learn pipeline: fit, predict, train_test_split, cross_val_score','Evaluation: accuracy, precision, recall, F1-score, confusion matrix, ROC-AUC','Resource: Kaggle Intro to ML course (free certificate)'],color:'#00e676'},
    {month:'Month 4',emoji:'🌲',focus:'Advanced Classical ML',tasks:['Random forests: bagging, feature importance, OOB score, n_estimators','Gradient boosting: XGBoost, LightGBM — tune: n_estimators, lr, max_depth','K-means clustering, DBSCAN, PCA dimensionality reduction (hands-on)','Feature engineering: one-hot encoding, label encoding, scaling, imputation','Enter beginner Kaggle competition: Titanic or House Prices','Resource: Kaggle Intermediate ML course (free certificate)'],color:'#ff2d78'},
    {month:'Month 5',emoji:'🧠',focus:'Neural Networks Fundamentals',tasks:['Perceptron, activation functions: ReLU, sigmoid, tanh, softmax — when to use each','Backpropagation: compute gradients manually with pen + paper (do this once!)','Build neural network from scratch with NumPy (no frameworks)','Loss functions: MSE for regression, cross-entropy for classification','Keras sequential API: Dense layers, compile (optimizer, loss), fit, evaluate','Resource: Michael Nielsen Neural Networks and Deep Learning (free book online)'],color:'#00ccff'},
    {month:'Month 6',emoji:'🖼️',focus:'CNNs & Computer Vision',tasks:['Convolutions: filters, feature maps, padding, stride — visualize what they detect','MaxPooling, batch normalization, dropout — understand each purpose','Build CNN for CIFAR-10 with Keras (target >85% test accuracy)','Transfer learning: fine-tune ResNet50/MobileNetV2 on custom dataset','Data augmentation: rotation, flip, zoom, cutout — reduce overfitting','Resource: fast.ai Practical Deep Learning (lessons 1-4, completely free)'],color:'#ffcc00'},
    {month:'Month 7',emoji:'📝',focus:'NLP & Sequence Models',tasks:['Text preprocessing: tokenization, stop words, TF-IDF, word2vec embeddings','RNNs: vanilla RNN, LSTM, GRU — understand vanishing gradient problem','Sentiment analysis: LSTM on IMDB dataset (Keras, >88% accuracy target)','Introduction to Transformers: self-attention, multi-head attention, positional encoding','HuggingFace basics: AutoTokenizer, pipeline("text-classification")','Resource: Stanford CS224N lecture slides (free online, lecture 1-5)'],color:'#00e676'},
    {month:'Month 8',emoji:'🔄',focus:'Transformers & Pre-trained Models',tasks:['BERT: bidirectional encoder, MLM + NSP pretraining, [CLS] token for classification','GPT architecture: causal decoder, autoregressive next-token prediction','Fine-tune BERT for text classification using HuggingFace Trainer API (Colab)','LoRA: low-rank adaptation — fine-tune 7B model efficiently on free T4 GPU','Evaluate NLP: BLEU, ROUGE, perplexity, BERTScore — know when to use each','Resource: HuggingFace NLP Course (huggingface.co/learn, free certificate)'],color:'#ff2d78'},
    {month:'Month 9',emoji:'🏆',focus:'Kaggle Competition',tasks:['Join active Kaggle NLP or Computer Vision competition (aim top 30%)','Build end-to-end project: data collection → EDA → feature engineering → model → evaluation','Experiment tracking with Weights & Biases (free tier — log every run)','Model serialization: save/load with joblib, pickle, ONNX export','Document on GitHub: full README, results table, reproducibility instructions','Resource: Kaggle competition forums — read past winner solution writeups'],color:'#00ffcc'},
    {month:'Month 10',emoji:'🤗',focus:'LLMs & RAG Systems',tasks:['LangChain: chains, memory buffers, retrieval chains, agents with tools','RAG pipeline from scratch: load PDF → chunk text → embed → FAISS index → retrieve → answer','OpenAI / Anthropic API: function calling, streaming, system prompts, token counting','Vector databases: ChromaDB (local), Pinecone (cloud, free tier), FAISS (no server)','Build a domain-specific chatbot: answer questions from your own documents','Resource: LangChain docs + DeepLearning.AI LangChain course (free audit)'],color:'#ffcc00'},
    {month:'Month 11',emoji:'🌐',focus:'Deployment & MLOps Basics',tasks:['FastAPI: build REST endpoint serving model predictions (input validation with Pydantic)','Streamlit: interactive demo in 30 lines — deployed to Streamlit Community Cloud (free)','Docker: containerize ML app — Dockerfile for Python ML environment','Deploy to HuggingFace Spaces: free GPU inference for demos','MLflow: log experiments, compare runs, register best model','Resource: Full Stack Deep Learning 2022 (fullstackdeeplearning.com, free)'],color:'#00e676'},
    {month:'Month 12',emoji:'🚀',focus:'First Projects & Certs',tasks:['Polish 2 end-to-end projects: problem → data → model → deployed API → demo','Earn TensorFlow Developer Certificate or Kaggle ML certs (validates skills)','Kaggle profile: complete 3 notebooks, earn Expert badge if possible','Apply to 5 ML internships or research assistant positions','Prepare basic ML interview: bias-variance, regularization, gradient descent questions','Milestone: First ML internship or Kaggle competition placement!'],color:'#00ccff'},
    {month:'Month 13',emoji:'🔬',focus:'Research Paper Reading',tasks:['Read 2 foundational papers: Attention Is All You Need + BERT (annotated versions)','Papers With Code: find implementation for every paper you read','Implement a simplified Transformer from scratch in PyTorch (the best learning)','Subscribe to Arxiv Sanity Preserver or Hugging Face Paper pages','Read 1 paper per week minimum — build paper-reading habit for life','Resource: Yannic Kilcher YouTube (explains ML papers accessibly, free)'],color:'#ffcc00'},
    {month:'Month 14',emoji:'🎨',focus:'Generative AI Deep Dive',tasks:['GANs: generator/discriminator training, mode collapse, DCGAN on CelebA','Diffusion models: DDPM forward/reverse process, DDIM sampling','Stable Diffusion fine-tuning: DreamBooth, LoRA for text-to-image','VAEs: encoder-decoder structure, reparameterization trick, ELBO loss','Build creative project: text-to-image pipeline or audio generation','Resource: Andrej Karpathy makemore/nanoGPT (GitHub, free)'],color:'#00e676'},
    {month:'Month 15',emoji:'🛠️',focus:'LLM Engineering',tasks:['Prompt engineering: zero-shot, few-shot, chain-of-thought, self-consistency','Function calling / tool use: build agent that searches web and uses calculator','Fine-tune small LLM (Mistral-7B or Llama) with QLoRA on Google Colab','Build production RAG: chunking strategies, reranking, hybrid search (BM25 + vector)','Evaluate RAG: faithfulness, answer relevance, context recall (RAGAs library)','Resource: LlamaIndex docs + DeepLearning.AI RAG course (free audit)'],color:'#ff2d78'},
    {month:'Month 16',emoji:'☁️',focus:'Cloud ML Platforms',tasks:['AWS SageMaker: training jobs, endpoint deployment, model registry basics','Google Vertex AI: AutoML, custom training, Vertex Pipelines','Azure ML: workspace, compute, experiments, deployment to ACI','Serverless inference: AWS Lambda + API Gateway for lightweight models','Cost optimization: spot instances for training, scale-to-zero for inference','Resource: AWS ML certification prep (free tier sufficient for practice)'],color:'#00ffcc'},
    {month:'Month 17',emoji:'📡',focus:'MLOps Advanced',tasks:['CI/CD for ML: GitHub Actions running tests on model performance metrics','Data versioning with DVC: track datasets alongside code in Git','Feature store: Feast (open source) — define, materialize, retrieve features','Model monitoring: detect data drift with Evidently AI (free open source)','A/B testing ML models: shadow deployment, canary release, champion-challenger','Resource: Made With ML (madewithml.com, free, production ML focus)'],color:'#00ccff'},
    {month:'Month 18',emoji:'🔥',focus:'Specialization Choice',tasks:['Choose track: Computer Vision / NLP / Reinforcement Learning / MLOps / AI Safety','CV track: object detection (YOLO v8), segmentation (SAM), video understanding','NLP track: instruction tuning, RLHF, alignment techniques, red-teaming LLMs','RL track: Q-learning, policy gradients, PPO — OpenAI Gymnasium environments','MLOps track: Kubeflow pipelines, Seldon Core, Bentoml, Ray Serve','Publish first technical blog post about your specialization choice'],color:'#ffcc00'},
    {month:'Month 19',emoji:'🏗️',focus:'System Design for ML',tasks:['Design a recommendation system: collaborative filtering + content-based hybrid','Real-time inference system: feature computation → model server → cache → client','Training pipeline orchestration: Airflow or Prefect for scheduled retraining','Batch vs real-time: fraud detection (real-time) vs recommendation (batch update)','Data lake architecture: Bronze → Silver → Gold layers (Delta Lake / Iceberg)','Resource: Chip Huyen Designing Machine Learning Systems (book, check library)'],color:'#00e676'},
    {month:'Month 20',emoji:'📊',focus:'Advanced Projects',tasks:['Build a multi-modal project: combine vision + text (image captioning, visual QA)','Reproduce a recent Arxiv paper result (within 5% of reported metrics)','Contribute to HuggingFace Hub: submit a model or dataset with a model card','Build a full ML product: landing page + model API + demo + monitoring dashboard','Write detailed technical report for each project (like a paper methodology section)','Kaggle: target top 10% placement in a competition'],color:'#ff2d78'},
    {month:'Month 21',emoji:'🎓',focus:'Certifications & Community',tasks:['Pursue TensorFlow Developer Certificate or AWS ML Specialty exam prep','Google Professional ML Engineer: study guide + practice exams','Write 3 technical blog posts on Medium or Towards Data Science','Give a talk at a local AI/ML meetup or university tech club','Engage on Twitter/X and LinkedIn ML community — share papers and experiments','Apply for AI fellowships: MLCommons, Cohere For AI, EleutherAI community'],color:'#00ffcc'},
    {month:'Month 22',emoji:'💼',focus:'Portfolio Finalization',tasks:['5 polished ML projects on GitHub: each with README, demo, benchmark results','Clean, reproducible code: virtual environment, requirements.txt, config files','One novel project that nobody else has done — your signature work','Technical blog: 5 posts showing depth of understanding in your area','Video demo: 3-minute walkthrough of your best project (YouTube or Loom)','Collect testimonials: from Kaggle teammates, open-source contributors you helped'],color:'#00ccff'},
    {month:'Month 23',emoji:'🎤',focus:'Interview Preparation',tasks:['ML theory interviews: regularization, bias-variance, evaluation metrics, optimization','Coding interviews: numpy/pandas manipulation, implement algorithms from scratch','ML system design: design a recommendation engine, fraud detection, search ranking','Case studies: walk through a past Kaggle competition solution end-to-end','Behavioral: STAR stories — explain complex ML decisions to non-technical stakeholders','Mock interviews: Pramp (free) or Interviewing.io (free basic tier)'],color:'#ffcc00'},
    {month:'Month 24',emoji:'🏆',focus:'Job Ready — Land First ML Role',tasks:['Apply to 15 ML roles: ML Engineer, Data Scientist, AI Researcher, MLOps Engineer','Target: AI-first startups (fast pace), Big Tech (scale), Research labs (depth)','Referrals: DM 10 ML engineers at target companies — ask about their team culture','MILESTONE: First ML engineering or data science role! 🎉','Salary: ₹8-15 LPA India entry / $90-120K US / £50-70K UK','Never stop learning: new paper every week, new Kaggle every quarter'],color:'#00e676'},
  ],
};

// ══ JOBS & INTERNSHIPS DATA ══
const JOBS_DATA={
  internships:[
    {name:'Internshala',url:'https://internshala.com',desc:'India\'s largest internship platform — tech, marketing, design. 50,000+ listings. Filter by Work From Home.',icon:'🎓',tag:'India'},
    {name:'LinkedIn Jobs',url:'https://www.linkedin.com/jobs',desc:'Global job & internship network. Best for networking with recruiters. Set job alerts for your domain.',icon:'💼',tag:'Global'},
    {name:'Unstop',url:'https://unstop.com',desc:'Competitions, hackathons, and internship listings for students. Great for freshers.',icon:'🏆',tag:'India'},
    {name:'LetsIntern',url:'https://www.letsintern.com',desc:'Verified internships across India. Filter by domain, stipend, and duration.',icon:'🌟',tag:'India'},
    {name:'Wellfound (AngelList)',url:'https://wellfound.com/jobs',desc:'Startup internships and jobs globally. Equity, salary transparency. Best for startup culture.',icon:'🚀',tag:'Global'},
    {name:'Indeed',url:'https://www.indeed.com',desc:'Largest job search engine globally. Both internships and full-time. Excellent for remote roles.',icon:'🔍',tag:'Global'},
    {name:'Naukri',url:'https://www.naukri.com',desc:'India\'s leading job portal. Strong for IT, software, and engineering roles. Upload your resume.',icon:'💻',tag:'India'},
    {name:'HackerEarth Jobs',url:'https://www.hackerearth.com/jobs',desc:'Dev-focused job board. Companies post coding challenges as part of hiring. Great for freshers.',icon:'⚡',tag:'Tech'},
  ],
  remote:[
    {name:'Remote.co',url:'https://remote.co/remote-jobs',desc:'Curated remote-only job listings. Strong for developer, designer, and PM roles.',icon:'🌍',tag:'Remote'},
    {name:'We Work Remotely',url:'https://weworkremotely.com',desc:'One of the largest remote work communities. Top companies post here regularly.',icon:'🏡',tag:'Remote'},
    {name:'Remotive',url:'https://remotive.com',desc:'Remote tech jobs newsletter + job board. Aggregates the best remote positions.',icon:'📡',tag:'Remote'},
    {name:'Turing',url:'https://www.turing.com',desc:'Work remotely for US companies from India. Rigorous vetting but excellent pay.',icon:'🤖',tag:'Remote'},
    {name:'Toptal',url:'https://www.toptal.com',desc:'Elite freelance network. Top 3% of talent. Excellent rates for senior developers.',icon:'⭐',tag:'Freelance'},
    {name:'Upwork',url:'https://www.upwork.com',desc:'World\'s largest freelance marketplace. Good for building portfolio and initial clients.',icon:'💰',tag:'Freelance'},
  ],
  domain:{
    Cybersecurity:[
      {name:'CyberSeek',url:'https://www.cyberseek.org/pathway.html',desc:'Interactive cybersecurity career pathway. Shows exact certifications needed for each role.',icon:'🗺️'},
      {name:'ClearanceJobs',url:'https://www.clearancejobs.com',desc:'Security clearance required jobs — US government/defense sector. High pay.',icon:'🔒'},
      {name:'Dice',url:'https://www.dice.com',desc:'Tech-focused job board. Strong cybersecurity and IT security listings.',icon:'🎲'},
      {name:'InfoSec Jobs',url:'https://infosec-jobs.com',desc:'Dedicated cybersecurity job board. Remote-friendly. SOC, pentesting, GRC roles.',icon:'🛡️'},
      {name:'HackerOne',url:'https://www.hackerone.com/jobs',desc:'Bug bounty + career opportunities in security. Direct connection to security teams.',icon:'🐛'},
    ],
    'Full Stack':[
      {name:'GitHub Jobs',url:'https://jobs.github.com',desc:'Developer-first job listings from companies that care about code quality.',icon:'🐙'},
      {name:'Stack Overflow Jobs',url:'https://stackoverflow.com/jobs',desc:'Dev community jobs. Companies post developer-specific roles with tech stack details.',icon:'📚'},
      {name:'Glassdoor',url:'https://www.glassdoor.com',desc:'Jobs + salary info + company reviews. Critical for salary negotiation.',icon:'🏢'},
      {name:'YCombinator Jobs',url:'https://www.workatastartup.com',desc:'Jobs at YC-backed startups. Competitive pay, equity, and fast growth environments.',icon:'🚀'},
      {name:'Hirable.ai',url:'https://hirable.ai',desc:'AI-matched developer roles. Upload resume, get matched to relevant openings.',icon:'🤖'},
    ],
    AI:[
      {name:'AI Jobs (aijobs.net)',url:'https://aijobs.net',desc:'Dedicated AI/ML job board. ML Engineer, Data Scientist, AI Researcher roles worldwide.',icon:'🧠'},
      {name:'Kaggle Jobs',url:'https://www.kaggle.com/jobs',desc:'Data science-focused listings. Companies that value Kaggle rankings and notebooks.',icon:'🏅'},
      {name:'Machine Learning Jobs',url:'https://www.ml-jobs.ai',desc:'Aggregated ML/AI job listings from top companies — FAANG, startups, research labs.',icon:'⚡'},
      {name:'Papers With Code Jobs',url:'https://paperswithcode.com/jobs',desc:'Research-oriented roles from organizations publishing ML papers.',icon:'📄'},
      {name:'HuggingFace Jobs',url:'https://apply.workable.com/huggingface',desc:'Direct opportunities at HuggingFace — one of the most exciting AI orgs.',icon:'🤗'},
    ],
  },
  tips:[
    '📝 Tailor your resume for EVERY application — use keywords from the job description',
    '🤝 LinkedIn connections > cold applications — reach out to recruiters directly',
    '💻 Portfolio > Resume — a live project link gets 3× more responses',
    '📧 Cold email hiring managers with a specific, short email about your value',
    '🎯 Apply to 10 companies per day during active job hunt — it\'s a numbers game',
    '🔄 Follow up after 7 days if no response — most candidates don\'t',
    '🌟 Referrals are 10× more effective — attend meetups and hackathons to build network',
    '📊 Track every application in a spreadsheet: company, date, status, follow-up date',
  ],
};

let roadmapDomain='Cybersecurity';
let rmOpenPhase={Cybersecurity:0,'Full Stack':0,AI:0,'🔴 Red Team':0,'🔵 Blue Team':0};
let rmView='phase'; // 'phase' | 'monthly'
let rmOpenMonth={Cybersecurity:0,'Full Stack':0,AI:0};
let jobsDomain='Cybersecurity';
let jobsTab='internships';
// ══════════════════════════════════════════════════
//  JOBS & INTERNSHIPS SECTION
// ══════════════════════════════════════════════════
function renderJobs(){
  const tabs=[
    {id:'internships',label:'🎓 Internships'},
    {id:'remote',label:'🌍 Remote & Freelance'},
    {id:'domain',label:'🎯 Domain-Specific'},
    {id:'tips',label:'💡 Application Tips'},
  ];
  const jobTabColors={internships:{c:'#00ffcc',bg:'rgba(0,255,204'},remote:{c:'#7b2fff',bg:'rgba(123,47,255'},domain:{c:'#ff2d55',bg:'rgba(255,45,85'},tips:{c:'#ffcc00',bg:'rgba(255,204,0'}};
  document.getElementById('jobs-tabs').innerHTML=tabs.map(t=>{
    const jc=jobTabColors[t.id]||{c:'#00ffcc',bg:'rgba(0,255,204'};
    const isA=t.id===jobsTab;
    return `<button class="tab ${isA?'active':''}" onclick="setJobsTab('${t.id}')"
      style="border-color:${jc.c}${isA?'':'55'};color:${isA?jc.c:jc.c+'99'};background:${jc.bg},${isA?'.28)':'.10)'};${isA?'box-shadow:0 0 20px '+jc.c+'50,inset 0 0 12px '+jc.c+'20;font-weight:700;':''}">
      ${t.label}</button>`;
  }).join('');

  // Domain tabs (only shown for domain tab)
  const domains=['Cybersecurity','Full Stack','AI'];
  document.getElementById('jobs-domain-tabs').innerHTML=(jobsTab==='domain')?
    domains.map(d=>`<button class="tab ${d===jobsDomain?'active':''}" onclick="setJobsDomain('${d}')">${d}</button>`).join(''):'';

  const tabColors={
    internships:{col:'#00ffcc',bg:'rgba(0,255,204,.07)',label:'🎓 Internship Platforms',tip:'💡 Pro Tip: Apply to at least 10 internships simultaneously. Most postings expire within 2 weeks.'},
    remote:{col:'#7b2fff',bg:'rgba(123,47,255,.07)',label:'🌍 Remote & Freelance Platforms',tip:'🌍 Remote jobs often pay significantly more than local equivalents. Build your English skills and portfolio first.'},
    domain:{col:{Cybersecurity:'#ff2d55','Full Stack':'#0099ff',AI:'#ffcc00'}[jobsDomain]||'#00ffcc',bg:{Cybersecurity:'rgba(255,45,120,.07)','Full Stack':'rgba(0,153,255,.15)',AI:'rgba(0,230,118,.15)'}[jobsDomain]||'rgba(0,255,204,.07)',label:'🎯 Domain-Specific Job Boards',tip:`🎯 These platforms specialize in ${jobsDomain} roles — higher signal-to-noise than general boards.`},
    tips:{col:'#ffcc00',bg:'rgba(255,204,0,.07)',label:'💡 Job Application Tips',tip:'🏆 Job hunting is a skill. These strategies are distilled from 100s of successful tech placements.'},
  };
  const tc=tabColors[jobsTab]||tabColors.tips;
  let html=`<div class="sub-panel" style="background:linear-gradient(135deg,${tc.col}28,${tc.col}08);border-color:${tc.col}66;position:relative;overflow:hidden;box-shadow:inset 0 0 30px ${tc.col}0a;">
    <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,${tc.col},${tc.col}55);"></div>
    <div class="sub-panel-label" style="color:${tc.col};">${tc.label}</div>
    <div style="margin-bottom:16px;padding:12px 16px;background:${tc.col}12;border:1px solid ${tc.col}44;border-left:4px solid ${tc.col};border-radius:0 8px 8px 0;font-family:'JetBrains Mono',monospace;font-size:.68rem;color:${tc.col};">${tc.tip}</div>`;
  if(jobsTab==='internships'){
    html+=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:14px;">
      ${JOBS_DATA.internships.map(job=>`
        <a href="${job.url}" target="_blank" rel="noopener" style="border:1px solid ${tc.col}25;background:linear-gradient(135deg,${tc.col}06,rgba(0,0,0,.3));border-radius:12px;padding:20px;text-decoration:none;display:block;transition:all .25s;border-left:4px solid ${tc.col};" onmouseover="this.style.borderColor='${tc.col}';this.style.transform='translateY(-4px)';this.style.boxShadow='0 8px 30px ${tc.col}25'" onmouseout="this.style.borderColor='${tc.col}25';this.style.transform='';this.style.boxShadow=''">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
            <span style="font-size:1.8rem;">${job.icon}</span>
            <div>
              <div style="font-family:'Orbitron',monospace;font-size:.85rem;font-weight:700;color:#fff;">${job.name}</div>
              <span style="font-family:'JetBrains Mono',monospace;font-size:.55rem;padding:2px 8px;border-radius:10px;background:${tc.col}18;color:${tc.col};border:1px solid ${tc.col}33;">${job.tag}</span>
            </div>
            <span style="margin-left:auto;color:${tc.col};">↗</span>
          </div>
          <div style="font-size:.8rem;color:var(--muted);line-height:1.5;">${job.desc}</div>
        </a>`).join('')}
    </div>`;
  } else if(jobsTab==='remote'){
    html+=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:14px;">
      ${JOBS_DATA.remote.map(job=>`
        <a href="${job.url}" target="_blank" rel="noopener" style="border:1px solid ${tc.col}25;background:linear-gradient(135deg,${tc.col}06,rgba(0,0,0,.3));border-radius:12px;padding:20px;text-decoration:none;display:block;transition:all .25s;border-left:4px solid ${tc.col};" onmouseover="this.style.borderColor='${tc.col}';this.style.transform='translateY(-4px)';this.style.boxShadow='0 8px 30px ${tc.col}22'" onmouseout="this.style.borderColor='${tc.col}25';this.style.transform='';this.style.boxShadow=''">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
            <span style="font-size:1.8rem;">${job.icon}</span>
            <div>
              <div style="font-family:'Orbitron',monospace;font-size:.85rem;font-weight:700;color:#fff;">${job.name}</div>
              <span style="font-family:'JetBrains Mono',monospace;font-size:.55rem;padding:2px 8px;border-radius:10px;background:${tc.col}18;color:${tc.col};border:1px solid ${tc.col}33;">${job.tag}</span>
            </div>
            <span style="margin-left:auto;color:${tc.col};">↗</span>
          </div>
          <div style="font-size:.8rem;color:var(--muted);line-height:1.5;">${job.desc}</div>
        </a>`).join('')}
    </div>`;
  } else if(jobsTab==='domain'){
    const domainJobs=JOBS_DATA.domain[jobsDomain]||[];
    html+=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:14px;">
      ${domainJobs.map(job=>`
        <a href="${job.url}" target="_blank" rel="noopener" style="border:1px solid ${tc.col}25;background:linear-gradient(135deg,${tc.col}06,rgba(0,0,0,.3));border-radius:12px;padding:20px;text-decoration:none;display:block;transition:all .25s;border-left:4px solid ${tc.col};" onmouseover="this.style.borderColor='${tc.col}';this.style.transform='translateY(-4px)'" onmouseout="this.style.borderColor='${tc.col}25';this.style.transform=''">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
            <span style="font-size:1.8rem;">${job.icon}</span>
            <div style="font-family:'Orbitron',monospace;font-size:.85rem;font-weight:700;color:#fff;">${job.name}</div>
            <span style="margin-left:auto;color:${tc.col};">↗</span>
          </div>
          <div style="font-size:.8rem;color:var(--muted);line-height:1.5;">${job.desc}</div>
        </a>`).join('')}
    </div>`;
  } else if(jobsTab==='tips'){
    html+=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:12px;">
      ${JOBS_DATA.tips.map((tip,i)=>`
        <div style="padding:16px;border:1px solid ${tc.col}25;border-left:4px solid ${tc.col};border-radius:0 10px 10px 0;background:linear-gradient(90deg,${tc.col}08,transparent);">
          <div style="font-family:'JetBrains Mono',monospace;font-size:.6rem;color:${tc.col};margin-bottom:6px;">TIP ${String(i+1).padStart(2,'0')}</div>
          <div style="font-size:.85rem;color:var(--text);line-height:1.55;">${tip}</div>
        </div>`).join('')}
    </div>
    <div style="margin-top:20px;padding:20px;background:linear-gradient(135deg,rgba(123,47,255,.1),rgba(0,255,204,.05));border:1px solid rgba(123,47,255,.25);border-radius:12px;">
      <div style="font-family:'Orbitron',monospace;font-size:.85rem;color:var(--neon2);margin-bottom:12px;">📋 SAMPLE APPLICATION TRACKER</div>
      <div style="font-family:'JetBrains Mono',monospace;font-size:.7rem;color:var(--muted);line-height:1.8;">
        Keep a spreadsheet: <span style="color:var(--neon1);">Company | Role | Date Applied | Status | Follow-up Date | Notes | Link</span><br><br>
        Update it every day. Aim for 10 applications per day. Most offers come from companies applied to 2–3× or through referrals.
      </div>
    </div>`;
  }
  html+='</div>';
  document.getElementById('jobs-content').innerHTML=html;
}
function setJobsTab(t){jobsTab=t;renderJobs();}
function setJobsDomain(d){jobsDomain=d;renderJobs();}

// ══════════════════════════════════════════════════
//  RED TEAM ROADMAP DATA
// ══════════════════════════════════════════════════
const RED_TEAM_ROADMAP=[
  {phase:'🌱 Phase 1 — Foundations',time:'0–2 Months',color:'#ff6b35',items:[
    '🖥️ Linux CLI mastery — bash scripting, file permissions, process management',
    '🌐 Networking essentials — TCP/IP, OSI, DNS, HTTP, Wireshark analysis',
    '🐍 Python for exploitation — sockets, requests, subprocess, pwntools basics',
    '🔍 Recon tools — theHarvester, Shodan, Maltego, Google Dorks, OSINT framework',
    '📚 Resource: TryHackMe Pre-Security path (free, start here)',
    '🏆 Milestone: Comfortable in Linux CLI + Python scripting',
  ],youtube:[
    {title:'Linux for Hackers — Full Beginner Course',channel:'NetworkChuck',duration:'3.5 hrs',url:'https://www.youtube.com/watch?v=VbEx7B_PTOE'},
    {title:'Python for Ethical Hacking — Full Course',channel:'freeCodeCamp',duration:'4 hrs',url:'https://www.youtube.com/watch?v=XWuP5Yf5ILI'},
  ]},
  {phase:'⚡ Phase 2 — Exploitation Basics',time:'2–5 Months',color:'#ff2d78',items:[
    '🌐 OWASP Top 10 — SQLi, XSS, CSRF, SSRF, IDOR, XXE hands-on via DVWA/WebGoat',
    '🛡️ Burp Suite — intercept, repeater, intruder, scanner, Collaborator',
    '🔑 Metasploit Framework — msfconsole, payloads, auxiliary modules, meterpreter',
    '🐧 Linux PrivEsc — SUID, sudo, cron, PATH hijack, kernel exploits (GTFOBins)',
    '🎯 HackTheBox Starting Point — Tier 1 & 2 machines',
    '🏆 Milestone: Root 10 easy HackTheBox machines',
  ],youtube:[
    {title:'Full Ethical Hacking Course — Beginner to Advanced',channel:'TCM Security',duration:'4 hrs',url:'https://www.youtube.com/watch?v=fNzpcB7ODxQ'},
    {title:'Metasploit for Beginners',channel:'David Bombal',duration:'3 hrs',url:'https://www.youtube.com/watch?v=8lR27r8Y3oe'},
  ]},
  {phase:'🔥 Phase 3 — Active Directory & Advanced',time:'5–10 Months',color:'#ff4400',items:[
    '🏠 Active Directory attacks — BloodHound, Kerberoasting, AS-REP Roasting',
    '🔄 Lateral movement — Pass-the-Hash, Pass-the-Ticket, DCSync, DCOM',
    '🏴 Domain dominance — Golden/Silver Tickets, Skeleton Key, DCShadow',
    '📡 Network attacks — MITM, ARP poisoning, SMB relay, Responder, NTLMv2',
    '🛠️ Tools: Impacket, CrackMapExec, Evil-WinRM, Chisel (pivoting)',
    '🏆 Milestone: Complete HTB Pro Lab "Offshore" or RastaLabs',
  ],youtube:[
    {title:'Active Directory Attacks — Full Course',channel:'TCM Security',duration:'4 hrs',url:'https://www.youtube.com/watch?v=pKtDptzIQLM'},
    {title:'Attacking Active Directory: 0 to 0.9',channel:'S1ren',duration:'3.5 hrs',url:'https://www.youtube.com/watch?v=jUc1J31DNdw'},
  ]},
  {phase:'🚀 Phase 4 — Red Team Operations',time:'10–16 Months',color:'#cc0033',items:[
    '🎭 Red Team vs Pentest — scoping, rules of engagement, OPSEC, stealth',
    '🛡️ AV/EDR Evasion — obfuscation, AMSI bypass, LOLBins, process injection',
    '🌐 C2 Frameworks — Cobalt Strike concepts, Havoc C2, Sliver (open source)',
    '📝 Custom payload development — shellcode, reflective DLL injection',
    '🔵 Purple teaming — ATT&CK emulation, detection engineering collaboration',
    '🏆 Milestone: Pass CRTO (Certified Red Team Operator) exam',
  ],youtube:[
    {title:'Red Team Operations & Cobalt Strike',channel:'Crow',duration:'4 hrs',url:'https://www.youtube.com/watch?v=q7VQeK533zI'},
    {title:'MITRE ATT&CK Framework Full Walkthrough',channel:'John Hammond',duration:'3 hrs',url:'https://www.youtube.com/watch?v=ic_6yGhagNY'},
  ]},
  {phase:'🏆 Phase 5 — OSCP & Career',time:'16–24 Months',color:'#880022',items:[
    '📜 OSCP certification — 90-day PWK labs, 24-hour hands-on exam',
    '🐛 Bug bounty — HackerOne/Bugcrowd private programs, P1/P2 hunting',
    '🔬 Specialization: Web AppSec (eWPT/BSCP) / Network (CRTE) / Cloud Red Team',
    '📝 Writing exploits — CVE research, PoC development, responsible disclosure',
    '💼 Build portfolio — GitHub CVEs, CTF write-ups, custom tools',
    '🏆 Milestone: OSCP certified + first red team/pentest job',
  ],youtube:[
    {title:'OSCP Preparation — Zero to Hero',channel:'TryHackMe',duration:'4 hrs',url:'https://www.youtube.com/watch?v=DkMcNd2z5Dc'},
    {title:'How to Pass OSCP — Full Strategy',channel:'TCM Security',duration:'3.5 hrs',url:'https://www.youtube.com/watch?v=bBrM8UmmAB0'},
  ]},
];

// ══════════════════════════════════════════════════
//  BLUE TEAM ROADMAP DATA
// ══════════════════════════════════════════════════
const BLUE_TEAM_ROADMAP=[
  {phase:'🌱 Phase 1 — SOC Foundations',time:'0–2 Months',color:'#00ccff',items:[
    '🖥️ Windows & Linux fundamentals — event logs, registry, processes, services',
    '🌐 Networking for defenders — packet analysis, Wireshark, firewall rules, IDS',
    '🔐 Security concepts — CIA triad, defense-in-depth, least privilege, attack lifecycle',
    '📊 SIEM intro — what is log correlation, alert triage, false positive tuning',
    '📚 Resource: TryHackMe "Pre-Security" + "Blue Team" learning path (free)',
    '🏆 Milestone: Understand basic Windows/Linux logs and network packets',
  ],youtube:[
    {title:'SOC Analyst Full Course for Beginners',channel:'Gerald Auger',duration:'4 hrs',url:'https://www.youtube.com/watch?v=ug5dXFyJF4A'},
    {title:'Wireshark Full Tutorial — Network Analysis',channel:'David Bombal',duration:'3.5 hrs',url:'https://www.youtube.com/watch?v=lb1Dw0elw0Q'},
  ]},
  {phase:'⚡ Phase 2 — Threat Detection',time:'2–5 Months',color:'#0099cc',items:[
    '🔍 Log analysis — Windows Event IDs 4624/4625/4688/4698/4720/4776',
    '🛡️ Sysmon deployment — configuration, key event IDs, SwiftOnSecurity config',
    '📊 Splunk & ELK — basic SPL queries, dashboards, saved searches, alerts',
    '🦠 Malware indicators — IOCs, YARA rules, threat intel feeds (OTX, VirusTotal)',
    '🎯 Blue Team Labs Online & CyberDefenders — SOC Level 1 path',
    '🏆 Milestone: Complete 10 SOC challenges on CyberDefenders',
  ],youtube:[
    {title:'Splunk Tutorial for Beginners — Full Course',channel:'Splunk',duration:'4 hrs',url:'https://www.youtube.com/watch?v=vBYrfNNYpLE'},
    {title:'ELK Stack for Security — SIEM Setup',channel:'MyDFIR',duration:'3 hrs',url:'https://www.youtube.com/watch?v=T5sHm8iuvjE'},
  ]},
  {phase:'🔥 Phase 3 — Incident Response',time:'5–10 Months',color:'#0077aa',items:[
    '🚨 IR methodology — NIST framework (Prepare → Detect → Contain → Eradicate → Recover)',
    '🔬 Memory forensics — Volatility3, pslist, netscan, cmdline, filescan commands',
    '💾 Disk forensics — Autopsy, FTK Imager, timeline analysis, deleted file recovery',
    '📡 Network forensics — PCAP analysis, Zeek/Bro logs, Suricata alerts',
    '🧪 Threat hunting — proactive TTP-based hunting using ATT&CK Navigator',
    '🏆 Milestone: CompTIA Security+ certified',
  ],youtube:[
    {title:'Digital Forensics Full Course',channel:'Cybersecurity-Courses',duration:'4 hrs',url:'https://www.youtube.com/watch?v=JKcnM9N0HnQ'},
    {title:'Volatility Memory Forensics Tutorial',channel:'13Cubed',duration:'3 hrs',url:'https://www.youtube.com/watch?v=l3DTzBXSxSI'},
  ]},
  {phase:'🚀 Phase 4 — Advanced Defense',time:'10–18 Months',color:'#005588',items:[
    '📋 Detection engineering — Sigma rules, writing custom SIEM detections',
    '🔒 Zero Trust architecture — never trust/always verify, identity-centric security',
    '☁️ Cloud security — AWS CloudTrail, Azure Sentinel, GCP SCC monitoring',
    '🌐 Endpoint security — EDR solutions, Windows Defender ATP, CrowdStrike concepts',
    '🛠️ SOAR — automated playbooks, incident enrichment, Shuffle SOAR (free)',
    '🏆 Milestone: BTL1 (Blue Team Labs Level 1) or CompTIA CySA+ certified',
  ],youtube:[
    {title:'Detection Engineering — Writing Sigma Rules',channel:'The Taggart Institute',duration:'3.5 hrs',url:'https://www.youtube.com/watch?v=ok0IWsjFPGs'},
    {title:'Azure Sentinel SIEM Full Tutorial',channel:'Microsoft Security',duration:'4 hrs',url:'https://www.youtube.com/watch?v=R9VJGZpgwHM'},
  ]},
  {phase:'🏆 Phase 5 — Senior SOC / Career',time:'18–24 Months',color:'#003355',items:[
    '🔬 Threat intelligence — MITRE ATT&CK, STIX/TAXII, Diamond Model analysis',
    '🎯 Purple team exercises — coordinate with red team, improve detection coverage',
    '📊 SOC metrics — MTTD, MTTR, detection coverage heatmaps',
    '🏗️ Build a mini-SOC — Wazuh + ELK + TheHive + MISP (all free and open source)',
    '📜 Advanced certs: GCFE, GCIH, GREM (GIAC), Microsoft SC-200',
    '🏆 Milestone: First SOC analyst / IR analyst / threat hunter role',
  ],youtube:[
    {title:'Build a Free SOC Home Lab 2024',channel:'MyDFIR',duration:'4 hrs',url:'https://www.youtube.com/watch?v=5TnCrKfqrFI'},
    {title:'Threat Hunting with MITRE ATT&CK',channel:'SANS Institute',duration:'3 hrs',url:'https://www.youtube.com/watch?v=bYZqCIIzGHk'},
  ]},
];

// ══════════════════════════════════════════════════
//  PRACTICAL PLATFORMS DATA
// ══════════════════════════════════════════════════
const PRACTICAL_DATA={
  Cybersecurity:{
    beginner:[
      {name:'TryHackMe',url:'https://tryhackme.com',icon:'🎯',desc:'Best beginner platform. Guided rooms, structured learning paths, Pre-Security & SOC Level 1 paths. Browser-based labs — no setup needed.',tag:'FREE TIER'},
      {name:'OverTheWire: Bandit',url:'https://overthewire.org/wargames/bandit/',icon:'🐧',desc:'Learn Linux CLI through SSH challenges. Start at Level 0, work up to Level 34. Perfect for absolute beginners.',tag:'100% FREE'},
      {name:'PicoCTF',url:'https://picoctf.org',icon:'🏁',desc:'Carnegie Mellon\'s beginner CTF. Web, crypto, forensics, binary. Permanent archive of past challenges.',tag:'100% FREE'},
      {name:'Cyber Aces',url:'https://cyberaces.org',icon:'🎖️',desc:'SANS free beginner curriculum. OS, networking, and scripting foundations with guided modules.',tag:'100% FREE'},
    ],
    intermediate:[
      {name:'HackTheBox',url:'https://www.hackthebox.com',icon:'📦',desc:'The gold standard. Active machines, retired machines (free after 7 days), prolabs, and Sherlocks for blue team.',tag:'FREE + PAID'},
      {name:'PortSwigger Web Academy',url:'https://portswigger.net/web-security',icon:'🌐',desc:'Best free web security training. 100+ interactive labs covering all OWASP categories. Used for real pentest prep.',tag:'100% FREE'},
      {name:'VulnHub',url:'https://www.vulnhub.com',icon:'💾',desc:'Download vulnerable VMs and attack them locally. Hundreds of machines, all free. Great for OSCP prep.',tag:'100% FREE'},
      {name:'CyberDefenders',url:'https://cyberdefenders.org',icon:'🔵',desc:'Blue team focused. PCAP analysis, malware investigation, threat hunting challenges. SOC L1 path included.',tag:'FREE TIER'},
    ],
    advanced:[
      {name:'HackTheBox Pro Labs',url:'https://www.hackthebox.com/hacker/pro-labs',icon:'🔴',desc:'Full simulated enterprise networks: Offshore, RastaLabs, Cybernetics. Best OSCP preparation available.',tag:'PAID'},
      {name:'Offensive Security PG Practice',url:'https://www.offensive-security.com/labs/',icon:'⚔️',desc:'OffSec\'s proving grounds. Same difficulty as OSCP exam machines. Essential for OSCP candidates.',tag:'PAID'},
      {name:'Blue Team Labs Online',url:'https://blueteamlabs.online',icon:'🛡️',desc:'Advanced incident response, malware analysis, threat hunting challenges for blue team specialists.',tag:'FREE + PAID'},
      {name:'RootMe',url:'https://www.root-me.org',icon:'🌍',desc:'French CTF platform with 400+ challenges across web, network, forensics, cryptography and app exploitation.',tag:'100% FREE'},
    ]
  },
  'Full Stack':{
    beginner:[
      {name:'freeCodeCamp',url:'https://www.freecodecamp.org',icon:'🏕️',desc:'Complete full stack curriculum with certifications. HTML/CSS, JavaScript, React, Node.js, MongoDB — all free.',tag:'100% FREE'},
      {name:'The Odin Project',url:'https://www.theodinproject.com',icon:'🧙',desc:'Project-based full stack learning. Foundations → Ruby/Rails/JS path. Real projects, no passive tutorials.',tag:'100% FREE'},
      {name:'CS50 by Harvard',url:'https://cs50.harvard.edu/web/',icon:'🎓',desc:'CS50W covers HTML, CSS, JavaScript, Django, SQL, and more. World-class free curriculum with certificates.',tag:'100% FREE'},
      {name:'Scrimba',url:'https://scrimba.com',icon:'💻',desc:'Interactive coding platform. Learn React, JavaScript, HTML/CSS through interactive screencasts.',tag:'FREE TIER'},
    ],
    intermediate:[
      {name:'Frontend Mentor',url:'https://www.frontendmentor.io',icon:'🎨',desc:'Real-world frontend challenges. Build actual designs from Figma files. Community feedback on your solutions.',tag:'FREE TIER'},
      {name:'Full Stack Open (Helsinki)',url:'https://fullstackopen.com',icon:'🇫🇮',desc:'University of Helsinki\'s free full stack course. React, Redux, Node.js, GraphQL, TypeScript, CI/CD.',tag:'100% FREE'},
      {name:'JavaScript30',url:'https://javascript30.com',icon:'⚡',desc:'30 vanilla JS projects in 30 days. No frameworks. Essential DOM manipulation and JS mastery.',tag:'100% FREE'},
      {name:'LeetCode',url:'https://leetcode.com',icon:'💡',desc:'Interview prep. 3000+ DSA problems with company tags. Essential for FAANG interviews.',tag:'FREE TIER'},
    ],
    advanced:[
      {name:'System Design Primer',url:'https://github.com/donnemartin/system-design-primer',icon:'🏗️',desc:'GitHub\'s most starred system design resource. Scalability, caching, databases, microservices, real interview prep.',tag:'100% FREE'},
      {name:'Roadmap.sh',url:'https://roadmap.sh',icon:'🗺️',desc:'Visual, interactive learning roadmaps for every tech role. Frontend, Backend, DevOps, AI/ML paths.',tag:'100% FREE'},
      {name:'Excalidraw + Build Projects',url:'https://github.com/codecrafters-io/build-your-own-x',icon:'🔨',desc:'"Build Your Own X" — implement your own Redis, Git, Docker from scratch. True advanced learning.',tag:'100% FREE'},
      {name:'Vercel + Supabase Stack',url:'https://supabase.com',icon:'🚀',desc:'Build and deploy production full-stack apps with real databases. Supabase free tier is extremely generous.',tag:'FREE TIER'},
    ]
  },
  'AI/ML':{
    beginner:[
      {name:'Kaggle Learn',url:'https://www.kaggle.com/learn',icon:'📊',desc:'Free mini-courses: Python, Pandas, ML, Deep Learning, NLP — each 4-6 hours with free certificates.',tag:'100% FREE'},
      {name:'fast.ai Practical Deep Learning',url:'https://course.fast.ai',icon:'⚡',desc:'Top-down practical DL from Jeremy Howard. Lesson 1 gets you building image classifiers immediately.',tag:'100% FREE'},
      {name:'Google ML Crash Course',url:'https://developers.google.com/machine-learning/crash-course',icon:'🔍',desc:'Google\'s free ML course. Covers regression, classification, neural networks with TensorFlow Playground.',tag:'100% FREE'},
      {name:'3Blue1Brown — Neural Networks',url:'https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi',icon:'🧮',desc:'Best visual explanation of how neural networks and backpropagation actually work. Essential foundation.',tag:'100% FREE'},
    ],
    intermediate:[
      {name:'Kaggle Competitions',url:'https://www.kaggle.com/competitions',icon:'🏆',desc:'Real ML competitions with datasets. Getting top 30% shows employers you can build real models.',tag:'FREE + PAID'},
      {name:'Hugging Face Course',url:'https://huggingface.co/learn/nlp-course',icon:'🤗',desc:'Official NLP course covering transformers, fine-tuning, tokenizers, and the Hugging Face ecosystem.',tag:'100% FREE'},
      {name:'Papers With Code',url:'https://paperswithcode.com',icon:'📄',desc:'ML papers with implementation code. State-of-the-art benchmarks. Essential for staying current in AI.',tag:'100% FREE'},
      {name:'DeepLearning.AI Courses',url:'https://www.deeplearning.ai',icon:'🧠',desc:'Andrew Ng\'s courses on Coursera. Deep Learning Specialization, MLOps, LLM courses. Audit for free.',tag:'FREE AUDIT'},
    ],
    advanced:[
      {name:'Weights & Biases (W&B)',url:'https://wandb.ai',icon:'📈',desc:'Free experiment tracking, model versioning, dataset versioning. Industry standard MLOps tool.',tag:'FREE TIER'},
      {name:'Arxiv CS/AI Papers',url:'https://arxiv.org/list/cs.AI/recent',icon:'🔬',desc:'Read and implement recent AI papers. Implementing a paper from scratch is the #1 signal of ML mastery.',tag:'100% FREE'},
      {name:'LangChain + LlamaIndex',url:'https://python.langchain.com',icon:'🦜',desc:'Build production LLM apps. RAG pipelines, agents, tools. The most in-demand AI engineering skills 2025.',tag:'FREE'},
      {name:'Modal / HuggingFace Spaces',url:'https://modal.com',icon:'☁️',desc:'Deploy ML models to production for free. HuggingFace Spaces for demos, Modal for serverless GPU inference.',tag:'FREE TIER'},
    ]
  }
};

let practicalDomain='Cybersecurity';
let practicalLevel='beginner';

function renderPractical(){
  const domains=['Cybersecurity','Full Stack','AI/ML'];
  const domData={
    'Cybersecurity':{col:'#ff2d55',cls:'sub-cyber',icon:'🔒'},
    'Full Stack':{col:'#0099ff',cls:'sub-fullstack',icon:'⚡'},
    'AI/ML':{col:'#00e676',cls:'sub-ai',icon:'🤖'},
  };
  const dm=domData[practicalDomain]||domData['Cybersecurity'];
  document.getElementById('practical-tabs').innerHTML=domains.map(d=>{
    const dc=domData[d];
    const isA=d===practicalDomain;
    return `<button class="tab ${isA?'active':''}" onclick="setPracticalDomain('${d}')"
      style="border-color:${dc.col}${isA?'':'55'};color:${isA?dc.col:dc.col+'99'};background:linear-gradient(135deg,${dc.col}${isA?'30':'12'},${dc.col}${isA?'15':'06'});${isA?'box-shadow:0 0 20px '+dc.col+'50,inset 0 0 12px '+dc.col+'20;font-weight:700;':''}">
      ${dc.icon} ${d}</button>`;
  }).join('');
  const data=PRACTICAL_DATA[practicalDomain]||PRACTICAL_DATA.Cybersecurity;
  const lvColor={beginner:'#00ffcc',intermediate:'#ffcc00',advanced:'#ff2d78'};
  const lvBg={beginner:'rgba(0,255,204,.08)',intermediate:'rgba(255,204,0,.08)',advanced:'rgba(255,45,120,.08)'};
  const lvBorder={beginner:'rgba(0,255,204,.3)',intermediate:'rgba(255,204,0,.3)',advanced:'rgba(255,45,120,.3)'};
  const lc=lvColor[practicalLevel]||'#00ffcc';
  const lb=lvBg[practicalLevel]||lvBg.beginner;
  document.getElementById('practical-content').innerHTML=`
    <div class="sub-panel ${dm.cls}" style="border-color:${dm.col}66;background:linear-gradient(135deg,${dm.col}28,${dm.col}0a);">
      <div class="sub-panel-label" style="color:${dm.col};font-size:.68rem;">${dm.icon} ${practicalDomain} Hands-on Practice Platforms</div>
      <div style="display:flex;gap:8px;margin-bottom:20px;flex-wrap:wrap;">
        ${['beginner','intermediate','advanced'].map(l=>`
          <button onclick="setPracticalLevel('${l}')" style="padding:8px 22px;border:2px solid ${practicalLevel===l?lvColor[l]:'var(--border)'};background:${practicalLevel===l?lvBg[l]:'transparent'};color:${practicalLevel===l?lvColor[l]:'var(--muted)'};border-radius:20px;font-family:'JetBrains Mono',monospace;font-size:.68rem;cursor:pointer;transition:all .2s;letter-spacing:.06em;text-transform:uppercase;">
            ${l==='beginner'?'🟢':l==='intermediate'?'🟡':'🔴'} ${l.charAt(0).toUpperCase()+l.slice(1)}
          </button>`).join('')}
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;">
        ${(data[practicalLevel]||[]).map(p=>`
          <a href="${p.url}" target="_blank" rel="noopener" style="border:1px solid ${lvBorder[practicalLevel]};background:linear-gradient(135deg,${lb},rgba(0,0,0,.3));border-radius:14px;padding:22px;text-decoration:none;display:block;transition:all .3s;border-left:4px solid ${lc};" onmouseover="this.style.transform='translateY(-5px)';this.style.boxShadow='0 10px 35px ${lb}';this.style.borderColor='${lc}'" onmouseout="this.style.transform='';this.style.boxShadow='';this.style.borderColor='${lvBorder[practicalLevel]}'">
            <div style="display:flex;align-items:flex-start;gap:14px;margin-bottom:12px;">
              <span style="font-size:2rem;flex-shrink:0;">${p.icon}</span>
              <div>
                <div style="font-family:'Orbitron',monospace;font-size:.9rem;font-weight:700;color:#fff;margin-bottom:4px;">${p.name}</div>
                <span style="font-family:'JetBrains Mono',monospace;font-size:.55rem;padding:2px 8px;border-radius:10px;background:${lb};color:${lc};border:1px solid ${lvBorder[practicalLevel]};">${p.tag}</span>
              </div>
            </div>
            <div style="font-size:.82rem;color:var(--muted);line-height:1.6;margin-bottom:12px;">${p.desc}</div>
            <div style="font-family:'JetBrains Mono',monospace;font-size:.65rem;color:${lc};display:flex;align-items:center;gap:4px;">OPEN PLATFORM →</div>
          </a>`).join('')}
      </div>
    </div>
  `;
}
function setPracticalDomain(d){practicalDomain=d;renderPractical();}
function setPracticalLevel(l){practicalLevel=l;renderPractical();}

// ══════════════════════════════════════════════════
//  ROADMAP SECTION
// ══════════════════════════════════════════════════
function renderRoadmap(){
  const domains=['Cybersecurity','Full Stack','AI','🔴 Red Team','🔵 Blue Team'];
  document.getElementById('rm-tabs').innerHTML=domains.map(d=>`<button class="tab ${d===roadmapDomain?'active':''}" onclick="setRmDomain('${d}')">${d}</button>`).join('');

  // View toggle
  const viewToggle=`
    <div style="display:flex;gap:8px;margin-bottom:20px;align-items:center;flex-wrap:wrap;">
      <span style="font-family:'JetBrains Mono',monospace;font-size:.62rem;color:var(--muted);margin-right:4px;">VIEW:</span>
      <button onclick="setRmView('phase')" style="padding:7px 18px;border:1px solid ${rmView==='phase'?'var(--neon1)':'var(--border)'};background:${rmView==='phase'?'rgba(0,255,204,.1)':'transparent'};color:${rmView==='phase'?'var(--neon1)':'var(--muted)'};border-radius:4px;font-family:'JetBrains Mono',monospace;font-size:.65rem;cursor:pointer;transition:all .2s;">📌 PHASE VIEW</button>
      <button onclick="setRmView('monthly')" style="padding:7px 18px;border:1px solid ${rmView==='monthly'?'var(--neon4)':'var(--border)'};background:${rmView==='monthly'?'rgba(255,204,0,.1)':'transparent'};color:${rmView==='monthly'?'var(--neon4)':'var(--muted)'};border-radius:4px;font-family:'JetBrains Mono',monospace;font-size:.65rem;cursor:pointer;transition:all .2s;">📅 MONTHLY VIEW</button>
    </div>`;

  // Red Team / Blue Team — special rendering
  if(roadmapDomain==='🔴 Red Team'||roadmapDomain==='🔵 Blue Team'){
    const isRed=roadmapDomain==='🔴 Red Team';
    const color=isRed?'#ff2d78':'#00ccff';
    const data=isRed?RED_TEAM_ROADMAP:BLUE_TEAM_ROADMAP;
    const open=rmOpenPhase[roadmapDomain]||0;
    document.getElementById('rm-content').innerHTML=`
      <div style="padding:14px 20px;background:${color}15;border:1px solid ${color}44;border-radius:10px;margin-bottom:20px;">
        <div style="font-family:'JetBrains Mono',monospace;font-size:.72rem;color:${color};">${isRed?'🔴 Red Team: Offensive security, penetration testing, adversary simulation and exploit development path.':'🔵 Blue Team: Defensive security, SIEM, threat hunting, incident response and SOC analyst path.'}</div>
      </div>
      <div style="display:flex;gap:0;overflow-x:auto;margin-bottom:24px;padding-bottom:4px;">
        ${data.map((phase,i)=>`
          <div onclick="setRmPhase(${i})" style="flex:1;min-width:100px;cursor:pointer;position:relative;">
            <div style="display:flex;flex-direction:column;align-items:center;padding:12px 8px;background:${i===open?color+'22':'transparent'};border:1px solid ${i===open?color:'rgba(255,255,255,.08)'};border-radius:${i===0?'10px 0 0 10px':i===data.length-1?'0 10px 10px 0':'0'};transition:all .2s;">
              <div style="width:28px;height:28px;border-radius:50%;background:${color};display:flex;align-items:center;justify-content:center;font-size:.9rem;margin-bottom:6px;box-shadow:${i===open?'0 0 14px '+color:'none'};transition:box-shadow .2s;color:#000;font-weight:700;font-family:'JetBrains Mono',monospace;">${i+1}</div>
              <div style="font-family:'JetBrains Mono',monospace;font-size:.55rem;color:${i===open?'#fff':'var(--muted)'};text-align:center;line-height:1.3;">${phase.time}</div>
            </div>
          </div>`).join('')}
      </div>
      <div style="display:flex;align-items:center;gap:14px;padding:14px 20px;background:${color}18;border:1px solid ${color}44;border-radius:10px;margin-bottom:18px;">
        <div style="font-size:1.4rem;">${['🌱','⚡','🔥','🚀','🏆'][open]||'📌'}</div>
        <div>
          <div style="font-family:'Orbitron',monospace;font-size:1rem;font-weight:700;color:#fff;">${data[open].phase}</div>
          <div style="font-family:'JetBrains Mono',monospace;font-size:.65rem;color:${color};margin-top:3px;">⏱ ${data[open].time}</div>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:8px;margin-bottom:20px;">
        ${data[open].items.map(item=>`
          <div style="padding:10px 14px;border:1px solid rgba(255,255,255,.06);border-left:3px solid ${color};border-radius:0 8px 8px 0;background:rgba(255,255,255,.02);font-size:.83rem;color:var(--text);line-height:1.5;">${item}</div>`).join('')}
      </div>
      ${data[open].youtube&&data[open].youtube.length?`
      <div style="padding:16px;background:rgba(255,0,0,.06);border:1px solid rgba(255,0,0,.2);border-radius:10px;margin-bottom:16px;">
        <div style="font-family:'Orbitron',monospace;font-size:.75rem;color:#ff4444;margin-bottom:12px;">▶ YOUTUBE RESOURCES — STUDY FROM HERE</div>
        <div style="display:flex;flex-direction:column;gap:8px;">
          ${data[open].youtube.map(yt=>`
            <a href="${yt.url}" target="_blank" rel="noopener" style="display:flex;align-items:center;gap:12px;padding:10px 14px;border:1px solid rgba(255,68,68,.25);border-radius:8px;text-decoration:none;background:rgba(255,68,68,.05);transition:all .2s;" onmouseover="this.style.background='rgba(255,68,68,.12)';this.style.borderColor='rgba(255,68,68,.5)'" onmouseout="this.style.background='rgba(255,68,68,.05)';this.style.borderColor='rgba(255,68,68,.25)'">
              <span style="font-size:1.3rem;flex-shrink:0;">▶️</span>
              <div>
                <div style="font-family:'Rajdhani',sans-serif;font-weight:700;color:#fff;font-size:.9rem;">${yt.title}</div>
                <div style="font-family:'JetBrains Mono',monospace;font-size:.6rem;color:var(--muted);">${yt.channel} · ${yt.duration}</div>
              </div>
              <span style="margin-left:auto;font-family:'JetBrains Mono',monospace;font-size:.6rem;color:#ff4444;">WATCH FREE →</span>
            </a>`).join('')}
        </div>
      </div>`:''}
      <div style="margin-top:16px;padding:14px;background:var(--card);border:1px solid var(--border);border-radius:10px;">
        <div style="font-family:'JetBrains Mono',monospace;font-size:.65rem;color:var(--muted);margin-bottom:10px;letter-spacing:.15em;">📍 ALL PHASES</div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          ${data.map((p,i)=>`<div onclick="setRmPhase(${i})" style="padding:6px 14px;border-radius:20px;background:${i===open?color+'25':'rgba(255,255,255,.04)'};border:1px solid ${i===open?color:'rgba(255,255,255,.1)'};font-family:'JetBrains Mono',monospace;font-size:.62rem;color:${i===open?color:'var(--muted)'};cursor:pointer;transition:all .18s;">${i+1}. ${p.time}</div>`).join('')}
        </div>
      </div>`;
    return;
  }

  if(rmView==='phase'){
    const data=ROADMAP[roadmapDomain];
    const open=rmOpenPhase[roadmapDomain];
    document.getElementById('rm-content').innerHTML=viewToggle+`
      <div style="display:flex;gap:0;overflow-x:auto;margin-bottom:24px;padding-bottom:4px;">
        ${data.map((phase,i)=>`
          <div onclick="setRmPhase(${i})" style="flex:1;min-width:100px;cursor:pointer;position:relative;">
            <div style="display:flex;flex-direction:column;align-items:center;padding:12px 8px;background:${i===open?phase.color+'22':'transparent'};border:1px solid ${i===open?phase.color:'rgba(255,255,255,.08)'};border-radius:${i===0?'10px 0 0 10px':i===data.length-1?'0 10px 10px 0':'0'};transition:all .2s;">
              <div style="width:28px;height:28px;border-radius:50%;background:${phase.color};display:flex;align-items:center;justify-content:center;font-size:.9rem;margin-bottom:6px;box-shadow:${i===open?'0 0 14px '+phase.color:'none'};transition:box-shadow .2s;">${i+1}</div>
              <div style="font-family:'JetBrains Mono',monospace;font-size:.55rem;color:${i===open?'#fff':'var(--muted)'};text-align:center;line-height:1.3;">${phase.time}</div>
            </div>
            ${i<data.length-1?`<div style="position:absolute;right:-1px;top:50%;transform:translateY(-50%);width:0;height:0;border-left:8px solid ${i===open?phase.color:'rgba(255,255,255,.08)'};border-top:6px solid transparent;border-bottom:6px solid transparent;z-index:2;"></div>`:''}
          </div>
        `).join('')}
      </div>
      <div style="display:flex;align-items:center;gap:14px;padding:14px 20px;background:${data[open].color}18;border:1px solid ${data[open].color}44;border-radius:10px;margin-bottom:18px;">
        <div style="font-size:1.4rem;">${['🌱','⚡','🔥','🚀','🏆'][open]||'📌'}</div>
        <div>
          <div style="font-family:'Orbitron',monospace;font-size:1rem;font-weight:700;color:#fff;">${data[open].phase}</div>
          <div style="font-family:'JetBrains Mono',monospace;font-size:.65rem;color:${data[open].color};margin-top:3px;">⏱ ${data[open].time}</div>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:8px;">
        ${data[open].items.map(item=>`
          <div style="padding:10px 14px;border:1px solid rgba(255,255,255,.06);border-left:3px solid ${data[open].color};border-radius:0 8px 8px 0;background:rgba(255,255,255,.02);font-size:.83rem;color:var(--text);line-height:1.5;">${item}</div>
        `).join('')}
      </div>
      <div style="margin-top:24px;padding:16px;background:var(--card);border:1px solid var(--border);border-radius:10px;">
        <div style="font-family:'JetBrains Mono',monospace;font-size:.65rem;color:var(--muted);margin-bottom:12px;letter-spacing:.15em;">📍 ALL PHASES AT A GLANCE</div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          ${data.map((p,i)=>`<div onclick="setRmPhase(${i})" style="padding:6px 14px;border-radius:20px;background:${i===open?p.color+'25':'rgba(255,255,255,.04)'};border:1px solid ${i===open?p.color:'rgba(255,255,255,.1)'};font-family:'JetBrains Mono',monospace;font-size:.62rem;color:${i===open?p.color:'var(--muted)'};cursor:pointer;transition:all .18s;">${i+1}. ${p.time}</div>`).join('')}
        </div>
      </div>`;
  } else {
    // Monthly view
    const data=MONTHLY_ROADMAP[roadmapDomain];
    const openM=rmOpenMonth[roadmapDomain];
    const monthsGrid=data.map((m,i)=>`
      <div onclick="setRmMonth(${i})" style="padding:10px 8px;border:1px solid ${i===openM?m.color:'rgba(255,255,255,.08)'};border-radius:8px;background:${i===openM?m.color+'18':'var(--card)'};cursor:pointer;text-align:center;transition:all .2s;min-width:80px;">
        <div style="font-size:1.2rem;">${m.emoji}</div>
        <div style="font-family:'JetBrains Mono',monospace;font-size:.55rem;color:${i===openM?m.color:'var(--muted)'};margin-top:4px;">${m.month}</div>
      </div>`).join('');
    document.getElementById('rm-content').innerHTML=viewToggle+`
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(80px,1fr));gap:8px;margin-bottom:20px;">
        ${monthsGrid}
      </div>
      <div style="padding:20px;background:${data[openM].color}12;border:2px solid ${data[openM].color}55;border-radius:12px;margin-bottom:16px;">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
          <div style="font-size:2rem;">${data[openM].emoji}</div>
          <div>
            <div style="font-family:'Orbitron',monospace;font-size:1rem;font-weight:700;color:#fff;">${data[openM].month}</div>
            <div style="font-family:'JetBrains Mono',monospace;font-size:.7rem;color:${data[openM].color};margin-top:3px;">🎯 ${data[openM].focus}</div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:8px;margin-bottom:16px;">
          ${data[openM].tasks.map((task,ti)=>`
            <div style="padding:10px 14px;border:1px solid rgba(255,255,255,.06);border-left:3px solid ${data[openM].color};border-radius:0 8px 8px 0;background:rgba(255,255,255,.02);font-size:.83rem;color:var(--text);line-height:1.5;display:flex;gap:8px;align-items:flex-start;">
              <span style="color:${data[openM].color};font-family:'JetBrains Mono',monospace;font-size:.65rem;min-width:20px;margin-top:2px;">${String(ti+1).padStart(2,'0')}</span>
              <span>${task}</span>
            </div>`).join('')}
        </div>
        ${data[openM].youtube&&data[openM].youtube.length?`
        <div style="padding:14px;background:rgba(255,0,0,.06);border:1px solid rgba(255,0,0,.2);border-radius:10px;">
          <div style="font-family:'Orbitron',monospace;font-size:.72rem;color:#ff4444;margin-bottom:10px;">▶ LEARN FROM YOUTUBE — FREE</div>
          <div style="display:flex;flex-direction:column;gap:8px;">
            ${data[openM].youtube.map(yt=>`
              <a href="${yt.url}" target="_blank" rel="noopener" style="display:flex;align-items:center;gap:12px;padding:10px 14px;border:1px solid rgba(255,68,68,.25);border-radius:8px;text-decoration:none;background:rgba(255,68,68,.05);transition:all .2s;" onmouseover="this.style.background='rgba(255,68,68,.12)'" onmouseout="this.style.background='rgba(255,68,68,.05)'">
                <span style="font-size:1.2rem;flex-shrink:0;">▶️</span>
                <div style="flex:1">
                  <div style="font-family:'Rajdhani',sans-serif;font-weight:700;color:#fff;font-size:.88rem;">${yt.title}</div>
                  <div style="font-family:'JetBrains Mono',monospace;font-size:.6rem;color:var(--muted);">${yt.channel} · ${yt.duration}</div>
                </div>
                <span style="font-family:'JetBrains Mono',monospace;font-size:.6rem;color:#ff4444;flex-shrink:0;">WATCH FREE →</span>
              </a>`).join('')}
          </div>
        </div>`:''}
      </div>
      <div style="padding:14px;background:var(--card);border:1px solid var(--border);border-radius:8px;">
        <div style="font-family:'JetBrains Mono',monospace;font-size:.62rem;color:var(--muted);margin-bottom:10px;letter-spacing:.15em;">📅 FULL 24-MONTH OVERVIEW</div>
        <div style="display:flex;flex-wrap:wrap;gap:6px;">
          ${data.map((m,i)=>`<div onclick="setRmMonth(${i})" style="padding:5px 12px;border-radius:16px;background:${i===openM?m.color+'22':'rgba(255,255,255,.04)'};border:1px solid ${i===openM?m.color:'rgba(255,255,255,.08)'};font-family:'JetBrains Mono',monospace;font-size:.6rem;color:${i===openM?m.color:'var(--muted)'};cursor:pointer;transition:all .15s;">${m.emoji} ${m.month}</div>`).join('')}
        </div>
      </div>`;
  }
}
function setRmDomain(d){roadmapDomain=d;renderRoadmap();}
function setRmPhase(i){rmOpenPhase[roadmapDomain]=i;renderRoadmap();}
function setRmView(v){rmView=v;renderRoadmap();}
function setRmMonth(i){rmOpenMonth[roadmapDomain]=i;renderRoadmap();}

// ══════════════════════════════════════════════════
//  RESOURCES SECTION
// ══════════════════════════════════════════════════
let resType='channels'; // channels | certs | videos | roadmap
let resCertLevel='Beginner';
let resCertDomain='Cybersecurity';
let resVidLevel='Beginner';
let resVidDomain='Cybersecurity';
let resRmDomain='Cybersecurity';

function renderResources(){
  // Type tabs with distinct colors
  const types=[
    {id:'channels',label:'📺top Channels',col:'#00ffcc'},
    {id:'certs',label:'🎓 Free Certificates',col:'#ff2d78'},
    {id:'videos',label:'🎬Free Courses',col:'#ffcc00'},
    {id:'apis',label:'🔌 Free APIs',col:'#7b2fff'},
  ];
  document.getElementById('res-type-tabs').innerHTML=types.map(t=>{
    const isA=t.id===resType;
    return `<button class="tab ${isA?'active':''}" onclick="setResType('${t.id}')"
      style="border-color:${t.col}${isA?'':'55'};color:${isA?t.col:t.col+'99'};background:linear-gradient(135deg,${t.col}${isA?'30':'12'},${t.col}${isA?'18':'08'});${isA?'box-shadow:0 0 22px '+t.col+'55,inset 0 0 14px '+t.col+'20;font-weight:700;font-size:.78rem;':''}">
      ${t.label}</button>`;
  }).join('');

  // Show/hide sections
  const sections={
    'res-channels-section':'channels',
    'res-certs-section':'certs',
    'res-videos-section':'videos',
    'res-apis-section':'apis',
  };
  Object.entries(sections).forEach(([id,type])=>{
    const el=document.getElementById(id);
    if(el) el.style.display=resType===type?'block':'none';
  });
  if(document.getElementById('res-roadmap-section')) document.getElementById('res-roadmap-section').style.display='none';

  if(resType==='channels') renderResChannels();
  else if(resType==='certs') renderFreeCerts();
  else if(resType==='videos') renderFreeVideos();
  else if(resType==='apis') renderFreeApis();
}

function setResType(t){resType=t;renderResources();}

// ══════════════════════════════════════════════════
//  FREE APIS DATA
// ══════════════════════════════════════════════════
const FREE_APIS={
  'General':[
    {name:'OpenWeatherMap',url:'https://openweathermap.org/api',icon:'🌦️',desc:'Current weather, forecasts, historical data. Free tier: 1M calls/month. Perfect for weather apps.',auth:'API Key',cors:true,tag:'Weather',col:'#00ccff'},
    {name:'REST Countries',url:'https://restcountries.com',icon:'🌍',desc:'Country data: population, flags, currencies, languages. No auth needed, completely free forever.',auth:'None',cors:true,tag:'Data',col:'#00ffcc'},
    {name:'Open Trivia DB',url:'https://opentdb.com/api_config.php',icon:'🎯',desc:'50,000+ trivia questions across 24 categories. Build quiz apps, bots, games for free.',auth:'None',cors:true,tag:'Fun',col:'#ffcc00'},
    {name:'JSONPlaceholder',url:'https://jsonplaceholder.typicode.com',icon:'📦',desc:'Fake REST API for prototyping. Posts, users, todos, albums. Instant mock backend, no signup.',auth:'None',cors:true,tag:'Dev',col:'#7b2fff'},
    {name:'PokeAPI',url:'https://pokeapi.co',icon:'⚡',desc:'Complete Pokémon data — species, moves, abilities, evolution chains. 100% free, no auth needed.',auth:'None',cors:true,tag:'Fun',col:'#ff2d78'},
    {name:'The Dog API',url:'https://thedogapi.com',icon:'🐶',desc:'Dog breeds, images, voting. Free tier: 10K req/month. Great for beginner projects.',auth:'API Key',cors:true,tag:'Fun',col:'#ffcc00'},
    {name:'The Cat API',url:'https://thecatapi.com',icon:'🐱',desc:'Cat images, breeds, facts. Free tier: 10K req/month. Pair with Dog API for fun projects.',auth:'API Key',cors:true,tag:'Fun',col:'#ff2d78'},
    {name:'Advice Slip',url:'https://api.adviceslip.com',icon:'💡',desc:'Random life advice in JSON. No auth, CORS-friendly. Perfect for fun side projects.',auth:'None',cors:true,tag:'Fun',col:'#00ffcc'},
    {name:'Open-Meteo',url:'https://open-meteo.com',icon:'🌤️',desc:'Free weather API. No API key required. Up to 10,000 calls/day. Forecasts up to 16 days.',auth:'None',cors:true,tag:'Weather',col:'#00ccff'},
    {name:'WorldTimeAPI',url:'https://worldtimeapi.org',icon:'🕐',desc:'Current time for any timezone. No auth, no limits. Great for timezone converters.',auth:'None',cors:true,tag:'Utils',col:'#00ffcc'},
    {name:'Numbers API',url:'http://numbersapi.com',icon:'🔢',desc:'Interesting facts about numbers. Math, trivia, year facts. No auth needed.',auth:'None',cors:true,tag:'Fun',col:'#ffcc00'},
    {name:'Chuck Norris API',url:'https://api.chucknorris.io',icon:'🥋',desc:'Random Chuck Norris facts with category filters. No auth, perfect for demo projects.',auth:'None',cors:true,tag:'Fun',col:'#ff2d78'},
  ],
  'Finance':[
    {name:'ExchangeRate-API',url:'https://www.exchangerate-api.com',icon:'💱',desc:'Currency exchange rates. Free tier: 1,500 requests/month. Real-time & historical rates.',auth:'API Key',cors:true,tag:'Finance',col:'#00ffcc'},
    {name:'CoinGecko',url:'https://www.coingecko.com/en/api',icon:'🦎',desc:'Crypto prices, market cap, volume, historical data. Generous free tier, no auth required for basic.',auth:'None',cors:true,tag:'Crypto',col:'#ff2d78'},
    {name:'Alpha Vantage',url:'https://www.alphavantage.co',icon:'📈',desc:'Stock market data: intraday, daily, weekly prices. Free: 500 requests/day. Great for finance dashboards.',auth:'API Key',cors:true,tag:'Stocks',col:'#00ccff'},
    {name:'CoinCap',url:'https://docs.coincap.io',icon:'₿',desc:'Real-time crypto price data and market info. No auth required for basic usage. WebSocket support.',auth:'None',cors:true,tag:'Crypto',col:'#ffcc00'},
    {name:'Polygon.io',url:'https://polygon.io',icon:'📊',desc:'Stock, forex, crypto data. Free tier: 5 API calls/minute. Unlimited historical end-of-day data.',auth:'API Key',cors:true,tag:'Stocks',col:'#7b2fff'},
    {name:'Open Exchange Rates',url:'https://openexchangerates.org',icon:'💰',desc:'Hourly updated currency data. Free plan: 1,000 requests/month with 170+ currencies.',auth:'API Key',cors:true,tag:'Finance',col:'#00ccff'},
    {name:'Frankfurter',url:'https://www.frankfurter.app',icon:'🏦',desc:'ECB exchange rates API. No auth, no rate limit. Historical data from 1999. CORS-friendly.',auth:'None',cors:true,tag:'Finance',col:'#00ffcc'},
    {name:'Yahoo Finance (via RapidAPI)',url:'https://rapidapi.com/apidojo/api/yahoo-finance1',icon:'📉',desc:'Real-time stock quotes, historical prices, financial statements. Free tier available.',auth:'API Key',cors:true,tag:'Stocks',col:'#ff2d78'},
  ],
  'AI / ML':[
    {name:'HuggingFace Inference',url:'https://huggingface.co/inference-api',icon:'🤗',desc:'Run 100,000+ ML models via API. Free tier included. Text generation, image classification, NLP tasks.',auth:'API Key',cors:true,tag:'AI',col:'#ff2d78'},
    {name:'OpenRouter (Free Models)',url:'https://openrouter.ai',icon:'🧠',desc:'Access free LLMs including Llama 3, Mistral, Gemma via unified API. Some models completely free.',auth:'API Key',cors:true,tag:'LLM',col:'#7b2fff'},
    {name:'Wit.ai',url:'https://wit.ai',icon:'🎤',desc:'Natural language processing by Meta. Extract intent & entities from text. 100% free, no limits.',auth:'Token',cors:true,tag:'NLP',col:'#00ccff'},
    {name:'DeepAI',url:'https://deepai.org/api-docs',icon:'🎨',desc:'Image generation, colorization, text-to-image, super resolution. Free tier available.',auth:'API Key',cors:true,tag:'Vision',col:'#ffcc00'},
    {name:'Clarifai',url:'https://www.clarifai.com',icon:'👁️',desc:'Visual AI: image recognition, object detection, facial attributes. Free: 5K ops/month.',auth:'API Key',cors:true,tag:'Vision',col:'#ff2d78'},
    {name:'TextRazor',url:'https://www.textrazor.com',icon:'📝',desc:'Text analysis: entity extraction, sentiment, topic classification. Free: 500 requests/day.',auth:'API Key',cors:true,tag:'NLP',col:'#7b2fff'},
    {name:'Replicate',url:'https://replicate.com',icon:'🔁',desc:'Run open-source AI models. Free credits on signup. Stable Diffusion, LLaMA, Whisper and more.',auth:'API Key',cors:true,tag:'AI',col:'#00ffcc'},
    {name:'Google Gemini API',url:'https://ai.google.dev',icon:'✨',desc:'Gemini Flash model free tier: 15 requests/min, 1M tokens/day. Multimodal: text, images, code.',auth:'API Key',cors:true,tag:'LLM',col:'#00ccff'},
    {name:'Groq API',url:'https://console.groq.com',icon:'⚡',desc:'Extremely fast LLM inference. Free tier with Llama 3, Mixtral. 14K tokens/min rate limit.',auth:'API Key',cors:true,tag:'LLM',col:'#ff2d78'},
    {name:'Cohere',url:'https://cohere.com',icon:'🌀',desc:'Text generation, embeddings, classification. Free trial: 100 API calls/month forever.',auth:'API Key',cors:true,tag:'NLP',col:'#7b2fff'},
  ],
  'Content':[
    {name:'NewsAPI',url:'https://newsapi.org',icon:'📰',desc:'Live news from 150,000+ sources worldwide. Free dev plan: 100 requests/day.',auth:'API Key',cors:false,tag:'News',col:'#00ccff'},
    {name:'The Guardian API',url:'https://open-platform.theguardian.com',icon:'📄',desc:'Full access to The Guardian\'s journalism API. Free developer tier with generous limits.',auth:'API Key',cors:true,tag:'News',col:'#00ffcc'},
    {name:'Wikipedia API',url:'https://www.mediawiki.org/wiki/API:Main_page',icon:'📚',desc:'Full access to Wikipedia content, search, summaries. No auth needed. Perfect for knowledge apps.',auth:'None',cors:true,tag:'Knowledge',col:'#ffcc00'},
    {name:'NASA APIs',url:'https://api.nasa.gov',icon:'🚀',desc:'Astronomy Picture of the Day, Mars rover photos, Near Earth Objects, ISS location. Free!',auth:'API Key',cors:true,tag:'Space',col:'#7b2fff'},
    {name:'Rick and Morty API',url:'https://rickandmortyapi.com',icon:'🛸',desc:'Characters, episodes, locations from Rick and Morty. No auth, CORS-friendly, paginated.',auth:'None',cors:true,tag:'Fun',col:'#00ffcc'},
    {name:'JokeAPI',url:'https://jokeapi.dev',icon:'😄',desc:'Programming, dark, misc jokes. Filter by type, category, keywords. No auth needed.',auth:'None',cors:true,tag:'Fun',col:'#ff2d78'},
    {name:'Open Library',url:'https://openlibrary.org/developers/api',icon:'📖',desc:'30M+ book records from Internet Archive. Search, covers, authors, works. No auth needed.',auth:'None',cors:true,tag:'Books',col:'#ffcc00'},
    {name:'The Movie Database',url:'https://developer.themoviedb.org',icon:'🎬',desc:'Movie/TV show data: info, cast, trailers, ratings. Free tier: 1000 requests/day.',auth:'API Key',cors:true,tag:'Movies',col:'#00ccff'},
    {name:'Spotify API',url:'https://developer.spotify.com',icon:'🎵',desc:'Music data, playlists, artist info, audio features. Free with OAuth. Build music apps.',auth:'OAuth',cors:true,tag:'Music',col:'#7b2fff'},
    {name:'RAWG Video Games',url:'https://rawg.io/apidocs',icon:'🎮',desc:'500,000+ games database. Screenshots, ratings, platforms, genres. Free: 20K req/month.',auth:'API Key',cors:true,tag:'Gaming',col:'#ff2d78'},
  ],
  'Dev Tools':[
    {name:'GitHub REST API',url:'https://docs.github.com/en/rest',icon:'🐙',desc:'Search repos, users, commits, issues. Unauthenticated: 60 req/hour. Authenticated: 5000/hour.',auth:'Optional',cors:true,tag:'Dev',col:'#7b2fff'},
    {name:'IP-API',url:'https://ip-api.com',icon:'🌐',desc:'Geolocation by IP address. Country, city, ISP, lat/long. Free: 1000 requests/minute.',auth:'None',cors:true,tag:'Geo',col:'#00ccff'},
    {name:'QR Code Generator API',url:'https://goqr.me/api',icon:'📱',desc:'Generate QR codes for any text or URL. Returns PNG/SVG. Free, no auth needed.',auth:'None',cors:true,tag:'Utils',col:'#00ffcc'},
    {name:'Random User Generator',url:'https://randomuser.me',icon:'👤',desc:'Fake user data: names, photos, addresses, contacts. Perfect for populating UI mockups.',auth:'None',cors:true,tag:'Dev',col:'#ffcc00'},
    {name:'DiceBear Avatars',url:'https://www.dicebear.com/how-to-use/http-api',icon:'🎭',desc:'Generate unique SVG avatars from seeds. 30+ styles. No auth, embed directly in img tags.',auth:'None',cors:true,tag:'Utils',col:'#ff2d78'},
    {name:'Short.io',url:'https://developers.short.io',icon:'🔗',desc:'URL shortener API. Create short links programmatically. Free tier: 1000 links/month.',auth:'API Key',cors:true,tag:'Utils',col:'#7b2fff'},
    {name:'Postman Echo',url:'https://www.postman.com/postman/workspace/postman-echo',icon:'🔊',desc:'Test HTTP requests and responses. Echo back your request headers, body, query params.',auth:'None',cors:true,tag:'Dev',col:'#00ffcc'},
    {name:'JSONbin.io',url:'https://jsonbin.io',icon:'🗂️',desc:'Online JSON storage and API. Persist JSON data with a REST API. Free: 10K reads/month.',auth:'API Key',cors:true,tag:'Storage',col:'#00ccff'},
    {name:'Clearbit Logo',url:'https://clearbit.com/docs#logo-api',icon:'🏷️',desc:'Company logos by domain name. Just embed the URL with company domain. No auth needed.',auth:'None',cors:true,tag:'Design',col:'#ffcc00'},
    {name:'HTML CSS to Image',url:'https://htmlcsstoimage.com',icon:'🖼️',desc:'Convert HTML/CSS to PNG/JPEG via API. Free tier: 50 images/month.',auth:'API Key',cors:true,tag:'Design',col:'#ff2d78'},
  ],
  'Maps & Geo':[
    {name:'OpenStreetMap / Nominatim',url:'https://nominatim.openstreetmap.org',icon:'🗺️',desc:'Free geocoding and reverse geocoding. Convert addresses to coordinates and back. No auth.',auth:'None',cors:true,tag:'Maps',col:'#00ffcc'},
    {name:'MapBox API',url:'https://www.mapbox.com',icon:'🗾',desc:'Interactive maps, geocoding, navigation. Generous free tier: 50K map loads/month.',auth:'API Key',cors:true,tag:'Maps',col:'#00ccff'},
    {name:'OpenCage Geocoding',url:'https://opencagedata.com',icon:'📍',desc:'Forward & reverse geocoding. Free tier: 2,500 requests/day. Works worldwide.',auth:'API Key',cors:true,tag:'Geo',col:'#ffcc00'},
    {name:'IP Geolocation (ipapi)',url:'https://ipapi.co',icon:'🌏',desc:'IP to location: city, country, timezone, currency, calling code. 1000 req/day free.',auth:'None',cors:true,tag:'Geo',col:'#7b2fff'},
    {name:'BigDataCloud Geo',url:'https://www.bigdatacloud.com',icon:'🏙️',desc:'Reverse geocoding from coordinates. Free tier: 10K requests/month. No CORS issues.',auth:'None',cors:true,tag:'Geo',col:'#ff2d78'},
    {name:'AviationStack',url:'https://aviationstack.com',icon:'✈️',desc:'Live flight data, airport info, airline routes. Free tier: 500 requests/month.',auth:'API Key',cors:true,tag:'Travel',col:'#00ffcc'},
  ],
  'Auth & User':[
    {name:'Auth0 (Free Tier)',url:'https://auth0.com',icon:'🔐',desc:'Complete auth platform. Social login, MFA, SSO. Free: 7,500 active users/month.',auth:'OAuth',cors:true,tag:'Auth',col:'#ff2d78'},
    {name:'Firebase Auth',url:'https://firebase.google.com/products/auth',icon:'🔥',desc:'Google\'s auth service. Email/password, social login, phone auth. Generous free Spark plan.',auth:'SDK',cors:true,tag:'Auth',col:'#ffcc00'},
    {name:'Supabase Auth',url:'https://supabase.com/auth',icon:'⚡',desc:'Postgres + auth in one. Email, OAuth, magic links, OTP. Free tier: 50K monthly active users.',auth:'API Key',cors:true,tag:'Auth',col:'#00ffcc'},
    {name:'Clerk',url:'https://clerk.com',icon:'🧑‍💼',desc:'Drop-in auth for React/Next.js. Free: 10K monthly active users. UI components included.',auth:'API Key',cors:true,tag:'Auth',col:'#7b2fff'},
    {name:'Gravatar',url:'https://docs.gravatar.com/api',icon:'🖼️',desc:'User avatars by email hash. No auth needed. Used by WordPress, GitHub, Stack Overflow.',auth:'None',cors:true,tag:'User',col:'#00ccff'},
  ],
  'Health & Science':[
    {name:'Open Food Facts',url:'https://world.openfoodfacts.org/data',icon:'🍎',desc:'Food product database: ingredients, nutrition, allergens. 2.9M products, no auth needed.',auth:'None',cors:true,tag:'Food',col:'#00ffcc'},
    {name:'USDA FoodData',url:'https://fdc.nal.usda.gov/api-guide.html',icon:'🥗',desc:'US nutritional data: 600K+ foods, nutrient profiles. Free API with key registration.',auth:'API Key',cors:true,tag:'Food',col:'#ffcc00'},
    {name:'Open Disease Data',url:'https://disease.sh',icon:'🦠',desc:'COVID-19 stats, historical data, country-wise breakdown. No auth, CORS friendly.',auth:'None',cors:true,tag:'Health',col:'#ff2d78'},
    {name:'PubMed API',url:'https://www.ncbi.nlm.nih.gov/home/develop/api',icon:'🔬',desc:'Access 33M+ biomedical citations. Search, fetch articles, download abstracts. Free.',auth:'None',cors:true,tag:'Science',col:'#7b2fff'},
    {name:'SpaceX API',url:'https://github.com/r-spacex/SpaceX-API',icon:'🚀',desc:'SpaceX launches, rockets, capsules, starlink satellites. Fully open, no auth needed.',auth:'None',cors:true,tag:'Space',col:'#00ccff'},
    {name:'OpenAQ',url:'https://openaq.org',icon:'💨',desc:'Real-time global air quality data. PM2.5, PM10, CO2, NO2 levels. CORS-friendly API.',auth:'API Key',cors:true,tag:'Environment',col:'#00ffcc'},
  ],
};
let resApiCat='General';
function renderFreeApis(){
  const cats=Object.keys(FREE_APIS);
  const catColors={
    'General':'#00ffcc','Finance':'#00ccff','AI / ML':'#00e676','Content':'#ff2d78',
    'Dev Tools':'#ffcc00','Maps & Geo':'#00ccff','Auth & User':'#ff2d78',
    'Health & Science':'#00ffcc',
  };
  const catIcons={
    'General':'🌐','Finance':'💰','AI / ML':'🤖','Content':'📰',
    'Dev Tools':'🛠️','Maps & Geo':'🗺️','Auth & User':'🔐','Health & Science':'🔬',
  };
  const totalApis=Object.values(FREE_APIS).reduce((s,a)=>s+a.length,0);
  document.getElementById('api-category-tabs').innerHTML=`
    <div style="width:100%;margin-bottom:12px;font-family:'JetBrains Mono',monospace;font-size:.6rem;color:var(--muted);">
      <span style="color:var(--neon1);font-weight:700;">${totalApis} free APIs</span> across ${cats.length} categories — no credit card ever required
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:7px;">
      ${cats.map(c=>{
        const col=catColors[c]||'var(--neon1)';
        const active=c===resApiCat;
        return `<button onclick="setResApiCat('${c}')"
          style="padding:8px 14px;border:1px solid ${active?col:col+'55'};background:linear-gradient(135deg,${active?col+'28':col+'10'},${active?col+'14':col+'06'});color:${active?col:col+'99'};border-radius:6px;cursor:pointer;font-family:'JetBrains Mono',monospace;font-size:.65rem;font-weight:${active?'700':'500'};transition:all .25s;display:flex;align-items:center;gap:5px;${active?'box-shadow:0 0 18px '+col+'50,inset 0 0 10px '+col+'20;':''}">
          ${catIcons[c]||'📦'} ${c} <span style="font-size:.52rem;opacity:.7;">(${FREE_APIS[c].length})</span>
        </button>`;
      }).join('')}
    </div>
  `;
  const apis=FREE_APIS[resApiCat]||[];
  const apiPanel=document.getElementById('free-api-content');
  if(apiPanel) apiPanel.innerHTML=`
    <div class="sub-panel sub-apis" style="border-color:rgba(123,47,255,.44);background:linear-gradient(135deg,rgba(0,230,118,.22),rgba(0,230,118,.06));">
      <div class="sub-panel-label" style="color:#b88fff;font-size:.68rem;">🔌 ${resApiCat} APIs — ${apis.length} free APIs in this category</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:14px;">
        ${apis.map(a=>`
          <div class="api-card" style="--api-col:${a.col};border-color:${a.col}30;background:linear-gradient(135deg,${a.col}07,rgba(0,0,0,.3));">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
              <span style="font-size:1.6rem;">${a.icon}</span>
              <div style="flex:1">
                <div style="font-family:'Rajdhani',sans-serif;font-weight:700;font-size:1rem;color:#fff;">${a.name}</div>
                <div style="display:flex;gap:5px;flex-wrap:wrap;margin-top:3px;">
                  <span class="api-badge" style="background:${a.col}22;color:${a.col};border:1px solid ${a.col}44;">${a.tag}</span>
                  <span class="api-badge" style="background:rgba(255,255,255,.06);color:var(--muted);border:1px solid rgba(255,255,255,.1);">🔑 ${a.auth}</span>
                  ${a.cors?`<span class="api-badge" style="background:rgba(0,255,204,.1);color:var(--neon1);border:1px solid rgba(0,255,204,.3);">✓ CORS</span>`:`<span class="api-badge" style="background:rgba(255,204,0,.08);color:var(--neon4);border:1px solid rgba(255,204,0,.25);">⚠ No CORS</span>`}
                </div>
              </div>
            </div>
            <div style="font-size:.82rem;color:var(--muted);line-height:1.6;margin:8px 0;">${a.desc}</div>
            <a href="${a.url}" target="_blank" rel="noopener"
              style="display:inline-flex;align-items:center;gap:6px;padding:7px 16px;border:1px solid ${a.col}55;background:${a.col}12;color:${a.col};border-radius:6px;text-decoration:none;font-family:'JetBrains Mono',monospace;font-size:.65rem;font-weight:700;transition:all .2s;"
              onmouseover="this.style.background='${a.col}28'" onmouseout="this.style.background='${a.col}12'">
              🔗 VIEW DOCS — FREE
            </a>
          </div>`).join('')}
      </div>
    </div>`;
}
function setResApiCat(c){resApiCat=c;renderFreeApis();}

let resRmOpenPhase={Cybersecurity:0,'Full Stack':0,AI:0};
function renderResRoadmap(){
  const domains=['Cybersecurity','Full Stack','AI'];
  const rmColors={'Cybersecurity':{c:'#ff2d55',bg:'rgba(255,45,85'},'Full Stack':{c:'#0099ff',bg:'rgba(0,153,255'},'AI':{c:'#00e676',bg:'rgba(0,230,118'}};
  document.getElementById('res-rm-tabs').innerHTML=domains.map(d=>{
    const rc=rmColors[d]||{c:'#00ffcc',bg:'rgba(0,255,204'};
    const isA=d===resRmDomain;
    return `<button class="tab ${isA?'active':''}" onclick="setResRmDomain('${d}')"
      style="border-color:${rc.c}${isA?'':'55'};color:${isA?rc.c:rc.c+'99'};background:${rc.bg},${isA?'.28)':'.10)'};${isA?'box-shadow:0 0 20px '+rc.c+'50;font-weight:700;':''}">
      ${d==='Cybersecurity'?'🔒':d==='Full Stack'?'⚡':'🤖'} ${d}</button>`;
  }).join('');
  const data=ROADMAP[resRmDomain];
  const open=resRmOpenPhase[resRmDomain];
  document.getElementById('res-rm-content').innerHTML=`
    <div style="display:flex;gap:0;overflow-x:auto;margin-bottom:20px;padding-bottom:4px;">
      ${data.map((phase,i)=>`
        <div onclick="setResRmPhase(${i})" style="flex:1;min-width:90px;cursor:pointer;position:relative;">
          <div style="display:flex;flex-direction:column;align-items:center;padding:10px 6px;background:${i===open?phase.color+'22':'transparent'};border:1px solid ${i===open?phase.color:'rgba(255,255,255,.08)'};border-radius:${i===0?'10px 0 0 10px':i===data.length-1?'0 10px 10px 0':'0'};transition:all .2s;">
            <div style="width:24px;height:24px;border-radius:50%;background:${phase.color};display:flex;align-items:center;justify-content:center;font-size:.8rem;margin-bottom:4px;font-family:'JetBrains Mono',monospace;color:#000;font-weight:700;">${i+1}</div>
            <div style="font-family:'JetBrains Mono',monospace;font-size:.5rem;color:${i===open?'#fff':'var(--muted)'};text-align:center;line-height:1.3;">${phase.time}</div>
          </div>
        </div>
      `).join('')}
    </div>
    <div style="display:flex;align-items:center;gap:12px;padding:12px 18px;background:${data[open].color}18;border:1px solid ${data[open].color}44;border-radius:10px;margin-bottom:16px;">
      <div style="font-family:'Orbitron',monospace;font-size:.9rem;font-weight:700;color:#fff;">${data[open].phase}</div>
      <div style="font-family:'JetBrains Mono',monospace;font-size:.6rem;color:${data[open].color};margin-left:auto;">⏱ ${data[open].time}</div>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:7px;">
      ${data[open].items.map(item=>`<div style="padding:9px 12px;border:1px solid rgba(255,255,255,.06);border-left:3px solid ${data[open].color};border-radius:0 7px 7px 0;font-size:.82rem;color:var(--text);line-height:1.5;">${item}</div>`).join('')}
    </div>
  `;
}
function setResRmDomain(d){resRmDomain=d;renderResRoadmap();}
function setResRmPhase(i){resRmOpenPhase[resRmDomain]=i;renderResRoadmap();}

function renderResChannels(){
  const domainInfo={
    'Cybersecurity':{col:'#ff2d55',bg:'sub-cyber',icon:'🔒',label:'Top Cybersecurity YouTube Channels'},
    'Full Stack':{col:'#0099ff',bg:'sub-fullstack',icon:'⚡',label:'Top Full Stack YouTube Channels'},
    'AI':{col:'#00e676',bg:'sub-ai',icon:'🤖',label:'Top AI / ML YouTube Channels'},
  };
  const domains=['Cybersecurity','Full Stack','AI'];
  const info=domainInfo[resDomain]||domainInfo['Cybersecurity'];
  document.getElementById('res-tabs').innerHTML=domains.map(d=>{
    const di=domainInfo[d];
    const isA=d===resDomain;
    return `<button class="tab ${isA?'active':''}" onclick="setResDomain('${d}')"
      style="border-color:${di.col}${isA?'':'55'};color:${isA?di.col:di.col+'99'};background:linear-gradient(135deg,${di.col}${isA?'30':'12'},${di.col}${isA?'15':'06'});${isA?'box-shadow:0 0 22px '+di.col+'55,inset 0 0 12px '+di.col+'20;font-weight:700;':''}">
      ${di.icon} ${d}</button>`;
  }).join('');
  const data=RESOURCES[resDomain]||[];
  document.getElementById('res-channels').innerHTML=`
    <div class="sub-panel ${info.bg}" style="border-color:${info.col}66;background:linear-gradient(135deg,${info.col}12,${info.col}03);">
      <div class="sub-panel-label" style="color:${info.col};font-size:.68rem;">${info.icon} ${info.label} <span style="margin-left:auto;font-size:.5rem;padding:3px 9px;background:${info.col}18;border:1px solid ${info.col}44;border-radius:10px;color:${info.col};">↗ CLICK TO VISIT</span></div>
      <div style="display:grid;gap:10px;">
        ${data.map(r=>`
          <a href="${r.u}" target="_blank" rel="noopener" class="res-ch-card-link" title="Visit ${r.n} on YouTube">
            <div class="res-ch-card ${resDomain==='Cybersecurity'?'cyber-ch':resDomain==='Full Stack'?'fs-ch':'ai-ch'}" style="border-color:${info.col}44;border-left-color:${info.col};">
              <div class="res-ch-icon" style="background:linear-gradient(135deg,${info.col},${info.col}88);">📺</div>
              <div style="flex:1;">
                <div class="res-ch-name" style="display:flex;align-items:center;gap:8px;">
                  ${r.n}
                  <span style="font-family:'JetBrains Mono',monospace;font-size:.55rem;padding:2px 7px;border-radius:10px;background:${info.col}22;color:${info.col};border:1px solid ${info.col}44;">▶ YouTube</span>
                </div>
                <div class="res-ch-desc">${r.d}</div>
              </div>
              <div style="color:${info.col};font-size:1rem;flex-shrink:0;font-weight:bold;">↗</div>
            </div>
          </a>
        `).join('')}
      </div>
    </div>
  `;
}
function setResDomain(d){resDomain=d;renderResChannels();}

function renderFreeCerts(){
  const levels=['Beginner','Intermediate','Advanced'];
  const domains=['Cybersecurity','Full Stack','AI'];
  const lvData={Beginner:{col:'var(--neon1)',raw:'#00ffcc',cls:'sub-beginner',icon:'🟢'},Intermediate:{col:'var(--neon4)',raw:'#ffcc00',cls:'sub-intermediate',icon:'🟡'},Advanced:{col:'var(--neon3)',raw:'#ff2d78',cls:'sub-advanced',icon:'🔴'}};
  const domData={Cybersecurity:{col:'#ff2d55',icon:'🔒'},['Full Stack']:{col:'#0099ff',icon:'⚡'},AI:{col:'#00e676',icon:'🤖'}};
  const lv=lvData[resCertLevel]||lvData.Beginner;
  const dm=domData[resCertDomain]||domData.Cybersecurity;
  document.getElementById('cert-level-tabs').innerHTML=levels.map(l=>{
    const lv=lvData[l];
    const isA=l===resCertLevel;
    return `<button class="tab ${isA?'active':''}" onclick="setResCertLevel('${l}')"
      style="border-color:${lv.raw}${isA?'':'66'};color:${isA?lv.raw:lv.raw+'aa'};background:rgba(${lv.raw==='#00ffcc'?'0,255,204':lv.raw==='#ffcc00'?'255,204,0':'255,45,120'},${isA?'.28':'.10'});${isA?'box-shadow:0 0 20px '+lv.raw+'55,inset 0 0 12px '+lv.raw+'25;font-weight:700;':''}">
      ${lv.icon} ${l}</button>`;
  }).join('');
  document.getElementById('cert-domain-tabs').innerHTML=domains.map(d=>{
    const dc=domData[d];
    const isA=d===resCertDomain;
    return `<button class="tab ${isA?'active':''}" onclick="setResCertDomain('${d}')"
      style="border-color:${dc.col}${isA?'':'55'};color:${isA?dc.col:dc.col+'99'};background:linear-gradient(135deg,${dc.col}${isA?'30':'12'},${dc.col}${isA?'15':'06'});${isA?'box-shadow:0 0 20px '+dc.col+'55,inset 0 0 12px '+dc.col+'20;font-weight:700;':''}">
      ${dc.icon} ${d}</button>`;
  }).join('');
  const data=(FREE_CERTS[resCertLevel]||{})[resCertDomain]||[];
  document.getElementById('free-cert-content').innerHTML=`
    <div class="sub-panel ${lv.cls}" style="border-color:${lv.raw}66;background:linear-gradient(135deg,${lv.raw}28,${dm.col}0e);">
      <div class="sub-panel-label" style="color:${lv.raw};">${lv.icon} ${resCertLevel} ${domData[dm.icon?resCertDomain:resCertDomain].icon} ${resCertDomain} Certificates</div>
      <div style="display:grid;gap:14px;">
        ${data.map(c=>`
          <div style="display:flex;gap:16px;align-items:flex-start;padding:16px;border:1px solid ${lv.raw}22;border-left:4px solid ${lv.raw};border-radius:10px;background:rgba(0,0,0,.2);">
            <div style="font-size:2rem;flex-shrink:0;">🎓</div>
            <div style="flex:1">
              <div style="font-family:'Rajdhani',sans-serif;font-weight:700;font-size:1.05rem;color:#fff;margin-bottom:6px;">${c.name}</div>
              <div style="font-size:.82rem;color:var(--muted);margin-bottom:12px;line-height:1.5;">${c.desc}</div>
              <a href="${c.link}" target="_blank" style="display:inline-flex;align-items:center;gap:6px;padding:8px 18px;border:1px solid ${lv.raw}55;background:${lv.raw}12;color:${lv.raw};border-radius:6px;text-decoration:none;font-family:'JetBrains Mono',monospace;font-size:.7rem;font-weight:700;transition:all .2s;" onmouseover="this.style.background='${lv.raw}25'" onmouseout="this.style.background='${lv.raw}12'">🔗 Get Certificate — FREE</a>
            </div>
          </div>
        `).join('')||'<div style="text-align:center;padding:40px;color:var(--muted);font-family:JetBrains Mono,monospace;">No certs found for this selection.</div>'}
      </div>
    </div>`;
}
function setResCertLevel(l){resCertLevel=l;renderFreeCerts();}
function setResCertDomain(d){resCertDomain=d;renderFreeCerts();}

function renderFreeVideos(){
  const levels=['Beginner','Intermediate','Advanced'];
  const domains=['Cybersecurity','Full Stack','AI'];
  const lvData={Beginner:{col:'#00ffcc',cls:'sub-beginner',icon:'🟢'},Intermediate:{col:'#ffcc00',cls:'sub-intermediate',icon:'🟡'},Advanced:{col:'#ff2d78',cls:'sub-advanced',icon:'🔴'}};
  const domData={Cybersecurity:{col:'#ff2d55',icon:'🔒'},['Full Stack']:{col:'#0099ff',icon:'⚡'},AI:{col:'#00e676',icon:'🤖'}};
  const lv=lvData[resVidLevel]||lvData.Beginner;
  const dm=domData[resVidDomain]||domData.Cybersecurity;
  document.getElementById('vid-level-tabs').innerHTML=levels.map(l=>{
    const lv=lvData[l];
    const isA=l===resVidLevel;
    return `<button class="tab ${isA?'active':''}" onclick="setResVidLevel('${l}')"
      style="border-color:${lv.col}${isA?'':'55'};color:${isA?lv.col:lv.col+'99'};background:rgba(${lv.col==='#00ffcc'?'0,255,204':lv.col==='#ffcc00'?'255,204,0':'255,45,120'},${isA?'.28':'.10'});${isA?'box-shadow:0 0 20px '+lv.col+'55,inset 0 0 12px '+lv.col+'25;font-weight:700;':''}">
      ${lv.icon} ${l}</button>`;
  }).join('');
  document.getElementById('vid-domain-tabs').innerHTML=domains.map(d=>{
    const dc=domData[d];
    const isA=d===resVidDomain;
    return `<button class="tab ${isA?'active':''}" onclick="setResVidDomain('${d}')"
      style="border-color:${dc.col}${isA?'':'55'};color:${isA?dc.col:dc.col+'99'};background:linear-gradient(135deg,${dc.col}${isA?'30':'12'},${dc.col}${isA?'15':'06'});${isA?'box-shadow:0 0 20px '+dc.col+'55,inset 0 0 12px '+dc.col+'20;font-weight:700;':''}">
      ${dc.icon} ${d}</button>`;
  }).join('');
  const data=(FREE_VIDEOS[resVidLevel]||{})[resVidDomain]||[];
  document.getElementById('free-vid-content').innerHTML=`
    <div class="sub-panel ${lv.cls}" style="border-color:${lv.col}66;background:linear-gradient(135deg,${lv.col}28,${dm.col}0e);">
      <div class="sub-panel-label" style="color:${lv.col};">🎬 ${resVidLevel} ${resVidDomain} Free Courses</div>
      <div style="display:grid;gap:12px;">
        ${data.map(v=>`
          <div style="display:flex;gap:16px;align-items:flex-start;padding:16px;border:1px solid ${lv.col}22;border-left:4px solid ${lv.col};border-radius:10px;background:rgba(0,0,0,.2);">
            <div style="font-size:2rem;flex-shrink:0;">🎬</div>
            <div style="flex:1">
              <div style="font-family:'Rajdhani',sans-serif;font-weight:700;font-size:1.05rem;color:#fff;margin-bottom:6px;">${v.name}</div>
              <div style="font-size:.82rem;color:var(--muted);margin-bottom:12px;line-height:1.5;">${v.desc}</div>
              <a href="${v.link}" target="_blank" style="display:inline-flex;align-items:center;gap:6px;padding:8px 18px;border:1px solid ${lv.col}55;background:${lv.col}12;color:${lv.col};border-radius:6px;text-decoration:none;font-family:'JetBrains Mono',monospace;font-size:.7rem;font-weight:700;transition:all .2s;" onmouseover="this.style.background='${lv.col}25'" onmouseout="this.style.background='${lv.col}12'">▶ Watch FREE</a>
            </div>
          </div>
        `).join('')||'<div style="text-align:center;padding:40px;color:var(--muted);font-family:JetBrains Mono,monospace;">No videos found for this selection.</div>'}
      </div>
    </div>`;
}
function setResVidLevel(l){resVidLevel=l;renderFreeVideos();}
function setResVidDomain(d){resVidDomain=d;renderFreeVideos();}

// ══════════════════════════════════════════════════
//  SUPPORT
// ══════════════════════════════════════════════════

// ══════════════════════════════════════════════════
//  AI TOOLS SECTION
// ══════════════════════════════════════════════════
const AI_TOOLS_DATA={
  free:[
    {
      cat:'🤖 AI Chatbots & Assistants',
      tools:[
        {name:'ChatGPT (Free Tier)',icon:'💬',desc:'OpenAI\'s GPT-4o mini — coding help, essays, Q&A, debugging. Best free AI chatbot.',url:'https://chat.openai.com/',tags:['Coding','Writing','General'],badge:'Most Popular'},
        {name:'Claude (Free)',icon:'🧠',desc:'Anthropic Claude — long context, nuanced answers, great for code review and analysis.',url:'https://claude.ai/',tags:['Coding','Analysis','Writing'],badge:'Best for Code'},
        {name:'Gemini (Free)',icon:'✨',desc:'Google\'s Gemini — integrated with Google ecosystem, multimodal, great for research.',url:'https://gemini.google.com/',tags:['Research','Multimodal','Google'],badge:'Google AI'},
        {name:'Meta AI (Free)',icon:'🌐',desc:'Meta\'s Llama-powered assistant — free, fast, integrated into WhatsApp & Instagram.',url:'https://www.meta.ai/',tags:['General','Social','Fast'],badge:'100% Free'},
        {name:'Perplexity AI (Free)',icon:'🔍',desc:'AI search engine with real-time web access. Best for research & fact-checking.',url:'https://www.perplexity.ai/',tags:['Research','Web Search','Facts'],badge:'Real-Time Web'},
        {name:'Microsoft Copilot (Free)',icon:'🪟',desc:'Powered by GPT-4 + Bing search. Free tier with image generation via DALL-E.',url:'https://copilot.microsoft.com/',tags:['Coding','Images','Search'],badge:'Free GPT-4'},
        {name:'Phind (Free)',icon:'👩‍💻',desc:'AI search engine built for developers. Understands code, gives stack-specific answers.',url:'https://www.phind.com/',tags:['Coding','Dev','Search'],badge:'Dev Focused'},
        {name:'You.com (Free)',icon:'🔎',desc:'AI search assistant with multiple AI models. Great privacy focus.',url:'https://you.com/',tags:['Search','Privacy','General'],badge:'Privacy First'},
      ]
    },
    {
      cat:'💻 AI Coding Tools (Free)',
      tools:[
        {name:'GitHub Copilot Free',icon:'🐙',desc:'AI pair programmer in VS Code — 2000 completions/month free for students.',url:'https://github.com/features/copilot',tags:['VS Code','Autocomplete','GitHub'],badge:'Free for Students'},
        {name:'Replit AI (Free)',icon:'🔄',desc:'AI coding assistant inside Replit browser IDE. Great for beginners and quick prototypes.',url:'https://replit.com/',tags:['Browser IDE','Beginner','Prototyping'],badge:'Free Tier'},
        {name:'Codeium (Free)',icon:'⚡',desc:'Completely free AI code completion. Works with 70+ languages and 40+ editors.',url:'https://codeium.com/',tags:['Autocomplete','Free','All Languages'],badge:'Truly Free'},
        {name:'Tabnine (Free)',icon:'🔮',desc:'AI code completion with privacy focus. Free tier works locally with smaller models.',url:'https://www.tabnine.com/',tags:['Autocomplete','Privacy','Local'],badge:'Privacy Mode'},
        {name:'Google Colab AI (Free)',icon:'📓',desc:'AI code assistance inside Google Colab notebooks. Perfect for ML & data science.',url:'https://colab.google/',tags:['Python','ML','Data Science'],badge:'Free GPU'},
        {name:'Blackbox AI (Free)',icon:'⬛',desc:'AI optimized for code generation and explanation. Autocomplete + chat free.',url:'https://www.blackbox.ai/',tags:['Coding','Free','Explanation'],badge:'Free Unlimited'},
        {name:'CodeLlama (Free/Local)',icon:'🦙',desc:'Meta\'s open-source coding model. Run locally or via free API providers like Together.ai.',url:'https://ollama.ai/',tags:['Open Source','Local','Self-Hosted'],badge:'Open Source'},
        {name:'Continue.dev (Free)',icon:'🔁',desc:'Open source AI coding assistant for VS Code & JetBrains. Works with any LLM.',url:'https://continue.dev/',tags:['VS Code','JetBrains','Open Source'],badge:'Open Source'},
      ]
    },
    {
      cat:'🎨 AI Creative & Productivity (Free)',
      tools:[
        {name:'DALL-E 3 via Copilot',icon:'🖼️',desc:'Free high-quality image generation via Microsoft Copilot. 15 boosts/day free.',url:'https://copilot.microsoft.com/',tags:['Image Gen','Free','DALL-E'],badge:'Free Daily'},
        {name:'Adobe Firefly (Free)',icon:'🔥',desc:'Adobe\'s generative AI for images and text effects. 25 monthly credits free.',url:'https://firefly.adobe.com/',tags:['Image Gen','Design','Adobe'],badge:'25 Free/Mo'},
        {name:'Canva AI (Free)',icon:'🎨',desc:'AI design tools including Magic Design, AI image gen, background remover.',url:'https://www.canva.com/',tags:['Design','Presentation','Graphics'],badge:'Free Tier'},
        {name:'Gamma.app (Free)',icon:'📊',desc:'AI-powered presentation creator. Makes beautiful slides from a prompt in seconds.',url:'https://gamma.app/',tags:['Presentations','Slides','Productivity'],badge:'Free Tier'},
        {name:'Notion AI (Trial)',icon:'📝',desc:'AI writing & summarization inside Notion. 20 responses free trial.',url:'https://www.notion.so/product/ai',tags:['Writing','Summarization','Notes'],badge:'Trial Free'},
        {name:'Otter.ai (Free)',icon:'🎙️',desc:'AI meeting transcription & summarization. 300 min/month free.',url:'https://otter.ai/',tags:['Transcription','Meetings','Audio'],badge:'300 Min Free'},
        {name:'ElevenLabs (Free)',icon:'🔊',desc:'AI voice generation. 10,000 characters/month free tier.',url:'https://elevenlabs.io/',tags:['Voice','TTS','Audio'],badge:'10K Chars Free'},
        {name:'Hugging Face (Free)',icon:'🤗',desc:'Open source AI model hub. Run 1000s of models free via Spaces.',url:'https://huggingface.co/',tags:['Open Source','Models','Research'],badge:'Open Source'},
      ]
    },
    {
      cat:'🎓 AI Learning & Research (Free)',
      tools:[
        {name:'Khan Academy Khanmigo (Free)',icon:'📚',desc:'AI tutor for students — explains math, science, coding step by step.',url:'https://www.khanacademy.org/khan-labs',tags:['Education','Tutoring','Students'],badge:'Free for Students'},
        {name:'Elicit (Free)',icon:'🔬',desc:'AI research assistant that analyzes academic papers and extracts key information.',url:'https://elicit.com/',tags:['Research','Papers','Academic'],badge:'5 Queries Free'},
        {name:'Consensus (Free)',icon:'📊',desc:'AI-powered research tool for finding scientific evidence in academic papers.',url:'https://consensus.app/',tags:['Research','Science','Evidence'],badge:'Free Tier'},
        {name:'QuillBot (Free)',icon:'✍️',desc:'AI paraphrasing, grammar check, summarizer. Popular for academic writing.',url:'https://quillbot.com/',tags:['Writing','Grammar','Paraphrase'],badge:'Free Tier'},
        {name:'Grammarly (Free)',icon:'📝',desc:'AI writing assistant for grammar, clarity, and style. Free browser extension.',url:'https://www.grammarly.com/',tags:['Writing','Grammar','Chrome'],badge:'Free Extension'},
        {name:'DeepL (Free)',icon:'🌍',desc:'AI-powered translation — better than Google Translate for nuance.',url:'https://www.deepl.com/',tags:['Translation','Language','Writing'],badge:'Free Tier'},
      ]
    }
  ],
  paid:[
    {
      cat:'🚀 Premium AI Assistants',
      tools:[
        {name:'ChatGPT Plus ($20/mo)',icon:'💎',desc:'GPT-4o + o1 reasoning, DALL-E 3, Advanced Data Analysis, voice mode, plugins.',url:'https://chat.openai.com/',price:'$20/mo',tags:['GPT-4o','DALL-E','Voice'],badge:'Best Overall'},
        {name:'Claude Pro ($20/mo)',icon:'🧠',desc:'Priority access, 5x more usage, access to Claude Opus 4. Best for long docs and code.',url:'https://claude.ai/upgrade',price:'$20/mo',tags:['Coding','Long Context','Analysis'],badge:'Best for Code'},
        {name:'Gemini Advanced ($20/mo)',icon:'✨',desc:'Gemini Ultra model, 1TB storage, Google One benefits, Workspace integration.',url:'https://gemini.google.com/advanced',price:'$20/mo',tags:['Google','Multimodal','Workspace'],badge:'Google Premium'},
        {name:'Perplexity Pro ($20/mo)',icon:'🔍',desc:'Unlimited AI search, access to GPT-4o/Claude/Gemini models, file uploads.',url:'https://www.perplexity.ai/pro',price:'$20/mo',tags:['Research','Web','Multiple Models'],badge:'Research Pro'},
        {name:'Microsoft Copilot Pro ($20/mo)',icon:'🪟',desc:'GPT-4 in all Office apps (Word, Excel, PowerPoint, Teams). Priority access.',url:'https://www.microsoft.com/en-us/microsoft-365/copilot/',price:'$20/mo',tags:['Office','Enterprise','GPT-4'],badge:'Office AI'},
        {name:'Poe Pro ($19.99/mo)',icon:'🐦',desc:'Access all AI models (GPT-4, Claude, Gemini, Llama) in one place.',url:'https://poe.com/subscription',price:'$19.99/mo',tags:['Multi-Model','All-in-One'],badge:'All Models'},
      ]
    },
    {
      cat:'💻 Premium AI Coding Tools',
      tools:[
        {name:'GitHub Copilot ($10/mo)',icon:'🐙',desc:'The gold standard. Inline suggestions, chat, code review, multi-file editing.',url:'https://github.com/features/copilot',price:'$10/mo',tags:['VS Code','GitHub','Enterprise'],badge:'Industry Standard'},
        {name:'Cursor AI ($20/mo)',icon:'🖱️',desc:'VS Code fork with AI deeply integrated. Best for codebase-aware AI editing.',url:'https://cursor.sh/',price:'$20/mo',tags:['VS Code','Codebase AI','Chat'],badge:'Best IDE AI'},
        {name:'Windsurf by Codeium ($15/mo)',icon:'🏄',desc:'Agentic AI IDE — understands your whole project, makes multi-file changes.',url:'https://codeium.com/windsurf',price:'$15/mo',tags:['Agentic','Multi-file','Context'],badge:'Agentic IDE'},
        {name:'Tabnine Pro ($12/mo)',icon:'🔮',desc:'Enterprise-grade AI code completion with private cloud or on-premise deployment.',url:'https://www.tabnine.com/pricing',price:'$12/mo',tags:['Enterprise','Private','All IDEs'],badge:'Enterprise'},
        {name:'Amazon CodeWhisperer ($19/mo)',icon:'☁️',desc:'AWS-integrated AI coding. Best for AWS/cloud development and Java projects.',url:'https://aws.amazon.com/codewhisperer/',price:'$19/mo',tags:['AWS','Java','Cloud'],badge:'AWS Native'},
        {name:'Devin AI ($500/mo)',icon:'🤖',desc:'First fully autonomous AI software engineer. Solves entire GitHub issues end-to-end.',url:'https://www.cognition.ai/',price:'~$500/mo',tags:['Autonomous','Agent','Full Stack'],badge:'Fully Autonomous'},
        {name:'JetBrains AI ($8.33/mo)',icon:'💡',desc:'AI assistant built into IntelliJ, PyCharm, WebStorm and all JetBrains IDEs.',url:'https://www.jetbrains.com/ai/',price:'$8.33/mo',tags:['IntelliJ','PyCharm','WebStorm'],badge:'JetBrains IDEs'},
        {name:'Replit Agent ($25/mo)',icon:'🔄',desc:'AI that builds entire apps from natural language descriptions inside Replit.',url:'https://replit.com/pricing',price:'$25/mo',tags:['App Builder','Beginner','Deploy'],badge:'Build & Deploy'},
      ]
    },
    {
      cat:'🎨 Premium AI Creative Tools',
      tools:[
        {name:'Midjourney ($10/mo)',icon:'🖼️',desc:'Best AI image generator for artistic quality. Discord or web based generation.',url:'https://www.midjourney.com/',price:'$10/mo',tags:['Art','Images','Quality'],badge:'Best Art Quality'},
        {name:'DALL-E 3 API (Pay/use)',icon:'🎯',desc:'OpenAI API for DALL-E 3 image generation. $0.04–$0.08 per image.',url:'https://platform.openai.com/docs/guides/images',price:'Pay per use',tags:['API','Developers','HD Images'],badge:'API Access'},
        {name:'Runway ML ($12/mo)',icon:'🎬',desc:'AI video generation & editing. Gen-3 model creates stunning video from text.',url:'https://runwayml.com/',price:'$12/mo',tags:['Video','Film','Creative'],badge:'Best AI Video'},
        {name:'ElevenLabs Creator ($22/mo)',icon:'🔊',desc:'Unlimited AI voice cloning, 100k chars/month, voice design, dubbing.',url:'https://elevenlabs.io/pricing',price:'$22/mo',tags:['Voice','Clone','Dubbing'],badge:'Best Voice AI'},
        {name:'Adobe Firefly Pro ($5.99/mo)',icon:'🔥',desc:'1000 monthly generative credits for Photoshop, Illustrator, Premiere Pro AI features.',url:'https://firefly.adobe.com/',price:'$5.99/mo',tags:['Adobe','Design','Pro'],badge:'Adobe Creative'},
        {name:'Suno AI ($8/mo)',icon:'🎵',desc:'AI music generation — create full songs with vocals from a text prompt.',url:'https://suno.com/',price:'$8/mo',tags:['Music','Audio','Creative'],badge:'Best Music AI'},
        {name:'Kling AI ($9.99/mo)',icon:'🎥',desc:'High-quality AI video generation with realistic motion and long duration.',url:'https://klingai.com/',price:'$9.99/mo',tags:['Video','Realistic','Long'],badge:'Realistic Video'},
        {name:'Notion AI ($8/mo)',icon:'📝',desc:'Full AI writing suite in Notion — unlimited usage, Q&A, database analysis.',url:'https://www.notion.so/product/ai',price:'$8/mo add-on',tags:['Writing','Notes','Productivity'],badge:'Best Productivity'},
      ]
    },
    {
      cat:'🏢 Enterprise & Developer AI',
      tools:[
        {name:'OpenAI API (Pay/use)',icon:'⚙️',desc:'Direct API access to GPT-4o, o1, DALL-E, Whisper. Pay per token. Industry standard.',url:'https://platform.openai.com/',price:'Pay per use',tags:['API','GPT-4','Developer'],badge:'Industry Standard'},
        {name:'Anthropic API (Pay/use)',icon:'🧪',desc:'Claude API — best for long context, code review, analysis pipelines.',url:'https://www.anthropic.com/api',price:'Pay per use',tags:['API','Claude','Enterprise'],badge:'Best for Enterprise'},
        {name:'Google Vertex AI (Pay/use)',icon:'🌐',desc:'Enterprise Gemini + Google AI services with SLA, compliance, fine-tuning.',url:'https://cloud.google.com/vertex-ai',price:'Pay per use',tags:['Cloud','Enterprise','GCP'],badge:'GCP Enterprise'},
        {name:'Azure OpenAI (Pay/use)',icon:'🔷',desc:'OpenAI models with Azure enterprise security, compliance & private deployment.',url:'https://azure.microsoft.com/en-us/products/ai-services/openai-service',price:'Pay per use',tags:['Azure','Enterprise','Compliance'],badge:'Azure Enterprise'},
        {name:'AWS Bedrock (Pay/use)',icon:'☁️',desc:'Multiple foundation models (Anthropic, Amazon, Cohere) on AWS infrastructure.',url:'https://aws.amazon.com/bedrock/',price:'Pay per use',tags:['AWS','Multi-Model','Enterprise'],badge:'AWS Enterprise'},
        {name:'Replicate (Pay/use)',icon:'🔁',desc:'Run open source AI models via API. Great for Stable Diffusion, Llama, etc.',url:'https://replicate.com/',price:'Pay per use',tags:['Open Source','API','Models'],badge:'OSS Models API'},
      ]
    }
  ]
};

let aiToolsFilter='free'; let aiToolsCat='all';
function renderAITools(){
  const el=document.getElementById('ai-tools-content');
  if(!el) return;
  
  const freeCount=AI_TOOLS_DATA.free.reduce((a,c)=>a+c.tools.length,0);
  const paidCount=AI_TOOLS_DATA.paid.reduce((a,c)=>a+c.tools.length,0);
  
  const data=AI_TOOLS_DATA[aiToolsFilter];
  const cats=['all',...data.map(c=>c.cat)];
  
  el.innerHTML=`
    <!-- Free / Paid toggle -->
    <div style="display:flex;gap:8px;margin-bottom:24px;flex-wrap:wrap;align-items:center;">
      <button onclick="setAIFilter('free')" style="padding:12px 28px;border:2px solid ${aiToolsFilter==='free'?'var(--neon1)':'var(--border)'};background:${aiToolsFilter==='free'?'rgba(0,255,204,.12)':'transparent'};color:${aiToolsFilter==='free'?'var(--neon1)':'var(--muted)'};border-radius:8px;cursor:pointer;font-family:'JetBrains Mono',monospace;font-size:.78rem;font-weight:700;letter-spacing:.1em;transition:all .2s;">🟢 FREE TOOLS (${freeCount})</button>
      <button onclick="setAIFilter('paid')" style="padding:12px 28px;border:2px solid ${aiToolsFilter==='paid'?'var(--neon4)':'var(--border)'};background:${aiToolsFilter==='paid'?'rgba(255,204,0,.12)':'transparent'};color:${aiToolsFilter==='paid'?'var(--neon4)':'var(--muted)'};border-radius:8px;cursor:pointer;font-family:'JetBrains Mono',monospace;font-size:.78rem;font-weight:700;letter-spacing:.1em;transition:all .2s;">💎 PAID TOOLS (${paidCount})</button>
      <div style="margin-left:auto;font-family:'JetBrains Mono',monospace;font-size:.65rem;color:var(--muted);">PravAstra</div>
    </div>
    
    <!-- Banner -->
    <div style="padding:14px 20px;background:${aiToolsFilter==='free'?'rgba(0,255,204,.07)':'rgba(255,204,0,.07)'};border:1px solid ${aiToolsFilter==='free'?'rgba(0,255,204,.25)':'rgba(255,204,0,.25)'};border-radius:10px;margin-bottom:20px;display:flex;align-items:center;gap:12px;">
      <span style="font-size:1.5rem;">${aiToolsFilter==='free'?'🎁':'💎'}</span>
      <div>
        <div style="font-family:'Orbitron',monospace;font-size:.85rem;font-weight:700;color:${aiToolsFilter==='free'?'var(--neon1)':'var(--neon4)'};margin-bottom:3px;">${aiToolsFilter==='free'?'BEST FREE AI TOOLS — START TODAY FOR ₹0':'PREMIUM AI TOOLS — WORTH EVERY PENNY'}</div>
        <div style="font-family:'JetBrains Mono',monospace;font-size:.65rem;color:var(--muted);">${aiToolsFilter==='free'?'All tools below are free to use (may have usage limits). Perfect for students & beginners.':'Professional AI tools with advanced features. Prices in USD/month unless noted.'}</div>
      </div>
    </div>
    
    <!-- Category tabs -->
    <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:20px;">
      <button onclick="setAICat('all')" style="padding:7px 16px;border:1px solid ${aiToolsCat==='all'?'var(--neon2)':'var(--border)'};background:${aiToolsCat==='all'?'rgba(123,47,255,.15)':'transparent'};color:${aiToolsCat==='all'?'var(--neon2)':'var(--muted)'};border-radius:20px;font-family:'JetBrains Mono',monospace;font-size:.62rem;cursor:pointer;transition:all .2s;letter-spacing:.05em;">All Categories</button>
      ${data.map(c=>`<button onclick="setAICat('${c.cat.replace(/'/g,"\\'")}')" style="padding:7px 16px;border:1px solid ${aiToolsCat===c.cat?'var(--neon2)':'var(--border)'};background:${aiToolsCat===c.cat?'rgba(123,47,255,.15)':'transparent'};color:${aiToolsCat===c.cat?'var(--neon2)':'var(--muted)'};border-radius:20px;font-family:'JetBrains Mono',monospace;font-size:.62rem;cursor:pointer;transition:all .2s;letter-spacing:.05em;">${c.cat}</button>`).join('')}
    </div>
    
  // Tool cards — grouped by category, each with its own tinted panel
    <div style="display:flex;flex-direction:column;gap:20px;">
      ${data.filter(c=>aiToolsCat==='all'||aiToolsCat===c.cat).map(cat=>{
        const catCol=aiToolsFilter==='free'?'#00ffcc':'#ffcc00';
        const catBg=aiToolsFilter==='free'?'rgba(0,255,204,.05)':'rgba(255,204,0,.05)';
        const catBorder=aiToolsFilter==='free'?'rgba(0,255,204,.18)':'rgba(255,204,0,.18)';
        return `
        <div style="border:1px solid ${catBorder};border-left:4px solid ${catCol};border-radius:12px;padding:18px;background:linear-gradient(135deg,${aiToolsFilter==='free'?'rgba(0,255,204,.18)':'rgba(255,204,0,.18)'},rgba(0,0,0,.25));position:relative;overflow:hidden;">
          <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,${catCol},${catCol}44);"></div>
          <div style="font-family:'Orbitron',monospace;font-size:.8rem;font-weight:700;color:${catCol};margin-bottom:14px;display:flex;align-items:center;gap:10px;">
            <span style="width:8px;height:8px;border-radius:50%;background:${catCol};box-shadow:0 0 8px ${catCol};flex-shrink:0;"></span>
            ${cat.cat}
            <span style="font-family:'JetBrains Mono',monospace;font-size:.56rem;color:var(--muted);font-weight:400;background:rgba(255,255,255,.05);padding:2px 8px;border-radius:20px;border:1px solid var(--border);">${cat.tools.length} tools</span>
          </div>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:10px;">
            ${cat.tools.map(t=>`
              <a href="${t.url}" target="_blank" rel="noopener" style="display:flex;flex-direction:column;border:1px solid rgba(255,255,255,.08);background:rgba(0,0,0,.3);border-radius:10px;padding:16px;text-decoration:none;transition:all .22s;position:relative;overflow:hidden;" onmouseover="this.style.borderColor='${catCol}55';this.style.transform='translateY(-3px)';this.style.boxShadow='0 6px 20px ${catBg}'" onmouseout="this.style.borderColor='rgba(255,255,255,.08)';this.style.transform='';this.style.boxShadow=''">
                <div style="position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,${catCol},transparent);"></div>
                <div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:10px;">
                  <span style="font-size:1.5rem;flex-shrink:0;">${t.icon}</span>
                  <div style="flex:1;min-width:0;">
                    <div style="font-family:'Rajdhani',sans-serif;font-weight:700;color:#fff;font-size:.95rem;">${t.name}</div>
                    ${t.price?`<div style="font-family:'JetBrains Mono',monospace;font-size:.58rem;color:var(--neon4);margin-top:2px;">${t.price}</div>`:''}
                  </div>
                  <span style="font-family:'JetBrains Mono',monospace;font-size:.5rem;padding:2px 7px;border-radius:20px;background:${catCol}18;color:${catCol};border:1px solid ${catCol}33;white-space:nowrap;flex-shrink:0;">${t.badge}</span>
                </div>
                <div style="font-size:.8rem;color:var(--muted);line-height:1.5;flex:1;margin-bottom:8px;">${t.desc}</div>
                <div style="display:flex;gap:4px;flex-wrap:wrap;">
                  ${t.tags.map(tag=>`<span style="font-family:'JetBrains Mono',monospace;font-size:.53rem;padding:2px 6px;background:${catCol}10;color:${catCol};border-radius:3px;border:1px solid ${catCol}22;">${tag}</span>`).join('')}
                </div>
                <div style="display:flex;align-items:center;justify-content:flex-end;margin-top:8px;font-family:'JetBrains Mono',monospace;font-size:.6rem;color:${catCol};">Open →</div>
              </a>`).join('')}
          </div>
        </div>`;
      }).join('')}
    </div>
  `;
}
function setAIFilter(f){aiToolsFilter=f;aiToolsCat='all';renderAITools();}
function setAICat(c){aiToolsCat=c;renderAITools();}

function sendSupport(){
  const n=document.getElementById('s-name').value;
  const e=document.getElementById('s-email').value;
  const s=document.getElementById('s-subject').value;
  const m=document.getElementById('s-msg').value;
  if(!n||!e||!m){
    document.getElementById('support-msg').style.display='block';
    document.getElementById('support-msg').innerHTML='<div style="color:var(--neon3);font-family:JetBrains Mono,monospace;font-size:.8rem">⚠️ Please fill all fields.</div>';return;
  }
  const body=`Name: ${n}%0AEmail: ${e}%0ASubject: ${s}%0AMessage: ${m}`;
  window.location.href=`mailto:praveenmanchi1222@gmail.com?subject=${encodeURIComponent('PravAstra: '+s)}&body=${body}`;
  sfx('correct');
  document.getElementById('support-msg').style.display='block';
  document.getElementById('support-msg').innerHTML='<div style="color:var(--neon1);font-family:JetBrains Mono,monospace;font-size:.8rem">✅ Opening email client...</div>';
}

let musicCtx=null,musicGain=null;

// ══════════════════════════════════════════════════
//  JOB ROADMAP — 14-MONTH PLAN (ALL DOMAINS)
// ══════════════════════════════════════════════════
const JOB_ROADMAP={
  'Full Stack':[
    {month:'Month 1',emoji:'🌱',focus:'Web Foundations',color:'#00ffcc',tasks:[
      '✅ HTML5 — semantic tags, forms, accessibility, meta tags',
      '✅ CSS3 — box model, flexbox, grid, responsive design, media queries',
      '✅ Git & GitHub — init, add, commit, push, pull, branches, merge',
      '🎯 Build: personal portfolio webpage (HTML + CSS only)',
      '📝 Deploy on GitHub Pages for free',
      '🔖 Resource: freeCodeCamp Responsive Web Design certification (free)'
    ],youtube:[
      {title:'HTML Full Course for Beginners',channel:'freeCodeCamp',duration:'2 hrs',url:'https://www.youtube.com/watch?v=kUMe1FH4CHE'},
      {title:'CSS Full Course — Flexbox & Grid',channel:'freeCodeCamp',duration:'11 hrs',url:'https://www.youtube.com/watch?v=OXGznpKZ_sA'},
      {title:'Git and GitHub for Beginners Crash Course',channel:'Traversy Media',duration:'1.5 hrs',url:'https://www.youtube.com/watch?v=RGOj5yH7evk'},
    ]},
    {month:'Month 2',emoji:'⚡',focus:'JavaScript Core',color:'#00ccff',tasks:[
      '✅ JS fundamentals — variables, loops, functions, arrays, objects',
      '✅ DOM manipulation — querySelector, events, innerHTML',
      '✅ ES6+ — arrow functions, destructuring, spread, template literals, Promises',
      '✅ Async/Await — fetch API, JSON, error handling',
      '🎯 Build: To-Do app, Weather app using OpenWeather API',
      '🔖 Resource: javascript.info (free, comprehensive)'
    ],youtube:[
      {title:'JavaScript Full Course for Beginners',channel:'Bro Code',duration:'8 hrs',url:'https://www.youtube.com/watch?v=lfmg-EJ8gm4'},
      {title:'JavaScript ES6+ Complete Course',channel:'Traversy Media',duration:'3 hrs',url:'https://www.youtube.com/watch?v=IEf1KAcK6A8'},
      {title:'Async JavaScript & Fetch API Tutorial',channel:'Web Dev Simplified',duration:'1.5 hrs',url:'https://www.youtube.com/watch?v=DHvZLI7Db8E'},
    ]},
    {month:'Month 3',emoji:'⚛️',focus:'React.js Fundamentals',color:'#7b2fff',tasks:[
      '✅ React — JSX, components, props, state, hooks (useState, useEffect)',
      '✅ React Router — SPA navigation, dynamic routes, useNavigate',
      '✅ Context API — global state management',
      '✅ Tailwind CSS — utility-first styling, responsive classes',
      '🎯 Build: Multi-page React app (Blog or E-Commerce frontend)',
      '🔖 Resource: React official docs + Scrimba React course (free)'
    ],youtube:[
      {title:'React Full Course 2024 for Beginners',channel:'freeCodeCamp',duration:'7 hrs',url:'https://www.youtube.com/watch?v=CgkZ7MvWUAA'},
      {title:'React Hooks Full Tutorial',channel:'Web Dev Simplified',duration:'2 hrs',url:'https://www.youtube.com/watch?v=O6P86uwfdR0'},
      {title:'Tailwind CSS Full Course 2024',channel:'freeCodeCamp',duration:'4 hrs',url:'https://www.youtube.com/watch?v=lCxcTsOHrjo'},
    ]},
    {month:'Month 4',emoji:'🟢',focus:'Node.js + Express Backend',color:'#ffcc00',tasks:[
      '✅ Node.js — event loop, modules, npm, fs, path',
      '✅ Express.js — routes, middleware, REST API design',
      '✅ Authentication — JWT, bcrypt password hashing',
      '✅ Input validation — express-validator, Joi',
      '🎯 Build: REST API for Blog or Task Manager with auth',
      '🔖 Resource: Node.js official docs + Express.js docs'
    ],youtube:[
      {title:'Node.js & Express.js Full Course',channel:'freeCodeCamp',duration:'8 hrs',url:'https://www.youtube.com/watch?v=Oe421EPjeBE'},
      {title:'JWT Authentication — Node.js Tutorial',channel:'Web Dev Simplified',duration:'1 hr',url:'https://www.youtube.com/watch?v=mbsmsi7l3r4'},
      {title:'REST API Design Best Practices',channel:'Traversy Media',duration:'2 hrs',url:'https://www.youtube.com/watch?v=-MTSQjw5DrM'},
    ]},
    {month:'Month 5',emoji:'🗃️',focus:'Databases — SQL & NoSQL',color:'#ff2d78',tasks:[
      '✅ PostgreSQL — tables, joins, indexes, transactions, CRUD',
      '✅ MongoDB — documents, collections, Mongoose ODM',
      '✅ Database design — normalization, ER diagrams',
      '✅ Prisma ORM — schema, migrations, relations',
      '🎯 Connect backend API to PostgreSQL and MongoDB',
      '🔖 Resource: SQLZoo (free SQL practice), MongoDB University (free)'
    ],youtube:[
      {title:'PostgreSQL Tutorial for Beginners',channel:'freeCodeCamp',duration:'4 hrs',url:'https://www.youtube.com/watch?v=qw--VYLpxG4'},
      {title:'MongoDB Full Course — MERN Stack',channel:'freeCodeCamp',duration:'3 hrs',url:'https://www.youtube.com/watch?v=Gx4iBLKLVHk'},
      {title:'Prisma ORM Full Tutorial',channel:'Web Dev Simplified',duration:'2 hrs',url:'https://www.youtube.com/watch?v=RebA5J-rlwg'},
    ]},
    {month:'Month 6',emoji:'🏗️',focus:'Full Stack MERN Project',color:'#00ffcc',tasks:[
      '✅ Full Stack MERN — React + Node + Express + MongoDB',
      '✅ File uploads — Multer + Cloudinary',
      '✅ Payment integration — Stripe Checkout',
      '✅ Environment variables, .env, dotenv',
      '🎯 Build: Full E-Commerce site with cart, auth, payments',
      '🔖 Deploy: Frontend on Vercel, Backend on Railway/Render'
    ],youtube:[
      {title:'MERN Stack E-Commerce Full Tutorial',channel:'Traversy Media',duration:'12 hrs',url:'https://www.youtube.com/watch?v=prjwvs0BBDE'},
      {title:'Full Stack MERN Project — Stripe Payments',channel:'JavaScript Mastery',duration:'5 hrs',url:'https://www.youtube.com/watch?v=GNpABZyFE0A'},
      {title:'Deploy MERN App — Vercel + Render',channel:'Traversy Media',duration:'1.5 hrs',url:'https://www.youtube.com/watch?v=l134cBAJCuc'},
    ]},
    {month:'Month 7',emoji:'⚡',focus:'Next.js + TypeScript',color:'#7b2fff',tasks:[
      '✅ TypeScript — types, interfaces, generics, type guards',
      '✅ Next.js — App Router, SSR, SSG, ISR, Server Components',
      '✅ NextAuth.js — Google OAuth, session management',
      '✅ tRPC — end-to-end type-safe APIs',
      '🎯 Build: SaaS dashboard with auth, dark mode, CRUD',
      '🔖 Resource: Next.js official docs + Total TypeScript (free)'
    ],youtube:[
      {title:'TypeScript Full Course for Beginners',channel:'freeCodeCamp',duration:'7 hrs',url:'https://www.youtube.com/watch?v=30LWjhZzg50'},
      {title:'Next.js 14 Full Course — App Router',channel:'JavaScript Mastery',duration:'6 hrs',url:'https://www.youtube.com/watch?v=wm5gMKuwSYk'},
      {title:'NextAuth.js Full Tutorial — Google OAuth',channel:'Web Dev Simplified',duration:'1.5 hrs',url:'https://www.youtube.com/watch?v=w2h54xz6Ndw'},
    ]},
    {month:'Month 8',emoji:'🐳',focus:'DevOps — Docker & CI/CD',color:'#ffcc00',tasks:[
      '✅ Docker — Dockerfile, images, containers, volumes, networking',
      '✅ Docker Compose — multi-service apps',
      '✅ GitHub Actions — CI/CD pipelines, test + build + deploy',
      '✅ Nginx — reverse proxy, load balancing basics',
      '🎯 Containerize your full stack app, set up CI/CD pipeline',
      '🔖 Deploy on a free VPS (Oracle Always Free) or Railway'
    ],youtube:[
      {title:'Docker Full Course for Beginners',channel:'TechWorld with Nana',duration:'3 hrs',url:'https://www.youtube.com/watch?v=3c-iBn73dDE'},
      {title:'GitHub Actions CI/CD Full Tutorial',channel:'TechWorld with Nana',duration:'2 hrs',url:'https://www.youtube.com/watch?v=R8_veQiYBjI'},
      {title:'Nginx Full Course — Reverse Proxy',channel:'freeCodeCamp',duration:'2 hrs',url:'https://www.youtube.com/watch?v=9t9Mp0BGnyI'},
    ]},
    {month:'Month 9',emoji:'📊',focus:'System Design Basics',color:'#00ccff',tasks:[
      '✅ System design concepts — scalability, load balancing, caching',
      '✅ Redis — caching, sessions, pub/sub, rate limiting',
      '✅ Message queues — concepts + RabbitMQ/BullMQ basics',
      '✅ API design — versioning, pagination, rate limiting, idempotency',
      '🎯 Design: URL shortener, chat app, rate limiter',
      '🔖 Resource: ByteByteGo system design newsletter (free)'
    ],youtube:[
      {title:'System Design for Beginners — Full Course',channel:'ByteByteGo',duration:'3 hrs',url:'https://www.youtube.com/watch?v=i53Gi_K3o7I'},
      {title:'Redis Full Course — Caching & Pub/Sub',channel:'TechWorld with Nana',duration:'1.5 hrs',url:'https://www.youtube.com/watch?v=jgpVdJB2sKQ'},
      {title:'Rate Limiting Algorithms Explained',channel:'ByteByteGo',duration:'45 min',url:'https://www.youtube.com/watch?v=FU4WlwfS3G0'},
    ]},
    {month:'Month 10',emoji:'🧮',focus:'DSA for Interviews',color:'#ff2d78',tasks:[
      '✅ Arrays, Strings, Two Pointers, Sliding Window (30 problems)',
      '✅ Stack, Queue, Linked List (20 problems)',
      '✅ Trees, Graphs, BFS/DFS (30 problems)',
      '✅ Dynamic Programming patterns (20 problems)',
      '🎯 Solve 100 LeetCode problems — Easy + Medium',
      '🔖 Resource: NeetCode 150 problem list (free) — neetcode.io'
    ],youtube:[
      {title:'NeetCode — Full DSA Course for Interviews',channel:'NeetCode',duration:'5 hrs',url:'https://www.youtube.com/watch?v=ft0owvS5tQA'},
      {title:'Dynamic Programming — All Patterns',channel:'NeetCode',duration:'4 hrs',url:'https://www.youtube.com/watch?v=oBt53YbR9Kk'},
      {title:'Graph Algorithms for Technical Interviews',channel:'freeCodeCamp',duration:'3 hrs',url:'https://www.youtube.com/watch?v=tWVWeAqZ0WU'},
    ]},
    {month:'Month 11',emoji:'📁',focus:'Portfolio + Resume',color:'#7b2fff',tasks:[
      '✅ Build 3 polished portfolio projects (hosted live with code)',
      '✅ GitHub profile — README, pinned repos, contribution graph',
      '✅ LinkedIn profile — summary, skills, project links',
      '✅ Resume — 1 page, ATS-friendly, quantified achievements',
      '🎯 Milestone: Portfolio site live, LinkedIn 500+ connections',
      '🔖 Resource: Resumeworded (free score), JobScan (free ATS check)'
    ],youtube:[
      {title:'Full Stack Portfolio Tutorial — Next.js + Tailwind',channel:'JavaScript Mastery',duration:'4 hrs',url:'https://www.youtube.com/watch?v=OggSAbnDYlQ'},
      {title:'Build Perfect Developer Resume 2024',channel:'Traversy Media',duration:'1 hr',url:'https://www.youtube.com/watch?v=y8YH0Qbu5h4'},
      {title:'LinkedIn Profile for Developers — Get Hired',channel:'Kevin Powell',duration:'45 min',url:'https://www.youtube.com/watch?v=kBPLmSIrBOQ'},
    ]},
    {month:'Month 12',emoji:'🎤',focus:'Interview Prep',color:'#00ffcc',tasks:[
      '✅ Mock interviews — Pramp (free peer mock interviews)',
      '✅ Behavioral prep — STAR method, 10 common HR questions',
      '✅ System design mock — design Instagram, WhatsApp, Uber',
      '✅ LeetCode — grind 10 problems/week (medium + hard)',
      '🎯 Apply: 10 companies per day, track in spreadsheet',
      '🔖 Resource: Glassdoor interview questions for target companies'
    ],youtube:[
      {title:'How to Crack Coding Interviews — Full Guide',channel:'Clément Mihailescu',duration:'2 hrs',url:'https://www.youtube.com/watch?v=rEJzOhC5ZtQ'},
      {title:'System Design Interview — Step by Step Guide',channel:'ByteByteGo',duration:'1.5 hrs',url:'https://www.youtube.com/watch?v=i7twT3x5yv8'},
      {title:'Behavioral Interview Questions — STAR Method',channel:'Exponent',duration:'1.5 hrs',url:'https://www.youtube.com/watch?v=PJKYqLP6MRE'},
    ]},
    {month:'Month 13',emoji:'📬',focus:'Job Applications + Networking',color:'#ffcc00',tasks:[
      '✅ Mass apply — LinkedIn Easy Apply, company portals, referrals',
      '✅ Cold email — outreach to engineers at target companies',
      '✅ Hackathons — join 2+ to build connections and projects',
      '✅ Open source contributions — find issues tagged "good first issue"',
      '🎯 Target: 2+ interviews per week, document feedback',
      '🔖 Resource: Blind (anonymous salary + offer negotiation tips)'
    ],youtube:[
      {title:'How to Get a Software Job in 2024 — Full Strategy',channel:'Clément Mihailescu',duration:'1.5 hrs',url:'https://www.youtube.com/watch?v=pE_H5y_sVUg'},
      {title:'Open Source Contributions for Beginners',channel:'freeCodeCamp',duration:'1 hr',url:'https://www.youtube.com/watch?v=yzeVMecydCE'},
    ]},
    {month:'Month 14',emoji:'🏆',focus:'Offer & Negotiation',color:'#ff2d78',tasks:[
      '✅ Salary negotiation — always counter-offer (10-20% above initial)',
      '✅ Evaluate offers — base, equity, benefits, growth, team culture',
      '✅ References — prepare 2-3 professional references',
      '✅ Onboarding prep — review tech stack of company, read codebase',
      '🎯 MILESTONE: Sign your first full-stack developer job offer! 🎉',
      '🔖 Next steps: Learn company\'s tech stack, contribute in first 30 days'
    ],youtube:[
      {title:'Salary Negotiation for Software Engineers',channel:'Clément Mihailescu',duration:'1 hr',url:'https://www.youtube.com/watch?v=u9BoG1n1948'},
      {title:'First 30 Days as a Junior Developer',channel:'Traversy Media',duration:'45 min',url:'https://www.youtube.com/watch?v=8mVMwEz6RD4'},
    ]},
  ],
  'Cybersecurity (Red Team)':[
    {month:'Month 1',emoji:'🌐',focus:'Networking Fundamentals — Must Learn First',color:'#ff2d78',tasks:[
      '✅ NETWORKING FIRST — OSI model (7 layers), TCP/IP stack, subnetting, CIDR notation',
      '✅ Key protocols — HTTP/S, DNS, FTP, SSH, SMTP, RDP, ARP, ICMP — know them cold',
      '✅ Install Kali Linux on VirtualBox or WSL2',
      '✅ Linux commands — ls, cd, chmod, find, grep, netstat, ps, kill, ss, ip',
      '✅ Wireshark basics — capture live traffic, analyze TCP handshake, DNS queries',
      '🎯 Complete TryHackMe "Pre-Security" path → Networking Fundamentals module',
      '🔖 Resource: Professor Messer CompTIA Network+ on YouTube (free, start here)'
    ],youtube:[
      {title:'Computer Networking Full Course — OSI & TCP/IP',channel:'freeCodeCamp',duration:'9 hrs',url:'https://www.youtube.com/watch?v=IPvYjXCsTg8'},
      {title:'Networking for Hackers — Protocols & Packets',channel:'NetworkChuck',duration:'3 hrs',url:'https://www.youtube.com/watch?v=cNwEVYkx2Kk'},
    ]},
    {month:'Month 2',emoji:'🐍',focus:'Python for Hacking',color:'#ff6633',tasks:[
      '✅ Python basics — variables, loops, functions, file I/O',
      '✅ Python networking — socket, requests, scapy basics',
      '✅ Write a port scanner in Python',
      '✅ Write a banner grabber and basic web scraper',
      '✅ Automate recon: subdomain enumeration script',
      '🔖 Resource: Black Hat Python book concepts (free YouTube summaries)'
    ],youtube:[
      {title:'Python for Hackers — Full Beginner Course',channel:'freeCodeCamp',duration:'4 hrs',url:'https://www.youtube.com/watch?v=XWuP5Yf5ILI'},
      {title:'Python Network Scanner from Scratch',channel:'NetworkChuck',duration:'2 hrs',url:'https://www.youtube.com/watch?v=izKfPDDHEhQ'},
    ]},
    {month:'Month 3',emoji:'🔍',focus:'Reconnaissance & OSINT',color:'#ffcc00',tasks:[
      '✅ Passive recon — Google Dorks, Shodan, Censys, Hunter.io',
      '✅ Active recon — Nmap flags: -sV -sC -A -p- --script',
      '✅ Tools — theHarvester, Maltego, Recon-ng, Amass',
      '✅ Subdomain enumeration — subfinder, Gobuster DNS mode',
      '🎯 Recon a legal target (your own domain or HackTheBox)',
      '🔖 Resource: OSINT Framework (osintframework.com)'
    ],youtube:[
      {title:'Ethical Hacking — Reconnaissance Full Tutorial',channel:'TCM Security',duration:'3 hrs',url:'https://www.youtube.com/watch?v=3Kq1MIfTWCE'},
      {title:'Nmap Tutorial for Beginners — All Flags',channel:'NetworkChuck',duration:'3 hrs',url:'https://www.youtube.com/watch?v=4t4kBkMsDbQ'},
    ]},
    {month:'Month 4',emoji:'🌐',focus:'Web Application Hacking',color:'#ff2d78',tasks:[
      '✅ OWASP Top 10 (2021) — understand and exploit all 10',
      '✅ SQL Injection — manual + sqlmap (Union, Blind, Time-based)',
      '✅ XSS — reflected, stored, DOM-based',
      '✅ Burp Suite — proxy, repeater, intruder, scanner',
      '🎯 Complete PortSwigger Web Security Academy (first 50 labs free)',
      '🔖 DVWA + WebGoat for practice'
    ],youtube:[
      {title:'Web App Hacking Full Course — OWASP Top 10',channel:'TCM Security',duration:'4 hrs',url:'https://www.youtube.com/watch?v=MlVN5vNBXlI'},
      {title:'Burp Suite Tutorial — Full Beginner to Pro',channel:'TechHacked',duration:'3 hrs',url:'https://www.youtube.com/watch?v=VEjD7qB6pCk'},
    ]},
    {month:'Month 5',emoji:'💥',focus:'Exploitation — Metasploit',color:'#ff0066',tasks:[
      '✅ Metasploit framework — search, use, set, exploit, meterpreter',
      '✅ msfvenom — payload generation, encoders, formats',
      '✅ Post-exploitation — hashdump, persistence, keylogger',
      '✅ Pivoting — route add, port forwarding via meterpreter',
      '🎯 Root your first HackTheBox Starting Point machine',
      '🔖 Resource: Metasploit Unleashed (free course)'
    ],youtube:[
      {title:'Metasploit Tutorial for Beginners — Full Course',channel:'HackerSploit',duration:'4 hrs',url:'https://www.youtube.com/watch?v=8lR27r8Y3oe'},
      {title:'msfvenom Payload Generation Guide',channel:'TCM Security',duration:'2 hrs',url:'https://www.youtube.com/watch?v=fA4MIoF4qFY'},
    ]},
    {month:'Month 6',emoji:'🐧',focus:'Linux Privilege Escalation',color:'#aa00ff',tasks:[
      '✅ SUID/SGID binaries — GTFOBins for all common binaries',
      '✅ Sudo misconfigurations — sudo -l, sudo -u, sudoers tricks',
      '✅ Cron jobs — writeable scripts, PATH hijacking',
      '✅ Kernel exploits — uname -r, searchsploit, DirtyPipe, DirtyCow',
      '🎯 Complete TryHackMe "Linux PrivEsc" room + HackTricks cheatsheet',
      '🔖 Resource: book.hacktricks.xyz (comprehensive, free)'
    ],youtube:[
      {title:'Linux Privilege Escalation Full Course',channel:'TCM Security',duration:'4 hrs',url:'https://www.youtube.com/watch?v=ZTioFZDMr_I'},
      {title:'GTFOBins — All PrivEsc Techniques',channel:'John Hammond',duration:'2 hrs',url:'https://www.youtube.com/watch?v=dk2wsyFiosg'},
    ]},
    {month:'Month 7',emoji:'🪟',focus:'Windows Exploitation',color:'#0088ff',tasks:[
      '✅ Windows enumeration — systeminfo, whoami /priv, net user',
      '✅ Windows PrivEsc — token impersonation, Always Install Elevated',
      '✅ Active Directory intro — users, groups, GPO, Kerberos tickets',
      '✅ Pass-the-Hash, Pass-the-Ticket basics',
      '🎯 Complete TryHackMe "Windows PrivEsc" and "Active Directory Basics"',
      '🔖 Resource: TCM Security "Practical Ethical Hacking" (YouTube)'
    ],youtube:[
      {title:'Windows Privilege Escalation Full Course',channel:'TCM Security',duration:'4 hrs',url:'https://www.youtube.com/watch?v=xkqLAIpkBsM'},
      {title:'Active Directory Hacking — Full Course',channel:'TCM Security',duration:'5 hrs',url:'https://www.youtube.com/watch?v=pKtDptzIQLM'},
    ]},
    {month:'Month 8',emoji:'🎯',focus:'First HackTheBox Machines',color:'#ff2d78',tasks:[
      '✅ Solve 3 HackTheBox Easy machines without hints',
      '✅ Write full write-ups for each (publish on GitHub or Medium)',
      '✅ Join a CTF event from CTFtime.org (team or solo)',
      '✅ Password cracking — Hashcat rockyou.txt, John the Ripper',
      '🎯 Milestone: 5 owned machines on HackTheBox or TryHackMe',
      '🔖 Resource: IppSec YouTube (HTB walkthroughs after machine retires)'
    ],youtube:[
      {title:'How to Approach HackTheBox Machines',channel:'IppSec',duration:'2 hrs',url:'https://www.youtube.com/watch?v=9RJqrM3sEfI'},
      {title:'Password Cracking — Hashcat Full Tutorial',channel:'HackerSploit',duration:'3 hrs',url:'https://www.youtube.com/watch?v=Ci2sT01oM3s'},
    ]},
    {month:'Month 9',emoji:'🔑',focus:'Advanced AD Attacks',color:'#ff0044',tasks:[
      '✅ Kerberoasting — GetUserSPNs.py, ticket extraction, hashcat -m 13100',
      '✅ AS-REP Roasting — GetNPUsers.py for accounts without pre-auth',
      '✅ BloodHound — SharpHound ingestor, attack path analysis',
      '✅ DCSync — secretsdump.py, mimikatz lsadump::dcsync',
      '✅ Golden & Silver Ticket attacks',
      '🔖 Resource: ired.team (free AD attack reference)'
    ],youtube:[
      {title:'Active Directory Attacks — Kerberoasting & BloodHound',channel:'The Cyber Mentor',duration:'4 hrs',url:'https://www.youtube.com/watch?v=t0VaZ7B1RDU'},
      {title:'BloodHound Full Tutorial — AD Attack Paths',channel:'VbScrub',duration:'2.5 hrs',url:'https://www.youtube.com/watch?v=q86VgM2Tafc'},
    ]},
    {month:'Month 10',emoji:'📋',focus:'CompTIA Security+ Certification',color:'#00ccff',tasks:[
      '✅ Study all SY0-701 domains: Threats, Architecture, Implementation, Ops, Governance',
      '✅ 500+ practice questions including PBQ simulations',
      '✅ Network security concepts — firewalls, IDS/IPS, VPN, DMZ',
      '✅ Risk management and compliance basics',
      '🎯 Pass CompTIA Security+ (SY0-701) ✅',
      '🔖 Resource: Professor Messer free Security+ course on YouTube'
    ],youtube:[
      {title:'CompTIA Security+ SY0-701 Full Course',channel:'Professor Messer',duration:'14 hrs',url:'https://www.youtube.com/watch?v=nc5q_xFvbqE'},
      {title:'Security+ Practice Questions — PBQ Tips',channel:'Jason Dion',duration:'2 hrs',url:'https://www.youtube.com/watch?v=T1iN0b3hAHk'},
    ]},
    {month:'Month 11',emoji:'🐛',focus:'Bug Bounty Hunting',color:'#ff8800',tasks:[
      '✅ Register on HackerOne and Bugcrowd',
      '✅ Choose a program with a broad scope and low competition',
      '✅ Advanced techniques — SSRF, IDOR chains, OAuth flaws, JWT attacks',
      '✅ Subdomain takeover, open redirects, CORS misconfigurations',
      '🎯 Find your first bug (even P4/Informational counts for portfolio)',
      '🔖 Resource: Read P1/P2 disclosed reports on HackerOne Hacktivity'
    ],youtube:[
      {title:'Bug Bounty Hunting Course for Beginners',channel:'STÖK',duration:'4 hrs',url:'https://www.youtube.com/watch?v=aXSA4d0XoGw'},
      {title:'How to Find Your First Bug Bounty',channel:'NahamSec',duration:'3.5 hrs',url:'https://www.youtube.com/watch?v=UUlRiLrXOLc'},
    ]},
    {month:'Month 12',emoji:'⚔️',focus:'OSCP Preparation',color:'#cc0000',tasks:[
      '✅ Start Offensive Security PWK course or TCM Security course',
      '✅ Solve 10 OSCP-like machines (HackTheBox/VulnHub list)',
      '✅ Buffer overflow practice — Windows vanilla BoF methodology',
      '✅ Report writing — practice pentest report template',
      '🎯 Attempt eJPT or eCPPT as a stepping-stone cert',
      '🔖 Resource: TCM Security "Practical Ethical Hacking" paid course'
    ],youtube:[
      {title:'OSCP Preparation — Zero to Hero 2024',channel:'TryHackMe',duration:'4 hrs',url:'https://www.youtube.com/watch?v=DkMcNd2z5Dc'},
      {title:'Buffer Overflow — OSCP Style',channel:'TCM Security',duration:'2.5 hrs',url:'https://www.youtube.com/watch?v=1X9DsFDnZjA'},
    ]},
    {month:'Month 13',emoji:'📂',focus:'Portfolio & GitHub',color:'#7b2fff',tasks:[
      '✅ 10+ machine write-ups on GitHub/Blog',
      '✅ Custom tools: Python recon tool, custom scanner',
      '✅ TryHackMe/HTB profile badges visible on LinkedIn',
      '✅ Security+ and any other certs listed prominently',
      '🎯 Build LinkedIn with security keywords for recruiters',
      '🔖 Apply: infosec-jobs.com, LinkedIn, HackerOne jobs'
    ],youtube:[
      {title:'How to Build a Cybersecurity Portfolio 2024',channel:'Gerald Auger',duration:'3 hrs',url:'https://www.youtube.com/watch?v=paFADSS7QHc'},
      {title:'Landing a Cybersecurity Job — Resume Tips',channel:'TCM Security',duration:'1.5 hrs',url:'https://www.youtube.com/watch?v=w7hZTL9T05Q'},
    ]},
    {month:'Month 14',emoji:'🏆',focus:'Job Search & First Offer',color:'#ff2d78',tasks:[
      '✅ Apply daily — junior pentester, SOC analyst, security analyst roles',
      '✅ Prepare for technical screening — network, web attacks, tools',
      '✅ Mock pentest interview questions (CVE explanation, methodology)',
      '✅ Negotiate salary — know market rate for your location',
      '🎯 MILESTONE: Land first cybersecurity / red team job! 🎉',
      '🔖 Next: OSCP certification after getting first role'
    ],youtube:[
      {title:'How to Get a Cybersecurity Job in 2024',channel:'Gerald Auger',duration:'2 hrs',url:'https://www.youtube.com/watch?v=2xBVGvxEBr8'},
      {title:'Cybersecurity Interview Questions & Answers',channel:'TCM Security',duration:'1.5 hrs',url:'https://www.youtube.com/watch?v=0Qna7M-Tj1k'},
    ]},
  ],
  'Cybersecurity (Blue Team)':[
    {month:'Month 1',emoji:'🌐',focus:'Networking Fundamentals — Must Learn First',color:'#00ccff',tasks:[
      '✅ NETWORKING FIRST — OSI model (7 layers), TCP/IP, DNS, DHCP, ARP, HTTP/S',
      '✅ Subnetting — /24, /16, /8, CIDR, private vs public IP, NAT explained',
      '✅ Wireshark — install, capture live traffic, filter by protocol, read TCP 3-way handshake',
      '✅ Windows fundamentals — Event Viewer, Task Manager, Registry, Services, netstat',
      '✅ Linux fundamentals — filesystem, /var/log/, processes, cron, ss, ip commands',
      '🎯 Complete TryHackMe "Pre-Security" path → Networking Fundamentals first',
      '🔖 Resource: Professor Messer CompTIA Network+ on YouTube (100% free)'
    ],youtube:[
      {title:'Computer Networking Full Course — OSI & TCP/IP',channel:'freeCodeCamp',duration:'9 hrs',url:'https://www.youtube.com/watch?v=IPvYjXCsTg8'},
      {title:'Wireshark Tutorial for Beginners — Full Course',channel:'David Bombal',duration:'3.5 hrs',url:'https://www.youtube.com/watch?v=lb1Dw0elw0Q'},
    ]},
    {month:'Month 2',emoji:'📋',focus:'Security Concepts + CIA Triad',color:'#0099cc',tasks:[
      '✅ CIA Triad — Confidentiality, Integrity, Availability deep dive',
      '✅ Defense-in-depth, zero trust concepts, least privilege',
      '✅ Attack lifecycle — cyber kill chain, MITRE ATT&CK basics',
      '✅ Common attack types — phishing, malware, ransomware, insider threat',
      '🎯 Create ATT&CK Navigator map for 5 common attack techniques',
      '🔖 Resource: MITRE ATT&CK (attack.mitre.org — free)'
    ],youtube:[
      {title:'SOC Analyst Full Course for Beginners',channel:'Gerald Auger',duration:'4 hrs',url:'https://www.youtube.com/watch?v=ug5dXFyJF4A'},
      {title:'MITRE ATT&CK Explained — Beginner Guide',channel:'John Hammond',duration:'1.5 hrs',url:'https://www.youtube.com/watch?v=cDRGsYm7q6E'},
    ]},
    {month:'Month 3',emoji:'🔐',focus:'Log Analysis Basics',color:'#0077aa',tasks:[
      '✅ Windows Event IDs — 4624 (logon), 4625 (failed), 4688 (process), 4698 (task)',
      '✅ Sysmon — install, configure SwiftOnSecurity config, key event IDs',
      '✅ Linux logs — /var/log/auth.log, syslog, kern.log, wtmp, btmp',
      '✅ Log parsing with grep, awk, cut, sort, uniq',
      '🎯 Analyze a sample Windows event log file and find anomalies',
      '🔖 Resource: TryHackMe "Windows Event Logs" room (free)'
    ],youtube:[
      {title:'Windows Event Logs — SOC Analyst Tutorial',channel:'MyDFIR',duration:'2.5 hrs',url:'https://www.youtube.com/watch?v=bJZa40YqA2E'},
      {title:'Sysmon Tutorial — Full Setup and Analysis',channel:'13Cubed',duration:'3 hrs',url:'https://www.youtube.com/watch?v=VtMVPcNPJBU'},
    ]},
    {month:'Month 4',emoji:'📊',focus:'SIEM — Splunk & ELK',color:'#006699',tasks:[
      '✅ Splunk basics — SPL queries, search, stats, timechart, rex',
      '✅ Splunk dashboards — panels, drilldowns, alerts',
      '✅ ELK Stack — Elasticsearch queries, Kibana dashboards, Logstash',
      '✅ Wazuh — HIDS setup, agent deployment, alerts',
      '🎯 Complete Splunk free training (Splunk Fundamentals 1)',
      '🔖 Resource: TryHackMe "Splunk" room + CyberDefenders free labs'
    ],youtube:[
      {title:'Splunk SIEM Tutorial for Beginners — Full Course',channel:'Splunk',duration:'4 hrs',url:'https://www.youtube.com/watch?v=vBYrfNNYpLE'},
      {title:'ELK Stack Security SIEM Setup',channel:'MyDFIR',duration:'3 hrs',url:'https://www.youtube.com/watch?v=T5sHm8iuvjE'},
    ]},
    {month:'Month 5',emoji:'🦠',focus:'Malware Analysis Basics',color:'#0055aa',tasks:[
      '✅ Static analysis — strings, PEiD, Detect-It-Easy, CFF Explorer',
      '✅ Dynamic analysis — Cuckoo Sandbox, ANY.RUN, Procmon, Wireshark',
      '✅ YARA rules — writing signatures for malware detection',
      '✅ VirusTotal — API, relationships, behavior sandbox',
      '🎯 Analyze 3 malware samples from MalwareBazaar',
      '🔖 Resource: ANY.RUN (free sandboxed analysis) + MalwareBazaar'
    ],youtube:[
      {title:'Malware Analysis for Beginners — Full Course',channel:'OALabs',duration:'4 hrs',url:'https://www.youtube.com/watch?v=yPBGi-yp9wE'},
      {title:'YARA Rules Tutorial — Write Malware Signatures',channel:'John Hammond',duration:'1.5 hrs',url:'https://www.youtube.com/watch?v=oc1kJ2eJ_40'},
    ]},
    {month:'Month 6',emoji:'🔬',focus:'Digital Forensics',color:'#004488',tasks:[
      '✅ Autopsy — disk imaging, file recovery, timeline analysis',
      '✅ FTK Imager — create forensic disk images (.dd, .E01)',
      '✅ Volatility3 — memory analysis: pslist, netscan, cmdline, dlllist',
      '✅ Browser forensics — Chrome/Firefox history, cookies, cache',
      '🎯 Complete a CyberDefenders DFIR challenge',
      '🔖 Resource: 13Cubed YouTube channel (best forensics content)'
    ],youtube:[
      {title:'Digital Forensics Full Course — Autopsy Tutorial',channel:'13Cubed',duration:'4 hrs',url:'https://www.youtube.com/watch?v=JKcnM9N0HnQ'},
      {title:'Volatility Memory Forensics Tutorial',channel:'13Cubed',duration:'3 hrs',url:'https://www.youtube.com/watch?v=l3DTzBXSxSI'},
    ]},
    {month:'Month 7',emoji:'🚨',focus:'Incident Response',color:'#003366',tasks:[
      '✅ IR methodology — NIST: Prepare → Identify → Contain → Eradicate → Recover',
      '✅ IR playbooks — for ransomware, phishing, insider threat',
      '✅ Evidence collection — chain of custody, volatile vs non-volatile',
      '✅ TheHive — incident management platform setup',
      '🎯 Respond to a simulated ransomware incident (CyberDefenders lab)',
      '🔖 Resource: SANS Incident Handler\'s Handbook (free PDF)'
    ],youtube:[
      {title:'Incident Response Full Course — NIST Framework',channel:'Gerald Auger',duration:'3 hrs',url:'https://www.youtube.com/watch?v=HfFb4GVQwDo'},
      {title:'TheHive — Incident Response Platform Tutorial',channel:'Simplilearn',duration:'1.5 hrs',url:'https://www.youtube.com/watch?v=7V4r5k_f97c'},
    ]},
    {month:'Month 8',emoji:'🌐',focus:'Network Security Monitoring',color:'#00aacc',tasks:[
      '✅ Zeek/Bro — log files, conn.log, http.log, dns.log, ssl.log',
      '✅ Suricata — IDS/IPS rules, alert analysis, EVE JSON logs',
      '✅ PCAP analysis — identify C2 beacons, port scans, exfiltration',
      '✅ Network anomaly detection — baseline vs deviation',
      '🎯 Analyze PCAP from malware-traffic-analysis.net',
      '🔖 Resource: malware-traffic-analysis.net (free exercises)'
    ],youtube:[
      {title:'Suricata IDS Full Tutorial',channel:'HackerSploit',duration:'4 hrs',url:'https://www.youtube.com/watch?v=S0-vme5hIHQ'},
      {title:'Network Forensics — Zeek & PCAP Analysis',channel:'13Cubed',duration:'3 hrs',url:'https://www.youtube.com/watch?v=KMaKVGMBN0U'},
    ]},
    {month:'Month 9',emoji:'📡',focus:'Threat Intelligence',color:'#0088bb',tasks:[
      '✅ MITRE ATT&CK — tactics, techniques, sub-techniques, mitigations',
      '✅ CTI platforms — MISP, AlienVault OTX, VirusTotal Graph',
      '✅ STIX/TAXII — structured threat intelligence sharing',
      '✅ Diamond Model — adversary, infrastructure, capability, victim',
      '🎯 Create a MISP event for a simulated campaign',
      '🔖 Resource: AlienVault OTX + ThreatFox (free feeds)'
    ],youtube:[
      {title:'Threat Intelligence Full Course — MITRE ATT&CK',channel:'SANS Institute',duration:'3 hrs',url:'https://www.youtube.com/watch?v=bYZqCIIzGHk'},
      {title:'MISP Threat Intelligence Platform Tutorial',channel:'HackerSploit',duration:'2.5 hrs',url:'https://www.youtube.com/watch?v=JsLiB1iJ8ao'},
    ]},
    {month:'Month 10',emoji:'📋',focus:'CompTIA Security+ Certification',color:'#00ccff',tasks:[
      '✅ Study all 5 SY0-701 domains systematically',
      '✅ 500+ practice questions with explanations',
      '✅ Performance-Based Questions (PBQ) simulation',
      '✅ CompTIA CertMaster Learn free trial materials',
      '🎯 PASS CompTIA Security+ SY0-701 ✅',
      '🔖 Resource: Professor Messer FREE Security+ course on YouTube'
    ],youtube:[
      {title:'CompTIA Security+ SY0-701 Full Course FREE',channel:'Professor Messer',duration:'14 hrs',url:'https://www.youtube.com/watch?v=nc5q_xFvbqE'},
      {title:'Security+ Final Review — All Domains',channel:'Jason Dion',duration:'3 hrs',url:'https://www.youtube.com/watch?v=T1iN0b3hAHk'},
    ]},
    {month:'Month 11',emoji:'🛠️',focus:'Detection Engineering + SOAR',color:'#0055bb',tasks:[
      '✅ Sigma rules — writing detections for ATT&CK techniques',
      '✅ SOAR concepts — Shuffle SOAR (free, open source) playbooks',
      '✅ Endpoint Detection — CrowdStrike/Defender concepts',
      '✅ Cloud security monitoring — AWS CloudTrail, Azure Activity Logs',
      '🎯 Write 5 custom Sigma detection rules',
      '🔖 Resource: SigmaHQ/sigma GitHub (free rule repository)'
    ],youtube:[
      {title:'Detection Engineering — Sigma Rules Tutorial',channel:'The Taggart Institute',duration:'3.5 hrs',url:'https://www.youtube.com/watch?v=ok0IWsjFPGs'},
      {title:'SOAR Automation — Shuffle SOAR Tutorial',channel:'Simplilearn',duration:'2 hrs',url:'https://www.youtube.com/watch?v=4kU4T3PxMXU'},
    ]},
    {month:'Month 12',emoji:'🏗️',focus:'Build Your Home SOC Lab',color:'#003399',tasks:[
      '✅ Wazuh + ELK + TheHive + MISP on free VMs',
      '✅ Ingest Windows + Linux logs into your SIEM',
      '✅ Create dashboards: top alerts, login failures, suspicious processes',
      '✅ Simulate attacks and verify your detections fire',
      '🎯 Document your home lab setup — blog or GitHub README',
      '🔖 Resource: MyDFIR YouTube "Build a Free SOC Home Lab 2024"'
    ],youtube:[
      {title:'Build a Free SOC Home Lab 2024',channel:'MyDFIR',duration:'4 hrs',url:'https://www.youtube.com/watch?v=5TnCrKfqrFI'},
      {title:'Wazuh SIEM Full Setup Tutorial',channel:'MyDFIR',duration:'3 hrs',url:'https://www.youtube.com/watch?v=3hCQr5xQaFc'},
    ]},
    {month:'Month 13',emoji:'📝',focus:'BTL1 Certification + Portfolio',color:'#0077cc',tasks:[
      '✅ Study for BTL1 (Blue Team Labs Level 1) — securityblue.team',
      '✅ Complete 5 CyberDefenders SOC challenges',
      '✅ Write 3+ DFIR or threat hunting blog posts',
      '✅ GitHub portfolio — detection rules, lab screenshots, write-ups',
      '🎯 Pass BTL1 certification ✅ or CompTIA CySA+',
      '🔖 Apply: CyberSeek.org for SOC analyst pathways'
    ],youtube:[
      {title:'BTL1 Review — Blue Team Labs Level 1',channel:'The Security Noob',duration:'1.5 hrs',url:'https://www.youtube.com/watch?v=oVKABxPMmVo'},
      {title:'CySA+ Study Guide — Full Course',channel:'Professor Messer',duration:'4 hrs',url:'https://www.youtube.com/watch?v=sGhMk7OOSQ0'},
    ]},
    {month:'Month 14',emoji:'🏆',focus:'First SOC / Blue Team Job',color:'#00ccff',tasks:[
      '✅ Apply daily — SOC Analyst L1/L2, IR Analyst, Threat Analyst roles',
      '✅ Prepare for interviews — explain IR process, tool experience, TTPs',
      '✅ CyberDefenders rank visible on resume',
      '✅ Salary research — Glassdoor, Levels.fyi for security roles',
      '🎯 MILESTONE: Land your first Blue Team / SOC job! 🎉',
      '🔖 Next steps: Work toward GCIH or Microsoft SC-200'
    ],youtube:[
      {title:'How to Get a SOC Analyst Job in 2024',channel:'Gerald Auger',duration:'2 hrs',url:'https://www.youtube.com/watch?v=ug5dXFyJF4A'},
      {title:'SOC Analyst Interview Questions & Answers',channel:'TryHackMe',duration:'1.5 hrs',url:'https://www.youtube.com/watch?v=xJTKe5mLTbU'},
    ]},
  ],
  AI:[
    {month:'Month 1',emoji:'🐍',focus:'Python for AI/ML',color:'#ffcc00',tasks:[
      '✅ Python — variables, loops, functions, lists, dicts, OOP',
      '✅ NumPy — arrays, broadcasting, vectorized operations',
      '✅ Pandas — DataFrames, read_csv, groupby, merge, describe',
      '✅ Matplotlib/Seaborn — line charts, bar plots, heatmaps',
      '🎯 Analyze a real Kaggle dataset with Python',
      '🔖 Resource: Kaggle Python course (free) + Colab for coding'
    ],youtube:[
      {title:'Python for Data Science Full Course',channel:'freeCodeCamp',duration:'12 hrs',url:'https://www.youtube.com/watch?v=LHBE6Q9XlzI'},
      {title:'NumPy + Pandas Full Tutorial',channel:'Keith Galli',duration:'4 hrs',url:'https://www.youtube.com/watch?v=r-uOLxNrNk8'},
    ]},
    {month:'Month 2',emoji:'📊',focus:'Statistics & Math for ML',color:'#ffaa00',tasks:[
      '✅ Linear algebra — vectors, matrices, dot product, eigenvectors',
      '✅ Probability — Bayes theorem, distributions, expectation, variance',
      '✅ Statistics — mean/median/std, hypothesis testing, p-value, CLT',
      '✅ Calculus — derivatives, gradients, chain rule (for backprop)',
      '🎯 Implement Naive Bayes classifier from scratch',
      '🔖 Resource: StatQuest YouTube (best ML math channel)'
    ],youtube:[
      {title:'Statistics for Machine Learning — Full Course',channel:'StatQuest',duration:'4 hrs',url:'https://www.youtube.com/watch?v=qBigTkjLzgk'},
      {title:'Linear Algebra for Machine Learning',channel:'3Blue1Brown',duration:'3 hrs',url:'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab'},
    ]},
    {month:'Month 3',emoji:'🤖',focus:'Classical ML — Scikit-learn',color:'#ff8800',tasks:[
      '✅ Supervised learning — Linear Regression, Logistic Regression, SVM',
      '✅ Decision Trees, Random Forest, Gradient Boosting (XGBoost)',
      '✅ Unsupervised — K-Means, DBSCAN, PCA',
      '✅ Model evaluation — accuracy, precision, recall, F1, ROC-AUC',
      '🎯 Compete in a Kaggle Titanic or House Prices competition',
      '🔖 Resource: Kaggle ML courses (free + certificate)'
    ],youtube:[
      {title:'Scikit-learn Machine Learning Full Course',channel:'freeCodeCamp',duration:'5 hrs',url:'https://www.youtube.com/watch?v=7eh4d6sabA0'},
      {title:'XGBoost Tutorial — Gradient Boosting',channel:'StatQuest',duration:'2 hrs',url:'https://www.youtube.com/watch?v=OtD8wVaFm6E'},
    ]},
    {month:'Month 4',emoji:'🧠',focus:'Deep Learning — PyTorch',color:'#ff6600',tasks:[
      '✅ Neural networks — forward pass, backprop, activation functions',
      '✅ PyTorch — tensors, autograd, nn.Module, DataLoader, training loop',
      '✅ CNNs — convolutional layers, pooling, batch norm — CIFAR-10 classifier',
      '✅ Regularization — dropout, L2, early stopping, data augmentation',
      '🎯 Build image classifier achieving >90% accuracy on CIFAR-10',
      '🔖 Resource: Andrej Karpathy "Neural Networks: Zero to Hero" (free)'
    ],youtube:[
      {title:'PyTorch for Deep Learning — Full Course',channel:'freeCodeCamp',duration:'10 hrs',url:'https://www.youtube.com/watch?v=V_xro1bcAuA'},
      {title:'Neural Networks Zero to Hero — Andrej Karpathy',channel:'Andrej Karpathy',duration:'8 hrs',url:'https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ'},
    ]},
    {month:'Month 5',emoji:'📝',focus:'NLP & Transformers',color:'#ff4400',tasks:[
      '✅ NLP basics — tokenization, stemming, TF-IDF, word embeddings',
      '✅ HuggingFace Transformers — pipeline API, model loading',
      '✅ Fine-tune BERT for text classification on a custom dataset',
      '✅ Attention mechanism — understand self-attention conceptually',
      '🎯 Build: sentiment analysis app with BERT + Gradio UI',
      '🔖 Resource: HuggingFace NLP Course (free with certificate)'
    ],youtube:[
      {title:'HuggingFace Transformers Full Course',channel:'HuggingFace',duration:'6 hrs',url:'https://www.youtube.com/watch?v=00GKzGyWFEs'},
      {title:'BERT Fine-Tuning Tutorial — Text Classification',channel:'Andrej Karpathy',duration:'2 hrs',url:'https://www.youtube.com/watch?v=d_bdU3LsLys'},
    ]},
    {month:'Month 6',emoji:'🔗',focus:'LLMs & Prompt Engineering',color:'#cc2200',tasks:[
      '✅ LLM APIs — OpenAI GPT, Anthropic Claude, Gemini API',
      '✅ Prompt engineering — few-shot, chain-of-thought, role prompting',
      '✅ LangChain — chains, agents, tools, memory',
      '✅ RAG pipeline — embed docs, store in FAISS, retrieve + generate',
      '🎯 Build: document Q&A chatbot with RAG (PDF → chat)',
      '🔖 Resource: LangChain docs + DeepLearning.AI free short courses'
    ],youtube:[
      {title:'LangChain Full Course — Build LLM Apps',channel:'freeCodeCamp',duration:'5 hrs',url:'https://www.youtube.com/watch?v=HSZ_uaif57o'},
      {title:'RAG Pipeline — Build AI Q&A from PDF',channel:'Alejandro AO',duration:'2 hrs',url:'https://www.youtube.com/watch?v=tcqEUSNCn8I'},
    ]},
    {month:'Month 7',emoji:'⚙️',focus:'MLOps — Deploy AI Models',color:'#ff8800',tasks:[
      '✅ FastAPI — build ML inference REST API',
      '✅ Docker — containerize your ML model',
      '✅ Gradio & Streamlit — build ML demos fast',
      '✅ HuggingFace Spaces — deploy free ML demos',
      '🎯 Deploy 2 live AI models (HuggingFace Spaces or Vercel)',
      '🔖 Resource: MLOps Community YouTube (free content)'
    ],youtube:[
      {title:'Deploy ML Models with FastAPI — Full Tutorial',channel:'Abhishek Thakur',duration:'3 hrs',url:'https://www.youtube.com/watch?v=h5wLuVDr0oc'},
      {title:'Gradio Tutorial — Build ML Apps Fast',channel:'freeCodeCamp',duration:'1.5 hrs',url:'https://www.youtube.com/watch?v=RiCQzBluTxU'},
    ]},
    {month:'Month 8',emoji:'📈',focus:'Computer Vision',color:'#ffcc00',tasks:[
      '✅ Object detection — YOLO family (YOLOv8 with Ultralytics)',
      '✅ Image segmentation — SAM (Segment Anything Model)',
      '✅ Transfer learning — fine-tune ResNet/EfficientNet on custom data',
      '✅ OpenCV — video processing, real-time inference',
      '🎯 Build: real-time object detection app with webcam + YOLOv8',
      '🔖 Resource: Roboflow tutorials (free) + Ultralytics docs'
    ],youtube:[
      {title:'YOLOv8 Full Course — Object Detection',channel:'Nicholas Renotte',duration:'3 hrs',url:'https://www.youtube.com/watch?v=m9fH9OWn8YM'},
      {title:'Computer Vision with OpenCV Full Course',channel:'freeCodeCamp',duration:'4 hrs',url:'https://www.youtube.com/watch?v=oXlwWbU8l2o'},
    ]},
    {month:'Month 9',emoji:'🏅',focus:'Kaggle Competitions',color:'#ff6600',tasks:[
      '✅ Join a Kaggle competition (aim for top 30%)',
      '✅ Feature engineering — encoding, imputation, scaling, feature selection',
      '✅ Ensemble methods — stacking, blending, voting classifiers',
      '✅ Cross-validation strategies — StratifiedKFold, GroupKFold',
      '🎯 Earn Kaggle "Competitions Master" tier medals',
      '🔖 Resource: Kaggle Notebooks — study top solutions'
    ],youtube:[
      {title:'How to Win Kaggle Competitions — Strategy',channel:'Abhishek Thakur',duration:'2.5 hrs',url:'https://www.youtube.com/watch?v=VC6jh-TlZOw'},
      {title:'Feature Engineering Full Tutorial',channel:'Krish Naik',duration:'3 hrs',url:'https://www.youtube.com/watch?v=6WDFfaYtN6s'},
    ]},
    {month:'Month 10',emoji:'🔭',focus:'AI Research & Specialization',color:'#ff4400',tasks:[
      '✅ Read 3 foundational AI papers (Attention Is All You Need, GPT-3, DDPM)',
      '✅ Specialize: choose NLP, CV, RL, or Generative AI',
      '✅ Implement paper: reproduce a key result from an AI paper',
      '✅ Contribute to open source AI (HuggingFace, scikit-learn issues)',
      '🎯 Publish a Kaggle notebook or blog post explaining your paper impl',
      '🔖 Resource: Papers With Code (paperswithcode.com) + ArXiv'
    ],youtube:[
      {title:'How to Read AI Papers — Practical Guide',channel:'Yannic Kilcher',duration:'1.5 hrs',url:'https://www.youtube.com/watch?v=733m6qBH-jI'},
      {title:'Attention Is All You Need — Paper Explained',channel:'Yannic Kilcher',duration:'1.5 hrs',url:'https://www.youtube.com/watch?v=iDulhoQ2pro'},
    ]},
    {month:'Month 11',emoji:'📂',focus:'AI Portfolio',color:'#ffcc00',tasks:[
      '✅ 5+ AI projects live on HuggingFace Spaces or GitHub',
      '✅ Kaggle profile — public notebooks with good upvotes',
      '✅ AI blog — 3+ technical posts explaining projects',
      '✅ LinkedIn optimization with AI/ML skill keywords',
      '🎯 Milestone: 3 deployed AI demos, Kaggle silver medal',
      '🔖 Resource: Medium AI writing community for exposure'
    ],youtube:[
      {title:'AI/ML Portfolio Projects — Impress Recruiters',channel:'Krish Naik',duration:'2 hrs',url:'https://www.youtube.com/watch?v=PiMbIPmXNFw'},
      {title:'Data Science Resume Tips 2024',channel:'Ken Jee',duration:'1 hr',url:'https://www.youtube.com/watch?v=xrhPjE7wHas'},
    ]},
    {month:'Month 12',emoji:'🎤',focus:'ML Interview Prep',color:'#ff6600',tasks:[
      '✅ ML theory questions — bias-variance, regularization, gradient descent',
      '✅ Coding round — implement ML algorithms from scratch (LogReg, KNN)',
      '✅ System design — design recommendation system, fraud detection, search',
      '✅ Case study — given dataset, explain full modeling approach',
      '🎯 Mock ML interviews — Pramp, interviewing.io',
      '🔖 Resource: Deep ML (deep-ml.com) — ML coding practice'
    ],youtube:[
      {title:'Machine Learning Interview Questions — Top 50',channel:'Krish Naik',duration:'3 hrs',url:'https://www.youtube.com/watch?v=MUKvGi6u_lA'},
      {title:'ML System Design Interview — Full Guide',channel:'Exponent',duration:'2 hrs',url:'https://www.youtube.com/watch?v=coIQwnrR7W0'},
    ]},
    {month:'Month 13',emoji:'📬',focus:'Job Applications',color:'#ff8800',tasks:[
      '✅ Apply to AI/ML roles — aijobs.net, LinkedIn, company career pages',
      '✅ Cold outreach — contact ML engineers at target companies on LinkedIn',
      '✅ Referral strategy — contribute to OSS to meet engineers',
      '✅ Apply for AI research internships at labs (Google Brain, Meta AI)',
      '🎯 Target: 2+ AI interviews per week',
      '🔖 Resource: Blind community + Reddit r/MachineLearning job threads'
    ],youtube:[
      {title:'How to Get an AI/ML Job in 2024',channel:'Ken Jee',duration:'1.5 hrs',url:'https://www.youtube.com/watch?v=RXeOiIDNNek'},
      {title:'AI Career Paths — Which Role Should You Target',channel:'Krish Naik',duration:'1 hr',url:'https://www.youtube.com/watch?v=RXHCN7XxQ1s'},
    ]},
    {month:'Month 14',emoji:'🏆',focus:'First AI/ML Offer',color:'#ffcc00',tasks:[
      '✅ Negotiate salary — AI engineers earn premium, know your worth',
      '✅ Evaluate roles — ML Engineer vs Data Scientist vs Research Engineer',
      '✅ Review offer — equity, cloud credits, compute budget, research time',
      '✅ Onboarding prep — study company tech stack and recent papers',
      '🎯 MILESTONE: Sign your first AI/ML job offer! 🎉',
      '🔖 Next: Go deeper into your specialization, pursue publications'
    ],youtube:[
      {title:'AI Job Offer Negotiation — Tips from an Ex-Google Engineer',channel:'clementmihailescu',duration:'1 hr',url:'https://www.youtube.com/watch?v=u9BoG1n1948'},
      {title:'First 90 Days as an ML Engineer',channel:'Abhishek Thakur',duration:'45 min',url:'https://www.youtube.com/watch?v=fMibrOhSnr8'},
    ]},
  ],
};

// DSA Solutions with video + written links + Java + Python
const DSA_SOLUTIONS_ENHANCED={
  'Two Sum':{
    java:`// Java Solution — O(n) time, O(n) space
class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement))
                return new int[]{map.get(complement), i};
            map.put(nums[i], i);
        }
        return new int[]{};
    }
}`,
    python:`# Python Solution — O(n) time, O(n) space
class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        seen = {}
        for i, num in enumerate(nums):
            complement = target - num
            if complement in seen:
                return [seen[complement], i]
            seen[num] = i
        return []`,
    videos:[
      {label:'NeetCode — Two Sum',url:'https://www.youtube.com/watch?v=KLlXCFG5TnA'},
      {label:'Striver — Two Sum',url:'https://www.youtube.com/watch?v=UXDSeD9mN-k'},
    ],
    written:[
      {label:'LeetCode Solution',url:'https://leetcode.com/problems/two-sum/solutions/'},
      {label:'GeeksforGeeks',url:'https://www.geeksforgeeks.org/two-sum/'},
    ]
  },
  'Best Time to Buy and Sell Stock':{
    java:`// Java Solution — O(n) time, O(1) space
class Solution {
    public int maxProfit(int[] prices) {
        int minPrice = Integer.MAX_VALUE, maxProfit = 0;
        for (int price : prices) {
            if (price < minPrice) minPrice = price;
            else maxProfit = Math.max(maxProfit, price - minPrice);
        }
        return maxProfit;
    }
}`,
    python:`# Python Solution — O(n) time, O(1) space
class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        min_price, max_profit = float('inf'), 0
        for price in prices:
            if price < min_price:
                min_price = price
            else:
                max_profit = max(max_profit, price - min_price)
        return max_profit`,
    videos:[
      {label:'NeetCode — Best Time to Buy/Sell Stock',url:'https://www.youtube.com/watch?v=1pkOgXD63yU'},
      {label:'Striver — Stock Buy Sell',url:'https://www.youtube.com/watch?v=FBVUdOBXJGc'},
    ],
    written:[
      {label:'LeetCode Discussion',url:'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/'},
      {label:'GeeksforGeeks',url:'https://www.geeksforgeeks.org/best-time-to-buy-and-sell-stock/'},
    ]
  },
  'Maximum Subarray (Kadane\'s)':{
    java:`// Java — Kadane's Algorithm O(n) time, O(1) space
class Solution {
    public int maxSubArray(int[] nums) {
        int maxSum = nums[0], curSum = nums[0];
        for (int i = 1; i < nums.length; i++) {
            curSum = Math.max(nums[i], curSum + nums[i]);
            maxSum = Math.max(maxSum, curSum);
        }
        return maxSum;
    }
}`,
    python:`# Python — Kadane's Algorithm O(n) time, O(1) space
class Solution:
    def maxSubArray(self, nums: list[int]) -> int:
        max_sum = cur_sum = nums[0]
        for num in nums[1:]:
            cur_sum = max(num, cur_sum + num)
            max_sum = max(max_sum, cur_sum)
        return max_sum`,
    videos:[
      {label:'NeetCode — Maximum Subarray',url:'https://www.youtube.com/watch?v=5WZl3MMT0Eg'},
      {label:'Striver — Kadane\'s Algorithm',url:'https://www.youtube.com/watch?v=AHZpyENo7k4'},
    ],
    written:[
      {label:'LeetCode Discussion',url:'https://leetcode.com/problems/maximum-subarray/solutions/'},
      {label:'GeeksforGeeks — Kadane\'s',url:'https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/'},
    ]
  },
  'Valid Anagram':{
    java:`// Java — HashMap O(n) time, O(1) space (fixed alphabet)
class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) return false;
        int[] count = new int[26];
        for (char c : s.toCharArray()) count[c - 'a']++;
        for (char c : t.toCharArray()) {
            if (--count[c - 'a'] < 0) return false;
        }
        return true;
    }
}`,
    python:`# Python — Counter O(n) time, O(1) space
from collections import Counter
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        return Counter(s) == Counter(t)
        # Or: return sorted(s) == sorted(t) [O(n log n)]`,
    videos:[
      {label:'NeetCode — Valid Anagram',url:'https://www.youtube.com/watch?v=9UtInBqnCgA'},
    ],
    written:[
      {label:'LeetCode Discussion',url:'https://leetcode.com/problems/valid-anagram/solutions/'},
      {label:'GeeksforGeeks',url:'https://www.geeksforgeeks.org/check-whether-two-strings-are-anagram-of-each-other/'},
    ]
  },
  'Valid Palindrome':{
    java:`// Java — Two Pointers O(n) time, O(1) space
class Solution {
    public boolean isPalindrome(String s) {
        int l = 0, r = s.length() - 1;
        while (l < r) {
            while (l < r && !Character.isLetterOrDigit(s.charAt(l))) l++;
            while (l < r && !Character.isLetterOrDigit(s.charAt(r))) r--;
            if (Character.toLowerCase(s.charAt(l)) != Character.toLowerCase(s.charAt(r)))
                return false;
            l++; r--;
        }
        return true;
    }
}`,
    python:`# Python — Two Pointers O(n) time, O(1) space
class Solution:
    def isPalindrome(self, s: str) -> bool:
        l, r = 0, len(s) - 1
        while l < r:
            while l < r and not s[l].isalnum(): l += 1
            while l < r and not s[r].isalnum(): r -= 1
            if s[l].lower() != s[r].lower(): return False
            l += 1; r -= 1
        return True`,
    videos:[
      {label:'NeetCode — Valid Palindrome',url:'https://www.youtube.com/watch?v=jJXJ16kPFWg'},
    ],
    written:[
      {label:'LeetCode Discussion',url:'https://leetcode.com/problems/valid-palindrome/solutions/'},
    ]
  },
  'Longest Substring Without Repeating Characters':{
    java:`// Java — Sliding Window + HashMap O(n)
class Solution {
    public int lengthOfLongestSubstring(String s) {
        Map<Character, Integer> map = new HashMap<>();
        int maxLen = 0, l = 0;
        for (int r = 0; r < s.length(); r++) {
            char c = s.charAt(r);
            if (map.containsKey(c) && map.get(c) >= l)
                l = map.get(c) + 1;
            map.put(c, r);
            maxLen = Math.max(maxLen, r - l + 1);
        }
        return maxLen;
    }
}`,
    python:`# Python — Sliding Window + Set O(n)
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        char_set, l, max_len = set(), 0, 0
        for r in range(len(s)):
            while s[r] in char_set:
                char_set.remove(s[l])
                l += 1
            char_set.add(s[r])
            max_len = max(max_len, r - l + 1)
        return max_len`,
    videos:[
      {label:'NeetCode — Longest Substring',url:'https://www.youtube.com/watch?v=wiGpZaVARCg'},
      {label:'Striver — Sliding Window',url:'https://www.youtube.com/watch?v=oFBDd3NChbs'},
    ],
    written:[
      {label:'LeetCode Discussion',url:'https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/'},
      {label:'GeeksforGeeks',url:'https://www.geeksforgeeks.org/length-of-the-longest-substring-without-repeating-characters/'},
    ]
  },
  'Valid Parentheses':{
    java:`// Java — Stack O(n) time, O(n) space
class Solution {
    public boolean isValid(String s) {
        Deque<Character> stack = new ArrayDeque<>();
        for (char c : s.toCharArray()) {
            if (c=='('||c=='{'||c=='[') { stack.push(c); continue; }
            if (stack.isEmpty()) return false;
            char top = stack.pop();
            if (c==')' && top!='(') return false;
            if (c=='}' && top!='{') return false;
            if (c==']' && top!='[') return false;
        }
        return stack.isEmpty();
    }
}`,
    python:`# Python — Stack O(n) time, O(n) space
class Solution:
    def isValid(self, s: str) -> bool:
        stack, mapping = [], {')':'(', '}':'{', ']':'['}
        for c in s:
            if c in mapping:
                top = stack.pop() if stack else '#'
                if mapping[c] != top: return False
            else:
                stack.append(c)
        return not stack`,
    videos:[
      {label:'NeetCode — Valid Parentheses',url:'https://www.youtube.com/watch?v=WTzjTskDFMg'},
    ],
    written:[
      {label:'LeetCode Discussion',url:'https://leetcode.com/problems/valid-parentheses/solutions/'},
      {label:'GeeksforGeeks',url:'https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/'},
    ]
  },
  'Maximum Depth of Binary Tree':{
    java:`// Java — DFS Recursive O(n)
class Solution {
    public int maxDepth(TreeNode root) {
        if (root == null) return 0;
        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
    }
}
// BFS Iterative O(n)
// Use a queue, count levels`,
    python:`# Python — DFS O(n) time, O(h) space
class Solution:
    def maxDepth(self, root) -> int:
        if not root: return 0
        return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))
# BFS approach
from collections import deque
def maxDepth_bfs(root) -> int:
    if not root: return 0
    q, depth = deque([root]), 0
    while q:
        depth += 1
        for _ in range(len(q)):
            node = q.popleft()
            if node.left: q.append(node.left)
            if node.right: q.append(node.right)
    return depth`,
    videos:[
      {label:'NeetCode — Max Depth Binary Tree',url:'https://www.youtube.com/watch?v=hTM3phVI6YQ'},
    ],
    written:[
      {label:'LeetCode Discussion',url:'https://leetcode.com/problems/maximum-depth-of-binary-tree/solutions/'},
    ]
  },
  'Number of Islands':{
    java:`// Java — DFS Flood Fill O(m*n)
class Solution {
    public int numIslands(char[][] grid) {
        int count = 0;
        for (int i=0; i<grid.length; i++)
            for (int j=0; j<grid[0].length; j++)
                if (grid[i][j]=='1') { dfs(grid,i,j); count++; }
        return count;
    }
    void dfs(char[][] g, int i, int j) {
        if (i<0||i>=g.length||j<0||j>=g[0].length||g[i][j]!='1') return;
        g[i][j]='0';
        dfs(g,i+1,j); dfs(g,i-1,j); dfs(g,i,j+1); dfs(g,i,j-1);
    }
}`,
    python:`# Python — DFS O(m*n) time and space
class Solution:
    def numIslands(self, grid: list[list[str]]) -> int:
        def dfs(i, j):
            if i<0 or i>=len(grid) or j<0 or j>=len(grid[0]) or grid[i][j]!='1': return
            grid[i][j] = '0'
            dfs(i+1,j); dfs(i-1,j); dfs(i,j+1); dfs(i,j-1)
        count = 0
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j]=='1':
                    dfs(i,j); count+=1
        return count`,
    videos:[
      {label:'NeetCode — Number of Islands',url:'https://www.youtube.com/watch?v=pV2kpPD66nE'},
      {label:'Striver — Number of Islands',url:'https://www.youtube.com/watch?v=muncqlKJrH0'},
    ],
    written:[
      {label:'LeetCode Discussion',url:'https://leetcode.com/problems/number-of-islands/solutions/'},
      {label:'GeeksforGeeks',url:'https://www.geeksforgeeks.org/find-number-of-islands/'},
    ]
  },
  'Climbing Stairs':{
    java:`// Java — DP O(n) → optimized O(1) space
class Solution {
    public int climbStairs(int n) {
        if (n <= 2) return n;
        int a = 1, b = 2;
        for (int i = 3; i <= n; i++) {
            int c = a + b; a = b; b = c;
        }
        return b;
    }
}`,
    python:`# Python — DP O(n) → O(1) space
class Solution:
    def climbStairs(self, n: int) -> int:
        if n <= 2: return n
        a, b = 1, 2
        for _ in range(3, n+1):
            a, b = b, a + b
        return b`,
    videos:[
      {label:'NeetCode — Climbing Stairs',url:'https://www.youtube.com/watch?v=Y0lT9Fck7qI'},
    ],
    written:[
      {label:'LeetCode Discussion',url:'https://leetcode.com/problems/climbing-stairs/solutions/'},
      {label:'GeeksforGeeks',url:'https://www.geeksforgeeks.org/count-ways-reach-nth-stair/'},
    ]
  },
  'Coin Change':{
    java:`// Java — DP Unbounded Knapsack O(amount * coins)
class Solution {
    public int coinChange(int[] coins, int amount) {
        int[] dp = new int[amount + 1];
        Arrays.fill(dp, amount + 1);
        dp[0] = 0;
        for (int i = 1; i <= amount; i++)
            for (int c : coins)
                if (c <= i) dp[i] = Math.min(dp[i], dp[i-c]+1);
        return dp[amount] > amount ? -1 : dp[amount];
    }
}`,
    python:`# Python — DP O(amount * coins) time, O(amount) space
class Solution:
    def coinChange(self, coins: list[int], amount: int) -> int:
        dp = [amount + 1] * (amount + 1)
        dp[0] = 0
        for i in range(1, amount + 1):
            for c in coins:
                if c <= i:
                    dp[i] = min(dp[i], dp[i-c] + 1)
        return dp[amount] if dp[amount] <= amount else -1`,
    videos:[
      {label:'NeetCode — Coin Change',url:'https://www.youtube.com/watch?v=H9bfqozjoqs'},
      {label:'Striver — Coin Change DP',url:'https://www.youtube.com/watch?v=W42bKALMYnk'},
    ],
    written:[
      {label:'LeetCode Discussion',url:'https://leetcode.com/problems/coin-change/solutions/'},
      {label:'GeeksforGeeks',url:'https://www.geeksforgeeks.org/find-minimum-number-of-coins-that-make-a-change/'},
    ]
  },
  'Binary Search':{
    java:`// Java — Classic Binary Search O(log n)
class Solution {
    public int search(int[] nums, int target) {
        int l = 0, r = nums.length - 1;
        while (l <= r) {
            int mid = l + (r - l) / 2;
            if (nums[mid] == target) return mid;
            else if (nums[mid] < target) l = mid + 1;
            else r = mid - 1;
        }
        return -1;
    }
}`,
    python:`# Python — Binary Search O(log n)
class Solution:
    def search(self, nums: list[int], target: int) -> int:
        l, r = 0, len(nums) - 1
        while l <= r:
            mid = (l + r) // 2
            if nums[mid] == target: return mid
            elif nums[mid] < target: l = mid + 1
            else: r = mid - 1
        return -1`,
    videos:[
      {label:'NeetCode — Binary Search',url:'https://www.youtube.com/watch?v=s4DPM8ct1pI'},
    ],
    written:[
      {label:'LeetCode Discussion',url:'https://leetcode.com/problems/binary-search/solutions/'},
    ]
  },
  'Merge Intervals':{
    java:`// Java — Sort + Merge O(n log n)
class Solution {
    public int[][] merge(int[][] intervals) {
        Arrays.sort(intervals, (a,b) -> a[0]-b[0]);
        List<int[]> res = new ArrayList<>();
        int[] cur = intervals[0];
        for (int i=1; i<intervals.length; i++) {
            if (intervals[i][0] <= cur[1]) cur[1] = Math.max(cur[1], intervals[i][1]);
            else { res.add(cur); cur = intervals[i]; }
        }
        res.add(cur);
        return res.toArray(new int[0][]);
    }
}`,
    python:`# Python — Sort + Merge O(n log n)
class Solution:
    def merge(self, intervals: list[list[int]]) -> list[list[int]]:
        intervals.sort(key=lambda x: x[0])
        res = [intervals[0]]
        for start, end in intervals[1:]:
            if start <= res[-1][1]:
                res[-1][1] = max(res[-1][1], end)
            else:
                res.append([start, end])
        return res`,
    videos:[
      {label:'NeetCode — Merge Intervals',url:'https://www.youtube.com/watch?v=44H3cEC2fFM'},
    ],
    written:[
      {label:'LeetCode Discussion',url:'https://leetcode.com/problems/merge-intervals/solutions/'},
      {label:'GeeksforGeeks',url:'https://www.geeksforgeeks.org/merging-intervals/'},
    ]
  },
  'Reverse Linked List':{
    java:`// Java — Iterative O(n) O(1) space
class Solution {
    public ListNode reverseList(ListNode head) {
        ListNode prev = null, cur = head;
        while (cur != null) {
            ListNode next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
        return prev;
    }
}`,
    python:`# Python — Iterative O(n) O(1) space
class Solution:
    def reverseList(self, head):
        prev, cur = None, head
        while cur:
            nxt = cur.next
            cur.next = prev
            prev, cur = cur, nxt
        return prev`,
    videos:[
      {label:'NeetCode — Reverse Linked List',url:'https://www.youtube.com/watch?v=G0_I-ZF0S38'},
    ],
    written:[
      {label:'LeetCode Discussion',url:'https://leetcode.com/problems/reverse-linked-list/solutions/'},
    ]
  },
  'House Robber':{
    java:`// Java — DP O(n) → O(1) space
class Solution {
    public int rob(int[] nums) {
        int prev2 = 0, prev1 = 0;
        for (int n : nums) {
            int cur = Math.max(prev1, prev2 + n);
            prev2 = prev1; prev1 = cur;
        }
        return prev1;
    }
}`,
    python:`# Python — DP O(1) space
class Solution:
    def rob(self, nums: list[int]) -> int:
        prev2, prev1 = 0, 0
        for n in nums:
            prev2, prev1 = prev1, max(prev1, prev2 + n)
        return prev1`,
    videos:[
      {label:'NeetCode — House Robber',url:'https://www.youtube.com/watch?v=73r3KWiEvyk'},
    ],
    written:[
      {label:'LeetCode Discussion',url:'https://leetcode.com/problems/house-robber/solutions/'},
    ]
  },
  // Research yourself — these are harder topics students should explore
  'Trapping Rain Water':{
    java:`// ⚠️ RESEARCH YOURSELF — Two Pointer Approach
// Hint: maxLeft[i] = max height from left up to i
//       maxRight[i] = max height from right up to i
// Water at i = min(maxLeft[i], maxRight[i]) - height[i]
// Research: two-pointer O(n) O(1) solution — can you figure it out?
class Solution {
    public int trap(int[] height) {
        // TODO: implement two-pointer approach
        // Left pointer, right pointer
        // Track maxLeft, maxRight
        // When maxLeft < maxRight: water += maxLeft - height[l++]
        // else: water += maxRight - height[r--]
        return 0; // replace with your solution
    }
}`,
    python:`# ⚠️ RESEARCH YOURSELF — Two Pointer Approach
# Hints:
# 1. Can you precompute max from left and right?
# 2. Two-pointer O(1) space: compare maxLeft vs maxRight
# 3. Try to solve BEFORE watching the solution below!
class Solution:
    def trap(self, height: list[int]) -> int:
        # TODO: implement two-pointer solution
        # Hint: l=0, r=len-1, maxL=0, maxR=0
        # if maxL <= maxR: water += maxL - height[l]; l++
        # else: water += maxR - height[r]; r--
        pass`,
    videos:[
      {label:'NeetCode — Trapping Rain Water (WATCH AFTER TRYING)',url:'https://www.youtube.com/watch?v=ZI2z5pq0TqA'},
      {label:'Striver — Trapping Rain Water',url:'https://www.youtube.com/watch?v=m18Hntz4go8'},
    ],
    written:[
      {label:'LeetCode Discussion',url:'https://leetcode.com/problems/trapping-rain-water/solutions/'},
      {label:'GeeksforGeeks',url:'https://www.geeksforgeeks.org/trapping-rain-water/'},
    ]
  },
  'Binary Tree Maximum Path Sum':{
    java:`// ⚠️ RESEARCH YOURSELF — DFS with Global Max
// Hint: At each node you make two decisions:
// 1. Contribute to path passing THROUGH this node (left + node + right)
// 2. Be a standalone answer
// Research: How does the recursive return value differ from the global max?
class Solution {
    int maxSum = Integer.MIN_VALUE;
    public int maxPathSum(TreeNode root) {
        dfs(root);
        return maxSum;
    }
    int dfs(TreeNode node) {
        // TODO: implement — return max single-branch contribution
        // Update maxSum inside with the full path through node
        return 0;
    }
}`,
    python:`# ⚠️ RESEARCH YOURSELF — DFS Global Max
# Key insight: what can you "return" vs what you "track globally"?
# Try to figure out before watching the solution!
class Solution:
    def maxPathSum(self, root) -> int:
        self.max_sum = float('-inf')
        def dfs(node):
            if not node: return 0
            # TODO: get left and right contributions (ignore negatives)
            # TODO: update self.max_sum with node.val + left + right
            # TODO: return max single side + node.val
            pass
        dfs(root)
        return self.max_sum`,
    videos:[
      {label:'NeetCode — Binary Tree Max Path Sum (SOLVE FIRST!)',url:'https://www.youtube.com/watch?v=Hr5cWUld4vU'},
    ],
    written:[
      {label:'LeetCode Discussion',url:'https://leetcode.com/problems/binary-tree-maximum-path-sum/solutions/'},
    ]
  },
  'Median of Two Sorted Arrays':{
    java:`// ⚠️ RESEARCH YOURSELF — Binary Search on Partition O(log(min(m,n)))
// This is one of the hardest LeetCode problems. Research the partition approach.
// Key idea: partition smaller array so left half has (m+n)/2 elements total
// Check: maxLeft1 <= minRight2 AND maxLeft2 <= minRight1
class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        // Hint: binary search on nums1 partition point
        // Ensure nums1 is the smaller array
        // Research the partition condition and edge cases!
        return 0;
    }
}`,
    python:`# ⚠️ RESEARCH YOURSELF — Binary Search O(log(min(m,n)))
# Hint: Binary search on partition of smaller array
# After trying, watch NeetCode's explanation - it's the clearest
class Solution:
    def findMedianSortedArrays(self, nums1: list[int], nums2: list[int]) -> float:
        # Make sure nums1 is smaller
        if len(nums1) > len(nums2):
            nums1, nums2 = nums2, nums1
        # Binary search on nums1 for correct partition
        # Research the maxLeft/minRight condition!
        pass`,
    videos:[
      {label:'NeetCode — Median Two Sorted Arrays (STUDY THIS CAREFULLY)',url:'https://www.youtube.com/watch?v=q6IEA26hvXc'},
    ],
    written:[
      {label:'LeetCode Discussion',url:'https://leetcode.com/problems/median-of-two-sorted-arrays/solutions/'},
    ]
  },
};

let jrDomain='Full Stack';
let jrOpenMonth=0;

function renderJobRoadmap(){
  const domains=['Full Stack','Cybersecurity (Red Team)','Cybersecurity (Blue Team)','AI'];
  const colors={'Full Stack':'#0099ff','Cybersecurity (Red Team)':'#ff2d78','Cybersecurity (Blue Team)':'#00ffcc','AI':'#ffcc00'};
  const col=colors[jrDomain]||'#00ffcc';

  document.getElementById('jr-domain-tabs').innerHTML=domains.map(d=>`
    <button class="tab ${d===jrDomain?'active':''}" onclick="setJrDomain('${d}')" style="${d===jrDomain?'border-color:'+col+';color:'+col+';background:'+col+'18':''}">${d}</button>
  `).join('');

  const data=JOB_ROADMAP[jrDomain]||[];
  const m=data[jrOpenMonth]||data[0];

  let html=`
    <!-- Progress Banner -->
    <div style="padding:14px 20px;background:${col}12;border:1px solid ${col}44;border-radius:10px;margin-bottom:20px;display:flex;align-items:center;gap:14px;flex-wrap:wrap;">
      <div style="font-size:2rem;">${m.emoji||'🚀'}</div>
      <div>
        <div style="font-family:'Orbitron',monospace;font-size:1rem;font-weight:900;color:#fff;">${jrDomain} — Job Ready in 14 Months</div>
        <div style="font-family:'JetBrains Mono',monospace;font-size:.65rem;color:${col};margin-top:3px;">Basics → Portfolio → Certifications → Interviews → Job Offer</div>
      </div>
      <div style="margin-left:auto;font-family:'Orbitron',monospace;font-size:2rem;font-weight:900;color:${col};text-shadow:0 0 20px ${col};">${jrOpenMonth+1}<span style="font-size:.7rem;color:var(--muted)">/14</span></div>
    </div>

    <!-- Month Grid Selector -->
    <div style="margin-bottom:24px;">
      <div style="font-family:'JetBrains Mono',monospace;font-size:.6rem;color:var(--muted);letter-spacing:.15em;margin-bottom:12px;">📅 ALL 14 MONTHS — CLICK ANY TO JUMP</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(88px,1fr));gap:7px;">
        ${data.map((mo,i)=>`
          <div onclick="setJrMonth(${i})" class="jr-month-pill ${i===jrOpenMonth?'active':''}" style="--jr-col:${col};">
            <div style="font-size:1.4rem;margin-bottom:3px;">${mo.emoji}</div>
            <div style="font-size:.5rem;font-weight:700;color:${i===jrOpenMonth?col:'var(--muted)'};">${mo.month}</div>
            <div style="font-size:.42rem;color:var(--muted);margin-top:2px;line-height:1.3;">${mo.focus.split(' ').slice(0,3).join(' ')}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Current Month Detail -->
    <div style="border:1px solid ${col}44;border-radius:14px;overflow:hidden;margin-bottom:20px;">
      <div style="padding:18px 22px;background:${col}15;border-bottom:1px solid ${col}33;display:flex;align-items:center;gap:14px;">
        <div style="font-size:2rem;">${m.emoji}</div>
        <div>
          <div style="font-family:'Orbitron',monospace;font-size:1.1rem;font-weight:900;color:#fff;">${m.month} — ${m.focus}</div>
          <div style="font-family:'JetBrains Mono',monospace;font-size:.65rem;color:${col};margin-top:4px;">📅 ${jrDomain} Path · Month ${jrOpenMonth+1} of 14</div>
        </div>
      </div>
      <div style="padding:18px 22px;background:rgba(0,0,0,.2);">
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));gap:8px;margin-bottom:16px;">
          ${m.tasks.map((task,ti)=>`
            <div style="padding:10px 14px;border:1px solid rgba(255,255,255,.06);border-left:3px solid ${col};border-radius:0 8px 8px 0;background:rgba(255,255,255,.02);font-size:.84rem;color:var(--text);line-height:1.55;display:flex;gap:8px;align-items:flex-start;">
              <span style="color:${col};font-family:'JetBrains Mono',monospace;font-size:.6rem;min-width:18px;margin-top:3px;">${String(ti+1).padStart(2,'0')}</span>
              <span>${task}</span>
            </div>
          `).join('')}
        </div>

        <!-- YouTube Resources -->
        ${m.youtube&&m.youtube.length?`
        <div style="padding:14px;background:rgba(255,0,0,.06);border:1px solid rgba(255,68,68,.2);border-radius:10px;margin-bottom:12px;">
          <div style="font-family:'Orbitron',monospace;font-size:.72rem;color:#ff4444;margin-bottom:10px;letter-spacing:.1em;">▶ YOUTUBE RESOURCES — STUDY THESE THIS MONTH</div>
          <div style="display:flex;flex-direction:column;gap:8px;">
            ${m.youtube.map(yt=>`
              <a href="${yt.url}" target="_blank" rel="noopener" style="display:flex;align-items:center;gap:12px;padding:10px 14px;border:1px solid rgba(255,68,68,.25);border-radius:8px;text-decoration:none;background:rgba(255,68,68,.05);transition:all .2s;" onmouseover="this.style.background='rgba(255,68,68,.12)'" onmouseout="this.style.background='rgba(255,68,68,.05)'">
                <span style="font-size:1.2rem;flex-shrink:0;">▶️</span>
                <div style="flex:1">
                  <div style="font-family:'Rajdhani',sans-serif;font-weight:700;color:#fff;font-size:.9rem;">${yt.title}</div>
                  <div style="font-family:'JetBrains Mono',monospace;font-size:.6rem;color:var(--muted);">${yt.channel} · ${yt.duration}</div>
                </div>
                <span style="font-family:'JetBrains Mono',monospace;font-size:.58rem;color:#ff4444;flex-shrink:0;">WATCH FREE →</span>
              </a>`).join('')}
          </div>
        </div>`:''}
      </div>
    </div>

    <!-- DSA Section with Solutions -->
    ${jrDomain==='Full Stack'&&jrOpenMonth>=9&&jrOpenMonth<=9?renderJrDSASection():''}

    <!-- Navigation -->
    <div style="display:flex;gap:12px;justify-content:space-between;align-items:center;flex-wrap:wrap;padding:18px 22px;border:1px solid ${col}33;border-radius:14px;background:${col}08;margin-top:20px;">
      ${jrOpenMonth>0
        ? `<button onclick="setJrMonth(${jrOpenMonth-1})" style="padding:12px 26px;border:2px solid var(--neon5);background:rgba(0,204,255,.08);color:var(--neon5);border-radius:10px;cursor:pointer;font-family:'JetBrains Mono',monospace;font-size:.8rem;font-weight:700;transition:all .2s;" onmouseover="this.style.background='rgba(0,204,255,.2)'" onmouseout="this.style.background='rgba(0,204,255,.08)'">← ${data[jrOpenMonth-1].month}</button>`
        : `<button disabled style="padding:12px 26px;border:2px solid rgba(255,255,255,.1);background:transparent;color:rgba(255,255,255,.2);border-radius:10px;cursor:not-allowed;font-family:'JetBrains Mono',monospace;font-size:.8rem;font-weight:700;">← Start</button>`}
      <div style="display:flex;flex-direction:column;align-items:center;gap:5px;">
        <div style="font-family:'Orbitron',monospace;font-size:1.2rem;color:${col};font-weight:900;text-shadow:0 0 16px ${col};">MONTH ${jrOpenMonth+1} / ${data.length}</div>
        <div style="font-family:'JetBrains Mono',monospace;font-size:.6rem;color:var(--muted);">${jrDomain}</div>
        <div style="display:flex;gap:3px;margin-top:4px;">
          ${data.map((_,i)=>`<div onclick="setJrMonth(${i})" style="width:10px;height:6px;border-radius:3px;cursor:pointer;background:${i===jrOpenMonth?col:'rgba(255,255,255,.12)'};transition:all .2s;" title="Month ${i+1}"></div>`).join('')}
        </div>
      </div>
      ${jrOpenMonth<data.length-1
        ? `<button onclick="setJrMonth(${jrOpenMonth+1})" style="padding:12px 26px;border:2px solid ${col};background:${col}18;color:${col};border-radius:10px;cursor:pointer;font-family:'JetBrains Mono',monospace;font-size:.8rem;font-weight:700;transition:all .2s;" onmouseover="this.style.background='rgba(255,255,255,.12)'" onmouseout="this.style.background='${col}18'">${data[jrOpenMonth+1].month} →</button>`
        : `<div style="padding:12px 22px;border:2px solid var(--neon1);border-radius:10px;font-family:'Orbitron',monospace;font-size:.8rem;color:var(--neon1);background:rgba(0,255,204,.1);">🏆 COMPLETE!</div>`}
    </div>
  `;

  document.getElementById('jr-content').innerHTML=html;
}

function renderJrDSASection(){return '';}

function renderJrDSAAllSection(){
  const problems=Object.entries(DSA_SOLUTIONS_ENHANCED);
  return problems.map(([title,sol],qi)=>{
    const uid='jrdsa_'+qi;
    const r=DSA_RESOURCES[title]||{};
    const isResearch=!!(sol.research);
    const jYT=(r.javaYT||[]).map(s=>`<a href="${s.url}" target="_blank" style="display:inline-flex;align-items:center;gap:5px;padding:5px 12px;background:rgba(255,107,53,.12);border:1px solid rgba(255,107,53,.35);border-radius:5px;text-decoration:none;font-family:'JetBrains Mono',monospace;font-size:.6rem;color:#ff6b35;transition:all .2s;" onmouseover="this.style.background='rgba(255,107,53,.25)'" onmouseout="this.style.background='rgba(255,107,53,.12)'">☕▶ ${s.label}</a>`).join('');
    const pYT=(r.pythonYT||[]).map(s=>`<a href="${s.url}" target="_blank" style="display:inline-flex;align-items:center;gap:5px;padding:5px 12px;background:rgba(55,118,171,.14);border:1px solid rgba(100,149,237,.35);border-radius:5px;text-decoration:none;font-family:'JetBrains Mono',monospace;font-size:.6rem;color:#87ceeb;transition:all .2s;" onmouseover="this.style.background='rgba(55,118,171,.28)'" onmouseout="this.style.background='rgba(55,118,171,.14)'">🐍▶ ${s.label}</a>`).join('');
    const solHTML=(r.solutions||[]).map(s=>`<a href="${s.url}" target="_blank" style="display:inline-flex;align-items:center;gap:5px;padding:5px 12px;background:rgba(0,255,204,.1);border:1px solid rgba(0,255,204,.25);border-radius:5px;text-decoration:none;font-family:'JetBrains Mono',monospace;font-size:.6rem;color:var(--neon1);transition:all .2s;" onmouseover="this.style.background='rgba(0,255,204,.2)'" onmouseout="this.style.background='rgba(0,255,204,.1)'">🔗 ${s.label}</a>`).join('');
    return `
      <div style="border:1px solid ${isResearch?'rgba(255,204,0,.3)':'rgba(123,47,255,.25)'};border-radius:10px;margin-bottom:14px;overflow:hidden;">
        <div style="padding:14px 18px;background:${isResearch?'rgba(255,204,0,.08)':'rgba(123,47,255,.08)'};display:flex;align-items:center;gap:10px;cursor:pointer;" onclick="toggleJrDSA('${uid}')">
          <span style="font-family:'JetBrains Mono',monospace;font-size:.65rem;padding:3px 8px;border-radius:3px;background:${isResearch?'rgba(255,204,0,.18)':'rgba(0,255,204,.12)'};color:${isResearch?'var(--neon4)':'var(--neon1)'};border:1px solid ${isResearch?'rgba(255,204,0,.3)':'rgba(0,255,204,.25)'};">${isResearch?'⚠️ RESEARCH':'🟢 LINKS'}</span>
          <span style="font-family:'Orbitron',monospace;font-size:.88rem;color:#fff;font-weight:700;flex:1;">${title}</span>
          <span style="font-family:'JetBrains Mono',monospace;font-size:.6rem;color:var(--muted);" id="${uid}_arrow">▼ Show Links</span>
        </div>
        <div id="${uid}_body" style="display:none;">
          ${isResearch?`<div style="padding:10px 18px;background:rgba(255,204,0,.06);border-bottom:1px solid rgba(255,204,0,.15);font-family:'JetBrains Mono',monospace;font-size:.72rem;color:var(--neon4);">⚠️ RESEARCH YOURSELF — Try to solve before watching solutions!</div>`:''}
          <div style="padding:10px 18px;background:rgba(255,107,53,.05);border-bottom:1px solid rgba(255,255,255,.05);">
            <div style="font-family:'JetBrains Mono',monospace;font-size:.52rem;color:#ff6b35;letter-spacing:.13em;margin-bottom:7px;">☕ JAVA VIDEO SOLUTIONS</div>
            <div style="display:flex;gap:6px;flex-wrap:wrap;">${jYT||'<span style="font-size:.6rem;color:var(--muted);">—</span>'}</div>
          </div>
          <div style="padding:10px 18px;background:rgba(55,118,171,.05);border-bottom:1px solid rgba(255,255,255,.05);">
            <div style="font-family:'JetBrains Mono',monospace;font-size:.52rem;color:#87ceeb;letter-spacing:.13em;margin-bottom:7px;">🐍 PYTHON VIDEO SOLUTIONS</div>
            <div style="display:flex;gap:6px;flex-wrap:wrap;">${pYT||'<span style="font-size:.6rem;color:var(--muted);">—</span>'}</div>
          </div>
          <div style="padding:10px 18px;background:rgba(0,255,204,.03);">
            <div style="font-family:'JetBrains Mono',monospace;font-size:.52rem;color:var(--neon1);letter-spacing:.13em;margin-bottom:7px;">🔗 WRITTEN SOLUTIONS — LeetCode &amp; GeeksForGeeks</div>
            <div style="display:flex;gap:6px;flex-wrap:wrap;">${solHTML||'<span style="font-size:.6rem;color:var(--muted);">—</span>'}</div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function toggleJrDSA(uid){
  const body=document.getElementById(uid+'_body');
  const arrow=document.getElementById(uid+'_arrow');
  if(!body)return;
  const open=body.style.display==='none';
  body.style.display=open?'block':'none';
  if(arrow)arrow.textContent=open?'▲ Hide Solutions':'▼ Show Solutions';
}

function swJrSol(uid,lang){
  const jc=document.getElementById(uid+'_jc');
  const pc=document.getElementById(uid+'_pc');
  const jb=document.getElementById(uid+'_jb');
  const pb=document.getElementById(uid+'_pb');
  if(!jc||!pc)return;
  if(lang==='j'){
    jc.style.display='block'; pc.style.display='none';
    if(jb){jb.style.background='rgba(255,107,53,.2)';jb.style.color='#ff6b35';}
    if(pb){pb.style.background='transparent';pb.style.color='var(--muted)';}
  } else {
    jc.style.display='none'; pc.style.display='block';
    if(pb){pb.style.background='rgba(100,149,237,.2)';pb.style.color='#87ceeb';}
    if(jb){jb.style.background='transparent';jb.style.color='var(--muted)';}
  }
}

function setJrDomain(d){jrDomain=d;jrOpenMonth=0;renderJobRoadmap();}
function setJrMonth(i){jrOpenMonth=i;renderJobRoadmap();const el=document.getElementById('jr-content');if(el){el.scrollIntoView({behavior:'smooth',block:'start'});}}

// ══ DSA ARENA — ALL DIFFICULTIES COMBINED ══
function renderDSAArena(){
  const container=document.getElementById('dsa-arena-content');
  if(!container)return;

  const difficulties=['Easy','Medium','Hard'];
  const diffColors2={Easy:'var(--neon1)',Medium:'var(--neon4)',Hard:'var(--neon3)'};
  const diffIcons={Easy:'🟢',Medium:'🟡',Hard:'🔴'};
  const diffBg2={Easy:'rgba(0,255,204,.06)',Medium:'rgba(255,204,0,.06)',Hard:'rgba(255,45,120,.06)'};
  const diffBorder2={Easy:'rgba(0,255,204,.2)',Medium:'rgba(255,204,0,.2)',Hard:'rgba(255,45,120,.2)'};
  const diffCount={Easy:25,Medium:25,Hard:25};

  let html='';
  difficulties.forEach(diff=>{
    html+=`<div style="margin-bottom:40px;">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px;padding:14px 20px;background:${diffBg2[diff]};border:1px solid ${diffBorder2[diff]};border-radius:12px;">
        <span style="font-size:1.8rem;">${diffIcons[diff]}</span>
        <div style="flex:1">
          <div style="font-family:'Orbitron',monospace;font-size:1rem;font-weight:900;color:${diffColors2[diff]};">${diff.toUpperCase()} LEVEL — ${diffCount[diff]} QUESTIONS</div>
          <div style="font-family:'JetBrains Mono',monospace;font-size:.62rem;color:var(--muted);margin-top:2px;">Click any question to expand resources & solutions</div>
        </div>
        <button onclick="navTo('DSA ${diff}')" style="padding:7px 16px;border:1px solid ${diffColors2[diff]};background:transparent;color:${diffColors2[diff]};border-radius:6px;cursor:pointer;font-family:'JetBrains Mono',monospace;font-size:.62rem;letter-spacing:.05em;transition:all .2s;" onmouseover="this.style.background='rgba(255,255,255,.06)'" onmouseout="this.style.background='transparent'">View Only ${diff} →</button>
      </div>
      <div id="arena-${diff.toLowerCase()}"></div>
    </div>`;
  });
  container.innerHTML=html;

  difficulties.forEach(diff=>{
    const subContainer=document.getElementById(`arena-${diff.toLowerCase()}`);
    if(subContainer) renderDSAFilterInto(diff,subContainer);
  });
}

function renderDSAFilterInto(level, container){
  const lvColor={Easy:'var(--neon1)',Medium:'var(--neon4)',Hard:'var(--neon3)'};
  const lvIcon={Easy:'🟢',Medium:'🟡',Hard:'🔴'};
  const questions=DSA_CURATED[level]||[];
  let html='<div style="display:flex;flex-direction:column;gap:10px;">';

  questions.forEach((q,qi)=>{
    const uid=`arena_${level}_${qi}`;
    const isResearch=!!q.research;
    const r=DSA_RESOURCES[q.title]||{};
    const jYT=(r.javaYT||[]).map(s=>`<a href="${s.url}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:5px;padding:5px 10px;background:rgba(255,107,53,.1);border:1px solid rgba(255,107,53,.3);border-radius:4px;text-decoration:none;font-family:'JetBrains Mono',monospace;font-size:.58rem;color:#ff6b35;margin:3px;transition:all .2s;" onmouseover="this.style.background='rgba(255,107,53,.22)'" onmouseout="this.style.background='rgba(255,107,53,.1)'">☕▶ ${s.label}</a>`).join('');
    const pYT=(r.pythonYT||[]).map(s=>`<a href="${s.url}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:5px;padding:5px 10px;background:rgba(55,118,171,.12);border:1px solid rgba(100,149,237,.3);border-radius:4px;text-decoration:none;font-family:'JetBrains Mono',monospace;font-size:.58rem;color:#87ceeb;margin:3px;transition:all .2s;" onmouseover="this.style.background='rgba(55,118,171,.26)'" onmouseout="this.style.background='rgba(55,118,171,.12)'">🐍▶ ${s.label}</a>`).join('');
    const solHTML=(r.solutions||[]).map(s=>`<a href="${s.url}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:5px;padding:5px 10px;background:rgba(0,255,204,.08);border:1px solid rgba(0,255,204,.25);border-radius:4px;text-decoration:none;font-family:'JetBrains Mono',monospace;font-size:.58rem;color:var(--neon1);margin:3px;transition:all .2s;" onmouseover="this.style.background='rgba(0,255,204,.18)'" onmouseout="this.style.background='rgba(0,255,204,.08)'">🔗 ${s.label}</a>`).join('');

    html+=`
    <div class="dsa-q-item" id="${uid}" style="border-left:3px solid ${lvColor[level]};">
      <div class="dsa-q-row" onclick="toggleDSAFilterItem('${uid}')">
        <span class="dsa-q-num">${String(qi+1).padStart(2,'0')}</span>
        <span style="font-size:.85rem;flex-shrink:0">${lvIcon[level]}</span>
        <span class="dsa-q-title">${q.title}</span>
        <span class="dsa-q-mnc">${q.mnc}</span>
        ${isResearch?`<span style="font-family:'JetBrains Mono',monospace;font-size:.55rem;padding:2px 7px;background:rgba(255,204,0,.15);color:var(--neon4);border:1px solid rgba(255,204,0,.3);border-radius:4px;white-space:nowrap;">🔬 RESEARCH</span>`:''}
        <span class="dsa-q-arrow">▼</span>
      </div>
      <div class="dsa-q-desc">
        <div class="dsa-q-desc-inner">
          <div class="dsa-q-desc-text">${q.desc}</div>
          <div style="margin-top:12px;border:1px solid rgba(255,255,255,.07);border-radius:10px;overflow:hidden;">
            <div style="padding:9px 13px;background:rgba(255,107,53,.05);border-bottom:1px solid rgba(255,255,255,.05);">
              <div style="font-family:'JetBrains Mono',monospace;font-size:.5rem;color:#ff6b35;letter-spacing:.12em;margin-bottom:6px;">☕ JAVA — VIDEO SOLUTIONS</div>
              <div style="display:flex;gap:5px;flex-wrap:wrap;">${jYT||'<span style="font-size:.58rem;color:var(--muted);">Search on YouTube</span>'}</div>
            </div>
            <div style="padding:9px 13px;background:rgba(55,118,171,.05);border-bottom:1px solid rgba(255,255,255,.05);">
              <div style="font-family:'JetBrains Mono',monospace;font-size:.5rem;color:#87ceeb;letter-spacing:.12em;margin-bottom:6px;">🐍 PYTHON — VIDEO SOLUTIONS</div>
              <div style="display:flex;gap:5px;flex-wrap:wrap;">${pYT||'<span style="font-size:.58rem;color:var(--muted);">Search on YouTube</span>'}</div>
            </div>
            <div style="padding:9px 13px;background:rgba(0,255,204,.03);">
              <div style="font-family:'JetBrains Mono',monospace;font-size:.5rem;color:var(--neon1);letter-spacing:.12em;margin-bottom:6px;">🔗 WRITTEN SOLUTIONS</div>
              <div style="display:flex;gap:5px;flex-wrap:wrap;">${solHTML||'<span style="font-size:.58rem;color:var(--muted);">Search on LeetCode/GFG</span>'}</div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  });

  html+='</div>';
  container.innerHTML=html;
}

function initAll(){
  buildNav();
  animateCounters();
  typeNext();
  generatePraveenAvatar();
  // Set up initial history state for back-button navigation
  history.replaceState({sec:'Home'},'','');
}

// ══ PRAVEEN AVATAR GENERATOR (canvas → PNG dataURL) ══
function generatePraveenAvatar(){
  const c=document.createElement('canvas');
  c.width=200;c.height=200;
  const ctx=c.getContext('2d');

  // Outer glow ring
  ctx.save();
  const ringGrad=ctx.createRadialGradient(100,100,70,100,100,100);
  ringGrad.addColorStop(0,'rgba(123,47,255,0)');
  ringGrad.addColorStop(0.75,'rgba(0,255,204,0.15)');
  ringGrad.addColorStop(1,'rgba(123,47,255,0.6)');
  ctx.fillStyle=ringGrad;
  ctx.beginPath();ctx.arc(100,100,98,0,Math.PI*2);ctx.fill();
  ctx.restore();

  // Background circle with gradient
  const bg=ctx.createLinearGradient(20,20,180,180);
  bg.addColorStop(0,'#1a003a');
  bg.addColorStop(0.5,'#0d0025');
  bg.addColorStop(1,'#0a001f');
  ctx.beginPath();ctx.arc(100,100,90,0,Math.PI*2);
  ctx.fillStyle=bg;ctx.fill();

  // Neon border
  ctx.beginPath();ctx.arc(100,100,90,0,Math.PI*2);
  const borderGrad=ctx.createLinearGradient(10,10,190,190);
  borderGrad.addColorStop(0,'#00ffcc');
  borderGrad.addColorStop(0.5,'#7b2fff');
  borderGrad.addColorStop(1,'#00ffcc');
  ctx.strokeStyle=borderGrad;ctx.lineWidth=4;ctx.stroke();

  // Body silhouette (shoulders)
  ctx.save();
  ctx.beginPath();ctx.arc(100,100,90,0,Math.PI*2);ctx.clip();
  // Shoulder blob
  ctx.fillStyle='#1e0044';
  ctx.beginPath();
  ctx.ellipse(100,175,75,50,0,0,Math.PI*2);
  ctx.fill();
  ctx.restore();

  // Head circle
  ctx.save();
  ctx.beginPath();ctx.arc(100,100,90,0,Math.PI*2);ctx.clip();
  const skinGrad=ctx.createRadialGradient(96,88,10,100,95,42);
  skinGrad.addColorStop(0,'#ffd4a8');
  skinGrad.addColorStop(0.6,'#e8b88a');
  skinGrad.addColorStop(1,'#c9945e');
  ctx.fillStyle=skinGrad;
  ctx.beginPath();ctx.arc(100,96,40,0,Math.PI*2);ctx.fill();
  ctx.restore();

  // Hair
  ctx.save();
  ctx.beginPath();ctx.arc(100,100,90,0,Math.PI*2);ctx.clip();
  ctx.fillStyle='#1a0a00';
  ctx.beginPath();
  ctx.ellipse(100,64,38,22,0,Math.PI,Math.PI*2);
  ctx.fill();
  // Side hair
  ctx.beginPath();ctx.ellipse(62,82,14,26,0.4,0,Math.PI*2);ctx.fill();
  ctx.beginPath();ctx.ellipse(138,82,14,26,-0.4,0,Math.PI*2);ctx.fill();
  ctx.restore();

  // Eyes
  ctx.save();
  ctx.beginPath();ctx.arc(100,100,90,0,Math.PI*2);ctx.clip();
  // Left eye
  ctx.fillStyle='#1a0a00';
  ctx.beginPath();ctx.ellipse(86,94,6,5,0,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='#fff';
  ctx.beginPath();ctx.ellipse(87,93,2.5,2.5,0,0,Math.PI*2);ctx.fill();
  // Right eye
  ctx.fillStyle='#1a0a00';
  ctx.beginPath();ctx.ellipse(114,94,6,5,0,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='#fff';
  ctx.beginPath();ctx.ellipse(115,93,2.5,2.5,0,0,Math.PI*2);ctx.fill();
  ctx.restore();

  // Smile
  ctx.save();
  ctx.beginPath();ctx.arc(100,100,90,0,Math.PI*2);ctx.clip();
  ctx.strokeStyle='#8b4513';ctx.lineWidth=2;ctx.lineCap='round';
  ctx.beginPath();ctx.arc(100,106,14,0.15*Math.PI,0.85*Math.PI);ctx.stroke();
  ctx.restore();

  // "P" initial badge bottom-right
  ctx.fillStyle='rgba(0,255,204,0.92)';
  ctx.beginPath();ctx.arc(152,152,22,0,Math.PI*2);ctx.fill();
  ctx.strokeStyle='#0d0025';ctx.lineWidth=2;
  ctx.beginPath();ctx.arc(152,152,22,0,Math.PI*2);ctx.stroke();
  ctx.fillStyle='#0d0025';
  ctx.font='bold 22px Orbitron,monospace';
  ctx.textAlign='center';ctx.textBaseline='middle';
  ctx.fillText('P',152,153);

  // Glow text "PRAVEEN" at bottom
  ctx.save();
  ctx.beginPath();ctx.arc(100,100,90,0,Math.PI*2);ctx.clip();
  ctx.fillStyle='rgba(0,255,204,0.7)';
  ctx.font='bold 11px JetBrains Mono,monospace';
  ctx.textAlign='center';ctx.textBaseline='middle';
  ctx.fillText('PRAVEEN',100,168);
  ctx.restore();

  const dataURL=c.toDataURL('image/png');

  // Apply to floating avatar
  const floatImg=document.getElementById('praveen-float-img');
  if(floatImg){floatImg.src=dataURL;}
  // Apply to about section image if any
  const aboutImg=document.getElementById('praveen-about-img');
  if(aboutImg){aboutImg.src=dataURL;}
}

// ══ INIT ON DOM READY ══
if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded',()=>{
    initAll();
  });
} else {
  initAll();
}
