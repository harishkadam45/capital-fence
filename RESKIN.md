# Re-skin this template (one-page guide)

Edit **dist/client.config.js**. It is the single source for client identity, contacts, location, service areas, logo, colors, fonts, marketing copy, rating/review count, services, photos, material details, and quote options/prices.

1. Duplicate the project for the next client. Do not copy `.git`, `site.tar.gz`, or `.openai/hosting.json` to a new hosted Site; those identify this deployment.
2. Place the client's real logo and photos in `dist/assets/`; update paths, alt text, captions and source URLs in the config. Use authorized business photos. This version uses the official website gallery; Google Business Profile provenance has not been verified.
3. Replace identity and contact fields. Use international digits only for `whatsapp` (e.g. 15012473918), and a plus-prefixed number for `phoneE164`. Verify the WhatsApp account and send a manual test email with the owner. No automated test lead has been sent. The email here was found in the official site's JSON-LD.
4. Replace all `copy` strings, `services`, `serviceAreas`, rating, reviews and review link. The 5.0/87 figures are from Jacky's brief and need a current Google check before public launch. Use the Google Maps place URL as the review destination.
5. Set `theme` colors and font stacks. System fonts keep this fast and free. If adding a custom font, supply licensed font files and an `@font-face` rule.
6. Edit `materials`: stable IDs, installed low/high price per foot, upkeep, typical lifespan and images. Edit `quote.heights` multipliers and `quote.gates` costs. The current numbers and typical lifespans are illustrative planning content, not contractor-approved specifications. Price = feet × material rate × height factor + gate cost. Terrain, removal, permit fees and difficult access are excluded. Keep that explanation accurate.
7. Preview at 360, 390 and 1440 px. Check logo, wrapping, gallery, navigation, phone links, keyboard focus and reduced-motion behavior. Test material, footage, height and gates; confirm WhatsApp/email drafts include contact and project details. Users still press Send in the messaging app; this has no backend and cannot confirm delivery.

Serve `dist` on any static host. All business content stays in the config; the shared renderer, styles and SVG illustration can be reused. No paid API, library or build step is required. Scroll animation uses passive listeners and requestAnimationFrame with simple SVG transforms; reduced-motion shows the completed fence. Basic Android hardware still needs a real-device smoothness check.

A typical swap: identity/brand 10 minutes, copy/photos/services 20 minutes, approved rates/contact checks 15 minutes, responsive QA 15 minutes. Missing assets or owner approvals may extend that time.
