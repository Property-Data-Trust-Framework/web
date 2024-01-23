# PDTF Site
This is the docs site for the property data trust framework. It's built using [starlight](https://starlight.astro.build), which uses astro. The sites consists of:
* Landing page
* API reference (using [stoplight elements](https://stoplight.io/open-source/elements))
* Schema reference (also using stoplight elements)
* Learn section containing:
    * Reference articles - currently containing an about page with the contents of the old landing page.
    * Guides - currently empty with an example. Guides can have interactive API calls and schema viewers embeded in them thanks to some hacky stoplight elements integration work I did.

The site is deployed to https://propdata.org.uk using github pages with the astro github action.

## Dev
This repo uses pnpm.

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
|:--------------------------| :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`            | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |



## Starlight Basics
[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)


### 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.


### 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).
