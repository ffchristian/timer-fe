export type ITheme = {
    body: string,
    text: string,
    toggleBorder: string,
    background: string,
    buttonColor: string
}
export const lightTheme: ITheme = {
    body: '#FFF',
    text: '#363537',
    toggleBorder: '#FFF',
    background: 'linear-gradient(#39598A, #79D7ED)',
    buttonColor: '#363537',
}

export const darkTheme: ITheme = {
    body: '#363537',
    text: '#FAFAFA',
    toggleBorder: '#6B8096',
    background: '#999',
    buttonColor: '#FFF',
}