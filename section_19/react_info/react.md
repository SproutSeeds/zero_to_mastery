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
    - If a component has State then it is called a Smart component.
    - LifeCycle Components
        - These trigger when the app gets loaded to the website.
            - Mounting
                - Does the component have a constructor? yes? Then run constructor() code.
                - Does it have static getDerivedStateFromProps()? no? Then ignore it.
                - Does it have render()? Yes? Then run the render method.
                - Does it have componentDidMount()? no? then ignore it.
            - Updating : (whenever a component changes)
                - static getDerivedStateFromProps()?
                - shouldComponentUpdate()?
                - render()
                - getSnapShotBeforeUpdate()?
                - componentDidUpdate()?
            - Unmounting
                - componentWillUnmount()?
            - ERROR HANDLING
                - static getDerivedStateFromError()?
                - componentDidCatch()?
        - LIFECYCLE EXAMPLE FLOW
            1. constructor()
            2. render()
            3. mounting()
                - setState()
            4. render()
    - Updating a Project
        - clone repo if you dont have it yet.
        - 'npm install' to update all the required package dependencies.
        - 'npm audit fix' to audit the warnings
        - 'npm update' to update to the highest version in the minor release(xx) ^16.xx.2
           - if and only if there is a '^' in front of the semantic versioning number.
        - 'npm audit fix --force' before running this to fix the packages review all of the updated changes you are adding.
        - 

# Libraries paired with React

    - tachyons: like bootstrap, you can use tachyons to give css styles via classNames.
        - npm i tachyons
