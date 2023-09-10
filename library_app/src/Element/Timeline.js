import React from 'react';
import { Chrono } from 'react-chrono';

const items = [
  {
    title: "January 2022",
    cardTitle: "Event 1",
    cardSubtitle: "Event 1 Subtitle",
    cardDetailedText: "This is the first event on the timeline.",
  },
  {
    title: "February 2022",
    cardTitle: "Event 2",
    cardSubtitle: "Event 2 Subtitle",
    cardDetailedText: "This is the second event on the timeline.",
  },
  {
    title: "March 2022",
    cardTitle: "Event 3",
    cardSubtitle: "Event 3 Subtitle",
    cardDetailedText: "This is the third event on the timeline.",
  }
];

const HorizontalTimeline = () => {
  return (
    <Chrono
      items={items} flipLayout
      mode="HORIZONTAL"
      itemWidth={"400"}
      theme={{
        primary: "red",
        secondary: "blue",
        cardBgColor: "yellow",
        cardForeColor: "violet",
        titleColor: "black",
        titleColorActive: "red",
      }}
    />
  );
};

export default HorizontalTimeline;