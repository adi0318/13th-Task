const STORAGE_KEY = "interviewQuestions";

export function getQuestions() {
  const storedQuestions = localStorage.getItem(STORAGE_KEY);

  if (!storedQuestions) {
    return [];
  }

  return JSON.parse(storedQuestions);
}

export function saveQuestions(question) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(question));
}
