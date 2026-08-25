# Bitey IA App

`bitey-ia-app` is the **Android/mobile application for the general Bitey IA product**.

## Objective

Bring the same authenticated Bitey IA experience from the web to Android, with secure user identity, conversations, history and mobile capabilities while keeping authoritative intelligence server-side.

**Bitey Web is the Bitey IA supracerebro. Bitey IA App is its mobile client.**

## Architecture

```text
                 BITEY IA
             General AI product
                     │
          ┌──────────┴──────────┐
          │                     │
      Bitey Web            Bitey IA App
     Cloudflare             Android client
     supracerebro                │
          │                      │
          └──────────┬───────────┘
                     │
                Supabase Auth
                     │
              user-scoped data
                     │
             Bitey IA contracts
```

## Core functionalities

- Android-native presentation and responsive Bitey IA UX.
- User registration, login, logout and session persistence.
- Secure authentication/session transport using the shared Bitey IA identity model.
- New conversations, message composition and conversation history.
- User profile and settings.
- Projects and library interfaces as supported by the web product.
- Files, images, microphone/voice and other supported mobile capabilities.
- Reliable communication with authorized Bitey Web/Cloudflare APIs.
- Mobile notifications and platform integrations where implemented.
- Release builds through the repository's Expo/Android CI pipeline.

## Data and security boundary

The app is a client, not an AI brain. It must never contain provider API keys, private provider credentials or authoritative memory.

```text
Android client
      ↓
Supabase Auth identity
      ↓
authorized Bitey IA API
      ↓
Bitey Web / Cloudflare
      ↓
user-scoped persistence and AI services
```

Authorization is enforced server-side. Client-side identity information is not sufficient to authorize access to another user's data.

## Relationship to BiteFixes

BiteFixes is a separate product ecosystem. Bitey IA may integrate with BiteFixes through explicit authorized enterprise contracts, but BiteFixes-specific customers, tickets, services, company knowledge and workflows do not become general Bitey IA memory.

## Ecosystem

| Repository | Product | Role |
|---|---|---|
| `bitey-web` | **Bitey IA Web** | General Bitey IA web application and Cloudflare supracerebro |
| `bitey-ia-app` | **Bitey IA App** | This Android/mobile client |
| `bitey-ai` | **Bitey IA Enterprise WordPress Plugin** | Authorized WordPress enterprise channel |
| `bitefixes-backend` | **BiteFixes Backend** | Specialized BiteFixes enterprise intelligence/API |
| `bitefixes-web` | **BiteFixes Web** | BiteFixes.com website/frontend |
| `bitefixes-app` | **BiteFixes App** | BiteFixes mobile channel |

## Functional target

```text
Open app
  ↓
Authenticate / restore session
  ↓
Bitey IA
  ↓
New conversation
  ↓
User message
  ↓
Bitey Web / supracerebro
  ↓
Bitey response
  ↓
User-scoped persistence
  ↓
History / Projects / Library
```

## Internal training

Any Bitey training/evaluation infrastructure is an internal service and should not be exposed as a public app destination. External model interaction must comply with the provider's API, license and usage terms.

## Development and release validation

The mobile stack remains based on Expo/React Native. Before release validate:

```text
Android build → install → authentication → message → Bitey Web → response → persistence → logout/login
```

The app must not regress the existing AI conversation path while authentication and user-scoped persistence are introduced.

## Product principle

**Bitey Web is Bitey IA's supracerebro. Bitey IA App is the Android client. BiteFixes App and BiteFixes Backend belong to a separate enterprise ecosystem.**
