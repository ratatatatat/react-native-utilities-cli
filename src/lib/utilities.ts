import * as fs from 'fs';
import * as path from 'path';
import * as child_process from 'child_process';

export const createComponent = async (baseDir: string, componentName: string) => {
    const fullPath = path.join(baseDir, `./src/components/${componentName}.tsx`);
    const content = getComponentContent(componentName);
    fs.writeFileSync(fullPath, content, { encoding: 'utf-8' });
}

const getComponentContent = (componentName: string): string => {
    return `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
    },
});

interface ${componentName}Props {
}

const ${componentName} = (props: ${componentName}Props) => {
    return (
        <View
            style={styles.container}
        >
            <Text>${componentName}</Text>
        </View>
    );
};

export default ${componentName};

`;
}

export const createScaffolding = (baseDir: string) => {
    const directories = [
        './src',
        './src/redux',
        './src/redux/slices',
        './src/screens',
        './src/components',
        './src/lib',
        './src/brand',
    ];
    const fullDirectories = directories.map(dir => path.join(baseDir, dir));
    createDirectoriesIfNotExist(fullDirectories);
};

const createDirectoriesIfNotExist = (directories: string[]) => {
    for (const dir of directories) {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
            console.log(`Directory created: ${dir}`);
        } else {
            console.log(`Directory already exists: ${dir}`);
        }
    }
};

export const installRedux = (baseDir: string) => {
    const reduxPackages = [
        '@reduxjs/toolkit',
        'react-redux',
    ];
    const reduxDevPackages = [
        '@types/react-redux',
    ];
    const reduxPackagesToInstall = reduxPackages.map(pkg => `${pkg}@latest`);
    const reduxDevPackagesToInstall = reduxDevPackages.map(pkg => `${pkg}@latest`);
    const reduxPackagesToInstallString = reduxPackagesToInstall.join(' ');
    const reduxDevPackagesToInstallString = reduxDevPackagesToInstall.join(' ');
    const command = `cd ${baseDir} && npm install ${reduxPackagesToInstallString} && npm install -D ${reduxDevPackagesToInstallString}`;
    console.log(`Running command: ${command}`);
    const execSync = child_process.execSync;
    execSync(command, { stdio: 'inherit' });
}

export const setupRedux = (baseDir: string) => {
    const baseslices = [
        'signup',
        'login',
        'logout',
        'forgotpassword',
    ];
    setupReduxSlices(baseDir, baseslices);
    const reduxStoreFile = path.join(baseDir, './src/redux/store.ts');
    const reduxStoreContent = getStoreFileContent(baseslices);
    fs.writeFileSync(reduxStoreFile, reduxStoreContent, { encoding: 'utf-8' });
}

const getStoreFileContent = (slices: string[]): string => {
    return `import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
${slices.map(slice => `import ${slice} from './slices/${slice}';`).join('\n')}

export const store = configureStore({
    reducer: {
        ${slices.join(',\n')}
    },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

`
}

const setupReduxSlices = (baseDir: string, baseslices: string[]) => {
    baseslices.forEach(slice => {
        const sliceFile = path.join(baseDir, `./src/redux/slices/${slice}.ts`);
        const sliceContent = getSliceFileContent(slice);
        fs.writeFileSync(sliceFile, sliceContent, { encoding: 'utf-8' });
    });
};

const getSliceFileContent = (slice: string): string => {
    return `import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {RootState, AppThunk} from '../store';
export interface ${slice}State {
}
const initialState: ${slice}State = {
};
export const ${slice}Slice = createSlice({
    name: '${slice}',
    initialState,
    reducers: {
    },
});
export default ${slice}Slice.reducer;    
`;
}
