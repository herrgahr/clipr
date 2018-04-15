function copyToClipboard() {
    const sel = document.getSelection().toString();
    const loc = document.location;
    const title = document.title;

    //build raw-text string
    const text = [
        loc,
        "", "",
        sel,
    ].join("\n");
    //build html-string with an <a> element for the URL
    const html = [
        "<a href='", loc, "'>", loc, "</a>",
        "<pre>", sel, "</pre>"
    ].join("");
    
    function oncopy(event) {
        document.removeEventListener("copy", oncopy, true);
        // Hide the event from the page to prevent tampering.
        event.stopImmediatePropagation();

        // Overwrite the clipboard content.
        event.preventDefault();
        event.clipboardData.setData("text/plain", text);
        event.clipboardData.setData("text/html", html);
    }
    document.addEventListener("copy", oncopy, true);



    document.execCommand("copy");
}
