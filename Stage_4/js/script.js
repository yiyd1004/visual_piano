const app = (() => {

    const init = () => {
        document.addEventListener("keydown", keyDownEventHandler);
    };

    const keyDownEventHandler = (event) => {
        let kbdTag = document.getElementById(event.code);

        if (kbdTag !== null) {
            let audio = null;
            switch (kbdTag.innerText) {
                case 'A':
                    audio = new Audio(`/audio/A.mp3`);
                    break;

                case 'S':
                    audio = new Audio(`/audio/S.mp3`);
                    break;

                case 'D':
                    audio = new Audio(`/audio/D.mp3`);
                    break;

                case 'F':
                    audio = new Audio(`/audio/F.mp3`);
                    break;

                case 'G':
                    audio = new Audio(`/audio/G.mp3`);
                    break;

                case 'H':
                    audio = new Audio(`/audio/H.mp3`);
                    break;

                case 'J':
                    audio = new Audio(`/audio/J.mp3`);
                    break;
            }

            if (audio != null) {
                audio.load();
                audio.play();
            }
        } else {
            console.log(`The '${event.code}' key is pressed`);
        }
    };

    return {init};
})();

document.addEventListener("DOMContentLoaded", app.init);