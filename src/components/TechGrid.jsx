import TechCard from './TechCard.jsx';

/**
 * 1 column on phones, 2 on tablets and smaller laptops, 3 on wide desktops
 * (from 1280px up, where a card is wide enough for the full meta row).
 */
export default function TechGrid({ technologies, isInStack, onAdd }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {technologies.map((tech) => (
        <TechCard
          key={tech.id}
          tech={tech}
          isInStack={isInStack(tech.id)}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
}
