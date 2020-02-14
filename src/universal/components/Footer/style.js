import { styles } from '../../../config'

const {
    spaces,
    colors,
    breakpoints
} = styles

export default {
    footer: {
        padding: [spaces[2], 0, spaces[1]],

        [breakpoints.md]: {
            padding: [spaces[3], 0, spaces[1]],
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

        '&:first-child': {
            marginLeft: 0,
        },
    },
    navLink: {
        fontSize: 14,
        fontWeight: 400,
        lineHeight: '30px',

        '&:hover, &:focus, &:active': {
            color: colors.secondary,
        },
    },
    footerLeft: {
        display: 'flex',
        alignItems: 'center',
    },
    iconWrapper: {
        float: 'right',
    },
    icon: {
        width: 24,
        fill: colors.darkGrey,
    },
    logo: {
        display: 'none',
        float: 'left',
        width: 80,
        height: 'auto',
        marginRight: spaces[2],
        
        [breakpoints.sm]: {
            display: 'block',
            width: 100,
        },
    },
}
