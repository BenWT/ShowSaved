import rawjs from 'raw.js'

const LIMIT = 100

const getUrl = url => {
    if (url.includes('imgur')) {

        // https://api.imgur.com/3/image/{id}

        // fetch(`https://api.imgur.com/3/image/${}`)
        return url
    } else if (url.includes('gfycat')) {
        let temp = url.split('https://gfycat.com/')
        console.log(temp)
        return `https://gfycat.com/ifr/${temp[1]}`
    } else {
        return url
    }
}

const getType = url => {
    if (url.includes('gfycat')) return 'embed'
    if (url.includes('.gifv')) return 'embed'
    else return 'image'
}

export default app => {
    let reddit = new rawjs("Show Saved")
    reddit.setupOAuth2(
        "0pF4cMXwlYhQ5A",
        "0eYax_6OBrS3KTwq6tpfdg47OjU",
        "http://www.example.com/redditoauth"
    )

    reddit.auth({
        username: "bentowny96",
        password: "Neb96neb*"
    }, async (err, response) => {
        if (err) {
            console.log("Unable to authenticate user: " + err);
        } 
    })

    app.get('/saved', (req, res) => {
        reddit.userSaved({ user: 'bentowny96', limit: LIMIT }, (err, response) => {
            if (err) {
                res.json()
            } else {
                let post = undefined
    
                while (post === undefined) {
                    let temp = response.children[parseInt(Math.random() * LIMIT)].data

                    console.log(temp)
    
                    if (temp !== undefined) {
                        if (temp.is_video) {
                            if (temp.media.reddit_video.fallback_url !== undefined) {
                                post = {
                                    url: temp.media.reddit_video.fallback_url,
                                    title: temp.title,
                                    type: 'embed'
                                }
                            }
                        } else {
                            if (
                                (temp.url.includes('v.redd.it') && (
                                    temp.url.includes('.png') ||
                                    temp.url.includes('.jpg') ||
                                    temp.url.includes('.jpeg') ||
                                    temp.url.includes('.gif')
                                ) ) ||
                                !temp.url.includes('v.redd.it')
                            ) {
                                post = {
                                    url: getUrl(temp.url),
                                    title: temp.title,
                                    type: getType(temp.url),
                                }
                            }
                        }
                    }
                }
    
                res.json({ ...post })
            }
        })
    })
}