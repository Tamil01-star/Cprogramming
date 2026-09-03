// Section 4: Output Prediction Questions (Questions 152 to 181)

module.exports = [
  {
    id: 152,
    pdfId: "Q151",
    sectionId: 4,
    sectionName: "Section 4: Output Prediction Questions",
    topic: "Increment & Decrement",
    subtopic: "Pre vs Post",
    difficulty: "Basic",
    type: "Output Prediction",
    question: "Predict the output of the following program:\n\n#include <stdio.h>\nint main() {\n    int i = 5;\n    printf(\"%d %d %d\", i++, ++i, i);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int i = 5;
    printf("%d %d %d", i++, ++i, i);
    return 0;
}`,
    answer: {
      directAnswer: "Under GCC x86 right-to-left argument evaluation, the rightmost argument is evaluated first ($i=5$), then `++i` increments to 6, then `i++` yields 6 and increments to 7, resulting in **6 7 7** (or **7 7 5** depending on compiler).",
      expectedOutput: "6 7 7",
      explanation: [
        "In the C standard (ISO C99/C11), modifying a variable multiple times within a single sequence point (such as inside a `printf` argument list) invokes **Undefined Behavior**.",
        "However, most interview placement compilers (like GCC on x86) evaluate arguments right-to-left:",
        "1. Rightmost argument `i` is read as 5.",
        "2. Middle argument `++i` increments `i` to 6 and evaluates to 6.",
        "3. Leftmost argument `i++` evaluates to 6, then increments `i` to 7.",
        "Printed output on GCC is typically `6 7 7`."
      ],
      interviewTip: "Always mention to the interviewer: 'This expression contains undefined behavior according to the C standard, though GCC typically evaluates right-to-left producing 6 7 7.'"
    }
  },
  {
    id: 153,
    pdfId: "Q152",
    sectionId: 4,
    sectionName: "Section 4: Output Prediction Questions",
    topic: "Operators",
    subtopic: "Operator Precedence",
    difficulty: "Medium",
    type: "Output Prediction",
    question: "Predict the output of the following program:\n\n#include <stdio.h>\nint main() {\n    int a = 5, b = 2, c;\n    c = a / b * b + a % b;\n    printf(\"%d\", c);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int a = 5, b = 2, c;
    c = a / b * b + a % b;
    printf("%d", c);
    return 0;
}`,
    answer: {
      directAnswer: "Multiplicative operators (`/`, `*`, `%`) have equal precedence and associate left-to-right: `(5 / 2) * 2 + (5 % 2) = 2 * 2 + 1 = 4 + 1 =` **5**.",
      expectedOutput: "5",
      explanation: [
        "1. `a / b` evaluates first: $5 / 2 = 2$ (integer division truncates decimal).",
        "2. Multiplied by `b`: $2 \\times 2 = 4$.",
        "3. Modulus `a % b`: $5 \\pmod 2 = 1$.",
        "4. Addition: $4 + 1 = 5$.",
        "*(Note: By the division algorithm definition, $(a / b) \\times b + (a \\% b) \\equiv a$)*."
      ],
      interviewTip: "This proves the fundamental division identity in C: `(a / b) * b + a % b == a`."
    }
  },
  {
    id: 154,
    pdfId: "Q153",
    sectionId: 4,
    sectionName: "Section 4: Output Prediction Questions",
    topic: "Loops",
    subtopic: "For Loop",
    difficulty: "Basic",
    type: "Output Prediction",
    question: "Predict the output of the following program:\n\n#include <stdio.h>\nint main() {\n    int i;\n    for (i = 0; i < 5; i++) {\n        if (i == 3) break;\n        printf(\"%d \", i);\n    }\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int i;
    for (i = 0; i < 5; i++) {
        if (i == 3) break;
        printf("%d ", i);
    }
    return 0;
}`,
    answer: {
      directAnswer: "The loop prints values 0, 1, and 2. When $i = 3$, `break` terminates the loop before printing, producing **0 1 2 **.",
      expectedOutput: "0 1 2 ",
      explanation: [
        "$i = 0$: prints `0 `",
        "$i = 1$: prints `1 `",
        "$i = 2$: prints `2 `",
        "$i = 3$: `i == 3` is true, `break` immediately exits loop.",
        "Output: `0 1 2 `."
      ],
      interviewTip: "`break` halts the loop immediately without executing subsequent statements in the loop body."
    }
  },
  {
    id: 155,
    pdfId: "Q154",
    sectionId: 4,
    sectionName: "Section 4: Output Prediction Questions",
    topic: "Loops",
    subtopic: "Continue Statement",
    difficulty: "Basic",
    type: "Output Prediction",
    question: "Predict the output of the following program:\n\n#include <stdio.h>\nint main() {\n    int i;\n    for (i = 1; i <= 5; i++) {\n        if (i % 2 == 0) continue;\n        printf(\"%d \", i);\n    }\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int i;
    for (i = 1; i <= 5; i++) {
        if (i % 2 == 0) continue;
        printf("%d ", i);
    }
    return 0;
}`,
    answer: {
      directAnswer: "`continue` skips the `printf` for even numbers (2 and 4), printing only odd numbers: **1 3 5 **.",
      expectedOutput: "1 3 5 ",
      explanation: [
        "$i = 1$: odd -> prints `1 `",
        "$i = 2$: even -> `continue` skips to next iteration",
        "$i = 3$: odd -> prints `3 `",
        "$i = 4$: even -> `continue` skips",
        "$i = 5$: odd -> prints `5 `",
        "Output: `1 3 5 `."
      ],
      interviewTip: "In a `for` loop, `continue` jumps to the increment step (`i++`), whereas in a `while` loop, you must be careful not to skip the increment!"
    }
  },
  {
    id: 156,
    pdfId: "Q155",
    sectionId: 4,
    sectionName: "Section 4: Output Prediction Questions",
    topic: "Nested Loops",
    subtopic: "Nested For Loop",
    difficulty: "Medium",
    type: "Output Prediction",
    question: "Predict the output of the following program:\n\n#include <stdio.h>\nint main() {\n    int i, j;\n    for (i = 1; i <= 3; i++) {\n        for (j = 1; j <= i; j++)\n            printf(\"%d\", j);\n        printf(\"\\n\");\n    }\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int i, j;
    for (i = 1; i <= 3; i++) {
        for (j = 1; j <= i; j++)
            printf("%d", j);
        printf("\\n");
    }
    return 0;
}`,
    answer: {
      directAnswer: "Prints a right-angled numeric triangle with each row $i$ printing numbers from 1 up to $i$:\n1\n12\n123",
      expectedOutput: "1\n12\n123",
      explanation: [
        "Row $i = 1$: inner loop runs for $j = 1$, prints `1\\n`.",
        "Row $i = 2$: inner loop runs for $j = 1, 2$, prints `12\\n`.",
        "Row $i = 3$: inner loop runs for $j = 1, 2, 3$, prints `123\\n`."
      ],
      interviewTip: "Row count is governed by outer loop; elements per row are governed by inner loop boundary $j \\le i$."
    }
  },
  {
    id: 157,
    pdfId: "Q156",
    sectionId: 4,
    sectionName: "Section 4: Output Prediction Questions",
    topic: "Functions",
    subtopic: "Default Argument Behaviour",
    difficulty: "Medium",
    type: "Output Prediction",
    question: "Predict the output of the following program:\n\n#include <stdio.h>\nint modify(int x) {\n    x = x + 10;\n    return x;\n}\nint main() {\n    int a = 5;\n    modify(a);\n    printf(\"%d\", a);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int modify(int x) {
    x = x + 10;
    return x;
}
int main() {
    int a = 5;
    modify(a);
    printf("%d", a);
    return 0;
}`,
    answer: {
      directAnswer: "Because parameters in C are passed by value, `modify` alters only its local copy `x`. The variable `a` in `main` remains unchanged at **5**.",
      expectedOutput: "5",
      explanation: [
        "`modify(a)` passes a copy of `a`'s value (5) to `x`.",
        "`x = x + 10` changes `x` to 15 inside `modify`'s stack frame.",
        "The returned value 15 is discarded because `main` does not assign it (`a = modify(a);` was not written).",
        "Thus, `a` remains 5."
      ],
      interviewTip: "To update `a`, either assign the return value `a = modify(a);` or pass a pointer `modify(&a);`."
    }
  },
  {
    id: 158,
    pdfId: "Q157",
    sectionId: 4,
    sectionName: "Section 4: Output Prediction Questions",
    topic: "Functions",
    subtopic: "Return by Reference",
    difficulty: "Medium",
    type: "Output Prediction",
    question: "Predict the output of the following program:\n\n#include <stdio.h>\nvoid modify(int *x) {\n    *x = *x + 10;\n}\nint main() {\n    int a = 5;\n    modify(&a);\n    printf(\"%d\", a);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
void modify(int *x) {
    *x = *x + 10;
}
int main() {
    int a = 5;
    modify(&a);
    printf("%d", a);
    return 0;
}`,
    answer: {
      directAnswer: "Passing `&a` provides the memory address of `a`. Dereferencing `*x += 10` directly modifies `a` in `main`, changing it to **15**.",
      expectedOutput: "15",
      explanation: [
        "`&a` passes the pointer address of `a`.",
        "Inside `modify`, `*x` refers to the memory location of `a`.",
        "`*x = *x + 10` modifies `a` from 5 to 15.",
        "`printf(\"%d\", a)` prints 15."
      ],
      interviewTip: "This is the classic implementation of simulated pass-by-reference using pointers in C."
    }
  },
  {
    id: 159,
    pdfId: "Q158",
    sectionId: 4,
    sectionName: "Section 4: Output Prediction Questions",
    topic: "Recursion",
    subtopic: "Recursive Sum",
    difficulty: "Medium",
    type: "Output Prediction",
    question: "Predict the output of the following program:\n\n#include <stdio.h>\nint fun(int n) {\n    if (n == 0) return 0;\n    return n + fun(n - 1);\n}\nint main() {\n    printf(\"%d\", fun(4));\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int fun(int n) {
    if (n == 0) return 0;
    return n + fun(n - 1);
}
int main() {
    printf("%d", fun(4));
    return 0;
}`,
    answer: {
      directAnswer: "Recursively sums the first 4 natural numbers: $4 + 3 + 2 + 1 + 0 = $ **10**.",
      expectedOutput: "10",
      explanation: [
        "`fun(4) = 4 + fun(3)`",
        "`fun(3) = 3 + fun(2)`",
        "`fun(2) = 2 + fun(1)`",
        "`fun(1) = 1 + fun(0)`",
        "`fun(0) = 0` (base case)",
        "Result: $4 + 3 + 2 + 1 + 0 = 10$."
      ],
      interviewTip: "Mathematical formula for sum of first $n$ natural numbers: $n(n + 1) / 2 = 4 \\times 5 / 2 = 10$."
    }
  },
  {
    id: 160,
    pdfId: "Q159",
    sectionId: 4,
    sectionName: "Section 4: Output Prediction Questions",
    topic: "Recursion",
    subtopic: "Recursion Order",
    difficulty: "Medium",
    type: "Output Prediction",
    question: "Predict the output of the following program:\n\n#include <stdio.h>\nvoid printNum(int n) {\n    if (n == 0) return;\n    printf(\"%d \", n);\n    printNum(n - 1);\n}\nint main() {\n    printNum(3);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
void printNum(int n) {
    if (n == 0) return;
    printf("%d ", n);
    printNum(n - 1);
}
int main() {
    printNum(3);
    return 0;
}`,
    answer: {
      directAnswer: "Because `printf` is executed before the recursive call (pre-order execution), numbers are printed in descending order: **3 2 1 **.",
      expectedOutput: "3 2 1 ",
      explanation: [
        "Call 1 (`n = 3`): prints `3 `, then calls `printNum(2)`.",
        "Call 2 (`n = 2`): prints `2 `, then calls `printNum(1)`.",
        "Call 3 (`n = 1`): prints `1 `, then calls `printNum(0)`.",
        "Call 4 (`n = 0`): hits base case `return`.",
        "Final output: `3 2 1 `."
      ],
      interviewTip: "If `printf` were placed *after* `printNum(n - 1)`, the output would reverse to `1 2 3 ` (post-order printing during stack unwinding)!"
    }
  },
  {
    id: 161,
    pdfId: "Q160",
    sectionId: 4,
    sectionName: "Section 4: Output Prediction Questions",
    topic: "Pointers",
    subtopic: "Pointer Dereference",
    difficulty: "Basic",
    type: "Output Prediction",
    question: "Predict the output of the following program:\n\n#include <stdio.h>\nint main() {\n    int a = 10;\n    int *p = &a;\n    *p = *p + 5;\n    printf(\"%d\", a);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int a = 10;
    int *p = &a;
    *p = *p + 5;
    printf("%d", a);
    return 0;
}`,
    answer: {
      directAnswer: "Pointer `p` points to `a`. Updating `*p` changes `a`'s value from 10 to $10 + 5 =$ **15**.",
      expectedOutput: "15",
      explanation: [
        "`p` stores the address of `a` (`&a`).",
        "`*p` dereferences `p`, accessing the memory content of `a`.",
        "`*p = *p + 5` sets `a = 10 + 5 = 15`.",
        "`printf(\"%d\", a)` prints 15."
      ],
      interviewTip: "Dereference operator `*` acts as an alias to the original variable."
    }
  },
  {
    id: 162,
    pdfId: "Q161",
    sectionId: 4,
    sectionName: "Section 4: Output Prediction Questions",
    topic: "Pointers",
    subtopic: "Pointer Arithmetic",
    difficulty: "Medium",
    type: "Output Prediction",
    question: "Predict the output of the following program:\n\n#include <stdio.h>\nint main() {\n    int arr[] = {10, 20, 30, 40};\n    int *p = arr;\n    printf(\"%d\", *(p + 2));\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int arr[] = {10, 20, 30, 40};
    int *p = arr;
    printf("%d", *(p + 2));
    return 0;
}`,
    answer: {
      directAnswer: "Advancing `p + 2` moves 2 integer elements ahead in memory, pointing to `arr[2]` with value **30**.",
      expectedOutput: "30",
      explanation: [
        "`p` points to `arr[0]` (10).",
        "`p + 2` points to `&arr[2]`.",
        "`*(p + 2)` accesses `arr[2] = 30`.",
        "Output: 30."
      ],
      interviewTip: "Pointer arithmetic automatically scales by the size of the underlying data type (`sizeof(int)`)."
    }
  },
  {
    id: 163,
    pdfId: "Q162",
    sectionId: 4,
    sectionName: "Section 4: Output Prediction Questions",
    topic: "Pointers",
    subtopic: "Double Pointer",
    difficulty: "Medium",
    type: "Output Prediction",
    question: "Predict the output of the following program:\n\n#include <stdio.h>\nint main() {\n    int a = 20;\n    int *p = &a;\n    int **q = &p;\n    printf(\"%d\", **q);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int a = 20;
    int *p = &a;
    int **q = &p;
    printf("%d", **q);
    return 0;
}`,
    answer: {
      directAnswer: "`**q` dereferences twice: first dereference `*q` yields pointer `p`, second dereference `*p` yields the integer value of `a` (**20**).",
      expectedOutput: "20",
      explanation: [
        "`p = &a` stores address of `a`.",
        "`q = &p` stores address of pointer `p`.",
        "`*q` yields `p`.",
        "`**q` yields `*p` which is `a = 20`."
      ],
      interviewTip: "Double pointers are essential when dynamically allocating arrays of strings or mutating pointers across function boundaries."
    }
  },
  {
    id: 164,
    pdfId: "Q163",
    sectionId: 4,
    sectionName: "Section 4: Output Prediction Questions",
    topic: "Arrays",
    subtopic: "Array Indexing",
    difficulty: "Basic",
    type: "Output Prediction",
    question: "Predict the output of the following program:\n\n#include <stdio.h>\nint main() {\n    int arr[5] = {1, 2, 3, 4, 5};\n    printf(\"%d\", arr[2] + arr[4]);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    printf("%d", arr[2] + arr[4]);
    return 0;
}`,
    answer: {
      directAnswer: "Using 0-based indexing, `arr[2]` is 3 and `arr[4]` is 5. Sum is $3 + 5 =$ **8**.",
      expectedOutput: "8",
      explanation: [
        "`arr[0] = 1, arr[1] = 2, arr[2] = 3, arr[3] = 4, arr[4] = 5`.",
        "`arr[2] + arr[4] = 3 + 5 = 8`."
      ],
      interviewTip: "Always remember: in an array of size $N$, valid indices range from 0 to $N - 1$."
    }
  },
  {
    id: 165,
    pdfId: "Q164",
    sectionId: 4,
    sectionName: "Section 4: Output Prediction Questions",
    topic: "Arrays",
    subtopic: "2D Array Access",
    difficulty: "Medium",
    type: "Output Prediction",
    question: "Predict the output of the following program:\n\n#include <stdio.h>\nint main() {\n    int arr[2][2] = {{1, 2}, {3, 4}};\n    printf(\"%d\", arr[0][1] + arr[1][0]);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int arr[2][2] = {{1, 2}, {3, 4}};
    printf("%d", arr[0][1] + arr[1][0]);
    return 0;
}`,
    answer: {
      directAnswer: "`arr[0][1]` is row 0 column 1 (value 2), and `arr[1][0]` is row 1 column 0 (value 3). The sum $2 + 3 =$ **5**.",
      expectedOutput: "5",
      explanation: [
        "Row 0: `arr[0][0] = 1, arr[0][1] = 2`",
        "Row 1: `arr[1][0] = 3, arr[1][1] = 4`",
        "Sum: $2 + 3 = 5$."
      ],
      interviewTip: "Row-column subscript order in C is always `arr[row][col]`."
    }
  },
  {
    id: 166,
    pdfId: "Q165",
    sectionId: 4,
    sectionName: "Section 4: Output Prediction Questions",
    topic: "Strings",
    subtopic: "String Length",
    difficulty: "Basic",
    type: "Output Prediction",
    question: "Predict the output of the following program:\n\n#include <stdio.h>\n#include <string.h>\nint main() {\n    char str[] = \"Placement\";\n    printf(\"%d\", (int)strlen(str));\n    return 0;\n}",
    givenCode: `#include <stdio.h>
#include <string.h>
int main() {
    char str[] = "Placement";
    printf("%d", (int)strlen(str));
    return 0;
}`,
    answer: {
      directAnswer: "`strlen()` counts characters up to (but not including) the null terminator `'\\0'`. \"Placement\" has **9** characters.",
      expectedOutput: "9",
      explanation: [
        "Characters in \"Placement\": P-l-a-c-e-m-e-n-t = 9 characters.",
        "`strlen(str)` returns 9.",
        "*(Note: `sizeof(str)` would be 10 because it includes the terminating `\\0`)*."
      ],
      interviewTip: "`strlen()` returns visible character length; `sizeof()` returns memory footprint including null byte."
    }
  },
  {
    id: 167,
    pdfId: "Q166",
    sectionId: 4,
    sectionName: "Section 4: Output Prediction Questions",
    topic: "Strings",
    subtopic: "String Concatenation",
    difficulty: "Basic",
    type: "Output Prediction",
    question: "Predict the output of the following program:\n\n#include <stdio.h>\n#include <string.h>\nint main() {\n    char a[20] = \"Sona\";\n    char b[] = \"College\";\n    strcat(a, b);\n    printf(\"%s\", a);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
#include <string.h>
int main() {
    char a[20] = "Sona";
    char b[] = "College";
    strcat(a, b);
    printf("%s", a);
    return 0;
}`,
    answer: {
      directAnswer: "`strcat` appends \"College\" to the end of \"Sona\" in buffer `a`, producing **SonaCollege**.",
      expectedOutput: "SonaCollege",
      explanation: [
        "`a` has 20 bytes of allocated memory, which is large enough to hold 4 + 7 + 1 = 12 characters.",
        "`strcat(a, b)` finds the null character in `a` and copies `b` starting from that position.",
        "Final string in `a` is `\"SonaCollege\"`."
      ],
      interviewTip: "Always ensure the destination buffer is large enough before calling `strcat` to avoid buffer overflow."
    }
  },
  {
    id: 168,
    pdfId: "Q167",
    sectionId: 4,
    sectionName: "Section 4: Output Prediction Questions",
    topic: "Storage Classes",
    subtopic: "Static Variable",
    difficulty: "Medium",
    type: "Output Prediction",
    question: "Predict the output of the following program:\n\n#include <stdio.h>\nvoid counter() {\n    static int count = 0;\n    count++;\n    printf(\"%d \", count);\n}\nint main() {\n    counter();\n    counter();\n    counter();\n    return 0;\n}",
    givenCode: `#include <stdio.h>
void counter() {
    static int count = 0;
    count++;
    printf("%d ", count);
}
int main() {
    counter();
    counter();
    counter();
    return 0;
}`,
    answer: {
      directAnswer: "The `static` local variable `count` is initialized once and retains its value between calls, printing **1 2 3 **.",
      expectedOutput: "1 2 3 ",
      explanation: [
        "1st call: `count` starts at 0, increments to 1, prints `1 `.",
        "2nd call: `count` is 1, increments to 2, prints `2 `.",
        "3rd call: `count` is 2, increments to 3, prints `3 `."
      ],
      interviewTip: "If `count` were a regular `auto` variable without `static`, it would print `1 1 1 `."
    }
  },
  {
    id: 169,
    pdfId: "Q168",
    sectionId: 4,
    sectionName: "Section 4: Output Prediction Questions",
    topic: "Storage Classes",
    subtopic: "Auto Variable Scope",
    difficulty: "Medium",
    type: "Output Prediction",
    question: "Predict the output of the following program:\n\n#include <stdio.h>\nint main() {\n    int x = 10;\n    {\n        int x = 20;\n        printf(\"%d \", x);\n    }\n    printf(\"%d\", x);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int x = 10;
    {
        int x = 20;
        printf("%d ", x);
    }
    printf("%d", x);
    return 0;
}`,
    answer: {
      directAnswer: "The inner block declares a new local variable `x = 20` that shadows the outer `x = 10`. Once the inner block exits, outer `x = 10` is visible again, printing **20 10**.",
      expectedOutput: "20 10",
      explanation: [
        "Outer `x` is 10.",
        "Inside inner block `{}`, a new `x` is declared and assigned 20.",
        "Inner `printf` prints `20 `.",
        "Inner block ends, destroying inner `x`.",
        "Outer `printf` prints outer `x` (10)."
      ],
      interviewTip: "Variables in inner scopes shadow variables with the same name in outer scopes."
    }
  },
  {
    id: 170,
    pdfId: "Q169",
    sectionId: 4,
    sectionName: "Section 4: Output Prediction Questions",
    topic: "Bitwise Operators",
    subtopic: "Left Shift",
    difficulty: "Medium",
    type: "Output Prediction",
    question: "Predict the output of the following program:\n\n#include <stdio.h>\nint main() {\n    int a = 3;\n    printf(\"%d\", a << 2);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int a = 3;
    printf("%d", a << 2);
    return 0;
}`,
    answer: {
      directAnswer: "Shifting left by 2 multiplies the value by $2^2 = 4$: $3 \\times 4 =$ **12**.",
      expectedOutput: "12",
      explanation: [
        "$a = 3 = 0000 0011_2$.",
        "$a \\ll 2 = 0000 1100_2$.",
        "$0000 1100_2 = 8 + 4 = 12$ in decimal."
      ],
      interviewTip: "`x << n` is mathematically identical to $x \\times 2^n$ (assuming no integer overflow)."
    }
  },
  {
    id: 171,
    pdfId: "Q170",
    sectionId: 4,
    sectionName: "Section 4: Output Prediction Questions",
    topic: "Bitwise Operators",
    subtopic: "XOR Operator",
    difficulty: "Medium",
    type: "Output Prediction",
    question: "Predict the output of the following program:\n\n#include <stdio.h>\nint main() {\n    int a = 5, b = 3;\n    printf(\"%d\", a ^ b);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int a = 5, b = 3;
    printf("%d", a ^ b);
    return 0;
}`,
    answer: {
      directAnswer: "Bitwise XOR sets bits to 1 where operands differ: $5$ (`101_2`) $\\oplus$ $3$ (`011_2`) $=$ `110_2` $=$ **6**.",
      expectedOutput: "6",
      explanation: [
        "$5 = 101_2$",
        "$3 = 011_2$",
        "Bit 0: $1 \\oplus 1 = 0$",
        "Bit 1: $0 \\oplus 1 = 1$",
        "Bit 2: $1 \\oplus 0 = 1$",
        "Result: $110_2 = 6$."
      ],
      interviewTip: "XOR returns 1 for differing bits and 0 for identical bits."
    }
  },
  {
    id: 172,
    pdfId: "Q171",
    sectionId: 4,
    sectionName: "Section 4: Output Prediction Questions",
    topic: "Switch",
    subtopic: "Fall-through Behaviour",
    difficulty: "Medium",
    type: "Output Prediction",
    question: "Predict the output of the following program:\n\n#include <stdio.h>\nint main() {\n    int x = 2;\n    switch (x) {\n        case 1: printf(\"One\");\n        case 2: printf(\"Two\");\n        case 3: printf(\"Three\"); break;\n        default: printf(\"Default\");\n    }\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int x = 2;
    switch (x) {\n        case 1: printf("One");\n        case 2: printf("Two");\n        case 3: printf("Three"); break;\n        default: printf("Default");\n    }\n    return 0;\n}`,
    answer: {
      directAnswer: "Because `case 2` lacks a `break;` statement, execution falls through into `case 3` until it hits `break;`, printing **TwoThree**.",
      expectedOutput: "TwoThree",
      explanation: [
        "$x = 2$ matches `case 2`, printing `\"Two\"`.",
        "There is no `break` at the end of `case 2`, causing fall-through into `case 3`.",
        "`case 3` prints `\"Three\"` and executes `break`, terminating the switch statement.",
        "Final output: `TwoThree`."
      ],
      interviewTip: "Switch fall-through is intentional in C, but forgetting `break` is one of the most common logic errors."
    }
  },
  {
    id: 173,
    pdfId: "Q172",
    sectionId: 4,
    sectionName: "Section 4: Output Prediction Questions",
    topic: "Variable Scope",
    subtopic: "Global vs Local",
    difficulty: "Medium",
    type: "Output Prediction",
    question: "Predict the output of the following program:\n\n#include <stdio.h>\nint x = 100;\nvoid display() {\n    int x = 10;\n    printf(\"%d \", x);\n}\nint main() {\n    display();\n    printf(\"%d\", x);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int x = 100;
void display() {
    int x = 10;
    printf("%d ", x);
}
int main() {
    display();
    printf("%d", x);
    return 0;
}`,
    answer: {
      directAnswer: "Inside `display()`, the local variable `x = 10` takes precedence over global `x`. In `main()`, global `x = 100` is accessed, printing **10 100**.",
      expectedOutput: "10 100",
      explanation: [
        "Inside `display()`, local `x = 10` is printed (`10 `).",
        "Inside `main()`, there is no local `x`, so the global variable `x = 100` is printed (`100`)."
      ],
      interviewTip: "Local variables always shadow global variables within their enclosing scope."
    }
  },
  {
    id: 174,
    pdfId: "Q173",
    sectionId: 4,
    sectionName: "Section 4: Output Prediction Questions",
    topic: "Operators",
    subtopic: "Logical Operators",
    difficulty: "Basic",
    type: "Output Prediction",
    question: "Predict the output of the following program:\n\n#include <stdio.h>\nint main() {\n    int a = 0, b = 5;\n    printf(\"%d\", a && b);\n    printf(\" %d\", a || b);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int a = 0, b = 5;
    printf("%d", a && b);
    printf(" %d", a || b);
    return 0;
}`,
    answer: {
      directAnswer: "Logical AND `0 && 5` evaluates to false (**0**). Logical OR `0 || 5` evaluates to true (**1**). Output is **0 1**.",
      expectedOutput: "0 1",
      explanation: [
        "In C, 0 is false and any non-zero value is true.",
        "`a && b` = `0 && 5` = false = `0`.",
        "`a || b` = `0 || 5` = true = `1`.",
        "Output: `0 1`."
      ],
      interviewTip: "Logical operators in C strictly return `1` (true) or `0` (false)."
    }
  },
  {
    id: 175,
    pdfId: "Q174",
    sectionId: 4,
    sectionName: "Section 4: Output Prediction Questions",
    topic: "Operators",
    subtopic: "Comma Operator",
    difficulty: "Medium",
    type: "Output Prediction",
    question: "Predict the output of the following program:\n\n#include <stdio.h>\nint main() {\n    int a;\n    a = (3, 4, 5);\n    printf(\"%d\", a);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int a;
    a = (3, 4, 5);
    printf("%d", a);
    return 0;
}`,
    answer: {
      directAnswer: "The comma operator evaluates expressions from left to right and yields the value of the rightmost operand, assigning **5** to `a`.",
      expectedOutput: "5",
      explanation: [
        "In `(3, 4, 5)`, the comma operator evaluates 3, then 4, and finally returns 5.",
        "`a = 5`.",
        "*(Note: Without parentheses, `a = 3, 4, 5;` assigns 3 to `a` because `=` has higher precedence than `,`)*."
      ],
      interviewTip: "The comma operator has the lowest precedence of all operators in C."
    }
  },
  {
    id: 176,
    pdfId: "Q175",
    sectionId: 4,
    sectionName: "Section 4: Output Prediction Questions",
    topic: "Loops",
    subtopic: "While Loop with Break",
    difficulty: "Basic",
    type: "Output Prediction",
    question: "Predict the output of the following program:\n\n#include <stdio.h>\nint main() {\n    int i = 0;\n    while (1) {\n        printf(\"%d \", i);\n        i++;\n        if (i == 3) break;\n    }\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int i = 0;
    while (1) {
        printf("%d ", i);
        i++;
        if (i == 3) break;
    }
    return 0;
}`,
    answer: {
      directAnswer: "Prints `i`, increments it, and breaks when `i` reaches 3, outputting **0 1 2 **.",
      expectedOutput: "0 1 2 ",
      explanation: [
        "`i = 0`: prints `0 `, increments to 1.",
        "`i = 1`: prints `1 `, increments to 2.",
        "`i = 2`: prints `2 `, increments to 3. `i == 3` triggers `break`.",
        "Loop terminates, printing `0 1 2 `."
      ],
      interviewTip: "Order matters: `printf` comes *before* `i++` and `break`, so 0, 1, and 2 are printed."
    }
  },
  {
    id: 177,
    pdfId: "Q176",
    sectionId: 4,
    sectionName: "Section 4: Output Prediction Questions",
    topic: "Functions",
    subtopic: "Recursion with Multiple Returns",
    difficulty: "Medium",
    type: "Output Prediction",
    question: "Predict the output of the following program:\n\n#include <stdio.h>\nint fun(int a, int b) {\n    if (b == 0) return 0;\n    return a + fun(a, b - 1);\n}\nint main() {\n    printf(\"%d\", fun(3, 4));\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int fun(int a, int b) {
    if (b == 0) return 0;
    return a + fun(a, b - 1);
}
int main() {
    printf("%d", fun(3, 4));
    return 0;
}`,
    answer: {
      directAnswer: "Recursively adds `a` exactly `b` times, performing multiplication $3 \\times 4 =$ **12**.",
      expectedOutput: "12",
      explanation: [
        "`fun(3, 4) = 3 + fun(3, 3)`",
        "`fun(3, 3) = 3 + fun(3, 2)`",
        "`fun(3, 2) = 3 + fun(3, 1)`",
        "`fun(3, 1) = 3 + fun(3, 0)`",
        "`fun(3, 0) = 0`",
        "Total: $3 + 3 + 3 + 3 + 0 = 12$."
      ],
      interviewTip: "Multiplication by repeated addition: $a \\times b = \\sum_{i=1}^{b} a$."
    }
  },
  {
    id: 178,
    pdfId: "Q177",
    sectionId: 4,
    sectionName: "Section 4: Output Prediction Questions",
    topic: "Pointers",
    subtopic: "Array of Pointers",
    difficulty: "Medium",
    type: "Output Prediction",
    question: "Predict the output of the following program:\n\n#include <stdio.h>\nint main() {\n    int a = 10, b = 20;\n    int *p[2];\n    p[0] = &a;\n    p[1] = &b;\n    printf(\"%d\", *p[0] + *p[1]);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int a = 10, b = 20;
    int *p[2];
    p[0] = &a;
    p[1] = &b;
    printf("%d", *p[0] + *p[1]);
    return 0;
}`,
    answer: {
      directAnswer: "`*p[0]` dereferences `a` (10) and `*p[1]` dereferences `b` (20). The sum $10 + 20 =$ **30**.",
      expectedOutput: "30",
      explanation: [
        "`p[0]` holds the memory address of `a`.",
        "`p[1]` holds the memory address of `b`.",
        "`*p[0] = 10` and `*p[1] = 20`.",
        "Sum: $10 + 20 = 30$."
      ],
      interviewTip: "Array of pointers is commonly used for ragged arrays and command-line arguments (`char *argv[]`)."
    }
  },
  {
    id: 179,
    pdfId: "Q178",
    sectionId: 4,
    sectionName: "Section 4: Output Prediction Questions",
    topic: "Structures",
    subtopic: "Structure Member Access",
    difficulty: "Basic",
    type: "Output Prediction",
    question: "Predict the output of the following program:\n\n#include <stdio.h>\nstruct Student {\n    int marks;\n};\nint main() {\n    struct Student s = {85};\n    s.marks += 10;\n    printf(\"%d\", s.marks);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
struct Student {
    int marks;
};
int main() {
    struct Student s = {85};
    s.marks += 10;
    printf("%d", s.marks);
    return 0;
}`,
    answer: {
      directAnswer: "Member access via the dot operator modifies `marks` from 85 to $85 + 10 =$ **95**.",
      expectedOutput: "95",
      explanation: [
        "`s.marks` is initialized to 85.",
        "`s.marks += 10` updates it to 95.",
        "`printf(\"%d\", s.marks)` prints 95."
      ],
      interviewTip: "Use the dot operator `.` for direct structure variables and arrow `->` for structure pointers."
    }
  },
  {
    id: 180,
    pdfId: "Q179",
    sectionId: 4,
    sectionName: "Section 4: Output Prediction Questions",
    topic: "Unions",
    subtopic: "Union Memory Sharing",
    difficulty: "Medium",
    type: "Output Prediction",
    question: "Predict the output of the following program:\n\n#include <stdio.h>\nunion Data {\n    int i;\n    char c;\n};\nint main() {\n    union Data d;\n    d.i = 65;\n    printf(\"%c\", d.c);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
union Data {
    int i;
    char c;
};
int main() {
    union Data d;
    d.i = 65;
    printf("%c", d.c);
    return 0;
}`,
    answer: {
      directAnswer: "In a union, `d.i` and `d.c` share the same memory location. On little-endian systems, the lowest byte of $65$ corresponds to ASCII value 65 ('A'), printing **A**.",
      expectedOutput: "A",
      explanation: [
        "In `union Data`, both `int i` and `char c` start at the same byte.",
        "$65 = 0x00000041$.",
        "The first byte in memory is `0x41`.",
        "`printf(\"%c\", d.c)` prints character corresponding to ASCII 65, which is `'A'`."
      ],
      interviewTip: "Unions allow type-punning (interpreting the memory representation of one type as another)."
    }
  },
  {
    id: 181,
    pdfId: "Q180",
    sectionId: 4,
    sectionName: "Section 4: Output Prediction Questions",
    topic: "Enumeration",
    subtopic: "enum Default Values",
    difficulty: "Basic",
    type: "Output Prediction",
    question: "Predict the output of the following program:\n\n#include <stdio.h>\nenum Day { MON, TUE, WED };\nint main() {\n    enum Day d = WED;\n    printf(\"%d\", d);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
enum Day { MON, TUE, WED };
int main() {
    enum Day d = WED;
    printf("%d", d);
    return 0;
}`,
    answer: {
      directAnswer: "By default, enum constants start at 0: `MON = 0`, `TUE = 1`, `WED = 2`. Printing `WED` outputs **2**.",
      expectedOutput: "2",
      explanation: [
        "Default enum numbering assigns consecutive integers starting from 0.",
        "`MON = 0`",
        "`TUE = 1`",
        "`WED = 2`",
        "`d = WED` -> prints 2."
      ],
      interviewTip: "In C, enums are treated internally as `int`s and can be printed with `%d`."
    }
  }
];
