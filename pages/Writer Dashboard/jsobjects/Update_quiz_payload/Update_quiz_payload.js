export default {
	updateQuizPayload(label, value) {
		var payload = appsmith.store.updatePayload
		if (payload instanceof String) {
			payload = JSON.parse(payload)
		}
		payload[label] = value
		storeValue("updatePayload", payload)
		Table1.updatedRowIndices = []
	}
}