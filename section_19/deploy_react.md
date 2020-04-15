# Deploying React Project

    - step by step guide for deploying on gh-pages
        - https://create-react-app.dev/docs/deployment/#github-pages-https-pagesgithubcom

# Steps listed on website above ^

    1. add "homepage": <link to the head of your project>
        ie.
            https://github.com/SproutSeeds/zero_to_mastery_web_1/tree/master/section_19/robofriends
    2. npm install --save gh-pages
    3. add "predeploy": "npm run build","deploy": "gh-pages -d build" to your scripts in your package.json
    4. npm run deploy
