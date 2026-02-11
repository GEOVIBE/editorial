# Development Conventions

> This document is an evergreen and evolving with time, collaboration and editions are welcome and highly anticipated 🪴

## Principles

### Bigger Picture

- Strive for [_simplicity_](https://joshmoody.org/blog/your-code-is-not-simple-enough/). Don't over-engineer solutions. [Complexity BAD](https://grugbrain.dev/)!
- Encourage **collaboration** among your peers. Provide meaningful feedback and engage in discussions about solutions, methods, and practices within the team.
- Don't let yourself be bogged down by chasing "best" practices or solutions, [premature optimization](https://www.youtube.com/watch?v=tKbV6BpH-C8), excessive tooling, or striving for "future-proof" extensibility.
- Avoid complicated system design in the beginning. Plan in advance _just enough_ to meet the requirements.
- Don't forget to _refactor_ sub-optimal decisions later on.
- Choose _boring_ technologies. Opt for simplicity, longevity, and widespread adoption. Prefer technologies built upon the language (of choice) built-in libraries or primitives, rather than reinventing the wheel.
- Document your [decisions process](https://github.com/joelparkerhenderson/architecture-decision-record?tab=readme-ov-file). Keep a development log for that purpose. It's always better to prefer simpler solution and to write a clear self-explanatory code. Create a decision record only when needed. For example, write a record, when you make a significant change to a code base, choose a technology or a architectural pattern for a whole project, perform some extensive research for you to base your decision at. Write those down, that would be especially useful for your peers and even for yourself, at a time when you'll come back to maintain your code. Also consider updating a log on how did you solve a complex problem or a bug in code base. The process of fixing code might teach you a lot about how does the system and technologies, on which it's built upon, do actually work. And it's worth writing down. In the decision logs _explain yourself_, your rationale and research behind the solution. Store documents in numerical order. Even if implementation changes, keep old logs, but prefix them with a disclaimer and a link to an updated document.
- Write loosly coupled code which is [easy to delete](https://programmingisterrible.com/post/139222674273/write-code-that-is-easy-to-delete-not-easy-to).
- [Make it work, make it right, make it fast](https://www.epicweb.dev/principles/craft/thinking-like-craftsperson/make-it-work-make-it-right-make-it-fast) — in that order.

### Details

- Write code in a declarative style rather than an imperative one. Let your code specify **WHAT** to do rather than **HOW** to do it.
- Prioritize immutability. As a general rule, avoid modifying the value of a variable or data structure once it's been declared. Instead, create a new verbose variable. Be mindful of JavaScript passing values as references; prefer methods like `.map()`, `.reduce()`, and `.filter()` over `.forEach()`.
- Utilize linters and formatting tools to maintain consistent [code style](./code_style_configs/README.md) throughout the codebase.
- Embrace the [early return pattern](https://www.youtube.com/watch?v=CFRhGnuXG-4) to escape branching `if`-statements. Rather than writing an `else` statement, return an "error" condition first and place the main logic below it.
- Implement [extraction](https://www.youtube.com/watch?v=CFRhGnuXG-4) decouple complex logic evaluating conditions for an `if`-statement into distinct functions. Call these functions from within the main method in a single line.
- Avoid mutating state outside of a function's scope (no side effects). Aim to write pure functions whenever possible.
- Don't write comments ([1](https://bran.name/the-truth-about-comments.html), [2](https://www.youtube.com/watch?v=Bf7vDBBOBUA)), prioritize self-explanatory declarative code with meaningful naming. Document additional information in related decision documents. If necessary, mark comments as `NOTE`.
- Choose thoughtful [names](https://www.youtube.com/watch?v=-J3wNP6u5YU) for functions and variables, as they contribute to maintaining the project in the future. Well-named functions should convey the purpose of the code without requiring additional documentation or comments. Don't over do it. Sometimes its alright to name an `error` as `err`, `element` as `el`, or `request` - `req`, just make sure that those name don't overlap with other names in their scope and their meaning is crystal clear out of their context. For counter variables in nested cycles (which should be used very rarely and with caution) use names in such order `i` for top-level (most of the times that one is an only one needed), `j` — for second level, `k` — for third. Mention unit values in a variable name (e.g. `delayMs`, `offsetKm`).
- Approach the development process in stages. Prioritize core functionality during the MVP stage, but document all ideas for features, non-blocking bugs, potential performance improvements, and place them into a backlog for future iterations.
- Put ideas where they belong. - Instructions for deploying or rolling out a project should reside in a `README` file in the root folder. Document common problems across different projects in an `/editorial` GitHub repository (only if they occur more than once). User story cards should be stored in a `/docs/user_stories/` folder within the project, and the backlog should be maintained in `/docs`.
- Minimize the number of dependencies you use. Strive for simplicity in your stack. Use defaults as much as possible. Source small utility features instead of bringing the full library. Later is easily achived with llms nowadays.
- Treat [errors as values](https://radzion.com/blog/attempt) and always handle them instead of throwing.
- Use URL to store [state](https://alfy.blog/2025/10/31/your-url-is-your-state.html).

## Conventions

> Disclaimer: Conventions aren't commandments, they can be broken (sometimes). However if you gonna break them, you gotta know your why and should be able to explain what are you doing in a given particular case.

### General

- 🚧 project management `Todo` / `Active` / `Done` / `Backlog` (user stories (txt cards)) (architecture decision documents) (issues -> milestones -> projects (optional))
- 🚧 definition of ready/done
- 🚧 communication channels
- Keep things simple, stick to one way of doing things in a project.
- Documentation should be relevant, you should update it on regular basis. Where should be only one source of truth for the docs, so keep them centralized.
- `TODO` / `FIXME` / `NOTE` / `HACK` — comments to mark code. Don't rely heavily on it. Use TODO Tree VSCode [plugin](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree) to highlight tags.

### Git

- **Branching Strategies**
  - Use "github flow" -- simple, branch-based workflow.
  - Keep `main` as source of latest deployable code. 
  - Create feature branches on top of `main`. 
  - Keep them small, focused, short-lived (a couple of days).
  - Give them short and descriptive names, allowing your collaborators to see on-going work at a glance.
  - Make a separate branch for each set of unrelated changes.
  - Each commit ideally should represent isolated, complete change. That way it can be easily reverted.
  - Merge feature branches back to `main` by openning pull requests.
  - Before opening a pr make sure to rebase feature branch on top of the target branch. Allowing for a fast forward merge.
  - Prefer _rebase_ over _merge_.
  - Clean up worktree and delete branches already merged into main.
- **Conventional Commits**
  - Commit often.
  - Commit small.
  - Stick to next conventions (read the [article](https://cbea.ms/git-commit/)):
    - Always write meaningfull commit messages.
    - Capitilize subject and write a short summary. Use imperative mood.
    - Use next set of words to set the subject (fit 90% of the cases): `Add`, `Update`, `Refactor`, `Fix`, `Delete`, `Lint`, `Format`, `Polish`.
      - `Add`: new features;
      - `Update`: changes functionallity of existing features;
      - `Refactor`: changes structure and not the functionality;
      - `Fix`: bugs;
      - `Polish`: changes look and feel;
      - `Lint/Format`: changes code's style or formatting.
    - Use the body to explain _what_ and _why_ instead of _how_.
    - Use interactive rebase to clean up your local commits.
- 🚧 review process
  - Reviewer should always run the code thyself.
  - Don't argue over style and preferences, focus on functionality.

### Code Style

- **JavaScript**
  - Avoid [ternaries](https://www.youtube.com/watch?v=mOwZhb9bZ5s) most of the times. They hide logic and combine conditionals with the assignment in one line. It's a good practice not to hide a complex logic and make it clear what does your code do at each moment of time. However sometimes ternaries are a necessary evil and it's okay to use them.
  - When reaching for objects think first if it's possible to use `Map` or `Set` instead.
  - Name boolean values with a `is-` prefix (e.g. `isOdd`, `isActive`).
  - Name constant values in `ALL_CAPS`.
  - Don't re-assign declared variables. Treat variables as if they are unmutable.
  - Avoid mutating object properties. When possible use `as const`.
  - Do **NOT** assign arrow function to [variables](https://www.youtube.com/watch?v=5iGGvJn8K1U), prefer normal function declaration. That way function would be interpreted by the language [beforehand](https://www.youtube.com/watch?v=EvfRXyKa_GI), so you could move logic (helper function) to any place of your code. Which makes code more readable.
  - Prefer `tabs` over `spaces`.
  - Always write `;` in the end of line. It prevents unexpected errors.
  - Set print width to 80 or 100 symbols.
  - Force trailing commas when possible in: objects, arrays, function parameters etc. That allows easier extensions in a future.
  - By default use `""` double quotes over `''`.
  - Always wrap compassion and declaration symbols (`=`, `>`, `!==` etc.) with spaces on each side. Example: `a === b`, and NOT `a===b`.
  - Don't wrap object and arrays with spaces.
  - Use `===/!==`, and NOT `==/!=`.
  - Use `null` for non-primitive empty values, and `undefined` in place of missing primitives. Also note that, `undefined` is system's way of marking absence of a value, where `null` signals an explicit lack of value.
  - Sort imports (from top to bottom): "css; node built-in modules; external; internal modules, constants, assets; types".
- **TypeScript**
  - Infer return types as much as possible. Write return types for the llms, but make sure that infers the return type and not the over way around.
- **HTML & CSS**
  - Use [semantic](https://pepelsbey.dev/articles/road-to-htmhell/) elements as much as possible. Even if a11y isn't a main priority at the moment, semantic HTML will improve usability over all. For example it doesn't mess tab focus, which allows "power" users to interact with an app via keyboard. At minimum try to use list for serialized date and basic page blocks for usual layout (`<nav>`, `<main>`, `<aside>`, `<body>`).
  - Keep UI logic within the html as much as possible. Use proper tags for interactive elements. Use tag state (e.g., checked) and css selectors to create menus and dropdowns without javascript.
  - [Alphabetize](https://goodenough.us/blog/2023-02-10-all-about-css-alphabetize-normalize-and-dark-mode-itize/). When writing vanilla css put sort properties in an alphabetical order to enforce consistency.
  - Keep inner and outer scopes separately. Define outer scope relation ship for a parent element (possibly even a specific wrapper), and inner scope properties within itself.
  - Don't mix styling with interactive functionality. Use classes for basic styling and custom html `data-` [attributes](https://blog.webdevsimplified.com/2020-10/javascript-data-attributes/) for [interactions](https://blog.webdevsimplified.com/2019-10/do-not-use-class-selectors-in-javascript/). Prefer `<button class='btn' data-is-active='true'>` over `<button class='btn active'>` or even BEM's `<button class='btn__is--active'>`. In that case you would not need to change css styling to apply js functionality, that makes it more verbose, separates controls from styles.
  - Do **NOT** use [margins](https://mxstbr.com/thoughts/margin/). Use wrapper components instead.
  - Don't overuse position absolute.
  - Tailwind is alright. It implements locallity of behavior [pattern](https://htmx.org/essays/locality-of-behaviour/). You style is contained in your markup and it's good. However it's a dependency and, as a rule of thumb, dependencies should be avoided, when possible.
  - When using tailwind use prettier plugin to sort its classes.

## Domain Specific And Common Terms

| **Name** | **Description** |
| -------- | --------------- |
|  SLA     | Service Level Agreement |
|  O&M     | Operation & Maintanance |
|  PoC     | Proof Of Concept |
|  MVP     | Minimum Viable Product |
|  IoT     | Internet of Things |
|  MQTT    | Communication protocol for IoT devices |
|  GCP     | Ground Control Points (for georeferencing drone captured imagery) |
|  VLOS    | Visual Line of Sight (drone flight height) |
|  BVLOS   | Beyond Visual Line of Sight (drone flight height) |
|  ROI     | Return of Investment |
|  ETA     | Estimated Time of Arrival |
|  GSD     | Ground Sample Distance (drone) |
|  RBAC    | Role Based Access Control |
|  AEC     | Architecture, Engineering, Construction |
|  DEM     | Digital Elevation Model |
|  DTM     | Digital Terrain Model (bare earth) |
|  DSM     | Digital Surface Model (includes buildings) |
|  ODM     | Open Drone Map (software) |
|  UAS     | Unarmed Aerial Vechile (drone) |
|  ERP     | Enterprise Recource Planning |
|  SCADA   | Supervisory Control and Data Acquisition (iot related) |
