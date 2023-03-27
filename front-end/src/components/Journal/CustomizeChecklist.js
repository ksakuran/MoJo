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
  const [updateItem, setUpdateItem] = useState({});
  const [addItem, setAddItem] = useState({});
  const [itemDesc, setItemDesc] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  //fetch data on load
  useEffect(() => {
    fetchData();
  }, []);

  //update status changes and refetch data
  useEffect(() => {
    if (Object.keys(updateItem).length > 0) {
      axios
        .post(`/api/checklist/item/status`, updateItem)
        .then(res => {
          fetchData();
        });
    }
  }, [updateItem]);

  //add new item and refetch data
  useEffect(() => {
    if (Object.keys(addItem).length > 0) {
      //add new item
      axios
        .post(`/api/checklist/item/new`, addItem)
        .then(res => {
          fetchData();
          setItemDesc("");
        });
    }
  }, [addItem]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [showAlert]);

  const fetchData = () => {
    axios
      .get(`/api/checklist/item/${userId}`)
      .then(res => {
        setActiveChecklistItemList(res.data.checklistItems[0]);
        setInActiveChecklistItemList(res.data.checklistItems[1]);
      });
  };

  const updateItemStatus = (itemId, status) => {
    setUpdateItem({
      isActive: !status,
      itemId: itemId,
      userId: userId
    });
  };

  const addChecklistItem = () => {

    let isAdd = true;
    console.log("activeChecklistItemList: ", activeChecklistItemList);
    //check if existing item for this
    activeChecklistItemList.map(item => {
      if (item.checklist_item_description.toLowerCase() === itemDesc.toLowerCase()) {
        setShowAlert(true);
        isAdd = false;
      }
    });
    inActiveChecklistItemList.map(item => {
      if (item.checklist_item_description.toLowerCase() === itemDesc.toLowerCase()) {
        console.log("update status of existing item");
        setUpdateItem({
          isActive: !item.active,
          itemId: item.id,
          userId: userId
        });
        isAdd = false;
      }
    });

    if (isAdd) {
      console.log("add item");
      setAddItem({
        isInitial: false,
        checklistItemDesc: itemDesc,
        userId: userId
      });
    }
  };

  const activeChecklistItems = activeChecklistItemList.map(item => {
    return (
      <div className="item-container" key={item.id}>
        {item.checklist_item_description}
        <Button
          onClickHandler={() => updateItemStatus(item.id, item.active)}
        >
          <Icon
            isLocal={true} iconSize="small" imgUrl='images/icons/minus-2.png' />
        </Button>
      </div>
    );
  });

  const inActiveChecklistItems = inActiveChecklistItemList.map(item => {
    return (
      <div className="item-container" key={item.id}>
        {item.checklist_item_description}
        <Button
          onClickHandler={() => updateItemStatus(item.id, item.active)}
        >
          <Icon
            isLocal={true} iconSize="small" imgUrl='images/icons/plus-2.png' />
        </Button>
      </div >
    );
  });

  return (
    <article className={CustomizeChecklist} >
      <header> my checklist</header>
      <div className="add-checklist">
        <input
          type="text"
          value={itemDesc}
          onChange={(event) => setItemDesc(event.target.value)}
          placeholder="create peronsalized habit or activity..."></input>
        <Button
          onClickHandler={() => addChecklistItem()}
        >
          <Icon
            isLocal={true} iconSize="medium" imgUrl='images/icons/plus-1.png' iconStyle="padding" /> </Button>
      </div>
      {showAlert && (
        <div className="alert alert-danger" role="alert">
          item already exists in current checklist items!
        </div>
      )}
      <section>
        <article>
          <header>current checklist items</header>
          <div>
            {activeChecklistItems}
          </div>
        </article>
        <article>
          <header>inactive checklist items</header>
          <div>
            {inActiveChecklistItems}
          </div>
        </article>
      </section>


      <footer>
        <Button
          onClickHandler={() => setIsCustomize(false)}
        >
          <p>back</p>
        </Button>
      </footer>
    </article>
  );
};

export default CustomizeChecklist;