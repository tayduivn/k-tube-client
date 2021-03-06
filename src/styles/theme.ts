/* eslint-disable functional/prefer-type-literal */
import { DefaultTheme } from 'styled-components';
import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        readonly borderRadius: string;
        readonly mainPadding: string;
        readonly colors: {
            readonly primary: {
                readonly main: string;
                readonly light: string;
                readonly dark: string;
            };
            readonly secondary: {
                readonly main: string;
                readonly light: string;
                readonly dark: string;
            };
            readonly accent: {
                readonly main: string;
                readonly light: string;
                readonly dark: string;
            };
            readonly neutral: {
                readonly main: string;
                readonly dark: string;
                readonly darker: string;
                readonly light: string;
                readonly lighter: string;
                readonly lightest: string;
            };
            readonly sections: {
                readonly mainBackground: string;
            };
            readonly text: {
                readonly primary: {
                    readonly main: string;
                    readonly light: string;
                    readonly dark: string;
                };
            };
        };
        readonly components: {
            readonly navBar: {
                readonly smHeight: string;
                readonly mdHeight: string;
            };
            readonly container: {
                readonly md: string;
            };
        };
        readonly deviceBreakpoints: {
            readonly mobileL: string;
            readonly tablet: string;
            readonly laptop: string;
            readonly desktop: string;
        };
    }
}

export const mainTheme: DefaultTheme = {
    borderRadius: '8px',
    mainPadding: '16px',
    colors: {
        primary: {
            main: '#FE6437',
            light: 'white',
            dark: 'white',
        },
        secondary: {
            main: 'white',
            light: 'white',
            dark: 'white',
        },
        accent: {
            main: '#FF4757',
            light: '#FF4757',
            dark: 'white',
        },
        neutral: {
            main: '#707070',
            dark: 'white',
            darker: 'white',
            light: 'white',
            lighter: 'white',
            lightest: 'white',
        },
        sections: {
            mainBackground: '#131416',
        },
        text: {
            primary: {
                main: '#707070',
                light: '#f1f1f1',
                dark: '#919191',
            },
        },
    },
    components: {
        navBar: {
            smHeight: '56px',
            mdHeight: '64px',
        },
        container: {
            md: '768px',
        },
    },
    deviceBreakpoints: {
        mobileL: '(min-width: 425px)',
        tablet: '(min-width: 768px)',
        laptop: '(min-width: 1024px)',
        desktop: '(min-width: 1440px)',
    },
};
