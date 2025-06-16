import React, { useState, useEffect } from 'react';
import { Clipboard, Pin, Copy, Download, Save, Check, X } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notes = ({ onClose }) => {
  const [note, setNote] = useState('');
  const [isPinned, setIsPinned] = useState(localStorage.getItem('isPinned') === 'true');
  const [isSaving, setIsSaving] = useState(false);
  const [showDismissPopup, setShowDismissPopup] = useState(false);

  // Load saved note and position from localStorage on component mount
  useEffect(() => {
    const savedNote = localStorage.getItem('note');
    if (savedNote) setNote(savedNote);
  }, []);

  // Save note whenever it changes
  useEffect(() => {
    localStorage.setItem('note', note);
  }, [note]);

  const togglePin = () => {
    const newPinnedState = !isPinned;
    setIsPinned(newPinnedState);
    localStorage.setItem('isPinned', newPinnedState);
    // Save current position when pinning/unpinning
    if (newPinnedState) {
      localStorage.setItem('notePosition', JSON.stringify({ top: '4rem', right: '1rem' }));
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(note);
    toast.success('Copied to clipboard!', {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const downloadNote = () => {
    const element = document.createElement('a');
    const file = new Blob([note], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'note.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const saveNote = () => {
    localStorage.setItem('note', note);
    setIsSaving(true);
    
    // Reset the button after 1.5 seconds
    setTimeout(() => {
      setIsSaving(false);
    }, 1500);
  };

  const handleClose = () => {
    if (note.trim() !== '') {
      setShowDismissPopup(true);
    } else {
      onClose();
    }
  };

  return (
    <>
      <div 
        className={`fixed bottom-4 right-4 bg-gray-800/95 backdrop-blur-sm text-white p-4 rounded-lg w-96 space-y-3 shadow-xl border border-gray-700 ${
          showDismissPopup ? 'opacity-50' : 'opacity-100'
        } transition-opacity duration-200`}
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-gray-700/50 p-2 rounded-lg">
          <div className="flex items-center">
            <Clipboard size={18} className="text-blue-400" />
            <span className="ml-2 font-semibold">Quick Notes</span>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-white transition-colors hover:bg-gray-600/50 rounded-full h-6 w-6 flex items-center justify-center"
            title="Close"
          >
            &times;
          </button>
        </div>

        {/* Textarea */}
        <div>
          <textarea
            className="w-full bg-gray-700/50 p-3 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none border border-gray-600"
            rows="6"
            placeholder="Type your notes here..."
            value={note}
            onChange={(e) => setNote(e.target.value.slice(0, 500))}
          ></textarea>
          <div className="text-xs text-gray-400 text-right mt-1">
            {note.length}/500 characters
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <button
              onClick={togglePin}
              className={`p-2 rounded-full transition-colors ${
                isPinned ? 'bg-yellow-500 text-gray-900' : 'bg-gray-700/50 hover:bg-gray-600'
              }`}
              title={isPinned ? "Unpin note" : "Pin note"}
            >
              <Pin size={16} />
            </button>
            <button
              onClick={copyToClipboard}
              className="bg-gray-700/50 p-2 rounded-full hover:bg-gray-600 transition-colors"
              title="Copy to clipboard"
            >
              <Copy size={16} />
            </button>
            <button
              onClick={downloadNote}
              className="bg-gray-700/50 p-2 rounded-full hover:bg-gray-600 transition-colors"
              title="Download note"
            >
              <Download size={16} />
            </button>
          </div>
          <button
            onClick={saveNote}
            disabled={isSaving}
            className={`${
              isSaving 
                ? 'bg-green-500 text-white' 
                : 'bg-blue-500 hover:bg-blue-600'
            } text-white px-4 py-1.5 rounded-full transition-all duration-200 flex items-center`}
            title="Save note"
          >
            {isSaving ? (
              <>
                <Check size={16} className="mr-1" />
                Saved!
              </>
            ) : (
              <>
                <Save size={16} className="mr-1" />
                Save
              </>
            )}
          </button>
        </div>

        {/* Pin indicator */}
        {isPinned && (
          <div className="text-yellow-500 text-xs text-center bg-gray-700/50 py-1.5 rounded-full">
            Note is pinned
          </div>
        )}
      </div>

      {/* Custom Dismiss Popup */}
      {showDismissPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
          <div className="bg-gray-800 rounded-lg p-6 w-96 border border-gray-700 shadow-2xl transform transition-all duration-200 scale-100 opacity-100">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'Merriweather, serif' }}>Close Notes?</h3>
              <button 
                onClick={() => setShowDismissPopup(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <p className="text-gray-300 mb-6">
              Are you sure you want to close? Make sure you've saved your notes.
            </p>
            
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowDismissPopup(false)}
                className="px-4 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowDismissPopup(false);
                  onClose();
                }}
                className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors flex items-center"
              >
                <X size={16} className="mr-1" />
                Close Notes
              </button>
            </div>
          </div>
        </div>
      )}
      
      <ToastContainer />
    </>
  );
};

export default Notes;
