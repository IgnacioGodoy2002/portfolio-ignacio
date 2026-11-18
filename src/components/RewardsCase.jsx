import { ArrowUpRight, ChevronDown, Layers3 } from 'lucide-react';
import { rewardsProject } from '../data/rewards';

export function RewardsFeature({ onProject }) {
  return <article id="rewards-ledger" className="ledger-feature" aria-labelledby="ledger-feature-title">
    <div className="ledger-feature-copy">
      <span className="small-kicker"><Layers3 size={16} aria-hidden="true" />CASO TÉCNICO · SURA GAMING</span>
      <h3 id="ledger-feature-title">The Rewards Ledger</h3>
      <p>Integración, validación y calibración de recompensas para cinco minijuegos con mecánicas diferentes.</p>
      <div className="ledger-events"><code>INIT_GAME</code><span>Sesión, resultado y SURA Points</span><code>GAME_COMPLETE</code></div>
      <button className="text-button" onClick={() => onProject(rewardsProject)}>Ver el caso técnico<ArrowUpRight size={18} /></button>
    </div>
    <div className="ledger-feature-scope">
      <span className="eyebrow">ALCANCE DOCUMENTADO</span>
      <dl className="ledger-metrics">{rewardsProject.metrics.map(metric => <div key={metric.label}><dt>{metric.label}</dt><dd>{metric.value}</dd></div>)}</dl>
    </div>
  </article>;
}

export function RewardsDetails({ project }) {
  return <div className="ledger-details">
    <section className="ledger-contract" aria-labelledby="ledger-contract-heading">
      <h3 id="ledger-contract-heading">El contrato entre juego y plataforma</h3>
      <div className="ledger-contract-grid">{project.contract.map(item => <article key={item.label}>
        <code>{item.label}</code><h4>{item.title}</h4><p>{item.text}</p>
      </article>)}</div>
    </section>
    <section className="ledger-decisions" aria-labelledby="ledger-decisions-heading">
      <h3 id="ledger-decisions-heading">Cinco juegos, decisiones diferentes</h3>
      <p className="ledger-decisions-intro">Cada intervención responde al sistema de puntaje y al estado de integración del juego.</p>
      {project.engineeringCases.map((item, index) => <details className="ledger-decision" key={item.game} open={index === 1}>
        <summary><span className="ledger-decision-index">0{index + 1}</span><span><strong>{item.game}</strong><span>{item.status}</span></span><ChevronDown size={18} aria-hidden="true" /></summary>
        <div className="ledger-decision-content"><h4>{item.title}</h4><p>{item.problem}</p><p>{item.solution}</p><div className="ledger-evidence"><span>VALIDACIÓN Y RESULTADO</span><p>{item.evidence}</p></div></div>
      </details>)}
    </section>
  </div>;
}
