import { styles } from '../../../config'
import { fadeIn } from 'cssinjs-animations'

const {
    spaces,
    breakpoints,
    colors,
    typography,
} = styles

export default {
    contactForm: {
        paddingTop: spaces[3],
        paddingBottom: spaces[3],

        [breakpoints.sm]: {
            paddingTop: spaces[3],
            paddingBottom: spaces[3],
        },

        [breakpoints.md]: {
            paddingTop: spaces[4],
            paddingBottom: spaces[4],
        },
    },
    title: {
        margin: [0, 0, spaces[2]],

        [breakpoints.sm]: {
            margin: 0,
        },
    },
    input: {
        margin: [spaces[1], 0, 0],

        '&:first-child': {
            marginTop: 0,
        },
    },
    error: {
        borderColor: colors.red,
        color: colors.red,
    },
    errorMessage: {
        ...typography.small,
        display: 'block',
        margin: [spaces[0], 0, 0],
        color: colors.red,
    },
    hp: {
        display: 'none'
    },
    success: {
        animationName: 'fadeIn',
        animationDuration: '1s',
    },
    '@keyframes fadeIn': fadeIn,
}
