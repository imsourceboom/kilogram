export const initialState = {
  userArticle: false,
  phoneArticle: false,
  briefcaseArticle: true,
  settingsArticle: false,
};

export const USER_ARTICLE = 'USER_ARTICLE';
export const PHONE_ARTICLE = 'PHONE_ARTICLE';
export const BRIEFCASE_ARTICLE = 'BRIEFCASE_ARTICLE';
export const SETTINGS_ARTICLE = 'SETTINGS_ARTICLE';

export const userAction = {
  type: USER_ARTICLE,
};
export const phoneAction = {
  type: PHONE_ARTICLE,
};
export const briefcaseAction = {
  type: BRIEFCASE_ARTICLE,
};
export const settingsAction = {
  type: SETTINGS_ARTICLE,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_ARTICLE:
      return {
        ...state,
        userArticle: true,
        phoneArticle: false,
        briefcaseArticle: false,
        settingsArticle: false,
      };

    case PHONE_ARTICLE:
      return {
        ...state,
        userArticle: false,
        phoneArticle: true,
        briefcaseArticle: false,
        settingsArticle: false,
      };

    case BRIEFCASE_ARTICLE:
      return {
        ...state,
        userArticle: false,
        phoneArticle: false,
        briefcaseArticle: true,
        settingsArticle: false,
      };

    case SETTINGS_ARTICLE:
      return {
        ...state,
        userArticle: false,
        phoneArticle: false,
        briefcaseArticle: false,
        settingsArticle: true,
      };

    default:
      return {
        ...state,
      };
  }
};
