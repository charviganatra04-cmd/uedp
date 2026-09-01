import React from 'react';
import './Map.css';

export interface MapMarker {
  id: string;
  label: string;
  xPercent: number;
  yPercent: number;
  status: 'active' | 'warning' | 'offline';
}

export interface MapProps {
  /** Map header title */
  title?: string;
  /** Active markers overlay */
  markers?: MapMarker[];
  /** Interactive zoom level */
  zoom?: number;
  /** Click marker event handler */
  onMarkerClick?: (markerId: string) => void;
}

/**
 * Map Component - Preserved Layer Name: "Map"
 */
export const Map: React.FC<MapProps> = ({
  title = 'Global Network Distribution Map',
  markers = [
    { id: 'us-west', label: 'US-West (Oregon)', xPercent: 22, yPercent: 34, status: 'active' },
    { id: 'us-east', label: 'US-East (Virginia)', xPercent: 32, yPercent: 38, status: 'active' },
    { id: 'eu-central', label: 'EU-Central (Frankfurt)', xPercent: 52, yPercent: 30, status: 'active' },
    { id: 'ap-east', label: 'AP-East (Tokyo)', xPercent: 82, yPercent: 40, status: 'warning' },
    { id: 'sa-east', label: 'SA-East (Sao Paulo)', xPercent: 38, yPercent: 72, status: 'offline' },
  ],
  zoom = 1,
  onMarkerClick,
}) => {
  return (
    <div className="uedp-map" data-layer-name="Map">
      <div className="uedp-map__header">
        <span className="uedp-map__title">{title}</span>
        <div className="uedp-map__controls">
          <span className="uedp-map__badge">Zoom: {zoom}x</span>
          <span className="uedp-map__badge uedp-map__badge--live">LIVE GRID</span>
        </div>
      </div>

      <div className="uedp-map__viewport">
        {/* World Grid Lines Overlay */}
        <svg className="uedp-map__svg-grid" width="100%" height="100%">
          <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(51, 65, 85, 0.4)" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#gridPattern)" />
        </svg>

        {/* Map Markers */}
        {markers.map((m) => (
          <div
            key={m.id}
            className={`uedp-map__marker uedp-map__marker--${m.status}`}
            style={{ left: `${m.xPercent}%`, top: `${m.yPercent}%` }}
            onClick={() => onMarkerClick?.(m.id)}
            title={m.label}
          >
            <span className="uedp-map__pulse" />
            <span className="uedp-map__tooltip">{m.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
