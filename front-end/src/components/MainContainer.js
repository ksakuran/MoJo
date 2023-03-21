import DaySelectionCalendar from "./DaySelectionCalendar";

function MainContainer() {
  //get viewMode from somewhere
  const viewMode = 'CALENDAR';

  return (
    <>
      {/* Always display on the left */}
      <SideNav />

      {/* if no daySelectionId in session or default viewMode */}
      {
        viewMode === 'CALENDAR' && (
          <DaySelectionCalendar />
        )
      }

      {
        viewMode === 'HOME' && (
          <HomePage />
        )
      }

      {
        viewMode === 'JOURNAL' && (
          <JournalPage />
        )
      }

      {
        viewMode === 'MOODSCAPE' && (
          <Moodscape />
        )
      }

    </>
  );
}

export default MainContainer;