# C2PA Content Credentials Pipeline — UNEOM

> **What this gives UNEOM:** Cryptographically signed provenance on every published
> image, declaring UNEOM as the publisher and listing the actions performed
> (AI generation, editing, EXIF injection). Adobe/Microsoft/Google verify these
> signatures and surface them as **Content Credentials** badges.
>
> **Why it's the OPPOSITE of forgery:** This is honest declaration of provenance,
> not concealment. Google announced (Sept 2024) explicit support for C2PA labels
> in Search — verified credentials build trust, they don't hurt rankings.

---

## Setup (one time, ~30 minutes + 24-48h verification)

### 1. Install `c2patool`

```bash
brew install c2patool
c2patool --version
```

### 2. Register UNEOM as a Content Authenticity Initiative member

Free for businesses. https://contentauthenticity.org/membership

You'll receive:
- A **signing certificate** (`uneom-cert.pem`)
- A **private key** (`uneom-key.pem`)

Store both in macOS Keychain or a secrets manager — **never commit to git**.

### 3. Add to local env

```bash
# Add to ~/.zshrc or .env.local (NOT committed)
export UNEOM_C2PA_CERT="/secure/path/uneom-cert.pem"
export UNEOM_C2PA_KEY="/secure/path/uneom-key.pem"
```

### 4. Verify setup

```bash
c2patool --certs "$UNEOM_C2PA_CERT" --key "$UNEOM_C2PA_KEY" \
  --output /tmp/test-signed.avif \
  --manifest scripts/c2pa/templates/manifest-default.json \
  public/images/cities/hero-riyadh.avif

c2patool /tmp/test-signed.avif    # Should show: "Validation: VALID"
```

---

## Signing pipeline

Run **after** `process-images.mjs` completes:

```bash
node scripts/c2pa/sign-all.mjs
```

This iterates the registry (`scripts/image-manifest.json`) and applies a
category-appropriate manifest to each image. Manifest templates live in
`scripts/c2pa/templates/`.

---

## What each manifest declares

For each image, the manifest declares:

| Assertion | Content |
|---|---|
| `c2pa.actions` | created (Gemini 2.5 Flash Image) → edited (UNEOM Sharp Pipeline) → published (UNEOM CMS) |
| `stds.schema-org.CreativeWork` | creator: UNEOM, license: uneom.com/license |
| `c2pa.training-mining` | `ai_generative_training: notAllowed`, `ai_inference: notAllowed` (per UNEOM IP policy) |
| `c2pa.thumbnail.claim.jpeg` | embedded thumbnail (auto) |
| `org.cai.iptc.photo-metadata` | mirrors EXIF/XMP fields (Artist, Copyright, Location) |

---

## Verification

Anyone can verify a UNEOM image's provenance at:

- https://contentcredentials.org/verify (Adobe-hosted, free)
- Browser extension: "Content Credentials" by Adobe
- Programmatic: `c2patool /path/to/image.avif`

Result shows the **full signed chain** of who created and edited the image — the
opposite of "AI footprint stripping" but vastly more powerful for trust.

---

## Why we declared `ai_generative_training: notAllowed`

Companies including Adobe, OpenAI, Google, and Anthropic have committed to
respecting C2PA training-mining directives. Embedding `notAllowed` means our
images cannot legitimately be used to train competitor models — UNEOM's
visual brand stays UNEOM's.

This is a **legitimate IP protection** mechanism, not deception.

---

## What this does NOT do

- ❌ Hide AI origin (we **declare** it openly — that's the point)
- ❌ Forge camera capture claims (cryptographically impossible without
  the camera vendor's signing key)
- ❌ Strip Google's SynthID (technically infeasible)

What it does: **establishes UNEOM as a trustworthy, verified publisher** in the
emerging content authenticity ecosystem. Google + Adobe + LinkedIn search
results display Content Credentials badges, which act as a real-time trust
signal to users and crawlers.
