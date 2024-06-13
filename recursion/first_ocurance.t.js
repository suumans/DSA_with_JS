import { recursiveFirstOcc } from "./first_occurance.js";

describe('recursiveFirstOcc', () => {
    it('should return the index of the first occurrence of the element', () => {
      const arr = [1, 2, 3, 4, 5];
      const findMe = 3;
      const expectedIndex = 2;
      const result = recursiveFirstOcc(arr, findMe, 0);
      expect(result).toBe(expectedIndex);
    });
  
    it('should return -1 if the element is not found', () => {
      const arr = [1, 2, 3, 4, 5];
      const findMe = 6;
      const result = recursiveFirstOcc(arr, findMe, 0);
      expect(result).toBe(-1);
    });
  
    it('should handle empty arrays', () => {
      const arr = [];
      const findMe = 1;
      const result = recursiveFirstOcc(arr, findMe, 0);
      expect(result).toBe(-1);
    });
  
    it('should handle arrays with only one element', () => {
      const arr = [1];
      const findMe = 1;
      const result = recursiveFirstOcc(arr, findMe, 0);
      expect(result).toBe(0);
    });
  
    it('should handle arrays with multiple occurrences of the element', () => {
      const arr = [1, 2, 3, 3, 3, 4, 5];
      const findMe = 3;
      const expectedIndex = 2;
      const result = recursiveFirstOcc(arr, findMe, 0);
      expect(result).toBe(expectedIndex);
    });
  });