import React from 'react';
import ReactQuill from 'react-quill'
import '../../../node_modules/react-quill/dist/quill.snow.css';
import './TextEditor.css'

const TextEditor = ({ setDescription, description, setCharacter }) => {
    const handleDescription = (e) => {
        setDescription(e)
    }
    return (
        <div>
            <ReactQuill
                placeholder='Write your description, (Remember, Write at least 50 charecters for short description without using any format like, heading or link)'
                modules={TextEditor.modules}
                formats={TextEditor.formats}
                onChange={handleDescription}
                value={description}
            />
        </div>
    );
};


TextEditor.modules = {
    toolbar: [
        [{ header: '1' }, { header: '2' }, { header: [3, 4, 5, 6] }, { font: [] }],
        [{ size: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }],
        ['link'],
        ['clean'],
        ['code-block']
    ]
};

TextEditor.formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "code-block"
];

export default TextEditor;