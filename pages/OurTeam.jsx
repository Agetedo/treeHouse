import TeamHeading from "../components/TeamHeading";
import TeamNote from "../components/TeamNote";
import TeamVision from "../components/TeamVision";
import TeamVideo from "../components/TeamVideo";
import TeamMission from "../components/TeamMission";
import TeamSticker from "../components/TeamSticker";
import ShopMenu from "../components/ShopMenu";
import TeamChoose from "../components/TeamChoose";
import PressAbout from "../components/PressAbout";
import ChangeEmail from "../components/ChangeEmail";

export default function OurTeam() {
    return (
        <>
          <TeamHeading />
          <TeamNote />
          <TeamVision />
          <TeamVideo />
          <TeamMission />
          <TeamSticker />
          <ShopMenu />
          <TeamChoose />
          <PressAbout />
          <ChangeEmail />
        </>
    );
}