module.exports = (api, options, rootOptions) => {
    api.render(
        './template',
        {
            date: options.date,
            project: rootOptions.projectName,
        }
    );
};
