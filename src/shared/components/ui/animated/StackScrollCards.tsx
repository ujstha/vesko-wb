import { motion } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";

interface StackScrollCardsProps<T> {
  items: T[];
  renderCard: (item: T, index: number) => React.ReactNode;
  gap?: number;
  topOffset?: number; // Sticky top offset
}

const StackScrollCards = <T,>({
  items,
  renderCard,
  gap = 12,
  topOffset = 100,
}: StackScrollCardsProps<T>) => {
  const containerRef = useRef<HTMLUListElement>(null);
  const [offsets, setOffsets] = useState<number[]>([]);

  useEffect(() => {
    const calculateOffsets = () => {
      if (!containerRef.current) return;
      const elements = containerRef.current.querySelectorAll<HTMLLIElement>("[data-card]");
      const newOffsets = Array.from(elements).map((_, i) => i * gap);
      setOffsets(newOffsets);
    };

    calculateOffsets();
    window.addEventListener("resize", calculateOffsets);
    return () => window.removeEventListener("resize", calculateOffsets);
  }, [gap]);

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.getBoundingClientRect().top;
    const items = containerRef.current.querySelectorAll<HTMLLIElement>("[data-card]");

    items.forEach((item, i) => {
      const scrollTop = containerTop - i * (item.offsetHeight + gap);
      const scale = scrollTop > 0 ? (item.offsetHeight - scrollTop * 0.05) / item.offsetHeight : 1;
      item.style.transform = `translateY(${offsets[i]}px) scale(${Math.min(scale, 1)})`;
    });
  }, [gap, offsets]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.addEventListener("scroll", handleScroll);
        } else {
          window.removeEventListener("scroll", handleScroll);
        }
      },
      { threshold: [0, 1] }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <ul ref={containerRef} className='stack-cards relative' style={{ gap: `${gap}px` }}>
      {items.map((item, index) => (
        <motion.li
          key={index}
          data-card
          className={`sticky overflow-hidden rounded-lg`}
          style={{
            transform: `translateY(${offsets[index] || 0}px)`,
            top: `${topOffset}px`,
          }}
          initial={{ scale: 1 }}
          animate={{ scale: 1 }}
        >
          {renderCard(item, index)}
        </motion.li>
      ))}
    </ul>
  );
};

StackScrollCards.displayName = "StackScrollCards";

export { StackScrollCards };
