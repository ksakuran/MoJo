
export const generateNewPrompt = function () {
  const prompts = [
    "What is something you are grateful for today?",
    "Tell me about your morning.",
    "What is one thing you can do today to make you feel good?",
    "When do you feel most in tune with yourself?",
    "What can wait until next week?",
    "What is the dominant emotion in your life right now?",
    "What is a memory you wish you could relive or go back to?",
    "Write a letter to someone you need to forgive",
    "What inspired you today?",
    "What made you smile or laugh today?"];

  const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
  return randomPrompt;
};

export default { generateNewPrompt };