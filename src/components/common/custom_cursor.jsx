import { useEffect, useRef } from 'react';

const dotCount = 20;

export default function FancyCursor() {
  const dotsRef = useRef([]);
  const positions = useRef(Array(dotCount).fill({ x: 0, y: 0 }));
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', move);

    const animate = () => {
      let { x, y } = mouse.current;

      positions.current.forEach((pos, index) => {
        const dx = x - pos.x;
        const dy = y - pos.y;

        positions.current[index] = {
          x: pos.x + dx * 0.25,
          y: pos.y + dy * 0.25,
        };

        x = positions.current[index].x;
        y = positions.current[index].y;

        const dot = dotsRef.current[index];
        if (dot) {
          dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <>
      {Array.from({ length: dotCount }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (dotsRef.current[i] = el)}
          className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full"
          style={{
            width: `${20 - i}px`,
            height: `${20 - i}px`,
            opacity: `${1 - i * 0.1}`,
            backgroundColor: '#00ff7f', // neon green
            boxShadow: `0 0 ${15 - i * 2}px #00ff7f`,
            transition: 'transform 0.05s linear',
            mixBlendMode: 'screen',
          }}
        />
      ))}
    </>
  );
}
