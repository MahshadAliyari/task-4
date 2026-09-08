# JavaScript Interactive UI

A small interactive web project built with vanilla JavaScript.

This project focuses on DOM manipulation, events, `classList`, Event Delegation, Tabs, Modal, and Dropdown interactions.

---

## 📌 Project Overview

This project is the fourth JavaScript exercise and focuses on creating interactive UI components without using any JavaScript libraries or frameworks.

The project includes:

- Tabs
- Modal
- Dropdown
- Event handling
- Event Delegation
- Dynamic class management with `classList`

The main goal is to understand how JavaScript interacts with HTML and CSS through the DOM.

---

## ✨ Features

### Tabs
- Switch between different tab contents
- Active tab is highlighted
- Only the selected tab content is displayed

### Modal
- Open the modal
- Close the modal
- Control the modal state using JavaScript and CSS classes

### Dropdown
- Open and close the dropdown menu
- Toggle the dropdown state using `classList.toggle()`

---

## 🛠 Technologies

- HTML5
- CSS3
- JavaScript (Vanilla JS)

No external JavaScript libraries or frameworks were used.

---

## 🧠 JavaScript Concepts Used

This project helped practice the following JavaScript concepts:

- DOM Selection
- `querySelector()`
- `addEventListener()`
- Event Object
- Event Delegation
- `event.target`
- `matches()`
- `closest()`
- `dataset`
- `classList.add()`
- `classList.remove()`
- `classList.toggle()`
- `classList.contains()`
- `preventDefault()`
- `forEach()`
- Functions
- Arrow Functions
- `const` and `let`

---

## 🔄 Event Delegation

Event Delegation is used to handle events from multiple elements through a parent element.

Instead of adding an event listener to every individual element, the event listener is attached to their parent.

Example:

```js
tabsContainer.addEventListener("click", function (event) {
    if (event.target.matches(".tab")) {
        // Handle tab click
    }
});


## Live Demo
