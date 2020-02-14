import { styles } from '../../../../config'

const {
    colors,
    spaces,
    breakpoints,
} = styles

export default {
    input: {
        width: '100%',
        padding: [spaces[1], 0],
        borderBottom: `2px solid ${colors.keyline}`,
        fontSize: 16,
        fontWeight: 200,

        [breakpoints.md]: {
            fontSize: 'calc(.00242*100vw + 15.09091px)',
        },

        [breakpoints.xlg]: {
            fontSize: 18,
        },
    },
}
