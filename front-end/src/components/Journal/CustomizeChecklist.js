import React from "react";
import Button from './../Common/Button';
import Icon from './../Common/Icon';
import classNames from "classnames";
import "./../../styles/CustomizeChecklist.scss";

function CustomizeChecklist(props) {

  const { setIsCustomize } = props;

  const CustomizeChecklist = classNames("customize-checklist");

  const addChecklistItem = () => {
    console.log("here to add new item");
  };

  return (
    <article className={CustomizeChecklist} >
      <header> my checklist</header>

      <div className="add-checklist">
        <input type="text" placeholder="create peronsalized habit or activity..."></input>
        <Button
          onClickHandler={addChecklistItem}
        >
          <Icon
            isLocal={true} iconSize="medium" imgUrl='images/icons/plus-1.png' iconStyle="padding" /> </Button>
      </div>


      <article className="checklist-items">
        <header>current checklist items</header>
        <div className="item-list-container">
          <div className="item-container">
            meditated
            <Button
              onClickHandler={addChecklistItem}
            >
              <Icon
                isLocal={true} iconSize="small" imgUrl='images/icons/minus-2.png' iconStyle="padding" />
            </Button>
          </div>
          <div className="item-container">
            complimented me
            <Button
              onClickHandler={addChecklistItem}
            >
              <Icon
                isLocal={true} iconSize="small" imgUrl='images/icons/minus-2.png' iconStyle="padding" />
            </Button>
          </div>
        </div>
      </article>
      <article className="checklist-items">
        <header>old checklist items</header>
        <div className="item-list-container">
          <div className="item-container">
            snacked healthy
            <Button
              onClickHandler={addChecklistItem}
            >
              <Icon
                isLocal={true} iconSize="small" imgUrl='images/icons/plus-2.png' iconStyle="padding" />
            </Button>
          </div>
          <div className="item-container">
            showed kindness showed kindness
            <Button
              onClickHandler={addChecklistItem}
            >
              <Icon iconSize="small" imgUrl='images/icons/plus-2.png' iconStyle="padding" />
            </Button>
          </div>
        </div>
      </article>

      <footer>
        <Button
          onClickHandler={() => setIsCustomize(false)}
        >
          <p>confirm</p>
        </Button>
      </footer>
    </article>
  );
};

export default CustomizeChecklist;