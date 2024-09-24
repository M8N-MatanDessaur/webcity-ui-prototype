import { Blockquote } from "../Components/_Common/common.styles";
import CanvasContainer from "../Components/CanvasContainer/CanvasContainer";
import CTA from "../Components/CTA/CTA";
import ScheduleButton from "../Components/ScheduleButton/ScheduleButton";

export default function CTABlock({ children }) {
  return (
    <CanvasContainer>
        <CTA>
          <ScheduleButton isOn={true} />
        </CTA>
    </CanvasContainer>
  );
}