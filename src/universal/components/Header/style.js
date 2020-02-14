import { styles } from '../../../config'

const {
    spaces,
    colors,
    breakpoints,
} = styles

export default ({
    header: {
        padding: [spaces[1], 0],

        [breakpoints.sm]: {
            padding: [spaces[2], 0],
        },
    },
    headerInner: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },  
    logo: {
        width: 48,

        [breakpoints.sm]: {
            width: 58,
        },
    },
    logoLoading: {
        display: 'block',
        width: 48,
        height: 78,
        backgroundColor: colors.white,

        [breakpoints.sm]: {
            width: 58,
            height: 78,
        },
    },
    nav: {
        padding: 0,
        margin: 0,
        overflow: 'hidden',
        listStyle: 'none',
    },
    navItem: {
        padding: 0,
        margin: [0, 0, 0, spaces[1]],
        float: 'left',
        fontSize: 16,
        lineHeight: '27px',

        [breakpoints.sm]: {
            margin: [0, 0, 0, spaces[2]],
        },

        '&:first-child': {
            marginLeft: 0,
        },
    },
    navLink: {
        color: colors.black,
        fontWeight: 400,

        '&:hover, &:focus, &:active': {
            color: colors.secondary,
        },
    },
})
