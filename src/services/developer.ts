import { DeveloperData } from "../types";

export async function fetchDeveloperData(): Promise<DeveloperData> {
  const url = "https://raw.githubusercontent.com/mcpeserver/MyAPI/main/config.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data as DeveloperData;
  } catch (error) {
    console.error("Failed to fetch developer data:", error);
    // Return a safe fallback structure in case of network issues, but try our best to fetch
    return {
      name: "Gabriel",
      contact: {
        phone: "62895602592430",
        whatsapp: "62895602592430"
      },
      community: {
        name: "Forge SMP Community",
        website: "https://whatsapp.com",
        discord: "https://discord.gg"
      },
      website: {
        portfolio: "https://server-list-mu.vercel.app/"
      }
    };
  }
}
