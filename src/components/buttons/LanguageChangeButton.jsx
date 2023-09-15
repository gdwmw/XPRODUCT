import React from "react";

export default function LanguageChangeButton({ languageProps, onClickENProps, onClickIDProps }) {
  return (
    <div className="mt-5 flex items-center justify-center text-xs">
      <button type="button" onClick={onClickENProps} className={`${languageProps == "inggris" ? "text-blue-500" : "text-black"}`}>
        EN
      </button>
      <p>/</p>
      <button type="button" onClick={onClickIDProps} className={`${languageProps == "inggris" ? "text-black" : "text-blue-500"}`}>
        ID
      </button>
    </div>
  );
}
