import { Command } from '@oclif/core';
export default class Component extends Command {
    static description: string;
    static examples: string[];
    static flags: {
        help: import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<void>;
    };
    static args: {
        directory: import("@oclif/core/lib/interfaces/parser.js").Arg<string, Record<string, unknown>>;
        componentName: import("@oclif/core/lib/interfaces/parser.js").Arg<string, Record<string, unknown>>;
    };
    run(): Promise<void>;
}
