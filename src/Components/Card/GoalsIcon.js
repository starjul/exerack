import "../RecordCard/RecordCard.css";

export const goalIcon = ({ goalType }) => {
  switch (goalType) {
    case "Steps":
      return <img src="/Assets/Logo/step.png" alt="steps" className="logo" />;
    case "Calories":
      return (
        <img src="/Assets/Logo/fire.png" alt="calories burn" className="logo" />
      );
    case "Sleep":
      return (
        <img src="/Assets/Logo/sleeping2.png" alt="sleep" className="logo" />
      );
  }
};

export const goalUnit = ({ goalType }) => {
  switch (goalType) {
    case "Steps":
      return (<p>Steps</p>);
    case "Calories":
      return (
        <p>Calories</p>
      );
    case "Sleep":
      return (
        <p>Hours</p>
      );
  }
};
