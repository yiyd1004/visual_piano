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
                    audio = new Audio(`/audio/white/A.mp3`);
                    break;

                case 'S':
                    audio = new Audio(`/audio/white/S.mp3`);
                    break;

                case 'D':
                    audio = new Audio(`/audio/white/D.mp3`);
                    break;

                case 'F':
                    audio = new Audio(`/audio/white/F.mp3`);
                    break;

                case 'G':
                    audio = new Audio(`/audio/white/G.mp3`);
                    break;

                case 'H':
                    audio = new Audio(`/audio/white/H.mp3`);
                    break;

                case 'J':
                    audio = new Audio(`/audio/white/J.mp3`);
                    break;

                case 'W':
                    audio = new Audio(`/audio/black/W.mp3`);
                    break;

                case 'E':
                    audio = new Audio(`/audio/black/E.mp3`);
                    break;

                case 'T':
                    audio = new Audio(`/audio/black/T.mp3`);
                    break;

                case 'Y':
                    audio = new Audio(`/audio/black/Y.mp3`);
                    break;

                case 'U':
                    audio = new Audio(`/audio/black/U.mp3`);
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