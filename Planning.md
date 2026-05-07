#### What?
- A light and minimal system that helps users act on important tasks before they become urgent.

#### Who?
- Busy students and professionals.

#### Why?
- They're overwhelmed and don't want to think too much about the tool.
- To lighten their load from tasks and responsibilities by making is easier to manage and prioritize tasks.
- Reduce thinking
- Reduce clicks
- Reduce decisions

#### Goals (What habit are you trying to build?)
- Web/Desktop: Making sure important tasks get attention before they become urgent. By highlighting important but no urgent tasks or Q2
    - **Think/Plan before it's urgent**
- Mobile: Help users take immediate, focused action on the right task. By showing what task to be done currently and next and limit the displayed task in mobile into 3 tasks. **2 or 1 task/s in Q1 and 1 task in Q2**
    - **Act without thinking**
- Mobile Task Selection Logic
  - Q1: 
    - Earliest deadline
    - Manually prioritized
  - Q2:
    - closest deadline
    - oldest untouched task

#### MVP Goals and Functionalities
- Adding task (fast input), single input.
- 4 quadrant view.
- Drag and drop between quadrants. (Interaction)
- Calm UI.

#### UX flow
1. Add task in a single input.
2. Default it into Q2. If deadline is near (if input has deadline), put to Q1.
3. Visually nodge Q1 (subtle highlight to suggest urgency). Visually ask or say that the added task may be urgent and can be moved to Q1 if needed
4. Drag and drop tasks into other quadrants.

#### Notes
- Tasks limits of number of tasks for each quadrant
  - Soft limits: reduce visual comfort. Make the tasks inside the box more crowded.
    - Reduce spacing between tasks
    - Scrollable
    - Vertical stacking
- Full opacity for the top tasks and lower ones slightly reduced opacity or faded.

#### Core Loop
1. User add task (fast input)
2. Task appears / displays (default Q2)
3. User adjusts (drag/drop)
4. Mobile surfaces key tasks
5. User completes tasks

#### UX and UI Design
- [Layout and Design in Figma](https://www.figma.com/design/c09vORy3I8Ttq4gMqYTs9P/Tasks?node-id=1-92&t=du91ckqcFclg3Kg8-1)
- [Implementation and Developement in Miro.com](https://miro.com/app/board/uXjVGitVe40=/)

#### Sources
- [4 Quadrants of Time Management Explained: A Real-Life Example](https://www.bluelinkerp.com/blog/4-quadrants-of-time-management/)