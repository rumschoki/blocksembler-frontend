import { AndInstruction, InsperHackInstructionFactory } from "@/architectures/insperHack/instructions";
import {expect, test, vi} from "vitest";
import {Word} from "@/architectures/system.js";

//and
test("Test 1: and-instruction to machine code", () => {
    let instruction = new AndInstruction(['%A', '%D', '%D']);
    // 111 a cccccc ddd jjj
    let expectedCode = '111' + '0' + '000000' +'010' + '000';

    expect(instruction.toMachineCode()).toBe(expectedCode);
});

test("Test 2: creating and-instruction from mnemonic", () => {
    let factory = new InsperHackInstructionFactory();

    let inst = factory.createFromMnemonic("and", ['%A', '%D', '%D']);
    let expected = new AndInstruction(['%A', '%D', '%D']);

    expect(inst).toMatchObject(expected);
});

test("Test 3: and two registers and store to destination register", () => {
    let pcWord = Word.fromSignedIntValue(0);
    let regAWord = Word.fromString("1010101010101010");
    let regDWord = Word.fromString("0000000000001111");

    let emulator = {
        registers: {
            'pc': pcWord,
            '%A': regAWord,
            '%D': regDWord,
        },
    };

    let instruction = new AndInstruction(['%A', '%D', '%D']);

    instruction.executeOn(emulator);

    expect(regAWord.toSignedIntValue()).toBe(10);
    expect(regDWord.toSignedIntValue()).toBe(15);
});

test("Test 4: and two registers and store to destination register", () => {
    let pcWord = Word.fromSignedIntValue(0);
    let regAWord = Word.fromSignedIntValue(0);
    let regDWord = Word.fromString("0000000000001111");

    let emulator = {
        registers: {
            'pc': pcWord,
            '%A': regAWord,
            '%D': regDWord,
        },
        memory: [Word.fromString("1010101010101010")],
    };

    let instruction = new AndInstruction(['(%A)', '%D', '%D']);

    instruction.executeOn(emulator);

    expect(regAWord.toSignedIntValue()).toBe(0);
    expect(regDWord.toSignedIntValue()).toBe(15);
});
