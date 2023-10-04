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

const traerDatosDeAPI = (endpoint) => {
    const url = `https://reqres.in/api/users${endpoint}`;
    return fetch(url)
            .then(datos => datos.json())
            .then(({data}) => data)
            .then(results => results.map((persona) => {
                const {avatar, id, ...resto} = persona;
                return {
                    name: generarNombre(resto),
                    avatar,
                    id
                }
            }))
    }

const traerPersonaDeAPI = (id) => {
    return fetch(`https://reqres.in/api/users/${id}`)
            .then(algo => algo.json())
            .then(({data}) => data)
}

const crearCard = ({avatar, id, name}) =>
`<div class="card" person-id="${id}">
<div class="card-content">
    <div class="media">
        <div class="media-left">
            <figure class="image is-48x48">
                <img src="${avatar}" alt="Placeholder image">
            </figure>
        </div>
        <div class="media-content">
            <p class="title is-4">${name}</p>
        </div>
    </div>
</div>
</div>`

const content = document.getElementById('content');

const renderizarPagina = async () => {    
    const primeraPagina = await traerDatosDeAPI('?page=1');
    const segundaPagina = await traerDatosDeAPI('?page=2');

    const personas = [...primeraPagina, ...segundaPagina];

    const template = personas.map(person => crearCard(person)).join('')
    content.innerHTML = template
}

const renderizar = async () => {
    await renderizarPagina();
    const card = document.querySelectorAll('.card')

    card.forEach((persona) => {
        persona.addEventListener('click', (event) => {
            const id = event.currentTarget.getAttribute('person-id');
            traerPersonaDeAPI(id)
                .then((data) => console.log(data))
        })
    })
}

renderizar();