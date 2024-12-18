const AnimatedBackground = () => {
  const cellSize = 70; // Tamaño de cada cuadro en píxeles
  const gridSize = Math.ceil((typeof window !== 'undefined' ? window.innerWidth : 1200) / cellSize)+20; // Aumentado a +4 para cubrir todas las columnas

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base background */}
      <div className="absolute inset-0 bg-[#000F24]">
        {/* Grid */}
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)`,
            backgroundSize: `${cellSize}px ${cellSize}px`,
            backgroundPosition: '-0.5px -0.5px',
          }}>
        </div>

        {/* Animated cells */}
        {[...Array(gridSize * gridSize)].map((_, i) => {
          const row = Math.floor(i / gridSize);
          const col = i % gridSize;
          
          return (
            <div
              key={i}
              className="absolute animate-cell-glow opacity-0"
              style={{
                top: `${row * cellSize + 1}px`,
                left: `${col * cellSize + 1}px`,
                width: `${cellSize - 1}px`,
                height: `${cellSize - 1}px`,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                animationDelay: `${Math.random() * 40}s`,
                animationDuration: '3s',
                animationIterationCount: 'infinite',
              }}
            />
          );
        })}
      </div>

      {/* Bottom semicircle gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[30vh] bg-gradient-to-t from-[#000F24] to-transparent" />
    </div>
  );
};

export default AnimatedBackground; 