import css from 'styled-jsx/css'
import { colors, fonts, breakpoints } from '../../styles/theme'
import { addOpacityToColor } from '../../styles/utils'

const backgroundColor = addOpacityToColor(colors.primary, 0.2);

// exportar estilos que son globales
export const globalStyles = css.global`
    html,
    body {
        background-image: 
        radial-gradient(${backgroundColor} 1px, #fdfdfd 1px), 
        radial-gradient(${backgroundColor} 1px, #fdfdfd 1px);
        background-position: 0 0, 25px 25px;
        background-size: 50px 50px;
        padding: 0;
        margin: 0;
        font-family: ${fonts.base};
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }
`
// exportar estilos que tiene en scope
export default css`
    div {
        display: grid;
        place-items: center;
        height: 100vh;
    }

    main {
        background: #fff;
        box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        border-radius: 10px;
        width: 100vw; 
        height: 100vh;
    }

    @media screen and (min-width: ${breakpoints.mobile}) {
        main {
            height: 90vh;
            width: ${breakpoints.mobile};
        }
    }
`