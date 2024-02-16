
# Development Conventions

> This document is work in progress 🚧, collaboration and editions are welcome and highly anticipated 🪴

## Principles

### _Bigger Picture_

- Strive for [_simplicity_](https://ahastack.dev/concepts/simplicity/). Don't over-engineer solutions. [Complexity BAD](https://grugbrain.dev/)!
- Encourage __collaboration__ among your peers. Provide meaningful feedback and engage in discussions about solutions, methods, and practices within the team.
- Don't let yourself be bogged down by chasing "best" practices or solutions, [premature optimization](https://www.youtube.com/watch?v=tKbV6BpH-C8), excessive tooling, or striving for "future-proof" extensibility.
- Avoid complicated system design in the beginning. Plan in advance _just enough_ to meet the requirements.
- Don't forget to ==refactor== sub-optimal decisions later on.
- Choose _boring_ technologies. Opt for simplicity, longevity, and widespread adoption. Prefer technologies built upon the language (of choice) built-in libraries or primitives, rather than reinventing the wheel.
- Document your decisions process (ADR and complicated bug issues), attach research resources. _Explain yourself_. Explain your rationale behind the solution and store such documents in numerical order. Even if implementations change, prefix older solutions with a disclaimer and a link to the updated document.

### _Details_

- Write code in a declarative style rather than an imperative one. Let your code specify **WHAT** to do rather than **HOW** to do it.
- Prioritize immutability. As a general rule, avoid modifying the value of a variable or data structure once it's been declared. Instead, create a new variable. Be mindful of JavaScript passing values as references; prefer methods like `.map()`, `.reduce()`, and `.filter()` over `.forEach()`.
- Utilize linters and formatting tools to maintain consistent code style throughout the codebase.
- Embrace the [early return pattern](https://www.youtube.com/watch?v=CFRhGnuXG-4) to escape branching `if`-statements. Rather than writing an `else` statement, return an "error" condition first and place the main logic below it.
- Implement [extraction](https://www.youtube.com/watch?v=CFRhGnuXG-4) decouple complex logic evaluating conditions for an `if`-statement into distinct functions. Call these functions from within the main method in a single line.
- Avoid mutating state outside of a function's scope. Aim to write pure functions whenever possible.
- Don't write comments ([1](https://bran.name/the-truth-about-comments.html), [2](https://www.youtube.com/watch?v=Bf7vDBBOBUA)), prioritize self-explanatory declarative code with meaningful naming. Document additional information in related decision documents. If necessary, mark comments as `NOTE`.
- Choose thoughtful [names](https://www.youtube.com/watch?v=-J3wNP6u5YU) for functions and variables, as they contribute to maintaining the project in the future. Well-named functions should convey the purpose of the code without requiring additional documentation or comments.
- Approach the development process in stages. Prioritize core functionality during the MVP stage, but document all ideas for features, non-blocking bugs, potential performance improvements, and place them into a backlog for future iterations.
- Put ideas where they belong. - Instructions for deploying or rolling out a project should reside in a `README` file in the root folder. Document common problems across different projects in an `/editorial` GitHub repository (only if they occur more than once). User story cards should be stored in a `/docs/user-stories/` folder within the project, and the backlog should be maintained in `/docs`.

## Conventions

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
	- Avoid ternaries.
	- Use switch instead of lots of `if`-statements.
	- Reduce number of `if`-statements.
	- prefer `Array` over `Object`, don't depend on objects in each and every case
	- When reaching for objects think first if it's possible to use `Map` or `Set` instead.
	- Use [`let`](https://overreacted.io/on-let-vs-const/), but treat them as `const` (e.g. immutable).
	- Name boolean values with a `is-` prefix. Example: `isOdd`, `isActive`.
	- Prefer `tabs` over `spaces`.
	- Always write `;` in the end of line.
	- Stack `if`-statement right under a declared value if it's purpouse is to be used in that statement. Otherwise insert an empty string in between.
	- Always put empty string after `if`-statement and a return (only if it isn't in the end of a function).
	- Set print width to 80 symbols.
	- Tab width to 2.
	- Use trailing commas in objects and arrays.
	- By default use `""` double quotes.
	- Always wrap ` = ` sign with spaces on each side.
- **CSS**
	- Using some of [BEM](https://en.bem.info/) Principles (don't dig to deep on it), meaning: `Block__Element--Modifier`.
	- Alphabetize. Put properties inside a selector in an alphabetical order.
	- Keep things simple, stick to one way of doing things in a project.
	- Separate concerns. Define outer scope relation ship in a parent, and inner scope properties within itself.
	- Do **NOT** use margins. Use wrapper components instead.

## Domain Terms

| **Name** | **Description** |
| --- | --- |
|  |  |
 
