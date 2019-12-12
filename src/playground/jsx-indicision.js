console.log("App.js is running")

const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hand of a computer",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        reRenderComponents()
    }

};

const removeAll = () => {
    app.options = []
    reRenderComponents()
}

const onMakeDecision = () => {
    const randomNumber = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNumber]
    alert(option)
}

const appRoot = document.getElementById("app")

const reRenderComponents = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here Are Your Options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>what should i do?</button>
            <button disabled={app.options.length === 0} onClick={removeAll}>Remove All</button>
            <ol>
                {
                    app.options.map(option => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot)
}


reRenderComponents()