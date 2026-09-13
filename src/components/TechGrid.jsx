import TechCard from './TechCard.jsx';

export default function TechGrid({ technologies, isInStack, onAdd }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
