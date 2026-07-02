- JavaScript falsy values
  - false
  - 0     
  - ""
  - null
  - undefined
  - NaN



You can improve the display task function by seperating the task filter
Get each quadrants task and pass them to the function to be displayed
Faster display time since it does not search before displaying them

What I learned
- You dont need another useState variable if what youre gonna create is a derived state, a variable that needs another useState variable
    - changed isEmpty variable from a useState variable since it derives its values from tasks in Quadrants.jsx
    - The cause of showing the empty quadrants labels when loading is not checking if is not loading and 0 length of pending tasks inside the useeffect
  
### Git commit message conventions
1. Types
   - feat: Introduces a brand new feature to the codebase (triggers a Minor version bump in SemVer).
   - fix: Patches a bug or resolves an issue in your software (triggers a Patch version bump in SemVer).
   - refactor: Rewrites or restructures code without altering its external behavior or adding features.
   - perf: A special category of refactoring focused specifically on improving execution performance.
   - docs: Modifies markdown files, code comments, or external documentation exclusively.
   - style: Changes code formatting, white-space, or missing semi-colons without affecting behavior.
   - build: Modifies build tools, configurations, external dependencies, or project versions.
   - ci / ops: Adjusts operational scripts, infrastructure (IaC), or automated CI/CD pipeline steps.
   - chore: General maintenance tasks like updating .gitignore or modifying asset configurations.
2. Scope
   - Example: feat(auth): add OAuth2 login or fix(parser): resolve array parsing crash
3. Rules
   - Limit to 50 characters
   - Use imperative mood like Phrase the subject line as a command or direct instruction (e.g., "Add feature" instead of "Added feature").
   - Dont end with a period
   - Explain what and why, not how


### Git branched naming conventions
There isn't a single official standard, but there are conventions that are widely used in professional teams. The goal is for someone to immediately understand **what the branch is for**.

## Common convention

```text
<type>/<description>
```

Examples:

```text
feature/user-authentication
feature/drag-and-drop
feature/completed-tasks

fix/loading-state
fix/delete-modal

refactor/task-context
refactor/api-client

docs/update-readme

chore/dependencies
chore/eslint

test/task-api
```

This is the convention I'd recommend for you.

---

## Common branch types

| Type        | Purpose                                      |
| ----------- | -------------------------------------------- |
| `feature/`  | New functionality                            |
| `fix/`      | Bug fixes                                    |
| `refactor/` | Improve code without changing behavior       |
| `docs/`     | Documentation                                |
| `test/`     | Tests                                        |
| `chore/`    | Maintenance (dependencies, configs, tooling) |
| `hotfix/`   | Critical production fixes                    |

---

## Naming style

Use:

* lowercase
* hyphens (`-`)
* short but descriptive

Good:

```text
feature/user-authentication
feature/completed-tasks
feature/ai-task-suggestions
fix/loading-flash
refactor/tasks-context
```

Avoid:

```text
NewFeature
Feature1
login
branch2
testbranch
```

---

## Your EisenPlan branches

Based on the roadmap we've discussed, I could imagine branches like:

```text
feature/user-authentication
feature/user-profile
feature/task-search
feature/task-filter
feature/task-history
feature/ai-task-prioritization
feature/ai-cooking-assistant   // for your future cooking app
fix/loading-state
fix/mobile-layout
refactor/api-service
docs/readme
```

Notice how you can tell what each branch contains without opening it.

---

## Branches vs commit messages

A lot of beginners mix these up.

Branch:

```text
feature/user-authentication
```

Commits on that branch:

```text
feat: generate guest user UUID
feat: add signup endpoint
feat: implement login form
fix: validate email input
refactor: simplify auth middleware
```

The **branch** describes the overall goal, while **commits** describe each individual change.

---

## My recommendation for you

Since you're building a portfolio and want to follow professional practices, I'd consistently use:

```text
feature/<feature-name>
fix/<bug-name>
refactor/<area>
docs/<topic>
chore/<task>
```

It's simple, widely recognized, and scales well as your projects become larger and more collaborative.

### HTTP status codes
- 400 - bad request, can be used in missing inputs