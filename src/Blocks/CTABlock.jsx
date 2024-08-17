import CTA from "../Components/CTA/CTA";
import ScheduleButton from "../Components/ScheduleButton/ScheduleButton";

export default function CTABlock({children}) {
    return (
      <CTA>
        <ScheduleButton isOn={true} />
      </CTA>
    );
  }