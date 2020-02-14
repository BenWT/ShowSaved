import { styles } from '../../../../config'

const {
    spaces,
    breakpoints,
    typography,
    colors,
} = styles

export default {
    anchor: {
        display: 'inline-block',
        height: 48,
        padding: [0, 30],
        position: 'relative',
        fontSize: 14,
        lineHeight: '44px',
        fontWeight: 600,
        textDecoration: 'none',
        textAlign: 'center',
        color: colors.white,
        backgroundColor: colors.tertiary,
        border: `2px solid ${colors.tertiary}`,
        borderRadius: 0,
        cursor: 'pointer',
        outline: 'none',
        '-webkit-appearance': 'none',

        '&:hover, &:focus, &:active': {
            color: colors.white,
            backgroundColor: colors.tertiary,
        },
    }
}
