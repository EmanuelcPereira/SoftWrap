import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
    --background: #202024;
    --beige: #F68A75;
    --blue: #2E5EF7;
    --blue-light: #42B7F8;
    --text-title: #363F5F;
    --text-body: #969CB3;
    --shape: #FFFFFF;
    --green: #33CC95;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    @media (max-width: 1080px) {
        font-size: 93.75%;
    }

    @media (max-width: 720px) {
        font-size: 87.5%;
    }
}

body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
    font-family: 'Mulish', sans-serif;
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
}

button {
    cursor: pointer;
}
`;
