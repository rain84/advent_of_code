const path = require('path')

const folderName = process.argv[2]

try {
	const path2file = path.resolve(__dirname, folderName, 'index.js')
	const solution = require(path2file)
	solution.run()
} catch (error) {
	console.log('Wrong folder name')
}
