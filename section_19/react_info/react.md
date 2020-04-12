# React

    - a 'view' library
    - dom manipulation
    - uses JSX which is an HTML type language.
    - It only changes what needs to be changed in the virtual DOM without having to re render the whole page whenever
      some smaller component changes.
    - when using an 'exported const' that is maybe an array of multiple values, you must destructure it within index.js
    - Using...
        import React, {Fragment} from "react";
            <Fragment>
            </Fragment>
            or even...
            <>
            </>

        Using Fragment from React you can wrap the contents of your component and make sure it is always returning one thing to avoid errors.
    - Whenever you make your own methods off of your components use the arrow function syntax.

# Libraries paired with React

    - tachyons: like bootstrap, you can use tachyons to give css styles via classNames.
        - npm i tachyons
