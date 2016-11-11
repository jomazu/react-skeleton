## Environment Tools: The Facebook Way

- <a href="http://browserify.org/" target="_blank">Browserify</a> - allows you to write code (in the browser) that uses `require`, in the same way you would use it in Node.js. In essence, it allows the browser to use NPM modules.

- <a href="https://babeljs.io/" target="_blank">Babel</a> - compiles statically (strongly) typed code (e.g. <a href="http://www.ecma-international.org/ecma-262/6.0/index.html" target="_blank">ES6</a> or <a href="https://jsx.github.io/" target="_blank">JSX</a>) to dynamically (weakly) typed, browser-readable JavaScript.

- <a href="https://github.com/babel/babelify" target="_blank">Babelify</a> - compile JSX code to work with Browserify - i.e. allows you to use Babel with Browserify.

- <a href="https://www.npmjs.com/package/babel-preset-react" target="_blank">Babel-Preset-React (NPM)</a> - a babel preset (array of babel plugins), which is specific to React. It is used to transform Babelify and Babel into JavaScript code. In other words, it tells Babel how to compile JSX.

- <a href="https://github.com/substack/watchify" target="_blank">Watchify</a> - a watch mode for browserify builds. It instantly compiles code everytime a script change is made - i.e. watches for code changes and instantly starts compiling when they are made.

- <a href="https://www.npmjs.com/" target="_blank">NPM</a> - starting as a node package manager for the server-side, NPM has evolved to include packages that can be used in the browser - on the front-end. Thus, NPM is a registry for JavaScript modules (bits of reusable code called packages). It's a way to reuse code from other developers, and also a way to share your code with them, and it makes it easy to manage the different versions of code.

- <a href="https://nodejs.org/en/" target="_blank">Node.js</a> - a JavaScript runtime built on <a href="https://developers.google.com/v8/" target="_blank">Chrome's V8 JavaScript engine</a>. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

- <a href="https://facebook.github.io/react/" target="_blank">React</a> - an open-source JavaScript library for building user interfaces. Built and maintained by Facebook.
