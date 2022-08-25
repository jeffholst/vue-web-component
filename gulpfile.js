const gulp = require('gulp')
const fs = require('fs')
const jsdom = require('jsdom')
const pjson = require('./package.json')
const simpleGit = require('simple-git')

const git = simpleGit()

const { JSDOM } = jsdom

async function copyFilesToDist(cb) {
  // copy style.css (identical) and index.html(modified) to dist folder
  console.log('Copying to Dist...')
  fs.copyFileSync('./src/style.css', './dist/style.css') // identical file copied

  const data = fs.readFileSync('./src/index.html', 'utf8') // modified file copied
  const dom = new JSDOM(data)

  // update document title with 'title' value from package.json
  const titleComment = dom.window.document.createComment(
    `<title> modified by gulp during build`
  )
  const title = dom.window.document.head.querySelector('title')
  title.parentNode.insertBefore(titleComment, title)
  title.innerHTML = pjson.title

  // add Vue link to head for vue.js
  const vueScript = dom.window.document.createElement('script')
  vueScript.setAttribute(
    'src',
    'https://unpkg.com/vue@3.2.37/dist/vue.global.prod.js'
  )
  const vueComment = dom.window.document.createComment(
    'added by gulp during build'
  )
  dom.window.document.head.appendChild(vueComment)
  dom.window.document.head.appendChild(vueScript)

  // update script tag to use library package
  const scriptComment = dom.window.document.createComment(
    'modified by gulp during build'
  )
  const scriptTag = dom.window.document.querySelector('[data-id="scriptFile"]')
  scriptTag.parentNode.insertBefore(scriptComment, scriptTag)
  scriptTag.type = 'text/javascript'
  scriptTag.src = `${pjson.name}.umd.js`

  // write modifed index.html to dist folder
  fs.writeFileSync(
    './dist/index.html',
    dom.window.document.documentElement.outerHTML
  )
  cb()
}

async function gitHubPages(cb) {
  console.log('Deploying to GitHub Pages...')
  await git.checkout('github-pages')
  await git.merge('main')
  //await git.push('origin', 'github-pages')
  await git.checkout('main')
  cb()
}

exports.copyFilesToDist = gulp.series(copyFilesToDist)
exports.gitHubPages = gulp.series(gitHubPages)
