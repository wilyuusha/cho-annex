# Content data

All public-facing schedules, services, visits, directory details, and announcements live here as JSON. Presentation stays in `src/components`, `src/layouts`, and `src/pages`.

Initial content was curated from `src/scrape/cho-annex-public-data.json`. Only public notices, directory listings, and completed public activities were carried over. Records marked `historical_reference_only`, or whose own notes say they are not current, were excluded. Every published entry keeps a `source` link and a date; file-level `lastUpdated` values use the scrape generation date `2026-11-26`.

Do not add unverified times, requirements, room assignments, or advisories. Set dates as ISO strings (`YYYY-MM-DD`).

## `site.json`

Site-wide name, short name, unit label, location, description, public address/contact details, and optional `lastUpdated`. Contact details include the health office email (`health@cityofvalencia.gov.ph`) and the public phone number (`+62 967 8827303`). `social.choFacebook` and `social.cityFacebook` hold the official page links supplied by the site maintainer.

## `schedules.json`

Separate arrays keep regular information distinct from temporary activity:

- `regularHours` — routine office hours.
- `abtc` — Animal Bite Treatment Center (ABTC) schedules.
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

`effectiveDate` and `updated` may be `null` when not applicable. The Animal Bite Treatment Center (ABTC) days were confirmed by the site maintainer on `2026-11-26`; daily clinic hours have not been published.

## `doctors.json`

Curated from `src/scrape/cho-annex-doctor-schedule.json`. The site maintainer confirmed the transcribed assignments and names on `2026-11-26`. Only OPD assignments are published: `doctors` holds each doctor's `name` and weekday `assignments`, with non-OPD assignments and doctors who have no OPD days removed. The source lists weekday assignments only, so no consultation hours are published. The Doctors page uses only the names from this file; photos are MUI placeholders and professional details are withheld pending permission.

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

Curated from `src/scrape/cho-annex-services.json`. `categories` holds the eight service categories; `services` holds 26 entries. Each service keeps its category `id`, printed `availability` schedule, `days`, and `verification` status.

```json
{
  "id": "service-id",
  "name": "Service name",
  "category": "category_id",
  "availability": "Monday–Friday",
  "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  "description": "Short description",
  "effectiveDate": "YYYY-MM-DD",
  "requirements": ["Verified requirement"],
  "notes": [],
  "verification": "Confirm with CHO",
  "sourceNote": "User-provided CHO services poster — Annex column",
  "source": { "title": "Source title", "url": "https://example.org/source" }
}
```

Most entries come from a user-provided CHO Annex poster and are marked `Confirm with CHO`; the poster gives days but not hours, and the published days are not a guarantee of walk-in availability. The TB-DOTS entry comes from a public transfer notice and has an external `source` link. The site displays a standing notice and contact details on every services page.

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
