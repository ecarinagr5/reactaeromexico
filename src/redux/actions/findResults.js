
export const type = 'FIND_RESULTS';

const findResults = text => {
    return {
        type,
        action: text.origin,
    };
};

export default findResults