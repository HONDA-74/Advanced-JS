# Advanced JavaScript Labs 🚀

This repository contains my labs for the **Advanced JavaScript** course.  
Each lab is placed in a separate folder based on the lab day.

Currently, the repository contains **Lab 1** **Lab 2** **Lab 3** **Lab 4** only.

---

## 📁 Folder Structure

```
├── Lab1
│ ├── index.html
│ ├── index1.js
│ ├── index2.js
│ └── index3.js
│
├── Lab2
│ ├── index.html
│ ├── index1.js
│ └── index2.js
│
├── Lab3
│ ├── index.html
│ ├── index1.js
│ └── index2.js
│
├── Lab4
├── Lab5
├── Lab6
├── Lab7
├── Lab8
└── README.md
```
---

---

## 🧪 Lab 1

### 📌 Overview
This lab focuses on practicing **advanced JavaScript concepts**, including:
- Objects and methods
- Array manipulation
- Function arguments
- Closures
- Dynamic function creation

---

### 📄 index.html
- Basic HTML file to run JavaScript code.
- You can switch between JS files by commenting or uncommenting the `<script>` tags.

---

### 📄 index1.js – Sorted Linked List
- Implements a custom linked list using an array.
- The list is always **sorted**.
- Supported operations:
  - `push` / `pop`
  - `enqueue` / `dequeue`
  - `insert`
  - `remove`
  - `display`
- Throws errors when invalid operations are attempted.

---

### 📄 index2.js – Reverse Function Techniques
Demonstrates different ways to reverse function arguments:
- Using **rest parameters**
- Using `arguments` with:
  - `call`
  - `apply`
  - `bind`

Results are printed in the console for comparison.

---

### 📄 index3.js – Dynamic Getters & Setters
- Defines an object with properties and methods.
- Generates getters and setters dynamically using `getSetGen`.
- Uses:
  - `Object.keys`
  - Closures
  - `this` context handling

---
## 🧪 Lab 2

### 📌 Overview
This lab focuses on applying **object-oriented programming concepts in JavaScript** using constructor functions, recursion, closures, and proper error handling.

The lab includes two main tasks:
- Creating a **Numerical Sequence manager**
- Implementing a **Box & Book management system**

---

### 📄 index.html
- A simple HTML file to run the JavaScript code.
- You can switch between tasks by commenting or uncommenting the `<script>` tags.

---

### 📄 index1.js – Numerical Sequence
Implements a numerical sequence using a constructor function.

**Features:**
- Automatically generates a sequence using:
  - `start`
  - `end`
  - `step`
- Uses **recursion** to build the sequence.
- Uses **closures** to protect internal data.

**Supported operations:**
- `append(value)` → Adds the next valid value to the sequence.
- `prepend(value)` → Adds the previous valid value to the sequence.
- `pop()` → Removes the last element.
- `shift()` → Removes the first element.
- `display()` → Returns the full sequence.

❌ Throws an error if an invalid value is added.

---

### 📄 index2.js – Box & Book System
Implements a simple system for managing books inside a box using constructor functions.

#### 🔹 Book
Each book has:
- `title`
- `author`
- `pages`
- `numOfCopies`
- `numOfChapters`

#### 🔹 Box
Each box has:
- Dimensions (`width`, `height`, `depth`)
- `volume()` method
- `material`
- `numOfBooks`
- `contents` array

**Supported operations:**
- `addBook(book)`
  - Adds a book to the box or increases its number of copies if it already exists.
- `removeBook(book)`
  - Decreases the number of copies or removes the book completely.
- `findBook(title)`
  - Returns the book object by title.
- `display()`
  - Displays all books and their number of copies in the console.

❌ Throws errors when:
- Adding an object that is not a book
- Removing or searching for a book that does not exist

---
## Lac3
---
## ▶️ How to Run

1. Open `Lab1/index.html` in your browser.
2. Open **Developer Tools → Console**.
3. Uncomment the JS file you want to test.
4. Refresh the page to see the output.

---

## 📝 Notes
- This repository is for **learning and practice**.
- More labs will be added later.
