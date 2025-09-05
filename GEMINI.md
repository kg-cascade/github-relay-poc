---

### Project Overview

This project is a **Proof of Concept (PoC)** application designed to test and evaluate the integration of several key technologies to build a fast and efficient web application. Our primary goal is to deliver the best possible user experience by optimizing data fetching and state management.

We are specifically focusing on the following technologies:
* **Relay**: For declarative and efficient data fetching from the GitHub GraphQL API. The project will leverage Relay's capabilities to manage client-side data, handle caching, and optimize network requests.
* **Ark UI**: A design system to build accessible and composable UI components. We will use Ark UI to create a clean, modern, and user-friendly interface.
* **TanStack Router**: To manage application routing with a focus on performance and seamless navigation.
* **TanStack Query**: To optimize data fetching and state management for areas not handled by Relay, ensuring a unified and performant data layer across the entire application.

The application will interact with the **GitHub GraphQL API** to showcase Relay's power in a real-world scenario.

---

### Best Practices and Conventions

#### React Best Practices

- **Functional Components & Hooks**: Prefer functional components and React Hooks for all new development. Avoid class components.
- **State Management**: Use **Relay** for all data from the GraphQL API. Use **TanStack Query** for any other API calls (e.g., REST endpoints) or for data that does not fit the Relay model. Avoid excessive use of `useState` for global application state.
- **Component Composition**: Build small, reusable components. Use props to pass data down and callbacks to pass events up. Avoid prop drilling by leveraging Context API or a dedicated state management solution (like Redux Toolkit if needed for non-Relay state).
- **Code Splitting**: Implement code splitting to load components and routes lazily, using `React.lazy` and `Suspense` to improve initial load times.

#### Modern Technologies & Approaches

- **TypeScript**: Use TypeScript for all components and logic to ensure type safety and improve developer experience.
- **Declarative Approach**: Focus on a declarative style of programming. Describe _what_ the UI should look like for a given state, rather than _how_ to transition between states.
- **Performance Optimization**: Prioritize performance. This includes memoization with `React.memo`, `useCallback`, and `useMemo` where necessary.

---

### Key Tasks

- **Task 1: Relay Setup**: Configure the Relay environment to connect to the GitHub GraphQL API. Create a root query to fetch the current user's data (e.g., username and profile picture).
- **Task 2: Ark UI Integration**: Create a header component using Ark UI that displays the fetched user information.
- **Task 3: Routing**: Set up a basic routing structure using TanStack Router with at least two routes: a home page and a profile page.
- **Task 4: TanStack Query**: Implement a data-fetching logic using TanStack Query for a separate, non-GraphQL endpoint (e.g., a simple REST API mock) to demonstrate its use alongside Relay.

By following these guidelines, we can ensure the PoC is a success and provides valuable insights into the performance and developer experience of our chosen stack.
