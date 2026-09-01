import React from 'react';
import './Zones.css';

export interface ZoneItem {
  id: string;
  name: string;
  region: string;
  nodes: number;
  status: 'optimal' | 'degraded' | 'maintenance';
  latencyMs: number;
}

export interface ZonesProps {
  /** Section title */
  title?: string;
  /** List of zone regions */
  zones?: ZoneItem[];
  /** Click handler for a zone */
  onSelectZone?: (zoneId: string) => void;
}

/**
 * Zones Component - Preserved Layer Name: "Zones"
 */
export const Zones: React.FC<ZonesProps> = ({
  title = 'Infrastructure Zones',
  zones = [
    { id: 'us-east-1', name: 'US East (N. Virginia)', region: 'us-east', nodes: 64, status: 'optimal', latencyMs: 14 },
    { id: 'eu-west-1', name: 'EU West (Ireland)', region: 'eu-west', nodes: 48, status: 'optimal', latencyMs: 28 },
    { id: 'ap-south-1', name: 'AP South (Mumbai)', region: 'ap-south', nodes: 32, status: 'degraded', latencyMs: 84 },
  ],
  onSelectZone,
}) => {
  return (
    <div className="uedp-zones" data-layer-name="Zones">
      {title && <div className="uedp-zones__title">{title}</div>}
      <div className="uedp-zones__grid">
        {zones.map((zone) => (
          <div
            key={zone.id}
            className={`uedp-zones__card uedp-zones__card--${zone.status}`}
            onClick={() => onSelectZone?.(zone.id)}
          >
            <div className="uedp-zones__card-header">
              <span className="uedp-zones__name">{zone.name}</span>
              <span className={`uedp-zones__tag uedp-zones__tag--${zone.status}`}>
                {zone.status}
              </span>
            </div>
            <div className="uedp-zones__metrics">
              <div className="uedp-zones__metric">
                <span className="uedp-zones__label">Active Nodes</span>
                <span className="uedp-zones__value">{zone.nodes}</span>
              </div>
              <div className="uedp-zones__metric">
                <span className="uedp-zones__label">Latency</span>
                <span className="uedp-zones__value">{zone.latencyMs} ms</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
