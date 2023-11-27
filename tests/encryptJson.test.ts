import { encryptJson } from "@/app/lib/banorte";
import * as forge from "node-forge";

describe("encryptJson function", () => {
  jest.mock("node-forge");

  const mockCipher = {
    createCipher: jest.fn(),
    finish: jest.fn(),
    output: { getBytes: jest.fn() },
    start: jest.fn(),
    update: jest.fn(),
  };

  forge.cipher = mockCipher;
  forge.util.createBuffer = jest.fn();
  forge.pkcs5.pbkdf2 = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should correctly encrypt the JSON data", () => {
    const jsonData = JSON.stringify({ key: "value" });
    forge.util.createBuffer.mockReturnValue({ getBytes: () => "" });
    forge.pkcs5.pbkdf2.mockReturnValue("mockKey");
    mockCipher.createCipher.mockReturnValue(mockCipher);
    encryptJson(jsonData);
    expect(forge.util.createBuffer).toHaveBeenCalledTimes(5);
    expect(forge.pkcs5.pbkdf2).toHaveBeenCalledTimes(1);
    expect(mockCipher.createCipher).toHaveBeenCalledTimes(1);
    expect(mockCipher.start).toHaveBeenCalledTimes(1);
    expect(mockCipher.update).toHaveBeenCalledTimes(1);
    expect(mockCipher.finish).toHaveBeenCalledTimes(1);
  });
});