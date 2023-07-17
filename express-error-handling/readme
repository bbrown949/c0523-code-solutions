# express-error-handling

​
Using express middleware to handle errors.
​

## Before You Begin

​
Be sure to check out a new branch from `main` for this exercise. Detailed instructions can be found [**here**](../../guides/starting-an-exercise).
​

## Exercise

​
**For this exercise's commands to work properly, your terminal needs to be within the exercise's directory.** In your terminal, change directories with the `cd` command. This will change which directory your future commands are executed in.
​

```bash
cd name-of-exercise
```

​
**⚠️ Your terminal prompt should look like this with the name of the exercise at the end of the path as well as the branch name in `()` parenthesis. ⚠️**
​

#### Yes ✅

​

```shell
/workspaces/c000-code-solutions/name-of-exercise (name-of-exercise) λ
```

​

#### No ❌

​

```shell
/workspaces/c000-code-solutions (name-of-exercise) λ
```

​

#### Getting Started

​

1. Install all dependencies with `npm install`.
   ​

#### Complete the Server

​

1. Read the introduction and **Catching Errors** sections of [Error Handling](https://expressjs.com/en/guide/error-handling.html) in the official Express.js documentation.
1. **Important Note**
   - Express will _crash_ if an exception propagates out of a route handler. The safest way to avoid this problem is to wrap the _entire_ function body in a `try/catch` block.
   - When Express 5 is released, it will automatically call `next` if an exception propagates out of the route handler. This welcome change will make the `try/catch` block unnecessary.
1. Read the code in the provided `client-error.js` and `error-middleware.js` files.
1. Read the code in the provided `server.js` file. Notice that the `errorMiddleware` has been added as the last middleware of the `app`.
1. You will be [refactoring](https://en.wikipedia.org/wiki/Code_refactoring) the code in `server.js` in three ways. The code will get quite a bit shorter as a result.
   - Update all routes to include `next` as the third parameter of their callbacks
     ```js
     app.get('/api/notes', (req, res, next) => {
     ```
   - Update all exception catch handling to pass the `err` object to `next()` instead of logging the error and sending a `500` response.
     ```js
     } catch (err) {
       next(err);
     }
     ```
   - Update **all** places where `4xx` responses are being sent. Instead of sending a response and returning, [`throw`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw) a `new ClientError`, passing it a `status` and `message`. Verify that all such `throw` statements are wrapped in a `try/catch`.
   ```js
   if (Number.isNaN(id) || !Number.isInteger(id) || id < 1) {
     throw new ClientError(400, 'id must be a positive integer');
   }
   ```
1. Test your routes with HTTPie in a separate terminal to verify that the server is working correctly and updating the database correctly where applicable.
   ​

### Finish

​
**For `git` to work properly, your terminal needs to be within the root of your local repository.** You have been executing commands in your exercise directory, but it's time to return "up" one level. In your terminal, change directories with the `cd` command as shown in the example below. This will change which directory your future commands are executed in.
​
**`..` means "parent directory".**
​

```bash
cd ..
```

​

#### Yes ✅

​

```shell
/workspaces/c000-code-solutions (name-of-exercise) λ
```

​

#### No ❌

​

```shell
/workspaces/c000-code-solutions/name-of-exercise (name-of-exercise) λ
```

​

## Submitting Your Solution

​
When your solution is complete, submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/submitting-your-solution).
