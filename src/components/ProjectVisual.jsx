import { BrainIcon, DollarIcon, FileSearchIcon, NetworkIcon, ShieldCheckIcon } from './Icons';

export default function ProjectVisual({ type }) {
  if (type === 'risk') {
    return (
      <div className="project-visual risk-visual">
        <div className="mini-window">
          <div className="window-top"><span/><span/><span/></div>
          <div className="risk-head"><div><small>Review priority</small><strong>91</strong></div><ShieldCheckIcon /></div>
          <div className="risk-bars"><i style={{width:'88%'}}/><i style={{width:'66%'}}/><i style={{width:'53%'}}/></div>
          <div className="signal-row"><span>18× normal amount</span><span>new recipient</span><span>international</span></div>
        </div>
        <div className="visual-chip chip-a"><DollarIcon size={16}/> behavioral risk</div>
        <div className="visual-chip chip-b"><BrainIcon size={16}/> analyst copilot</div>
      </div>
    );
  }

  if (type === 'graph') {
    return (
      <div className="project-visual graph-visual">
        <div className="graph-question"><FileSearchIcon size={17}/> “How did work restrictions change?”</div>
        <div className="graph-canvas">
          <div className="node n1">Claim</div><div className="edge e1"/><div className="node n2">Event</div>
          <div className="edge e2"/><div className="node n3">Event</div><div className="edge e3"/><div className="node n4">Note</div>
          <div className="node n5">Qwen</div><div className="edge e4"/><div className="node n6">BGE</div>
        </div>
        <div className="visual-chip chip-a"><NetworkIcon size={16}/> graph-first retrieval</div>
      </div>
    );
  }

  if (type === 'analytics') {
    return (
      <div className="project-visual analytics-visual">
        <div className="analytics-window">
          <div className="window-top"><span/><span/><span/></div>
          <div className="analytics-header">
            <div><small>On-time performance</small><strong>JetBlue 2025</strong></div>
            <span className="analytics-pill">Tableau</span>
          </div>
          <div className="analytics-kpis">
            <div><span>On-time</span><strong>72.8%</strong></div>
            <div><span>Avg delay</span><strong>18.4m</strong></div>
            <div><span>Markets</span><strong>148</strong></div>
          </div>
          <div className="analytics-bars">
            <div><span>JetBlue</span><i style={{width:'73%'}}/></div>
            <div><span>Delta</span><i style={{width:'84%'}}/></div>
            <div><span>American</span><i style={{width:'78%'}}/></div>
          </div>
          <div className="analytics-footer"><span>Monthly trends</span><span>Route performance</span><span>Delay causes</span></div>
        </div>
        <div className="visual-chip chip-a">competitor benchmarking</div>
        <div className="visual-chip chip-b">operational analytics</div>
      </div>
    );
  }

  return null;
}
