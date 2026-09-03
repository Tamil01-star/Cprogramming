// Section 3 Part 1: Placement Coding & Hard Dry Run (Questions 92 to 121)

module.exports = [
  {
    id: 92,
    pdfId: "Q91",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Loops",
    subtopic: "Nested Loop Dry Run",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    int i, j, k = 0;\n    for (i = 1; i <= 3; i++) {\n        for (j = 1; j <= i; j++) {\n            k += i * j;\n        }\n    }\n    printf(\"%d\", k);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int i, j, k = 0;
    for (i = 1; i <= 3; i++) {
        for (j = 1; j <= i; j++) {
            k += i * j;
        }
    }
    printf("%d", k);
    return 0;
}`,
    answer: {
      directAnswer: "The program executes a triangular nested loop accumulating the product $i \\times j$ into variable $k$, producing an exact output of **25**.",
      expectedOutput: "25",
      dryRunTable: {
        headers: ["Outer loop (i)", "Inner loop (j)", "Calculation (k += i * j)", "Resulting k"],
        rows: [
          ["i = 1", "j = 1", "k = 0 + (1 * 1)", "1"],
          ["i = 2", "j = 1", "k = 1 + (2 * 1)", "3"],
          ["i = 2", "j = 2", "k = 3 + (2 * 2)", "7"],
          ["i = 3", "j = 1", "k = 7 + (3 * 1)", "10"],
          ["i = 3", "j = 2", "k = 10 + (3 * 2)", "16"],
          ["i = 3", "j = 3", "k = 16 + (3 * 3)", "25"]
        ]
      },
      explanation: [
        "When $i=1$, inner loop runs for $j=1$: $k = 0 + 1 = 1$.",
        "When $i=2$, inner loop runs for $j=1, 2$: $k = 1 + 2 + 4 = 7$.",
        "When $i=3$, inner loop runs for $j=1, 2, 3$: $k = 7 + 3 + 6 + 9 = 25$.",
        "Outer loop terminates at $i=4$, and `printf(\"%d\", k)` prints 25."
      ],
      interviewTip: "In triangular loops where $j \\le i$, total inner loop iterations equals $N(N + 1) / 2 = 3 \\times 4 / 2 = 6$ steps."
    }
  },
  {
    id: 93,
    pdfId: "Q92",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Loops",
    subtopic: "Loop with Multiple Conditions",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    int i = 0, sum = 0;\n    while (i < 10) {\n        if (i % 2 == 0 && i % 3 == 0) {\n            sum += i;\n        }\n        i++;\n    }\n    printf(\"%d\", sum);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int i = 0, sum = 0;
    while (i < 10) {
        if (i % 2 == 0 && i % 3 == 0) {
            sum += i;
        }
        i++;
    }
    printf("%d", sum);
    return 0;
}`,
    answer: {
      directAnswer: "The program sums all numbers in the range $[0, 9]$ that are divisible by both 2 and 3 (i.e. multiples of 6). The matching numbers are 0 and 6, giving an output of **6**.",
      expectedOutput: "6",
      dryRunTable: {
        headers: ["i", "i % 2 == 0", "i % 3 == 0", "Condition Met?", "sum update"],
        rows: [
          ["0", "True (0)", "True (0)", "YES", "sum = 0 + 0 = 0"],
          ["1-5", "Various", "Various", "NO", "sum = 0"],
          ["6", "True (0)", "True (0)", "YES", "sum = 0 + 6 = 6"],
          ["7-9", "Various", "Various", "NO", "sum = 6"]
        ]
      },
      explanation: [
        "A number is divisible by both 2 and 3 if and only if it is divisible by $\\text{LCM}(2, 3) = 6$.",
        "Within $0 \\le i < 10$, only $i = 0$ and $i = 6$ satisfy this condition.",
        "Sum = $0 + 6 = 6$."
      ],
      interviewTip: "Remember that $0 \\pmod k == 0$ for any non-zero integer $k$."
    }
  },
  {
    id: 94,
    pdfId: "Q93",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Loops",
    subtopic: "For Loop with Comma Operator",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    int i, j;\n    for (i = 0, j = 5; i < j; i++, j--) {\n        printf(\"%d-%d \", i, j);\n    }\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int i, j;
    for (i = 0, j = 5; i < j; i++, j--) {
        printf("%d-%d ", i, j);
    }
    return 0;
}`,
    answer: {
      directAnswer: "The comma operator in the initialization and update expressions allows manipulating two counters simultaneously moving toward each other, printing **0-5 1-4 2-3 **.",
      expectedOutput: "0-5 1-4 2-3 ",
      dryRunTable: {
        headers: ["Iteration", "i", "j", "Condition (i < j)", "Printed Output", "Next (i++, j--)"],
        rows: [
          ["1", "0", "5", "0 < 5 (True)", "0-5 ", "i=1, j=4"],
          ["2", "1", "4", "1 < 4 (True)", "1-4 ", "i=2, j=3"],
          ["3", "2", "3", "2 < 3 (True)", "2-3 ", "i=3, j=2"],
          ["4", "3", "2", "3 < 2 (False)", "Loop Terminates", "-"]
        ]
      },
      explanation: [
        "In iteration 1: $i=0, j=5 \\implies$ prints `0-5 `.",
        "In iteration 2: $i=1, j=4 \\implies$ prints `1-4 `.",
        "In iteration 3: $i=2, j=3 \\implies$ prints `2-3 `.",
        "At the start of iteration 4: $i=3, j=2$, condition $i < j$ is false, terminating the loop."
      ],
      interviewTip: "The comma operator has the lowest precedence in C and evaluates expressions from left to right, returning the value of the rightmost expression."
    }
  },
  {
    id: 95,
    pdfId: "Q94",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Functions",
    subtopic: "Nested Function Calls",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint square(int x) { return x * x; }\nint cube(int x) { return x * square(x); }\nint main() {\n    printf(\"%d\", cube(square(2)));\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int square(int x) { return x * x; }
int cube(int x) { return x * square(x); }
int main() {
    printf("%d", cube(square(2)));
    return 0;
}`,
    answer: {
      directAnswer: "The innermost function `square(2)` is evaluated first returning 4, which is passed into `cube(4)` yielding $4 \\times 4^2 = 64$. Output is **64**.",
      expectedOutput: "64",
      explanation: [
        "Step 1: Evaluate `square(2)`: $2 \\times 2 = 4$.",
        "Step 2: Call `cube(4)`: returns $4 \\times \\text{square}(4)$.",
        "Step 3: Inside `cube(4)`, `square(4)` returns $4 \\times 4 = 16$.",
        "Step 4: `cube(4)` returns $4 \\times 16 = 64$.",
        "Step 5: `printf` prints `64`."
      ],
      interviewTip: "Function arguments in C are evaluated before the function call, and innermost nested function calls resolve first."
    }
  },
  {
    id: 96,
    pdfId: "Q95",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Functions",
    subtopic: "Function with Static Local Variable",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint counter() {\n    static int c = 10;\n    c -= 2;\n    return c;\n}\nint main() {\n    printf(\"%d %d %d\", counter(), counter(), counter());\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int counter() {
    static int c = 10;
    c -= 2;
    return c;
}
int main() {
    printf("%d %d %d", counter(), counter(), counter());
    return 0;
}`,
    answer: {
      directAnswer: "In standard C conventions with right-to-left argument evaluation (standard GCC/x86 calling convention), `counter()` evaluates from right to left as 8, then 6, then 4, printing **4 6 8**.",
      expectedOutput: "4 6 8",
      explanation: [
        "The static variable `c` retains its value between calls.",
        "Under C calling convention (`cdecl`), function arguments are pushed onto the stack from right to left:",
        "1. Rightmost `counter()`: $c = 10 - 2 = 8$.",
        "2. Middle `counter()`: $c = 8 - 2 = 6$.",
        "3. Leftmost `counter()`: $c = 6 - 2 = 4$.",
        "Printed left to right according to format string: `4 6 8`.",
        "*(Note: In the C standard, order of evaluation of function arguments is unspecified; however, 4 6 8 is the expected answer in GCC/placement exams).*"
      ],
      interviewTip: "This is a classic interview question highlighting that function argument evaluation order is unspecified by the ISO C standard, but typically right-to-left in GCC/Clang on x86."
    }
  },
  {
    id: 97,
    pdfId: "Q96",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Functions",
    subtopic: "Function Returning Pointer",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint *getPtr(int *arr) {\n    return arr + 2;\n}\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int *p = getPtr(arr);\n    printf(\"%d\", *p + *(p + 1));\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int *getPtr(int *arr) {
    return arr + 2;
}
int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int *p = getPtr(arr);
    printf("%d", *p + *(p + 1));
    return 0;
}`,
    answer: {
      directAnswer: "`getPtr(arr)` returns a pointer to `arr[2]` (value 30). Then `*p` is 30 and `*(p + 1)` is 40, so the expression evaluates to $30 + 40 =$ **70**.",
      expectedOutput: "70",
      explanation: [
        "`arr` base address points to `arr[0] = 10`.",
        "`getPtr(arr)` returns `arr + 2`, which points to index 2: `&arr[2]`.",
        "`p` points to element `30`.",
        "`*p` dereferences `arr[2]` (30).",
        "`*(p + 1)` dereferences `arr[3]` (40).",
        "Result: $30 + 40 = 70$."
      ],
      interviewTip: "Returning a pointer to caller-allocated memory (`arr` in `main`) is completely safe; never return a pointer to a local `auto` variable allocated on the helper function's stack."
    }
  },
  {
    id: 98,
    pdfId: "Q97",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Recursion",
    subtopic: "Mutual Style Recursion",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint fun(int n) {\n    if (n <= 1) return 1;\n    return n * fun(n - 1) + fun(n - 2);\n}\nint main() {\n    printf(\"%d\", fun(4));\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int fun(int n) {
    if (n <= 1) return 1;
    return n * fun(n - 1) + fun(n - 2);
}
int main() {
    printf("%d", fun(4));
    return 0;
}`,
    answer: {
      directAnswer: "Evaluating the recurrence relation bottom-up from base cases yields $fun(0)=1, fun(1)=1, fun(2)=3, fun(3)=10, fun(4)=43$. Exact output is **43**.",
      expectedOutput: "43",
      dryRunTable: {
        headers: ["n", "Recurrence Formula", "Calculation", "Return Value"],
        rows: [
          ["0", "Base Case", "1", "1"],
          ["1", "Base Case", "1", "1"],
          ["2", "2 * fun(1) + fun(0)", "2 * 1 + 1", "3"],
          ["3", "3 * fun(2) + fun(1)", "3 * 3 + 1", "10"],
          ["4", "4 * fun(3) + fun(2)", "4 * 10 + 3", "43"]
        ]
      },
      explanation: [
        "`fun(0) = 1` and `fun(1) = 1` from the base condition `if (n <= 1) return 1;`.",
        "`fun(2) = 2 * fun(1) + fun(0) = 2(1) + 1 = 3`.",
        "`fun(3) = 3 * fun(2) + fun(1) = 3(3) + 1 = 10`.",
        "`fun(4) = 4 * fun(3) + fun(2) = 4(10) + 3 = 43`."
      ],
      interviewTip: "Always solve tree-recursive problems bottom-up to avoid getting lost in recursive call stacks."
    }
  },
  {
    id: 99,
    pdfId: "Q98",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Recursion",
    subtopic: "Recursion with Static Variable",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nvoid fun(int n) {\n    static int sum = 0;\n    if (n == 0) {\n        printf(\"%d\", sum);\n        return;\n    }\n    sum += n;\n    fun(n - 1);\n}\nint main() {\n    fun(4);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
void fun(int n) {
    static int sum = 0;
    if (n == 0) {
        printf("%d", sum);
        return;
    }
    sum += n;
    fun(n - 1);
}
int main() {
    fun(4);
    return 0;
}`,
    answer: {
      directAnswer: "The static variable `sum` accumulates values across all recursive frames: $4 + 3 + 2 + 1 = 10$. When $n=0$, `printf` outputs **10**.",
      expectedOutput: "10",
      dryRunTable: {
        headers: ["Call", "n", "Operation (sum += n)", "Static sum value"],
        rows: [
          ["fun(4)", "4", "sum += 4", "4"],
          ["fun(3)", "3", "sum += 3", "7"],
          ["fun(2)", "2", "sum += 2", "9"],
          ["fun(1)", "1", "sum += 1", "10"],
          ["fun(0)", "0", "Prints sum and returns", "10"]
        ]
      },
      explanation: [
        "Because `sum` is `static`, its storage is allocated once in the data segment and shared across all recursive invocations.",
        "Values 4, 3, 2, and 1 are sequentially added.",
        "When base case $n=0$ is reached, `printf(\"%d\", sum)` prints 10."
      ],
      interviewTip: "Static variables inside recursive functions behave like global accumulators, but have localized scope inside that function."
    }
  },
  {
    id: 100,
    pdfId: "Q99",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Recursion",
    subtopic: "Recursion Returning Multiple Paths",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint fun(int a, int b) {\n    if (a == 0) return b;\n    return fun(a - 1, a + b);\n}\nint main() {\n    printf(\"%d\", fun(3, 2));\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int fun(int a, int b) {
    if (a == 0) return b;
    return fun(a - 1, a + b);
}
int main() {
    printf("%d", fun(3, 2));
    return 0;
}`,
    answer: {
      directAnswer: "Each recursive step decrements `a` by 1 and adds the current `a` to `b`. Calling `fun(3, 2)` terminates at `fun(0, 8)`, returning **8**.",
      expectedOutput: "8",
      dryRunTable: {
        headers: ["Step", "Call", "Parameters (a, b)", "Next Call fun(a-1, a+b)"],
        rows: [
          ["1", "fun(3, 2)", "a = 3, b = 2", "fun(2, 5)"],
          ["2", "fun(2, 5)", "a = 2, b = 5", "fun(1, 7)"],
          ["3", "fun(1, 7)", "a = 1, b = 7", "fun(0, 8)"],
          ["4", "fun(0, 8)", "a = 0, b = 8", "Base case returns b = 8"]
        ]
      },
      explanation: [
        "Call 1: `fun(3, 2)` -> evaluates `fun(3 - 1, 3 + 2)` = `fun(2, 5)`.",
        "Call 2: `fun(2, 5)` -> evaluates `fun(2 - 1, 2 + 5)` = `fun(1, 7)`.",
        "Call 3: `fun(1, 7)` -> evaluates `fun(1 - 1, 1 + 7)` = `fun(0, 8)`.",
        "Call 4: `fun(0, 8)` hits base case `if (a == 0) return b`, returning 8."
      ],
      interviewTip: "This is tail recursion: the recursive call is the final expression, so no computation occurs on the unwinding phase."
    }
  },
  {
    id: 101,
    pdfId: "Q100",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Arrays",
    subtopic: "Array with Pointer Arithmetic",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    int arr[] = {2, 4, 6, 8, 10};\n    int *p = arr;\n    printf(\"%d\", *(p + 1) + *(arr + 3) - *(p + 4));\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int arr[] = {2, 4, 6, 8, 10};
    int *p = arr;
    printf("%d", *(p + 1) + *(arr + 3) - *(p + 4));
    return 0;
}`,
    answer: {
      directAnswer: "Translating pointer dereferences into array elements: `arr[1] + arr[3] - arr[4] = 4 + 8 - 10 =` **2**.",
      expectedOutput: "2",
      explanation: [
        "`p` points to `arr[0]`.",
        "`*(p + 1)` is `arr[1] = 4`.",
        "`*(arr + 3)` is `arr[3] = 8`.",
        "`*(p + 4)` is `arr[4] = 10`.",
        "Expression: $4 + 8 - 10 = 2$."
      ],
      interviewTip: "`*(ptr + i)` and `ptr[i]` are 100% interchangeable in C."
    }
  },
  {
    id: 102,
    pdfId: "Q101",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Arrays",
    subtopic: "2D Array Traversal",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    int arr[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\n    int sum = 0, i, j;\n    for (i = 0; i < 3; i++)\n        for (j = 0; j < 3; j++)\n            if (i == j || i + j == 2) sum += arr[i][j];\n    printf(\"%d\", sum);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int arr[3][3] = {{1,2,3},{4,5,6},{7,8,9}};
    int sum = 0, i, j;
    for (i = 0; i < 3; i++)
        for (j = 0; j < 3; j++)
            if (i == j || i + j == 2) sum += arr[i][j];
    printf("%d", sum);\n    return 0;\n}`,
    answer: {
      directAnswer: "The condition `i == j || i + j == 2` selects both main and anti-diagonal elements of the 3x3 matrix (forming an 'X'), summing $1 + 3 + 5 + 7 + 9 =$ **25**.",
      expectedOutput: "25",
      dryRunTable: {
        headers: ["(i, j)", "arr[i][j]", "i == j", "i + j == 2", "Included?", "Running sum"],
        rows: [
          ["(0, 0)", "1", "True", "False", "Yes", "1"],
          ["(0, 1)", "2", "False", "False", "No", "1"],
          ["(0, 2)", "3", "False", "True", "Yes", "4"],
          ["(1, 0)", "4", "False", "False", "No", "4"],
          ["(1, 1)", "5", "True", "True", "Yes (center)", "9"],
          ["(1, 2)", "6", "False", "False", "No", "9"],
          ["(2, 0)", "7", "False", "True", "Yes", "16"],
          ["(2, 1)", "8", "False", "False", "No", "16"],
          ["(2, 2)", "9", "True", "False", "Yes", "25"]
        ]
      },
      interviewTip: "Notice that for center element `arr[1][1] = 5`, both conditions are true, but because of the logical OR (`||`), it is added only once."
    }
  },
  {
    id: 103,
    pdfId: "Q102",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Arrays",
    subtopic: "Array Modification via Function",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nvoid modify(int arr[], int n) {\n    int i;\n    for (i = 0; i < n; i++)\n        arr[i] = arr[i] * 2 + 1;\n}\nint main() {\n    int arr[4] = {1, 2, 3, 4}, i;\n    modify(arr, 4);\n    for (i = 0; i < 4; i++) printf(\"%d \", arr[i]);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
void modify(int arr[], int n) {
    int i;
    for (i = 0; i < n; i++)
        arr[i] = arr[i] * 2 + 1;
}
int main() {
    int arr[4] = {1, 2, 3, 4}, i;
    modify(arr, 4);
    for (i = 0; i < 4; i++) printf("%d ", arr[i]);
    return 0;
}`,
    answer: {
      directAnswer: "Because array names decay to pointers, `modify()` directly updates the caller's array elements by $2x + 1$, printing **3 5 7 9 **.",
      expectedOutput: "3 5 7 9 ",
      explanation: [
        "In C, arrays are passed by reference via pointers.",
        "`arr[0]`: $1 \\times 2 + 1 = 3$",
        "`arr[1]`: $2 \\times 2 + 1 = 5$",
        "`arr[2]`: $3 \\times 2 + 1 = 7$",
        "`arr[3]`: $4 \\times 2 + 1 = 9$",
        "Printed with trailing spaces: `3 5 7 9 `."
      ],
      interviewTip: "Modifications made to array parameters inside functions are permanently visible to the caller."
    }
  },
  {
    id: 104,
    pdfId: "Q103",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Strings",
    subtopic: "String with Pointer Manipulation",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    char str[] = \"PLACEMENT\";\n    char *p = str;\n    while (*p) {\n        if ((p - str) % 2 == 0) printf(\"%c\", *p);\n        p++;\n    }\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    char str[] = "PLACEMENT";
    char *p = str;
    while (*p) {
        if ((p - str) % 2 == 0) printf("%c", *p);
        p++;
    }
    return 0;
}`,
    answer: {
      directAnswer: "`p - str` yields the 0-based character index. The condition `(p - str) % 2 == 0` prints characters at even indices (0, 2, 4, 6, 8), outputting **PAEET**.",
      expectedOutput: "PAEET",
      dryRunTable: {
        headers: ["Index (p - str)", "Character *p", "Index % 2 == 0", "Printed?"],
        rows: [
          ["0", "'P'", "True", "'P'"],
          ["1", "'L'", "False", "-"],
          ["2", "'A'", "True", "'A'"],
          ["3", "'C'", "False", "-"],
          ["4", "'E'", "True", "'E'"],
          ["5", "'M'", "False", "-"],
          ["6", "'E'", "True", "'E'"],
          ["7", "'N'", "False", "-"],
          ["8", "'T'", "True", "'T'"]
        ]
      },
      interviewTip: "Pointer subtraction `p - str` gives the exact integer element count (index offset) between two pointers of the same type."
    }
  },
  {
    id: 105,
    pdfId: "Q104",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Strings",
    subtopic: "String Length via Recursion Dry Run",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint myLen(char *s) {\n    if (*s == '\\0') return 0;\n    return 1 + myLen(s + 1);\n}\nint main() {\n    printf(\"%d\", myLen(\"SONA\"));\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int myLen(char *s) {
    if (*s == '\\0') return 0;
    return 1 + myLen(s + 1);
}
int main() {
    printf("%d", myLen("SONA"));
    return 0;
}`,
    answer: {
      directAnswer: "The recursive function `myLen` advances through the string until hitting `'\\0'`, counting 4 characters in \"SONA\" to output **4**.",
      expectedOutput: "4",
      explanation: [
        "`myLen(\"SONA\") = 1 + myLen(\"ONA\")`",
        "`myLen(\"ONA\")  = 1 + myLen(\"NA\")`",
        "`myLen(\"NA\")   = 1 + myLen(\"A\")`",
        "`myLen(\"A\")    = 1 + myLen(\"\")`",
        "`myLen(\"\")     = 0` (base case: `*s == '\\0'`)",
        "Unwinds: $1 + 1 + 1 + 1 + 0 = 4$."
      ],
      interviewTip: "This is the classic recursive implementation of standard library `strlen()`."
    }
  },
  {
    id: 106,
    pdfId: "Q105",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Strings",
    subtopic: "Nested String Comparison",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\n#include <string.h>\nint main() {\n    char a[] = \"abc\", b[] = \"abd\";\n    printf(\"%d\", strcmp(a, b));\n    return 0;\n}",
    givenCode: `#include <stdio.h>
#include <string.h>
int main() {
    char a[] = "abc", b[] = "abd";
    printf("%d", strcmp(a, b));
    return 0;
}`,
    answer: {
      directAnswer: "`strcmp` compares strings lexicographically by subtracting ASCII values of the first differing character: `'c' - 'd' = 99 - 100 =` **-1**.",
      expectedOutput: "-1",
      explanation: [
        "`strcmp` compares characters from left to right:",
        "Index 0: `'a' == 'a'` -> continues.",
        "Index 1: `'b' == 'b'` -> continues.",
        "Index 2: `'c'` vs `'d'` -> difference is `'c' - 'd' = 99 - 100 = -1`.",
        "Returns negative integer (specifically -1 in standard libc), printed as `-1`."
      ],
      interviewTip: "`strcmp(s1, s2)` returns: 0 if strings are equal, `< 0` if `s1 < s2`, and `> 0` if `s1 > s2`."
    }
  },
  {
    id: 107,
    pdfId: "Q106",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Pointers",
    subtopic: "Pointer to Pointer Dry Run",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    int a = 5;\n    int *p = &a;\n    int **q = &p;\n    **q = **q + 10;\n    *p = *p + 5;\n    printf(\"%d\", a);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int a = 5;
    int *p = &a;
    int **q = &p;
    **q = **q + 10;
    *p = *p + 5;
    printf("%d", a);
    return 0;
}`,
    answer: {
      directAnswer: "Both `*p` and `**q` refer to the variable `a`. First `a` becomes $5 + 10 = 15$, then `a` becomes $15 + 5 = 20$. The output is **20**.",
      expectedOutput: "20",
      explanation: [
        "`a` starts at 5.",
        "`p` points to `a`, and `q` points to `p`.",
        "`**q = **q + 10` dereferences twice, modifying `a`: $a = 5 + 10 = 15$.",
        "`*p = *p + 5` dereferences once, modifying `a`: $a = 15 + 5 = 20$.",
        "`printf(\"%d\", a)` prints 20."
      ],
      interviewTip: "Dereferencing a pointer-to-pointer `**q` directly accesses the target data location that `*q` points to."
    }
  },
  {
    id: 108,
    pdfId: "Q107",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Pointers",
    subtopic: "Array of Pointers with Loop",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    int a = 1, b = 2, c = 3;\n    int *arr[3] = {&a, &b, &c};\n    int i, sum = 0;\n    for (i = 0; i < 3; i++) sum += *arr[i] * (i + 1);\n    printf(\"%d\", sum);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int a = 1, b = 2, c = 3;
    int *arr[3] = {&a, &b, &c};
    int i, sum = 0;
    for (i = 0; i < 3; i++) sum += *arr[i] * (i + 1);
    printf("%d", sum);
    return 0;
}`,
    answer: {
      directAnswer: "The array of pointers holds the addresses of `a`, `b`, and `c`. The loop calculates $(1 \\times 1) + (2 \\times 2) + (3 \\times 3) = 1 + 4 + 9 =$ **14**.",
      expectedOutput: "14",
      explanation: [
        "$i = 0$: `*arr[0] * 1 = *(&a) * 1 = 1 * 1 = 1`. `sum = 1`.",
        "$i = 1$: `*arr[1] * 2 = *(&b) * 2 = 2 * 2 = 4`. `sum = 1 + 4 = 5`.",
        "$i = 2$: `*arr[2] * 3 = *(&c) * 3 = 3 * 3 = 9`. `sum = 5 + 9 = 14`.",
        "Final output: 14."
      ],
      interviewTip: "`int *arr[3]` is an array of 3 pointers to int. Don't confuse it with `int (*arr)[3]`, which is a pointer to an array of 3 ints!"
    }
  },
  {
    id: 109,
    pdfId: "Q108",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Pointers",
    subtopic: "Pointer Arithmetic with 2D Array",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    int arr[2][3] = {{1,2,3},{4,5,6}};\n    int *p = &arr[0][0];\n    printf(\"%d\", *(p + 2) + *(p + 4));\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int arr[2][3] = {{1,2,3},{4,5,6}};
    int *p = &arr[0][0];
    printf("%d", *(p + 2) + *(p + 4));
    return 0;
}`,
    answer: {
      directAnswer: "In row-major contiguous memory, `*(p + 2)` is `arr[0][2]` (value 3) and `*(p + 4)` is `arr[1][1]` (value 5). The sum $3 + 5 =$ **8**.",
      expectedOutput: "8",
      explanation: [
        "In linear row-major memory order, the array elements are: `{1, 2, 3, 4, 5, 6}`.",
        "`p` points to index 0 (value 1).",
        "`*(p + 2)` points to index 2 (value 3).",
        "`*(p + 4)` points to index 4 (value 5).",
        "Expression: $3 + 5 = 8$."
      ],
      interviewTip: "2D arrays in C are stored in flat contiguous memory, so `p[row * COLS + col]` is identical to `arr[row][col]`."
    }
  },
  {
    id: 110,
    pdfId: "Q109",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Structures",
    subtopic: "Structure Passed to Function",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nstruct Point { int x, y; };\nvoid move(struct Point p) {\n    p.x += 10;\n    p.y += 10;\n}\nint main() {\n    struct Point pt = {1, 2};\n    move(pt);\n    printf(\"%d %d\", pt.x, pt.y);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
struct Point { int x, y; };
void move(struct Point p) {
    p.x += 10;
    p.y += 10;
}
int main() {
    struct Point pt = {1, 2};
    move(pt);
    printf("%d %d", pt.x, pt.y);
    return 0;
}`,
    answer: {
      directAnswer: "`pt` is passed by value (a complete copy is made onto `move()`'s stack frame). Modifications inside `move()` do not alter the caller's structure, printing **1 2**.",
      expectedOutput: "1 2",
      explanation: [
        "`move(struct Point p)` receives a copy of `pt`.",
        "The modifications `p.x += 10` and `p.y += 10` only affect the local copy inside `move()`.",
        "In `main()`, `pt.x` remains 1 and `pt.y` remains 2.",
        "Output is `1 2`."
      ],
      interviewTip: "Unlike arrays (which decay to pointers), structures in C are passed by value by default!"
    }
  },
  {
    id: 111,
    pdfId: "Q110",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Structures",
    subtopic: "Structure Passed by Pointer",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nstruct Point { int x, y; };\nvoid move(struct Point *p) {\n    p->x += 10;\n    p->y += 10;\n}\nint main() {\n    struct Point pt = {1, 2};\n    move(&pt);\n    printf(\"%d %d\", pt.x, pt.y);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
struct Point { int x, y; };
void move(struct Point *p) {
    p->x += 10;
    p->y += 10;
}
int main() {
    struct Point pt = {1, 2};
    move(&pt);
    printf("%d %d", pt.x, pt.y);
    return 0;
}`,
    answer: {
      directAnswer: "Here `&pt` is passed by address (pointer). The arrow operator `p->x` directly mutates `main`'s memory, yielding **11 12**.",
      expectedOutput: "11 12",
      explanation: [
        "`move(&pt)` passes the memory address of `pt`.",
        "`p->x += 10` changes `pt.x` from 1 to 11.",
        "`p->y += 10` changes `pt.y` from 2 to 12.",
        "Inside `main`, `printf(\"%d %d\", pt.x, pt.y)` outputs `11 12`."
      ],
      interviewTip: "Passing structures by pointer (`struct Type *`) is preferred in production code because it avoids the overhead of copying the entire structure."
    }
  },
  {
    id: 112,
    pdfId: "Q111",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Structures",
    subtopic: "Array of Structures Dry Run",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nstruct Item { int price; };\nint main() {\n    struct Item items[3] = {{100}, {200}, {300}};\n    int i, total = 0;\n    for (i = 0; i < 3; i++)\n        total += items[i].price * (i + 1);\n    printf(\"%d\", total);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
struct Item { int price; };
int main() {
    struct Item items[3] = {{100}, {200}, {300}};
    int i, total = 0;
    for (i = 0; i < 3; i++)
        total += items[i].price * (i + 1);
    printf("%d", total);
    return 0;
}`,
    answer: {
      directAnswer: "The program computes a weighted sum of prices: $(100 \\times 1) + (200 \\times 2) + (300 \\times 3) = 100 + 400 + 900 =$ **1400**.",
      expectedOutput: "1400",
      dryRunTable: {
        headers: ["i", "items[i].price", "(i + 1)", "Term Added", "Running total"],
        rows: [
          ["0", "100", "1", "100 * 1 = 100", "100"],
          ["1", "200", "2", "200 * 2 = 400", "500"],
          ["2", "300", "3", "300 * 3 = 900", "1400"]
        ]
      },
      explanation: [
        "Iteration 0: `total = 0 + 100 * 1 = 100`.",
        "Iteration 1: `total = 100 + 200 * 2 = 500`.",
        "Iteration 2: `total = 500 + 300 * 3 = 1400`.",
        "Loop ends, outputs 1400."
      ],
      interviewTip: "Array of structures `items[i].member` uses dot operator because `items[i]` is a concrete structure element, not a pointer."
    }
  },
  {
    id: 113,
    pdfId: "Q112",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Dynamic Memory Allocation",
    subtopic: "malloc with Loop Dry Run",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    int *p = (int *)malloc(5 * sizeof(int));\n    int i;\n    for (i = 0; i < 5; i++) p[i] = i * i;\n    printf(\"%d\", p[2] + p[4]);\n    free(p);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
#include <stdlib.h>
int main() {
    int *p = (int *)malloc(5 * sizeof(int));
    int i;
    for (i = 0; i < 5; i++) p[i] = i * i;
    printf("%d", p[2] + p[4]);
    free(p);
    return 0;
}`,
    answer: {
      directAnswer: "The heap array stores squares of indices $\{0, 1, 4, 9, 16\}$. Then $p[2] + p[4] = 4 + 16 =$ **20**.",
      expectedOutput: "20",
      explanation: [
        "`p[0] = 0*0 = 0`",
        "`p[1] = 1*1 = 1`",
        "`p[2] = 2*2 = 4`",
        "`p[3] = 3*3 = 9`",
        "`p[4] = 4*4 = 16`",
        "Expression: $p[2] + p[4] = 4 + 16 = 20$."
      ],
      interviewTip: "Always ensure `free(p)` is called to release heap memory."
    }
  },
  {
    id: 114,
    pdfId: "Q113",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Dynamic Memory Allocation",
    subtopic: "calloc Default Values",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    int *p = (int *)calloc(4, sizeof(int));\n    p[1] = 5;\n    printf(\"%d %d %d\", p[0], p[1], p[2]);\n    free(p);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
#include <stdlib.h>
int main() {
    int *p = (int *)calloc(4, sizeof(int));
    p[1] = 5;
    printf("%d %d %d", p[0], p[1], p[2]);
    free(p);
    return 0;
}`,
    answer: {
      directAnswer: "`calloc` initializes all allocated bytes to zero. After setting `p[1] = 5`, indices `p[0]` and `p[2]` remain 0, outputting **0 5 0**.",
      expectedOutput: "0 5 0",
      explanation: [
        "`calloc(4, sizeof(int))` creates an array of 4 integers initialized to `{0, 0, 0, 0}`.",
        "`p[1] = 5` modifies index 1: array is now `{0, 5, 0, 0}`.",
        "`printf` prints `p[0]`, `p[1]`, `p[2]` as `0 5 0`."
      ],
      interviewTip: "If this were `malloc`, `p[0]` and `p[2]` would contain unpredictable garbage values."
    }
  },
  {
    id: 115,
    pdfId: "Q114",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Bitwise Operators",
    subtopic: "Combined Bitwise Expression",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    int a = 12, b = 10;\n    printf(\"%d\", (a & b) | (a ^ b));\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int a = 12, b = 10;
    printf("%d", (a & b) | (a ^ b));
    return 0;
}`,
    answer: {
      directAnswer: "Bitwise calculation: $a = 12$ (`1100_2`), $b = 10$ (`1010_2`). $(a \\& b) = 8$, $(a \\oplus b) = 6$, and $8 \\mid 6 = 14$. The output is **14**.",
      expectedOutput: "14",
      explanation: [
        "$a = 12 = 1100_2$, $b = 10 = 1010_2$.",
        "Bitwise AND: $1100_2 \\& 1010_2 = 1000_2 = 8$.",
        "Bitwise XOR: $1100_2 \\oplus 1010_2 = 0110_2 = 6$.",
        "Bitwise OR: $1000_2 \\mid 0110_2 = 1110_2 = 14$.",
        "*(Mathematical identity: $(A \\& B) \\mid (A \\oplus B) \\equiv (A \\mid B) = 12 \\mid 10 = 14$)*."
      ],
      interviewTip: "Boolean algebra fact: $(A \\cap B) \\cup (A \\oplus B) = A \\cup B$."
    }
  },
  {
    id: 116,
    pdfId: "Q115",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Bitwise Operators",
    subtopic: "Shift Operators Combined",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    int a = 5;\n    a = (a << 2) | (a >> 1);\n    printf(\"%d\", a);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int a = 5;
    a = (a << 2) | (a >> 1);
    printf("%d", a);
    return 0;
}`,
    answer: {
      directAnswer: "$a = 5$ (`0000 0101_2`). Left shift $5 \\ll 2 = 20$ (`0001 0100_2`), right shift $5 \\gg 1 = 2$ (`0000 0010_2`). Bitwise OR gives $20 \\mid 2 = 22$. Output is **22**.",
      expectedOutput: "22",
      explanation: [
        "`a << 2`: $5 \\times 2^2 = 20$ (`10100` in binary).",
        "`a >> 1`: $5 / 2 = 2$ (`00010` in binary).",
        "Bitwise OR: $10100_2 \\mid 00010_2 = 10110_2 = 16 + 4 + 2 = 22$."
      ],
      interviewTip: "Bitwise shifting is equivalent to arithmetic multiplication and division by powers of 2."
    }
  },
  {
    id: 117,
    pdfId: "Q116",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Bitwise Operators",
    subtopic: "Bit Toggle Dry Run",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    int a = 9;\n    a = a ^ (1 << 1);\n    printf(\"%d\", a);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int a = 9;
    a = a ^ (1 << 1);
    printf("%d", a);
    return 0;
}`,
    answer: {
      directAnswer: "The expression `a ^ (1 << 1)` toggles the bit at position 1 (0-indexed). $9$ (`1001_2`) with bit 1 toggled to 1 becomes $11$ (`1011_2`). Output is **11**.",
      expectedOutput: "11",
      explanation: [
        "`1 << 1` shifts 1 left by 1 position: `0010` in binary (value 2).",
        "$a = 9 = 1001$ in binary.",
        "$a \\oplus 2 = 1001_2 \\oplus 0010_2 = 1011_2 = 11$ in decimal.",
        "Output: 11."
      ],
      interviewTip: "Standard bit manipulation idioms: Set bit: `x |= (1 << k)`, Clear bit: `x &= ~(1 << k)`, Toggle bit: `x ^= (1 << k)`, Check bit: `(x >> k) & 1`."
    }
  },
  {
    id: 118,
    pdfId: "Q117",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Loops",
    subtopic: "Do-While with Break/Continue",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    int i = 0, sum = 0;\n    do {\n        i++;\n        if (i % 2 == 0) continue;\n        if (i > 7) break;\n        sum += i;\n    } while (i < 10);\n    printf(\"%d\", sum);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int i = 0, sum = 0;
    do {
        i++;
        if (i % 2 == 0) continue;
        if (i > 7) break;
        sum += i;
    } while (i < 10);
    printf("%d", sum);
    return 0;
}`,
    answer: {
      directAnswer: "The loop increments `i` from 1 to 9. Even numbers trigger `continue`, odd numbers 1, 3, 5, 7 add to `sum`, and when $i=9$, `i > 7` triggers `break`. Total sum $1+3+5+7=$ **16**.",
      expectedOutput: "16",
      dryRunTable: {
        headers: ["i value", "i % 2 == 0?", "i > 7?", "sum action", "sum"],
        rows: [
          ["1", "No", "No", "sum += 1", "1"],
          ["2", "Yes (continue)", "-", "Skipped", "1"],
          ["3", "No", "No", "sum += 3", "4"],
          ["4", "Yes (continue)", "-", "Skipped", "4"],
          ["5", "No", "No", "sum += 5", "9"],
          ["6", "Yes (continue)", "-", "Skipped", "9"],
          ["7", "No", "No", "sum += 7", "16"],
          ["8", "Yes (continue)", "-", "Skipped", "16"],
          ["9", "No", "Yes (break!)", "Loop ends", "16"]
        ]
      },
      interviewTip: "Pay close attention: at $i=8$, `continue` skips the `i > 7` check; at $i=9$, `i % 2 != 0`, so `i > 7` triggers `break` before adding 9!"
    }
  },
  {
    id: 119,
    pdfId: "Q118",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Functions",
    subtopic: "Function with Default Global Access",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint x = 10;\nint fun(int x) {\n    x = x + 5;\n    return x;\n}\nint main() {\n    int result = fun(x);\n    printf(\"%d %d\", x, result);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int x = 10;
int fun(int x) {
    x = x + 5;
    return x;
}
int main() {
    int result = fun(x);
    printf("%d %d", x, result);
    return 0;
}`,
    answer: {
      directAnswer: "The parameter `x` inside `fun` shadows the global variable `x`. The local parameter receives $10 + 5 = 15$, while global `x` in `main` remains untouched at 10. Output is **10 15**.",
      expectedOutput: "10 15",
      explanation: [
        "Global `x` is defined as 10.",
        "In `fun(int x)`, parameter `x` shadows (hides) global `x` within `fun`'s scope.",
        "`fun` modifies only its local parameter `x`, returning 15.",
        "In `main()`, `result` is assigned 15.",
        "When `printf(\"%d %d\", x, result)` is called, `x` accesses global `x` (10), printing `10 15`."
      ],
      interviewTip: "Variable shadowing is an interview staple: local parameters always take precedence over global variables of the same name."
    }
  },
  {
    id: 120,
    pdfId: "Q119",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Recursion",
    subtopic: "Recursive Array Sum via Pointer",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint sumArr(int *arr, int n) {\n    if (n == 0) return 0;\n    return *arr + sumArr(arr + 1, n - 1);\n}\nint main() {\n    int arr[] = {1, 2, 3, 4};\n    printf(\"%d\", sumArr(arr, 4));\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int sumArr(int *arr, int n) {
    if (n == 0) return 0;
    return *arr + sumArr(arr + 1, n - 1);
}
int main() {
    int arr[] = {1, 2, 3, 4};
    printf("%d", sumArr(arr, 4));
    return 0;
}`,
    answer: {
      directAnswer: "The recursive function traverses the array by incrementing the pointer `arr + 1` at each step, summing all elements: $1 + 2 + 3 + 4 = $ **10**.",
      expectedOutput: "10",
      explanation: [
        "`sumArr(arr, 4) = 1 + sumArr(arr+1, 3)`",
        "`sumArr(arr+1, 3) = 2 + sumArr(arr+2, 2)`",
        "`sumArr(arr+2, 2) = 3 + sumArr(arr+3, 1)`",
        "`sumArr(arr+3, 1) = 4 + sumArr(arr+4, 0)`",
        "`sumArr(arr+4, 0) = 0` (base case: $n=0$).",
        "Total sum = $1 + 2 + 3 + 4 + 0 = 10$."
      ],
      interviewTip: "Pointer arithmetic in recursion: `arr + 1` shifts the window forward by one element on each recursive frame."
    }
  },
  {
    id: 121,
    pdfId: "Q120",
    sectionId: 3,
    sectionName: "Section 3: Placement Coding & Hard Dry Run",
    topic: "Arrays",
    subtopic: "Array Swap via Nested Loop",
    difficulty: "Hard",
    type: "Dry Run",
    question: "Dry-run the following program step by step and write down the exact output:\n\n#include <stdio.h>\nint main() {\n    int arr[5] = {5, 3, 8, 1, 9}, i, j, temp;\n    for (i = 0; i < 4; i++)\n        for (j = 0; j < 4 - i; j++)\n            if (arr[j] > arr[j + 1]) {\n                temp = arr[j];\n                arr[j] = arr[j + 1];\n                arr[j + 1] = temp;\n            }\n    printf(\"%d %d %d\", arr[0], arr[2], arr[4]);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int arr[5] = {5, 3, 8, 1, 9}, i, j, temp;
    for (i = 0; i < 4; i++)
        for (j = 0; j < 4 - i; j++)
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
    printf("%d %d %d", arr[0], arr[2], arr[4]);\n    return 0;\n}`,
    answer: {
      directAnswer: "The nested loops implement standard Bubble Sort ascending order, sorting the array into $\{1, 3, 5, 8, 9\}$. Printing `arr[0]`, `arr[2]`, and `arr[4]` outputs **1 5 9**.",
      expectedOutput: "1 5 9",
      explanation: [
        "Initial array: `{5, 3, 8, 1, 9}`.",
        "The code is a classic Bubble Sort.",
        "Sorted array: `{1, 3, 5, 8, 9}`.",
        "`arr[0]` = 1 (minimum element).",
        "`arr[2]` = 5 (median element).",
        "`arr[4]` = 9 (maximum element).",
        "Output: `1 5 9`."
      ],
      interviewTip: "Recognizing standard sorting patterns instantly saves valuable time during written placement tests."
    }
  }
];
