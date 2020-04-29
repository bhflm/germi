const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    content: [
      "./src/pages/**/*.{js,jsx,ts,tsx}",
      "./src/components/**/*.{js,jsx,ts,tsx}"
    ],
    defaultExtractor: content => content.match(/[w-/:]+(?<!:)/g) || []
  }
];

module.exports = {
  plugins: [
    "postcss-import",
    "tailwindcss",
    "autoprefixer",
    ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
  ]
};