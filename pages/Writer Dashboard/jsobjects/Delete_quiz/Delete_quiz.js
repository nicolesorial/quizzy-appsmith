export default {
  async deleteQuiz() {
		storeValue("to_delete", Table1.triggeredRow.id)
		await Delete_quiz_by_id.run()
		Get_writer_quizzes.run()
	}
}