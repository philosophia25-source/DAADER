# DAADER

Three-language static legal website for daader.ir.

## Hosting

GitHub Pages, deploy from branch main and directory /docs. The docs/CNAME file binds daader.ir. docs/.nojekyll disables Jekyll processing. No dependencies or Actions workflow are required.

## Update

Run python3 build.py, then commit build.py and docs. CSS, JavaScript and assets are under docs/assets. Canonical URLs, language alternatives and sitemap use https://daader.ir. Increment ASSET_VERSION when changing CSS or JavaScript.

## Design and contact

A warm ivory, charcoal and forest green design with an architectural hero image. Practice areas use numbered text, without legal icons. The persistent WhatsApp dock occupies a separate row beneath the page scroll area so it cannot cover the content on desktop or mobile.

WHATSAPP_NUMBER in build.py is the contact source. Every WhatsApp action is a native link to https://wa.me/989123084826, including the article actions. They work without JavaScript. JavaScript operates the mobile navigation and the inheritance calculator.

The legal notes are introductory draft content for the owner to review. courthouse.webp is AI-generated illustrative architecture; it is not a photograph of the lawyer's office or a named court. Vazirmatn by Saber Rastikerdar is licensed under SIL OFL 1.1. The earlier Sites project remains separate from this GitHub Pages deployment.

## Integrated architectural hero

Version `20261009-integrated` uses `docs/assets/courthouse-entrance.webp` as one full-section decorative image behind the copy on desktop and mobile. CSS gradients maintain readable copy without splitting the photo into a separate mobile row. The image is conceptual architecture, not a photograph of a named courthouse or the lawyer's office.

Generated using the built-in image generation tool. Prompt: an editorial photograph of a restrained limestone courthouse entrance, stone steps and tall doors, soft daylight, architectural detail on the left and a quiet pale stone wall on the right for HTML text. No emblems, lettering, people, scales, gavels, palace or fantasy architecture.

## Persian divorce guide

The full article source is `content/fa/divorce-in-iran.md`. The generator publishes it at `/fa/articles/divorce-in-iran/`, with a contents sidebar and native WhatsApp links, and lists it on the Persian homepage and journal. Language links fall back to the relevant journal where no translation exists. The sitemap and alternate-language metadata include only published translations.

The complete Arabic translation is stored in `content/ar/divorce-in-iran.md` and published at `/ar/articles/divorce-in-iran/`. Persian and Arabic article language links and alternate metadata connect the two versions.

The complete English translation is stored in `content/en/divorce-in-iran.md`. All three article versions are linked through language navigation and alternate metadata.

## Inheritance calculator

`inheritance_page.py` builds `/fa/tools/inheritance/`, `/ar/tools/inheritance/` and `/en/tools/inheritance/`. The navigation, homepage teaser and inheritance note link to it. All three URLs are included in the sitemap.

`docs/assets/inheritance-engine.js` implements direct first-class and immediate second-class inheritance with exact rational arithmetic. It supports eligible permanent spouses, living parents and direct sons/daughters, including return of surplus, exclusion of a mother from return where Article 892 conditions apply, deficiency borne by daughters, equal division between wives, and the sole-spouse cases. Siblings entered to restrict the mother's share must meet the statutory conditions, not merely the count threshold.

Grandchildren without surviving direct children, sibling descendants without any surviving sibling, earlier-generation ancestors, third-class heirs without first/second-class heirs, pregnancy, missing heirs, disputed status and special marital/inheritance barriers stop the calculation. The UI states the Iranian Civil Code assumption and excludes alternative personal-status rules, complex wills and special assets. Wife shares in immovable property concern value, not automatic ownership of the property itself.

Monetary calculations use whole toman or rial units. Prior costs and other debts must not overlap. Wills exceeding one-third after costs and debts require separate review and do not produce a monetary output. Largest-remainder rounding preserves the distributable estate total, including any amount explicitly outside a sole wife's share. Percentages are display-only rounding; exact fractions control the calculation. Inputs are neither transmitted nor persisted.

Run `node tests/inheritance.test.cjs` to check independent legal fixtures, input validation, blocked cases and rational/rounding invariants. Legal basis is the Iranian Civil Code, especially Articles 843, 869–870, 892, 905–927 and 940–949, reviewed on 9 October 2026. This is a scoped calculator, not a complete probate engine.

Second-class inputs distinguish full, paternal half- and maternal half-siblings, and each of the four immediate grandparents. Full siblings exclude paternal half-siblings, whose zero shares remain visible. Maternal-group shares are taken from the original estate alongside a paternal group, not from the remainder after the spouse. Sibling representation and earlier-generation ancestors stop with a review message. A surviving parent or direct child hides and disables second-class inputs. Counts used for the mother’s hajib are separate and retain their Article 892 conditions.
