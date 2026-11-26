import { createTheme } from '@mui/material/styles';

// Single source of truth for the site's Material look.
// Colors mirror the brand tokens previously kept in global.css.
export const choTheme = createTheme({
  palette: {
    primary: {
      main: '#2e7d32',
      dark: '#1b5e20',
      light: '#e8f5e9',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f9a825',
      contrastText: '#263238',
    },
    warning: {
      main: '#f9a825',
      light: '#fff8e1',
    },
    background: {
      default: '#fafcfa',
      paper: '#ffffff',
    },
    text: {
      primary: '#263238',
      secondary: 'rgba(38, 50, 56, 0.68)',
    },
    divider: '#dce7dd',
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: '"DM Sans", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif',
    h1: {
      fontSize: 'clamp(1.625rem, 3.5vw, 2.125rem)',
      fontWeight: 700,
      lineHeight: 1.25,
    },
    h2: {
      fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
      fontWeight: 700,
      lineHeight: 1.25,
    },
    h3: {
      fontSize: '1rem',
      fontWeight: 700,
      lineHeight: 1.25,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.65,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
    caption: {
      fontSize: '0.75rem',
      lineHeight: 1.5,
    },
    overline: {
      fontSize: '0.6875rem',
      fontWeight: 700,
      letterSpacing: '0.08em',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontVariantNumeric: 'tabular-nums',
          backgroundImage: 'radial-gradient(rgba(46, 125, 50, 0.1) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          '@media print': {
            backgroundImage: 'none',
          },
        },
        'a:focus-visible, button:focus-visible': {
          outline: '2px solid #f9a825',
          outlineOffset: '2px',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textUnderlineOffset: '0.2em',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});
