export default {
	setWriterId () {
		storeValue("writer_id", Select1.selectedOptionValue)
		storeValue("updatePayload", {})
		navigateTo("Writer Dashboard", "SAME WINDOW")
	}
}