

import { currentAgeForBirthYear } from "../utils";

describe("currentAgeForBirthYear", () => {
  it("returns the age of a person based on the year of birth", () => {
    
    const birthYear = 1984;
    const currentYear = new Date().getFullYear();
    const expectedAge = currentYear - birthYear;

    
    const ageOfPerson = currentAgeForBirthYear(birthYear);

  
    expect(ageOfPerson).toBe(expectedAge);
  });

  it("returns 0 for someone born this year", () => {
    const birthYear = new Date().getFullYear();
    expect(currentAgeForBirthYear(birthYear)).toBe(0);
  });

  it("returns correct age for someone born in year 0", () => {
    const currentYear = new Date().getFullYear();
    expect(currentAgeForBirthYear(0)).toBe(currentYear);
  });
});
