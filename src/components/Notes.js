import React, { useState, useEffect } from 'react';
import { Clipboard, Pin, Copy, Download, Save } from 'lucide-react';

export default function Notes({ onClose }) {
  const [note, setNote] = useState('');
  const [isPinned, setIsPinned] = useState(false);

  // Load saved note and pin status from localStorage on component mount
  useEffect(() => {
    const savedNote = localStorage.getItem('note');
    const savedPinStatus = localStorage.getItem('isPinned');
    if (savedNote) setNote(savedNote);
    if (savedPinStatus) setIsPinned(JSON.parse(savedPinStatus));
  }, []);

  // Save note and pin status to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('note', note);
    localStorage.setItem('isPinned', JSON.stringify(isPinned));
  }, [note, isPinned]);

  const togglePin = () => setIsPinned(!isPinned);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(note);
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
  };

  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-lg w-80 space-y-3 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between bg-gray-700 p-2 rounded-lg">
        <div className="flex items-center">
          <Clipboard size={18} />
          <span className="ml-2 font-semibold">Notes</span>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white transition-colors"
          title="Close"
        >
          &times;
        </button>
      </div>

      {/* Textarea */}
      <div>
        <textarea
          className="w-full bg-gray-700 p-3 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          rows="5"
          placeholder="Type your notes here..."
          value={note}
          onChange={(e) => setNote(e.target.value.slice(0, 500))}
        ></textarea>
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <button
            onClick={togglePin}
            className={`p-2 rounded-full transition-colors ${
              isPinned ? 'bg-yellow-500 text-gray-900' : 'bg-gray-700 hover:bg-gray-600'
            }`}
            title={isPinned ? "Unpin note" : "Pin note"}
          >
            <Pin size={16} />
          </button>
          <button
            onClick={copyToClipboard}
            className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors"
            title="Copy to clipboard"
          >
            <Copy size={16} />
          </button>
          <button
            onClick={downloadNote}
            className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors"
            title="Download note"
          >
            <Download size={16} />
          </button>
        </div>
        <button
          onClick={saveNote}
          className="bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-600 transition-colors flex items-center"
          title="Save note"
        >
          <Save size={16} className="mr-1" />
          Save
        </button>
      </div>

      {/* Pin indicator */}
      {isPinned && (
        <div className="text-yellow-500 text-xs text-center bg-gray-700 py-1 rounded-full">
          Pinned
        </div>
      )}
    </div>
  );
}
