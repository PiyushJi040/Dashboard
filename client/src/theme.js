export const tokensDark = {
  grey: {
    0: "#ffffff",
    10: "#f8fafc",
    50: "#f1f5f9",
    100: "#e2e8f0",
    200: "#cbd5e1",
    300: "#94a3b8",
    400: "#64748b",
    500: "#475569",
    600: "#334155",
    700: "#1e293b",
    800: "#0f172a",
    900: "#020617",
    1000: "#000000",
  },
  primary: {
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
  },
  secondary: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
  },
  accent: {
    cyan: "#06b6d4",
    teal: "#14b8a6",
    emerald: "#10b981",
    amber: "#f59e0b",
    orange: "#f97316",
    rose: "#f43f5e",
  },
};

// function that reverses the color palette
function reverseTokens(tokensDark) {
  const reversedTokens = {};
  Object.entries(tokensDark).forEach(([key, val]) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const length = keys.length;
    const reversedObj = {};
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }
    reversedTokens[key] = reversedObj;
  });
  return reversedTokens;
}
export const tokensLight = reverseTokens(tokensDark);

export const themeSettings = (mode) => {
  return {
    palette: {
      mode: "dark",
      primary: {
        main: tokensDark.primary[500],
        light: tokensDark.primary[400],
        dark: tokensDark.primary[700],
      },
      secondary: {
        main: tokensDark.secondary[500],
        light: tokensDark.secondary[400],
        dark: tokensDark.secondary[700],
      },
      success: {
        main: tokensDark.accent.emerald,
        light: "#34d399",
        dark: "#059669",
      },
      warning: {
        main: tokensDark.accent.amber,
        light: "#fbbf24",
        dark: "#d97706",
      },
      error: {
        main: tokensDark.accent.rose,
        light: "#fb7185",
        dark: "#e11d48",
      },
      info: {
        main: tokensDark.accent.cyan,
        light: "#22d3ee",
        dark: "#0891b2",
      },
      background: {
        default: "#0a0e1a",
        paper: "#0f1419",
        alt: "#151b26",
      },
      text: {
        primary: tokensDark.grey[50],
        secondary: tokensDark.grey[300],
      },
      divider: "rgba(148, 163, 184, 0.12)",
    },
    typography: {
      fontFamily: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"].join(","),
      fontSize: 14,
      h1: { fontSize: 48, fontWeight: 800, letterSpacing: "-0.02em" },
      h2: { fontSize: 36, fontWeight: 700, letterSpacing: "-0.01em" },
      h3: { fontSize: 30, fontWeight: 700, letterSpacing: "-0.01em" },
      h4: { fontSize: 24, fontWeight: 700, letterSpacing: "-0.01em" },
      h5: { fontSize: 20, fontWeight: 600 },
      h6: { fontSize: 18, fontWeight: 600 },
      body1: { fontSize: 16, lineHeight: 1.6 },
      body2: { fontSize: 14, lineHeight: 1.5 },
    },
    shape: {
      borderRadius: 16,
    },
    shadows: [
      "none",
      "0 1px 3px 0 rgba(0, 0, 0, 0.4)",
      "0 4px 6px -1px rgba(0, 0, 0, 0.4)",
      "0 10px 15px -3px rgba(0, 0, 0, 0.4)",
      "0 20px 25px -5px rgba(0, 0, 0, 0.4)",
      "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
      ...Array(19).fill("0 25px 50px -12px rgba(0, 0, 0, 0.5)"),
    ],
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollbarWidth: "thin",
            scrollbarColor: "#334155 #0f172a",
            "&::-webkit-scrollbar": { width: "8px" },
            "&::-webkit-scrollbar-track": { background: "#0f172a" },
            "&::-webkit-scrollbar-thumb": {
              background: "#334155",
              borderRadius: "4px",
              "&:hover": { background: "#475569" },
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: "linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(217, 70, 239, 0.05) 100%)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(148, 163, 184, 0.1)",
            borderRadius: 20,
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            "&:hover": {
              transform: "translateY(-8px)",
              boxShadow: "0 20px 40px -12px rgba(99, 102, 241, 0.3)",
              border: "1px solid rgba(99, 102, 241, 0.3)",
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            textTransform: "none",
            fontWeight: 600,
            padding: "10px 24px",
            fontSize: 15,
            boxShadow: "none",
            transition: "all 0.2s ease",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 8px 16px -4px rgba(99, 102, 241, 0.4)",
            },
          },
          contained: {
            background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
            "&:hover": {
              background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 10,
            fontWeight: 600,
            fontSize: 13,
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              borderRadius: 12,
              backgroundColor: "rgba(15, 20, 25, 0.6)",
              transition: "all 0.2s ease",
              "&:hover": {
                backgroundColor: "rgba(15, 20, 25, 0.8)",
              },
              "&.Mui-focused": {
                backgroundColor: "rgba(15, 20, 25, 0.9)",
                boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
              },
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
            backgroundColor: "#0f1419",
          },
        },
      },
    },
  };
};