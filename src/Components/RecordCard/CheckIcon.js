import "./RecordCard.css";
//// Function for checking activity icons

export const iconSwitch = ({activityType}) => {
  switch (activityType) {
    case "outdoor running":
      return (
        <img src="/Assets/Logo/running.png" alt="running" className="logo" />
      );
    case "walking":
      return (
        <img src="/Assets/Logo/walking.png" alt="walkink" className="logo" />
      );
    case "bicycle riding":
      return (
        <img
          src="/Assets/Logo/cyclist.png"
          alt="bicycle riding"
          className="logo"
        />
      );
    case "swimming":
      return (
        <img src="/Assets/Logo/swimming.png" alt="swimming" className="logo" />
      );
    case "hiking":
      return (
        <img src="/Assets/Logo/trekking.png" alt="hiking" className="logo" />
      );
    case "aerobics":
      return (
        <img src="/Assets/Logo/aerobic.png" alt="aerobics" className="logo" />
      );
    case "treadmill":
      return (
        <img
          src="/Assets/Logo/treadmill.png"
          alt="treadmill"
          className="logo"
        />
      );
    case "yoga":
      return <img src="/Assets/Logo/yoga.png" alt="yoka" className="logo" />;
    case "rope skipping":
      return (
        <img
          src="/Assets/Logo/skip-rope.png"
          alt="rope skipping"
          className="logo"
        />
      );
    default:
      return (
        <img src="/Assets/Logo/fitness.png" alt="exercise" className="logo" />
      );
  }
};