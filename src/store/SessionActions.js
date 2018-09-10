import uuid from 'uuid';
import moment from 'moment';

export const createSession = (id, name, createdAt = moment().valueOf(), expiry =  moment().add(moment.duration(2, 'hours'))) => ({
        type: 'CREATE', 
        session: {
            id,
            name,
            expiry
        }
});

export const updateSession = ( id , updates   ) => ({
            type:'UPDATE',
            id,
            updates
        }
);

export const logoutSession = (id) => ({
    type:'DELETE',
    id
});