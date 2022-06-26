import type {GetSession, Handle, RequestEvent} from '@sveltejs/kit'

export const handle: Handle = async ({event, resolve}) => {

    event.locals.user = "Ahern";
    const response = await resolve(event);
    //console.log(response);
    return response;
}


export const getSession: GetSession = (request) => {
    //console.log(request);
    const name = request.locals.user;
    console.log(name);
    return {
        user: {
            id: '1234',
            name: name,
            access: 'ad'
        }
    }
}