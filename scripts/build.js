const {exec} = require('child_process')
const path = require('path')
const fs = require('fs')

// get parent directory
const parentDirectory = path.resolve(__dirname, '..')
const publicDirectory = path.join(parentDirectory, 'public')
const distDirectory = path.join(parentDirectory, 'dist')

// run npm build in the parent directory
exec('sanity build', {cwd: parentDirectory}, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing npm build: ${error}`)
    return
  }
  console.log(`npm build output: ${stdout}`)
  console.error(`npm build errors: ${stderr}`)

  // copy files from public to dist
  copyFiles(publicDirectory, distDirectory)
})

function copyFiles(srcDir, destDir) {
  fs.readdir(srcDir, (err, files) => {
    if (err) {
      console.error('Error reading source directory', err)
      return
    }
    files.forEach((file) => {
      let srcFile = path.join(srcDir, file)
      let destFile = path.join(destDir, file)
      fs.copyFile(srcFile, destFile, (err) => {
        if (err) {
          console.error('Error copying file', file, err)
        }
      })
    })
  })
}
