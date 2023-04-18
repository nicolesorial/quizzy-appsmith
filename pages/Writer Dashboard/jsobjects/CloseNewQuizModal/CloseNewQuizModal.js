export default {
	async closeModal() {
		closeModal('NewQuizModal')
		var quiz_id = await Create_draft_quiz.run()
		storeValue("current_quiz_id", quiz_id)
		console.log("Current quiz id" + appsmith.store.current_quiz_id)
		navigateTo('Writer Quiz Editor')
	}
}