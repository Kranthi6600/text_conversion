import { useState } from "react";



const Home = (props) => {

    const [text, setText] = useState('');
    const [history, setHistory] = useState([]);
    const [future, setFuture] = useState([]);
    const [msg, setMsg] = useState('');
    const [pasteLabel, setPasteLabel] = useState('Paste');
    const [copyLabel, setCopyLabel] = useState('Copy');
    const [clearLabel, setClearLabel] = useState('Clear')
    const [upperCaseLabel, setUpperCaseLabel] = useState('Convert to Uppercase')
    const [lowerCaseLabel, setLowerCaseLabel] = useState('Convert to Lowercase')
    const [extraSpacesLabel, setExtraSpacesLabel] = useState('Remove Extra Spaces')


    const showMsg = (message) => {
        setMsg(message);
        setTimeout(() => {
            setMsg('')
        }, 1000);
    }

    const updateText = (newText) => {
        if (text !== newText) {
            setHistory(prev => [...prev.slice(-49), text]);
            setText(newText);
            setFuture([]);
        }
    }

    const handleUndo = () => {
        if (history.length === 0) return;
        const previous = history[history.length - 1];
        setHistory(prev => prev.slice(0, prev.length - 1));
        setFuture(prev => [text, ...prev]);
        setText(previous);
    }

    const handleRedo = () => {
        if (future.length === 0) return;
        const [next, ...rest] = future;
        setFuture(rest);
        setHistory(prev => [...prev, text])
        setText(next);
    }

    const handleUpperCase = () => {
        if (text.trim() === '') return;
        let newText = text.toUpperCase();
        updateText(newText);
        setUpperCaseLabel('Converted to Uppercase')
        setTimeout(() => {
            setUpperCaseLabel('Convert to Uppercase')
        }, 1500);
    }

    const handleLowerCase = () => {
        if (text.trim() === '') return;
        let newText = text.toLowerCase();
        updateText(newText);
        setLowerCaseLabel('Converted to Lowercase')
        setTimeout(() => {
            setLowerCaseLabel('Convert to Lowercase')
        }, 1500);
    }
    
    const handleClearText = () => {
        if (text.trim() === '') return;
        updateText('');
        setClearLabel('Cleared')
        setTimeout(() => {
            setClearLabel('Clear')
        }, 1500);
    }

    const handleCopyText = async () => {
        if (!navigator.clipboard) {
            showMsg('Clipboard not supported');
            return;
        }
        if (text.trim() === '') return;
        try {
            await navigator.clipboard.writeText(text);
            setCopyLabel('Copied')
            setTimeout(() => {
                setCopyLabel('Copy')
            }, 1500);

        } catch {
            showMsg('Copy failed');
        }
    };

    const handlePasteText = async () => {
        try {
            const clipboardText = await navigator.clipboard.readText();
            updateText(clipboardText);
            setPasteLabel('Pasted')

            setTimeout(() => {
                setPasteLabel('Paste')
            }, 1500);

        } catch (err) {
            console.error('Failed to read clipboard contents:', err);
            showMsg('Failed to paste');
        }
    }

    const handleOnChange = (e) => {
        updateText(e.target.value)
    }

    const handleExtraSpaces = () => {
        if (text.trim() === '') return;
        let newText = text.split(/\s+/).join(' ');
        setText(newText)
        setExtraSpacesLabel('Removed Extra Spaces')
        setTimeout(() => {
            setExtraSpacesLabel('Remove Extra Spaces')
        }, 1500);
    }

    const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    const minutesToRead = (0.008 * wordCount).toFixed(3);

    return (
        <>
            <div className="container">

                <h1 className="mt-3">{props.heading}</h1>

                {msg && <div className="alert alert-info py-2 message">{msg}</div>}

                <textarea name="text" value={text} id="textArea" placeholder="Enter Text Here" onChange={handleOnChange} className="form-control my-3 container-fluid text-white bg-dark outline-secondary" rows={6} ></textarea>
                <p className="enlarge">💡 Tip: You can enlarge the text box</p>
                <div className="buttons d-flex flex-wrap gap-2 mb-4">
                    <button className="btn btn-secondary" onClick={handlePasteText}>{pasteLabel}</button>
                    <button className="btn btn-secondary" onClick={handleClearText} disabled={text.trim() === ''}>{clearLabel}</button>
                    <button className="btn btn-secondary" onClick={handleUpperCase} disabled={text.trim() === ''}>{upperCaseLabel}</button>
                    <button className="btn btn-secondary" onClick={handleLowerCase} disabled={text.trim() === ''}>{lowerCaseLabel}</button>
                    <button className="btn btn-secondary" onClick={handleCopyText} disabled={text.trim() === ''}>{copyLabel}</button>
                    <button className="btn btn-secondary" onClick={handleExtraSpaces} disabled={text.trim() === ''}>{extraSpacesLabel}</button>
                    <button className="btn btn-secondary" onClick={handleUndo} disabled={history.length === 0}>Undo</button>
                    <button className="btn btn-secondary" onClick={handleRedo} disabled={future.length === 0}>Redo</button>
                </div>

                <div className="container">
                    <h1>Text Summary</h1>
                    <p><strong>Words : </strong>{wordCount}</p>
                    <p><strong>Chars : </strong>{text.length}</p>
                    <p> <strong>Minutes to read :</strong> {minutesToRead} </p>
                    <h2>Preview</h2>
                    <div className="preview-container">
                        <p id="preview">{text.length > 0 ? text : 'Enter some text in the box above to preview it'}</p>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Home;

