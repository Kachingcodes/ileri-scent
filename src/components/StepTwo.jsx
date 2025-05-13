import React from "react";

const StepTwo = ({ volume, setVolume, onBack, onNext }) => {
  return (
    <div className="w-full">
      <h2>Select Volume</h2>
      <select value={volume} onChange={(e) => setVolume(e.target.value)}>
        <option value="">-- Select Volume --</option>
        <option value="30ml" className="text-amber-600">30ml</option>
        <option value="50ml" className="text-amber-600">50ml</option>
        <option value="100ml" className="text-amber-600">100ml</option>
      </select>

      <div className="flex gap-4 mt-4">
        <button
          onClick={onBack}
          className="px-6 py-2 bg-gray-400 text-black rounded-md hover:bg-gray-400 transition"
        >
          Back
        </button>
        <button
          onClick={onNext}
          className="px-6 py-2 bg-blue-800 text-white rounded-md hover:bg-gray-900 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepTwo;