import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const [isExpanded, setExpanded] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(e){
        const {name, value} = e.target;
        setNote(prevNote =>{
            return {
                ...prevNote,
                [name]: value
            }
        });
    }

    function submitNote(e){
        props.onAdd(note)
        setNote({
            title: "",
            content: ""
        });
        e.preventDefault();
    }

    function expand(){
      setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded ? <input onChange={handleChange} name="title" placeholder="Title" value={note.title}/>: null}
        <textarea onChange={handleChange} onClick={expand} name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} value={note.content}/>
        <Zoom in={isExpanded ? true: false}><Fab onClick={submitNote}><AddIcon/></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;