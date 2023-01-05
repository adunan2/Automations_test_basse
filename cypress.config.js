const { defineConfig } = require('cypress')
const fs = require('fs') 
const getFiles = (path) => { 
  return fs.readdirSync(`${__dirname}/${path}`) 
} 

module.exports = defineConfig({
  e2e: {
    supportFile: false,
    baseUrl: 'http://localhost:3000/auth/login',
    setupNodeEvents(on, config) {
      on('task', {
        'downloads' (path) { 
          return getFiles(path) 
          
        } 
      })
    }
  },
})