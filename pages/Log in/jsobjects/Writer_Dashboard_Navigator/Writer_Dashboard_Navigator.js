export default {
	setWriterId () {
		storeValue("writer_id", Select1.selectedOptionValue)
		navigateTo("Writer Dashboard", "SAME WINDOW")
	}
}