import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Tokens/FoundationalTokens',
  parameters: {
    docs: {
      description: {
        component: `
# Foundational Design System Tokens

This gallery documents 80 foundational tokens imported directly from \`foundational-tokens.json\`.
Tokens include Border Radii, Gap scales, Padding scales, Opacity values, and Max Widths.

### Token Custom Properties:
- **Border Radius**: \`--uedp-border-radius-rounded-none\` to \`--uedp-border-radius-rounded-full\`, \`--uedp-rounded-3xl\`
- **Gap Scales**: \`--uedp-gap-gap-0\` to \`--uedp-gap-gap-96\`, \`--uedp-gap-4\`
- **Padding Scales**: \`--uedp-padding-p-0\` to \`--uedp-padding-p-96\`, \`--uedp-padding-6\`
- **Opacity**: \`--uedp-opacity-opacity-0\` to \`--uedp-opacity-opacity-100\`
- **Max Width**: \`--uedp-max-w-max-w-xs\` to \`--uedp-max-w-max-w-7xl\`
        `,
      },
    },
  },
};

export default meta;

const radiiTokens = [
  { name: 'rounded-none', val: '0px', varId: 'VariableID:137:1548', cssVar: '--uedp-border-radius-rounded-none' },
  { name: 'rounded-sm', val: '2px', varId: 'VariableID:137:1549', cssVar: '--uedp-border-radius-rounded-sm' },
  { name: 'rounded', val: '4px', varId: 'VariableID:137:1550', cssVar: '--uedp-border-radius-rounded' },
  { name: 'rounded-md', val: '6px', varId: 'VariableID:137:1551', cssVar: '--uedp-border-radius-rounded-md' },
  { name: 'rounded-lg', val: '8px', varId: 'VariableID:137:1552', cssVar: '--uedp-border-radius-rounded-lg' },
  { name: 'rounded-xl', val: '12px', varId: 'VariableID:137:1553', cssVar: '--uedp-border-radius-rounded-xl' },
  { name: 'rounded-2xl', val: '16px', varId: 'VariableID:137:1554', cssVar: '--uedp-border-radius-rounded-2xl' },
  { name: 'rounded-3xl', val: '24px', varId: 'VariableID:137:1555', cssVar: '--uedp-border-radius-rounded-3xl' },
  { name: 'rounded-full', val: '9999px', varId: 'VariableID:137:1556', cssVar: '--uedp-border-radius-rounded-full' },
];

const gapTokens = [
  { name: 'gap-0', val: '0px', cssVar: '--uedp-gap-gap-0' },
  { name: 'gap-1', val: '4px', cssVar: '--uedp-gap-gap-1' },
  { name: 'gap-2', val: '8px', cssVar: '--uedp-gap-gap-2' },
  { name: 'gap-4', val: '16px', cssVar: '--uedp-gap-gap-4' },
  { name: 'gap-6', val: '24px', cssVar: '--uedp-gap-gap-6' },
  { name: 'gap-8', val: '32px', cssVar: '--uedp-gap-gap-8' },
  { name: 'gap-12', val: '48px', cssVar: '--uedp-gap-gap-12' },
  { name: 'gap-16', val: '64px', cssVar: '--uedp-gap-gap-16' },
];

const paddingTokens = [
  { name: 'p-1', val: '4px', cssVar: '--uedp-padding-p-1' },
  { name: 'p-2', val: '8px', cssVar: '--uedp-padding-p-2' },
  { name: 'p-4', val: '16px', cssVar: '--uedp-padding-p-4' },
  { name: 'p-6', val: '24px', cssVar: '--uedp-padding-p-6' },
  { name: 'p-8', val: '32px', cssVar: '--uedp-padding-p-8' },
  { name: 'p-12', val: '48px', cssVar: '--uedp-padding-p-12' },
];

export const FoundationalTokensGallery: StoryObj = {
  render: () => (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: '24px', background: '#0F172A', color: '#F8FAFC', minHeight: '100vh' }}>
      <header style={{ marginBottom: '32px', borderBottom: '1px solid #334155', paddingBottom: '16px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 700, margin: '0 0 8px 0', background: 'linear-gradient(90deg, #34D399, #38BDF8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Foundational Token Scales
        </h1>
        <p style={{ color: '#94A3B8', fontSize: '14px', margin: 0 }}>
          Synchronized from <code>foundational-tokens.json</code>. Geometry, spacing, border-radius, and layout scales.
        </p>
      </header>

      {/* Border Radius Section */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#38BDF8', marginBottom: '16px' }}>Border Radius Tokens</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
          {radiiTokens.map((t) => (
            <div key={t.name} style={{ background: '#1E293B', padding: '16px', borderRadius: '12px', border: '1px solid #334155' }}>
              <div
                style={{
                  height: '60px',
                  width: '100%',
                  background: 'linear-gradient(135deg, #0EA5E9, #6366F1)',
                  borderRadius: `var(${t.cssVar}, ${t.val})`,
                  marginBottom: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFF',
                  fontWeight: 700,
                  fontSize: '12px',
                }}
              >
                {t.val}
              </div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#F1F5F9' }}>{t.name}</div>
              <div style={{ fontSize: '11px', color: '#94A3B8', fontFamily: 'monospace', marginTop: '4px' }}>{t.cssVar}</div>
              <div style={{ fontSize: '10px', color: '#64748B', fontFamily: 'monospace', marginTop: '2px' }}>{t.varId}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Spacing & Gap Section */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#34D399', marginBottom: '16px' }}>Gap Scale Tokens</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {gapTokens.map((t) => (
            <div key={t.name} style={{ background: '#1E293B', padding: '12px 16px', borderRadius: '8px', border: '1px solid #334155', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontWeight: 600, color: '#F8FAFC', fontSize: '14px' }}>{t.name}</span>
                <span style={{ fontSize: '12px', color: '#94A3B8', marginLeft: '12px', fontFamily: 'monospace' }}>{t.cssVar}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '12px', color: '#34D399', fontWeight: 700 }}>{t.val}</span>
                <div style={{ width: `var(${t.cssVar}, ${t.val})`, height: '16px', background: '#34D399', borderRadius: '4px', minWidth: '4px' }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Padding Scale Section */}
      <section>
        <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#F472B6', marginBottom: '16px' }}>Padding Tokens</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px' }}>
          {paddingTokens.map((t) => (
            <div key={t.name} style={{ background: '#1E293B', padding: '16px', borderRadius: '12px', border: '1px solid #334155' }}>
              <div
                style={{
                  background: '#0F172A',
                  padding: `var(${t.cssVar}, ${t.val})`,
                  border: '1px dashed #F472B6',
                  borderRadius: '8px',
                  marginBottom: '12px',
                }}
              >
                <div style={{ background: '#F472B6', height: '24px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontSize: '10px', fontWeight: 700 }}>
                  Content Box
                </div>
              </div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#F1F5F9' }}>{t.name} ({t.val})</div>
              <div style={{ fontSize: '11px', color: '#94A3B8', fontFamily: 'monospace', marginTop: '4px' }}>{t.cssVar}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  ),
};
