import ErrorState from './ErrorState.jsx';
import LoadingState from './LoadingState.jsx';
import StackPanel from './StackPanel.jsx';
import TechGrid from './TechGrid.jsx';
import { useStack } from '../context/StackContext.jsx';

export default function TechnologiesSection({ technologies, loading, error }) {
  const { stack, addToStack, removeFromStack, clearStack, isInStack } = useStack();

  return (
    <section id="technologies" className="scroll-mt-24 pb-16 lg:pb-24">
      <div className="shell">
        <header className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Explore the <span className="text-gradient">Technologies</span>
          </h2>
          <p className="mt-3 text-base text-slate-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-9">
            {loading && <LoadingState />}
            {!loading && error && <ErrorState message={error} />}
            {!loading && !error && (
              <TechGrid technologies={technologies} isInStack={isInStack} onAdd={addToStack} />
            )}
          </div>

          <StackPanel stack={stack} onRemove={removeFromStack} onClearAll={clearStack} />
        </div>
      </div>
    </section>
  );
}
