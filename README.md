# Welcome to the Techst

This repository contains technical tests used here at [Once](https://www.once.app). Make sure you have [Node](https://nodejs.org) installed (LTS 12+) aswell as [Docker](https://docs.docker.com/install) and [docker-compose](https://docs.docker.com/compose/install).

```bash
# Once you cloned this repository, you will need to:
$> cd backend
$> docker-compose up -d

# Then you will run
$> cd ../frontend
$> npm i
$> npm run storybook
# Your browser should be opened directly on Storybook
```

_Never forget: [hooks are life](https://www.youtube.com/watch?v=x2QBDQXn3iU)_ :wink:

**Available exercises:**
- [The CodeInput component](#the-codeinput-component)

Without further ado, let's dive into the coding part :computer:!
<p align="center">
  <img width="300" height="300" src="https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif" />
</p>

## The CodeInput component

In this exercise, you will have to recode our CodeInput component.

**_What's the CodeInput component?_** you may ask, it's pretty simple; you have a working example on the login/signup flow on our [Editor](https://editor.once.app). The user enters its email, receives a one-time 6-digit code by email and uses it to log in.

The user can either type this code, or paste it directly. Because we like technical challenges, the form used to enter the code is made of `n` inputs, where `n` is the total number of digits.

We won't be asking you to do the design for this, but to make all the logical part.

You will code inside this file [frontend/app/components/CodeInput/index.tsx](frontend/app/components/CodeInput/index.tsx) (for the first part at least). It's fine if you're not totally comfortable with Typescript, that's what peer-programming is made for :smile:

It looks indeed kinda dumb for now, here's what you will need to do _(in no specific order of course)_:
- Make the inputs only accept **1 digit** per box
- Automatically move the cursor to the next one once a box has been filled
- If the last box is filled, trigger the `onCodeFull` function sent as prop to the component (you have its signature on top of the file if ever)
- Whatever box the user clicks on, the cursor must be set at the left-most empty box
- If the user tries to paste its code, it should fill as many empty boxes as it can
- Let's say you have a 6-digit code and it's already full with `9876`, pasting `123456` will trigger the `onCodeFull` function with `987612`
- Backspacing in one of the box deletes the content of the last filled box and moves the cursor to it
- If the CodeInput component receives the prop `error`, it has to be forwarded to the boxes so they change their style accordingly

As you can see, we're visualising our code using [Storybook](https://storybook.js.org), but [wouldn't it be nice](https://www.youtube.com/watch?v=lD4sxxoJGkA) if we could send an API request when `onCodeFull` is being triggered?

[frontend/app/containers/App/index.tsx](frontend/app/containers/App/index.tsx) is pretty empty for now, it's time for you to fill it aswell!

Here is the backend schema:
```graphql
type AuthPayload {
  isSignup: Boolean!
  user: User!
}

type Mutation {
  emailAuth(email: String!): Boolean!
  validateCode(email: String!, code: String!): AuthPayload!
}

type Query {
  user(email: String!): User
}

type User {
  id: ID!
  email: String!
  name: String
  description: String
  picture: String
}
```
Considering the user already put this email (which you can choose since if the user does not exist we create it and if it does we just log it in):
- Code a simple (and ugly) button to request the server a new code, which should in theory be sent by email but since we're in development mode, you can get it by running `docker-compose logs -f api` in the console (in the `backend` directory)
- Using the code you received, send it using the :sparkles:magnificient :sparkles: [CodeInput](frontend/app/components/CodeInput/index.tsx) component you just made
- Print out the data you just received right below (again, no styling is required) to make sure your mutation went well!
