import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';
import react from "@astrojs/react";
import {nodePolyfills} from 'vite-plugin-node-polyfills';
import prismjsPlugin from 'vite-plugin-prismjs';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    markdown: {
        syntaxHighlight: 'prism'
    },
    vite: {
        assetsInclude: ["**/*.yaml"],
        plugins: [nodePolyfills({
            // To add only specific polyfills, add them here. If no option is passed, adds all polyfills
            include: ['path', 'process', 'Buffer'],
            // Whether to polyfill specific globals.
            globals: {
                Buffer: true,
                // can also be 'build', 'dev', or false
                global: true,
                process: true
            }
        }), prismjsPlugin({
            languages: "all"
        }) //todo narrow this down
        ],
        build: {
            commonjsOptions: {
                transformMixedEsModules: true
            }
        }
    },
    integrations: [starlight({
        favicon: '/favicon.png',
        components: {
            // Override the default `SocialIcons` component.
            PageFrame: './src/components/CustomPageFrame.astro',
            Header: './src/components/CustomHeader.astro'
        },
        logo: {
            light: './src/assets/opda_logo.png',
            dark: './src/assets/opda_logo.png',
            replacesTitle: false,
            alt: 'property data trust framework logo. An orange house with connected nodes overlayed'
        },
        title: 'PDTF',
        customCss: [
            // Path to your Tailwind base styles:
            './src/tailwind.css',
        ],
        social: {
            github: 'https://github.com/Property-Data-Trust-Framework'
        },
        sidebar: [
            {
                label: 'Reference',
                autogenerate: {
                    directory: 'reference'
                }
            },
            {
                label: 'Guides',
                items: [
                    // Each item here is one entry in the navigation menu.
                    {
                        label: 'Example Guide',
                        link: '/guides/example/'
                    }]
            },

            // , {
            //   label: 'Api',
            //   link: '/api'
            // }, {
            //   label: 'Schemas',
            //   link: '/schemas'
            // }
        ]
    }), react(), tailwind({      // Disable the default base styles:
        applyBaseStyles: false
    })]
});