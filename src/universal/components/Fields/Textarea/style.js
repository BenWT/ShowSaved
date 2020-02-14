import { styles } from '../../../../config'

const {
    fontstacks,
    colors,
    spaces,
    breakpoints,
} = styles

export default {
    textarea: {
        width: '100%',
        padding: [spaces[1], 0],
        border: 'none',
        borderBottom: `2px solid ${colors.keyline}`,
        fontSize: 16,
        fontWeight: 200,
        overflow: 'auto',
        outline: 'none',
        boxShadow: 'none',
        resize: 'none',

        [breakpoints.md]: {
            fontSize: 'calc(.00242*100vw + 15.09091px)',
        },

        [breakpoints.xlg]: {
            fontSize: 18,
        },
    },
}
