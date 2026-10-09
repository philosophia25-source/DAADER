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
