import { Scheme, schemes } from "@/data/schemes";

export interface UserProfile {
  name: string;
  age: number;
  gender: string;
  occupation: string;
  annualIncome: number;
  state: string;
  educationLevel: string;
  category: string;
}

export interface MatchResult {
  scheme: Scheme;
  matchScore: number;
  matchReasons: string[];
}

export function findEligibleSchemes(profile: UserProfile): MatchResult[] {
  const results: MatchResult[] = [];

  for (const scheme of schemes) {
    let score = 0;
    const reasons: string[] = [];
    let disqualified = false;

    // State check
    if (scheme.states.includes("All India") || scheme.states.includes(profile.state)) {
      score += 10;
      if (scheme.states.includes(profile.state)) {
        reasons.push(`Available in ${profile.state}`);
        score += 5;
      }
    } else {
      disqualified = true;
    }

    // Age check
    if (scheme.minAge && profile.age < scheme.minAge) disqualified = true;
    if (scheme.maxAge && profile.age > scheme.maxAge) disqualified = true;
    if (!disqualified && (scheme.minAge || scheme.maxAge)) {
      score += 15;
      reasons.push("Age criteria matched");
    }

    // Income check
    if (scheme.maxIncome && profile.annualIncome > scheme.maxIncome) disqualified = true;
    if (scheme.minIncome && profile.annualIncome < scheme.minIncome) disqualified = true;
    if (!disqualified && scheme.maxIncome) {
      score += 20;
      reasons.push("Income criteria matched");
    }

    // Gender check
    if (scheme.genders && scheme.genders.length > 0) {
      if (!scheme.genders.includes(profile.gender)) {
        disqualified = true;
      } else {
        score += 15;
        reasons.push(`For ${profile.gender} applicants`);
      }
    }

    // Occupation check
    if (scheme.occupations && scheme.occupations.length > 0) {
      if (scheme.occupations.includes(profile.occupation)) {
        score += 25;
        reasons.push(`Relevant for ${profile.occupation}s`);
      } else {
        disqualified = true;
      }
    }

    // Category check
    if (scheme.categories && scheme.categories.length > 0) {
      if (scheme.categories.includes(profile.category)) {
        score += 15;
        reasons.push(`Available for ${profile.category} category`);
      } else {
        disqualified = true;
      }
    }

    // Education check
    if (scheme.educationLevels && scheme.educationLevels.length > 0) {
      if (scheme.educationLevels.includes(profile.educationLevel)) {
        score += 10;
        reasons.push("Education level matched");
      }
    }

    if (!disqualified && score > 0) {
      if (reasons.length === 0) reasons.push("General eligibility matched");
      results.push({ scheme, matchScore: score, matchReasons: reasons });
    }
  }

  return results.sort((a, b) => b.matchScore - a.matchScore);
}
