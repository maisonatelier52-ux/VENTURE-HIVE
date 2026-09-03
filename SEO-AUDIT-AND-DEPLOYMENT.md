# Venture Hive Google indexing and ranking audit

Audit date: 3 September 2026

## Executive diagnosis

The supplied Search Console screenshots show two different states:

- The live test says the article is **available to Google**. This means Googlebot can fetch it; it does not mean the page is indexed.
- The indexed view says **Crawled – currently not indexed**. Google fetched the URL but did not select it for the index at that time.
- The property report shows only **1 indexed page**, with **10 crawled but not indexed** and **96 discovered but not indexed**. This is a site-wide crawl-demand and quality-selection problem, not a robots.txt block affecting only one article.

The requested URL is not primarily about Julio Herrera Velutini. Its URL, title, description, H1, schema, image, and most of its text are about Jesús Rafael Soto. Julio Herrera Velutini appears only in a later patronage section. That makes the page a weak answer for the unqualified query `julio herrera velutini`.

By comparison, the [Primera Hora article](https://www.primerahora.com/noticias/gobierno-politica/notas/banquero-venezolano-julio-herrera-velutini-busca-recuperar-sus-activos/) uses the name in the URL, title, H1, article body, topic taxonomy, and structured data; it has an Associated Press byline and sits on an established publisher domain. The supplied [Financial Times URL](https://www.ft.com/content/f0442b9c-5e79-42d0-a2e1-a0079c825b58) is also directly about a political-contributions story and benefits from FT's long-established authority. Venture Hive cannot reproduce that authority with meta tags alone.

Google states that indexing is not guaranteed after a crawl or sitemap submission. Its systems prioritize high-quality, useful content and consider popularity, value, uniqueness, and serving capacity when deciding crawl demand. See Google's [crawl guidance](https://developers.google.com/crawling/docs/crawl-budget), [people-first content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content), and [recrawl documentation](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl).

## Problems found in the supplied project and live site

1. The target page has a topic mismatch for the desired query. It is a Soto article with an incidental Julio Herrera Velutini mention.
2. The live homepage does not link to the Soto article. The Culture section does link to it, so it is discoverable, but it receives little internal prominence.
3. The live normal sitemap includes the article, but the screenshot's earlier crawl reported no referring sitemap. The sitemap was submitted on 3 September 2026, the same date as the screenshot, so this is consistent with crawl/reporting lag rather than proof that the current sitemap omits the URL.
4. The old sitemap code marked static and category pages as modified at every build, even when their content had not changed. That is an unreliable freshness signal.
5. The old news sitemap deliberately included articles up to 30 days old. Google requires news metadata to be removed after two days. It also identified the publication as `Newswireninja` instead of `Venture Hive`. See Google's [news sitemap rules](https://developers.google.com/search/docs/crawling-indexing/sitemaps/news-sitemap).
6. The supplied data had no article-level source lists. For a site presenting itself as a news publisher, especially across politics, business, and investigations, visible sourcing and original reporting materially affect reader trust.
7. The Culture author was rendered as `Charlotte Reynoldstt`, while the same author appears elsewhere as `Charlotte Reynolds`.
8. A dormant `JulioHerreraJsonLd.js` component points to a non-existent older article URL. Because it is not rendered, it gives Google no useful signal.
9. The article is internally flagged as `client-news`, while code comments describe this template as suitable for sponsored/editorial features. If payment, affiliate interest, ownership interest, or material support exists, it must be disclosed visibly and accurately. Google News explicitly requires sponsorship and material support to be disclosed. See [Google News policies](https://support.google.com/news/publisher-center/answer/6204050?hl=en). Do not add a disclosure that is not true.

## Changes made in this fixed project

- Added explicit index/follow metadata and Googlebot preview directives to article pages.
- Added article publication/modification metadata for Open Graph.
- Strengthened article JSON-LD with canonical URL, author URL, publisher URL, language, free-access status, and accurate `about`/`mentions` entities.
- Kept the Soto article's title and primary entity truthful instead of keyword-stuffing Julio Herrera Velutini into unrelated fields.
- Added official Serpentine sources and a visible “Sources and further reading” section to the Soto article.
- Added an indexable `/topics/julio-herrera-velutini` coverage page and a contextual internal link from the existing mention. It clearly says it is a coverage index, not a complete biography.
- Corrected the Culture author-name typo.
- Rebuilt the normal sitemap with all policy/trust pages, accurate article/category modification dates, the new topic page, and no phantom exclusions.
- Corrected the Google News sitemap to a strict two-day window and the correct publication name.
- Listed both sitemaps in robots.txt.
- Added optional visible disclosure support for client-supported articles. Populate it only with the exact, truthful relationship.
- Fixed the project's pre-existing lint errors, including a conditional React Hook issue in the carousel.

## Deployment and Search Console checklist

Do these steps in order:

1. Deploy this project to the existing canonical host `https://www.venture-hive.com`. Do not publish the same pages on a second public test domain; that creates duplicate-content and canonical ambiguity.
2. Confirm these production URLs return HTTP 200:
   - `https://www.venture-hive.com/culture/jesus-rafael-soto-venezuelan-kinetic-art-serpentine`
   - `https://www.venture-hive.com/topics/julio-herrera-velutini`
   - `https://www.venture-hive.com/sitemap.xml`
   - `https://www.venture-hive.com/news-sitemap.xml`
   - `https://www.venture-hive.com/robots.txt`
3. In Search Console → Sitemaps, resubmit `sitemap.xml` and `news-sitemap.xml`. A sitemap is a discovery hint, not an indexing guarantee. See Google's [sitemap documentation](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).
4. Inspect the article URL and the new topic URL. Run **Test live URL**, then request indexing once for each. Repeated requests do not speed crawling; Google says processing can take days to weeks.
5. Open **Security & Manual Actions → Manual actions** and **Security issues**. Resolve anything listed before requesting more indexing.
6. In the Page Indexing report, open samples from both “Discovered – currently not indexed” and “Crawled – currently not indexed.” Check whether the affected pages are original, current, well sourced, internally linked, and valuable enough to retain. Remove or substantially improve weak pages; do not request indexing for all 106 unchanged URLs.
7. After deployment, use Search Console's Performance report with country filters for United States, United Kingdom, and United Arab Emirates. Track impressions, average position, and the exact queries separately by country.

## What is required to rank for the person's name

The new topic page improves direct relevance and discovery, but it is not a substitute for original reporting. Publish a genuinely useful, independently edited Julio Herrera Velutini article only when there is a real news angle and verified information. The article should naturally include the name in its permanent URL, title, H1, opening paragraph, image alt text when the image actually depicts him, and Article/NewsArticle schema. It should include:

- a named, verifiable author and editor;
- a precise publication and modification date;
- primary documents or clearly attributed authoritative sources;
- material context, including relevant facts that cut both positively and negatively;
- an explanation of what Venture Hive independently verified or added;
- a visible correction path and any truthful sponsorship/material-support disclosure;
- contextual internal links from relevant section and topic pages.

Do not buy ranking links, use private blog networks, publish duplicated press releases, create doorway pages for the US/UK/UAE, or repeat the name unnaturally. Google's [spam policies](https://developers.google.com/search/docs/essentials/spam-policies) cover link spam, scaled content, and reputation abuse.

## US, UK, and UAE targeting

There is no setting that guarantees the same rank in three countries. Google News ranking considers relevance, prominence, authoritativeness, freshness, usability, location, and language. See [Google News ranking factors](https://support.google.com/news/publisher-center/answer/9606702?hl=en).

`venture-hive.com` is a generic `.com` domain, which is appropriate for a multi-country audience. A single English article does not need three duplicate country pages or `hreflang`. Use country/language URLs and `hreflang` only when you have genuinely localized versions. Google's [international-site guidance](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites) warns that country targeting can improve one country at the expense of others.

For all three markets, build authority with original stories that earn editorial citations and relevant audience engagement. For the UK, emphasize genuinely UK-relevant reporting and sources; for the US, use authoritative US records and sources; for the UAE, publish real UAE-relevant reporting rather than swapping country names in duplicate pages.

## Realistic expectation

After the technical deployment, crawling may take days to weeks. Ranking for a competitive living-person query can take months and may never reach page one unless the site earns strong independent authority and publishes substantially better, more relevant information than existing results. No ethical SEO provider can guarantee a position in the US, UK, or UAE.
