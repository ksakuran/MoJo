import React, { useState } from 'react';
import classNames from "classnames";
import Journal from "./Journal";
import JournalChecklist from "./JournalChecklist";
import "./../../styles/JournalPage.scss";
import CustomizeChecklist from './CustomizeChecklist';
import Button from './../Common/Button';
import Icon from './../Common/Icon';

function JournalPage() {

  const journalPageClass = classNames("journal-page");

  const [isCustomize, setIsCustomize] = useState(false);

  return (
    <section className={journalPageClass} id="journal-page">

      {!isCustomize && (
        <>
          <Journal />
          <section>
            <JournalChecklist />
            <Button
              onClickHandler={() => setIsCustomize(true)}
              btnType="border"
              btnId="customize"
            >
              <Icon iconSize="small" imgUrl='images/icons/customize_checklist.png' iconStyle="padding" />
              customize checklist
            </Button>
          </section>
        </>
      )}

      {isCustomize && (
        <CustomizeChecklist setIsCustomize={setIsCustomize} />
      )}

    </section>
  );
};

export default JournalPage;