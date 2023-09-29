class SeriesApp {
    series = [];

    addSerie(serie) {
        this.series.push(serie);
    }
    getSeries() {
        return this.series;
    }

    generarLista() {
        return this.getSeries().map(serie => (
            `<div class="serie card">
                <p>Título: ${serie.getTitle()}</p>
                <p>Año: ${serie.getYear()}</p>
            </div>`)
            ).join('')
    }

}