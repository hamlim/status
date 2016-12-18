import cxs from 'cxs';

export const colorA = '#687ef9';
export const colorB = '#5ef97b';
export const colorC = '#e5c93d';
export const colorD = '#e84553';
export const colorE = '#5e11db';
export const colorWhite = '#fff';
export const colorBlack = '#111';

export const rootVars = cxs('html', {
  '--a': colorA,
  '--b': colorB,
  '--c': colorC,
  '--d': colorD,
  '--e': colorE,
  '--br': '5px',
  '--black': '#111',
  '--white': '#000',
  '--gray': '#f0ecec'
});

export const allStyles = cxs('*', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0
});

export const rootStyles = cxs('html', {
  color: 'var(--black)',
  backgroundColor: 'var(--white)',
  fontFamily: "'Muli', sans-serif",
  fontSize: '20px'
});

export const appStyles = cxs({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh'
});

export const todoAppStyles = cxs({
  width: '100vw'
});

export const titleClass = cxs({
  width: '100vw',
  height: '5rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'var(--c)'
});

export const titleLeadClass = cxs({
  fontSize: '2em'
});

export const todoWrapperClasses = cxs({
  display: 'flex',
  justifyContent: 'space-between',
  listStyleType: 'none',
  backgroundColor: 'var(--white)',
  padding: '.5em',
  margin: '1em 0',
  borderRadius: 'var(--br)'
});

export const todoActionsClass = cxs({
  width: '7em',
  display: 'flex',
  justifyContent: 'space-between'
});
