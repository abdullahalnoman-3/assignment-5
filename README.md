<div align="center">

# 🚀 DevStack

**DevStack** is a modern, interactive web application that helps developers explore different technologies and visually build their ideal development stack. Pick your favorite tools from various categories and assemble your ultimate tech stack with ease!

</div>

## 📖 Description

Building a tech stack can be overwhelming with so many options available today. **DevStack** simplifies this process by providing a curated list of modern development technologies. Users can browse through various tools, read brief descriptions, and add their preferred technologies to their personal stack. The application features a clean, responsive UI built with React and Tailwind CSS, complete with real-time toast notifications for a smooth user experience.

## 🛠️ Technology Stack

This project was built using the following modern web technologies:

- **Frontend Framework:** [React 19](https://react.dev/)
- **Programming Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Notifications:** [React Toastify](https://fkhadra.github.io/react-toastify/)
- **Build Tool:** [Vite](https://vitejs.dev/)

## ✨ Key Features

1. **Interactive Stack Builder:** Browse through a comprehensive list of technologies and seamlessly add or remove them from your personal stack with a single click.
2. **Real-time Notifications:** Enjoy a highly responsive user experience with instant toast notifications that provide feedback on every action (adding/removing tech).
3. **Responsive Design:** A fully responsive, beautiful user interface powered by Tailwind CSS and DaisyUI, ensuring a great experience on both desktop and mobile devices.

## 🚀 Getting Started

Follow these steps to run the project locally:

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd my-assignment-5
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

---
*Created with ❤️ for modern developers.*


## 📝 React Questions & Answers

**1. What is JSX, and why is it used in React?

JSX is a JavaScript syntax extension that resembles HTML. It is used to write UI markup directly within JavaScript, making component structure intuitive and readable.

**2. What is the difference between props and state?

props: Read-only, immutable data passed from parent to child.

state: Mutable, local data managed within the component that triggers re-renders on update.

**3. What does the useState hook do, and where did you use it in this project?

useState manages local, dynamic data in functional components. In App.tsx, it tracks the fetched list (technologies), user selections (stack), and the fetch status (loading).

**4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect handles side effects such as data fetching. It was used with an empty dependency array to fetch technologies.json automatically once the component mounts.

**5. Why does every item in a .map() list need a unique key prop?

Keys give list items stable identities. This helps React track which items are added, removed, or changed, enabling efficient DOM updates without re-rendering the entire list.

**6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying specific UI elements based on logic. In YourStack.tsx, it checks stack.length === 0 to display "Your stack is empty"; otherwise, it renders the selected items.

**7. How do you pass data between parent and child components?

Parent to Child: Passed directly via props (e.g., tech={tech}).

Child to Parent: The parent passes a callback function via props (e.g., onAdd), which the child invokes with data as arguments.