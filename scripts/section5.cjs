// Section 5: Debugging Questions (Questions 182 to 201)

module.exports = [
  {
    id: 182,
    pdfId: "Q181",
    sectionId: 5,
    sectionName: "Section 5: Debugging Questions",
    topic: "Semicolon Errors",
    subtopic: "Misplaced Semicolon",
    difficulty: "Basic",
    type: "Debugging",
    question: "Identify the error(s), correct the code, and explain why the error occurs:\n\n#include <stdio.h>\nint main() {\n    int i;\n    for (i = 0; i < 5; i++);\n    {\n        printf(\"%d \", i);\n    }\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int i;
    for (i = 0; i < 5; i++);
    {
        printf("%d ", i);
    }
    return 0;
}`,
    answer: {
      directAnswer: "The semicolon `;` immediately after the `for` loop header creates an empty body loop. The loop iterates 5 times doing nothing, and the subsequent block `{ printf(\"%d \", i); }` executes only once after the loop finishes, printing **5** instead of 0 to 4.",
      identifiedBug: "Unintentional semicolon `;` at the end of the `for` loop header.",
      whyItHappens: "In C, a semicolon acts as a null statement. Placing `;` after `for (...)` terminates the loop's body immediately, disconnecting the loop from the intended curly brace block `{ ... }`.",
      codeExample: `#include <stdio.h>
int main() {
    int i;
    // Corrected: Removed stray semicolon
    for (i = 0; i < 5; i++) {
        printf("%d ", i);
    }
    return 0;
}`,
      expectedOutput: "0 1 2 3 4 ",
      interviewTip: "Never place a semicolon after `if (...)`, `for (...)`, or `while (...)` unless you intentionally want an empty body."
    }
  },
  {
    id: 183,
    pdfId: "Q182",
    sectionId: 5,
    sectionName: "Section 5: Debugging Questions",
    topic: "Semicolon Errors",
    subtopic: "Missing Semicolon",
    difficulty: "Basic",
    type: "Debugging",
    question: "Identify the error(s), correct the code, and explain why the error occurs:\n\n#include <stdio.h>\nint main() {\n    int a = 5\n    printf(\"%d\", a);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int a = 5
    printf("%d", a);
    return 0;
}`,
    answer: {
      directAnswer: "Compilation error: missing statement terminator semicolon `;` after `int a = 5`.",
      identifiedBug: "Syntax error: Missing semicolon at the end of variable declaration `int a = 5`.",
      whyItHappens: "In C, all statements must be terminated by a semicolon `;`. Without it, the compiler parser attempts to parse `int a = 5 printf(...)` as a single statement, triggering a syntax error: 'expected \";\" before \"printf\"'.",
      codeExample: `#include <stdio.h>
int main() {
    int a = 5; // Corrected: Added semicolon
    printf("%d", a);
    return 0;
}`,
      expectedOutput: "5",
      interviewTip: "Every statement in C must end with a semicolon `;`, except preprocessor directives and compound block definitions."
    }
  },
  {
    id: 184,
    pdfId: "Q183",
    sectionId: 5,
    sectionName: "Section 5: Debugging Questions",
    topic: "Braces",
    subtopic: "Missing Braces in If-Else",
    difficulty: "Basic",
    type: "Debugging",
    question: "Identify the error(s), correct the code, and explain why the error occurs:\n\n#include <stdio.h>\nint main() {\n    int a = 10;\n    if (a > 5)\n        printf(\"Greater\");\n        printf(\"Than 5\");\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int a = 10;
    if (a > 5)
        printf("Greater");
        printf("Than 5");
    return 0;
}`,
    answer: {
      directAnswer: "Logical bug: Without curly braces `{}`, only the single statement `printf(\"Greater\");` belongs to the `if` body. `printf(\"Than 5\");` is outside the `if` and will ALWAYS execute regardless of the condition.",
      identifiedBug: "Missing curly braces `{}` around multi-statement conditional block.",
      whyItHappens: "C does not use Python-style significant whitespace or indentation. Without braces, an `if` statement binds exclusively to the single statement immediately following it.",
      codeExample: `#include <stdio.h>
int main() {
    int a = 10;
    // Corrected: Enclosed both statements in braces
    if (a > 5) {
        printf("Greater");
        printf("Than 5");
    }
    return 0;
}`,
      expectedOutput: "GreaterThan 5",
      interviewTip: "Always use curly braces `{}` even for single-line `if` statements to eliminate subtle bugs like Apple's famous 'goto fail' SSL vulnerability."
    }
  },
  {
    id: 185,
    pdfId: "Q184",
    sectionId: 5,
    sectionName: "Section 5: Debugging Questions",
    topic: "Braces",
    subtopic: "Unbalanced Braces",
    difficulty: "Basic",
    type: "Debugging",
    question: "Identify the error(s), correct the code, and explain why the error occurs:\n\n#include <stdio.h>\nint main() {\n    int i;\n    for (i = 0; i < 3; i++) {\n        printf(\"%d \", i);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int i;
    for (i = 0; i < 3; i++) {
        printf("%d ", i);
    return 0;
}`,
    answer: {
      directAnswer: "Syntax compilation error: Unbalanced braces. The `for` loop opens an opening brace `{` that is never closed with `}`, causing the compiler to hit premature end-of-file.",
      identifiedBug: "Missing closing curly brace `}` for the `for` loop.",
      whyItHappens: "Every opening brace `{` in C must have a matching closing brace `}`. Here, `main()` has an opening brace and `for` has an opening brace, but only one closing brace appears.",
      codeExample: `#include <stdio.h>
int main() {
    int i;
    for (i = 0; i < 3; i++) {
        printf("%d ", i);
    } // Corrected: Added closing brace for loop
    return 0;
}`,
      expectedOutput: "0 1 2 ",
      interviewTip: "Modern IDEs highlight bracket pairs, but in paper coding interviews, always count your opening and closing braces."
    }
  },
  {
    id: 186,
    pdfId: "Q185",
    sectionId: 5,
    sectionName: "Section 5: Debugging Questions",
    topic: "Pointers",
    subtopic: "Uninitialized Pointer",
    difficulty: "Medium",
    type: "Debugging",
    question: "Identify the error(s), correct the code, and explain why the error occurs:\n\n#include <stdio.h>\nint main() {\n    int *p;\n    *p = 10;\n    printf(\"%d\", *p);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int *p;
    *p = 10;
    printf("%d", *p);
    return 0;
}`,
    answer: {
      directAnswer: "Critical runtime error (Segmentation Fault): Dereferencing an uninitialized wild pointer. `p` holds random garbage memory; writing `*p = 10` corrupts arbitrary memory.",
      identifiedBug: "Dereference of uninitialized pointer (`wild pointer`).",
      whyItHappens: "Local pointer variable `int *p` is allocated on the stack with whatever garbage bits were left in that stack frame. Attempting to write through `*p` writes to an illegal memory location, triggering an OS memory protection fault (`SIGSEGV`).",
      codeExample: `#include <stdio.h>
int main() {
    int val;
    int *p = &val; // Corrected: Point to a valid memory location
    *p = 10;
    printf("%d", *p);
    return 0;
}`,
      expectedOutput: "10",
      interviewTip: "Never dereference a pointer before initializing it to a valid variable address (`&var`) or dynamic memory (`malloc`)."
    }
  },
  {
    id: 187,
    pdfId: "Q186",
    sectionId: 5,
    sectionName: "Section 5: Debugging Questions",
    topic: "Pointers",
    subtopic: "Wrong Dereference",
    difficulty: "Medium",
    type: "Debugging",
    question: "Identify the error(s), correct the code, and explain why the error occurs:\n\n#include <stdio.h>\nint main() {\n    int a = 10;\n    int *p;\n    p = a;\n    printf(\"%d\", *p);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int a = 10;
    int *p;
    p = a;
    printf("%d", *p);
    return 0;
}`,
    answer: {
      directAnswer: "Compilation error: `p = a` assigns an integer value (10) directly to a pointer without the address-of operator `&`. At runtime, `*p` attempts to dereference memory address `0x0000000A`, causing a crash.",
      identifiedBug: "Assigning variable value instead of address: `p = a` instead of `p = &a`.",
      whyItHappens: "Pointers require memory addresses. Writing `p = a` treats the integer value 10 as an absolute memory address in RAM, which belongs to protected kernel space.",
      codeExample: `#include <stdio.h>
int main() {
    int a = 10;
    int *p;
    p = &a; // Corrected: Use address-of operator &
    printf("%d", *p);
    return 0;
}`,
      expectedOutput: "10",
      interviewTip: "Pointers store addresses (`p = &a`), while dereferenced pointers access values (`*p = a`)."
    }
  },
  {
    id: 188,
    pdfId: "Q187",
    sectionId: 5,
    sectionName: "Section 5: Debugging Questions",
    topic: "Arrays",
    subtopic: "Array Index Out of Bounds",
    difficulty: "Medium",
    type: "Debugging",
    question: "Identify the error(s), correct the code, and explain why the error occurs:\n\n#include <stdio.h>\nint main() {\n    int arr[5] = {1, 2, 3, 4, 5};\n    int i;\n    for (i = 0; i <= 5; i++) {\n        printf(\"%d \", arr[i]);\n    }\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    int i;
    for (i = 0; i <= 5; i++) {
        printf("%d ", arr[i]);
    }
    return 0;
}`,
    answer: {
      directAnswer: "Off-by-one bug: `i <= 5` accesses `arr[5]`, which is outside the bounds of array `arr[5]` (valid indices are 0 to 4), reading unallocated garbage memory.",
      identifiedBug: "Array index out of bounds (`arr[5]`).",
      whyItHappens: "In C, arrays are 0-indexed. An array of size 5 has valid elements `arr[0]` through `arr[4]`. C does not perform runtime bounds checking, so `arr[5]` accesses adjacent memory on the stack (undefined behavior).",
      codeExample: `#include <stdio.h>
int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    int i;
    // Corrected: Use i < 5 instead of i <= 5
    for (i = 0; i < 5; i++) {
        printf("%d ", arr[i]);
    }
    return 0;
}`,
      expectedOutput: "1 2 3 4 5 ",
      interviewTip: "Classic off-by-one fencepost error: always use `i < SIZE` when iterating over 0-indexed arrays."
    }
  },
  {
    id: 189,
    pdfId: "Q188",
    sectionId: 5,
    sectionName: "Section 5: Debugging Questions",
    topic: "Arrays",
    subtopic: "Wrong Array Initialization",
    difficulty: "Basic",
    type: "Debugging",
    question: "Identify the error(s), correct the code, and explain why the error occurs:\n\n#include <stdio.h>\nint main() {\n    int arr[5];\n    arr = {1, 2, 3, 4, 5};\n    printf(\"%d\", arr[0]);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int arr[5];
    arr = {1, 2, 3, 4, 5};
    printf("%d", arr[0]);
    return 0;
}`,
    answer: {
      directAnswer: "Compilation error: An array cannot be assigned using brace initialization `{ ... }` after its declaration. In C, array names are constant pointers (non-modifiable lvalues).",
      identifiedBug: "Illegal assignment to array type: `arr = {1, 2, 3, 4, 5};`.",
      whyItHappens: "Initializer lists `{ ... }` are valid only at the point of declaration. Once declared, an array's identifier is a non-assignable constant pointer representing its base address.",
      codeExample: `#include <stdio.h>
int main() {
    // Corrected: Initialize at declaration
    int arr[5] = {1, 2, 3, 4, 5};
    printf("%d", arr[0]);
    return 0;
}`,
      expectedOutput: "1",
      interviewTip: "You cannot assign one array directly to another (`arr1 = arr2` is illegal). You must copy elements using a loop or `memcpy()`."
    }
  },
  {
    id: 190,
    pdfId: "Q189",
    sectionId: 5,
    sectionName: "Section 5: Debugging Questions",
    topic: "Strings",
    subtopic: "Buffer Overflow",
    difficulty: "Medium",
    type: "Debugging",
    question: "Identify the error(s), correct the code, and explain why the error occurs:\n\n#include <stdio.h>\n#include <string.h>\nint main() {\n    char str[5];\n    strcpy(str, \"Placement\");\n    printf(\"%s\", str);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
#include <string.h>
int main() {
    char str[5];
    strcpy(str, "Placement");
    printf("%s", str);
    return 0;
}`,
    answer: {
      directAnswer: "Buffer overflow: \"Placement\" requires 10 bytes (9 characters + 1 null terminator `'\\0'`), but buffer `str` is allocated only 5 bytes, corrupting adjacent stack memory.",
      identifiedBug: "Buffer overflow caused by `strcpy` into an undersized buffer.",
      whyItHappens: "`strcpy()` blindly copies bytes until it encounters `'\\0'`. Writing 10 bytes into a 5-byte stack buffer overwrites adjacent variables or stack frame return addresses.",
      codeExample: `#include <stdio.h>
#include <string.h>
int main() {
    // Corrected: Allocate at least 10 bytes for "Placement" + '\\0'
    char str[15];
    strcpy(str, "Placement");
    printf("%s", str);
    return 0;
}`,
      expectedOutput: "Placement",
      interviewTip: "Always allocate at least `strlen(source) + 1` bytes for the destination string buffer."
    }
  },
  {
    id: 191,
    pdfId: "Q190",
    sectionId: 5,
    sectionName: "Section 5: Debugging Questions",
    topic: "Strings",
    subtopic: "Missing String Header",
    difficulty: "Basic",
    type: "Debugging",
    question: "Identify the error(s), correct the code, and explain why the error occurs:\n\n#include <stdio.h>\nint main() {\n    char str1[20] = \"Hello\";\n    char str2[] = \"World\";\n    strcat(str1, str2);\n    printf(\"%s\", str1);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    char str1[20] = "Hello";
    char str2[] = "World";
    strcat(str1, str2);
    printf("%s", str1);
    return 0;
}`,
    answer: {
      directAnswer: "Compiler warning/error: Function `strcat` is used without including `<string.h>`, leading to an implicit function declaration error.",
      identifiedBug: "Missing `#include <string.h>` header file.",
      whyItHappens: "`strcat()` is declared in the standard library header `<string.h>`. In C99 and modern C standards, using standard library functions without including their prototype header is disallowed.",
      codeExample: `#include <stdio.h>
#include <string.h> // Corrected: Included header for strcat

int main() {
    char str1[20] = "Hello";
    char str2[] = "World";
    strcat(str1, str2);
    printf("%s", str1);
    return 0;
}`,
      expectedOutput: "HelloWorld",
      interviewTip: "Always include `<string.h>` for string manipulation functions (`strlen`, `strcpy`, `strcat`, `strcmp`)."
    }
  },
  {
    id: 192,
    pdfId: "Q191",
    sectionId: 5,
    sectionName: "Section 5: Debugging Questions",
    topic: "Functions",
    subtopic: "Missing Return Statement",
    difficulty: "Basic",
    type: "Debugging",
    question: "Identify the error(s), correct the code, and explain why the error occurs:\n\n#include <stdio.h>\nint square(int n) {\n    int result = n * n;\n}\nint main() {\n    printf(\"%d\", square(5));\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int square(int n) {
    int result = n * n;
}
int main() {
    printf("%d", square(5));
    return 0;
}`,
    answer: {
      directAnswer: "Missing return statement: `square` is declared with return type `int`, but does not return any value, returning garbage register data to `main`.",
      identifiedBug: "Non-void function lacks a `return` statement.",
      whyItHappens: "When a non-void function reaches the end of its block without a `return` statement, the caller reads whatever value happens to be in the CPU return register (`EAX` / `RAX`), which is undefined garbage.",
      codeExample: `#include <stdio.h>
int square(int n) {
    int result = n * n;
    return result; // Corrected: Return the calculated value
}
int main() {
    printf("%d", square(5));
    return 0;
}`,
      expectedOutput: "25",
      interviewTip: "Enabling compiler flag `-Wall` immediately warns: 'control reaches end of non-void function'."
    }
  },
  {
    id: 193,
    pdfId: "Q192",
    sectionId: 5,
    sectionName: "Section 5: Debugging Questions",
    topic: "Functions",
    subtopic: "Function Prototype Mismatch",
    difficulty: "Medium",
    type: "Debugging",
    question: "Identify the error(s), correct the code, and explain why the error occurs:\n\n#include <stdio.h>\nint add(int a, int b);\nint main() {\n    printf(\"%d\", add(5, 10, 15));\n    return 0;\n}\nint add(int a, int b) {\n    return a + b;\n}",
    givenCode: `#include <stdio.h>
int add(int a, int b);
int main() {
    printf("%d", add(5, 10, 15));
    return 0;
}
int add(int a, int b) {
    return a + b;
}`,
    answer: {
      directAnswer: "Compilation error: Function prototype `int add(int a, int b)` accepts exactly 2 arguments, but `add(5, 10, 15)` passes 3 arguments.",
      identifiedBug: "Argument count mismatch: Passed 3 arguments to a 2-parameter function.",
      whyItHappens: "The compiler uses the prototype declaration to enforce type and argument quantity checking. The third argument 15 violates the function signature.",
      codeExample: `#include <stdio.h>
int add(int a, int b);
int main() {
    // Corrected: Pass exactly 2 arguments matching prototype
    printf("%d", add(5, 10));
    return 0;
}
int add(int a, int b) {
    return a + b;
}`,
      expectedOutput: "15",
      interviewTip: "This highlights why prototypes are critical: they allow the compiler to detect mismatched argument counts before linking."
    }
  },
  {
    id: 194,
    pdfId: "Q193",
    sectionId: 5,
    sectionName: "Section 5: Debugging Questions",
    topic: "Recursion",
    subtopic: "Missing Base Case",
    difficulty: "Medium",
    type: "Debugging",
    question: "Identify the error(s), correct the code, and explain why the error occurs:\n\n#include <stdio.h>\nint factorial(int n) {\n    return n * factorial(n - 1);\n}\nint main() {\n    printf(\"%d\", factorial(5));\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int factorial(int n) {
    return n * factorial(n - 1);
}
int main() {
    printf("%d", factorial(5));
    return 0;
}`,
    answer: {
      directAnswer: "Runtime crash (Stack Overflow): The recursive function `factorial` lacks a base case, continuing to call itself with negative numbers indefinitely ($5, 4, 3, 2, 1, 0, -1, -2...$).",
      identifiedBug: "Missing Base Case in recursive function.",
      whyItHappens: "Every recursive call allocates a stack frame. Without a terminating condition like `if (n <= 1) return 1;`, calls continue until stack memory is exhausted, causing a segmentation fault.",
      codeExample: `#include <stdio.h>
int factorial(int n) {
    // Corrected: Added base case
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
int main() {
    printf("%d", factorial(5));
    return 0;
}`,
      expectedOutput: "120",
      interviewTip: "Always write and verify the Base Case first before writing recursive logic."
    }
  },
  {
    id: 195,
    pdfId: "Q194",
    sectionId: 5,
    sectionName: "Section 5: Debugging Questions",
    topic: "Recursion",
    subtopic: "Incorrect Recursive Call",
    difficulty: "Medium",
    type: "Debugging",
    question: "Identify the error(s), correct the code, and explain why the error occurs:\n\n#include <stdio.h>\nint sum(int n) {\n    if (n == 0)\n        return 0;\n    return n + sum(n);\n}\nint main() {\n    printf(\"%d\", sum(5));\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int sum(int n) {
    if (n == 0)
        return 0;
    return n + sum(n);
}
int main() {
    printf("%d", sum(5));
    return 0;
}`,
    answer: {
      directAnswer: "Runtime crash (Stack Overflow): The recursive call passes `n` instead of `n - 1`, calling `sum(5)` with parameter 5 forever without converging to the base case `n == 0`.",
      identifiedBug: "Recursive call does not progress toward base case: `sum(n)` instead of `sum(n - 1)`.",
      whyItHappens: "For recursion to terminate, each recursive invocation must move closer to the base case. Calling `sum(n)` creates an infinite recursion loop.",
      codeExample: `#include <stdio.h>
int sum(int n) {
    if (n == 0)
        return 0;
    // Corrected: Decrement n toward base case
    return n + sum(n - 1);
}
int main() {
    printf("%d", sum(5));
    return 0;
}`,
      expectedOutput: "15",
      interviewTip: "Recursive step must strictly reduce the problem size: $n \\to n - 1$."
    }
  },
  {
    id: 196,
    pdfId: "Q195",
    sectionId: 5,
    sectionName: "Section 5: Debugging Questions",
    topic: "malloc()",
    subtopic: "Missing Header for malloc",
    difficulty: "Basic",
    type: "Debugging",
    question: "Identify the error(s), correct the code, and explain why the error occurs:\n\n#include <stdio.h>\nint main() {\n    int *p = malloc(5 * sizeof(int));\n    p[0] = 10;\n    printf(\"%d\", p[0]);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int *p = malloc(5 * sizeof(int));
    p[0] = 10;
    printf("%d", p[0]);
    return 0;
}`,
    answer: {
      directAnswer: "Compilation warning/error: `malloc` is used without including `<stdlib.h>`. In addition, dynamically allocated memory is never released with `free(p)`.",
      identifiedBug: "Missing `#include <stdlib.h>` header for `malloc()`.",
      whyItHappens: "`malloc` is declared in `<stdlib.h>`. Without it, older C compilers assume `int malloc()` (which truncates 64-bit pointers to 32-bit integers, causing crashes on 64-bit systems), while modern compilers produce an error.",
      codeExample: `#include <stdio.h>
#include <stdlib.h> // Corrected: Included stdlib.h

int main() {
    int *p = (int *)malloc(5 * sizeof(int));
    if (p == NULL) return 1; // Good practice: check NULL
    p[0] = 10;
    printf("%d", p[0]);
    free(p); // Good practice: free heap memory
    return 0;
}`,
      expectedOutput: "10",
      interviewTip: "Always include `<stdlib.h>` when using `malloc`, `calloc`, `realloc`, or `free`."
    }
  },
  {
    id: 197,
    pdfId: "Q196",
    sectionId: 5,
    sectionName: "Section 5: Debugging Questions",
    topic: "malloc()",
    subtopic: "Not Freeing Memory / NULL Check",
    difficulty: "Medium",
    type: "Debugging",
    question: "Identify the error(s), correct the code, and explain why the error occurs:\n\n#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    int *p = (int *)malloc(5 * sizeof(int));\n    p[10] = 100;\n    printf(\"%d\", p[10]);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
#include <stdlib.h>
int main() {
    int *p = (int *)malloc(5 * sizeof(int));
    p[10] = 100;
    printf("%d", p[10]);
    return 0;
}`,
    answer: {
      directAnswer: "Three bugs: 1. Heap buffer overflow (`p[10]` writes outside the 5-element allocation). 2. Missing `NULL` check after `malloc`. 3. Missing `free(p)` causing memory leak.",
      identifiedBug: "Buffer overflow on heap (`p[10]` on a 5-element array), missing NULL check, and missing `free()`.",
      whyItHappens: "`malloc(5 * sizeof(int))` allocates space for indices 0 to 4. Writing to `p[10]` corrupts heap metadata (heap corruption crash).",
      codeExample: `#include <stdio.h>
#include <stdlib.h>

int main() {
    // Corrected: Allocate 11 elements to safely access index 10
    int *p = (int *)malloc(11 * sizeof(int));
    if (p == NULL) {
        printf("Memory allocation failed\\n");
        return 1;
    }
    p[10] = 100;
    printf("%d", p[10]);
    free(p); // Freed memory
    return 0;
}`,
      expectedOutput: "100",
      interviewTip: "Corrupting heap boundaries leads to crashes when subsequent calls to `malloc` or `free` run."
    }
  },
  {
    id: 198,
    pdfId: "Q197",
    sectionId: 5,
    sectionName: "Section 5: Debugging Questions",
    topic: "scanf()",
    subtopic: "Missing Address Operator",
    difficulty: "Basic",
    type: "Debugging",
    question: "Identify the error(s), correct the code, and explain why the error occurs:\n\n#include <stdio.h>\nint main() {\n    int a;\n    printf(\"Enter a number: \");\n    scanf(\"%d\", a);\n    printf(\"%d\", a);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int a;
    printf("Enter a number: ");
    scanf("%d", a);
    printf("%d", a);
    return 0;
}`,
    answer: {
      directAnswer: "Runtime crash (Segmentation Fault): `scanf(\"%d\", a)` passes uninitialized value of `a` instead of its address `&a`.",
      identifiedBug: "Missing address-of operator `&` in `scanf`.",
      whyItHappens: "`scanf` requires a memory address to write the parsed input. Passing `a` (which contains uninitialized garbage) causes `scanf` to write to an invalid memory location.",
      codeExample: `#include <stdio.h>
int main() {
    int a;
    printf("Enter a number: ");
    scanf("%d", &a); // Corrected: Passed &a
    printf("%d", a);
    return 0;
}`,
      interviewTip: "Only array/string identifiers do not require `&` in `scanf` (e.g. `scanf(\"%s\", str)`) because array names decay to addresses automatically."
    }
  },
  {
    id: 199,
    pdfId: "Q198",
    sectionId: 5,
    sectionName: "Section 5: Debugging Questions",
    topic: "printf()",
    subtopic: "Format Specifier Mismatch",
    difficulty: "Basic",
    type: "Debugging",
    question: "Identify the error(s), correct the code, and explain why the error occurs:\n\n#include <stdio.h>\nint main() {\n    float a = 10.5;\n    printf(\"%d\", a);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    float a = 10.5;
    printf("%d", a);
    return 0;
}`,
    answer: {
      directAnswer: "Undefined behavior / garbage output: `%d` expects an integer, but `a` is a `float` (promoted to 64-bit IEEE 754 `double`). Printing with `%d` misinterprets floating-point bit layout.",
      identifiedBug: "Format specifier mismatch: `%d` used for floating-point variable.",
      whyItHappens: "`printf` relies entirely on the format string to interpret argument bytes pushed onto the stack or registers. Floating point values are passed in XMM/floating-point registers, whereas `%d` reads from general-purpose registers (`ESI`/`EDX`), producing 0 or garbage.",
      codeExample: `#include <stdio.h>
int main() {
    float a = 10.5;
    // Corrected: Use %f for float (or cast explicitly)
    printf("%.1f", a);
    return 0;
}`,
      expectedOutput: "10.5",
      interviewTip: "Always match types: `%d` for `int`, `%f` for `float`/`double`, `%c` for `char`, `%s` for string, `%p` for pointer."
    }
  },
  {
    id: 200,
    pdfId: "Q199",
    sectionId: 5,
    sectionName: "Section 5: Debugging Questions",
    topic: "Bitwise Operators",
    subtopic: "Confusing && with &",
    difficulty: "Medium",
    type: "Debugging",
    question: "Identify the error(s), correct the code, and explain why the error occurs:\n\n#include <stdio.h>\nint main() {\n    int a = 6, b = 3;\n    if (a & b)\n        printf(\"True\");\n    else\n        printf(\"False\");\n    return 0;\n}",
    givenCode: `#include <stdio.h>
int main() {
    int a = 6, b = 3;
    if (a & b)
        printf("True");
    else
        printf("False");
    return 0;
}`,
    answer: {
      directAnswer: "Logical bug: The programmer likely intended logical AND (`&&`) to check if both $a$ and $b$ are non-zero (which would be True), but used bitwise AND (`&`). Since $6$ (`110_2$) and $3$ (`011_2`) share bit 1 (`010_2 = 2` $\\neq 0$), it coincidentally evaluates to True, but will fail for cases like $4 \\& 3 = 0$.",
      identifiedBug: "Confusing bitwise AND `&` with logical AND `&&`.",
      whyItHappens: "`&&` checks boolean truth of two operands. `&` performs bit-by-bit masking. If $a = 4$ (`100_2`) and $b = 3$ (`011_2`), both are positive (true), but `4 & 3 == 0` (false)!",
      codeExample: `#include <stdio.h>
int main() {
    int a = 6, b = 3;
    // Corrected: Use logical AND && for boolean condition
    if (a && b)
        printf("True");
    else
        printf("False");
    return 0;
}`,
      expectedOutput: "True",
      interviewTip: "Always use `&&` for condition checking and reserve `&` strictly for bit manipulation and masking."
    }
  },
  {
    id: 201,
    pdfId: "Q200",
    sectionId: 5,
    sectionName: "Section 5: Debugging Questions",
    topic: "Structures",
    subtopic: "Wrong Member Access Operator",
    difficulty: "Basic",
    type: "Debugging",
    question: "Identify the error(s), correct the code, and explain why the error occurs:\n\n#include <stdio.h>\nstruct Student {\n    int roll;\n    char name[20];\n};\nint main() {\n    struct Student s;\n    s->roll = 1;\n    printf(\"%d\", s.roll);\n    return 0;\n}",
    givenCode: `#include <stdio.h>
struct Student {
    int roll;
    char name[20];
};
int main() {
    struct Student s;
    s->roll = 1;
    printf("%d", s.roll);
    return 0;
}`,
    answer: {
      directAnswer: "Compilation error: `s` is a concrete structure variable, not a pointer. The arrow operator `->` is used exclusively with pointers to structures. For regular structure variables, use the dot operator `.`: `s.roll = 1;`.",
      identifiedBug: "Using arrow operator `->` instead of dot operator `.` on a non-pointer structure.",
      whyItHappens: "The operator `->` is syntactic sugar for `(*ptr).member`. Applying `->` to a non-pointer variable `s` triggers a compiler error: 'invalid type argument of \"->\" (have \"struct Student\")'.",
      codeExample: `#include <stdio.h>
struct Student {
    int roll;
    char name[20];
};
int main() {
    struct Student s;
    s.roll = 1; // Corrected: Use dot operator .
    printf("%d", s.roll);
    return 0;
}`,
      expectedOutput: "1",
      interviewTip: "Rule: If it's a variable or object, use `.` (dot). If it's an address or pointer, use `->` (arrow)."
    }
  }
];
