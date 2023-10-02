// Funciones
const generarNombre = (person) => {
    return `${person.first_name} ${person.last_name}`
}

const crearPersona = (person) => {
    const {age, ...other} = person;
    return {
        age,
        name: generarNombre(other)
    }
}

const traerDatosDeAPI = () => {
    const url = "https://reqres.in/api/users";
    return fetch(url)
            .then(datos => datos.json())
            .then(({data}) => data)
            .then(results => results.map((persona) => {
                const {email, avatar, ...resto} = persona;
                return {
                    name: generarNombre(resto),
                    email,
                    avatar
                }
            }))
    }

const crearCard = () => `<div class="card">
<div class="card-image">
    <figure class="image is-4by3">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
    </figure>
</div>
<div class="card-content">
    <div class="media">
        <div class="media-left">
            <figure class="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
            </figure>
        </div>
        <div class="media-content">
            <p class="title is-4">John Smith</p>
            <p class="subtitle is-6">@johnsmith</p>
        </div>
    </div>
    <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
        <a href="#">#css</a> <a href="#">#responsive</a>
        <br>
        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
</div>
</div>`

const content = document.getElementById('content');
    content.innerHTML = crearCard();



traerDatosDeAPI()
    .then(people => {
        console.log(people)
        const template = people.map(person => crearCard(person)).join('')
        content.innerHTML = template;
    })
    .catch((error) => {
        console.error(error);
        return [{firstName: 'User', lastName: 'Name', age: 21}]
    })