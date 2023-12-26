import path from "path";
import fs from "fs";
import * as child_process from 'child_process';

export const createApp = async (baseDir: string) => {
    await installNavigation(baseDir);
    const baseScreens = [ 
        'Main',
        'Landing',
        'Login',
        'Signup',
        'ForgotPassword',
        'Logout',
        'Offline',
    ]
    setupScreens(baseDir, baseScreens);
    const appFile = path.join(baseDir, './App.tsx');
    const appContent = getContentOfApp(baseScreens);
    fs.writeFileSync(appFile, appContent, { encoding: 'utf-8' });
};

const installNavigation = async (baseDir: string) => {
    const navigationPackages = [
        "@react-navigation/bottom-tabs",
        "@react-navigation/native",
        "@react-navigation/native-stack",
        "react-native-reanimated",
        "react-native-safe-area-context",
        "react-native-screens",
        "react-native-url-polyfill",
        "react-navigation",
        "react-native-encrypted-storage",
        'react-native-screens',
    ];
    const navigationPackagesToInstall = navigationPackages.map(pkg => `${pkg}@latest`);
    const navigationPackagesToInstallString = navigationPackagesToInstall.join(' ');
    const command = `cd ${baseDir} && npm install ${navigationPackagesToInstallString}`;
    console.log(`Running command: ${command}`);
    const execSync = child_process.execSync;
    execSync(command, { stdio: 'inherit' });
    //podInstall 
    const podInstallCommand = `cd ${baseDir} npx pod-install ios`;
    console.log(`Running command: ${podInstallCommand}`);
    execSync(podInstallCommand, { stdio: 'inherit' });

};

const getContentOfApp = (screens: string[]): string => {
    return `
import React from 'react';
import {Text, StyleSheet, StatusBar,} from 'react-native';
import 'react-native-url-polyfill/auto';
import {
    Provider
} from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
    NavigationContainer,
    useNavigationContainerRef,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { store } from './src/redux/store';
${
    screens.map(screen => {
        return `import ${screen} from './src/screens/${screen}';`;
    }).join('\n')
}  

${
    screens.map(screen => {
        return `import { ${screen}Route } from './src/screens/${screen}/route';`;
    }).join('\n')
}
const {Navigator, Screen} = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const activeColor = '#FFFFFF';
const inActiveColor = '#828282';

const mainBackgroundColor = '#041014';

const tabOptions = {
    activeTintColor: activeColor
    
};

const tabScreenOptions = {
    headerShown: false,
    tabBarStyle: {
        borderTopWidth: 0,
        backgroundColor: mainBackgroundColor,
    },
};

const theme = {
    dark: false,
    colors: {
        primary: 'rgb(255, 45, 85)',
        background: mainBackgroundColor,
        card: 'rgb(255, 255, 255)',
        text: 'rgb(28, 28, 30)',
        border: 'rgb(199, 199, 204)',
        notification: 'rgb(255, 69, 58)',
    },
};
const LoadedApp = () => {
    const navigationRef = useNavigationContainerRef();
    return (
        <React.Fragment>
            <SafeAreaProvider >
              <StatusBar barStyle="light-content" />
                <NavigationContainer ref={navigationRef} theme={theme}>
                    <Navigator screenOptions={{headerShown: false}}>
                        ${
                            screens.map(screen => {
                                return `<Screen name={${screen}Route} component={${screen}} />`;
                            }).join('\n')
                        }
                    </Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        </React.Fragment>
    );
};

const App = () => {
    return (
        <Provider store={store}>
            <LoadedApp />
        </Provider>
    );
};

export default App;
`
}


const setupScreens = (baseDir: string, baseScreens: string[]) => {
    baseScreens.forEach(screen => {
        fs.mkdirSync(path.join(baseDir, `./src/screens/${screen}`), { recursive: true });
        const screenFile = path.join(baseDir, `./src/screens/${screen}/index.tsx`);
        const screenContent = getScreenFileContent(screen);
        const routeFile = path.join(baseDir, `./src/screens/${screen}/route.ts`);
        const routeContent = getRouteFileContent(screen);
        fs.writeFileSync(screenFile, screenContent, { encoding: 'utf-8' });
        fs.writeFileSync(routeFile, routeContent, { encoding: 'utf-8' });
    });
};

const getScreenFileContent = (screen: string): string => {
    return `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
const ${screen} = () => {
    return (
        <View
            style={styles.container}
        >
            <Text>${screen}</Text>
        </View>
    );
};
export default ${screen};
`;
}

const getRouteFileContent = (screen: string): string => {
    return `export const ${screen}Route = "${screen.toUpperCase()}";`;
}

