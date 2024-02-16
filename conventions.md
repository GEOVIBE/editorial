
# Development Conventions

> This document is work in progress 🚧, collaboration and editions are welcome and highly anticipated 🪴

## Principles

### _Bigger Picture_

- Strive for [==simplicity==](https://ahastack.dev/concepts/simplicity/). Don't over-engineer solutions. [Complexity BAD](https://grugbrain.dev/)!
- Encourage your peers, ==collaborate==, provide meaningful feedback, engage the discussion about the solutions, methods and practices in a team. 
- Focus on business goals and ==end users==. Don't get slowed down by "best" practices, "best" solutions, [premature optimization](https://www.youtube.com/watch?v=tKbV6BpH-C8), tooling, "future proof" extensibility etc. 
- Avoid complicated system design in the beginning. Plan in advance ==just enough== to meet the _requirements_.
- Don't forget to ==refactor== sub-optimal decisions later on.
- Choose ==boring== technologies. Smth simple, long-supported and well-adopted. Smth built upon language (of choice) built-in library or primitives, which doesn't reinvent the wheel.
- Document your decisions process (ADR and complicated bug issues), attach research resources. ==Explain yourself==. Write down motivation behind the solution for the time being. Store such documents in numerical order, even if implementation was changed, just prefix the older solution with a disclaimer and a link to an updated document.

### _Details_

- Write code in Declarative style, instead of Imperative. Let your code tell by itself on **WHAT** to do, instead of **HOW** to do.
- Immutability. As a general rule of thumb, try not to modify value of an already declared variable/data structure. Create another variable instead, be aware of js passing values as links, avoid that, prefer `.map()`, `.reduce()`, `.filter()` instead of `.forEach()`.
- Use linters and formatting tools, to maintain persistent code style in all of a codebase.
- Use [early return pattern](https://www.youtube.com/watch?v=CFRhGnuXG-4) to escape branching `if`-statements. Instead of writing the else statement, return an "error" condition first, and put all of the main logic beneath it.
- Implement [extraction](https://www.youtube.com/watch?v=CFRhGnuXG-4) tactics for same reason. Decouple some complex logic evaluating the conditions for an `if`-statement into a distinct function. Call it from inside the method in one line.
- Avoid mutating state out of function scope, try to write pure functions when possible.
- Don't write comments ([1](https://bran.name/the-truth-about-comments.html), [2](https://www.youtube.com/watch?v=Bf7vDBBOBUA)), prefer self explanatory declarative code with thoughtful naming. Put additional info into the related decision doc. If absolutely necessary mark it as `NOTE`.
- Use thoughtful [names](https://www.youtube.com/watch?v=-J3wNP6u5YU) for functions an variables, since helps to maintain the project in a future (that "future proof" addition is required always). Well named functions explain the code without any documentation or comments. 
- Think of development process in stages. Focus on core functionality while in MVP stage. However document all ideas for features, non-blocking bugs, possible performance points of improvement, put them into a backlog for a future iterations.
- Put ideas where they belong. Instructions on how to deploy or roll out a project should be in a README in a root folder. Common problems across different project worth documenting in a `/editorial` gh repo (only if appeared more then once). User stories cards should be in a `/docs/user-stories/` folder inside a project. Backlog — in `/docs`.

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
 