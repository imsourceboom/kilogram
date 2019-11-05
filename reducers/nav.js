export const initialState = {
  userArticle: false,
  phoneArticle: false,
  kiloArticle: true,
  settingsArticle: false,
  // roomList: [],
};

export const USER_ARTICLE = 'USER_ARTICLE';
export const PHONE_ARTICLE = 'PHONE_ARTICLE';
export const KILO_ARTICLE = 'KILO_ARTICLE';
export const SETTINGS_ARTICLE = 'SETTINGS_ARTICLE';
// export const ROOM_LIST = 'ROOM_LIST';

export const userArticleAction = {
  type: USER_ARTICLE,
};
export const phoneArticleAction = {
  type: PHONE_ARTICLE,
};
export const kiloArticleAction = {
  type: KILO_ARTICLE,
};
export const settingsArticleAction = {
  type: SETTINGS_ARTICLE,
};
// export const roomListAction = {
//   type: ROOM_LIST,
// };

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_ARTICLE:
      return {
        ...state,
        userArticle: true,
        phoneArticle: false,
        kiloArticle: false,
        settingsArticle: false,
      };

    case PHONE_ARTICLE:
      return {
        ...state,
        userArticle: false,
        phoneArticle: true,
        kiloArticle: false,
        settingsArticle: false,
      };

    case KILO_ARTICLE:
      return {
        ...state,
        userArticle: false,
        phoneArticle: false,
        kiloArticle: true,
        settingsArticle: false,
      };

    case SETTINGS_ARTICLE:
      return {
        ...state,
        userArticle: false,
        phoneArticle: false,
        kiloArticle: false,
        settingsArticle: true,
      };

      // case ROOM_LIST:
      //   return {
      //     ...state,
      //   };

    default:
      return {
        ...state,
      };
  }
};
