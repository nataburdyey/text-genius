## TextGenius App

The `TextGenius` React app aims to generate paragraphs of placeholder text based on user input. It involves setting up a count state value using the `useState` hook, creating a `form` with a number input and a submit button, and importing a text array. When the user submits the form, the app extracts the first `n` paragraphs from the text array (where n is the count value) and displays them below the form. The paragraphs are rendered with unique IDs generated using the `nanoid` library.

<img src="./public/text-genius.png" alt="TextGenius"/>

### `nanoid`

nanoid is a small, fast, and secure library for generating unique IDs in JavaScript. It is designed to be as compact as possible while still providing a unique, unpredictable, and collision-resistant identifier.

The library generates random IDs that consist of a combination of uppercase and lowercase letters, as well as numbers. The default ID length is 21 characters, but this can be changed by passing a different length as an argument.

Here's an example of how to use nanoid to generate a unique ID:

```sh
npm i nanoid
```

```js
import { nanoid } from 'nanoid';

const id = nanoid(); // Generates a 21-character random ID

console.log(id); // Output: "Uakgb_J5m9g-0JDMbcJqL"
```