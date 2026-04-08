import { MOCK_USERS, User } from "./data";

// In a real app, this would use NextAuth.js or similar
// For this demo, we simulate a session by returning a mock user
let currentUser = MOCK_USERS[2]; // Default to TRAINER (Kumar J.)

export function getCurrentUser(): User {
  return currentUser;
}

export function setCurrentUser(id: string) {
  const user = MOCK_USERS.find(u => u.id === id);
  if (user) {
    currentUser = user;
  }
}
