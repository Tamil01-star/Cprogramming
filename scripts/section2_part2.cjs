// Section 2 Part 2: Programming Logic & Pseudocode (Questions 72 to 91)

module.exports = [
  {
    id: 72,
    pdfId: "Q71",
    sectionId: 2,
    sectionName: "Section 2: Programming Logic & Pseudocode",
    topic: "Programming Logic",
    subtopic: "Reverse String",
    difficulty: "Basic",
    type: "Pseudocode",
    question: "Write the algorithm/pseudocode to find/print Reverse String.",
    answer: {
      directAnswer: "Reverse an in-place mutable character array using two pointers (one at the start, one at the end) swapping characters until they meet in the middle, running in $O(N)$ time and $O(1)$ space.",
      algorithmSteps: [
        "1. Let `i = 0` and `j = strlen(str) - 1`.",
        "2. While `i < j`:",
        "   - Swap `str[i]` with `str[j]` using a temporary character.",
        "   - `i++`, `j--`.",
        "3. The string is now reversed in place."
      ],
      codeExample: `#include <stdio.h>
#include <string.h>

void reverseString(char *s) {
    int i = 0, j = strlen(s) - 1;
    while (i < j) {
        char temp = s[i];
        s[i] = s[j];
        s[j] = temp;
        i++;
        j--;
    }
}

int main() {
    char str[] = "EMBEDDED";
    reverseString(str);
    printf("Reversed: %s\\n", str); // DEDDEBME
    return 0;
}`,
      interviewTip: "Never attempt in-place reversal on a string literal (`char *s = \"hello\"; reverseString(s);`) because string literals are stored in read-only code segments (causes SegFault)."
    }
  },
  {
    id: 73,
    pdfId: "Q72",
    sectionId: 2,
    sectionName: "Section 2: Programming Logic & Pseudocode",
    topic: "Programming Logic",
    subtopic: "Count Vowels",
    difficulty: "Medium",
    type: "Pseudocode",
    question: "Write the algorithm/pseudocode to find/print Count Vowels.",
    answer: {
      directAnswer: "Count vowels by traversing the string character by character, converting each letter to lowercase, and checking if it belongs to the set `{'a', 'e', 'i', 'o', 'u'}`.",
      algorithmSteps: [
        "1. Initialize `vowels = 0`.",
        "2. Loop through each character `c` in string until `'\\0'`:",
        "   - Convert to lowercase: `ch = tolower(c)`.",
        "   - If `ch` is `'a'`, `'e'`, `'i'`, `'o'`, or `'u'`, increment `vowels`.",
        "3. Return `vowels`."
      ],
      codeExample: `#include <stdio.h>
#include <ctype.h>

int countVowels(const char *s) {
    int count = 0;
    while (*s) {
        char ch = tolower(*s);
        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
            count++;
        }
        s++;
    }
    return count;
}

int main() {
    printf("Vowels in 'Campus Interview': %d\\n", countVowels("Campus Interview")); // 5
    return 0;
}`,
      interviewTip: "Always use `tolower()` from `<ctype.h>` so your logic handles both uppercase and lowercase characters cleanly."
    }
  },
  {
    id: 74,
    pdfId: "Q73",
    sectionId: 2,
    sectionName: "Section 2: Programming Logic & Pseudocode",
    topic: "Programming Logic",
    subtopic: "Count Words",
    difficulty: "Basic",
    type: "Pseudocode",
    question: "Write the algorithm/pseudocode to find/print Count Words.",
    answer: {
      directAnswer: "Count words using a state flag (`inWord`): toggle the flag to true and increment count when transitioning from whitespace to a non-whitespace character.",
      algorithmSteps: [
        "1. Set `wordCount = 0`, `inWord = 0`.",
        "2. For each character `c` in string:",
        "   - If `c` is space/tab/newline, set `inWord = 0`.",
        "   - Else if `inWord == 0`, set `inWord = 1` and `wordCount++`.",
        "3. Return `wordCount`."
      ],
      codeExample: `#include <stdio.h>
#include <ctype.h>

int countWords(const char *s) {
    int count = 0, inWord = 0;
    while (*s) {
        if (isspace(*s)) {
            inWord = 0;
        } else if (!inWord) {
            inWord = 1;
            count++;
        }
        s++;
    }
    return count;
}

int main() {
    printf("Words: %d\\n", countWords("  C  is   fun to learn  ")); // 5
    return 0;
}`,
      interviewTip: "Using a state machine (`inWord` flag) cleanly handles multiple leading, trailing, and consecutive spaces."
    }
  },
  {
    id: 75,
    pdfId: "Q74",
    sectionId: 2,
    sectionName: "Section 2: Programming Logic & Pseudocode",
    topic: "Programming Logic",
    subtopic: "Linear Search",
    difficulty: "Basic",
    type: "Pseudocode",
    question: "Write the algorithm/pseudocode to perform Linear Search.",
    answer: {
      directAnswer: "Linear search sequentially checks each element of the array from index 0 to $N-1$ until the target key is found or the array ends, running in $O(N)$ time on unsorted arrays.",
      algorithmSteps: [
        "1. Loop $i$ from 0 to $N - 1$:",
        "   - If `arr[i] == key`, return index $i$.",
        "2. If loop terminates without match, return -1 (not found)."
      ],
      codeExample: `#include <stdio.h>

int linearSearch(int arr[], int n, int key) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == key) return i; // Found at index i
    }
    return -1; // Not found
}

int main() {
    int arr[] = {12, 45, 23, 78, 56};
    int idx = linearSearch(arr, 5, 23);
    printf("Key 23 found at index: %d\\n", idx); // 2
    return 0;
}`,
      interviewTip: "Linear search requires no pre-sorting and has $O(1)$ best-case and $O(N)$ worst-case time complexity."
    }
  },
  {
    id: 76,
    pdfId: "Q75",
    sectionId: 2,
    sectionName: "Section 2: Programming Logic & Pseudocode",
    topic: "Programming Logic",
    subtopic: "Binary Search",
    difficulty: "Medium",
    type: "Pseudocode",
    question: "Write the algorithm/pseudocode to perform Binary Search.",
    answer: {
      directAnswer: "Binary search finds the target in a sorted array by repeatedly dividing the search interval in half. Compares key with middle element, narrowing search space to left or right half in $O(\\log N)$ time.",
      algorithmSteps: [
        "1. Initialize `low = 0`, `high = n - 1`.",
        "2. While `low <= high`:",
        "   - `mid = low + (high - low) / 2`",
        "   - If `arr[mid] == key`, return `mid`.",
        "   - If `arr[mid] < key`, `low = mid + 1`.",
        "   - If `arr[mid] > key`, `high = mid - 1`.",
        "3. Return -1 if not found."
      ],
      codeExample: `#include <stdio.h>

int binarySearch(int arr[], int n, int key) {
    int low = 0, high = n - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2; // Prevents overflow
        if (arr[mid] == key) return mid;
        else if (arr[mid] < key) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}

int main() {
    int sorted[] = {10, 20, 30, 40, 50, 60};
    printf("Index of 40: %d\\n", binarySearch(sorted, 6, 40)); // 3
    return 0;
}`,
      interviewTip: "Why use `low + (high - low) / 2` instead of `(low + high) / 2`? Because `low + high` can overflow 32-bit signed integers for arrays larger than 1 billion elements!"
    }
  },
  {
    id: 77,
    pdfId: "Q76",
    sectionId: 2,
    sectionName: "Section 2: Programming Logic & Pseudocode",
    topic: "Programming Logic",
    subtopic: "Bubble Sort",
    difficulty: "Basic",
    type: "Pseudocode",
    question: "Write the algorithm/pseudocode to perform Bubble Sort.",
    answer: {
      directAnswer: "Bubble Sort repeatedly steps through the array, compares adjacent elements, and swaps them if they are in the wrong order. The largest unsorted element 'bubbles up' to its correct position at the end in each pass.",
      algorithmSteps: [
        "1. For $i = 0$ to $N - 2$:",
        "   - Set `swapped = false`.",
        "   - For $j = 0$ to $N - i - 2$:",
        "     * If `arr[j] > arr[j + 1]`, swap them and set `swapped = true`.",
        "   - If `swapped == false`, break early (array is already sorted)."
      ],
      codeExample: `#include <stdio.h>
#include <stdbool.h>

void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        bool swapped = false;
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) break; // Optimized O(N) best case
    }
}

int main() {
    int arr[] = {64, 34, 25, 12, 22};
    bubbleSort(arr, 5);
    for (int i = 0; i < 5; i++) printf("%d ", arr[i]);
    return 0;
}`,
      interviewTip: "Always mention the `swapped` boolean flag optimization: it reduces best-case time complexity from $O(N^2)$ to $O(N)$ for nearly sorted inputs."
    }
  },
  {
    id: 78,
    pdfId: "Q77",
    sectionId: 2,
    sectionName: "Section 2: Programming Logic & Pseudocode",
    topic: "Programming Logic",
    subtopic: "Selection Sort",
    difficulty: "Basic",
    type: "Pseudocode",
    question: "Write the algorithm/pseudocode to perform Selection Sort.",
    answer: {
      directAnswer: "Selection Sort divides the array into sorted and unsorted subarrays. It repeatedly finds the minimum element from the unsorted part and swaps it with the first unsorted element, making at most $O(N)$ swaps.",
      algorithmSteps: [
        "1. Loop $i$ from 0 to $N - 2$:",
        "   - Assume `min_idx = i`.",
        "   - Loop $j$ from $i + 1$ to $N - 1$:",
        "     * If `arr[j] < arr[min_idx]`, update `min_idx = j`.",
        "   - Swap `arr[i]` with `arr[min_idx]`."
      ],
      codeExample: `#include <stdio.h>

void selectionSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int minIdx = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) minIdx = j;
        }
        int temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
    }
}

int main() {
    int arr[] = {29, 10, 14, 37, 13};
    selectionSort(arr, 5);
    for (int i = 0; i < 5; i++) printf("%d ", arr[i]);
    return 0;
}`,
      interviewTip: "Selection Sort performs the minimum number of swaps among elementary sorting algorithms ($O(N)$ swaps), making it useful when memory write operations are expensive (e.g. Flash/EEPROM memory)."
    }
  },
  {
    id: 79,
    pdfId: "Q78",
    sectionId: 2,
    sectionName: "Section 2: Programming Logic & Pseudocode",
    topic: "Programming Logic",
    subtopic: "Insertion Sort",
    difficulty: "Medium",
    type: "Pseudocode",
    question: "Write the algorithm/pseudocode to perform Insertion Sort.",
    answer: {
      directAnswer: "Insertion Sort builds the final sorted array one element at a time by picking the next element (`key`) and shifting larger elements of the sorted prefix one position to the right to insert the key into its correct position (like sorting playing cards).",
      algorithmSteps: [
        "1. Loop $i$ from 1 to $N - 1$:",
        "   - Set `key = arr[i]` and `j = i - 1`.",
        "   - While `j >= 0` and `arr[j] > key`:",
        "     * `arr[j + 1] = arr[j]` (shift right)",
        "     * `j = j - 1`",
        "   - `arr[j + 1] = key` (insert into slot)"
      ],
      codeExample: `#include <stdio.h>

void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

int main() {
    int arr[] = {12, 11, 13, 5, 6};
    insertionSort(arr, 5);
    for (int i = 0; i < 5; i++) printf("%d ", arr[i]);
    return 0;
}`,
      interviewTip: "Insertion sort is adaptive and stable, with $O(N)$ best-case time complexity, making it standard for small arrays ($N \\le 32$) in hybrid algorithms like TimSort."
    }
  },
  {
    id: 80,
    pdfId: "Q79",
    sectionId: 2,
    sectionName: "Section 2: Programming Logic & Pseudocode",
    topic: "Programming Logic",
    subtopic: "Second Largest Element",
    difficulty: "Basic",
    type: "Pseudocode",
    question: "Write the algorithm/pseudocode to find/print Second Largest Element.",
    answer: {
      directAnswer: "Find the second largest element in a single traversal ($O(N)$ time) by tracking `first` (maximum seen so far) and `second`: when a new maximum is found, update `second` to the old `first`.",
      algorithmSteps: [
        "1. Initialize `first = INT_MIN`, `second = INT_MIN`.",
        "2. For each element $x$ in array:",
        "   - If $x > first$: `second = first`, `first = x`.",
        "   - Else if $x > second$ and $x \\neq first$: `second = x`.",
        "3. Return `second`."
      ],
      codeExample: `#include <stdio.h>
#include <limits.h>

int findSecondLargest(int arr[], int n) {
    int first = INT_MIN, second = INT_MIN;
    for (int i = 0; i < n; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        } else if (arr[i] > second && arr[i] != first) {
            second = arr[i];
        }
    }
    return (second == INT_MIN) ? -1 : second;
}

int main() {
    int arr[] = {12, 35, 1, 10, 34, 35};
    printf("Second Largest: %d\\n", findSecondLargest(arr, 6)); // 34
    return 0;
}`,
      interviewTip: "Watch out for duplicate maximums! `arr[i] != first` prevents setting `second` to a duplicate of the largest value."
    }
  },
  {
    id: 81,
    pdfId: "Q80",
    sectionId: 2,
    sectionName: "Section 2: Programming Logic & Pseudocode",
    topic: "Programming Logic",
    subtopic: "Duplicate Elements",
    difficulty: "Basic",
    type: "Pseudocode",
    question: "Write the algorithm/pseudocode to find/print Duplicate Elements.",
    answer: {
      directAnswer: "Find duplicate elements by comparing each element with subsequent elements in nested loops ($O(N^2)$ brute force) or using frequency hashing / sorting in $O(N \\log N)$ time.",
      algorithmSteps: [
        "1. Loop $i$ from 0 to $N - 1$:",
        "   - Loop $j$ from $i + 1$ to $N - 1$:",
        "     * If `arr[i] == arr[j]`, print `arr[i]` as duplicate and break inner loop."
      ],
      codeExample: `#include <stdio.h>

void printDuplicates(int arr[], int n) {
    printf("Duplicates: ");
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            if (arr[i] == arr[j]) {
                printf("%d ", arr[i]);
                break;
            }
        }
    }
    printf("\\n");
}

int main() {
    int arr[] = {1, 2, 3, 2, 4, 5, 1};
    printDuplicates(arr, 7); // 1 2
    return 0;
}`,
      interviewTip: "If array elements are between $1$ and $N$, duplicates can be found in $O(N)$ time and $O(1)$ space by negating the value at index `abs(arr[i])`."
    }
  },
  {
    id: 82,
    pdfId: "Q81",
    sectionId: 2,
    sectionName: "Section 2: Programming Logic & Pseudocode",
    topic: "Programming Logic",
    subtopic: "Pattern Printing (Triangle)",
    difficulty: "Medium",
    type: "Pseudocode",
    question: "Write the algorithm/pseudocode to find/print Pattern Printing (Triangle).",
    answer: {
      directAnswer: "Print an equilateral centered triangle pattern using nested loops: outer loop controls row number $i$, the first inner loop prints leading spaces $(N - i)$, and the second inner loop prints $(2i - 1)$ stars.",
      algorithmSteps: [
        "1. Loop $i$ from 1 to $N$ (rows):",
        "   - Loop $s$ from 1 to $N - i$: print `' '` (spaces).",
        "   - Loop $k$ from 1 to $2i - 1$: print `'*'` (stars).",
        "   - Print newline `\\n`."
      ],
      codeExample: `#include <stdio.h>

void printPyramid(int n) {
    for (int i = 1; i <= n; i++) {
        for (int s = 1; s <= n - i; s++) printf(" ");
        for (int k = 1; k <= (2 * i - 1); k++) printf("*");
        printf("\\n");
    }
}

int main() {
    printPyramid(4);
    return 0;
}`,
      interviewTip: "Formula breakdown: Row $i$ requires $(N - i)$ spaces followed by $(2i - 1)$ stars."
    }
  },
  {
    id: 83,
    pdfId: "Q82",
    sectionId: 2,
    sectionName: "Section 2: Programming Logic & Pseudocode",
    topic: "Programming Logic",
    subtopic: "Star Patterns",
    difficulty: "Basic",
    type: "Pseudocode",
    question: "Write the algorithm/pseudocode to find/print Star Patterns.",
    answer: {
      directAnswer: "Print a right-angled star triangle using an outer loop for row index $i$ (from 1 to $N$) and an inner loop printing $i$ stars per row.",
      algorithmSteps: [
        "1. For $i = 1$ to $N$:",
        "   - For $j = 1$ to $i$: print `'* '`.",
        "   - Print newline `\\n`."
      ],
      codeExample: `#include <stdio.h>

int main() {
    int n = 4;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            printf("* ");
        }
        printf("\\n");
    }
    return 0;
}`,
      interviewTip: "Always clearly separate the row loop (outer) from the column content loop (inner)."
    }
  },
  {
    id: 84,
    pdfId: "Q83",
    sectionId: 2,
    sectionName: "Section 2: Programming Logic & Pseudocode",
    topic: "Programming Logic",
    subtopic: "Number Patterns",
    difficulty: "Basic",
    type: "Pseudocode",
    question: "Write the algorithm/pseudocode to find/print Number Patterns.",
    answer: {
      directAnswer: "Print sequential number patterns (like Floyd's Triangle) by maintaining a running counter incremented each time a number is printed across the inner loop.",
      algorithmSteps: [
        "1. Initialize `count = 1`.",
        "2. For $i = 1$ to $N$:",
        "   - For $j = 1$ to $i$:",
        "     * Print `count`.",
        "     * `count++`.",
        "   - Print newline."
      ],
      codeExample: `#include <stdio.h>

// Floyd's Triangle
int main() {
    int n = 4, count = 1;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            printf("%2d ", count++);
        }
        printf("\\n");
    }
    return 0;
}`,
      interviewTip: "Floyd's triangle of $N$ rows prints a total of $N(N + 1) / 2$ numbers."
    }
  },
  {
    id: 85,
    pdfId: "Q84",
    sectionId: 2,
    sectionName: "Section 2: Programming Logic & Pseudocode",
    topic: "Programming Logic",
    subtopic: "Alphabet Patterns",
    difficulty: "Medium",
    type: "Pseudocode",
    question: "Write the algorithm/pseudocode to find/print Alphabet Patterns.",
    answer: {
      directAnswer: "Alphabet patterns are printed by mapping loop counters to ASCII character offsets starting from `'A'` ($65$) up to `'A' + j`.",
      algorithmSteps: [
        "1. For $i = 0$ to $N - 1$:",
        "   - For $j = 0$ to $i$:",
        "     * Print character `'A' + j`.",
        "   - Print newline."
      ],
      codeExample: `#include <stdio.h>

int main() {
    int n = 4;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j <= i; j++) {
            printf("%c ", 'A' + j);
        }
        printf("\\n");
    }
    return 0;
}`,
      interviewTip: "In C, arithmetic with `char` types works directly with their underlying ASCII codes (`'A' + 1 == 'B'`)."
    }
  },
  {
    id: 86,
    pdfId: "Q85",
    sectionId: 2,
    sectionName: "Section 2: Programming Logic & Pseudocode",
    topic: "Programming Logic",
    subtopic: "Sum of Array Elements",
    difficulty: "Basic",
    type: "Pseudocode",
    question: "Write the algorithm/pseudocode to find/print Sum of Array Elements.",
    answer: {
      directAnswer: "Traverse the array sequentially from index 0 to $N-1$ using a loop, adding each element `arr[i]` to an accumulator variable `sum` initialized to 0 in $O(N)$ time.",
      algorithmSteps: [
        "1. Set `sum = 0`.",
        "2. For $i = 0$ to $N - 1$:",
        "   - `sum = sum + arr[i]`",
        "3. Return `sum`."
      ],
      codeExample: `#include <stdio.h>

int sumArray(int arr[], int n) {
    int sum = 0;
    for (int i = 0; i < n; i++) sum += arr[i];
    return sum;
}

int main() {
    int nums[] = {5, 10, 15, 20};
    printf("Array Sum = %d\\n", sumArray(nums, 4)); // 50
    return 0;
}`,
      interviewTip: "Always initialize `sum = 0` before the loop; omitting initialization leaves garbage memory in `sum`."
    }
  },
  {
    id: 87,
    pdfId: "Q86",
    sectionId: 2,
    sectionName: "Section 2: Programming Logic & Pseudocode",
    topic: "Programming Logic",
    subtopic: "While vs For Loop",
    difficulty: "Medium",
    type: "Theory",
    question: "What is the difference between a while loop and a for loop? Explain with a scenario when you would prefer one over the other.",
    answer: {
      directAnswer: "A `for` loop bundles initialization, condition, and increment into a single header (best when the number of iterations is known beforehand), while a `while` loop checks only a condition (best when iterations depend on external events or input).",
      explanation: [
        "**Scenario for `for` loop**: Iterating over fixed bounds like arrays (`for (int i = 0; i < 100; i++)`).",
        "**Scenario for `while` loop**: Reading input until EOF or sentinel: `while (scanf(\"%d\", &val) != EOF)` or traversing a linked list `while (node != NULL)`."
      ],
      comparisonTable: {
        headers: ["Aspect", "`for` Loop", "`while` Loop"],
        rows: [
          ["Structure", "All 3 loop control steps consolidated in header", "Only condition in header; init & update separated"],
          ["Best Used", "Deterministic iterations (ranges, arrays)", "Condition-driven / indeterminate iterations"],
          ["Variable Scope", "Loop counter scoped to loop in C99+", "Counter typically declared outside the loop"]
        ]
      },
      interviewTip: "Any `for` loop can be converted into a `while` loop and vice-versa; the choice is about semantic clarity."
    }
  },
  {
    id: 88,
    pdfId: "Q87",
    sectionId: 2,
    sectionName: "Section 2: Programming Logic & Pseudocode",
    topic: "Programming Logic",
    subtopic: "Array vs Pointer Usage",
    difficulty: "Medium",
    type: "Theory",
    question: "What is the difference between an array and a pointer, and when should each be used while designing a program?",
    answer: {
      directAnswer: "Use arrays when you have a fixed collection of elements whose size is known at compile-time and memory should be automatically managed on the stack. Use pointers when you need dynamic memory allocation, efficient parameter passing without copying, or building dynamic data structures like Linked Lists and Trees.",
      comparisonTable: {
        headers: ["Design Factor", "Choose Array", "Choose Pointer"],
        rows: [
          ["Memory Allocation", "Fixed static/stack allocation", "Dynamic heap allocation (`malloc`)"],
          ["Size Flexibility", "Fixed compile-time size", "Dynamically resizable (`realloc`)"],
          ["Overhead", "Zero pointer overhead", "4 or 8 bytes per pointer variable"],
          ["Data Structures", "Lookup tables, fixed matrix buffers", "Linked lists, binary trees, graphs"]
        ]
      },
      interviewTip: "In embedded software, statically sized arrays are often preferred over heap pointers to eliminate dynamic heap fragmentation and memory leaks."
    }
  },
  {
    id: 89,
    pdfId: "Q88",
    sectionId: 2,
    sectionName: "Section 2: Programming Logic & Pseudocode",
    topic: "Programming Logic",
    subtopic: "SDLC Awareness",
    difficulty: "Medium",
    type: "Theory",
    question: "What is SDLC (Software Development Life Cycle)? Briefly explain its phases and why understanding it is useful for a programmer.",
    answer: {
      directAnswer: "SDLC is a structured engineering framework defining the complete lifecycle of software development from initial conception to retirement, ensuring high quality, predictable delivery, and defect reduction.",
      explanation: [
        "**Core Phases of SDLC**:",
        "1. **Requirement Analysis**: Gathering functional and non-functional specifications from stakeholders.",
        "2. **System Design (Architecture)**: Defining architecture, database schemas, modules, and API contracts.",
        "3. **Implementation (Coding)**: Writing clean, modular, standards-compliant source code.",
        "4. **Testing & Verification**: Unit testing, integration testing, and bug fixing.",
        "5. **Deployment**: Releasing to production environments.",
        "6. **Maintenance**: Monitoring, patching bugs, and adding enhancements.",
        "**Why Useful for Programmers**: Gives context on why code standards, test cases, and documentation are critical beyond just writing code."
      ],
      interviewTip: "Common SDLC models include Waterfall, Agile/Scrum, and DevOps CI/CD."
    }
  },
  {
    id: 90,
    pdfId: "Q89",
    sectionId: 2,
    sectionName: "Section 2: Programming Logic & Pseudocode",
    topic: "Programming Logic",
    subtopic: "Call by Value vs Call by Reference",
    difficulty: "Medium",
    type: "Theory",
    question: "What is the difference between call by value and call by reference? Explain a situation where call by reference is necessary.",
    answer: {
      directAnswer: "In call by value, parameters receive local copies of argument values, leaving caller variables protected from change. In call by reference (via pointer arguments), memory addresses are passed, allowing functions to directly alter caller variables or return multiple results.",
      explanation: [
        "**When Call by Reference is Necessary**:",
        "1. **Mutating Caller State**: Functions like `swap(&a, &b)` or `scanf(\"%d\", &x)` that must modify the caller's variables.",
        "2. **Returning Multiple Values**: A function can return only one value via `return`, but can return unlimited values through pointer arguments.",
        "3. **Passing Large Structures**: Passing `struct HeavyData *ptr` copies only 8 bytes rather than copying thousands of bytes onto the call stack."
      ],
      codeExample: `#include <stdio.h>

// Call by reference is necessary to modify caller variables
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x = 100, y = 200;
    swap(&x, &y);
    printf("Swapped: x=%d, y=%d\\n", x, y); // 200, 100
    return 0;
}`,
      interviewTip: "Remember that `scanf` requires `&var` precisely because it relies on call-by-reference to write parsed inputs into your variable."
    }
  },
  {
    id: 91,
    pdfId: "Q90",
    sectionId: 2,
    sectionName: "Section 2: Programming Logic & Pseudocode",
    topic: "Programming Logic",
    subtopic: "Compile-Time vs Run-Time Errors",
    difficulty: "Medium",
    type: "Theory",
    question: "What is the difference between a compile-time error and a run-time error? Give one example of each.",
    answer: {
      directAnswer: "A compile-time error is detected by the compiler before program execution begins (preventing executable generation), while a run-time error occurs during actual program execution when an illegal operation is performed.",
      comparisonTable: {
        headers: ["Aspect", "Compile-Time Error", "Run-Time Error"],
        rows: [
          ["Detection Stage", "During compilation (Syntax / Type check)", "During execution while running"],
          ["Executable Created?", "No executable binary is produced", "Executable exists but terminates abnormally"],
          ["Causes", "Syntax errors, missing semicolons, undeclared variables", "Division by zero, NULL pointer dereference, buffer overflow"],
          ["Fixability", "Flagged with precise file and line numbers by compiler", "Requires debuggers (GDB), logging, and boundary checks"]
        ]
      },
      codeExample: `#include <stdio.h>

int main() {
    // Compile-time error example:
    // int a = 5   <-- Missing semicolon: Compiler catches this immediately!

    // Run-time error example:
    int x = 10, y = 0;
    // int z = x / y; // Division by zero: Compiles fine, crashes at runtime!
    printf("Safety checks prevent runtime crashes.\\n");
    return 0;
}`,
      interviewTip: "A third category is **Logical Error** (semantic bug): the program compiles and runs without crashing, but yields mathematically incorrect results."
    }
  }
];
