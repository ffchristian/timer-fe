import { useEffect, useState } from 'react';
export const useDarkMode = (): [theme: string, themeToggler: () => void, mountedComponent: any] => {
    const [theme, setTheme]: [theme: string, setTheme: any] = useState('light');
    const [mountedComponent, setMountedComponent] = useState(false)
    const setMode = (mode: any) => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    };

    const themeToggler = () => {
        theme === 'light' ? setMode('dark') : setMode('light')
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        localTheme ? setTheme(localTheme) : setMode('light')
        setMountedComponent(true)
    }, []);

    return [theme, themeToggler, mountedComponent]
};