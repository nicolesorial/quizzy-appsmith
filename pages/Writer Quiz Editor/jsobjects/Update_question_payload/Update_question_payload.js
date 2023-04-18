export default {
	updateQuestionPayload(label, value) {
		var payload = appsmith.store.updateQuestionPayload
		if (payload instanceof String) {
			payload = JSON.parse(payload)
		}
		payload[label] = value
		storeValue("updateQuestionPayload", payload)
	}
}