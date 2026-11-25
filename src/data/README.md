# Content data

All public-facing schedules, services, visits, directory details, and announcements live here as JSON. Presentation stays in `src/components`, `src/layouts`, and `src/pages`.

Initial content was curated from `src/scrape/cho-annex-public-data.json`. Only public notices, directory listings, and completed public activities were carried over. Records marked `historical_reference_only`, or whose own notes say they are not current, were excluded. Every published entry keeps a `source` link and a date; file-level `lastUpdated` values use the scrape generation date `2026-11-25`.

Do not add unverified times, requirements, room assignments, or advisories. Set dates as ISO strings (`YYYY-MM-DD`).

## `site.json`

Site-wide name, short name, location, description, and optional `lastUpdated`.

## `schedules.json`

Separate arrays keep regular information distinct from temporary activity:

- `regularHours` — routine office hours.
- `abtc` — ABTC schedules.
- `yakap` — YAKAP activities.
- `serviceAvailability` — days or periods when services are offered.

Entry shape:

```json
{
  "title": "Verified label",
  "when": "Verified day and time range",
  "effectiveDate": "YYYY-MM-DD",
  "notes": ["Optional verified note"],
  "source": { "title": "Source title", "url": "https://example.org/source" },
  "updated": "YYYY-MM-DD"
}
```

`effectiveDate` and `updated` may be `null` when not applicable.

## `visits.json`

`entries` holds barangay visits, outreach programs, and community activities.

```json
{
  "title": "Verified activity name",
  "barangay": "Verified barangay",
  "date": "YYYY-MM-DD",
  "time": "Verified time range",
  "activity": "Verified activity type",
  "status": "Upcoming",
  "summary": "Short verified description",
  "notes": [],
  "source": { "title": "Source title", "url": "https://example.org/source" },
  "updated": "YYYY-MM-DD"
}
```

## `services.json`

`services` holds available services and their requirements.

```json
{
  "name": "Verified service name",
  "description": "Short verified description",
  "availability": "Verified availability",
  "requirements": ["Verified requirement"],
  "notes": [],
  "source": { "title": "Source title", "url": "https://example.org/source" },
  "updated": "YYYY-MM-DD"
}
```

## `directory.json`

`rooms` holds building and department locations; `visitorNotes` holds short verified directions.

```json
{
  "name": "Verified department or room",
  "floor": "Verified floor",
  "location": "Verified room or area",
  "services": ["Verified service"],
  "notes": [],
  "source": { "title": "Source title", "url": "https://example.org/source" },
  "updated": "YYYY-MM-DD"
}
```

## `announcements.json`

`entries` holds public advisories and temporary schedule changes.

```json
{
  "title": "Verified advisory title",
  "body": "Verified advisory text.",
  "category": "Advisory",
  "published": "YYYY-MM-DD",
  "until": "YYYY-MM-DD",
  "source": { "title": "Source title", "url": "https://example.org/source" },
  "updated": "YYYY-MM-DD"
}
```

`until` may be `null` for announcements without an end date.
