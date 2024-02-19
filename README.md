# Development Conventions

> This document is work in progress 🚧, collaboration and editions are welcome and highly anticipated 🪴

## Principles

### _Bigger Picture_

- Strive for [_simplicity_](https://ahastack.dev/concepts/simplicity/). Don't over-engineer solutions. [Complexity BAD](https://grugbrain.dev/)!

- Encourage **collaboration** among your peers. Provide meaningful feedback and engage in discussions about solutions, methods, and practices within the team.

- Don't let yourself be bogged down by chasing "best" practices or solutions, [premature optimization](https://www.youtube.com/watch?v=tKbV6BpH-C8), excessive tooling, or striving for "future-proof" extensibility.

- Avoid complicated system design in the beginning. Plan in advance _just enough_ to meet the requirements.

- Don't forget to _refactor_ sub-optimal decisions later on.

- Choose _boring_ technologies. Opt for simplicity, longevity, and widespread adoption. Prefer technologies built upon the language (of choice) built-in libraries or primitives, rather than reinventing the wheel.

- Document your [decisions process](https://github.com/joelparkerhenderson/architecture-decision-record?tab=readme-ov-file). Keep a development log for that purpose. It's always better to prefer simpler solution and to write a clear self-explanatory code. Create a decision record only when needed. For example, write a record, when you make a significant change to a code base, choose a technology or a architectural pattern for a whole project, perform some extensive research for you to base your decision at. Write those down, that would be especially useful for your peers and even for yourself, at a time when you'll come back to maintain your code. Also consider updating a log on how did you solve a complex problem or a bug in code base. The process of fixing code might teach you a lot about how does the system and technologies, on which it's built upon, do actually work. And it's worth writing down. In the decision logs _explain yourself_, your rationale and research behind the solution. Store documents in numerical order. Even if implementation changes, keep old logs, but prefix them with a disclaimer and a link to an updated document.

### _Details_

- Write code in a declarative style rather than an imperative one. Let your code specify **WHAT** to do rather than **HOW** to do it.

- Prioritize immutability. As a general rule, avoid modifying the value of a variable or data structure once it's been declared. Instead, create a new verbose variable. Be mindful of JavaScript passing values as references; prefer methods like `.map()`, `.reduce()`, and `.filter()` over `.forEach()`.

- Utilize linters and formatting tools to maintain consistent code style throughout the codebase.

- Embrace the [early return pattern](https://www.youtube.com/watch?v=CFRhGnuXG-4) to escape branching `if`-statements. Rather than writing an `else` statement, return an "error" condition first and place the main logic below it.

- Implement [extraction](https://www.youtube.com/watch?v=CFRhGnuXG-4) decouple complex logic evaluating conditions for an `if`-statement into distinct functions. Call these functions from within the main method in a single line.

- Avoid mutating state outside of a function's scope. Aim to write pure functions whenever possible.

- Don't write comments ([1](https://bran.name/the-truth-about-comments.html), [2](https://www.youtube.com/watch?v=Bf7vDBBOBUA)), prioritize self-explanatory declarative code with meaningful naming. Document additional information in related decision documents. If necessary, mark comments as `NOTE`.

- Choose thoughtful [names](https://www.youtube.com/watch?v=-J3wNP6u5YU) for functions and variables, as they contribute to maintaining the project in the future. Well-named functions should convey the purpose of the code without requiring additional documentation or comments. Don't over do it. Sometimes its alright to name an `error` as `e`, `element` as `el`, or `request` - `req`, just make sure that those name don't overlap with other names in their scope and their meaning is crystal clear out of their context.

- Approach the development process in stages. Prioritize core functionality during the MVP stage, but document all ideas for features, non-blocking bugs, potential performance improvements, and place them into a backlog for future iterations.

- Put ideas where they belong. - Instructions for deploying or rolling out a project should reside in a `README` file in the root folder. Document common problems across different projects in an `/editorial` GitHub repository (only if they occur more than once). User story cards should be stored in a `/docs/user-stories/` folder within the project, and the backlog should be maintained in `/docs`.

## Conventions

> Disclaimer: Conventions aren't commandments, they can be broken (sometimes). However if you gonna break them, you gotta know your why and should be able to explain what are you doing in a given  particular case.

### _General_

- 🚧 git branching strategies

- 🚧 git naming strategies on conventional commits

- 🚧 review process

- 🚧 project management (issues -> milestones -> projects (optional)) (user stories (txt cards)) (architecture decision documents) (backlog)

- 🚧 definition of ready/done

- 🚧 communication channels

- Documentation should be relevant, you should update it on regular basis. Where should be only one source of truth for the docs, so keep them centralized.

- `TODO` / `FIXME` / `NOTE` — comments to mark code. Don't rely heavily on it. Use TODO Tree VSCode [plugin](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree) to highlight tags.

### _Code Style_

- **JavaScript**

  - Avoid [ternaries](https://www.youtube.com/watch?v=mOwZhb9bZ5s) most of the times. They hide logic and combine conditionals with the assignment in one line. It's a good practice not to hide a complex logic and make it clear what does your code do at each moment of time. However sometimes ternaries are a necessary evil and it's okay to use them.

  - Use `switch` instead of lots of `if`-statements.

  - Prefer `Array` over `Object`, don't depend on objects in each and every case.

  - When reaching for objects think first if it's possible to use `Map` or `Set` instead.

  - Use [`let`](https://overreacted.io/on-let-vs-const/), but treat them as `const` (e.g. immutable).

  - Name boolean values with a `is-` prefix (e.g. `isOdd`, `isActive`).

  - Stack `if`-statement right under a declared value if it's purpose is to be used in that statement. Otherwise insert an empty string in between.

  - Always put empty string after `if`-statement and a return (only if it isn't in the end of a function).

  - Do **NOT** assign arrow function to [variables](https://www.youtube.com/watch?v=5iGGvJn8K1U), prefer normal function declaration. That way function would be interpreted by the language [beforehand](https://www.youtube.com/watch?v=EvfRXyKa_GI), so you could move logic (helper function) to any place of your code. Which makes code more readable.

  - (Linting rules)

    - Prefer `tabs` over `spaces`.

		- Tab width to 2.

    - Always write `;` in the end of line. It prevents unexpected errors.

    - Set print width to 80 symbols.

    - Use trailing commas in objects and arrays.

    - By default use `""` double quotes over `''`.

    - Always wrap compassion and declaration symbols (`=`, `>`, `!==` etc.) with spaces on each side.

- **HTML & CSS**

  - Using some of [BEM](https://en.bem.info/) (stands for `Block__Element--Modifier`) methodology. In a nutshell it's a naming convention, so treat it as such, because as a web-framework it's outdated.

  - Use [semantic](https://pepelsbey.dev/articles/road-to-htmhell/) elements as much as possible. Even if a11y isn't a main priority at the moment, semantic HTML will improve usability over all. For example it doesn't mess tab focus, which allows "power" users to interact with an app via keyboard. At minimum try to use list for serialized date and basic page blocks for usual layout (`<nav>`, `<main>`, `<aside>`, `<body>`).

  - [Alphabetize](https://goodenough.us/blog/2023-02-10-all-about-css-alphabetize-normalize-and-dark-mode-itize/). Put properties inside a selector in an alphabetical order.

  - Keep things simple, stick to one way of doing things in a project. Try not to mix up grids with flexes, only when needed.

  - Keep inner and outer scopes separately. Define outer scope relation ship for a parent element (possibly even a specific wrapper), and inner scope properties within itself.

	- Don't mix styling with interactive functionality. Use classes for basic styling and custom html `data-` [attributes](https://blog.webdevsimplified.com/2020-10/javascript-data-attributes/) for [interactions](https://blog.webdevsimplified.com/2019-10/do-not-use-class-selectors-in-javascript/). Prefer `<button class='btn' data-is-active='true'>` over `<button class='btn active'>` or even BEM's `<button class='btn__is--active'>`. In that case you would not need to change css styling to apply js functionality, that makes it more verbose, separates controls from styles.

  - Do **NOT** use [margins](https://mxstbr.com/thoughts/margin/). Use wrapper components instead.

  - Don't overuse position absolute.

## Domain Terms

| **Name** | **Description** |
| -------- | --------------- |
|          |                 |
