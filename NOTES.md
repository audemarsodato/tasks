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