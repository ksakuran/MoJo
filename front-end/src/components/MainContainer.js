import DaySelectionCalendar from "./DaySelectionCalendar";

function MainContainer() {
  return (
    <>
      {/* Always display on the left */}
      <SideNav />

      {/* if no daySelectionId in session or default viewMode */}
      <DaySelectionCalendar />

      {/* if viewMode is Home */}
      <Home />

      {/* if viewMode is Journal */}
      <Journal />

      {/* ifviewMode is Moodscape */}
      <Moodscape />
    </>
  );
}

export default MainContainer;