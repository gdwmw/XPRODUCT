import React from "react";

export default function Footer({ languageProps }) {
  const contentLanguage = {
    copyright: {
      en: "© 2023 Gede Dewo Wahyu M.W. All rights reserved.",
      id: "© 2023 Gede Dewo Wahyu M.W. Hak cipta dilindungi undang-undang.",
    },
  };
  return (
    <footer className="py-4 text-center">
      <p>{languageProps == "inggris" ? contentLanguage.copyright.en : contentLanguage.copyright.id}</p>
    </footer>
  );
}
