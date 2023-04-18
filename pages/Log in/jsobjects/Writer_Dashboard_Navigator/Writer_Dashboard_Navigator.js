export default {
	setWriterId () {
		storeValue("writer_id", Select1.selectedOptionValue)
		storeValue("updatePayload", {})
		storeValue("updateQuestionPayload", {})
		storeValue("updateOptionPayload", {})
		navigateTo("Writer Dashboard", "SAME WINDOW")
	}
}