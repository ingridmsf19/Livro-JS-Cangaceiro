class Bind {
    constructor(model, view, ...props) {
        const proxy = proxyFactory.create(model, props, model => {
            view.update(model)
        });
        view.update(model);

        return proxy;
    }
}