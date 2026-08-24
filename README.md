# Bitey IA App

`bitey-ia-app` is the **Android/mobile application for the general Bitey IA product**.

Its intelligence is provided by **Bitey Web**, the Bitey IA supracerebro running on Cloudflare. The app is a client/channel of that product, not an independent AI brain and not a BiteFixes application.

## Product boundary

```text
                 BITEY IA
             General AI product
                     │
          ┌──────────┴──────────┐
          │                     │
     Bitey Web              Bitey IA App
   Supracerebro             Android client
   Cloudflare                    │
          └──────────┬───────────┘
                     │
             shared Bitey IA
                experience
```

**Bitey Web is the supracerebro. Bitey IA App is its mobile client.**

The app must not treat `bitefixes-backend` as its primary intelligence layer.

## Responsibilities

The app is responsible for:

- Android/mobile presentation and UX.
- Authentication and secure session transport.
- Conversation interface and history UX.
- New conversations and message composition.
- Projects, library, profile and settings interfaces.
- Files, images, voice and other supported mobile capabilities.
- Reliable communication with authorized Bitey Web APIs/contracts.
- Mobile-specific notifications and platform integrations.

The app must NOT contain:

- AI provider API keys;
- a duplicate authoritative reasoning engine;
- BiteFixes company memory as general Bitey memory;
- cross-tenant private data;
- provider credentials embedded in the application bundle.

## Relationship to BiteFixes

BiteFixes is a separate product ecosystem.

| Repository | Product | Role |
|---|---|---|
| `bitey-web` | **Bitey IA Web** | Bitey IA supracerebro and primary Cloudflare web application |
| `bitey-ia-app` | **Bitey IA App** | This Android/mobile client of Bitey IA |
| `bitey-ai` | **Bitey IA Enterprise WordPress Plugin** | Enterprise WordPress channel |
| `bitefixes-backend` | **BiteFixes Backend** | Specialized BiteFixes enterprise backend/intelligence |
| `bitefixes-app` | **BiteFixes App** | BiteFixes mobile channel |
| `bitefixes-web` | **BiteFixes Web** | BiteFixes website/frontend |

Bitey IA may receive authorized enterprise context through explicit contracts, but this does not turn BiteFixes Backend into the general Bitey IA brain.

## Functional target

The Android app should provide a coherent flow:

```text
Open app
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
Conversation persistence
  ↓
History / Projects / Library
```

## Security

1. Keep provider credentials server-side.
2. Authenticate users and enforce authorization server-side.
3. Treat client input as untrusted.
4. Use secure transport and platform secret storage.
5. Never embed private BiteFixes data in the general app bundle.
6. Keep authoritative intelligence and memory outside the client.

## Development

The implementation should remain compatible with the repository's current mobile stack. Before release, validate:

```text
Android build → install → authentication → message → Bitey Web → response → persistence
```

## Product principle

**Bitey Web is Bitey IA's supracerebro. Bitey IA App is the Android client. BiteFixes App and BiteFixes Backend belong to a separate enterprise ecosystem.**
