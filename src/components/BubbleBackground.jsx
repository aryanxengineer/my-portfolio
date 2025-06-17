const BubbleBackground = () => {
  const bubbles = Array.from({ length: 25 });

  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      {bubbles.map((_, i) => (
        <div
          key={i}
          className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full absolute animate-float opacity-20 blur-sm"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${5 + Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
};

export default BubbleBackground;
