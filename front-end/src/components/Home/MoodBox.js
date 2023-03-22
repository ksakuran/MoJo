import React from "react";
import "./../../styles/MoodBox.scss";
import classNames from "classnames";
import MoodBoxItem from "./MoodBoxItem";

const MoodBox = (props) => {
  const MoodBoxClass = classNames("mood-box");

  const dummyData = [
    {
      id: '1',
      name: 'happy',
      selected: true,
    },
    {
      id: '2',
      name: 'grateful',
      selected: true,
    },
    {
      id: '3',
      name: 'excited',
      selected: true,
    },
    {
      id: '4',
      name: 'confident',
      selected: false,
    },
    {
      id: '5',
      name: 'motivated',
      selected: false,
    },
    {
      id: '6',
      name: 'neutral',
      selected: false,
    },
    {
      id: '7',
      name: 'relaxed',
      selected: false,
    },
    {
      id: '8',
      name: 'tired',
      selected: false,
    },
    {
      id: '9',
      name: 'uncertain',
      selected: false,
    },
    {
      id: '10',
      name: 'bored',
      selected: false,
    },
    {
      id: '11',
      name: 'sad',
      selected: false,
    },
    {
      id: '12',
      name: 'stressed',
      selected: false,
    },
    {
      id: '13',
      name: 'anxious',
      selected: false,
    },
    {
      id: '14',
      name: 'angry',
      selected: false,
    },
    {
      id: '15',
      name: 'depressed',
      selected: false,
    },
  ];

  const moods = dummyData.map((mood) => {
    return (
      <MoodBoxItem key={mood.id} name={mood.name} selected={mood.selected} />
    );
  });

  return (
    <article className={MoodBoxClass}>
      <header>how are you feeling today?</header>
      <div>{moods}</div>
    </article>
  );
};

export default MoodBox;
