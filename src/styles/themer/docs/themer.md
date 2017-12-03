The Themer allows you to set and get the current theme being used by React-able.
It's used by the React-able components internally, but can be used to theme
external components along side React-able components.

To get a value from the Themer:

```js static
import themer from 'react-able'

themer.get('colors', 'primaryForeground') // returns #43B02A if using default themer
```

To set a value in the Themer:

```js static
import themer from 'react-able'

themer.set('colors', 'primaryForeground', '#000')
themer.get('colors', 'primaryForeground') // returns #000
```

To set the entire Themer config:

```js static
import themer from 'react-able'

themer.themeConfig = {
  colors: {
    action: '#ededed',
    primaryBackground: '#ccc',
    primaryForeground: 'red',
    secondaryBackground: 'rgba(255, 255, 255, 5)',
    secondaryForeground: '#ff3355',
  }
}

themer.get('colors', 'primaryForeground') // returns red
themer.get('colors', 'action') // returns #ededed
```

Themes will be validated before being set, and must match the theme config
template found in `src/styles/themer/utils`

```js static
import themer from `react-able`

themer.themeConfig = {
  colors: {
    action: '#ededed',
    primaryBackground: '#ccc',
    primaryForeground: 'red',
    secondaryBackground: 'rgba(255, 255, 255, 5)',
    secondaryForeground: '#ff3355',
    whatever:'i am special'
  },
  things: 'stuff'
}

// console errors non-standard keys.

console.log(themer.themerConfig)
/*
bad keys will not be set
{
  colors: {
    action: '#ededed',
    primaryBackground: '#ccc',
    primaryForeground: 'red',
    secondaryBackground: 'rgba(255, 255, 255, 5)',
    secondaryForeground: '#ff3355'
  }
}
*/
```

To get the entire Themer config:

```js static
import themer from 'react-able'

themer.themeConfig // return entire config object
```
