export function getLanguage() {
  const browserLanguage = navigator.language || navigator.userLanguage;

  if (browserLanguage.startsWith("hi")) {
    return "hi";
  }

  return "en";
}