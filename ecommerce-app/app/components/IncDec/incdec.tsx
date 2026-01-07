interface CounterProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const Counter = ({ quantity, onIncrease, onDecrease }: CounterProps) => {
  return (
    <div className="flex items-center justify-center gap-2 bg-white rounded-full px-4 py-2">
      <button 
        onClick={onDecrease}
        className="w-8 h-8 bg-red-400 rounded-full flex items-center justify-center text-white font-bold hover:bg-red-500"
      >
        -
      </button>
      <span className="text-lg font-bold w-8 text-center">{quantity}</span>
      <button 
        onClick={onIncrease}
        className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-white font-bold hover:bg-green-500"
      >
        +
      </button>
    </div>
  );
};

export default Counter;