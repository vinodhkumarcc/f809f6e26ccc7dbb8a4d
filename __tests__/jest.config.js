const { withEnzyme} = require('jest-expo-enzyme');

export default {
	projects: [
		withEnzyme(require('jest-expo/android/jest-preset')),
		withEnzyme(require('jest-expo/ios/jest-preset')),
		withEnzyme(require('jest-expo/web/jest-preset'))
	]
}