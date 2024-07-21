import React from "react";

import { useLanguage } from "../../context/LanguageContext";

export default function Empty({labelName }) {

    const { t } = useLanguage();

    return <p>{t(`${labelName}`)}</p>;
  }
  
  