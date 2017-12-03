The withTheme higher order component is the best way to use React-able themes in your own React components. It tracks updates to your theme config and re-renders your components as needed. Theme attributes are passed to your components via a `reactAbleTheme` prop. Using this or the themer directly allows you to share a theme across react-able components and your own components.

If you'd like to change the theme, you'll need to import `themer` from reactable and set it there.

Class with decorator style
```js static
  import React, { Component } from 'react-able'
  import { withTheme } from 'react-able'

  @withTheme
  class MyComponent extends Component {
    render() {
      <p style={{ color: this.props.reactAbleTheme.color.action }}>
        Hi!
      </p>
    }
  }

  export default MyComponent
```

Functional style
```js static
import { withTheme } from 'react-able'

const MyComponent = props => {
  return (
    <p style={{ color: props.reactAbleTheme.color.action }}>
      Hi!
    </p>
  )
}

export default withTheme(MyComponent)
```
