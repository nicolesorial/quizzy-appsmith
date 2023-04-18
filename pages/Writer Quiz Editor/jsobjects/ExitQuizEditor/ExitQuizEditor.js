export default {
	exitQuizEditor() {
		navigateTo("Writer Dashboard")
		removeValue("current_quiz_id")
		console.log("Current quiz id" + appsmith.store.current_quiz_id)
	}
}