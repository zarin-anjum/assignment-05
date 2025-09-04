What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: getElementById is for one specific element, getElementsByClassName is for multiple elements by class, and querySelector / querySelectorAll are more flexible and can use any CSS selector.

How do you create and insert a new element into the DOM?
Ans: In DOM, a new element can be created using document.createElement(), set its properties, and then finally insert it using appendChild(), prepend(), or insertBefore().

What is Event Bubbling and how does it work?
Ans: Event bubbling is when an event starts on the innermost element and then "bubbles up" through it its parent elements all the way to the document root. For example, when a button inside a div is clicked, it triggers the button first, then the div, and so on.

What is Event Delegation in JavaScript? Why is it useful?
Ans: Event delegation attaches one listener to a parent to handle its children's events, saving memory, supporting dynamic elements, and keeping the code clean.

What is the difference between preventDefault() and stopPropagation() methods?
Ans: preventDefault() stops an element's default action, while stopPropaganda() prevents the event from bubbling or capturing further