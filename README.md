# Welcome to the Techst

This repository contains technical tests used here at [Once](https://www.once.app). Make sure you have [Node](https://nodejs.org) installed (LTS 14+)!

```bash
# Once you cloned this repository, you will simply need to:
$> npm i
$> npm run dev
```

_Never forget: [hooks are life](https://www.youtube.com/watch?v=x2QBDQXn3iU)_ :wink:

**Available exercises:**
- [The CodeInput component](#the-codeinput-component)

Without further ado, let's dive into the coding part :computer:
<p align="center">
  <img width="300" height="300" src="https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif" />
</p>

## The CodeInput component

In this exercise, you will have to recode the `CodeInput` component.

**_What's the CodeInput component?_** you may ask, it's pretty simple; the user can either type or paste a `n`-digit code _(where `n` is the total number of digits)_. Because we like technical challenges, the form used to enter the code is made of `n` inputs instead of 1 big input.

We won't be asking you to do the design for this, but to make all the logical part. You can use the components `Form` and `Input` available for you in the `src/` folder.

You will code inside this file [src/CodeInput.tsx](src/CodeInput.tsx). Don't worry if you're not totally comfortable with Typescript, I can handle this part for you, that's what peer-programming is made for :smile:

It looks indeed kinda dumb for now, so here's what you will need to do _(in no specific order of course)_:
- Clicking on an **Input** should focus the left-most empty **Input**
- An **Input** should:
  - Only accept **1 DIGIT**
  - Move the cursor to the next one once filled _(focus the Input on the right)_
  - Delete its left neighbour content and focus it when pressing backspace
- If all the **Input**s are filled, trigger the `onCodeFull` function _(sent as prop)_
- If the user tries to paste a code, it should fill as many empty **Input**s as it can (and of course trigger the `onCodeFull` function ).
