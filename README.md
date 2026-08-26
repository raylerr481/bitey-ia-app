# Bitey IA App

`bitey-ia-app` is the Android/mobile **channel of the same Bitey IA Supracerebro** provided by `bitey-web`.

## Product role

Bitey IA App is not a second AI. It gives users mobile access to the same general Bitey IA identity, conversation model and authorized capabilities exposed by Bitey IA Web.

```text
                 BITEY IA
              SUPRACEREBRO / IA
                     │
             ┌───────┴───────┐
             │               │
        Bitey IA Web    Bitey IA App
         web channel     mobile channel
```

Bitey IA remains a complete general-purpose AI. JobIA, Bitey Trainer, Bitey System Bots Trading and BiteFixes can enrich the ecosystem through controlled, authorized interfaces without restricting the general Bitey IA experience.

## Relationship to modules

- **JobIA** — employment/opportunity product in development.
- **Bitey Trainer** — internal intelligence/training engine of JobIA; not an app.
- **Bitey System Bots Trading** — independent trading module; its mobile app is **Bitey SBT App**.
- **BiteFixes** — enterprise product with BiteFixes Web and App.
- **Bitey IA Empresarial** — contextual enterprise manifestation used within authorized BiteFixes flows.
- **bitey-ai** — WordPress enterprise integration/plugin channel.

## Core mobile functionality

- Registration, login, logout and session persistence.
- Conversations and history.
- User profile and settings.
- Projects/library and supported files.
- Voice/microphone capabilities where implemented.
- Secure communication with authorized Bitey IA APIs.
- Mobile notifications/integrations where implemented.

The app does not contain provider secrets or authoritative server-side data. Backend authorization remains mandatory.

## BiteFixes relationship

BiteFixes is a separate enterprise product. Its Bitey IA Empresarial maintains Bitey IA capabilities while using authorized BiteFixes context such as CRM, customers, tickets, services, knowledge and workflows. That private operational context remains scoped to BiteFixes.

## Android release target

Target: a real installable Android APK, validated on a physical device.

```text
Install → authenticate → chat → Bitey IA Web/API → response → persistence → logout/login
```

## Security

- No provider API keys in the mobile app.
- No Supabase service-role keys in the mobile app.
- User data is isolated by authorization/RLS where applicable.
- Sensitive reasoning and authoritative data remain server-side.
- API contracts must be explicit and versioned.
