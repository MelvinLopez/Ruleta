import React, { useState, useEffect } from 'react';
import { convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { Editor } from 'react-draft-wysiwyg';

const content = {
    "blocks": [
        {
            "key": "637gr",
            "text": "texto de ejemplo",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {
                "text-align": "center"
            }
        }
    ],
    "entityMap": {}
}

const editorxD = ({ 
    setValueHtml,
    setValueJSON,
    defaultValue,
    defaultLength = 1000,
}) => {
    const [contentStatse, setContentStatse] = useState();
    const [cargando, setcargando] = useState(true);
    const [TextValue, setTextValue] = useState('');

    const onEditorStateChange = (editorStateHTML) => {
        setValueJSON(editorStateHTML);
        setContentStatse(editorStateHTML);
    }

    const onEditorStateChange2 = (editorStateJSON) => {
        setValueHtml(draftToHtml(convertToRaw(editorStateJSON.getCurrentContent())));
        onEditorChange(editorStateJSON)
    }

    
    const onEditorChange = (editorState) => {
        const blocks = convertToRaw(editorState.getCurrentContent()).blocks;
        const value = blocks.map(block => (!block.text.trim() && '\n') || block.text).join('\n');
        setTextValue(value);
    };
    
    const handleBeforeInput = () => {
        if (TextValue.length >= defaultLength) {
            return 'handled';
        }
    }

    const handlePastedText = () => {
        if (TextValue.length >= defaultLength) {
            return 'handled';
        }
    }

    useEffect(() => {
        if (defaultValue) {
            setContentStatse(defaultValue);
            setcargando(false);
        } else {
            setContentStatse(content);
            setcargando(false);
        }
    }, [defaultValue]);

    if (cargando) {
        return (
            <div
                style={{
                    width: '100%',
                    height: '200px',
                    background: '#777777',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <h1
                    style={{
                        color: 'var(--color-principal)',
                        fontFamily: 'var(--fuente-texto-principal)'
                    }}
                >
                    cargando...
                </h1>
            </div>
        )
    }
    return(
        <div>
            <Editor
                initialContentState={contentStatse}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onContentStateChange={onEditorStateChange}
                onEditorStateChange={onEditorStateChange2}
                handleBeforeInput={handleBeforeInput}
                handlePastedText={handlePastedText}
            />
            <p>
                {`${TextValue.length} de ${defaultLength}`}
            </p>
        </div>
    )
}
export default editorxD;