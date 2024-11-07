import { useState, useEffect } from 'react';
import { SketchPicker } from 'react-color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';

function SettingsModal({ setName, onClose, setBackgroundGradient, setSearchBarPosition, setSearchBarSize }) {
  const [tempName, setTempName] = useState('');
  const [backgroundOption, setBackgroundOption] = useState('default');
  const [color1, setColor1] = useState('#e63946');
  const [color2, setColor2] = useState('#f1faee');
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [searchBarPosition, setTempSearchBarPosition] = useState('default');
  const [searchBarSize, setTempSearchBarSize] = useState('medium');

  useEffect(() => {
    setTempName(localStorage.getItem('userName') || '');
    setBackgroundOption(localStorage.getItem('backgroundOption') || 'default');
    const savedGradient = localStorage.getItem('customGradient') || '#e63946,#f1faee';
    const colors = savedGradient.split(',');
    setColor1(colors[0]);
    setColor2(colors[1]);
    setTempSearchBarPosition(localStorage.getItem('searchBarPosition') || 'default');
    setTempSearchBarSize(localStorage.getItem('searchBarSize') || 'medium');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(tempName);
    localStorage.setItem('userName', tempName);
    localStorage.setItem('backgroundOption', backgroundOption);
    const gradientString = `${color1},${color2}`;
    localStorage.setItem('customGradient', gradientString);
    localStorage.setItem('searchBarPosition', searchBarPosition);
    localStorage.setItem('searchBarSize', searchBarSize);
    setSearchBarPosition(searchBarPosition);
    setSearchBarSize(searchBarSize);
    if (backgroundOption === 'custom') {
      setBackgroundGradient(`linear-gradient(to bottom right, ${gradientString})`);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full mx-4 transform transition-all duration-300 ease-in-out">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Settings</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              value={tempName}
              onChange={(e) => setTempName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Background
            </label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="background"
                  value="default"
                  checked={backgroundOption === 'default'}
                  onChange={() => setBackgroundOption('default')}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2 text-gray-300">Default</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="background"
                  value="custom"
                  checked={backgroundOption === 'custom'}
                  onChange={() => setBackgroundOption('custom')}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2 text-gray-300">Custom</span>
                {backgroundOption === 'custom' && (
                  <FontAwesomeIcon
                    icon={faPalette}
                    className="ml-2 text-gray-300 cursor-pointer"
                    onClick={() => setShowColorPicker(!showColorPicker)}
                  />
                )}
              </label>
            </div>
            {showColorPicker && (
              <div className="mt-4 flex justify-between">
                <div>
                  <p className="text-gray-300 mb-2">Color 1</p>
                  <SketchPicker
                    color={color1}
                    onChangeComplete={(color) => setColor1(color.hex)}
                  />
                </div>
                <div>
                  <p className="text-gray-300 mb-2">Color 2</p>
                  <SketchPicker
                    color={color2}
                    onChangeComplete={(color) => setColor2(color.hex)}
                  />
                </div>
              </div>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Search Bar Position
            </label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="searchBarPosition"
                  value="default"
                  checked={searchBarPosition === 'default'}
                  onChange={() => setTempSearchBarPosition('default')}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2 text-gray-300">Default</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="searchBarPosition"
                  value="centered"
                  checked={searchBarPosition === 'centered'}
                  onChange={() => setTempSearchBarPosition('centered')}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2 text-gray-300">Centered</span>
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Search Bar Size
            </label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="searchBarSize"
                  value="small"
                  checked={searchBarSize === 'small'}
                  onChange={() => setTempSearchBarSize('small')}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2 text-gray-300">Small</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="searchBarSize"
                  value="medium"
                  checked={searchBarSize === 'medium'}
                  onChange={() => setTempSearchBarSize('medium')}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2 text-gray-300">Medium</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="searchBarSize"
                  value="large"
                  checked={searchBarSize === 'large'}
                  onChange={() => setTempSearchBarSize('large')}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2 text-gray-300">Large</span>
              </label>
            </div>
          </div>
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition duration-200"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition duration-200"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SettingsModal;