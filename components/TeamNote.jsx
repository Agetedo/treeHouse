import teamLeafLabel from "/team-leaf-label.png";
import teamLabelImage from "/team-label-image.png";
import teamNoteImage from "/team-note-image.png";
import "..//styles/TeamNote.scss";

function NoteItems() {
    return (
        <div className="team-note__items">
            <img id="teamLeafLabel" src={teamLeafLabel} alt="#" />
            <img id="teamLabelImage" src={teamLabelImage} alt="#" />
        </div>
    );
}

export default function TeamNote() {
    return (
        <div className="team-note">
            <div className="conteiner">
              <NoteItems />
              <img id="teamNoteImage" src={teamNoteImage} alt="#" />
            </div>
        </div>
    );
}