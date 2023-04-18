export default {
  async updateQuiz() {
		await Update_quiz_by_id.run()
		Get_writer_quizzes.run()
		storeValue("updatePayload", {})
	}
}