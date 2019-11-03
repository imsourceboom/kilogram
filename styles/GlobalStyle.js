import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html {
        scroll-behavior: smooth;
        /* Microsoft scrollbar none */
        -ms-overflow-style: none;

        &,
        & * {
            /* window Firefox scrollbar none */
            scrollbar-width: none;
        }
    }

    ::-webkit-scrollbar {
        /* Chrome, Safari scrollbar none */
        display: none;
    }

    body {
        overscroll-behavior-y: none;
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
        background-color: rgba(26, 34, 44, 1);
        color: #e6e9ef;

        * {
            margin: 0;
            padding: 0;
            outline: none;
            box-sizing: border-box;
        }

        a {
            text-decoration: none;
            color: inherit;
            color: #e6e9ef;
        }

        ul,
        ol {
            list-style-type: none;

            li:last-child {
                margin-bottom: 0;
            }
        }

        img {
            display: block;
        }

        label {
            color: rgba(0, 0, 0, 0.54);
        }

        input,
        textarea {
            &::placeholder {
                /* Chrome, Firefox, Opera, Safari 10.1+ */
                color: rgba(112, 112, 112, 0.4);
                opacity: 1;
                font-size: 0.9rem;
                /* Firefox */
            }

            &:-ms-input-placeholder {
                /* Internet Explorer 10-11 */
                color: rgba(112, 112, 112, 0.4);
                font-size: 0.9rem;
            }

            &::-ms-input-placeholder {
                /* Microsoft Edge */
                color: rgba(112, 112, 112, 0.4);
                font-size: 0.9rem;
            }
        }

        input[type='text']::-ms-clear {
            display: none;
        }
    }

    h1 {
        font-size: 32px;
    }

    h2 {
        font-size: 24px;
    }

    h3 {
        font-size: 19px;
    }

    h5 {
        font-size: 13px;
    }

    h6 {
        font-size: 11px;
    }
`;
