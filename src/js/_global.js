const windowListener = window.addEventListener("DOMContentLoaded", () => {
    const pageTitle = document.title;
    const attentionMessage = "Come Back!";
    let blinkEvent = null;

    document.addEventListener("visibilitychange", (e) => {
        var isPageActive = !document.hidden;

        if(!isPageActive) {
            blink();
        } else {
            document.title = pageTitle;
            clearInterval(blinkEvent);
        }
    });

    function blink() {
        blinkEvent = setInterval(() => {
            if(document.title === attentionMessage) {
                document.title = pageTitle;
            } else {
                document.title = attentionMessage;
            }
        }, 100);
    }
});

export { windowListener };