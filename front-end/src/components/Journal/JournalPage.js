import React from 'react';
import classNames from "classnames";
import Journal from "./Journal";
import JournalChecklist from "./JournalChecklist";
import "./../../styles/JournalPage.scss";

function JournalPage() {

  const journalPageClass = classNames("journal-page")

  return (
    <section className={journalPageClass} id="journal-page">
      <Journal />
      <JournalChecklist />
    </section>
  );
};

export default JournalPage;