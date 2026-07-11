# REACH-AI 2026 Workshop Website

Static website for the **REACH-AI 2026** workshop — *Community-Informed Evaluation and Benchmarking of Culturally Competent Generative AI*, held in conjunction with CIKM 2026 in Rome, Italy on November 8, 2026.

Built with plain HTML, CSS, and JavaScript (no frameworks).

## Pages

| Page | File |
|------|------|
| Invitation | `index.html` |
| Call for Papers | `call-for-papers.html` |
| Keynote Talks | `keynotes.html` |
| Program | `program.html` |
| Accepted Papers | `accepted-papers.html` |
| Organizing Committee | `organizing-committee.html` |
| Registration | `registration.html` |
| Contact | `contact.html` |
| FAQ | `faq.html` |

## Local Development

The site uses `fetch()` to load shared header and footer partials. You must serve the files through a local HTTP server (opening `index.html` directly in a browser will not load the navigation).

From the project root:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

## Project Structure

```
├── index.html
├── call-for-papers.html
├── keynotes.html
├── program.html
├── accepted-papers.html
├── organizing-committee.html
├── registration.html
├── contact.html
├── faq.html
├── css/styles.css
├── js/main.js
└── partials/
    ├── header.html
    └── footer.html
```

## Content Sources

- `Call for Papers - REACH-AI 2026.docx`
- `REACH Google-PVAMU-CIKM-2026-Workshop-Dong.pdf`

Fields not yet available in source materials are marked **TBD** throughout the site.
