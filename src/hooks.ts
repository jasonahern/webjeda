export const getSession = (request: string) => {
    console.log(request);
    return {
        user: {
            id: '1234',
            name: 'Jason',
            access: 'ad'
        }
    }
}