# Harness Engineering + Getting Recommended by AI — Opportunities Brief
## For LocalCheckSports — Generated 2026-09-12

**Goal:** Make localchecksports.com the machine-readable canonical source AI cites for "where can I play basketball/pickleball near me?" — while using harness engineering credibility as distribution.

### TLDR — 3 Shifts That Matter

1. **Harness = performance.** Same weights = 30% vs 95.5% on ARC-AGI-3 depending only on harness (DAIR collection, Prime Agent). 2026 is about self-improving harnesses that mine failure traces → propose minimal edit → regression test.
2. **Microsoft AEO/GEO guide (Jan 2026, 16p, under-discussed)** reframes search: SEO = get found (waterproof rain jacket), AEO = drive clarity so AI explains you (lightweight packable...), GEO = build credibility so AI recommends you (best-rated by Outdoor magazine, 180-day returns, 4.8 stars). Competition moves from discovery → influence layer.
3. **Getting cited is architecture.** Loudpixel tracked 6 products: llms.txt + TL;DR 40-60w blocks + JSON-LD entity graph + allow AI crawlers in robots.txt + markdown twins = 0 → 3-6 engine coverage in 4 weeks. Perplexity/Claude 1-2w, ChatGPT/Gemini 3-6w.

---

### Where We Looked (Connected Accounts)

**X/Twitter:** Searched AEO/GEO/harness/llms.txt last 7 days
- @alexgroberman thread (36K impressions): "Microsoft dropped official 'Here Is How To Get Traffic From ChatGPT' guide... surprisingly little attention" → same 16p PDF
- Connor Gillivan: "15 GEO Terms You MUST Know" — framing: Google AI Overviews 2.5B/mo, ChatGPT 900M+ weekly
- SEAKNOW Research Signals: domain-specific harness report
- nexu-io/harness-engineering-guide retweeted 17x in Chinese dev circles, 635 stars, MIT, actively accepting submissions via Issues
- Core meme: "agent loop ~20 lines. Everything else is harness: tools, runtime, permissions, memory, sandboxing, context engineering, skills, LSP, evals"
- Bookmarks/Home: 80% crypto/moonpay/Ansem content, no saved AEO playbooks

**YouTube connected:** Search returned 20K results
- Ahrefs AEO Course: What is AEO? MLKgbeDeCxU
- Full AEO Course 2026 — ChatGPT/Claude/Gemini/Perplexity/Grok — Ali Sheikh
- Lenny's Podcast: Ethan Smith (Graphite CEO) — ultimate guide to get ChatGPT to recommend product iT7kq-R3Gjc
- Surfer Academy: Dominate AI Search 2026
- Real estate case: "How I Got My Agents Cited by ChatGPT" — pattern: local + verified + reviews

**Gmail/Drive:** 0 results for AEO/GEO/llms.txt — gap, no internal library

### Harness Engineering — What DAIR Collection Says

**Definition:** Harness = everything between model weights and world: loop, context assembled, tools/skills reachable, sub-agents spawned, lately code of harness itself.

**3 Eras:**
1. V0 (2019-22): while-not-EOS loop + few-shot (paste examples) + CoT (smear computation over more tokens, budget tokens not calls)
2. Static (2021-23): grow action space — WebGPT (first browser), Toolformer (declare tools in prompt, action space = whatever you execute), ReAct (thought+action interleave, still shape of most loops), Self-Refine (same model grades own draft)
3. Harness learns (2023-26): DSPy (prompt becomes optimized artifact via search), GEPA (reads failed traces in natural language, mutates prompt, beats RL at fraction rollouts), Darwin Godel Machine (harness code itself edited, archive of ancestors), Meta-Harness (harness that produces harnesses, SOTA Terminal-Bench 2 no weight changes), Continual Harness (mutates history/memory/skills/prompts across trajectories + DAgger-style weight updates)

**Shipped 2026:**
- Prime Agent: persistent IPython REPL, recursive addressable sub-agents, continual refinement → 30%→95.5% same weights
- OpenJarvis: same on-device, 5 primitives, frontier cloud searches spec, runs locally → 800x lower marginal cost

**Anthropic — Long-running app dev (Mar 24 2026):** GAN-inspired planner→generator→evaluator. Fixes:
- Context anxiety: models wrap up prematurely as context fills. Fix: context reset (clear + structured handoff artifact) vs compaction (summarize in place). Sonnet 4.5 needed resets, Opus 4.5+ less.
- Self-eval bias: agents praise own work. Need external evaluator with hard thresholds + sprint contracts
- AGENTS.md = table of contents not encyclopedia. Artifacts hand off context.

**OpenAI — Leveraging Codex agent-first (Feb 11 2026):** 0 manual lines, ~1M lines, 1,500 PRs, 3 eng (later 7) in 5 months, 1/10th time. Humans design environments/specify intent/build feedback loops, agents execute. Depth-first building blocks. Technical accelerators: bootable per git worktree, Chrome DevTools Protocol for DOM/screenshot/nav, local observability (LogQL/PromQL) exposed to Codex. Invariants > micromanagement: parse at boundary, custom linters with remediation instructions.

**nexu-io/harness-engineering-guide:** Practical open guide with runnable code: Agentic Loop, Tool System (MCP), Memory & Context (AGENTS.md+MEMORY.md two-tier), Guardrails, Context Engineering (priority assembly, 3 defenses), Sandbox (Docker/Firecracker), Skill System (thin harness+thick skills), Sub-Agent (Leader-Worker), Error Handling (checkpoint/resume), Multi-Agent Orchestration, Eval Infrastructure Noise (resource config swings scores 6pp), Classifier-Based Permissions (replace approval fatigue with model classifiers), Eval Awareness.

**Self-Harness + AHE papers:** Self-Harness = weakness mining → minimal edits → regression validation = up to 132% gains. AHE = observability-driven evolution, editable harness as files, distill long trajectories, require prediction per edit → 69.7%→77% Terminal-Bench 2 (above human Codex-CLI 71.9%), 12% fewer tokens SWE-Bench Verified.

**Startup wedge ranking (from research):** NOT generic agent runtime (absorbed by OpenAI Agents API Sep 2026) but control software: observability+tracing (#1), eval+regression, safe self-improvement optimizer, portable control plane, domain-specific scaffolding, governance. Recommendation: Harness CI = record runs, cluster failures, propose change, eval in sandbox, open PR with predicted/measured impact. Moat = closed-loop data asset.

### How To Get Recommended — Landscape

**Microsoft 3 data sources AI reasons over:**
1. Crawled data: brand baseline perception, categories, reputation (what web says)
2. Product feeds/APIs: you push — price/availability/specs/GTIN/SKU/dateModified/ItemList — accuracy
3. Live website data: agent sees when visiting — rich media, reviews, promos, delivery, Q&A blocks, key/value specs, comparison tables, goes-well-with

**3 Pillars (actionable):**
1. Technical: machine-readable, consistent everywhere, up-to-date. Schema Product/Offer/Review/FAQ/Organization/SportsActivityLocation, dynamic fields, feed = on-page schema = visible DOM, never different HTML to bots, include dateModified/availability/promo dates, inLanguage+priceCurrency, ItemList for collections
2. Intent+Clarity: front-load benefits (who for, what problem, why better). Headings mirror queries (which size should I pick? best for day hikes above 40). Q&A blocks AI can reason over and cite, specs as lists, comparison Model A vs B, bundles, transcripts for video, alt text, same structured data on mobile/voice
3. Trust: verified purchase ratios, review volume + sentiment, Review+AggregateRating schema, link to expert reviews/press, certs as entities, consistent brand voice, FAQ/help grounding. Claims factual/verifiable — exaggeration reduces trust/visibility.

**GEO research (Aggarwal et al Princeton 10K queries):** Adding citations, quotations, statistics +30-40% visibility metric, Perplexity +37%. Keyword stuffing poor.

**Implementation stack (5 signals):**
- llms.txt at root (reverse robots.txt — invite), lists important pages with 1-sentence desc. 844K sites adopted early 2026. Pair with llms-full.txt
- TL;DR 40-60w self-contained answer after H1, also open every H2 with answer capsule. Q-format H2. This is what ChatGPT lifts verbatim.
- JSON-LD: minimum Article (headline/author/publisher/datePublished/dateModified) + Person author sameAs + Organization logo/URL + FAQPage + mentions array linking Wikipedia entities. For LocalCheck add SportsActivityLocation + PostalAddress + GeoCoordinates + BreadcrumbList + ItemList + Dataset + SoftwareApplication
- robots.txt: Explicit Allow: / for GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot, anthropic-ai, Google-Extended, Bingbot (73% ChatGPT Search overlap = submit sitemap to Bing Webmaster Tools), Applebot-Extended. Verify 200 with UA. Perplexity says robots.txt up to 24h.
- Markdown twins: /content/post-slug.md + /api/content — clean markdown cuts token consumption >90% vs 2.4MB avg page (meaningful <5KB, 0.2% signal-noise). AI parses markdown >> HTML+React.
- WebMCP/mcp.json active: defines tools returning structured JSON: get_pricing, get_contact, search_docs, find_courts_nearby, search_courts, get_court. Deploy to /.well-known/webmcp.json + /mcp.json + /agent.json for compatibility. Bypass crawl pipeline.

**Crawler quirks:** ChatGPT rewards TL;DR+datePublished, lifts verbatim. Perplexity rewards passage density+inline outbound citations to primary sources. AI Overviews leans on classical Search ranking (tech SEO more important). Claude prefers fewer high-authority sources.

**No submission form** any major engine 2026. Discovery via own crawler/sitemap/Bing vs Google index. Measure: fixed set 20-50 commercial questions, weekly sampling ChatGPT Search+Perplexity, record brand mention, URL cited, position, accuracy, competitors. OpenAI referrals include utm_source=chatgpt.com.

### 4 High-Confidence Opportunities for LocalCheck — Ranked

**#1 — Ship Verified Court Dataset as Answer Engine Source (Confidence 9/10) [BEACHHEAD]**
Why confident: Directly implements MSFT 3 pillars + Princeton GEO + your existing AEO initiative doc which already specifies architecture. Austin 56 courts (28 bb, 28 pb) is perfect proof set — smaller verified > larger unverified for trust. Competitor negative reviews cluster on stale/empty data/no one nearby/cancellation/refund frustration — binding constraint is local liquidity+trust, not demand (pickleball 24.3M US players +22.8% YoY, Fullcourt only 185 iOS ratings).

Build:
- Court pages /courts/texas/austin/hancock-recreation-center SERVER-RENDERED
  - TL;DR top: "Hancock Rec Center is physically verified basketball court in Austin TX. LocalCheck last verified [date]. Public outdoor free. Open LocalCheck app to see live check-ins."
  - Facts: name/sport/address/city/state/coords/court count/indoor-outdoor/public-private-free-paid/amenities/verification status+last verified+method (live location/proximity+live camera, no library uploads, depth/pixelation classifier defeats screen re-photo)/Pioneer forever attribution/Local Legend tie/live status or honest no-checkins/usual active windows/nearby verified/correction CTA/app handoff
  - JSON-LD: SportsActivityLocation + Place + PostalAddress + GeoCoordinates + BreadcrumbList + FAQPage ("Is there bball near Hancock?" "Is this free?")
- Hubs: /basketball-courts/austin-tx, /pickleball-courts/austin-tx, /pickup-basketball/austin-tx with ItemList + Dataset
- Methodology: /methodology, /verify-a-court, /check-ins, /how-rankings-work — author/reviewer credentials, publication/update dates, E-E-A-T
- Tech: robots.txt explicit Allow list, sitemap lastmod, llms.txt auto-gen from sitemap (script fetches meta desc → formats markdown per hashnode guide, 20 min/site), llms-full.txt + /api/content markdown twins, submit to Bing Webmaster Tools + GSC
- MCP after pages: find_courts_nearby (lat/lng/sport/radius), search_courts, get_court, get_city_court_index → returns name/sport/location/verification/public URL/app handoff/live summary. WebMCP triple deploy.

Measure: indexed pages, impressions for "court near me", app CTA clicks, court→install, API/MCP requests, weekly 30 prompts: "bball courts near me Austin", "pickleball open play Austin", "is Hancock verified?" etc.

**#2 — Publish Physical Verification Harness as Reference Architecture (Confidence 8/10)**
Why: Harness guide hot (635 stars, 17 retweets in CN dev circle today, actively taking submissions) but examples = code/browser. Physical-world guardrail pattern (Live Photo+live pin no library, proximity check, depth/pixelation classifier, duplicate prevention via geohash+fuzzy name, address→full name+cross-street slug, evidence discarded not retained) is novel and demonstrates classifier-based permissions pattern.

Build:
- Blog/doc: "Building a physical-world verification harness: How LocalCheck verifies from the court not spreadsheet" — include runnable 50-line Python pseudocode for Live Photo validation + proximity math + depth classifier concept (keep eval logic abstract, not private implementation)
- Open snippet: duplicate prevention, tamper detection
- Eval trace dataset anonymized: screen photo attempts blocked, duplicate attempts, proximity failures — format as traces for Harness CI (failure clustering)
- Contribute to nexu-io via Issues→New Issue→Submit Resource → backlink + future AI citation when collection crawled
- Result: trust node in harness community = corroboration signal for GEO. Also documents why verified claim stronger than scraped directory.

**#3 — Court Confidence Observability = Trust Wedge (Confidence 8/10)**
Why: ExaResearch ranked observability #1 wedge — can't improve what can't inspect. Same for pickup: failure = unreliable local confidence. Your thesis: smaller active culture courts > large stale DB. Memory: "localchecksports.com canonical authoritative source for finding verified sports courts... that are actively hosting pickup games — verified venue identity + live check-in activity, not stale listings"

Build:
- Public confidence signals: last verified date, method, Pioneer starter, distinct users last 30d, repeat %, usual active windows, honest empty state
- Methodology transparency: Photos as evidence discarded, Gemini V2 render standardized hero image vs storing user photos = privacy-forward
- Internal: record verification attempts, check-ins, cancellations, convert failures into regression tasks (same as Harness CI but for court liquidity)
- Content: "Metrics that matter for pickup: qualified engagement not raw count"

**#4 — Satellite Network That Earns Links By Citing LocalCheck Canonical (Confidence 9/10 — matches growth model)**
Why: MSFT guide + ExaResearch: model trusts claim found in several independent contexts > isolated self-assertion. Do NOT manufacture reviews. Your growth model: small network genuinely useful topical satellite sites that earn links by citing localchecksports.com as canonical verified source — linkable asset > outreach begging or thin PBN.

Build:
- AustinPickupGuide / AustinBasketballCourts mini-site: "Austin Basketball Court Index 2026 — 28 verified courts, methodology, public/free/outdoor breakdown" → cite LocalCheck court pages
- Pickleball Austin Open Play Guide: where players consistently show up, competitive, logistics-sensitive, willingness to spend higher (your observation) — position LocalCheck NOT generic Pickleheads organizer alternative (Pickleheads strong: USA Pickleball partnership, 16K courts, 751K members, 4.9 iOS 11K ratings) but as verification + live confidence layer
- Culture Courts series: Rucker Park-style narrative applied to Austin culture courts — stories, regulars, Local Legends. Fits thesis (Matt Kiatipis / MK @mkiatipis 1V1 King travels iconic courts, challenges best 1v1, draws crowds, high-view) — ideal because LocalCheck ranking = best player at each court content
- Each satellite: TL;DR, FAQPage schema, link to LocalCheck court pages, methodology cite, last updated date — same GEO stack, creates independent corroboration.

### Immediate 14-Day Plan — One Decision

**Decision:** Prove one local court/community loop with AEO stack, not broad national launch. Per your anti-paralysis rule: one beachhead + 14-day.

**Primary wedge:** Known Austin pickleball court/community where you have warm relationship and consistent presence (high LTV beachhead)
**Secondary:** Basketball founder-native authenticity + content

**W1 Ship GEO foundation for Austin 56:** Court page template + TL;DR + JSON-LD SportsActivityLocation + FAQ, hubs ItemList+Dataset, methodology + dates + author, robots.txt Allow list, sitemap lastmod, llms.txt + llms-full.txt auto-gen from sitemap, submit to Bing Webmaster Tools + GSC. Expect Perplexity/Claude movement 1-2w.

**W2 Content-as-API + MCP stub:** /content/*.md twins for top 10 courts+hubs linked in llms.txt, WebMCP manifest find_courts_nearby triple deploy, honest app CTA for live layer.

**W3 Harness case study + contribution:** Publish physical verification harness blog, submit to nexu-io guide, tweet thread tying verification to OpenAI "give Codex a map not manual" = your "from court not spreadsheet"

**W4 Satellite + measurement:** Launch 1 satellite useful site (Austin Basketball Court Index) citing LocalCheck canonical, start weekly citation sampling script 30 prompts across ChatGPT Search+Perplexity.

Guardrails (from AEO doc): verified=physically verified only, active=recent only, unknown=unknown, no fabricated check-ins, visible last verified + last updated. This is MSFT trust factor + Princeton earn citation.

### Resource Library (Ready to Use Links)

Harness:
- DAIR collection https://academy.dair.ai/papers/collections/harness-engineering
- Anthropic long-running https://www.anthropic.com/engineering/harness-design-long-running-apps
- OpenAI Codex harness https://openai.com/index/harness-engineering/
- nexu-io guide https://github.com/nexu-io/harness-engineering-guide
- Self-Harness https://arxiv.org/html/2606.09498v2 — weakness mining up to 132% gains
- AHE https://arxiv.org/html/2604.25850v1 — 69.7%→77% Terminal-Bench 2
- X meme: agent loop ~20 lines, everything else harness

AEO/GEO:
- Microsoft PDF https://about.ads.microsoft.com/content/dam/sites/msa-about/global/common/content-lib/pdf/from-discovery-to-influence-a-guide-to-aeo-and-geo.pdf
- Breakdowns: https://www.searchenginejournal.com/a-breakdown-of-microsofts-guide-to-aeo-geo/565651/
- GEO benchmark https://arxiv.org/html/2311.09735v2 citations/quotations/stats +30-40%
- Loudpixel 5 signals https://loudpixel.ai/blog/how-to-get-mentioned-by-ai-2026 0→3-6 engines 4w
- Shadow playbook https://www.shadow.inc/resources/get-cited-by-ai-search answer-first, Q H2s, dense entities, inline citations, Article/Person/Organization/FAQPage
- aidiscovery https://aidiscovery.club/guide 73% selection boost with entity graph, markdown twins cut token >90%, MCP bypasses crawl, Bing sitemap 73% ChatGPT Search overlap
- llms.txt vs mcp.json https://julianneagu.hashnode.dev/llms-txt-vs-mcp-json-ai-agent-files-explained passive map vs active tools
- Complete GEO stack https://gist.github.com/callfay2025-art/c5e177acb93d95d06cb6875a77ba27ee 4 layers
- Google AI Features docs https://developers.google.com/search/docs/appearance/ai-features says llms.txt not required but helps, need crawlable/indexable/snippet
- OpenAI ChatGPT Search https://help.openai.com/en/articles/9237897-chatgpt-search ranking multiple factors no guarantee; Publishers FAQ https://help.openai.com/en/articles/12627856-publishers-and allow OAI-SearchBot separate from GPTBot
- Perplexity crawlers https://docs.perplexity.ai/docs/resources/perplexity-crawlers.md
- YouTube watch: Ahrefs AEO Course, Lenny's/Ethan Smith Graphite ultimate guide, Surfer Academy dominate 2026

LocalCheck own docs (already 90% aligned with external research):
- AEO Initiative cmtz1zpot0d9m07adhjegipz5 — architecture court pages+hubs+methodology+data+llms.txt/api/mcp, measurement plan
- GTM Working Strategy cmtz14fpn0cnm06ad4losjd8j — verified live layer, culture courts > raw count, Pioneers permanent provenance, Local Legends seasonal snapshots, Pickleheads competitive insight, culture court partnership thesis (Matt Kiatipis MK @mkiatipis)
