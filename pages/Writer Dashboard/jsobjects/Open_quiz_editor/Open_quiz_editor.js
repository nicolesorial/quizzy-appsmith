export default {
	openEditor() {
		var quiz_id = Table1.triggeredRow.id
		storeValue("current_quiz_id", quiz_id)
		console.log("Current quiz id" + appsmith.store.current_quiz_id)
		navigateTo('Writer Quiz Editor')
	}
}