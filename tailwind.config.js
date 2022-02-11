module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        card: "inset 0px 7px 11px -4px rgba(255, 85, 85, 0.5), inset 0px -82px 68px -64px rgba(145, 68, 68, 0.3), inset 0px 98px 100px -48px rgba(255, 172, 172, 0.3), inset 0px 4px 18px rgba(210, 146, 146, 0.3), inset 0px 1px 40px rgba(255, 222, 222, 0.2)",
      },
      colors: {
        card_bg:
          "linear-gradient(90deg, rgba(13, 13, 13, 0.7) 0%, rgba(13, 13, 13, 0) 100%)",
        news_large_bg:
          "linear-gradient(180deg,rgba(228, 39, 41, 0.1) 0%,#e42729 100%)",
      },
    },
  },
  plugins: [],
};
