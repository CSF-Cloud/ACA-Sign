<h1 align="center" style="border-bottom: none">
  <div>
    ACA-Sign
  </div>
</h1>
<h3 align="center">
  Secure document signing for your organization
</h3>
<p>
ACA-Sign is a secure digital platform for sending, signing, and managing documents online—quickly, safely, and paper-free. Built on the <a href="https://github.com/docusealco/docuseal">DocuSeal</a> open source platform.
</p>

## Features
- PDF form fields builder (WYSIWYG)
- 12 field types available (Signature, Date, File, Checkbox etc.)
- Multiple submitters per document
- Automated emails via SMTP
- Files storage on disk or AWS S3, Google Storage, Azure Cloud
- Automatic PDF eSignature
- PDF signature verification
- Users management
- Mobile-optimized
- Multiple UI languages with signing available in 14 languages
- API and Webhooks for integrations
- Easy to deploy in minutes

## Deploy

### Railway

Deploy to Railway with the following environment variables:

| Variable | Value |
|---|---|
| `DATABASE_URL` | Your PostgreSQL connection string |
| `SECRET_KEY_BASE` | A 64-character random secret |
| `SMTP_ADDRESS` | Your SMTP server address |
| `SMTP_PORT` | SMTP port (e.g. 587) |
| `SMTP_USERNAME` | SMTP username |
| `SMTP_PASSWORD` | SMTP password |
| `SMTP_FROM` | Sender email address |
| `FORCE_SSL` | `TRUE` for HTTPS |
| `PORT` | `3000` |

### Docker

```sh
docker run --name acasign -p 3000:3000 -v.:/data acasign
```

### Docker Compose

```sh
sudo HOST=your-domain-name.com docker compose up
```

## License

Based on DocuSeal, distributed under the AGPLv3 License with Section 7(b) Additional Terms. See [LICENSE](LICENSE) and [LICENSE_ADDITIONAL_TERMS](LICENSE_ADDITIONAL_TERMS) for more information.
