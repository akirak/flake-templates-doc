// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import catppuccinTheme from "starlight-theme-catppuccin";
import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  site: "https://akirak.github.io/flake-templates-doc/",
  base: "/flake-templates-doc/",
  integrations: [
    markdoc(),
    starlight({
      title: "Nix Flake Templates",
      plugins: [catppuccinTheme()],
      social: {
        github: "https://github.com/akirak/flake-templates-doc",
      },
      sidebar: [
        {
          label: "Introduction",
          slug: "introduction",
        },
        {
          label: "Getting started",
          slug: "getting-started",
        },
        {
          label: "Configuration",
          items: [
            { label: "Nix Direnv", slug: "configuration/nix-direnv" },
            {
              label: "Editor support",
              items: [{ label: "Emacs", slug: "configuration/editor/emacs" }],
            },
          ],
        },
        {
          label: "Recipes",
          // Sort these items alphabetically by the language name
          items: [
            {
              label: "Elixir",
              items: [
                {
                  label: "Elixir Phoenix application",
                  slug: "recipes/elixir/phoenix",
                },
              ],
            },
            {
              label: "Gleam",
              items: [{ label: "Gleam application", slug: "recipes/gleam/app" }],
            },
            {
              label: "Go",
              items: [{ label: "Go executable", slug: "recipes/go/executable" }],
            },
            {
              label: "OCaml",
              items: [
                { label: "Generic Dune project", slug: "recipes/ocaml/generic" },
              ],
            },
            {
              label: "Rust",
              items: [{ label: "Rust executable", slug: "recipes/rust/executable" }],
            },
            {
              label: "TypeScript",
              items: [
                {
                  label: "TypeScript web application (with a framework)",
                  slug: "recipes/typescript/web-framework",
                },
                // { label: "Library", slug: "recipes/typescript/library" },
              ],
            },
            {
              label: "Zig",
              items: [{ label: "Zig CLI application", slug: "recipes/zig/cli" }],
            },
          ],
        },
        {
          label: "Patterns",
          slug: "patterns",
        },
        {
          label: "Resources",
          slug: "resources",
        },
      ],
    }),
  ],
});
