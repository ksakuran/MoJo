import React, { useEffect, useContext, useState } from "react";
import Button from './../Common/Button';
import Icon from './../Common/Icon';
import classNames from "classnames";
import "./../../styles/CustomizeChecklist.scss";
import axios from 'axios';
import { appContext } from './../../providers/AppProvider';

function CustomizeChecklist(props) {

  const CustomizeChecklist = classNames("customize-checklist");
  const { setIsCustomize } = props;
  const { userId } = useContext(appContext);

  const [activeChecklistItemList, setActiveChecklistItemList] = useState([]);
  const [inActiveChecklistItemList, setInActiveChecklistItemList] = useState([]);

  console.log("activeChecklistItemList: ", activeChecklistItemList);
  console.log("inActiveChecklistItemList: ", inActiveChecklistItemList);

  useEffect(() => {
    axios
      .get(`/api/checklist/item/${userId}`)
      .then(res => {
        console.log("checklist items: ", res);
        setActiveChecklistItemList(res.data.checklistItems[0]);
        setInActiveChecklistItemList(res.data.checklistItems[1]);
      });
  }, []);



  const addChecklistItem = () => {
    console.log("here to add new item");
  };

  const activeChecklistItems = activeChecklistItemList.map(item => {
    return (
      <div className="item-container">
        {item.checklist_item_description}
        <Button
          onClickHandler={addChecklistItem}
        >
          <Icon
            isLocal={true} iconSize="small" imgUrl='images/icons/minus-2.png' />
        </Button>
      </div>
    );
  });



  const inActiveChecklistItems = inActiveChecklistItemList.map(item => {
    return (
      <div className="item-container">
        {item.checklist_item_description}
        <Button
          onClickHandler={addChecklistItem}
        >
          <Icon
            isLocal={true} iconSize="small" imgUrl='images/icons/plus-2.png' iconStyle="padding" />
        </Button>
      </div>
    );
  });

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

      <section className="checklist-item-list">
        <article className="checklist-items">
          <header>current checklist items</header>
          <div className="item-list-container">
            {activeChecklistItems}
          </div>
        </article>
        <article className="checklist-items">
          <header>inactive checklist items</header>
          <div className="item-list-container">
            {inActiveChecklistItems}
          </div>
        </article>

      </section>


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