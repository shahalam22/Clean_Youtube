import React, { useEffect, useState } from 'react';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
// import 'quill/dist/quill.core.css';
import ReactQuill from 'react-quill';
import { Box, Button } from '@mui/material';
import { useStoreActions, useStoreState } from 'easy-peasy';


export default function TextEditor({videoId, playlistId}) {
  const notesAction = useStoreActions((actions) => actions.notes);  
  const notes = useStoreState((state) => state.notes.items);
  const [note, setNote] = useState(notes[videoId] || '');
  // const { quill } = useQuill();


  useEffect(() => {
    setNote(notes[videoId] || '');
    // console.log(notes[videoId]);
    // console.log(note);
    // console.log(videoId);
    // quill.clipboard.dangerouslyPasteHTML(note);
  }, [videoId]);

  const handleChange = (e) => {
      setNote(e);
  }
  
  const handleSave = () => {
      notesAction.updateNote({videoId, note: note});
      // console.log(note);
  }


  const modules = {
    toolbar: [
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
        { align: [] }
      ],
      [{ "color": ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color'] }],
    ]
  }

  const formats = [
    "header", "height", "bold", "italic",
    "underline", "strike", "blockquote",
    "list", "color", "bullet", "indent",
    "link", "image", "align", "size",
  ];

  
  return (
    <Box style={{textAlign: 'center'}}>
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        defaultValue={note}
        placeholder="write your content ...."
        onChange={handleChange}
        style={{ height: "250px", color: "black", backgroundColor: "white"}}
      />
        {/* {console.log(note)} */}
      {/* </ReactQuill> */}
      <Button fullWidth variant='contained' style={{backgroundColor: '#ff0000', paddingTop: '14px', paddingBottom: '14px', marginTop: '15px'}} onClick={() => handleSave()}>Save</Button>
    </Box>
  )
}
