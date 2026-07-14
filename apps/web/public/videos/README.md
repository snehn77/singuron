# Product Demo Videos

Drop the agent demo `.mp4` files in this folder. The filenames must match the
`demo_video_url` paths defined in `registry/products.json`.

## Required files

| File | Product | Registry slug |
|------|---------|---------------|
| `finance-demo.mp4` | Finance Agent | `finance` |
| `video-editor-demo.mp4` | Video Editor | `video-editor` |

## Notes

- These are served from Vercel's CDN (NOT GoDaddy). GoDaddy is registrar/DNS only.
- Until a file is present, the page shows a "Demo video coming soon" placeholder automatically.
- Recommended: H.264 MP4, 1080p or 720p, under ~50 MB each for fast loading.
- To add a new product video: add the product to `registry/products.json` with a
  `demo_video_url`, then drop the matching file here. No code changes needed.
