const fontstacks = {
    primary: 'Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
    secondary: 'Roboto, sans-serif',
}

const colors = {
    primary: '#fdfdfd',
    secondary: '#696969',
    tertiary: '#262750',
    white: '#ffffff',
    black: '#000000',
    grey: '#f1f1f1', 
    lightGrey: '#f8f8f8', 
    darkGrey: '#757575',
    keyline: '#d1d1d1'
}

const spaces = [
    8,
    16,
    32,
    64,
    100,
    200,
]

const breakpoints = {
    xs: '@media only screen and (min-width: 320px)',
    sm: '@media only screen and (min-width: 540px)',
    md: '@media only screen and (min-width: 768px)',
    lg: '@media only screen and (min-width: 1084px)',
    xlg: '@media only screen and (min-width: 1367px)',
    max: '@media only screen and (min-width: 1400px)',
}

export default {
    fontstacks,
    colors,
    spaces,
    breakpoints,
}
