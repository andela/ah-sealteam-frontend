export const dateTimeParser = dateString => {
    const dateTime = new Date(dateString);
    const dateOnly = dateTime.toUTCString();
    return dateOnly;
};
