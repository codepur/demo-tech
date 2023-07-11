export function setCurrentTheme(themeType) {
    return {
        type: 'SET_CURRENT_THEME',
        payload: themeType,
    };
  }