// Section 3 Part 2: Placement Coding & Hard Dry Run (Questions 122 to 151)

module.exports = [
  {
    id: 122,
    pdfId: "Q121",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Strings",
    subtopic: "Character Case Conversion Loop",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    char str[] = \"cGate2026\";\n    int i;\n    for (i = 0; str[i] != '\\0'; i++) {\n        if (str[i] >= 'a' && str[i] <= 'z') str[i] = str[i] - 32;\n    }\n    printf(\"%s\", str);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    char str[] = "cGate2026";
    int i;
    for (i = 0; str[i] != '\\0'; i++) {
        if (str[i] >= 'a' && str[i] <= 'z') str[i] = str[i] - 32;
    }
    printf("%s", str);
    return 0;
}`,
    answer: {
      directAnswer: "Subtracting 32 converts each lowercase letter into its uppercase ASCII equivalent ('a' -> 'A', 'c' -> 'C'). Digits and uppercase 'G' remain unaffected, printing **CGATE2026**.",
      expectedOutput: "CGATE2026",
      explanation: [
        "ASCII of 'a' is 97, ASCII of 'A' is 65. The difference is 32.",
        "Index 0: `'c'` (99) becomes `'C'` (67).",
        "Index 1: `'G'` is already uppercase, unchanged.",
        "Index 2: `'a'` becomes `'A'`.",
        "Index 3: `'t'` becomes `'T'`.",
        "Index 4: `'e'` becomes `'E'`.",
        "Digits '2', '0', '2', '6' are outside the range `'a'` to `'z'`, so they remain unchanged.",
        "Final string: `CGATE2026`."
      ],
      interviewTip: "In standard C, `toupper()` from `<ctype.h>` performs this exact transformation safely."
    }
  },
  {
    id: 123,
    pdfId: "Q122",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Pointers",
    subtopic: "Function Pointer Dry Run",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint add(int a, int b) { return a + b; }\nint mul(int a, int b) { return a * b; }\nint main() {\n    int (*fp)(int, int);\n    fp = add;\n    int r1 = fp(3, 4);\n    fp = mul;\n    int r2 = fp(3, 4);\n    printf(\"%d %d\", r1, r2);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int add(int a, int b) { return a + b; }
int mul(int a, int b) { return a * b; }
int main() {
    int (*fp)(int, int);
    fp = add;
    int r1 = fp(3, 4);
    fp = mul;
    int r2 = fp(3, 4);
    printf("%d %d", r1, r2);
    return 0;
}`,
    answer: {
      directAnswer: "The function pointer `fp` is first assigned to `add`, returning $3 + 4 = 7$, then reassigned to `mul`, returning $3 \\times 4 = 12$. Output is **7 12**.",
      expectedOutput: "7 12",
      explanation: [
        "`int (*fp)(int, int)` declares a function pointer taking two `int`s and returning `int`.",
        "`fp = add`: Invoking `fp(3, 4)` executes `add(3, 4)`, returning `r1 = 7`.",
        "`fp = mul`: Invoking `fp(3, 4)` executes `mul(3, 4)`, returning `r2 = 12`.",
        "`printf` outputs `7 12`."
      ],
      interviewTip: "Function names decay into pointers to their code address without needing an explicit `&` operator."
    }
  },
  {
    id: 124,
    pdfId: "Q123",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Structures",
    subtopic: "Nested Structure Dry Run",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nstruct Address { int pin; };\nstruct Student { char name[10]; struct Address addr; };\nint main() {\n    struct Student s = {\"Vijay\", {636005}};\n    s.addr.pin += 5;\n    printf(\"%d\", s.addr.pin);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
struct Address { int pin; };
struct Student { char name[10]; struct Address addr; };
int main() {
    struct Student s = {"Vijay", {636005}};
    s.addr.pin += 5;
    printf("%d", s.addr.pin);
    return 0;
}`,
    answer: {
      directAnswer: "Nested structure member `s.addr.pin` is incremented by 5 from 636005 to **636010**.",
      expectedOutput: "636010",
      explanation: [
        "`s` is initialized with name = \"Vijay\" and nested `addr.pin = 636005`.",
        "`s.addr.pin += 5` accesses the inner struct's pin code, updating it to $636005 + 5 = 636010$.",
        "`printf` prints `636010`."
      ],
      interviewTip: "Access nested structure elements using chained dot operators `outer.inner.field`."
    }
  },
  {
    id: 125,
    pdfId: "Q124",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Dynamic Memory Allocation",
    subtopic: "realloc Dry Run",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    int *p = (int *)malloc(2 * sizeof(int));\n    p[0] = 1; p[1] = 2;\n    p = (int *)realloc(p, 4 * sizeof(int));\n    p[2] = 3; p[3] = 4;\n    printf(\"%d\", p[0] + p[1] + p[2] + p[3]);\n    free(p);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
#include <stdlib.h>
int main() {
    int *p = (int *)malloc(2 * sizeof(int));
    p[0] = 1; p[1] = 2;
    p = (int *)realloc(p, 4 * sizeof(int));
    p[2] = 3; p[3] = 4;
    printf("%d", p[0] + p[1] + p[2] + p[3]);
    free(p);
    return 0;
}`,
    answer: {
      directAnswer: "`realloc` preserves existing elements `{1, 2}` while extending the array to 4 slots. After populating `p[2]=3, p[3]=4`, the sum is $1 + 2 + 3 + 4 =$ **10**.",
      expectedOutput: "10",
      explanation: [
        "Initial allocation stores `{1, 2}`.",
        "`realloc` expands the capacity to 4 integers, preserving previous contents.",
        "Indices 2 and 3 are set to 3 and 4.",
        "Sum = $1 + 2 + 3 + 4 = 10$."
      ],
      interviewTip: "`realloc()` guarantees that original data up to the minimum of old and new sizes remains intact."
    }
  },
  {
    id: 126,
    pdfId: "Q125",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Loops",
    subtopic: "Multiple Nested Loop with Break",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    int i, j, count = 0;\n    for (i = 1; i <= 3; i++) {\n        for (j = 1; j <= 3; j++) {\n            if (j == 2) break;\n            count++;\n        }\n    }\n    printf(\"%d\", count);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int i, j, count = 0;
    for (i = 1; i <= 3; i++) {
        for (j = 1; j <= 3; j++) {
            if (j == 2) break;
            count++;
        }
    }
    printf("%d", count);
    return 0;
}`,
    answer: {
      directAnswer: "The `break` statement inside the inner loop triggers when $j = 2$, terminating the inner loop after only 1 iteration ($j = 1$) per outer cycle. Across 3 outer iterations, `count` becomes **3**.",
      expectedOutput: "3",
      dryRunTable: {
        headers: ["Outer (i)", "Inner (j)", "j == 2?", "Action", "count"],
        rows: [
          ["1", "1", "No", "count++", "1"],
          ["1", "2", "Yes", "break inner loop", "1"],
          ["2", "1", "No", "count++", "2"],
          ["2", "2", "Yes", "break inner loop", "2"],
          ["3", "1", "No", "count++", "3"],
          ["3", "2", "Yes", "break inner loop", "3"]
        ]
      },
      interviewTip: "`break` exits ONLY the innermost enclosing loop; it does not break out of outer loops."
    }
  },
  {
    id: 127,
    pdfId: "Q126",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Functions",
    subtopic: "Recursive Function with Loop Inside",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint fun(int n) {\n    int i, s = 0;\n    if (n == 0) return 0;\n    for (i = 1; i <= n; i++) s += i;\n    return s + fun(n - 1);\n}\nint main() {\n    printf(\"%d\", fun(2));\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int fun(int n) {
    int i, s = 0;
    if (n == 0) return 0;
    for (i = 1; i <= n; i++) s += i;
    return s + fun(n - 1);
}
int main() {
    printf("%d", fun(2));
    return 0;
}`,
    answer: {
      directAnswer: "Each recursive frame computes the sum of numbers from 1 to $n$ ($s = n(n+1)/2$) and adds the result of `fun(n-1)`. Calling `fun(2)` returns $3 + 1 + 0 =$ **4**.",
      expectedOutput: "4",
      explanation: [
        "Frame 1 (`n = 2`): loop computes $s = 1 + 2 = 3$. Calls `fun(1)`.",
        "Frame 2 (`n = 1`): loop computes $s = 1$. Calls `fun(0)`.",
        "Frame 3 (`n = 0`): base case returns 0.",
        "Unwinding: `fun(1)` returns $1 + 0 = 1$. `fun(2)` returns $3 + 1 = 4$."
      ],
      interviewTip: "Tracing frame-by-frame: identify what each frame computes locally before looking at the recursive contribution."
    }
  },
  {
    id: 128,
    pdfId: "Q127",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Bitwise Operators",
    subtopic: "Bit Counting Dry Run",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    int n = 13, count = 0;\n    while (n) {\n        count += n & 1;\n        n >>= 1;\n    }\n    printf(\"%d\", count);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int n = 13, count = 0;
    while (n) {
        count += n & 1;
        n >>= 1;
    }
    printf("%d", count);
    return 0;
}`,
    answer: {
      directAnswer: "The loop counts the number of set bits (1s) in the binary representation of $13$ (`1101_2`), resulting in **3**.",
      expectedOutput: "3",
      dryRunTable: {
        headers: ["Iteration", "n (binary)", "n & 1 (LSB)", "count", "n after n >>= 1"],
        rows: [
          ["1", "13 (1101)", "1", "1", "6 (0110)"],
          ["2", "6 (0110)", "0", "1", "3 (0011)"],
          ["3", "3 (0011)", "1", "2", "1 (0001)"],
          ["4", "1 (0001)", "1", "3", "0 (0000)"]
        ]
      },
      interviewTip: "This is Brian Kernighan's algorithm territory: set bits can also be cleared in $O(\\text{set bits})$ using `n &= (n - 1)`."
    }
  },
  {
    id: 129,
    pdfId: "Q128",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Arrays",
    subtopic: "Array Search with Sentinel",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    int arr[] = {4, 7, 2, 9, 5}, key = 9, i, pos = -1;\n    for (i = 0; i < 5; i++) {\n        if (arr[i] == key) {\n            pos = i;\n            break;\n        }\n    }\n    printf(\"%d\", pos);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int arr[] = {4, 7, 2, 9, 5}, key = 9, i, pos = -1;
    for (i = 0; i < 5; i++) {
        if (arr[i] == key) {
            pos = i;
            break;
        }
    }
    printf("%d", pos);
    return 0;
}`,
    answer: {
      directAnswer: "Linear search checks indices 0, 1, 2 until finding `arr[3] == 9`. The `break` statement halts the loop and prints index **3**.",
      expectedOutput: "3",
      explanation: [
        "$i = 0: arr[0] = 4 \\neq 9$",
        "$i = 1: arr[1] = 7 \\neq 9$",
        "$i = 2: arr[2] = 2 \\neq 9$",
        "$i = 3: arr[3] = 9 == 9 \\implies pos = 3$, `break` exits loop.",
        "`printf(\"%d\", pos)` outputs 3."
      ],
      interviewTip: "Using `break` on match optimizes average search time to $N/2$ iterations instead of always running $N$ times."
    }
  },
  {
    id: 130,
    pdfId: "Q129",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Strings",
    subtopic: "Recursive Palindrome Check Dry Run",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\n#include <string.h>\nint isPal(char *s, int l, int r) {\n    if (l >= r) return 1;\n    if (s[l] != s[r]) return 0;\n    return isPal(s, l + 1, r - 1);\n}\nint main() {\n    char str[] = \"MADAM\";\n    printf(\"%d\", isPal(str, 0, strlen(str) - 1));\n    return 0;\n}",
    givenCode: `#include <stdio.h>
#include <string.h>
int isPal(char *s, int l, int r) {
    if (l >= r) return 1;
    if (s[l] != s[r]) return 0;
    return isPal(s, l + 1, r - 1);
}
int main() {
    char str[] = "MADAM";
    printf("%d", isPal(str, 0, strlen(str) - 1));
    return 0;
}`,
    answer: {
      directAnswer: "\"MADAM\" is a palindrome. The recursive check compares outermost letters moving inward: $s[0]==s[4]$ ('M'=='M'), $s[1]==s[3]$ ('A'=='A'), and reaches base case $l \\ge r$ at index 2 ('D'), returning **1**.",
      expectedOutput: "1",
      dryRunTable: {
        headers: ["Call", "l", "r", "s[l] vs s[r]", "Result / Next Step"],
        rows: [
          ["isPal(str, 0, 4)", "0", "4", "'M' == 'M'", "Calls isPal(str, 1, 3)"],
          ["isPal(str, 1, 3)", "1", "3", "'A' == 'A'", "Calls isPal(str, 2, 2)"],
          ["isPal(str, 2, 2)", "2", "2", "l >= r (True)", "Base case returns 1"]
        ]
      },
      interviewTip: "Base case `l >= r` correctly handles both odd-length (meeting at $l = r$) and even-length (crossing at $l > r$) palindromes."
    }
  },
  {
    id: 131,
    pdfId: "Q130",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Pointers",
    subtopic: "Pointer to Structure Array",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nstruct Emp { int id, sal; };\nint main() {\n    struct Emp e[3] = {{1,1000},{2,2000},{3,3000}};\n    struct Emp *p = e;\n    printf(\"%d\", (p + 1)->sal + p->id);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
struct Emp { int id, sal; };
int main() {
    struct Emp e[3] = {{1,1000},{2,2000},{3,3000}};
    struct Emp *p = e;
    printf("%d", (p + 1)->sal + p->id);
    return 0;
}`,
    answer: {
      directAnswer: "`p + 1` points to `e[1]`, so `(p + 1)->sal` is 2000. `p->id` accesses `e[0].id` which is 1. The total sum is $2000 + 1 =$ **2001**.",
      expectedOutput: "2001",
      explanation: [
        "`p` points to `e[0]`.",
        "`p + 1` advances by `sizeof(struct Emp)` bytes to `e[1]`.",
        "`(p + 1)->sal` accesses member `sal` of `e[1]` = 2000.",
        "`p->id` accesses member `id` of `e[0]` = 1.",
        "Sum: $2000 + 1 = 2001$."
      ],
      interviewTip: "Pointer arithmetic on structure pointers automatically scales by `sizeof(struct)`."
    }
  },
  {
    id: 132,
    pdfId: "Q131",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Loops",
    subtopic: "Loop Modifying Counter Inside Body",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    int i;\n    for (i = 0; i < 10; i++) {\n        if (i == 3) i += 2;\n        printf(\"%d \", i);\n    }\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int i;
    for (i = 0; i < 10; i++) {
        if (i == 3) i += 2;
        printf("%d ", i);
    }
    return 0;
}`,
    answer: {
      directAnswer: "When $i = 3$, it is increased by 2 to become 5 inside the loop body (printing 5). The loop step `i++` then increments it to 6, skipping 3 and 4 entirely. Output: **0 1 2 5 6 7 8 9 **.",
      expectedOutput: "0 1 2 5 6 7 8 9 ",
      dryRunTable: {
        headers: ["Loop Start i", "i == 3 Check", "i after body", "Printed", "Next i (after i++)"],
        rows: [
          ["0", "False", "0", "0 ", "1"],
          ["1", "False", "1", "1 ", "2"],
          ["2", "False", "2", "2 ", "3"],
          ["3", "True -> i += 2", "5", "5 ", "6 (via i++)"],
          ["6", "False", "6", "6 ", "7"],
          ["7", "False", "7", "7 ", "8"],
          ["8", "False", "8", "8 ", "9"],
          ["9", "False", "9", "9 ", "10 (loop ends)"]
        ]
      },
      interviewTip: "Modifying the loop index variable inside the loop body is dangerous in production, but a classic placement test trap!"
    }
  },
  {
    id: 133,
    pdfId: "Q132",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Functions",
    subtopic: "Function Modifying Array via Pointer Return",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nvoid fill(int *arr, int n) {\n    int i;\n    for (i = 0; i < n; i++) *(arr + i) = (i + 1) * (i + 1);\n}\nint main() {\n    int arr[4];\n    fill(arr, 4);\n    printf(\"%d\", arr[1] + arr[3]);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
void fill(int *arr, int n) {
    int i;
    for (i = 0; i < n; i++) *(arr + i) = (i + 1) * (i + 1);
}
int main() {
    int arr[4];
    fill(arr, 4);
    printf("%d", arr[1] + arr[3]);
    return 0;
}`,
    answer: {
      directAnswer: "`fill` populates the array with squares of $(i + 1)$: $\{1, 4, 9, 16\}$. Then `arr[1] + arr[3] = 4 + 16 =` **20**.",
      expectedOutput: "20",
      explanation: [
        "`arr[0] = (0 + 1)^2 = 1`",
        "`arr[1] = (1 + 1)^2 = 4`",
        "`arr[2] = (2 + 1)^2 = 9`",
        "`arr[3] = (3 + 1)^2 = 16`",
        "Result: $arr[1] + arr[3] = 4 + 16 = 20$."
      ],
      interviewTip: "Array passed as pointer parameter `int *arr` allows the callee to directly write data into caller's array."
    }
  },
  {
    id: 134,
    pdfId: "Q133",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Recursion",
    subtopic: "Recursive Power with Two Branches",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint power(int b, int e) {\n    if (e == 0) return 1;\n    if (e % 2 == 0) return power(b * b, e / 2);\n    return b * power(b, e - 1);\n}\nint main() {\n    printf(\"%d\", power(2, 5));\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int power(int b, int e) {
    if (e == 0) return 1;
    if (e % 2 == 0) return power(b * b, e / 2);
    return b * power(b, e - 1);
}
int main() {
    printf("%d", power(2, 5));
    return 0;
}`,
    answer: {
      directAnswer: "This implements fast binary exponentiation to compute $2^5 = $ **32** in logarithmic $O(\\log E)$ recursive calls.",
      expectedOutput: "32",
      dryRunTable: {
        headers: ["Call", "b", "e", "Branch Taken", "Evaluation"],
        rows: [
          ["power(2, 5)", "2", "5", "Odd: 2 * power(2, 4)", "2 * 16 = 32"],
          ["power(2, 4)", "2", "4", "Even: power(4, 2)", "returns 16"],
          ["power(4, 2)", "4", "2", "Even: power(16, 1)", "returns 16"],
          ["power(16, 1)", "16", "1", "Odd: 16 * power(16, 0)", "16 * 1 = 16"],
          ["power(16, 0)", "16", "0", "Base Case (e == 0)", "returns 1"]
        ]
      },
      interviewTip: "Binary exponentiation reduces recursive call depth from $O(E)$ down to $O(\\log E)$."
    }
  },
  {
    id: 135,
    pdfId: "Q134",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Arrays",
    subtopic: "Two Array Interaction",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    int a[3] = {1, 2, 3}, b[3], i;\n    for (i = 0; i < 3; i++) b[i] = a[i] * a[2 - i];\n    printf(\"%d %d %d\", b[0], b[1], b[2]);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int a[3] = {1, 2, 3}, b[3], i;
    for (i = 0; i < 3; i++) b[i] = a[i] * a[2 - i];
    printf("%d %d %d", b[0], b[1], b[2]);
    return 0;
}`,
    answer: {
      directAnswer: "Each element of `b` is formed by multiplying symmetrical pairs from `a`: $b[0] = 1 \\times 3 = 3$, $b[1] = 2 \\times 2 = 4$, and $b[2] = 3 \\times 1 = 3$. Output is **3 4 3**.",
      expectedOutput: "3 4 3",
      explanation: [
        "$i = 0$: `b[0] = a[0] * a[2] = 1 * 3 = 3`",
        "$i = 1$: `b[1] = a[1] * a[1] = 2 * 2 = 4`",
        "$i = 2$: `b[2] = a[2] * a[0] = 3 * 1 = 3`",
        "Printed as: `3 4 3`."
      ],
      interviewTip: "Index expression `(N - 1 - i)` accesses elements from the opposite end of an array."
    }
  },
  {
    id: 136,
    pdfId: "Q135",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Structures",
    subtopic: "Union inside Structure Dry Run",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nunion Val { int i; char c; };\nstruct Box { union Val v; int tag; };\nint main() {\n    struct Box b;\n    b.v.i = 321;\n    b.tag = b.v.c;\n    printf(\"%d\", b.tag);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
union Val { int i; char c; };
struct Box { union Val v; int tag; };
int main() {
    struct Box b;
    b.v.i = 321;
    b.tag = b.v.c;
    printf("%d", b.tag);
    return 0;
}`,
    answer: {
      directAnswer: "In little-endian architecture (x86/ARM), integer $321$ is stored in hexadecimal as `0x00000141`. Accessing `b.v.c` reads the lowest byte `0x41`, which equals $65$ in decimal ('A'). Output is **65**.",
      expectedOutput: "65",
      explanation: [
        "In `union Val`, members `int i` and `char c` overlap at the exact same base memory address.",
        "$321_{10} = 256 + 65 = 0x00000141$.",
        "On little-endian systems, least significant byte is stored at lowest address: byte 0 is `0x41` ($65$).",
        "`b.v.c` reads byte 0 = 65.",
        "`b.tag` is assigned 65, and `printf(\"%d\", b.tag)` outputs 65."
      ],
      interviewTip: "This tests both union memory sharing and endianness (byte ordering in RAM)."
    }
  },
  {
    id: 137,
    pdfId: "Q136",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Dynamic Memory Allocation",
    subtopic: "2D Dynamic Array Dry Run",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    int **arr, i, j;\n    arr = (int **)malloc(2 * sizeof(int *));\n    for (i = 0; i < 2; i++) arr[i] = (int *)malloc(2 * sizeof(int));\n    for (i = 0; i < 2; i++)\n        for (j = 0; j < 2; j++)\n            arr[i][j] = i + j;\n    printf(\"%d\", arr[0][1] + arr[1][0] + arr[1][1]);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
#include <stdlib.h>
int main() {
    int **arr, i, j;
    arr = (int **)malloc(2 * sizeof(int *));
    for (i = 0; i < 2; i++) arr[i] = (int *)malloc(2 * sizeof(int));
    for (i = 0; i < 2; i++)
        for (j = 0; j < 2; j++)
            arr[i][j] = i + j;
    printf("%d", arr[0][1] + arr[1][0] + arr[1][1]);
    return 0;
}`,
    answer: {
      directAnswer: "The 2x2 dynamic matrix has elements `arr[i][j] = i + j`: `arr[0][1] = 1`, `arr[1][0] = 1`, and `arr[1][1] = 2`. The sum $1 + 1 + 2 =$ **4**.",
      expectedOutput: "4",
      explanation: [
        "`arr[0][0] = 0 + 0 = 0`",
        "`arr[0][1] = 0 + 1 = 1`",
        "`arr[1][0] = 1 + 0 = 1`",
        "`arr[1][1] = 1 + 1 = 2`",
        "Sum: $arr[0][1] + arr[1][0] + arr[1][1] = 1 + 1 + 2 = 4$."
      ],
      interviewTip: "Dynamic 2D arrays require allocating an array of pointers (`int**`), then allocating each row array individually."
    }
  },
  {
    id: 138,
    pdfId: "Q137",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Bitwise Operators",
    subtopic: "Swap Using XOR Dry Run",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    int a = 6, b = 11;\n    a = a ^ b;\n    b = a ^ b;\n    a = a ^ b;\n    printf(\"%d %d\", a, b);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int a = 6, b = 11;
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    printf("%d %d", a, b);
    return 0;
}`,
    answer: {
      directAnswer: "This is the classic three-step bitwise XOR swap algorithm that swaps two variables without temporary storage, printing **11 6**.",
      expectedOutput: "11 6",
      dryRunTable: {
        headers: ["Step", "Operation", "New Value of a", "New Value of b"],
        rows: [
          ["Initial", "-", "6", "11"],
          ["1", "a = a ^ b", "6 ^ 11 = 13", "11"],
          ["2", "b = a ^ b", "13", "13 ^ 11 = 6 (original a)"],
          ["3", "a = a ^ b", "13 ^ 6 = 11 (original b)", "6"]
        ]
      },
      interviewTip: "Beware: If `a` and `b` point to the exact same memory location (`&a == &b`), `a ^= a` zeroes out the memory!"
    }
  },
  {
    id: 139,
    pdfId: "Q138",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Loops",
    subtopic: "While Loop with Compound Update",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    int i = 1, sum = 0;\n    while (i <= 20) {\n        sum += i;\n        i *= 2;\n    }\n    printf(\"%d\", sum);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int i = 1, sum = 0;
    while (i <= 20) {
        sum += i;
        i *= 2;
    }
    printf("%d", sum);
    return 0;
}`,
    answer: {
      directAnswer: "The loop sums powers of 2 for values $\\le 20$: $1 + 2 + 4 + 8 + 16 = $ **31**.",
      expectedOutput: "31",
      dryRunTable: {
        headers: ["Iteration", "i value", "Condition (i <= 20)", "sum += i", "Next i (i *= 2)"],
        rows: [
          ["1", "1", "True", "0 + 1 = 1", "2"],
          ["2", "2", "True", "1 + 2 = 3", "4"],
          ["3", "4", "True", "3 + 4 = 7", "8"],
          ["4", "8", "True", "7 + 8 = 15", "16"],
          ["5", "16", "True", "15 + 16 = 31", "32"],
          ["6", "32", "False (32 <= 20)", "Loop terminates", "-"]
        ]
      },
      interviewTip: "Notice that the sum of powers of 2 up to $2^k$ is always $2^{k+1} - 1 = 32 - 1 = 31$."
    }
  },
  {
    id: 140,
    pdfId: "Q139",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Functions",
    subtopic: "Function Returning Struct Dry Run",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nstruct Pair { int a, b; };\nstruct Pair make(int x, int y) {\n    struct Pair p;\n    p.a = x + y;\n    p.b = x - y;\n    return p;\n}\nint main() {\n    struct Pair r = make(10, 4);\n    printf(\"%d %d\", r.a, r.b);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
struct Pair { int a, b; };
struct Pair make(int x, int y) {
    struct Pair p;
    p.a = x + y;
    p.b = x - y;
    return p;
}
int main() {
    struct Pair r = make(10, 4);
    printf("%d %d", r.a, r.b);
    return 0;
}`,
    answer: {
      directAnswer: "The function returns a `struct Pair` with `p.a = 10 + 4 = 14` and `p.b = 10 - 4 = 6`, outputting **14 6**.",
      expectedOutput: "14 6",
      explanation: [
        "In `make(10, 4)`: `p.a = 10 + 4 = 14`, `p.b = 10 - 4 = 6`.",
        "The struct is returned by value (entire contents copied to `r`).",
        "`printf` prints `r.a` and `r.b` as `14 6`."
      ],
      interviewTip: "Returning a struct by value is the standard, safe C idiom for returning multiple values from a function."
    }
  },
  {
    id: 141,
    pdfId: "Q140",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Recursion",
    subtopic: "Recursive Digit Reversal Dry Run",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint rev(int n, int r) {\n    if (n == 0) return r;\n    return rev(n / 10, r * 10 + n % 10);\n}\nint main() {\n    printf(\"%d\", rev(4321, 0));\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int rev(int n, int r) {
    if (n == 0) return r;
    return rev(n / 10, r * 10 + n % 10);
}
int main() {
    printf("%d", rev(4321, 0));
    return 0;
}`,
    answer: {
      directAnswer: "Tail-recursive digit reversal reverses 4321 to **1234** by passing the accumulated reversed prefix in parameter `r`.",
      expectedOutput: "1234",
      dryRunTable: {
        headers: ["Call", "n", "r", "Next Call (n/10, r*10 + n%10)"],
        rows: [
          ["1", "4321", "0", "rev(432, 0*10 + 1) = rev(432, 1)"],
          ["2", "432", "1", "rev(43, 1*10 + 2) = rev(43, 12)"],
          ["3", "43", "12", "rev(4, 12*10 + 3) = rev(4, 123)"],
          ["4", "4", "123", "rev(0, 123*10 + 4) = rev(0, 1234)"],
          ["5", "0", "1234", "Base case (n == 0) returns r = 1234"]
        ]
      },
      interviewTip: "This is accumulator-based tail recursion, which uses constant stack space under compiler optimization."
    }
  },
  {
    id: 142,
    pdfId: "Q141",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Arrays",
    subtopic: "Array Rotation Dry Run",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    int arr[5] = {1, 2, 3, 4, 5}, temp, i;\n    temp = arr[0];\n    for (i = 0; i < 4; i++) arr[i] = arr[i + 1];\n    arr[4] = temp;\n    printf(\"%d %d %d\", arr[0], arr[2], arr[4]);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int arr[5] = {1, 2, 3, 4, 5}, temp, i;
    temp = arr[0];
    for (i = 0; i < 4; i++) arr[i] = arr[i + 1];
    arr[4] = temp;
    printf("%d %d %d", arr[0], arr[2], arr[4]);
    return 0;
}`,
    answer: {
      directAnswer: "Left-rotates the array by 1 position: `{1, 2, 3, 4, 5}` becomes `{2, 3, 4, 5, 1}`. Printing `arr[0]`, `arr[2]`, and `arr[4]` yields **2 4 1**.",
      expectedOutput: "2 4 1",
      explanation: [
        "`temp = arr[0] = 1`.",
        "Loop shifts elements left: `arr[0]=2, arr[1]=3, arr[2]=4, arr[3]=5`.",
        "`arr[4] = temp = 1`.",
        "Resulting array: `{2, 3, 4, 5, 1}`.",
        "`arr[0]` is 2, `arr[2]` is 4, `arr[4]` is 1."
      ],
      interviewTip: "This is a single left circular rotation in $O(N)$ time and $O(1)$ auxiliary space."
    }
  },
  {
    id: 143,
    pdfId: "Q142",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Strings",
    subtopic: "String Token Count Dry Run",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    char str[] = \"C is fun to learn\";\n    int i, words = 1;\n    for (i = 0; str[i] != '\\0'; i++) {\n        if (str[i] == ' ') words++;\n    }\n    printf(\"%d\", words);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    char str[] = "C is fun to learn";
    int i, words = 1;
    for (i = 0; str[i] != '\\0'; i++) {
        if (str[i] == ' ') words++;
    }
    printf("%d", words);
    return 0;
}`,
    answer: {
      directAnswer: "The string contains 4 space characters separating 5 words. Starting with `words = 1`, it increments 4 times, outputting **5**.",
      expectedOutput: "5",
      explanation: [
        "Spaces occur after 'C', 'is', 'fun', and 'to' (total 4 spaces).",
        "Each space increments `words` by 1.",
        "`words = 1 + 4 = 5`.",
        "Output is 5."
      ],
      interviewTip: "Assuming $N$ words = $(N - 1)$ spaces works only if there are no consecutive, leading, or trailing spaces."
    }
  },
  {
    id: 144,
    pdfId: "Q143",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Pointers",
    subtopic: "Pointer Arithmetic with Increment Chain",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    int arr[] = {10, 20, 30, 40};\n    int *p = arr;\n    printf(\"%d \", *p++);\n    printf(\"%d \", *p);\n    printf(\"%d\", *++p);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int arr[] = {10, 20, 30, 40};
    int *p = arr;
    printf("%d ", *p++);
    printf("%d ", *p);
    printf("%d", *++p);
    return 0;
}`,
    answer: {
      directAnswer: "1. `*p++` evaluates to `*p` (10) then advances `p` to `&arr[1]`. 2. `*p` prints 20. 3. `*++p` advances `p` to `&arr[2]` first then dereferences it, printing 30. Exact output: **10 20 30**.",
      expectedOutput: "10 20 30",
      dryRunTable: {
        headers: ["Statement", "Pointer Location", "Action", "Printed"],
        rows: [
          ["printf(\"%d \", *p++);", "&arr[0] -> &arr[1]", "Dereference 10, then advance p", "10 "],
          ["printf(\"%d \", *p);", "&arr[1]", "Dereference current p", "20 "],
          ["printf(\"%d\", *++p);", "&arr[1] -> &arr[2]", "Advance p to index 2 first, then dereference", "30"]
        ]
      },
      interviewTip: "`*p++` means `*(p++)` (dereference original, increment pointer). `*++p` means `*(++p)` (increment pointer first, then dereference). `(*p)++` increments the value pointed to."
    }
  },
  {
    id: 145,
    pdfId: "Q144",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Structures",
    subtopic: "Structure Array with Function Update",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nstruct Stu { int marks; };\nvoid grade(struct Stu s[], int n) {\n    int i;\n    for (i = 0; i < n; i++) s[i].marks += 5;\n}\nint main() {\n    struct Stu s[3] = {{50},{60},{70}};\n    grade(s, 3);\n    printf(\"%d %d %d\", s[0].marks, s[1].marks, s[2].marks);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
struct Stu { int marks; };
void grade(struct Stu s[], int n) {
    int i;
    for (i = 0; i < n; i++) s[i].marks += 5;
}
int main() {
    struct Stu s[3] = {{50},{60},{70}};
    grade(s, 3);
    printf("%d %d %d", s[0].marks, s[1].marks, s[2].marks);
    return 0;
}`,
    answer: {
      directAnswer: "An array of structures decays to a pointer when passed to a function. The updates inside `grade` modify the caller's array elements directly, adding 5 to each: **55 65 75**.",
      expectedOutput: "55 65 75",
      explanation: [
        "Even though individual structures pass by value, an *array of structures* decays to a pointer to the first structure (`struct Stu *`).",
        "`s[0].marks`: $50 + 5 = 55$",
        "`s[1].marks`: $60 + 5 = 65$",
        "`s[2].marks`: $70 + 5 = 75$",
        "Outputs `55 65 75`."
      ],
      interviewTip: "Crucial difference: Single struct `void f(struct S s)` passes by VALUE; array of structs `void f(struct S s[])` passes by REFERENCE (decays to pointer)."
    }
  },
  {
    id: 146,
    pdfId: "Q145",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Dynamic Memory Allocation",
    subtopic: "Freed Pointer Reuse Dry Run",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    int *p = (int *)malloc(sizeof(int));\n    *p = 25;\n    int val = *p;\n    free(p);\n    printf(\"%d\", val);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
#include <stdlib.h>
int main() {
    int *p = (int *)malloc(sizeof(int));
    *p = 25;
    int val = *p;
    free(p);
    printf("%d", val);
    return 0;
}`,
    answer: {
      directAnswer: "The value 25 was copied to stack variable `val` before `free(p)` was called. Printing `val` outputs **25** safely.",
      expectedOutput: "25",
      explanation: [
        "`malloc` allocates 4 bytes on heap.",
        "`*p = 25` writes 25 into heap.",
        "`int val = *p` copies 25 to local stack variable `val`.",
        "`free(p)` frees heap memory.",
        "`printf(\"%d\", val)` reads `val` from stack, printing 25."
      ],
      interviewTip: "If the program had tried to print `*p` after `free(p)`, that would be a 'Use-After-Free' bug causing undefined behavior."
    }
  },
  {
    id: 147,
    pdfId: "Q146",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Bitwise Operators",
    subtopic: "Checking Power of Two",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    int n = 16;\n    printf(\"%d\", (n & (n - 1)) == 0);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int n = 16;
    printf("%d", (n & (n - 1)) == 0);
    return 0;
}`,
    answer: {
      directAnswer: "For any power of 2, `n & (n - 1)` is always 0. Since $16$ is a power of 2 ($10000_2 \\& 01111_2 = 0$), the condition `(0 == 0)` evaluates to true (**1**).",
      expectedOutput: "1",
      explanation: [
        "$n = 16 = 10000_2$.",
        "$n - 1 = 15 = 01111_2$.",
        "$10000_2 \\& 01111_2 = 00000_2 = 0$.",
        "`(0 == 0)` evaluates to `1` (true).",
        "Output: 1."
      ],
      interviewTip: "`n > 0 && (n & (n - 1)) == 0` is the standard $O(1)$ trick to check if an integer is a power of 2."
    }
  },
  {
    id: 148,
    pdfId: "Q147",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Loops",
    subtopic: "For Loop with Decreasing Step",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    int i, product = 1;\n    for (i = 5; i >= 1; i -= 2) {\n        product *= i;\n    }\n    printf(\"%d\", product);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int i, product = 1;
    for (i = 5; i >= 1; i -= 2) {
        product *= i;
    }
    printf("%d", product);
    return 0;
}`,
    answer: {
      directAnswer: "The loop decrements `i` by 2, taking odd values 5, 3, and 1. The product $5 \\times 3 \\times 1 =$ **15**.",
      expectedOutput: "15",
      dryRunTable: {
        headers: ["i", "Condition (i >= 1)", "product *= i", "Next i (i -= 2)"],
        rows: [
          ["5", "True", "1 * 5 = 5", "3"],
          ["3", "True", "5 * 3 = 15", "1"],
          ["1", "True", "15 * 1 = 15", "-1"],
          ["-1", "False (-1 >= 1)", "Loop terminates", "-"]
        ]
      },
      interviewTip: "This is known as the double factorial of 5, written $5!! = 5 \\times 3 \\times 1 = 15$."
    }
  },
  {
    id: 149,
    pdfId: "Q148",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Functions",
    subtopic: "Recursive Function Called in Loop",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint fact(int n) {\n    return (n <= 1) ? 1 : n * fact(n - 1);\n}\nint main() {\n    int i, sum = 0;\n    for (i = 1; i <= 3; i++) sum += fact(i);\n    printf(\"%d\", sum);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int fact(int n) {
    return (n <= 1) ? 1 : n * fact(n - 1);
}
int main() {
    int i, sum = 0;
    for (i = 1; i <= 3; i++) sum += fact(i);
    printf("%d", sum);
    return 0;
}`,
    answer: {
      directAnswer: "The loop sums factorials $1! + 2! + 3! = 1 + 2 + 6 =$ **9**.",
      expectedOutput: "9",
      explanation: [
        "$i = 1: \\text{fact}(1) = 1$. `sum = 0 + 1 = 1`.",
        "$i = 2: \\text{fact}(2) = 2 \\times 1 = 2$. `sum = 1 + 2 = 3`.",
        "$i = 3: \\text{fact}(3) = 3 \\times 2 = 6$. `sum = 3 + 6 = 9`.",
        "Output is 9."
      ],
      interviewTip: "Ternary operator `(n <= 1) ? 1 : n * fact(n - 1)` concisely expresses both the base and recursive cases."
    }
  },
  {
    id: 150,
    pdfId: "Q149",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Arrays",
    subtopic: "Frequency Count Dry Run",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    int arr[] = {1, 2, 2, 3, 3, 3}, i, j, count;\n    for (i = 0; i < 6; i++) {\n        count = 0;\n        for (j = 0; j < 6; j++) if (arr[j] == arr[i]) count++;\n        if (arr[i] == 3) { printf(\"%d\", count); break; }\n    }\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int arr[] = {1, 2, 2, 3, 3, 3}, i, j, count;
    for (i = 0; i < 6; i++) {
        count = 0;
        for (j = 0; j < 6; j++) if (arr[j] == arr[i]) count++;
        if (arr[i] == 3) { printf("%d", count); break; }
    }
    return 0;
}`,
    answer: {
      directAnswer: "When the outer loop encounters the first occurrence of 3 (at index $i = 3$), the inner loop counts three 3s in the array. The condition `arr[i] == 3` prints **3** and breaks immediately.",
      expectedOutput: "3",
      explanation: [
        "$i = 0$: `arr[0] = 1`, count = 1. `arr[i] != 3`.",
        "$i = 1$: `arr[1] = 2`, count = 2. `arr[i] != 3`.",
        "$i = 2$: `arr[2] = 2`, count = 2. `arr[i] != 3`.",
        "$i = 3$: `arr[3] = 3`. Inner loop counts all matching 3s at indices 3, 4, 5 (`count = 3`).",
        "`arr[3] == 3` is true: `printf(\"%d\", count)` prints 3 and `break` terminates the outer loop."
      ],
      interviewTip: "The break occurs on the first encounter of 3, avoiding duplicate work."
    }
  },
  {
    id: 151,
    pdfId: "Q150",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Recursion",
    subtopic: "Recursive GCD Dry Run",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint gcd(int a, int b) {\n    if (b == 0) return a;\n    return gcd(b, a % b);\n}\nint main() {\n    printf(\"%d\", gcd(36, 24));\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int gcd(int a, int b) {
    if (b == 0) return a;
    return gcd(b, a % b);
}
int main() {
    printf("%d", gcd(36, 24));
    return 0;
}`,
    answer: {
      directAnswer: "Euclid's algorithm computes $\\gcd(36, 24)$: $36 \\pmod{24} = 12$, then $24 \\pmod{12} = 0$, terminating to return **12**.",
      expectedOutput: "12",
      dryRunTable: {
        headers: ["Call", "a", "b", "a % b", "Next Action"],
        rows: [
          ["gcd(36, 24)", "36", "24", "36 % 24 = 12", "Calls gcd(24, 12)"],
          ["gcd(24, 12)", "24", "12", "24 % 12 = 0", "Calls gcd(12, 0)"],
          ["gcd(12, 0)", "12", "0", "-", "Base case (b == 0) returns a = 12"]
        ]
      },
      interviewTip: "Euclidean algorithm is guaranteed to converge in at most $5 \\log_{10}(\\min(a, b))$ steps (Lamé's Theorem)."
    }
  }
];
