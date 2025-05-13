const ConfirmationModal = ({ scent, volume, selectedCategory, onConfirm, onBack }) => {
  return (
    <div className="text-center">
      <h2 className="text-xl font-semibold mb-4 font-playfair tracking-tight">Confirm Your Order</h2>
      <p className="italic mb-2">You’re about to order:</p>
      <span className="font-sura">Name: {scent}</span>
      <p className="font-medium font-sura">Volume: {volume}</p>

      <div className="mt-6 flex justify-between">
        <button
          onClick={onBack}
          className="bg-gray-400 text-black px-4 py-2 rounded-md"
        >
          Back
        </button>
        <button
          onClick={onConfirm}
          className="bg-green-600 text-white px-6 py-2 rounded-md"
        >
          Continue to WhatsApp
        </button>
      </div>
    </div>
  );
};

export default ConfirmationModal;