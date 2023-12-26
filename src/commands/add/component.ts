import { Args, Command, Flags } from '@oclif/core';
import { createComponent } from '../../lib/utilities.js';

export default class Component extends Command {
    static description = 'Create a component with some boilerplate';

    static examples = [
        `$ oex initialize`,
    ];

    static flags = {
        help: Flags.help({ char: 'h' }),

        // Add any additional flags here
    };

    static args = {
        directory: Args.string(
            {
                description: 'Fullpath to react-native project directory.',
                required: true,
            }),
        componentName: Args.string(
            {
                description: 'Name of the component to create.',
                required: true
            }),
    }

    async run() {
        // Add your command logic here
        const { args, flags } = await this.parse(Component);
        const { directory, componentName } = args;
        await createComponent(directory, componentName);
    }
}
