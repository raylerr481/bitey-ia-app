# Bitey IA App

`bitey-ia-app` is the Android/mobile application for the general Bitey IA product.

## Current status

- Android app: active development and release-build validation.
- Bitey Web: existing web application and Bitey IA supracerebro.
- This repository is the mobile client; authoritative intelligence remains server-side.
- Production Android builds use Expo/EAS and GitHub Actions.

## Product objective

Bring the authenticated Bitey IA experience to Android with secure identity, conversations, history and supported mobile capabilities while protecting provider credentials and user-scoped data.

**Bitey Web is the Bitey IA supracerebro. Bitey IA App is its Android client.**

## Architecture

```text
Bitey Web / Cloudflare
       ↑
       │ authorized API
       │
Bitey IA App
       ↓
Supabase Auth / user identity
       ↓
user-scoped data
```

The app is a client, not an AI brain. Provider keys, private credentials, authoritative memory and sensitive reasoning remain on the backend.

## Core functionality

- User registration/login/logout and session persistence.
- New conversations and message history.
- User profile and settings.
- Projects/library interfaces when supported.
- Files, images, microphone/voice and supported mobile capabilities.
- Secure communication with authorized Bitey Web/Cloudflare APIs.
- Mobile notifications/integrations where implemented.
- Production Android APK builds through Expo/EAS and CI.

## Bitey Trainer

**Bitey Trainer is a separate internal capability subordinate to Bitey IA.** It is intended for authorized AI training/evaluation, employment intelligence, opportunity analysis, benchmarking and human-in-the-loop programs.

Trainer must not expose provider credentials or bypass provider/platform rules. Its validated capabilities can later be consumed by products such as JobIA through secure backend contracts.

## Relationship to BiteFixes

BiteFixes is a separate enterprise ecosystem. Bitey IA can integrate with BiteFixes through explicit authorized contracts, but BiteFixes customers, tickets, services, company knowledge and workflows do not become general Bitey IA memory.

## Ecosystem

| Repository | Product | Role |
|---|---|---|
| `bitey-web` | Bitey IA Web | General Bitey IA web application and supracerebro |
| `bitey-ia-app` | Bitey IA App | This Android/mobile client |
| `bitey-ai` | Bitey IA Enterprise WordPress Plugin | Authorized WordPress channel |
| `bitey-trainer` | Bitey Trainer | Internal training/evaluation capability |
| `JobIA` | JobIA | Employment/opportunity mobile product |
| `bitefixes-backend` | BiteFixes Backend | Separate enterprise backend |
| `bitefixes-web` | BiteFixes Web | BiteFixes.com web product |
| `bitefixes-app` | BiteFixes App | Separate BiteFixes mobile channel |

## Android release target

The immediate target is a **real Android APK that can be installed and tested on a physical Android device**, using the Bitey IA application icon and production configuration. The Web application is separate and is not required for the APK build.

Before release validate:

```text
Android build → install → authentication → message → Bitey Web → response → persistence → logout/login
```

## Product principle

**Bitey Web is Bitey IA's supracerebro. Bitey IA App is the Android client. Bitey Trainer is a subordinate internal capability. BiteFixes and JobIA remain separate products.**
