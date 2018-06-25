module.exports = {
    "extends": "airbnb",
    "plugins":[
        "react",    
        "react-native"
    ],
  
      "rules": {
        "no-use-before-define": ["error", { "variables": false }],
        "react/prop-types": [2, {"functions": false, "classes": false }],
        "linebreak-style": 0,
        
      }, 
      "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },


};