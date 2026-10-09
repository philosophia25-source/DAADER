# DAADER

Three-language static legal website for daader.ir.

## Hosting

GitHub Pages, deploy from branch main and directory /docs. The docs/CNAME file binds daader.ir. docs/.nojekyll disables Jekyll processing. No dependencies or Actions workflow are required.

## Update

Run python3 build.py, then commit build.py and docs. CSS, JavaScript and assets are under docs/assets. Canonical URLs, language alternatives and sitemap use https://daader.ir. Increment ASSET_VERSION when changing CSS or JavaScript.

## Design and contact

A warm ivory, charcoal and forest green design with an architectural hero image. Practice areas use numbered text, without legal icons. The persistent WhatsApp dock occupies a separate row beneath the page scroll area so it cannot cover the content on desktop or mobile.

WHATSAPP_NUMBER in build.py is the contact source. Every WhatsApp action is a native link to https://wa.me/989123084826, including the article actions. They work without JavaScript. JavaScript only operates the mobile navigation.

The legal notes are introductory draft content for the owner to review. courthouse.webp is AI-generated illustrative architecture; it is not a photograph of the lawyer's office or a named court. Vazirmatn by Saber Rastikerdar is licensed under SIL OFL 1.1. The earlier Sites project remains separate from this GitHub Pages deployment.

## Integrated architectural hero

Version `20261009-integrated` uses `docs/assets/courthouse-entrance.webp` as one full-section decorative image behind the copy on desktop and mobile. CSS gradients maintain readable copy without splitting the photo into a separate mobile row. The image is conceptual architecture, not a photograph of a named courthouse or the lawyer's office.

Generated using the built-in image generation tool. Prompt: an editorial photograph of a restrained limestone courthouse entrance, stone steps and tall doors, soft daylight, architectural detail on the left and a quiet pale stone wall on the right for HTML text. No emblems, lettering, people, scales, gavels, palace or fantasy architecture.

## Persian divorce guide

The full article source is `content/fa/divorce-in-iran.md`. The generator publishes it at `/fa/articles/divorce-in-iran/`, with a contents sidebar and native WhatsApp links, and lists it on the Persian homepage and journal. Language links fall back to the relevant journal where no translation exists. The sitemap and alternate-language metadata include only published translations.
