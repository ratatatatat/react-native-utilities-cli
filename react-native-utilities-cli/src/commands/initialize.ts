import { Args, Command, Flags } from '@oclif/core';
import { createScaffolding, installRedux, setupRedux } from '../lib/utilities.js';
import { createApp } from '../lib/bootstrap.js';


export default class Initialize extends Command {
    static description = 'Initialize the project, by adding baseline screens, navigation and redux stores for the screens.';

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
                description: 'Person to say hello to',
                required: true
            }),
    }

    async run() {
        // Add your command logic here
        const { args, flags } = await this.parse(Initialize);
        const { directory } = args;
        // createScaffolding(directory);
        // setupRedux(directory);
        // installRedux(directory);
        await createApp(directory);
    }
}
