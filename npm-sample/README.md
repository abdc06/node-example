Install:

```shell
npm install figlet
```

Simple usage:

```js
/**
 * index.js
 */
import figlet from "figlet";

figlet('Hello World!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});
```

Execution:

```shell
node index.js
```

That should print out:

```console
  _   _      _ _        __        __         _     _ _ _ 
 | | | | ___| | | ___   \ \      / /__  _ __| | __| | | |
 | |_| |/ _ \ | |/ _ \   \ \ /\ / / _ \| '__| |/ _` | | |
 |  _  |  __/ | | (_) |   \ V  V / (_) | |  | | (_| |_|_|
 |_| |_|\___|_|_|\___/     \_/\_/ \___/|_|  |_|\__,_(_|_)
 
```

