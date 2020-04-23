module.exports.getDate = function () {
    let today = new Date();
    let options = {
        weekday: "long",
        month: "long",
        day: "numeric"
    };
    const currentDate = today.toLocaleDateString("en-US", options);
    return currentDate;
};

module.exports.getDay = function () {
    let today = new Date();
    let options = {
        weekday: "long",
    };
    const currentDate = today.toLocaleDateString("en-US", options);
    return currentDate;
};
