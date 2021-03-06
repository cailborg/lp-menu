## A Stripe-style animated navbar menu
Built with React, [Styled Components](https://www.styled-components.com/), and [React-Flip-Toolkit](https://github.com/aholachek/react-flip-toolkit).

### Details

This animation demo explores how one might recreate [Stripe's animated menu](https://stripe.com/) in React.

In order to keep the example as simple as possible, it focuses mainly on the animation aspect and therefore is not WAI-ARIA compliant. (Take a look at Stripe's full implementation for what seems to be a fully accessible nav menu component.)

There are multiple ways one could implement this animation, each with its own tradeoffs. This demo is particularly focused on developer ease of use.


### Files changed

> `AnimatedNavbar.js` The parent component

> `DropdownContainer/Components.js` Restyled some of the components here for our simplified nav

> `DropdownContents/` Added the content for each nav item here

> `index.css` Added brand font files