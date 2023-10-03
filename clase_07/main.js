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
                const {email, avatar, id, ...resto} = persona;
                return {
                    name: generarNombre(resto),
                    email,
                    avatar,
                    id
                }
            }))
    }

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

renderizarPagina();