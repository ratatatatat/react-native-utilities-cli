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
    };

    static args = {
        directory: Args.string(
            {
                description: 'Fullpath to react-native project directory.',
                required: true
            }),
    }

    async run() {
        const { args, flags } = await this.parse(Initialize);
        const { directory } = args;
        createScaffolding(directory);
        setupRedux(directory);
        installRedux(directory);
        await createApp(directory);
    }
}
