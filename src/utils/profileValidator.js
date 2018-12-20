export default (inputFieldName, value) => {
    let regex;
    if (inputFieldName === 'firstname') {
        regex = /[a-zA-Z]{3,}_*[0-9_]*[a-zA-Z]*_*/;
        const regex1 = value.length;
        if (regex1 > 30) return 'First Name should not be more that 30 letters';
        const outputFnError = regex.test(value)
            ? ''
            : 'First Name should have at least 3 letters';
        return outputFnError;
    }
    if (inputFieldName === 'lastname') {
        regex = /[a-zA-Z]{3,}_*[0-9_]*[a-zA-Z]*_*/;
        const regex1 = value.length;
        if (regex1 > 30) return 'Last Name should not be more that 30 letters';
        const outputLnError = regex.test(value)
            ? ''
            : 'Last Name should have at least 3 letters';
        return outputLnError;
    }
    if (inputFieldName === 'bio') {
        regex = value.split(' ').length;
        if (regex < 6) return 'Bio should be at least 6 words';
        const outputBioError =
            regex > 150 ? 'Bio should not exceed 150 words' : '';
        return outputBioError;
    }
    return '';
};
