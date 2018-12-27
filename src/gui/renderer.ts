import { Elm } from "./Program";


document.addEventListener("DOMContentLoaded", function() {
    let app = Elm.Program.init({
        node: document.getElementById('container'),
        flags: null
    });

    app.ports.hello.subscribe((name: String) => console.log(`Hello ${name}!!`));
    app.ports.reply.send(12345);
});
