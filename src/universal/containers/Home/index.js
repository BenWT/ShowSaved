import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-fetch'
import injectSheet from 'react-jss'

import style from './style'

const HomeScreen = ({
    classes
}) => {
    const [ image, setImage ] = useState(null)

    useEffect(() => {
        if (image === null) {
            fetch('/saved').then(response => response.json()).then(data => {
                setImage(data)
            })
        }
    }, [image])

    // let image = null
    
    
        // data = response.json()

    // image = data.post ? data.post : null
    
    return image === null ? null : (
        <div className={classes.home}>
            { image.type === 'image' && (
                <div className={classes.image} style={{ backgroundImage: `url(${ image.url })`}}></div>
            )}
            { image.type === 'embed' && (
                <iframe className={classes.embed} src={ image.url } />
            )}

            <p className={classes.text}>{ image.title }</p>
        </div>
    )
}


export default injectSheet(style)(HomeScreen)