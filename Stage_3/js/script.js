const app = (() => {
    const init = () => {
        document.addEventListener("keydown", keyDownEventHandler);
    };

    const keyDownEventHandler = (event) => {
        let kbdTag = document.getElementById(event.code);

        if (kbdTag !== null) {
            console.log(`The '${kbdTag.getAttribute("data-key")}' key is pressed`);
        }
    };

    return {init};
})();

document.addEventListener("DOMContentLoaded", app.init);