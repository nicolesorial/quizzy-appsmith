export default {
  async updateQuestion() {
		console.log(appsmith.store.updateQuestionPayload)
		await Update_question_by_id.run()
		Get_quiz_questions.run()
		storeValue("updateQuestionPayload", {})
	}
}