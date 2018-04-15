# clipr: Copy selection plus URL

Puts selected text into clipboard, preceded by the URL of the page you're on.

It generates two types of selection:

- text/plain
- text/html

For the plaintext, the URL is simply prepended as-is with a newline. For the html, the url is prepended as an anchor-tag with both the href and the text content set to thr URL. The actual text of your selection is put into a &lt;pre&gt; in order to preserve line-breaks.

At the moment, the action can only be triggered via a context-menu entry. I might investigate adding a key-binding later on.

Tested with:

- Firefox 59.0.2 (64bit) on Linux
- Chromium 65.0.3325.181 (Official Build) Arch Linux (64-bit)

## Acknowledgements

Based on the example context-menu-copy-link-with-types/ from the repository:
https://github.com/mdn/webextensions-examples

The icon is taken from: https://feathericons.com/

