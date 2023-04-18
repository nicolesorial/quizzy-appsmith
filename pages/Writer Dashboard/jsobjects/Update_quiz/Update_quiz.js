export default {
  async updateQuiz() {
		await Update_quiz_id.run()
		Get_writer_quizzes.run()
		storeValue("updatePayload", {})
	}
}