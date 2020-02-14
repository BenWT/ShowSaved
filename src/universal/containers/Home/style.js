import { styles } from '../../../config'

const {
    colors,
} = styles

export default {
    home: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
    },

    image: {
        width: '100%',
        height: '100%',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    embed: {
        width: '100%',
        height: '100%',
    },
    text: {
        position: 'absolute',
        top: '60%',
        left: 0,
        right: 0,
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    }
}