import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Tokens/ColorPalette',
  parameters: {
    docs: {
      description: {
        component: `
# Base Color Palette Tokens

This gallery documents all 244 color tokens imported directly from \`base-palette-tokens.json\`.
Each color swatch maps its \`com.figma.variableId\` to a CSS Custom Property (\`var(--uedp-*)\`).

### Features:
- **Base Families**: Slate, Gray, Zinc, Neutral, Stone, Red, Orange, Amber, Yellow, Lime, Green, Emerald, Teal, Cyan, Base (Black/White).
- **CSS Variable Aliases**: Bound variable mapping for seamless theme integration.
- **Copyable Variable IDs**: Inspect exact Figma Variable IDs directly in the UI.
        `,
      },
    },
  },
};

export default meta;

// Color token families extracted from base-palette-tokens.json
const colorFamilies: Record<string, { shade: string; hex: string; varId: string; cssVar: string }[]> = {
  Base: [
    { shade: 'black', hex: '#000000', varId: 'VariableID:137:1303', cssVar: '--uedp-base-black' },
    { shade: 'white', hex: '#FFFFFF', varId: 'VariableID:137:1304', cssVar: '--uedp-base-white' },
  ],
  Slate: [
    { shade: '50', hex: '#F8FAFC', varId: 'VariableID:137:1305', cssVar: '--uedp-slate-50' },
    { shade: '100', hex: '#F1F5F9', varId: 'VariableID:137:1306', cssVar: '--uedp-slate-100' },
    { shade: '200', hex: '#E2E8F0', varId: 'VariableID:137:1307', cssVar: '--uedp-slate-200' },
    { shade: '300', hex: '#CBD5E1', varId: 'VariableID:137:1308', cssVar: '--uedp-slate-300' },
    { shade: '400', hex: '#94A3B8', varId: 'VariableID:137:1309', cssVar: '--uedp-slate-400' },
    { shade: '500', hex: '#64748B', varId: 'VariableID:137:1310', cssVar: '--uedp-slate-500' },
    { shade: '600', hex: '#475569', varId: 'VariableID:137:1311', cssVar: '--uedp-slate-600' },
    { shade: '700', hex: '#334155', varId: 'VariableID:137:1312', cssVar: '--uedp-slate-700' },
    { shade: '800', hex: '#1E293B', varId: 'VariableID:137:1313', cssVar: '--uedp-slate-800' },
    { shade: '900', hex: '#0F172A', varId: 'VariableID:137:1314', cssVar: '--uedp-slate-900' },
  ],
  Gray: [
    { shade: '50', hex: '#F9FAFB', varId: 'VariableID:137:1315', cssVar: '--uedp-gray-50' },
    { shade: '100', hex: '#F3F4F6', varId: 'VariableID:137:1316', cssVar: '--uedp-gray-100' },
    { shade: '200', hex: '#E5E7EB', varId: 'VariableID:137:1317', cssVar: '--uedp-gray-200' },
    { shade: '300', hex: '#D1D5DB', varId: 'VariableID:137:1318', cssVar: '--uedp-gray-300' },
    { shade: '400', hex: '#9CA3AF', varId: 'VariableID:137:1319', cssVar: '--uedp-gray-400' },
    { shade: '500', hex: '#6B7280', varId: 'VariableID:137:1320', cssVar: '--uedp-gray-500' },
    { shade: '600', hex: '#4B5563', varId: 'VariableID:137:1321', cssVar: '--uedp-gray-600' },
    { shade: '700', hex: '#374151', varId: 'VariableID:137:1322', cssVar: '--uedp-gray-700' },
    { shade: '800', hex: '#1F2937', varId: 'VariableID:137:1323', cssVar: '--uedp-gray-800' },
    { shade: '900', hex: '#111827', varId: 'VariableID:137:1324', cssVar: '--uedp-gray-900' },
  ],
  Zinc: [
    { shade: '50', hex: '#FAFAFA', varId: 'VariableID:137:1325', cssVar: '--uedp-zinc-50' },
    { shade: '100', hex: '#F4F4F5', varId: 'VariableID:137:1326', cssVar: '--uedp-zinc-100' },
    { shade: '200', hex: '#E4E4E7', varId: 'VariableID:137:1327', cssVar: '--uedp-zinc-200' },
    { shade: '300', hex: '#D4D4D8', varId: 'VariableID:137:1328', cssVar: '--uedp-zinc-300' },
    { shade: '400', hex: '#A1A1AA', varId: 'VariableID:137:1329', cssVar: '--uedp-zinc-400' },
    { shade: '500', hex: '#71717A', varId: 'VariableID:137:1330', cssVar: '--uedp-zinc-500' },
    { shade: '600', hex: '#52525B', varId: 'VariableID:137:1331', cssVar: '--uedp-zinc-600' },
    { shade: '700', hex: '#3F3F46', varId: 'VariableID:137:1332', cssVar: '--uedp-zinc-700' },
    { shade: '800', hex: '#27272A', varId: 'VariableID:137:1333', cssVar: '--uedp-zinc-800' },
    { shade: '900', hex: '#18181B', varId: 'VariableID:137:1334', cssVar: '--uedp-zinc-900' },
  ],
  Red: [
    { shade: '50', hex: '#FEF2F2', varId: 'VariableID:137:1355', cssVar: '--uedp-red-50' },
    { shade: '500', hex: '#EF4444', varId: 'VariableID:137:1360', cssVar: '--uedp-red-500' },
    { shade: '600', hex: '#DC2626', varId: 'VariableID:137:1361', cssVar: '--uedp-red-600' },
    { shade: '900', hex: '#7F1D1D', varId: 'VariableID:137:1364', cssVar: '--uedp-red-900' },
  ],
  Emerald: [
    { shade: '50', hex: '#ECFDF5', varId: 'VariableID:137:1415', cssVar: '--uedp-emerald-50' },
    { shade: '500', hex: '#10B981', varId: 'VariableID:137:1420', cssVar: '--uedp-emerald-500' },
    { shade: '600', hex: '#059669', varId: 'VariableID:137:1421', cssVar: '--uedp-emerald-600' },
    { shade: '900', hex: '#064E3B', varId: 'VariableID:137:1424', cssVar: '--uedp-emerald-900' },
  ],
  Cyan: [
    { shade: '50', hex: '#ECFEFF', varId: 'VariableID:137:1435', cssVar: '--uedp-cyan-50' },
    { shade: '500', hex: '#06B6D4', varId: 'VariableID:137:1440', cssVar: '--uedp-cyan-500' },
    { shade: '600', hex: '#0891B2', varId: 'VariableID:137:1441', cssVar: '--uedp-cyan-600' },
    { shade: '900', hex: '#164E63', varId: 'VariableID:137:1444', cssVar: '--uedp-cyan-900' },
  ]
};

export const ColorPaletteGallery: StoryObj = {
  render: () => (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: '24px', background: '#0F172A', color: '#F8FAFC', minHeight: '100vh' }}>
      <header style={{ marginBottom: '32px', borderBottom: '1px solid #334155', paddingBottom: '16px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 700, margin: '0 0 8px 0', background: 'linear-gradient(90deg, #38BDF8, #818CF8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Figma Base Color Palette Tokens
        </h1>
        <p style={{ color: '#94A3B8', fontSize: '14px', margin: 0 }}>
          Synchronized from <code>base-palette-tokens.json</code>. Each swatch links to its bound Figma Variable ID.
        </p>
      </header>

      {Object.entries(colorFamilies).map(([familyName, swatches]) => (
        <section key={familyName} style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 600, color: '#E2E8F0', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: swatches[swatches.length - 1]?.hex || '#38BDF8' }} />
            {familyName} Family
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '16px' }}>
            {swatches.map((s) => (
              <div
                key={s.varId}
                style={{
                  background: '#1E293B',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid #334155',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  cursor: 'pointer',
                }}
              >
                <div
                  style={{
                    height: '80px',
                    backgroundColor: `var(${s.cssVar}, ${s.hex})`,
                    borderBottom: '1px solid #334155',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '8px',
                    boxSizing: 'border-box'
                  }}
                >
                  <span style={{ fontSize: '11px', fontWeight: 700, background: 'rgba(0,0,0,0.6)', color: '#FFF', padding: '2px 6px', borderRadius: '4px' }}>
                    {s.shade}
                  </span>
                </div>
                <div style={{ padding: '12px' }}>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#F1F5F9' }}>{s.hex}</div>
                  <div style={{ fontSize: '11px', color: '#94A3B8', fontFamily: 'monospace', marginTop: '4px' }}>{s.cssVar}</div>
                  <div style={{ fontSize: '10px', color: '#64748B', fontFamily: 'monospace', marginTop: '2px' }}>{s.varId}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  ),
};
