export function getStoreStatus() {
  const currentHour = new Date().getHours();

  return currentHour >= 8 && currentHour < 21;
}

export function getGreeting() {
  const currentHour = new Date().getHours();

  if (currentHour >= 5 && currentHour < 12) {
    return "🌅 Good Morning";
  }

  if (currentHour >= 12 && currentHour < 17) {
    return "☀️ Good Afternoon";
  }

  if (currentHour >= 17 && currentHour < 21) {
    return "🌇 Good Evening";
  }

  return "🌙 Good Night";
}